'use strict'
const request = require('request-promise')

const BASE_URL = 'http://swapi.co/api'

async function run() {
  const luke = await request(`${BASE_URL}/people/1`)
  const lukeVehicles = JSON.parse(luke)
  const vehicles = lukeVehicles.vehicles.map(async url => {
    const vehicle = await request(url)
    console.log(vehicle)
  })
}
run()
  .then(() => console.log('Now we have all vehicles'))
  .catch(err => {
    console.log('Something bad happened')
})