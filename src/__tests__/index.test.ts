// // src/__tests__/server.test.ts
// import request from 'supertest';
// import { server } from '../index';

// describe('HTTP Server', () => {
//   afterAll((done) => {
//     server.close(done);  // Ensure server is closed after tests
//   });

//   it('should return "Hello, TypeScript with Node.js!"', async () => {
//     const response = await request(server).get('/');
//     expect(response.statusCode).toBe(200);
//     expect(response.text).toBe('Hello, TypeScript with Node.js!\n');
//   });
// });
