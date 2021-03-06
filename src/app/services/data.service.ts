import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { mark } from './mock';

@Injectable()
export class DataService 
{
   constructor(private http: Http) { }
  
   getmarks()  : Promise<mark[]> 
  {
    
               return this.http.get('https://assespmkvy.herokuapp.com/api/public/list_mark')
                  .toPromise()
                  .then(res => <mark[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); 


   }


  
   
   
     private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  }
