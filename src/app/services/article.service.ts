import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // peticiones http
import {Observable} from 'rxjs'; // recibir peticiones api
import {Global} from './global'

@Injectable()

export class ArticleService {
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    prueba(){
        console.log(this.url);
    }
    getArticles():Observable<any>{
        return this._http.get(`${this.url}articles`);
    }
}