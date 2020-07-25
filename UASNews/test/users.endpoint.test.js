// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();
// chai.use(require('chai-integer'));

// // // // users
// describe("users Endpoint", () => {
//     it("should be unauthorized to get all users without token", (done) => {
//         chai.request(server)
//             .get('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new users without token", (done) => {
//         chai.request(server)
//             .post('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update users without id", (done) => {
//         chai.request(server)
//             .put('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete users without token", (done) => {
//         chai.request(server)
//             .delete('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
// })

// let token;
// describe("Login", () => {
//     it("should return token", (done) => {
//         chai.request(server)
//             .get('/auth/login')
//             .auth('adminberita', '1234567')
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 token = res.body.token;
//                 done();
//             });
//     });
//     it("should get all roles", (done) => {
//         chai.request(server)
//             .get('/api/users')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 done();
//             });
//     })

//     it("email must be less than 10", (done) => {
//         chai.request(server)
//             .get('/api/users/')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 const data = res.body;
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].email).to.have.lengthOf.below(10);
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("username must be not a integer", (done) => {
//         chai.request(server)
//             .get('/api/users')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 const data = res.body;
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].username).to.be.an.integer();
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

// })