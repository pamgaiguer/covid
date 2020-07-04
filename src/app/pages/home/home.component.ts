import { Component, OnInit } from '@angular/core';
import { publicity } from '../publicity/publicity'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  allpublicity = publicity;

  constructor() { }

  ngOnInit(): void {
  }

}
