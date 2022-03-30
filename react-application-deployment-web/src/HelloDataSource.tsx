import Axios from "axios";

export class HelloDataSource {
    private baseUrl = 'api/hello';

    constructor() {
    }

    getMessage(name: string, callback: (arg: any) => void) {
        Axios.get(`${this.baseUrl}/message`, {params: {name: name}})
            .then(response => callback(response.data));
    }
}
