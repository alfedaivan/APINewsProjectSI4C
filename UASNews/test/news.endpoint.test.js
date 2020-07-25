const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = require('chai').expect
// Configure chai 
chai.use(chaiHttp);
chai.should();
let token;

describe("News Endpoint Test", () => {

    it("should return token", (done) => {
        chai.request(server)
            .get('/auth/login')
            .auth('adminberita', '1234567')
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                token = res.body.token;
                done();
            });
    });

    it("have to be failed to post without description", (done) => {
        chai.request(server)
            .post('/api/news')
            .set('authorization', `Bearer ${token}`)
            .end((_err, res) => {
                console.log(res.body);
                expect(_err).to.be.null;
                res.should.been.status(500);
                done();
            });
    });

    it("It contain property content", (done) => {
        chai.request(server)
            .post('/api/news')
            .set('authorization', `Bearer ${token}`)
            .send({
                title: 'laga persebaya vs arema dibatalkan',
                content: 'hal ini dikarenakan terus terjadinya kerusuhan',
                isDraft: true,
                isPublished: true
            })
            .end((_err, res) => {
                console.log('Hasil : ', res.body)
                expect(res.body.data).to.have.property('content');
                res.should.have.status(200);
                done();
            });
    });

    it("still can post without input the userId", (done) => {
        chai.request(server)
            .post('/api/news')
            .set('authorization', `Bearer ${token}`)
            .end((_err, res) => {
                console.log(res.body)
                expect(_err).to.be.null;
                res.should.have.status(500);
                done();
            });
    });

    it("there is property title", (done) => {
        chai.request(server)
            .post('/api/news')
            .set('authorization', `Bearer ${token}`)
            .send({
                title: 'dampak adanya wabah covid-19',
                content: 'banyak yang terdampak salah satunya warga kampung joglo',
                isDraft: true,
                isPublished: true
            })
            .end((_err, res) => {
                console.log(res.body)
                expect(res.body.data).to.have.property('title');
                res.should.have.status(200);
                done();
            });
    });

    it("title should have length of 9", (done) => {
        chai.request(server)
            .post('/api/news')
            .set('authorization', `Bearer ${token}`)
            .send({
                title: 'harusnyaa',
                content: 'ini diharuskan warga untuk tetap berada dirumah',
                isDraft: true,
                isPublished: true
            })
            .end((err, res) => {
                expect(res.body.data.title).to.have.lengthOf(9);
                res.should.have.status(200);
                console.log(res.body.data)
                done();
            });
    })

    it("still cant post without authoriation", (done) => {
        chai.request(server)
            .post('/api/news')
            .send({
                title: "qqqq",
                permalink: "qqqq",
                content: "qqqqq",
                isDraft: false,
                isPublished: false,
                category: ["array"],
                tags: [],
                createBy: "5e5b77df8c0c2a17fcd8935b",
                updatedBy: "5e5b77df8c0c2a17fcd8935b"
            })
            .end((_err, res) => {
                console.log(res.body)
                expect(_err).to.be.null;
                res.should.have.status(401);
                done();
            });
    });

    it("should be fail if title already exist", (done) => {
        chai.request(server)
            .post('/api/news')
            .set('authorization', `Bearer ${token}`)
            .send({
                title: "gerry agan",
                content: "ketahuan nyontek saat ujian"
            })
            .end((err, res) => {
                chai.request(server)
                    .post('/api/news')
                    .set('authorization', `Bearer ${token}`)
                    .send({
                        title: "gerry agan",
                        content: "ketahuan nyontek saat ujian"
                    })
                    .end((err, res) => {
                        res.should.have.status(500);
                        done();
                    });
            });
    });
})