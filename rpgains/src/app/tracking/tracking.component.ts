import {Component, OnInit} from '@angular/core';
import {AngularFirestoreDocument, AngularFirestore} from 'angularfire2/firestore';
import {User} from '../User';
import {Observable} from 'rxjs/observable';

// import { drawChart } from 'assets/javascript/chartTest';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],

})
export class TrackingComponent implements OnInit {

  userName = localStorage.userName;
  private userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  userManip;
  tokens = -1;
  historyCurl;
  formWeight;
  formBench;
  formSquat;
  formCurl;
  formCalorie;

  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc('users/' + localStorage.userid);
    this.user = this.userDoc.valueChanges();
    this.user.map(num => num).subscribe(x => this.userManip = x);
    // this.user.map(num => num).subscribe(x => this.historyCurl = x.historyCurl);


  }

  // get all keys as x var
  // sortedKeys = Object.keys(this.userManip.historyWeight).sort();
  /*weight = {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Pounds'],
      [this.userManip.historyWeight[0], this.userManip.historyWeight[this.sortedKeys[0]]],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {'title': 'Weight'},
  };*/

  bench = {
    chartType: 'LineChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {'title': 'Tasks'},
  };

  curl = {
    chartType: 'LineChart',
    dataTable: [
      [, 'litable'],
      // [this.userManip.historyCurl[Object.keys(this.userManip.historyCurl)[0]], 31],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {'title': 'Curl'},
  };

  squat = {
    chartType: 'LineChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 31],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {'title': 'Tasks'},
  };

  calorie = {
    chartType: 'LineChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 31],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {'title': 'Tasks'},
  };

  submitTrack() {
    const d = new Date();
    const today = ((d.getMonth() + 1) + '/') + d.getDate() + '/' + d.getFullYear();
    this.afs.collection('users').doc(localStorage.userid).set({'lastWeight': parseInt(this.formWeight, 10)}, {merge: true});
    this.afs.collection('users').doc(localStorage.userid).set({'lastBench': parseInt(this.formBench, 10)}, {merge: true});
    this.afs.collection('users').doc(localStorage.userid).set({'lastSquat': parseInt(this.formSquat, 10)}, {merge: true});
    this.afs.collection('users').doc(localStorage.userid).set({'lastCurl': parseInt(this.formCurl, 10)}, {merge: true});
    this.afs.collection('users').doc(localStorage.userid).set({'lastCalories': parseInt(this.formCalorie, 10)}, {merge: true});
    this.userManip.historyWeight[today] = parseInt(this.formWeight, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyWeight': this.userManip.historyWeight}, {merge: true});
    this.userManip.historyBench[today] = parseInt(this.formBench, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyBench': this.userManip.historyBench}, {merge: true});
    this.userManip.historyCurl[today] = parseInt(this.formCurl, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyCurl': this.userManip.historyCurl}, {merge: true});
    this.userManip.historySquat[today] = parseInt(this.formSquat, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historySquat': this.userManip.historySquat}, {merge: true});
    this.userManip.historySquat[today] = parseInt(this.formCalorie, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyCalories': this.userManip.historyCalories}, {merge: true});
    // alert(today);
  }

  ngOnInit() {
    // this.sortedKeys = Object.keys(this.historyCurl).sort();
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
