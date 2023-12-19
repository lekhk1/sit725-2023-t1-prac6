const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/car';
let car = {path:'',title:''}

describe('test POST api', function() {
    it('returns statusCode of 200', function(done) {
       car.path='images/car1.jpg',
       car.title='car1'
        
        request(url, function(error, response, car) {
            if (error) {
                done(error);
            } else {
                expect(response.statusCode).to.equal(200);
                done();
            }
        });
    });
});