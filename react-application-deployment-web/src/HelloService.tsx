import Axios from 'axios-observable';
import { catchError } from 'rxjs';
import { AxiosObservable } from 'axios-observable/lib/axios-observable.interface';

export class HelloService {
    private baseUrl = 'api/hello';

    getMessage(name: string): AxiosObservable<string> {
        return Axios.get(`${this.baseUrl}/message`, {params: {name: name}})
            .pipe(
                catchError((response: Response) => {
                    console.log('getMessage error, response: ' + JSON.stringify(response));
                    throw response;
                })
            );
    }
}
