import { UserData } from './../../interfaces/user';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private userService= inject(UsersServiceService);
  public userId= signal(1);

  public currentUser= signal<UserData| undefined>(undefined);
  public userWasFound= signal(true);

  public fullName = computed<string>( ()=> {
    if (!this.currentUser()) { return 'User not found';}

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;

  });

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id:number){
    if (id<=0  ) {
      return;
    }
    this.userId.set(id);
    this.currentUser.set( undefined )

    this.userService.getUserById(id).subscribe({
      next:(user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error:()=>this.userWasFound.set(false),
    }
    )

  }

}
