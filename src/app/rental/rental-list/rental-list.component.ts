import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'booking-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss'],
  providers: [RentalService]
})
export class RentalListComponent implements OnInit {
  rentals: any[] = [];
  
  constructor(private rentalService: RentalService) { }
  
  ngOnInit() {   
    // this.rentals = this.rentalService.getRentals();
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rental) => {
        this.rentals = rental;
      },
      (err) => {
        console.log("Error - Rental list component: ", err);
      },
      ()=> {}
    )
  }

}
