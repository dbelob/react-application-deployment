import { AxiosError } from 'axios';
import { Axios } from 'axios-observable';
import { catchError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class HelloService {
    private baseUrl = 'api/hello';

    getMessage(name: string): Observable<string> {
        return Axios.get(`${this.baseUrl}/message`, {params: {name: name}})
            .pipe(
                map(response => response.data),
                catchError((err: AxiosError) => {
                    console.log('getMessage error: ' + JSON.stringify(err));
                    throw err;
                })
            );
    }
}
