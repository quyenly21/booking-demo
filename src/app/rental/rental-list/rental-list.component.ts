import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'booking-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss'],
  providers: [RentalService]
})
export class RentalListComponent implements OnInit {
  pageNum = 1;
  rentals: any[] = [];

  constructor(private rentalService: RentalService) { }
  
  ngOnInit() {   
    this.getRentals(this.pageNum);
  }

  getRentals(page) {
    const rentalObservable = this.rentalService.getRentals(page);
    rentalObservable.subscribe(
      (rental) => {
        this.rentals = this.rentals.concat(rental);        
      },
      (err) => {
        console.log("Error - Rental list component: ", err);
      },
      ()=> {}
    )
  }
  onScrollDown() {
    this.pageNum++;
    this.getRentals(this.pageNum);
  }

}
