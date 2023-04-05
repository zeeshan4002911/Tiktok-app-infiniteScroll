import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit, AfterViewInit {
  constructor() {}
  pause_button: boolean = false;
  play_button: boolean = false;

  @Input() data: any;
  @Input() index!: number;
  @Input() maxIndex!: number;
  @ViewChild('video', { static: true }) video!: ElementRef;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          this.videoControl();
          if (entry.target.dataset.nsIdx == this.maxIndex - 1) {
            console.log('end of reel');
          }
        } else {
          this.videoControl();
        }
      });
    });

    observer.observe(this.video.nativeElement);
  }

  videoControl() {
    // video paused if in play state
    if (!this.video.nativeElement.paused) {
      this.pause_button = true;
      this.video.nativeElement.pause();
      return;
    }

    this.pause_button = false;
    this.play_button = true;
    setTimeout(() => {
      this.play_button = false;
      this.video.nativeElement.play();
    }, 700);
  }
}
