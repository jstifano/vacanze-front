import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ListReservationsComponent } from '../list-reservations/list-reservations.component'

@NgModule({
  declarations: [ListReservationsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiService]
})
export class ListReservationsModule { }
