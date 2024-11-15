import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iba-toolbar',
  templateUrl: './iba-toolbar.component.html',
  styleUrls: ['./iba-toolbar.component.css']
})
export class IbaToolbarComponent {

  constructor(private router: Router){}

  navigateTo(path: string){
    this.router.navigate([path]);
  }
}
