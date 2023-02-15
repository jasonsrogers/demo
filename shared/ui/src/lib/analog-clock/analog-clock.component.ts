import { Component, OnInit } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

export type Hand = Partial<{
  transform: string;
  'background-color': string;
  height: string;
}>;

export const handHeights = {
  hours: 10,
  minutes: 6,
  seconds: 4,
};

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent implements OnInit {
  hourHandStyles: Hand = {};
  minuteHandStyles: Hand = {};
  secondHandStyles: Hand = {};

  ngOnInit() {
    const date = new Date();
    this.setClockHands(date.getHours(), date.getMinutes(), date.getSeconds());
    const clockUpdate = interval(1000).pipe(
      startWith(0),
      map(() => {
        const date = new Date();
        this.setClockHands(
          date.getHours(),
          date.getMinutes(),
          date.getSeconds()
        );
      })
    );
    clockUpdate.subscribe();
  }

  private setClockHands(hours: number, minutes: number, seconds: number) {
    this.hourHandStyles = this.calculateHoursAngle(hours, minutes);
    this.minuteHandStyles = this.calculateMinutesAngle(minutes);
    this.secondHandStyles = this.calculateSecondsAngle(seconds);
  }

  private calculateHoursAngle(hours: number, minutes: number): Hand {
    return {
      transform: this.getTransformStyle(hours / 12, handHeights.hours),
      height: `${handHeights.hours}px`,
    };
  }

  private calculateMinutesAngle(minutes: number): Hand {
    return {
      transform: this.getTransformStyle(minutes / 60, handHeights.minutes),
      height: `${handHeights.minutes}px`,
    };
  }
  private calculateSecondsAngle(seconds: number): Hand {
    return {
      transform: this.getTransformStyle(seconds / 60, handHeights.seconds),
      height: `${handHeights.seconds}px`,
    };
  }

  private getTransformStyle(percentage: number, width: number): string {
    return [
      this.getTransformRotateStyle(this.calculateAngle(percentage)),
      this.getTransformTranslateStyle(width),
    ].join(' ');
  }

  private getTransformTranslateStyle(width: number): string {
    return `translate(0, -${width / 2}px)`;
  }

  private getTransformRotateStyle(angle: number): string {
    return `rotate(${angle}deg)`;
  }

  private calculateAngle(percentage: number): number {
    return Math.round(percentage * 360) - 90;
  }
}
