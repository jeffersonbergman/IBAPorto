import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-iba-footer',
  templateUrl: './iba-footer.component.html',
  styleUrls: ['./iba-footer.component.css']
})
export class IbaFooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }
}
