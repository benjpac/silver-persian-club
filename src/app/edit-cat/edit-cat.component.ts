import { CatService } from './../shared/cat.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css'],
  providers: [CatService]
})
export class EditCatComponent implements OnInit {
  @Input() selectedCat;

  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  beginUpdatingCat(catToUpdate) {
    alert('Edit saved')
    this.catService.updateCat(catToUpdate);
  }

  beginDeletingCat(catToDelete) {
    if (confirm('Are you sure you want to delete this cat?')) {
      this.catService.deleteCat(catToDelete);
    }
  }

}
