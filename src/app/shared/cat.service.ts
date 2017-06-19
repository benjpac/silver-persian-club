import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CatService {
  cats: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cats = database.list('cats');
  }

  getCats() {
    return this.cats;
  }

  addCat(newCat: Cat) {
    this.cats.push(newCat);
  }

  getCatById(catId: string) {
    return this.database.object('cats/' + catId);
  }

  updateCat(localUpdatedCat){
    var catEntryInFirebase = this.getCatById(localUpdatedCat.$key);
    catEntryInFirebase.update({name: localUpdatedCat.name,
                                age: localUpdatedCat.age,
                                likes: localUpdatedCat.likes,
                                dislikes: localUpdatedCat.dislikes,
                                image: localUpdatedCat.image});
  }

  deleteCat(localDeletedCat) {
    var catEntryInFirebase = this.getCatById(localDeletedCat.$key);
    catEntryInFirebase.remove();
  }

}
