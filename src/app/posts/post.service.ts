import { Injectable } from '@angular/core';
import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private afs: AngularFirestore,
    private realtime: AngularFireDatabase
  ) {

   }

  getPortfolioImages() {
    return this.realtime.list('portfolio').valueChanges();
    //return this.afs.collection("portfolio", ref => ref.limit(100)).get().toPromise();
  }
}