const express = require('express')
const router = express.Router()
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"
const chosenCity = "telaviv"
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/kelev_app')
// const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')
const requestPromise = require('request-promise')
// const decodePolyline = require('decode-google-map-polyline');

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
    requestPromise(`https://maps.googleapis.com/maps/api/directions/json?origin=${originCo}&destination=${destinationCo}&key=AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY`)
        .then(response => {
            response = JSON.parse(response)
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

router.get('/park/:id', async function (req, res) {
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

router.delete('/dog-profile', function (req, res) {
    sequelize.query(`DELETE FROM dog_owner WHERE dog_id = ${dog.id} AND owner_id = ${owner.id}`)
})

router.get(`/park-picture/:photoReference`, function(req,res){
    const photoReference = req.params.photoReference
    requestPromise(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=${apiKey}`
        ).then(response => {
            res.send(response.url)
            console.log(response.url)})
})


// `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}key=${apiKey}`
// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dogpark+telaviv+israel&language=en&key=${apiKey}`
module.exports = router