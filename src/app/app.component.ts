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
  bottom_loader: boolean = false;

  constructor(private reels: ReelsService) {}

  ngOnInit(): void {
    this.reels.getReels().subscribe((data) => {
      console.log(data);
      this.fetched_data = data?.aweme_list;
      this.maxIndex = this.fetched_data.length;
      console.log(this.fetched_data);
    });
  }

  fetchData() {
    console.log('Emitted');
    this.bottom_loader = true;
    this.reels.getReels().subscribe((data) => {
      this.bottom_loader = false;
      this.fetched_data = this.fetched_data.concat(data?.aweme_list);
      this.maxIndex = this.fetched_data.length;
      console.log(this.fetched_data);
    });
  }
}
