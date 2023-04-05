import { Component, OnInit } from '@angular/core';
import { ReelsService } from './services/reels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tiktok-app';
  fetched_data: any;
  maxIndex: number = 0;

  constructor(private reels: ReelsService) {}

  ngOnInit(): void {
    this.reels.getReels().subscribe((data) => {
      console.log(data);
      this.fetched_data = data;
      this.maxIndex = this.fetched_data?.aweme_list.length;
    });
  }
}
