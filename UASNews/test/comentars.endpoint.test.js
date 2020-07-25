// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect;

// chai.use(chaiHttp);
// chai.should();
// chai.use(require('chai-integer'));

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

//     it("should be fail if comentars already exist", (done) => {
//         chai.request(server)
//             .post('/api/comentar')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: 'ivan3',
//                 email: 'ivan@gmail.com',
//                 content: 'hai halo'
//             })
//             .end((err, res) => {
//                 chai.request(server)
//                     .post('/api/comentar')
//                     .set('authorization', `Bearer ${token}`)
//                     .send({
//                         name: 'ivan3'
//                     })
//                     .end((err, res) => {
//                         res.should.have.status(500);
//                         done();
//                     });
//             });
//     });

//     it("name must be not a integer", (done) => {
//         chai.request(server)
//             .get('/api/comentar')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 const data = res.body;
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].name).to.be.an.integer();
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("name must be less than 20 letters", (done) => {
//         chai.request(server)
//             .get('/api/comentar')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 console.log("data comentar")
//                 const data = res.body;
//                 console.log(data)
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].name).to.have.lengthOf.below(20);
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("insert new comentars and delete for test only", (done) => {
//         chai.request(server)
//             .post('/api/comentar/')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: 'milen',
//                 email: 'milen@gmail.com',
//                 content: 'hai saya milen'
//             })
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 const idComentars = res.body.data._id;
//                 chai.request(server)
//                     .delete('/api/comentar/' + idComentars)
//                     .set('authorization', `Bearer ${token}`)
//                     .end((err, res) => {
//                         console.log(res.body.data)
//                         expect(err).to.be.null;
//                         res.should.have.status(200);
//                         expect(res.body.data._id).to.be.equal(idComentars)
//                         done();
//                     });
//             })
//     })

//     it("should have name less than 10 characters", (done) => {
//         chai.request(server)
//             .post('/api/comentar/')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: 'netizen',
//                 email: 'netizen@gmail.com',
//                 content: 'hai'
//             })
//             .end((err, res) => {
//                 res.should.have.status(500);
//                 done();
//             });
//     })
// })