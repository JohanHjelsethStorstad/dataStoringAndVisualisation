const ctx = document.getElementById('canvas')

fetch('http://localhost:3000/measurements').then(res => res.json()).then(({ measturments }) => {
  const times = measturments.map(x => x.time)
  const noice = measturments.map(x => x.noice)
  const pollution = measturments.map(x => x.pollution)
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: times,
      datasets: [
      {
        data: noice,
        label: "noice",
      },
      {
        data: pollution,
        label: "pollution",
      },
    ]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
        },
      },
    }
  })
}).catch(console.error)

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