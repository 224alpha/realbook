import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../../app/auth.service";

@Injectable()
export class Api {
    public apiUrl: any;
    public head: any;
    public bookingData = [];
    constructor(public auth: AuthService, public http: HttpClient) {
        // console.log(this.auth.getAccessToken());
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        //     'Authorization': 'Bearer ' + this.auth.getAccessToken()

        });
        this.head = { headers : headers };
        // this.headers.append('Content-Type', 'application/json');
        this.apiUrl = 'http://localhost:5000';
        // this.apiUrl = 'https://redappletravel.realbooks.in';
        // var headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);
    }
     
    public editBookingData(bookingid, data) {
        return this.http.post<any>(this.apiUrl + '/bookingmaster/local/' + bookingid, data);
    }
    
    public getBookingData(bookingid) {
        // console.log(this.apiUrl);
        return this.http.get(this.apiUrl + '/bookingmaster/local/' + bookingid);
    }

    public getAllCurrency() {
        // console.log(this.apiUrl);
        return this.http.get(this.apiUrl + '/api/currency/getall');
    }

    public getAllSupplier() {
        // console.log(this.apiUrl);
        return this.http.get(this.apiUrl + '/api/supplier/getall');
    }

    public getServiceCountry() {
        return this.http.get(this.apiUrl + '/api/service/country/getall');
    }
}