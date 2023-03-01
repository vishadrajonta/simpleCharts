const labels = ["6","7","8","9","10","11","12","13","14","15","16","17","19"]
const site1 = [7,184,402,636,674,689,721,760,478,304,6,6,0];
const site2 = [24, 34, 54, 62, 34, 54, 23];
const data = {
  labels: labels,
  datasets: [{
    label: 'Kilowatt by hours',
    data: site1,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
}]
};
 
const config = {
  type: 'line',
  data: data,
};
 
const ctx = document.getElementById('myChart');
  
new Chart(ctx, config);
