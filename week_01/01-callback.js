'use strict'

/* callback-hell*/

const request = require('request')

const BASE_URL = 'http://swapi.co/api/people/1'

function getData(url) {
    request(url, function(error, response, data) {
        if (error) {
            throw error
        }
          const lukeVehicles = JSON.parse(data)
          const vehicles = lukeVehicles.vehicles.map(function(vehicle) {
              request(vehicle, function (error2, response2, data2) {
                  if (error2) {
                      throw error2
                  }
                console.log(data2)
              })
          })
    })
}

getData(BASE_URL)
