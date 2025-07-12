import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-slider',
  templateUrl: './client-slider.component.html',
  styleUrls: ['./client-slider.component.css']
})
export class ClientSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageObject: Array<object> = [{
    image: 'assets/clients/godrej.jfif',
    thumbImage: 'assets/clients/godrej.jfif'
}, {
  image: 'assets/clients/symphony.jpg',
  thumbImage: 'assets/clients/symphony.jpg'
},
{
  image: 'assets/clients/vip.jpg',
  thumbImage: 'assets/clients/vip.jpg'
},
{
  image: 'assets/clients/bag.png',
  thumbImage: 'assets/clients/bag.png'
},
{
  image: 'assets/clients/freewill.png',
  thumbImage: 'assets/clients/freewill.png'
},
{
  image: 'assets/clients/haier.png',
  thumbImage: 'assets/clients/haier.png'
},
{
  image: 'assets/clients/samsung.jpeg',
  thumbImage: 'assets/clients/samsung.jpeg'
},
{
  image: 'assets/clients/whirlpool.jfif',
  thumbImage: 'assets/clients/whirlpool.jfif'
},
{
  image: 'assets/clients/bdg.jpg',
  thumbImage: 'assets/clients/bdg.jpg'
},
{
  image: 'assets/clients/lg.jpg',
  thumbImage: 'assets/clients/lg.jpg'
},
{
  image: 'assets/clients/pepsico.jpg',
  thumbImage: 'assets/clients/pepsico.jpg'
}
];

}
