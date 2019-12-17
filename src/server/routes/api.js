const express = require('express')
const router = express.Router()
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"
const chosenCity = "telaviv"
`https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&key=${apiKey}`
module.exports = router