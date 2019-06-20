var express = require('express');
var router = express.Router();
var moment =require('moment');
var sequelize = require('../services/conn');
var createError = require('http-errors');
var modals = require('../modals/sharingmaster');
var company_master = require("../modals/companymaster").company_master;
var sharing_master= require("../modals/sharingmaster").sharingmaster;




//create new


/* GET selling company. */
/*
router.get('/new/sellingcompany', (req, res, next) =>{
  res.render('newSellingCompany');
});


//POST selling company

router.post('/new/sellingcompany',(req,res,next)=>{

    var data = modals.sellingcompany.build({
        name : req.body.sellingcompanyname,
        currency : req.body.currency
    });
    data.save().then(()=>{
        res.send("selling company created successfully. <a href='/'>Go to Home</a>");
    }).catch((qerror)=>{
        next(createError(550,qerror));
    });       
});

*/

/* GET supplying company. 
router.get('/new/supplyingcompany', (req, res, next) =>{
    modals.sellingcompany.findAll({
        attributes: ['id', 'name']
    }).then((result)=>{
        res.render('newSupplyingCompany',{data:result});
    }).catch((qerror)=>{
        next(createError(550,qerror));
    });

});

  //POST selling company
router.post('/new/supplyingcompany',(req,res,next)=>{

    modals.sellingcompany.findAll({
        attributes: ['name'],
        where:{
            id:req.body.sellingcompanyid
        }
    }).then((result1)=>{
        if(result1.length==0){
            next(createError(550,"Invalid sellingcompany ID"));
        }
        else{
            var data =modals.supplyingcompany.build({
                name : req.body.supplyingcompanyname,
                currency : req.body.currency,
                selling_id : req.body.sellingcompanyid,
                selling_name : result1[0].name,
            });
            data.save().then(()=>{
                res.send("supplying company created successfully. <a href='/sharingmaster'>Go to Home</a>");
            }).catch((qerror2)=>{
                next(createError(550,qerror2));
            });


        }
    }).catch((qerror1)=>{
        next(createError(550,qerror1));
    })
});
*/

/* GET component */
router.get('/new/component', (req, res, next) =>{
    res.render('newComponent');
  });
  
  //POST selling company
router.post('/new/component',(req,res,next)=>{
    var data = modals.component.build({
        name : req.body.componentname
    });
    data.save().then(()=>{
        res.send("component created successfully. <a href='/'>Go to Home</a>");
    }).catch((qerror)=>{
        next(createError(550,qerror));
    });
  });







  //operations

/* GET home page. */

router.get('/',(req,res,next)=>{
    res.redirect('/sharingmaster/doc'); 
  });
  
  router.get('/doc',(req,res,next)=>{
    res.render('doc');
  });
  
  
  
  
  
  //get form
  
router.get('/form', function(req, res, next) {
    var id = req.query.id || null;
    var err= req.query.err || false;
    var errText = req.query.errText;  
    var msg = req.query.msg || false;
    var msgText = req.query.msgText;
    var p1 = company_master.findAll({
      where:{
        is_supplier:0
      }
    });
    var p2 =  modals.component.findAll();
    Promise.all([p1,p2]).then((values)=>{  
      if(id!=null){
        //edit form
        modals.sharingmaster.findAll({
          where:{
              id:id
          }
      }).then((result1)=>{
        if(result1.length==0){
          next(createError(550,"Invalid sharing ID"));
        }
        else{
          res.render('sharingmaster_form',{ 
            layout:false,
            sellingcompany:values[0],
            component:values[1],
            msg:msg,msgText:msgText,
            e_id:id,
            e_selling:result1[0].selling_id,
            e_supply:result1[0].supplying_id,
            e_component:result1[0].component_id,
            formdate:result1[0].fromdate,
            todate:result1[0].todate,
            min_share:result1[0].minshare,
            rule : result1[0].rule,
            value1: result1[0].value1,
            value2:result1[0].value2,
            e_post_final_purchase_entry:result1[0].post_final_purchase_entry,
            editable:true
          });
        }
      }).catch((qerror1)=>{
        next(createError(550,qerror1));
      });
    }
    else{
      res.render('sharingmaster_form',{ layout:false,sellingcompany:values[0],component:values[1],min_share:'50',msg:msg,msgText:msgText,editable:false,err:err,errText:errText });  
    }
      
    }).catch((err)=>{
      next(createError(550,err));
    });
});
  
  
  
  
  
  //get supplying company list 
router.post('/api/supplyingcompany',(req,res,next)=>{
  company_master.findAll({
      where:{
        is_supplier:1
      }
  }).then((result)=>{
    res.send(result);
  }).catch((qerror)=>{
    next(createError(550,qerror));
  });
});
  
  
  
  
  
  
//post form
  
  
router.post('/form',(req,res,next)=>{
    var ID = req.body.editID || null;
    var sellingID = req.body.selling;
    var supplyID = req.body.supply;
    var componentID = req.body.component;
    var fromdate = req.body.formdate;
    var todate = req.body.todate;
    var minshare = req.body.minshare;
    var rule = req.body.rule;
    var value1 = req.body.value1 ;
    var post_final_purchase_entry = req.body.post_final_purchase_entry;
    if(rule=="sharingpercentage"){
      var value2 = 100 - req.body.value1; 
    }
    else{
      var value2 =null; 
    }
    
    var p1 = company_master.findAll({
      where:{
          id:sellingID
      }
    });
    var p2 = company_master.findAll({
      where:{
          id:supplyID
      }
    });
    var p3 = modals.component.findAll({
      where:{
          id:componentID
      }
    });

    var p4 = sequelize.query(`CALL Adansa.ra_sharing_master_validation(${sellingID},${supplyID},${componentID},'${fromdate}','${todate}')`)


    Promise.all([p1,p2,p3,p4]).then((values)=>{
      var sellingName = values[0][0].name;
      var supplyName = values[1][0].name;
      var componentName = values[2][0].name;

      if(values[3][0].is_exist==0 || values[3][0].is_exist==undefined){
        if(ID==null){
            var tempdata = modals.sharingmaster.build({
              selling_id : sellingID,
              selling_name : sellingName,
              supplying_id : supplyID,
              supplying_name : supplyName,
              component_id : componentID,
              component_name : componentName,
              fromdate : fromdate,
              todate : todate,
              minshare : minshare,
              rule : rule,
              value1 : value1,
              value2: value2,
              post_final_purchase_entry:post_final_purchase_entry
            });
            tempdata.save().then(()=>{
              res.redirect('/sharingmaster/form?msg=true&msgText=Data saved');
            }).catch((qerror)=>{
              next(createError(550,qerror));
            });
            
          }
          else{
            modals.sharingmaster.findAll({
              where:{
                id:ID
              }
            }).then((result2)=>{
              result2[0].update({
                selling_id : sellingID,
                selling_name : sellingName,
                supplying_id : supplyID,
                supplying_name : supplyName,
                component_id : componentID,
                component_name : componentName,
                fromdate : fromdate,
                todate : todate,
                minshare : minshare,
                rule : rule,
                value1 : value1,
                value2:value2,
                post_final_purchase_entry:post_final_purchase_entry
              }).then(()=>{
                res.redirect('/sharingmaster/form?msg=true&msgText=Data updated');
              }).catch((qerror3)=>{
                next(createError(550,qerror3));
              });
            }).catch((qerror2)=>{
              next(createError(550,qerror2));
            });
          }
      }
      else{
        // console.log(values[3][0])
        res.redirect('/sharingmaster/form?err=true&errText=Sharing Master Component already exist!');
      }
      
    }).catch((err)=>{
      next(createError(550,err));
    });
});
  
  
  

  
  //delete an item
router.get('/form/delete/:id',(req,res,next)=>{
    var id = req.params.id;
    sequelize.query('DELETE FROM sharingmaster WHERE id='+id).then((result1)=>{
      res.redirect('/sharingmaster/data/1/1');
    }).catch((qerror)=>{
      next(createError(550,qerror));
    });
});
  







//table
router.get('/data/',(req,res,next)=>{
    res.redirect('/sharingmaster/data/1/1');   
});



router.get('/data/:supplyingID/:componentID',(req,res,next)=>{
    var supplyingID = req.params.supplyingID;
    var componentID = req.params.componentID;
    var p1 = modals.sharingmaster.findAll({
      where:{
          supplying_id:supplyingID,
          component_id:componentID
      }
    });
    var p2 =company_master.findAll({
      attributes: ['id', 'name'],
      where:{
        is_supplier:1
      }
    });
    var p3 = modals.component.findAll({
      attributes: ['id', 'name']
    });
    Promise.all([p1,p2,p3]).then((values)=>{
        res.render('sharingmaster_table',{layout:false,data:values[0], supply:values[1], component:values[2],active:supplyingID,activeSub:componentID});
    }).catch((err)=>{
      next(createError(550,err));
    });
  });














module.exports = router;
