import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  constructor(private router:Router){
    console.log('SIDEBAR LOADED...');
  }

  gotoPage(){
    this.router.navigateByUrl('/basicdetails');
  }
  
}
