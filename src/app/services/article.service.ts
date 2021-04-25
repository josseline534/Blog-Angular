import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // peticiones http
import {Observable} from 'rxjs'; // recibir peticiones api
import {Global} from './global'

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    prueba(){
        console.log("Prueba del servicio de articulo");
    }
    getArticles(last:any = null):Observable<any>{
        let articles ='articles';
        if (last != null){
            articles ='articles/true';
        }
        return this._http.get(`${this.url}${articles}`);
    }
    getArticleDetalle(articleId):Observable<any>{
        return this._http.get(`${this.url}article/${articleId}`);
    }
    search(searchString):Observable<any>{
        return this._http.get(`${this.url}search/${searchString}`)
    }
    create(article):Observable<any>{
        let params = JSON.stringify(article)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.post(`${this.url}save`, params, {
            headers
        })
    }
}