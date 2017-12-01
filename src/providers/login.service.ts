import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from "./common/http.service";

@Injectable()
export class LoginService {
    constructor(private httpService: HttpService) { }

    login(user) {
        let url: string = "/Sys/SysUser/LoginApp";
        return this.httpService.post(url, user)
                .subscribe((res) =>{

                },
                err=>{});
    }

    sendCode(loginName) {
        let url: string = "/Sys/SysUser/SendCode";
        return this.httpService.post(url, loginName)
                .subscribe((res) =>{
            
                },
                err=>{});
    }
}