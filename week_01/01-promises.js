'use strict'

const request = require('request-promise')
const BASE_URL = 'http://swapi.co/api/people/1'


function callApi(url) {
    return new Promise((resolve, reject) => {
        request(url, (err, response, data ) => {
            const vehicles = JSON.parse(data).vehicles.map(function(vehicle) {
                request(vehicle, function (error, response, data) {
                    console.log(data)
                })
            })
        })
    })
  }

callApi(BASE_URL)
