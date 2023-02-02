import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styles: [
    `
      .clock {
        width: 300px;
        height: 300px;
        position: relative;
        margin: 50px auto;
        border-radius: 50%;
        border: 20px solid #333;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),
          0 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px 20px rgba(0, 0, 0, 0.1);
      }
      .clock-face {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 50%;
        background-color: #ddd;
      }
      .hand {
        width: 50%;
        background-color: #333;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: 0 0;
        transform: rotate(0 deg);
        transition: all 0.05s;
        border-radius: 6px;
      }
      .hour-hand {
        width: 25%;
        background-color: red;
      }
      .minute-hand {
        width: 40%;
        background-color: green;
      }
    `,
  ],
})
export class ClockComponent implements OnInit {
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
