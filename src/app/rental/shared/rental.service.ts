import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
    private rentals: Rental[]= [{
        id: '1',
        title: "Central Appartment",
        city: "HCMC",
        street: 'Le Duan',
        category: 'apartment',
        bedrooms: 3,
        desc: "Description of Apartment",
        shared: false,
        createdAt: "20/10/2019",
        image: "https://images1.apartments.com/i2/P0s3lHrhIIPXfyhkVz0wMZXOqFj2m3Rg_Pa-OdKQIQk/111/the-500-atlanta-ga-refined-apartment-living---elite-upgrade.jpg",
        dailyRate: 12
      },
      {
        id: '2',
        title: "Central Appartment",
        city: "HCMC",
        street: 'Le Duan',
        category: 'apartment',
        bedrooms: 3,
        desc: "Description of Apartment",
        shared: false,
        createdAt: "21/10/2019",
        image: "https://images1.apartments.com/i2/Ny1ln7eS5UgGQrd4jmrOpHWDiKv2KbI9dQYa01gn2UE/117/ascent-arboretum-austin-tx-kitchen.jpg",
        dailyRate: 34
      },
      {
        id: '3',
        title: "Central Appartment",
        city: "HCMC",
        street: 'Le Duan',
        category: 'apartment',
        bedrooms: 3,
        desc: "Description of Apartment",
        shared: false,
        createdAt: "21/10/2019",
        image: "https://images1.apartments.com/i2/Ny1ln7eS5UgGQrd4jmrOpHWDiKv2KbI9dQYa01gn2UE/117/ascent-arboretum-austin-tx-kitchen.jpg",
        dailyRate: 34
      }
    ];

    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer) => {
        setTimeout(() => {
          const foundRental = this.rentals.find((rental) => rental.id == rentalId);
          observer.next(foundRental);
        }, 5000);        
      }) 
    }

    public getRentals(): any{
      const rentalObservable = new Observable((observer) => {
        setTimeout(()=> {
          // debugger;
          observer.next(this.rentals);
        },1000);

        // setTimeout(()=> {
        //   // debugger;
        //   observer.error("Have some error");
        // },2000);

        // setTimeout(()=> {
        //   // debugger;
        //   observer.complete();
        // },3000);
      })
        return rentalObservable;
      // return this.rentals;
    }
}