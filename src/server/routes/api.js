const express = require('express')
const router = express.Router()
const distance = require('google-distance-matrix')
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"
distance.key("AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY")

router.post('/distance', (req, res, next) => {
    const origin = req.body.origin
    const destination = req.body.destination
    const mode = req.body.mode

    distance.matrix(origin, destination, mode, function (err, distance) {
        if (!err) {
            res.send(distance.rows[0].elements[0])
        }
    })
})


"https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&key=AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"
module.exports = router

// const chosenCity = "telaviv"
// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&key=${apiKey}`
// module.exports = router
