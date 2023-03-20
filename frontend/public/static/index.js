const ctx = document.getElementById('noiceCanvas')

fetch('http://localhost:3000/measurements').then(res => JSON.parse(res)).then(data => {
    console.log(data)
}) 

const noiceCart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        data: [{x: 2, y:1, x:3, y:6}],
        label: "noice",
      }]
    },
    options: {
        scales: {
          x: {
            type: 'linear',
          },
        },
      }
})

function setSensor(bool) {
  fetch('http://localhost:3000/measurements', { 
    method: 'PUT', 
    body: JSON.stringify({state: bool}) 
  }).then(() => {
    getSensorState()
  })
}

function getSensorState() {
  fetch('http://localhost:3000/measurements').then(res => JSON.parse(res)).then(data => {
    console.log(data)
    document.getElementById('sensorState').innerHTML = data
  })
}