import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
// import { Observable } from "rxjs";
import { NativeService } from "./native.service";
import { AlertController, LoadingController } from "ionic-angular";
import { Utils } from './utils.service';
import { GlobalData } from './global-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * 封装http服务
 */
@Injectable()
export class HttpService {

    loading: any;
    constructor(public http: Http,
                private nativeService: NativeService,
                public loadingCrl:LoadingController,
                public globalData: GlobalData,
                private alertCtrl: AlertController) {
    }

    public request(url: string, options: RequestOptionsArgs , showOpt ?:any): Observable<Response> {
        // if (options.headers) {
        //   options.headers.append('token', this.globalData.token);
        // } else {
        //   options.headers = new Headers({
        //     'token': this.globalData.token
        //   });
        // }
        return Observable.create((observer) => {
            // this.nativeService.showLoading();
            this.loading = (showOpt && !showOpt.notShow) ? this.showLoading(showOpt) : null;
            let fullUrl = this.globalData.server + url
            console.log('%c 请求前 %c', 'color:blue', '', 'url', fullUrl, 'options', options);
            this.http.request(fullUrl, options)
            .timeout(2000)
            // .retry(1)  //重试的次数
            .subscribe(res => {
                // this.nativeService.hideLoading();
                this.loading.dismiss();
                console.log('%c 请求成功 %c', 'color:green', '', 'url', fullUrl, 'options', options, 'res', res);
                observer.next(res);
            }, err => {
                this.requestFailed(fullUrl, options, err);//处理请求失败
                observer.error(err);
            });
        }).map((res: Response) => res.json());
    }

    /**
     * 判断是否空
     *  @type url: 接口地址
     *  @type paramMap: json格式的参数
     *  @type showOpt: loading展示的选项 {
     *                                      msg: '加载时显示的文字', 
     *                                      canHide: 是否能点击取消加载动画
     *                                      notShow: true //show为true时展示loading false不展示
     *                                  }
     */
    public get(url: string, showOpt: any, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Get,
            search: HttpService.buildURLSearchParams(paramMap)
        }),showOpt);
    }

    /**
     * 判断是否空
     *  @type url: 接口地址
     *  @type body: json格式的参数
     *  @type showOpt: loading展示的选项 {
     *                                      msg: '加载时显示的文字', 
     *                                      canHide: 是否能点击取消加载动画
     *                                      notShow: true //show为true时展示loading false不展示
     *                                  }
     */
    public post(url: string, showOpt: any, body: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            body: body,
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }),showOpt);
    }

    public postFormData(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            search: HttpService.buildURLSearchParams(paramMap).toString(),
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    }

    public put(url: string, body: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Put,
            body: body
        }));
    }

    public delete(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Delete,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    public patch(url: string, body: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Patch,
            body: body
        }));
    }

    public head(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Head,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    public options(url: string, paramMap: any = null): Observable<Response> {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Options,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }));
    }

    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    private static buildURLSearchParams(paramMap): URLSearchParams {
        let params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (let key in paramMap) {
            let val = paramMap[key];
            if (val instanceof Date) {
                val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
            }
            params.set(key, val);
        }
        return params;
    }

    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    private requestFailed(url: string, options: RequestOptionsArgs, err) {
        // this.nativeService.hideLoading();
        this.loading.dismiss();
        console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        let msg = '请求发生异常', status = err.status;
        // if (!this.nativeService.isConnecting()) {
        if (!err.status) {
            msg = '请求失败，请连接网络';
        } else {
            if (status === 0) {
                msg = '请求失败，请求响应出错';
            } else if (status === 404) {
                msg = '请求失败，未找到请求地址';
            } else if (status === 500) {
                msg = '请求失败，服务器出错，请稍后再试';
            } else {
                msg = '请求失败，请连接网络';
            }
        }
        this.alertCtrl.create({
            title: msg,
            subTitle: status,
            buttons: [{ text: '确定' }]
        }).present();
    }

    showLoading(msgObj) {
        let enableBackdropDismiss = (msgObj && msgObj.notShow) ? true : false;
        let content = (msgObj && msgObj.msg) ? msgObj.msg : "加载中...";
        let loading = this.loadingCrl.create({
            content,
            enableBackdropDismiss
        });
        loading.present();
        return loading;
    }
}