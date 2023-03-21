import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {


  miportfolio:any;

  constructor (private datosdelportfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosdelportfolio.obtenerdatos().subscribe(data =>{
      console.log(data);
      this.miportfolio=data;
    })
  }
}


