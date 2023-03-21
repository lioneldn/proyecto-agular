import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miportfolio:any;

  constructor (private datosdelportfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosdelportfolio.obtenerdatos().subscribe(data =>{
      console.log(data);
      this.miportfolio=data;
    })
  }
}
