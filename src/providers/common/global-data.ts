import { Injectable } from '@angular/core';

/*
 *  此类存储全局变量
 * 
 */
@Injectable()
export class GlobalData {
    /**是否是调试状态 */
    private _isDebug: boolean = true;
    //服务器url
    private _server: string = this.isDebug ? "http://192.168.1.51:8080" : "http://123.56.204.211:8080";
    private _userId: string;//用户id
    private _username: string;//用户名
    private _token: string;//token
    //设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
    private _showLoading: boolean = true;

    //app更新进度.默认为0,在app升级过程中会改变
    private _updateProgress: number = -1;

    get server(): string {
        return this._server;
    }

    set server(value: string) {
        this._server = value;
    }

    get isDebug(): boolean {
        return this._isDebug;
    }

    set isDebug(value: boolean) {
        this._isDebug = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get showLoading(): boolean {
        return this._showLoading;
    }

    set showLoading(value: boolean) {
        this._showLoading = value;
    }

    get updateProgress(): number {
        return this._updateProgress;
    }

    set updateProgress(value: number) {
        this._updateProgress = value;
    }
}