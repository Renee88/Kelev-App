const dogs = require('./src/dummyData/dogs.json')
const parks = require('./src/dummyData/dogParks.json')
const owners = require('./src/dummyData/owners.json')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/kelev_app')
// const sequelize = new Sequelize('mysql://root:Gilisinai1@localhost/sql_intro')


const loadDogs = function (dogs) {
    for (let dog of dogs) {
        dog.vaccinated ? dog.vaccinated = 1 : dog.vaccinated = 0
        dog.neutered ? dog.neutered = 1 : dog.neutered = 0
        sequelize.query(`INSERT INTO dogs 
        VALUES(null,'${dog.dog_name}', '${dog.picture}',
         '${dog.gender}',${dog.age},${dog.weight},
        ${dog.vaccinated}, ${dog.neutered},1) `)
    }
}



const loadOwners = async function (owners) {
    for (let owner of owners) {

        await sequelize.query(`INSERT INTO owners VALUES(null,'${owner.owner_name}','${owner.picture}','${owner.email}',1)`)

    }
}



const loadOwnersAndDogs = async function (owners) {
    for (let owner of owners) {
        let ownerId = await sequelize.query(`SELECT owners.owner_id FROM owners WHERE owners.email = '${owner.email}' `)
        ownerId = ownerId[0][0].owner_id
        let dogs = owner.dogs
        for (let dog of dogs) {
            let dogId = await sequelize.query(`SELECT dogs.dog_id FROM dogs WHERE dogs.dog_picture = '${dog.picture}'`)
            dogId = dogId[0][0].dog_id
            await sequelize.query(`INSERT INTO dog_owner 
            VALUES (null,${ownerId},${dogId})`)
        }

    }
}



const loadParks = async function(parks){
    parks = parks.results
    for(let park of parks){
        let parkPictures 
        if(park.photos){
            let photos = park.photos
            for(let photo of photos){
                !parkPictures ? parkPictures = photo.photo_reference : parkPictures += `,${photo.photo_reference}`
            }
        } else {
            parkPictures = "null"
        }
        await sequelize.query(`INSERT INTO parks 
        VALUES(null,"${park.name}","${park.geometry.location.lng}","${park.geometry.location.lat}","${park.formatted_address}","${parkPictures}","${park.rating}")`)

    }
}

// loadDogs(dogs)
// loadOwners(owners)
// loadParks(parks)
// loadOwnersAndDogs(owners)
