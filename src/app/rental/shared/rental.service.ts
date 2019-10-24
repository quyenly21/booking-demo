import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class RentalService {
  private rentals: Rental[]= [];
  constructor(private http: HttpClient){}
    
  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/rentals/${rentalId}`);
    // return new Observable<Rental>((observer) => {
    //   setTimeout(() => {
    //     const foundRental = this.rentals.find((rental) => rental.id == rentalId);
    //     observer.next(foundRental);
    //   }, 5000);        
    // }) 
  }

  public getRentals(): Observable<any>{
    return this.http.get(`${environment.API_URL}/rentals`)
    // const rentalObservable = new Observable((observer) => {
    //   setTimeout(()=> {
    //     // debugger;
    //     observer.next(this.rentals);
    //   },1000);

      // setTimeout(()=> {
      //   // debugger;
      //   observer.error("Have some error");
      // },2000);

      // setTimeout(()=> {
      //   // debugger;
      //   observer.complete();
      // },3000);
    // })
      // return rentalObservable;
    // return this.rentals;
  }
}