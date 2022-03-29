import Axios, { Method } from "axios";

export class RestDataSource {
    private readonly BASE_URL = 'http://localhost:8080/api/hello/message';

    constructor() {
    }

    getData(callback: (arg1: any) => void) {
        this.sendRequest('get', this.BASE_URL, callback);
    }

    sendRequest(method: Method, url: string, callback: (arg1: any) => void) {
        Axios.request({
            method: method,
            url: url
        }).then(response => callback(response.data));
    }
}
