import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //importing common module 

@Component({
  selector: 'app-list',
  imports: [CommonModule], //to import common module
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery"]; //array holding the names of the presidents


  presidents2: any[] = //array holding the names and the terms of the presidents
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];
}
