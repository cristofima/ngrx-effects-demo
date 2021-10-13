import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  user!: User | null;
  loading: boolean = false;
  error: any;

  constructor(private actRouter: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(({user, loading, error})=> {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });

    this.actRouter.params.subscribe(({id}) => {
      this.store.dispatch(loadUser({id}));
    });
  }

}
