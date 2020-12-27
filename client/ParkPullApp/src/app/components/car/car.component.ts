import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/models/car.model';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  public car1;

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.car1 = {} as Car;
    this.car1.carCode = 6;
    this.car1.carHeight = 2.5;
    this.car1.carLength = 3.24;
    this.car1.carNumber = '123456789';
    this.car1.carWeight = 4;
    this.car1.userCode = 12;

    //this.addCar(this.car1);
   // this.getAllCars();
  }

  addCar(carToAdd: Car) {
    this.carService.addCar(carToAdd).subscribe(
      res=>{console.log(res)},
      err=>{console.error(err)}
    )
  }

  getAllCars()
  {
    this.carService.getAllCars().subscribe(
      res=>{console.log(res)},
      err=>{console.error(err)}
    )
  }

}
