import { CatService } from './../shared/cat.service';
import { Cat } from './../shared/cat.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CatService]
})
export class AdminComponent implements OnInit {

  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, description: string, image: string) {
    const newCat: Cat = new Cat(name, age, description, image);
    this.catService.addCat(newCat);
  }

}
