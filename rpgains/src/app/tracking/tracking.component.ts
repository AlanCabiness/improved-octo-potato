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
  prevxp;

  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc('users/' + localStorage.userid);
    this.user = this.userDoc.valueChanges();
    this.user.map(num => num).subscribe(x => this.userManip = x);
    // this.user.map(num => num).subscribe(x => this.historyCurl = x.historyCurl);


  }
/*
* Due to issues with asynchronous operations, we were unable to get live data on the charts.
* The charts would not initialize if the asynchronous calls did not complete, which halted us from having proper
* data visualization. We know the code that would easily make the charts work if not for our issues with observables.
* */
  weight = {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Pounds'],
      ['03/01/2018', 315],
      ['04/01/2018', 275],
      ['05/1/2018', 268],
      ['05/25/2018', 261],
      ['06/05/2018', 260]
    ],
    options: {'title': 'Weight'},
  };

  bench = {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Pounds'],
      ['03/01/2018', 25],
      ['04/01/2018', 40],
      ['05/1/2018', 50],
      ['05/25/2018', 85],
      ['06/05/2018', 100]
    ],
    options: {'title': 'Bench'},
  };

  curl = {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Pounds'],
      ['03/01/2018', 25],
      ['04/01/2018', 35],
      ['05/1/2018', 50],
      ['05/25/2018', 55],
      ['06/05/2018', 60]
    ],
    options: {'title': 'Curl'},
  };

  squat = {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Pounds'],
      ['03/01/2018', 80],
      ['04/01/2018', 120],
      ['05/1/2018', 150],
      ['05/25/2018', 175],
      ['06/05/2018', 200]
    ],
    options: {'title': 'Squat'},
  };

  calorie = {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Pounds'],
      ['03/01/2018', 1500],
      ['04/01/2018', 1900],
      ['05/1/2018', 1200],
      ['05/25/2018', 1500],
      ['06/05/2018', 1600]
    ],
    options: {'title': 'Calories'},
  };

  submitTrack() {
    // console.log(this.userManip.historyWeight.keys());
    let xpGained = 5;
    const d = new Date();
    const today = ((d.getMonth() + 1) + '/') + d.getDate() + '/' + d.getFullYear();
    if (parseInt(this.formWeight, 10) < this.userManip.lastWeight) {
      xpGained++;
    }
    this.afs.collection('users').doc(localStorage.userid).set({'lastWeight': parseInt(this.formWeight, 10)}, {merge: true});
    if (parseInt(this.formBench, 10) > this.userManip.lastBench) {
      xpGained++;
    }
    this.afs.collection('users').doc(localStorage.userid).set({'lastBench': parseInt(this.formBench, 10)}, {merge: true});
    if (parseInt(this.formSquat, 10) > this.userManip.lastSquat) {
      xpGained++;
    }
    this.afs.collection('users').doc(localStorage.userid).set({'lastSquat': parseInt(this.formSquat, 10)}, {merge: true});
    if (parseInt(this.formCurl, 10) > this.userManip.lastCurl) {
      xpGained++;
    }
    this.afs.collection('users').doc(localStorage.userid).set({'lastCurl': parseInt(this.formCurl, 10)}, {merge: true});
    if (parseInt(this.formCalorie, 10) < 2000) {
      xpGained++;
    }
    this.afs.collection('users').doc(localStorage.userid).set({'lastCalories': parseInt(this.formCalorie, 10)}, {merge: true});
    this.userManip.historyWeight[today] = parseInt(this.formWeight, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyWeight': this.userManip.historyWeight}, {merge: true});
    this.userManip.historyBench[today] = parseInt(this.formBench, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyBench': this.userManip.historyBench}, {merge: true});
    this.userManip.historyCurl[today] = parseInt(this.formCurl, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyCurl': this.userManip.historyCurl}, {merge: true});
    this.userManip.historySquat[today] = parseInt(this.formSquat, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historySquat': this.userManip.historySquat}, {merge: true});
    this.userManip.historyCalories[today] = parseInt(this.formCalorie, 10);
    this.afs.collection('users').doc(localStorage.userid).set({'historyCalories': this.userManip.historyCalories}, {merge: true});
    this.prevxp = this.userManip.xp;
    this.userManip.xp = this.userManip.xp + xpGained;
    if (Math.floor((this.userManip.xp / 5) + 1) - Math.floor((this.prevxp / 5) + 1) === 1) {
      this.afs.collection('users').doc(localStorage.userid).set({'tokens': this.userManip.tokens + 1}, {merge: true});
    } else if (Math.floor((this.userManip.xp / 5) + 1) - Math.floor((this.prevxp / 5) + 1) === 2) {
      this.afs.collection('users').doc(localStorage.userid).set({'tokens': this.userManip.tokens + 2}, {merge: true});
    }
    this.afs.collection('users').doc(localStorage.userid).set({'xp': this.userManip.xp}, {merge: true});
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
