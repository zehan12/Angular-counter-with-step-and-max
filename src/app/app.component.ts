import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Counter App";
  author = "Zehan Khan";
  steps = [5, 10, 15];
  values = [15, 100, 200];

  count = 0;
  step = 1;
  maxValue = Infinity;

  handleMax(e) {
    console.log(e);
    this.maxValue = e;
  }

  handleStep(e) {
    this.step = e;
  }

  handleReset() {
    this.count = 0;
  }

  handleIncrement() {
    if (this.count < this.maxValue && this.count + this.step < this.maxValue) {
      this.count = this.count + this.step;
    }
  }

  handleDecrement() {
    if (this.count > 0) {
      this.count = this.count - this.step;
    }
  }
}
