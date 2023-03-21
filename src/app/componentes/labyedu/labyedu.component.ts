import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-labyedu',
  templateUrl: './labyedu.component.html',
  styleUrls: ['./labyedu.component.css']
})
export class LabyeduComponent  implements OnInit {

  educacionlist:any;
  constructor(private datosdelportfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosdelportfolio.obtenerdatos().subscribe(data=>{
      this.educacionlist=data.education;
    })
  }

}
