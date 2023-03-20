const ctx = document.getElementById('noiceCanvas')

fetch('http://localhost:3000/measurements').then(res => res.json()).then(data => {
    console.log(data)
}).catch(console.error)

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
  fetch('http://localhost:3000/sensor', { 
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: bool })
  }).then(() => {
    getSensorState()
  }).catch(console.error)
}

function getSensorState() {
  fetch('http://localhost:3000/sensor').then(res => res.json()).then(({ state }) => {
    console.log(state)
    document.getElementById('sensorState').innerHTML = "the sensor is " + (state ? "on" : "off")
  }).catch(console.error)
}
getSensorState()