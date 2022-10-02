import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProducFilter, ProductI } from '../interfaces/product.interface';

const baseurlapi = environment.urlApi+'/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  searchProducts(filters:any){
    return this.httpClient.get<any>(`${baseurlapi}/filterProducts`,{params:{...filters}});
  }

  filterProducts(product: ProducFilter){
    if(product._id != ''){
      console.log('con id')
      return this.httpClient.get(`${baseurlapi}/filterProducts?_id=${product._id}&name=${product.name}&stock=${product.stock}&status=${product.status}&category=${product.category}&brand=${product.brand}`);
    }else{
      console.log('sin id')
      return this.httpClient.get(`${baseurlapi}/filterProducts?name=${product.name}&stock=${product.stock}&status=${product.status}&category=${product.category}&brand=${product.brand}`);
    }
  }

  editPro(id:string,data:ProductI){
    return this.httpClient.put(`${baseurlapi}/updatePro?id=${id}`,data)
  }

  getProducts(){
    return this.httpClient.get(`${baseurlapi}/getProducts`);
  }

  getDetailProduct(id:string):Observable<ProductI>{
    return this.httpClient.get<ProductI>(`${baseurlapi}/getProduct/${id}`)
  }

  registerProduct(productData: FormData){
    return this.httpClient.post<ProductI>(`${baseurlapi}/createProduct`, productData)
  }

  editProduct(productData: ProductI){
    return  this.httpClient.put<ProductI>(`${baseurlapi}/updateProduct`, productData)
  }

  uploadPhoto(id: string,photo: FormData){
    return this.httpClient.put<ProductI>(`${baseurlapi}/registerProduct`, photo)
  }

  registerorder(orderData: any){
    return this.httpClient.post<ProductI>(`${environment.urlApi}/order/createOrder`, orderData)
  }

  getMunicipalititesByDepartmentComponent(idDepartment:string){
    return this.httpClient.get(`https://api.cavalierlatam.com/api/order/getMunicipalititesByDepartmentComponent`,{params:{idDepartment}})
  }

  getDepartmentsComponent(){
    return this.httpClient.get(`https://api.cavalierlatam.com/api/order/getDepartmentsComponent`)
  }

  changeStatus( id:string, status: boolean){
    return this.httpClient.put(`${baseurlapi}/changeStatus?id=${id}&status=${status}`, '')
  }

}
