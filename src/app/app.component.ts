import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cricketScore';
  scoreArray: any[] = [];
  hideButton: boolean = false
  totalRuns: any;
  totalBall: any;
  totalWickets: any;
  arrayLength = 6;
  overRun: any = [];
  runsarray: any = [];
  ballArray: any = [];
  arrayofWickets: any = [];
  arrayofOver: any = [];
  runOnperOver: any = [];
  totalOver: any;
  runPerOver: any;

  ngOnInit(): void {

  }
  constructor() {

  }

  calcaulateScore(type: string, score: number) {

    if (type === 'NB' || type === 'WD') {
      this.arrayLength++
    }
    if (this.scoreArray.length == this.arrayLength) {
      if (type === 'newOver') {
        this.scoreArray.length = 0
        this.ballArray = []
        this.hideButton = false
        if (this.scoreArray.length == 0) {
          this.arrayofOver.push(score)
          this.totalOver = this.arrayofOver.reduce((acc: any, cur: any) => acc + Number(cur), 0)
          this.arrayLength = 6
          // if (!this.runOnperOver) {
          //   this.runOnperOver = this.totalRuns
          // }
          // else {
          //   this.runOnperOver = this.totalRuns - this.runOnperOver
          // }
          this.overRun.push(this.runPerOver)
          this.runOnperOver.length = 0

        }
      }
      return
    }
    else {
      this.scoreArray.push(type)
      if (type === 'W') {

        this.arrayofWickets.push(score)
        this.totalWickets = this.arrayofWickets.reduce((acc: any, cur: any) => acc + Number(cur), 0)
      }
      else {
        this.runsarray.push(score)
        this.totalRuns = this.runsarray.reduce((acc: any, cur: any) => acc + Number(cur), 0)
        if (this.runOnperOver == this.arrayLength + 1) {

        }
        else {
          this.runOnperOver.push(score)
          this.runPerOver = this.runOnperOver.reduce((acc: any, cur: any) => acc + Number(cur), 0)
        }
      }
      if (type === 'NB' || type === 'WD') {
      } else {
        this.ballArray.push(score ?? type)
      }

      if (this.scoreArray.length == this.arrayLength) {

        this.hideButton = true;
        return
      }


    }
  }

}
