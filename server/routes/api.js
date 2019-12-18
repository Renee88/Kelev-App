const express = require('express')
const router = express.Router()
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"
const chosenCity = "telaviv"
const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')
const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')
const requestPromise = require('request-promise')
const distance = require('google-distance-matrix')
distance.key("AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY")

router.post('/distance', (req, res) => {
    const origin = req.body.origin
    const destination = req.body.destination
    const mode = req.body.mode

    distance.matrix(origin, destination, mode, function (err, distance) {
        if (!err) {
            res.send(distance.rows[0].elements[0])
        }
    })
})

router.post('/directions', (req, res) => {
    requestPromise(`https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY`)
        .then(response => res.send(response.data))
})

router.get('/map', function (req, res) {
    sequelize.query(`SELECT * FROM parks`)
        .then(function (results) {
            let parks = results[0]
            console.log(parks)
            parks = parks.map(p => {
                return {
                    id: p.id,
                    park_name: p.park_name,
                    position: {
                        lng: p.lng,
                        lat: p.lat
                    },
                    address: p.address,
                    park_picture: p.park_picture,
                    rating: p.rating

                }
            })

            res.send(parks)
        })
})

// `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}key=${apiKey}`
// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&language=en&key=${apiKey}`
module.exports = router