import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  EVENTS = [
    {
      'id': '1',
      'name': 'IFMAC & WOODMAC 2023',
      'location': 'Jakarta International Expo (JIEXPO) Kemayoran',
      'date': '20-23 September 2023',
      'image': 'assets/images/IFMAC-2023-720x405.jpg',
    },
    {
      'id':'2',
      'name': 'GEBYAR TRAVEL FAIR 2023',
      'location': 'Jakarta Convention Center',
      'date': '17 – 20 Mei 2023 ',
      'image' : 'assets/images/Pameran-Wisata-JCC-720x405.jpg'
    },
    {
      'id':'3',
      'name': 'Halal Fair Jakarta 2023',
      'location': 'Istora GBK Jakarta',
      'date': '03 – 05 Agustus 2023',
      'image': 'assets/images/Halal-Fair-Jakarta-720x405.jpg'
    },
    {
      'id':'4',
      'name' : 'Job Fair Nasional Jakarta – Oktober 2022',
      'location': 'Hall A JCC',
      'date': '28-30 Oktober 2022',
      'image': 'assets/images/JOB-FAIR-JAKARTA-JCC-720x405.jpg'
    }
  ]

  constructor() {}

}
