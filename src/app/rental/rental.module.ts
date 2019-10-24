import { NgModule } from '@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalService } from './shared/rental.service';
import { Routes, RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routesRental: Routes = [
    {
      path: 'rentals',
      component: RentalComponent,
      children: [
          {
              path: '',
              component: RentalListComponent
          },
          {
            path: ':rentalId',
            component: RentalDetailComponent
        }
          
      ]
    }
]

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent
    ],
    imports: [         
        InfiniteScrollModule,
        CommonModule,
        RouterModule.forChild(routesRental),
        HttpClientModule
    ],
    exports: [RouterModule],
    providers: [
        RentalService
    ],
})

export class RentalModule {

}