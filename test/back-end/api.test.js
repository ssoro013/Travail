import "regenerator-runtime/runtime";
import "core-js/stable";

var request = require("supertest");
var server = require('../../server/app');
// var redis = require('../../server/redis');

describe('GET /companies', () => {
    test('It should responds with an array of companies of length 7', async(done) => {
        var response = await request(server)
        .get('/companies')
        expect(response.statusCode).toBe(200);
        done();
    });
});

describe('Get /jobs', () => {
    test('', async(done) => {
        var response = await request(server)
        .get('/jobs')
        expect([200, 304]).toContain(response.statusCode);
        done();
    });
});

describe('Get /employees', () => {
    test('', async(done) => {
        var response = await request(server)
        .get('/employees')
        expect([200, 304]).toContain(response.statusCode);
        done();
    });
});

describe('Get /locations', () => {
    test('', async(done) => {
        var response = await request(server)
        .get('/locations')
        expect([200, 304]).toContain(response.statusCode);
        done();
    });
});

describe('Get /rounds', () => {
    test('', async(done) => {
        var response = await request(server)
        .get('/rounds')
        expect([200, 304]).toContain(response.statusCode);
        done();
    });
});

describe('Get /status', () => {
    test('', async(done) => {
        var response = await request(server)
        .get('/status')
        expect([200, 304]).toContain(response.statusCode);
        done();
    });
});

// afterAll(()=> redis.closeInstance());