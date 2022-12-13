import { Component, OnInit } from '@angular/core';
import { img } from 'src/assets/imagens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public imagens : any;
  constructor() {}

  ngOnInit(): void {
    this.imagens = img;
  }
};

