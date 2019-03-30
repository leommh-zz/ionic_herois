import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //Cria novo observador
  dadosPagina = new Observable<any[]>();

  constructor(private service: WebService) {
  }

  ngOnInit(): void {
    this.dadosPagina = this.service.dados;
  }

}
