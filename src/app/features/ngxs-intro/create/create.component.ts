import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../actions/tutorial.actions';
import { ITutorial } from '../models/tutorial.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addTutorial(name:string, url: string) {
    this.store.dispatch(new AddTutorial({ name, url}));
  }

}
