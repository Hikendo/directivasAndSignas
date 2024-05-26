import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItem = signal<MenuItem[]>([
    {title:'Counter',router:'counter'},
    {title:'User-info',router:'user-info'},
    {title:'Properties',router:'properties'}
  ]);
  /** lo trabajaremos pero n signals
  public menuItem: MenuItem[]=[
    {title:'Counter',router:'counter'},
    {title:'User-info',router:'user-info'},
    {title:'Properties',router:'properties'}
  ]; **/

}
