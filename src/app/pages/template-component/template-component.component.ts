import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css']
})
export class TemplateComponentComponent implements OnInit {
  public nameIwanos = [];

  constructor() { }

  ngOnInit(): void {
    this.nameIwanos = [ {
      name: 'Carlos Peréz'},
      {name: 'Julio Alberto Duran'},
      {name: 'Emanuel'}];
  }

}
