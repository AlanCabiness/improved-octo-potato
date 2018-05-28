import {Component, OnInit} from '@angular/core';
import {Track} from '../track';
// import { drawChart } from 'assets/javascript/chartTest';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],

})
export class TrackingComponent implements OnInit {

  constructor() {}

  LineChartData =  {
    chartType: 'LineChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {'title': 'Tasks'},
  };

  model = new Track(200, 2000, 150, 100, 125);

  submitted = false;

  ngOnInit() {
  }

}



// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
//
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Year', 'Sales', 'Expenses'],
//     ['2004',  1000,      400],
//     ['2005',  1170,      460],
//     ['2006',  660,       1120],
//     ['2007',  1030,      540]
//   ]);
//
//   var options = {
//     title: 'Company Performance',
//     curveType: 'function',
//     legend: { position: 'bottom' }
//   };
//
//   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//
//   chart.draw(data, options);
// }
