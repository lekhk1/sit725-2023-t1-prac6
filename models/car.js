let client = require('../dbConnection');

let collection = client.db().collection('cars');

function postCar(car, callback) {
    collection.insertOne(car,callback);
}

function getAllCars(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postCar,getAllCars}