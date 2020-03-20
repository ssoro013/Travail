import "regenerator-runtime/runtime";
import "core-js/stable";

var request = require("supertest");

var server = require('../../server/app');

describe('GET /companies', () => {
    test('It should responds with an array of companies of length 7', async() => {
        var response = await request(server).get('/companies');
        expect(response.body.length).toEqual(7);
        expect(response.statusCode).toBe(200);
    });
});