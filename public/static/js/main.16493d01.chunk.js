(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports=a(248)},173:function(e,t,a){},234:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),s=a.n(i),o=a(40),r=a(53),c=a(59),m=a(54),E=a(60),u=a(75),d=a(47),p=a(76),N=a(146),f=a(77),_=a.n(f),g=(a(115),a(173),a(104)),h=a(249),v=a(250),C=a(254),S=a(251),O=a(253),I=a(145),R=a(12),T=a.n(R),A=new function e(){Object(o.a)(this,e),this.get=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise(function(t,a){_.a.get("/"+e).then(function(e){t(e)}).catch(function(e){a(e)})})},this.post=function(e,t){return new Promise(function(a,n){_.a.post("/"+e,t).then(function(e){a(e)}).catch(function(e){n(e)})})}},y=g.a.Option,b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={name:"",modalVisible:!1,suppliers:[],activeInitial:{},countries:[],isEdit:!1,hasErr:!1,currencies:[],RA_REFERENCE:"",agents:[],activeRowIndex:-1,formData:{OVER_ALL_DISCOUNT:0,TOTAL_TAX_CALCULATION:0,OVER_ALL_LOSS:0,OVER_ALL_PROFIT:0},dynamic:[],totalTax:0,totalDiscount:0,totalCost:0,dynamic_formData:{SERVICE_CATEGORY:"",PRODUCT_NAME:"",PER_SERVICE_WISE_SUPPLIER_NAME:"",COMPONENTS_WISE_SELLING_COST:"",PER_SERVICE_SUPPLIER_CODE:"",SERVICE_COUNTRY:""}},a}return Object(E.a)(t,e),Object(r.a)(t,[{key:"getAgentCode",value:function(e,t){var a=this;t.length>=3?A.get("api/customer/search?search="+t).then(function(n){if(200===n.status){console.log(n.data);var l=[];n.data.customer.map(function(e,t){l.push(e.customer_name+","+e.client_ref_no)}),e.RA_AGENT_CODE=void 0!==t?t.split(",")[1]:null,a.setState({agents:l,formData:e})}}):(e.RA_AGENT_CODE=null,this.setState({formData:e}))}},{key:"openModal",value:function(e){if(void 0!==this.props.match.params.ra_reference)this.setState({activeRowIndex:e,activeInitial:this.state.dynamic[e]});else if(void 0!==this.state.dynamic[e])this.setState({activeRowIndex:e,activeInitial:this.state.dynamic[e]});else{var t={SERVICE_CITY:null,TAX_CALCULATION:null,FOREIGN_CURRENCY:null,COMPONENTS_WISE_MARKUP:null,COMPONENTS_WISE_DISCOUNT_COMISSION:null,COMPONENTS_WISE_NET_COST_CURRENCY:null,COMPONENTS_WISE_NET_COST:null,RA_FILE_HANDLER:null,PAYMENT_SLABS:null,SUPPLIER_PAYMENT_DEADLINE:null,COMPONENTS_WISE_CURRENCY:null,ARRIVALDATE:null};this.setState({activeRowIndex:e,activeInitial:t}),console.log(t)}this.setState({modalVisible:!0})}},{key:"componentWillMount",value:function(){this.getCountries(),this.getCurrency(),document.title="BOOKING FORM | REAL BOOKS",void 0!==this.props.match.params.ra_reference&&this.getActiveBooking(this.props.match.params.ra_reference);var e=this.state,t=e.dynamic,a=e.dynamic_formData;t.push(Object.assign({},a)),this.setState({dynamic:t})}},{key:"getActiveBooking",value:function(e){var t=this;A.get("bookingmaster/local/"+e).then(function(e){e.data.success&&t.setState({isEdit:!0,formData:e.data.data,dynamic:e.data.data.dynamic,RA_REFERENCE:e.data.RA_REFERENCE,totalCost:e.data.data.SELLINGCOST,totalDiscount:e.data.data.OVER_ALL_DISCOUNT,totalTax:e.data.data.TOTAL_TAX_CALCULATION,activeInitial:e.data.data.dynamic[e.data.data.dynamic.length-1]})})}},{key:"getCountries",value:function(){var e=this;A.get("api/service/country/getall").then(function(t){200===t.status&&e.setState({countries:t.data.suppliercountry})})}},{key:"getCurrency",value:function(){var e=this;A.get("api/currency/getall").then(function(t){200===t.status&&e.setState({currencies:t.data.currency})})}},{key:"setSupplierName",value:function(e,t,a){console.log(t.split("~")),void 0!==t?2===t.split("~").length?(e[a].PER_SERVICE_WISE_SUPPLIER_NAME=t.split("~")[0],e[a].PER_SERVICE_SUPPLIER_CODE=t.split("~")[1].trim()):(e[a].PER_SERVICE_WISE_SUPPLIER_NAME=t.split("~")[0]+t.split("~")[t.split("~").length-2],e[a].PER_SERVICE_SUPPLIER_CODE=t.split("~")[t.split("~").length].trim()):(e[a].PER_SERVICE_WISE_SUPPLIER_NAME=void 0,e[a].PER_SERVICE_SUPPLIER_CODE=""),console.log(e[a]),this.setState({dynamic:e})}},{key:"cloneField",value:function(e){var t=this.state.dynamic_formData;e.push(Object.assign({},t,{ismanual:1})),this.setState({dynamic:e})}},{key:"deleteRow",value:function(e,t){e.splice(t,1);var a=0;e.map(function(e){a+=parseFloat(e.COMPONENTS_WISE_SELLING_COST)}),this.setState({dynamic:e,totalCost:a,formData:Object.assign({},this.state.formData,{SELLINGCOST:a})})}},{key:"setSellingCost",value:function(e,t,a){var n=0;t.map(function(e){n+=parseFloat(e.COMPONENTS_WISE_SELLING_COST)}),this.setState({formData:Object.assign({},a,{SELLINGCOST:n}),totalCost:n})}},{key:"setTotalDiscount",value:function(e,t,a,n){t[e]=Object.assign({},t[e],n);var l=0;t.map(function(e){l+=parseInt(e.COMPONENTS_WISE_DISCOUNT_COMISSION)}),this.setState({formData:Object.assign({},a,{OVER_ALL_DISCOUNT:l}),totalDiscount:l})}},{key:"setTotalTax",value:function(e,t,a,n){t[e]=Object.assign({},t[e],n);var l=0;t.map(function(e){l+=parseInt(e.TAX_CALCULATION)}),this.setState({formData:Object.assign({},a,{TOTAL_TAX_CALCULATION:l}),totalTax:l})}},{key:"submitData",value:function(e,t){var a=this;if(0!==this.state.RA_REFERENCE.length)if(void 0!==e.RA_AGENT_CODE&&0!==e.RA_AGENT_CODE.length)if(null!==e.STAND_ALONE){if(void 0!==t&&"NO"===e.STAND_ALONE)return 1!==t.length||void h.a.warning({message:"Multiple field missing",description:"Please add another row."});if(void 0!==e.INVOICE_CURRENCY&&0!==e.INVOICE_CURRENCY.length)if(void 0!==e.INVOICE_DATE&&null!==e.INVOICE_DATE){if(void 0===e.EXCHANGE_RATE||parseInt(e.EXCHANGE_RATE)<0)return console.log(e.EXCHANGE_RATE),void h.a.warning({message:"Required field missing",description:"Exchange rate can't be empty"});if(void 0!==e.CHECK_IN_DATE)if(void 0!==e.CHECK_OUT_DATE){if(parseFloat(e.SELLINGCOST)!==parseFloat(this.state.totalCost.toString()))return console.log(e.SELLINGCOST,this.state.totalCost),void h.a.warning({message:"Required field missing",description:"Invalid selling cost"});if(parseInt(e.TOTAL_IN_AMOUNTS)<e.SELLINGCOST)h.a.warning({message:"Required field missing",description:"Invalid Total in amount"});else if(parseInt(e.OVER_ALL_DISCOUNT)===parseInt(null!==this.state.totalDiscount?this.state.totalDiscount.toString():0)){if(void 0!==e.SBU)return parseInt(e.TOTAL_TAX_CALCULATION)!==parseInt(null!==this.state.totalTax?this.state.totalTax.toString():0)?(console.log(this.state.totalTax),void h.a.warning({message:"Required field missing",description:"Invalid tax calculation"})):void(0!==parseInt(e.TOTAL_IN_AMOUNTS)&&void 0!==e.TOTAL_IN_AMOUNTS&&null!==e.TOTAL_IN_AMOUNTS?t.map(function(e,n){if(0!==e.SERVICE_COUNTRY.length){if(0===e.PER_SERVICE_WISE_SUPPLIER_NAME.length)return console.log(e.PER_SERVICE_WISE_SUPPLIER_NAME),void h.a.warning({message:"Required field missing",description:"Please select a Supplier!"});if(0!==e.SERVICE_CATEGORY.length){if(0!==e.PRODUCT_NAME.length)return 0===e.COMPONENTS_WISE_SELLING_COST.length?(h.a.warning({message:"Required field missing",description:"Component wise selling cost can't be empty"}),!1):void 0===e.COMPONENTS_WISE_NET_COST?(h.a.warning({message:"Required field missing",description:"Component wise net cost can't be empty"}),!1):void 0===e.COMPONENTS_WISE_NET_COST_CURRENCY||null===e.COMPONENTS_WISE_NET_COST_CURRENCY||0===e.COMPONENTS_WISE_NET_COST_CURRENCY?(console.log("item",e.COMPONENTS_WISE_NET_COST_CURRENCY,"state",a.state.activeInitial.COMPONENTS_WISE_NET_COST_CURRENCY),h.a.warning({message:"Required field missing",description:"Component wise net cost currency can't be empty"}),a.setState({hasErr:!0}),!1):!a.state.hasErr&&n===t.length-1||void 0;h.a.warning({message:"Required field missing",description:"PRODUCT NAME can't be empty"})}else v.a.warning("Please select a service category!",.9)}else h.a.warning({message:"Required field missing",description:"Please select a service country!"})}):h.a.warning({message:"Required field missing",description:"Total In Amount can't be empty"}));h.a.warning({message:"Required field missing",description:"SBU can't be empty"})}else h.a.warning({message:"Required field missing",description:"Invalid overall discount"})}else h.a.warning({message:"Required field missing",description:"Please set a check out date"});else h.a.warning({message:"Required field missing",description:"Please set a check in date"})}else h.a.warning({message:"Required field missing",description:"Please select an Invoice Date"});else h.a.warning({message:"Required field missing",description:"Please select an Invoice Currency"})}else h.a.warning({message:"Required field missing",description:"Please select a STAND ALONE state"});else h.a.warning({message:"Required field missing",description:"RA AGENT CODE can't be empty!"});else h.a.warning({message:"Required field missing",description:"RA Reference can't be empty."})}},{key:"SaveData",value:function(e,t){var a=this,n=this.submitData(e,t);console.log(n),!0===n&&(e.dynamic=Object(N.a)(t),e.dynamic.map(function(t,a){e.dynamic[a].ismanual=1}),e.RA_REFERENCE=this.state.RA_REFERENCE,void 0!==e.msg&&delete e.msg,void 0!==e.success&&delete e.success,e.RA_AGENT_CODE.trim(),v.a.loading("Saving data....",1.5),A.post("bookingmaster/local/"+this.state.RA_REFERENCE,{data:e}).then(function(e){if(200===e.status)if(e.data.success){h.a.success({message:"Booking form data is submitted",description:"Data saved succesfully"});var t=a;setTimeout(function(){window.location.href="/local/booking/"+t.state.RA_REFERENCE},1e3)}else h.a.error({message:"BookingMaster Error",description:e.data.msg})}))}},{key:"setOutDate",value:function(e,t){e.CHECK_IN_DATE?t>=e.CHECK_IN_DATE?this.setState({formData:Object.assign({},e,{CHECK_OUT_DATE:t}),hasErr:!1}):(h.a.error({message:"Invalid Date",description:"Invalid date selected!"}),this.setState({hasErr:!0})):(h.a.warning({message:"Required Field missing",description:"Please enter check in date before proceeding"}),this.setState({hasErr:!0}))}},{key:"setInDate",value:function(e,t){e.CHECK_OUT_DATE?t<=e.CHECK_OUT_DATE?this.setState({formData:Object.assign({},e,{CHECK_IN_DATE:t}),hasErr:!1}):(h.a.error({message:"Invalid Date",description:"Invalid date selected!"}),this.setState({hasErr:!0})):(e.CHECK_IN_DATE=t,delete e.CHECK_OUT_DATE,this.setState({formData:e}))}},{key:"setModalValues",value:function(e,t){this.setState({activeInitial:Object.assign({},this.state.activeInitial,Object(p.a)({},e,t))})}},{key:"saveRow",value:function(e){var t=this.state.dynamic;t[this.state.activeRowIndex]=Object.assign({},t[this.state.activeRowIndex],e),console.log(t),this.setState({dynamic:t,activeInitial:{},activeRowIndex:-1,modalVisible:!1})}},{key:"clearList",value:function(){var e=this.state,t=e.dynamic,a=e.formData;console.log(a.STAND_ALONE),"YES"===a.STAND_ALONE&&t.length>1&&t.map(function(e,a){0===a&&t.pop()})}},{key:"searchSupplier",value:function(e,t,a){var n=this;e.length>=3?A.get("api/supplier/search?search="+e).then(function(l){if(200===l.status){var i=[];l.data.supplier.map(function(e,t){i.push(e.supplier_display_name+"~"+e.supplier_id)}),void 0!==e?(a[t].PER_SERVICE_WISE_SUPPLIER_NAME=e.split("~")[0],a[t].PER_SERVICE_SUPPLIER_CODE=e.split("~")[1]):(a[t].PER_SERVICE_WISE_SUPPLIER_NAME=void 0,a[t].PER_SERVICE_SUPPLIER_CODE=""),n.setState({suppliers:i,dynamic:a})}}):(a[t].PER_SERVICE_WISE_SUPPLIER_NAME=void 0,a[t].PER_SERVICE_SUPPLIER_CODE="",this.setState({dynamic:a}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.formData,n=t.dynamic,i=t.activeInitial;return console.log(i),[l.a.createElement("header",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"col-auto m-auto"},l.a.createElement("h3",null,"Booking Entry")))),l.a.createElement("main",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"RA Reference *"),l.a.createElement("input",{readOnly:this.state.isEdit,disabled:this.state.isEdit,type:"text",className:"form-control",defaultValue:this.state.RA_REFERENCE,onChange:function(t){return e.setState({RA_REFERENCE:t.target.value})},id:"",placeholder:""}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"RA Agent Code *"),l.a.createElement("br",null),null!==a.RA_AGENT_CODE?l.a.createElement(C.a,{style:{width:380,left:"-0.5em"},dataSource:this.state.agents,value:this.state.formData.RA_AGENT_CODE,onSelect:function(t){e.setState({formData:Object.assign({},a,{RA_AGENT_CODE:t.split(",")[1].trim()})})},onChange:function(t){return e.getAgentCode(a,t)},className:"form-control",filterOption:function(e,t){return-1!==t.props.children.split(",")[0].toUpperCase().indexOf(e.toUpperCase())||-1!==t.props.children.split(",")[1].toUpperCase().indexOf(e.toUpperCase())}}):l.a.createElement(C.a,{style:{width:380,left:"-0.5em"},dataSource:this.state.agents,defaultValue:this.state.formData.RA_AGENT_CODE,onSelect:function(t){e.setState({formData:Object.assign({},a,{RA_AGENT_CODE:t.split(",")[1].trim()})})},onChange:function(t){return e.getAgentCode(a,t)},className:"form-control",filterOption:function(e,t){return-1!==t.props.children.split(",")[0].toUpperCase().indexOf(e.toUpperCase())||-1!==t.props.children.split(",")[1].toUpperCase().indexOf(e.toUpperCase())}}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Invoice Number"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:a.INVOICE_NUMBER,onChange:function(e){a.INVOICE_NUMBER=e.target.value},id:"",placeholder:""})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:a.FIRSTNAME,onChange:function(e){a.FIRSTNAME=e.target.value},id:"",placeholder:""}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Invoice Currency *"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("select",{className:"form-control ng-pristine ng-valid ng-touched",onChange:function(e){a.INVOICE_CURRENCY=e.target.value},defaultValue:""},l.a.createElement("option",{value:""},this.props.match.params.ra_reference?a.INVOICE_CURRENCY:"Select Currency..."),void 0!==this.state.currencies?this.state.currencies.map(function(e){return l.a.createElement("option",{value:e},e)}):null)))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Invoice Date *"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement(S.a,{style:{width:"30em"},value:a.INVOICE_DATE?T()(a.INVOICE_DATE,"YYYY-MM-DD"):"",format:"YYYY-MM-DD",onChange:function(t,n){e.setState({formData:Object.assign({},a,{INVOICE_DATE:n})})},placeholder:"yyyy-mm-dd"}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Exchange Rate *"),l.a.createElement("input",{type:"number",className:"form-control",min:"0",defaultValue:a.EXCHANGE_RATE,onChange:function(e){a.EXCHANGE_RATE=e.target.value},id:"",placeholder:""}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Payment Deadline"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement(S.a,{style:{width:"30em"},value:a.PAYMENT_DEADLINE?T()(a.PAYMENT_DEADLINE,"YYYY-MM-DD"):"",onChange:function(t,n){e.setState({formData:Object.assign({},a,{PAYMENT_DEADLINE:n})})}})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Stand Alone *"),l.a.createElement("select",{className:"form-control",value:a.STAND_ALONE,onChange:function(t){a.STAND_ALONE=t.target.value,e.setState({formData:a}),e.clearList()}},l.a.createElement("option",{value:""},"Choose one"),[{val:"YES",name:"YES"},{val:"NO",name:"NO"}].map(function(e){return l.a.createElement("option",{value:e.val},e.name)}))))),l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"SBU *"),l.a.createElement("select",{className:"form-control",value:a.SBU,onChange:function(t){a.SBU=t.target.value,e.setState({formData:a})}},l.a.createElement("option",{value:""},"Choose one"),["FIT","GROUP"].map(function(e){return l.a.createElement("option",{val:e},e)})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Lead Passanger"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:a.LEAD_PASSENGER,onChange:function(e){a.LEAD_PASSENGER=e.target.value},id:"",placeholder:""}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Checkin Date *"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement(S.a,{style:{width:"30em"},value:a.CHECK_IN_DATE?T()(a.CHECK_IN_DATE,"YYYY-MM-DD"):"",format:"YYYY-MM-DD",onChange:function(t,n){e.setInDate(a,n)},placeholder:"yyyy-mm-dd"})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Checkout Date *"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement(S.a,{style:{width:"30em"},value:a.CHECK_OUT_DATE?T()(a.CHECK_OUT_DATE,"YYYY-MM-DD"):"",format:"YYYY-MM-DD",onChange:function(t,n){e.setOutDate(a,n)},placeholder:"yyyy-mm-dd"}))))),n.map(function(t,i){return l.a.createElement("div",{className:"row align-items-end",key:i},l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Service Category *"),l.a.createElement("select",{className:"form-control ng-pristine ng-valid ng-touched",value:t.SERVICE_CATEGORY,onChange:function(t){n[i].SERVICE_CATEGORY=t.target.value,e.setState({dynamic:n})}},l.a.createElement("option",{value:""},e.props.match.params.ra_reference?t.SERVICE_CATEGORY:"Select a category"),l.a.createElement("option",{value:"Tour"},"Tour"),l.a.createElement("option",{value:"Hotel"},"Hotel")))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Product Name *"),l.a.createElement("input",{type:"text",className:"form-control mb-4",id:"",value:t.PRODUCT_NAME,onChange:function(t){n[i].PRODUCT_NAME=t.target.value,e.setState({dynamic:n})},placeholder:""}))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Per Service Supplier Name *"),void 0!==t.PER_SERVICE_WISE_SUPPLIER_NAME&&t.PER_SERVICE_WISE_SUPPLIER_NAME.length>0?l.a.createElement(C.a,{style:{width:200,left:"-0.5em"},dataSource:e.state.suppliers,value:t.PER_SERVICE_WISE_SUPPLIER_NAME,onSelect:function(t){e.setSupplierName(n,t,i)},onChange:function(t){return e.searchSupplier(t,i,n)},filterOption:function(e,t){return-1!==t.props.children.split("~")[0].toUpperCase().indexOf(e.toUpperCase())||-1!==t.props.children.split("~")[1].toUpperCase().indexOf(e.toUpperCase())}}):l.a.createElement(C.a,{style:{width:200,left:"-0.5em"},dataSource:e.state.suppliers,defaultValue:t.PER_SERVICE_WISE_SUPPLIER_NAME,onSelect:function(t){e.setSupplierName(n,t,i)},onChange:function(t){return e.searchSupplier(t,i,n)}}))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Components Wise Cost(Invoice currency) *"),l.a.createElement("input",{type:"number",className:"form-control mb-4",value:t.COMPONENTS_WISE_SELLING_COST,onChange:function(t){n[i].COMPONENTS_WISE_SELLING_COST=t.target.value,e.setSellingCost(i,n,a)},id:"",placeholder:""}))),l.a.createElement("div",{className:"col-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Service Country *"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("select",{className:"form-control ng-pristine ng-valid ng-touched",onChange:function(t){n[i].SERVICE_COUNTRY=t.target.value,e.setState({dynamic:n})},value:t.SERVICE_COUNTRY},l.a.createElement("option",{value:""},e.props.match.params.ra_reference?t.SERVICE_COUNTRY:"Select Country..."),void 0!==e.state.countries?e.state.countries.map(function(e){return l.a.createElement("option",{value:e},e)}):null)))),i===n.length-1?l.a.createElement("div",{className:"col-auto align-self-center mt-4"},l.a.createElement("div",{className:"form-action-group d-flex align-items-center justify-content-between mb-3"},l.a.createElement("button",{style:{display:"block"},type:"button",className:"btn btn-light mr-2",onClick:function(){e.openModal(i)},"data-toggle":"modal","data-target":"#exampleModalCenter"},l.a.createElement("i",{className:"ion ion-ios-more text-dark"})),l.a.createElement("button",{type:"button",style:"YES"===a.STAND_ALONE?{display:"none"}:null,className:"btn btn-light mr-2",onClick:function(){e.setState({activeInitial:{}}),e.cloneField(n)}},l.a.createElement("i",{className:"ion ion-md-add text-primary"})),i>0?l.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){e.deleteRow(n,i)}},l.a.createElement("i",{className:"ion ion-ios-trash text-danger"})):null)):l.a.createElement("div",{className:"col-auto align-self-center mt-5"},l.a.createElement("div",{className:"form-action-group d-flex align-items-center justify-content-between mb-4"},l.a.createElement("button",{type:"button",className:"btn btn-light mr-2","data-toggle":"modal",onClick:function(){e.openModal(i)},"data-target":"#exampleModalCenter"},l.a.createElement("i",{className:"ion ion-ios-more text-dark"})),l.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){e.deleteRow(n,i)}},l.a.createElement("i",{className:"ion ion-ios-trash text-danger"})))))}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"",className:"ml-auto col-auto col-form-label"},"Selling Cost"),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{type:"number",min:"0",defaultValue:a.SELLINGCOST,onChange:function(t){a.SELLINGCOST=t.target.value,a.OVER_ALL_PROFIT=a.TOTAL_IN_AMOUNTS-a.SELLINGCOST,e.setState({formData:a})},className:"form-control"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"",className:"ml-auto col-auto col-form-label"},"Total In Amounts"),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{type:"number",defaultValue:a.TOTAL_IN_AMOUNTS,onChange:function(t){a.TOTAL_IN_AMOUNTS=t.target.value,a.OVER_ALL_PROFIT=a.TOTAL_IN_AMOUNTS-a.SELLINGCOST,e.setState({formData:a})},className:"form-control"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"",className:"ml-auto col-auto col-form-label"},"Over All Discounts"),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{type:"number",min:"0",defaultValue:a.OVER_ALL_DISCOUNT,onChange:function(e){a.OVER_ALL_DISCOUNT=e.target.value},className:"form-control"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"",className:"ml-auto col-auto col-form-label"},"Total Tax Calculation"),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{type:"number",defaultValue:a.TOTAL_TAX_CALCULATION,onChange:function(e){a.TOTAL_TAX_CALCULATION=e.target.value},className:"form-control"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"",className:"ml-auto col-auto col-form-label"},"Over All Profit"),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{type:"number",min:"0",value:0===parseInt(a.OVER_ALL_LOSS)||null===a.OVER_ALL_LOSS?a.OVER_ALL_PROFIT:console.log("yeah"),onChange:function(t){e.setState({formData:Object.assign({},a,{OVER_ALL_PROFIT:t.target.value})})},className:"form-control"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"",className:"ml-auto col-auto col-form-label"},"Over All Loss"),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{type:"number",min:"0",defaultValue:0===a.OVER_ALL_PROFIT?a.OVER_ALL_LOSS:0,onChange:function(e){a.OVER_ALL_LOSS=e.target.value},className:"form-control"}))))),l.a.createElement("div",{style:{width:"100%",height:"150px"}}),l.a.createElement("div",{className:"row align-items-end"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Booking Note"),l.a.createElement("textarea",{className:"form-control",value:a.BOOKING_NOTES,onChange:function(e){a.BOOKING_NOTES=e.target.value},id:"exampleFormControlTextarea1",rows:"5",style:{resize:"none"}}))),l.a.createElement("div",{className:"col-1 text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-primary w-100",onClick:function(){e.SaveData(a,n)}},"Save")))),l.a.createElement(O.a,{visible:this.state.modalVisible,width:900,footer:[],onCancel:function(){return e.setState({modalVisible:!1,activeRowIndex:-1,activeInitial:{}})}},l.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"tab-pane fade show active",id:"supplier",role:"tabpanel","aria-labelledby":"supplier-tab"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Service City"),l.a.createElement(I.a,{type:"text",value:this.state.activeInitial.SERVICE_CITY,onChange:function(t){e.setModalValues("SERVICE_CITY",t.target.value)},className:"form-control",placeholder:""}))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Tax Calculation"),l.a.createElement(I.a,{type:"number",value:i.TAX_CALCULATION,onChange:function(t){i.TAX_CALCULATION=t.target.value,e.setTotalTax(e.state.activeRowIndex,n,a,i)},className:"form-control",placeholder:""})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"City"),l.a.createElement(I.a,{type:"text",className:"form-control",value:i.SERVICE_CITY,onChange:function(e){i.SERVICE_CITY=e.target.value},id:"",placeholder:""}))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Components Wise Markup"),l.a.createElement(I.a,{type:"number",min:"0",className:"form-control",value:i.COMPONENTS_WISE_MARKUP,onChange:function(t){e.setState({activeInitial:Object.assign({},i,{COMPONENTS_WISE_MARKUP:t.target.value})})},id:"",placeholder:""})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Component Wise Net Cost *"),l.a.createElement(I.a,{type:"number",value:i.COMPONENTS_WISE_NET_COST,onChange:function(t){i.COMPONENTS_WISE_NET_COST=t.target.value,e.setState({activeInitial:Object.assign({},e.state.activeInitial,i)})},className:"form-control",id:"",placeholder:""}))),l.a.createElement("div",{classsName:"col-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Components Wise Net Cost Currency *"),l.a.createElement(g.a,{className:"form-control ng-pristine ng-valid ng-touched",value:i.COMPONENTS_WISE_NET_COST_CURRENCY,onChange:function(t){i.COMPONENTS_WISE_NET_COST_CURRENCY=t,i.COMPONENTS_WISE_CURRENCY=t,e.setState({activeInitial:Object.assign({},e.state.activeInitial,i),hasErr:!1})}},this.state.currencies.map(function(e){return l.a.createElement(y,{value:e},e)}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:""},"Booking Reference(RA File Handler)"),l.a.createElement(I.a,{type:"text",value:i.RA_FILE_HANDLER,onChange:function(t){i.RA_FILE_HANDLER=t.target.value,e.setState({activeInitial:i})},className:"form-control",id:"",placeholder:""}))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:""},"Payment Slabs"),l.a.createElement(I.a,{type:"text",value:i.PAYMENT_SLABS,onChange:function(e){i.PAYMENT_SLABS=e.target.value},className:"form-control",id:"",placeholder:""})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:""},"Supplier Payment Deadline"),l.a.createElement("div",{className:"input-group-mb6"},l.a.createElement(S.a,{format:"YYYY-MM-DD",value:i.SUPPLIER_PAYMENT_DEADLINE?T()(i.SUPPLIER_PAYMENT_DEADLINE):null,onChange:function(t,a){i.SUPPLIER_PAYMENT_DEADLINE=a,e.setState({activeInitial:Object.assign({},i,{SUPPLIER_PAYMENT_DEADLINE:a})})},style:{width:"25.5em"}})))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:""},"Component Wise Discount Comission"),l.a.createElement(I.a,{type:"number",value:i.COMPONENTS_WISE_DISCOUNT_COMISSION,onChange:function(t){i.COMPONENTS_WISE_DISCOUNT_COMISSION=t.target.value,e.setTotalDiscount(e.state.activeRowIndex,n,a,i)},className:"form-control",id:"",placeholder:""})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:""},"Arrival Date"),l.a.createElement("div",{className:"input-group-mb6"},l.a.createElement(S.a,{format:"YYYY-MM-DD",value:i.ARRIVALDATE?T()(i.ARRIVALDATE,"YYYY-MM-DD"):"",onChange:function(t,a){i.ARRIVALDATE=a,e.setState({activeInitial:Object.assign({},i,{ARRIVALDATE:a})})},style:{width:"25.5em"}}))))),l.a.createElement("div",{className:"row"})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.saveRow(i)}},"Save"))))))]}}]),t}(n.Component),L=Object(d.d)(b),D=a(24),P=(a(234),a(252)),w=a(63),V=a(29),U=a(36),M=g.a.Option,Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getCompanyName=function(){return new Promise(function(e,t){A.get("api/service/countrywithid/getall").then(function(t){a.setState(function(e,a){return{countryList:t.data.suppliercountry}}),e()}).catch(function(t){h.a.warning({message:"Error",description:"Unable to fetch Country list"}),e()})})},a.getSbu=function(){return new Promise(function(e,t){A.get("api/sbu/getall").then(function(t){a.setState(function(e,a){return{sbuList:t.data.sbu}}),e()}).catch(function(t){h.a.warning({message:"Error",description:"Unable to fetch Sbu list"}),e()})})},a.handleSearchParty=function(e){e.length>=3&&A.get("api/supplier/search?search=".concat(e)).then(function(e){a.setState(function(t,a){return{partList:e.data.supplier}})}).catch(function(e){h.a.warning({message:"Error",description:"Unable to fetch Supplier list"})})},a.mapParty=function(e){for(var t=0;t<a.state.partList.length;t++)if(a.state.partList[t].supplier_id==e)return a.state.partList[t].supplier_display_name},a.handleChangeParty=function(e){var t=a.mapParty(e);a.setState(function(a,n){return Object(D.a)({},a,{defaultValues:Object(D.a)({},a.defaultValues,{party_id:e,party_name:t})})}),console.log(a.state)},a.handleCompanyChange=function(e){a.setState(function(t,a){return Object(D.a)({},t,{defaultValues:Object(D.a)({},t.defaultValues,{company_id:e})})}),console.log(a.state)},a.handleSbuChange=function(e){a.setState(function(t,a){return Object(D.a)({},t,{defaultValues:Object(D.a)({},t.defaultValues,{sbu_id:e})})}),console.log(a.state)},a.handledateChange=function(e){a.setState(function(t,a){return Object(D.a)({},t,{defaultValues:Object(D.a)({},t.defaultValues,{invoice_date:e})})}),console.log(a.state)},a.getExistingdata=function(){return new Promise(function(e,t){"edit"===a.state.mode?(A.get("invoicerule/form?id=".concat(a.state.dynamicId)).then(function(n){A.get("api/supplier/search?search=".concat(n.data[0].party_id)).then(function(t){a.setState(function(e,a){return Object(D.a)({},e,{defaultValues:{company_id:n.data[0].company_id,party_id:n.data[0].party_id,party_name:t.data.supplier[0].supplier_display_name,sbu_id:n.data[0].sbu_id,invoice_date:n.data[0].invoice_date}})}),e()}).catch(function(e){h.a.warning({message:"Error",description:"Invalid Id"}),a.setState(function(e,t){return{dynamicId:"",mode:"new"}})}),t()}).catch(function(e){h.a.warning({message:"Error",description:"Invalid Id"}),a.setState(function(e,t){return{dynamicId:"",mode:"new"}})}),t()):e()})},a.savedata=function(){if(""!==a.state.defaultValues.company_id&&""!==a.state.defaultValues.party_id&&""!==a.state.defaultValues.sbu_id&&""!==a.state.defaultValues.invoice_date){if("new"===a.state.mode)var e=Object(D.a)({},a.state.defaultValues);else e=Object(D.a)({},a.state.defaultValues,{id:a.state.dynamicId});A.post("invoicerule/form?id=".concat(a.state.dynamicId),e).then(function(e){console.log(e.data.id),h.a.warning({message:"Success",description:"Data Saved"}),setTimeout(function(){window.location.href="/invoicerule/data/form/"+e.data.id},300)}).catch(function(e){h.a.warning({message:"Error",description:"Error saving data"})})}else h.a.warning({message:"Error",description:"All the fields are required"})},a.state={dynamicId:"",countryList:[],partList:[],sbuList:[],defaultValues:{company_id:"",party_id:"",party_name:"",sbu_id:"",invoice_date:""},mode:""},a}return Object(E.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.props.match.params.id?this.setState({dynamicId:this.props.match.params.id,mode:"edit"}):this.setState({mode:"new"})}},{key:"componentDidMount",value:function(){var e=this,t=this.getCompanyName(),a=this.getSbu();Promise.all([t,a]).then(function(t){e.getExistingdata().then(function(){console.log(e.state)}).catch(function(e){})}).catch(function(e){h.a.warning({message:"Error",description:"Server error"})})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#F5F5F5",height:"100vh",padding:"40px",width:"100%"}},l.a.createElement("a",{className:"back-button",href:"/"},l.a.createElement("i",{class:"fas fa-home"})),l.a.createElement(P.a,{title:"INVOICE RULE",bordered:!1,style:{width:"50%",marginLeft:"25%"},headStyle:{background:"#4179ef",color:"#fff"}},l.a.createElement("div",{style:{padding:"20px"}},l.a.createElement(w.a,{style:{paddingBottom:"20px"}},l.a.createElement(V.a,{span:8},l.a.createElement("p",null,"Company Name : ")),l.a.createElement(V.a,{span:16},l.a.createElement(g.a,{defaultValue:this.state.defaultValues.company_id,value:this.state.defaultValues.company_id,style:{width:"100%"},onChange:this.handleCompanyChange},l.a.createElement(M,{value:""},"Select any option.."),this.state.countryList.map(function(e,t){return l.a.createElement(M,{key:t,value:e.id},e.name)})))),l.a.createElement(w.a,{style:{paddingBottom:"20px"}},l.a.createElement(V.a,{span:8},l.a.createElement("p",null,"Party Name : ")),l.a.createElement(V.a,{span:16},l.a.createElement(g.a,{showSearch:!0,value:this.state.defaultValues.party_name,placeholder:"search",style:{width:"100%"},defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onSearch:this.handleSearchParty,onChange:this.handleChangeParty,notFoundContent:null},this.state.partList.map(function(e,t){return l.a.createElement(M,{key:t,value:e.supplier_id},e.supplier_display_name)})))),l.a.createElement(w.a,{style:{paddingBottom:"20px"}},l.a.createElement(V.a,{span:8},l.a.createElement("p",null,"SBU : ")),l.a.createElement(V.a,{span:16},l.a.createElement(g.a,{defaultValue:this.state.defaultValues.sbu_id,value:this.state.defaultValues.sbu_id,style:{width:"100%"},onChange:this.handleSbuChange},l.a.createElement(M,{value:""},"Select any option.."),this.state.sbuList.map(function(e,t){return l.a.createElement(M,{key:t,value:e.id},e.sbu)})))),l.a.createElement(w.a,{style:{paddingBottom:"20px"}},l.a.createElement(V.a,{span:8},l.a.createElement("p",null,"Invoice Date : ")),l.a.createElement(V.a,{span:16},l.a.createElement(g.a,{defaultValue:this.state.defaultValues.invoice_date,value:this.state.defaultValues.invoice_date,style:{width:"100%"},onChange:this.handledateChange},l.a.createElement(M,{value:""},"Select any option.."),l.a.createElement(M,{value:"check_in_date"},"Check In Date"),l.a.createElement(M,{value:"check_out_date"},"Check Out Date"),l.a.createElement(M,{value:"invoice_date"},"Invoice Date"),l.a.createElement(M,{value:"manual"},"Manual")))),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(U.a,{type:"primary",loading:this.state.loading,onClick:this.savedata},"Save")))))}}]),t}(n.Component),F=Object(d.d)(Y),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(d.a,{exact:!0,path:"/local/booking",component:L}),l.a.createElement(d.a,{exact:!0,path:"/local/booking/:ra_reference",component:L}),l.a.createElement(d.a,{exact:!0,path:"/invoicerule/data/form",component:F}),l.a.createElement(d.a,{exact:!0,path:"/invoicerule/data/form/:id",component:F}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,1,2]]]);
//# sourceMappingURL=main.16493d01.chunk.js.map