require('dotenv').config()
const express = require('express')
const router = express.Router()
const apiKey = process.env.REACT_APP_API_KEY

const chosenCity = "telaviv"
const Sequelize = require('sequelize')


const sequelize = new Sequelize('mysql://root:@localhost/kelev_app')
// const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')

const requestPromise = require('request-promise')


router.post('/distance', (req, res) => {
    const origin = req.body.origin
    const destination = req.body.destination
    console.log(apiKey)
    requestPromise(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&units=metric&mode=walking&key=${apiKey}`)
        .then(response => { res.send(response) })
})

router.get('/directions', (req, res) => {
    const directions = req.query
    const originCo = directions.origin
    const destinationCo = directions.destination
    requestPromise(`https://maps.googleapis.com/maps/api/directions/json?origin=${originCo}&destination=${destinationCo}&key=${apiKey}&mode=walking`)
        .then(response => {
            console.log(response)
            res.send(response)
        })
})

router.get('/map', function (req, res) {
    sequelize.query(`SELECT * FROM parks`)
        .then(function (results) {
            let parks = results[0]
            parks = parks.map(p => {
                return {
                    id: p.id,
                    park_name: p.park_name,
                    position: {
                        lng: p.lng,
                        lat: p.lat
                    },
                    address: p.address,
                    park_pictures: p.park_pictures,
                    rating: p.rating

                }
            })

            res.send(parks)
        })
})

router.get('/parks/:id', async function (req, res) {
    const parkId = req.params.id
    sequelize.query(`SELECT * FROM parks WHERE parks.id = ${parkId}`)
        .then(function (results) {
            const chosenPark = results[0][0]
            res.send(chosenPark)
        })
})

router.get('/dogs', function (req, res) {
    sequelize.query(`SELECT * FROM dogs`)
        .then(function (results) {
            const dogs = results[0]
            res.send(dogs)
        })
})

router.get('/owner/dogs/:id', function (req, res) {
    const id = req.params.id
    sequelize.query(`SELECT dogs.*, owners.* FROM dogs,owners,dog_owner WHERE owner_id = ${id} AND dogs.id = dog_id AND owners.id = owner_id `)
    .then(function (results) {
        const dogs = results[0][0]
        console.log(dogs)
        res.send(dogs)
    })
})

router.put('/owner', function (req, res) {
    let userStatus = req.body.userStatus
    const id = 22
    sequelize.query(`UPDATE owners 
    SET owner_status = '${userStatus}' WHERE owners.id = ${id}`)
        res.send("done")  
})

router.put('/dog-profile', function (req, res) {
    const detailsForEdit = req.body
    const fieldName = detailsForEdit.fieldName
    const fieldValue = detailsForEdit.fieldValue
    const dogId = detailsForEdit.dogId
  
    sequelize.query(`UPDATE dogs 
    SET ${fieldName} = '${fieldValue}' WHERE dogs.id = ${dogId}`)
        .then(function (results) {
            sequelize.query(`SELECT dogs.* FROM dogs WHERE dogs.id = ${dogId}`)
                .then(function (results) {
                    const updatedDog = results[0][0]
                    res.send(updatedDog)
                })
        })
})


router.post('/dog-profile', async function (req, res) {
    const newDog = req.body
    newDog.vaccinated ? newDog.vaccinated = 1 : newDog.vaccinated = 0
    newDog.neutered ? newDog.neutered = 1 : newDog.neutered = 0
    console.log(newDog);
    

    await sequelize.query(`INSERT INTO dogs VALUES(null,"${newDog.dog_name}","${newDog.dog_picture}","${newDog.gender}",${newDog.age},${newDog.weight},${newDog.vaccinated},${newDog.neutered},${newDog.dog_status})`)

    const dogs = results[0]
    const lastIndex = dogs.length - 1
    const newDogId = dogs[lastIndex].id
    
    sequelize.query(`INSERT INTO dog_owner VALUES (null,${newDog.owner_id},${newDogId})`)
    .then(async function(results){
        const results = await sequelize.query(`SELECT dogs.* FROM dogs,dog_owner WHERE owner_id = ${id} AND dogs.id = dog_id`)
        const dogsOfOwner = results[0]
        console.log(dogsOfOwner)
        res.send(dogsOfOwner)
    })
})

router.delete('/dog-profile', function (req, res) {
    const dogToRemove = req.body
    sequelize.query(`DELETE FROM dog_owner WHERE dog_id = ${dogToRemove.id} AND owner_id = ${dogToRemove.owner_id}`)
        .then(function () {
            sequelize.query(`DELETE FROM dogs WHERE dogs.id = ${dogToRemove.id}`)
                .then(function () {
                    res.send(`Dog with the id of ${dogToRemove.id} was deleted from user ${dogToRemove.owner_id}`)
                })
        })
})



// `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}key=${apiKey}`
// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&language=en&key=${apiKey}`
module.exports = router