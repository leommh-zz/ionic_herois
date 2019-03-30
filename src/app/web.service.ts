import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WebService {


  //Cria o observador global
  dados: Observable<any[]>;

  //Define que o observador vai ficar vendo o collection "superH" do Firebase configurado em src/environments
  constructor(db: AngularFirestore) {
    this.dados = db.collection('superH').valueChanges();
  }

}
