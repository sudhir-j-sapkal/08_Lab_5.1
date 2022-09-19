const request = require('supertest');
const app = require('./app.js');

describe ("Test For Routes Testing", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/boat/1");
        expect(response.statusCode).toBe(200)
    })
    test("should respond with correct Content Type header", async () => {
        const response = await request(app).get("/boat/1");
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    })
    test("should respond with a 404 status code", async () => {
        const response = await request(app).get("/boat/220");
        expect(response.statusCode).toBe(404)
    })
    test("should respond with a 400, 405 or 404 status code", async () => {
        const response = await request(app).post("/boat/1");
        expect(response.statusCode).toBe(405)
    })
    test("should respond with a 500  status code", async () => {
        const response = await request(app).get("/boat/undefined");
        expect(response.statusCode).toBe(500)
    })
    test("should respond with a data correct data", async () => {
        const response = await request(app).get("/boat/1");
        expect(response.body.color).toBe("red")
    })
});
