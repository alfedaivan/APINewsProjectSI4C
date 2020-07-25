// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect;

// // Configure chai
// chai.use(chaiHttp);
// chai.should();
// chai.use(require('chai-integer'));

// // categories
// describe("categories Endpoint", () => {
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

//     it('should return 0 if there are no items are passed in', (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 const data = res.body
//                 var total = 0
//                 for (let i = 0; i < data.length; i++) {
//                     total += i
//                 }
//                 expect(total).to.equal(0)
//                 res.should.have.status(200)
//                 done()
//             })
//     });

//     it('response should have property name with a post request', (done) => {
//         chai.request(server)
//             .post('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: 'hahaahaaah'
//             })
//             .end((err, res) => {
//                 console.log(res.body)
//                 expect(res.body.data).to.have.property('name')
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it('should insert name with limit value', (done) => {
//         chai.request(server)
//             .post('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: 'wkwkwkwk'
//             })
//             .end((err, res) => {
//                 expect(res.body.data.name).to.have.lengthOf.below(10)
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("should be insert new different category", (done) => {
//         chai.request(server)
//             .post('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: "admin1"
//             })
//             .end((err, res) => {
//                 chai.request(server)
//                     .post('/api/categories')
//                     .set('authorization', `Bearer ${token}`)
//                     .send({
//                         name: "admin1"
//                     })
//                     .end((err, res) => {
//                         res.should.have.status(500)
//                         done();
//                     })
//             })
//     })

//     it('should property name have value', (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 const data = res.body
//                 var dataJson = JSON.parse(JSON.stringify(data))
//                 for (let i = 0; i < dataJson.length; i++) {
//                     expect(dataJson[i].name).to.exist
//                     res.should.have.status(200)
//                 }
//                 done()
//             })
//     })

//     it('must return an array', (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(res.body).to.be.an('array')
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("should be not a integer", (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 // console.log("data categories")
//                 const data = res.body;
//                 // console.log(res.body)
//                 // expect(data[data.length-1].name).not.to.be.an.integer()
//                 // expect(2.015).not.to.be.an.integer();
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].name).to.be.an.integer();
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("should be less than 10 letters", (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 console.log("data categories")
//                 const data = res.body;
//                 console.log(data)
//                 // console.log("=======================")
//                 // expect(data[data.length-1].name).to.have.lengthOf.below(10)
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].name).to.have.lengthOf.below(10);
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it('must delete all roles', (done) => {
//         chai.request(server)
//             .delete('/api/categories/')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 done();
//             })
//     })

//     it("should get all categories", (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 done();
//             });
//     });

//     it("must be not a integer", (done) => {
//         chai.request(server)
//             .get('/api/categories')
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

//     it("must be less than 50 letters", (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 console.log("data categories")
//                 const data = res.body;
//                 console.log(data)
//                 for (let i = 0; i < data; i++) {
//                     expect(data[i].name).to.have.lengthOf.below(50);
//                 }
//                 res.should.have.status(200)
//                 done()
//             })
//     })

//     it("there is property name", (done) => {
//         chai.request(server)
//             .post('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: "ivanww"
//             })
//             .end((err, res) => {
//                 expect(res.body.data).to.include({
//                     name: "ivanww"
//                 });
//                 res.should.have.status(200);
//                 console.log(res.body.data)
//                 done();
//             });
//     });
//     it("should be fail if category already exist", (done) => {
//         chai.request(server)
//             .post('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .send({
//                 name: "ivan3"
//             })
//             .end((err, res) => {
//                 chai.request(server)
//                     .post('/api/categories')
//                     .set('authorization', `Bearer ${token}`)
//                     .send({
//                         name: "ivan3"
//                     })
//                     .end((err, res) => {
//                         res.should.have.status(500);
//                         done();
//                     });
//             });
//     });

//     it("should be delete category", (done) => {
//         chai.request(server)
//             .delete('/api/categories')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 done();
//             });
//     });
// });