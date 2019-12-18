const dogs = require('./src/dummyData/dogs.json')
const parks = require('./src/dummyData/dogParks.json')
const owners = require('./src/dummyData/owners.json')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')

const loadDogs = function (dogs) {
    for (let dog of dogs) {
        dog.vaccinated ? dog.vaccinated = 1 : dog.vaccinated = 0
        dog.neutered ? dog.neutered = 1 : dog.neutered = 0
        console.log(dog)
        sequelize.query(`INSERT INTO dogs 
        VALUES(null,'${dog.dog_name}', '${dog.picture}',
         '${dog.gender}',${dog.age},${dog.weight},
        ${dog.vaccinated}, ${dog.neutered},1) `)
    }
}



const loadOwners = async function (owners) {
    for (let owner of owners) {
        await sequelize.query(`INSERT INTO owners VALUES(null,'${owner.name}','${owner.picture}','${owner.email},1')`)
    }
}



const loadOwnersAndDogs = async function (owners) {
    for (let owner of owners) {
        let ownerID = await sequelize.query(`SELECT owners.id FROM owners WHERE owners.email = '${owner.email}' `)
        ownerID = ownerID[0][0].id
        let dogs = owner.dogs
        for (let dog of dogs) {
            let dogID = await sequelize.query(`SELECT dogs.id FROM dogs WHERE dogs.dog_picture = '${dog.picture}'`)
            dogID = dogID[0][0].id
            await sequelize.query(`INSERT INTO dog_owner 
            VALUES (null,${ownerID},${dogID})`)
        }

    }
}



const loadParks = async function(parks){
    parks = parks.results
    for(let park of parks){
        let parkPicture = park.photos ? park.photos[0].photo_reference : null
        await sequelize.query(`INSERT INTO parks 
        VALUES(null,"${park.name}","${park.geometry.location.lng}","${park.geometry.location.lat}","${park.formatted_address}","${parkPicture}",${park.rating})`)
    }
}

// loadDogs(dogs)
// loadOwners(owners)
// loadParks(parks)
// loadOwnersAndDogs(owners)
