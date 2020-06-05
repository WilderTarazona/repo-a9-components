import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITutorial } from '../models/tutorial.interface';
import { Store, Select } from '@ngxs/store';
import { RemoveTutorial } from '../actions/tutorial.actions';
import { TutorialState } from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  // tutorials$: Observable<ITutorial>;
  @Select(TutorialState.getTutorialList) tutorials$: Observable<ITutorial[]>

  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  ngOnInit(): void {
  }

  delTutorial(name: string) {
    this.store.dispatch(new RemoveTutorial(name));
  }

}
