'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
// Add your code here

const workingHours = tasks.map(min => min.duration/60);

const weightedHours = workingHours.filter(min => { if(min >= 2) return min;});

const perHourIncome = weightedHours.map( x => x * 120);

const totalIncome = perHourIncome.reduce((acc, cur)=> { return acc + cur});


console.log('Working Time: ' + workingHours);
console.log('Weighted more than two hours:' + weightedHours);
console.log('Gross hourly income: ' + perHourIncome);
console.log('Total Income in krornor, 120-SEK per hour: ' + totalIncome);
console.log('Total income in € ' + ((totalIncome)/10.3).toFixed(2));
