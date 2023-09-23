import axios, { AxiosError, AxiosResponse } from 'axios';

export class HelloService {
    private baseUrl = 'api/hello';

    getMessage(name: string, thenCallback: (response: AxiosResponse<string>) => void) {
        axios.get(`${this.baseUrl}/message`, {params: {name: name}})
            .then(response => {
                thenCallback(response);
            })
            .catch((error: AxiosError) => {
                console.log('getMessage error: ' + JSON.stringify(error));
                throw error;
            });
    }
}
