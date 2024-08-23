import axios, { AxiosError } from 'axios';

export class HelloService {
    private baseUrl = 'api/hello';

    getMessage(name: string) {
        return axios.get<string>(`${this.baseUrl}/message`, {params: {name: name}})
            .catch((error: AxiosError) => {
                console.log('getMessage error: ' + JSON.stringify(error));
                throw error;
            });
    }
}
