import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shopowner } from './shopowner.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopownerService {
  constructor(private httpClient:HttpClient) { }

  API_URL = "http://localhost:8080/shopowner"

  addShopowner(newShopowner:Shopowner):Observable<Shopowner>{
    return this.httpClient.post<Shopowner>(this.API_URL,newShopowner);
  }

  getShopowner():Observable<Shopowner[]>{
    return this.httpClient.get<Shopowner[]>(this.API_URL);
  }

  getShopownerById(id:number):Observable<Shopowner>{
    return this.httpClient.get<Shopowner>(this.API_URL+"/"+id);
  }

  updateShopowner(id:number, Shopowner:Shopowner):Observable<Shopowner>{
    return this.httpClient.put<Shopowner>(this.API_URL+"/"+id,Shopowner);
  }
  removeShopowner(id:number):Observable<Shopowner>{
    return this.httpClient.delete<Shopowner>(this.API_URL+"/"+id);
  }
}
