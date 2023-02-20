import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styles: [
  ]
})
export class DonasComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  random(){
    this.doughnutChartData.datasets.forEach(data => {
     // console.log(data.data);
      data.data = [
        Math.round(Math.random() * 100),      
        Math.round(Math.random() * 100),      
        Math.round(Math.random() * 100)];

    })
   
    this.chart?.update();

  }
}
