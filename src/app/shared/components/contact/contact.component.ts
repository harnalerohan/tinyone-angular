import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  iconsArray: string[] = [
    '<i class="fa-brands fa-square fa-square-facebook fa-2x"></i>',
    '<i class="fa-brands fa-square-twitter fa-2x"></i>',
    '<i class="fa-brands fa-square fa-google-plus fa-2x"></i>',
    '<i class="fa-brands fa-square fa-pinterest fa-2x"></i>',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
