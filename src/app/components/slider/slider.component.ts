import {Component, OnInit} from '@angular/core';
import { Review } from '../../interfaces/reviews';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

    reviews: Review[] = [
    {
      name: "Joe",
      review: "Very helpful and easy to work with! Shoes are great quality",
      rating: 5
    },
    {
      name: "Hector",
      review: "Didn't like the owners attitude, says Nike isn't better than New Balance",
      rating: 2
    },
    {
      name: "Amy",
      review: "Heels broke when I wore them",
      rating: 3
    },
    {
      name: "Jim",
      review: "Logo looked a bit off so I didn't trust it at first but they're actually fine! Great products!",
      rating: 5
    }
  ];

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  currentSlide:number = 0;

  constructor() {
  }

  ngOnInit(): void {

    setInterval(() => {
      this.next()
    }, 4000); // Change slide every 3 seconds
  }

  getClasses(index:number){
    return index === this.currentSlide ? 'active' : 'inactive';
  }

  next() {
    this.currentSlide++;
    if (this.currentSlide >= this.reviews.length) {
      this.currentSlide = 0;
    }
  }

  previous() {
    this.currentSlide--;
    if (this.currentSlide < 0){
      this.currentSlide = this.reviews.length - 1
    }
  }

}


