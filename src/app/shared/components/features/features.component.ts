import { Component, OnInit } from '@angular/core';
import { Ifeature } from '../../models/features.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  public featureArray: Ifeature[] = [
    {
      iconClass: 'fa-solid fa-tablet-screen-button fa-3x',
      title: 'Fully Responsive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      iconClass: 'fa-regular fa-lemon fa-3x',
      title: 'Fully Layered PSD',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      iconClass: 'fa-regular fa-folder fa-3x',
      title: 'Font Awesome Icons',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      iconClass: 'fa-solid fa-code fa-3x',
      title: 'HTML3 & CSS3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      iconClass: 'fa-regular fa-envelope fa-3x',
      title: 'Email Template',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      iconClass: 'fa-regular fa-bookmark fa-3x',
      title: 'Free To Download',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
