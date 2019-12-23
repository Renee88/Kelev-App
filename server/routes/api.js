const express = require('express')
const router = express.Router()
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"
const chosenCity = "telaviv"
const Sequelize = require('sequelize')
const loader = require('../../sqlLoader')

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:@localhost/sql_intro')
// const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')

const requestPromise = require('request-promise')
// const decodePolyline = require('decode-google-map-polyline');


// mysql://bc4d67280c9d6e:63039853@us-cdbr-iron-east-05.cleardb.net/heroku_a02de44653b3060?reconnect=true

// mysqldump -h localhost -u root -p sql_intro | mysql -h us-cdbr-iron-east-05.cleardb.net -u b3b924c88d8d21 -p 4dd4c913 heroku_767c888e8ac0aca


router.post('/distance', (req, res) => {
    const origin = req.body.origin
    const destination = req.body.destination
    requestPromise(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&units=metric&mode=walking&key=${apiKey}`)
        .then(response => { res.send(response) })
})

router.get('/directions', (req, res) => {
    const directions = req.query
    const originCo = directions.origin
    const destinationCo = directions.destination
    requestPromise(`https://maps.googleapis.com/maps/api/directions/json?origin=${originCo}&destination=${destinationCo}&key=AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY&mode=walking`)
        .then(response => {
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
                    park_picture: p.park_picture,
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

router.get('/owner', function (req, res) {
    sequelize.query(`SELECT * FROM owners WHERE owners.id = 1`)
        .then(function (results) {
            const owner = results[0]
            res.send(owner)
        })

})

router.put('/owner', function (req, res) {
    let userStatus = req.body.userStatus
    sequelize.query(`UPDATE owners 
    SET owner_status = '${userStatus}' WHERE owners.id = 1`)

    res.send("done")


})

router.put('/dog-profile', function (req, res) {
    const detailsForEdit = req.body
    const fieldName = detailsForEdit.fieldName
    const fieldValue = detailsForEdit[fieldName]
    const dogId = detailsForEdit.id

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

    await sequelize.query(`INSERT INTO dogs VALUES(null,"${newDog.dog_name}","${newDog.dog_picture}","${newDog.gender}",${newDog.age},${newDog.weight},${newDog.vaccinated},${newDog.neutered},${newDog.dog_status})`)

    const results = await sequelize.query(`SELECT * FROM dogs`)
    const dogs = results[0]
    const lastIndex = dogs.length - 1
    const newDogId = dogs[lastIndex].id

    sequelize.query(`INSERT INTO dog_owner VALUES (null,${newDog.owner_id},${newDogId})`)
        .then(function (results) {
            res.send(dogs[lastIndex])
        })


})

router.delete('/dog-profile',function(req,res){
    const dogToRemove = req.body
    sequelize.query(`DELETE FROM dog_owner WHERE dog_id = ${dogToRemove.id} AND owner_id = ${dogToRemove.owner_id}`)
    .then(function(){
        sequelize.query(`DELETE FROM dogs WHERE dogs.id = ${dogToRemove.id}`)
        .then(function(){
            res.send(`Dog with the id of ${dogToRemove.id} was deleted from user ${dogToRemove.owner_id}`)
        })
    })
})


// `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}key=${apiKey}`
// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&language=en&key=${apiKey}`
module.exports = router