const request = require('supertest');
const app = require('./app');

test('GET /tareas debe regresar lista de tareas', async () => {
  const res = await request(app).get('/tareas');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
