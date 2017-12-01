import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from './http.service';
/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Helper {

    constructor(private httpService: HttpService) {
    }


}