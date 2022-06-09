import { Component, Input, OnInit } from '@angular/core';
import { Correo } from './correo.modelo';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent implements OnInit {

  @Input() correos : Correo[] = [] ;
  constructor() { }

  ngOnInit(): void {
  }

}
