process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const Delivered = require('../app/models/Delivered');
const Clicked = require('../app/models/Clicked');
const Complained = require('../app/models/Complained');
const Failed = require('../app/models/Failed');
const Opened = require('../app/models/Opened');
const Unsubscribed = require('../app/models/Unsubscribed');

let should = chai.should();
let data = require('./data.json');

chai.use(chaiHttp);

describe('Delivery tracking', function () {

    describe('when requested', function () {
        beforeEach((done) => {
            Delivered.remove({}, (err) => {
                done();
            });
        });
        it('can show delivery tracking', function (done) {
            chai.request(app)
                .get('/track/delivered')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
        it('can create new delivery tracking', function (done) {
            chai.request(app)
                .post('/track/delivered')
                .send()
                .send(data.delivered)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
                });
        });
    });
});

describe('Clicked tracking', function () {

    describe('when requested', function () {
        beforeEach((done) => {
            Clicked.remove({}, (err) => {
                done();
            });
        });
        it('can show clicks tracking', function (done) {
            chai.request(app)
                .get('/track/clicked')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
        it('can create new clicked tracking', function (done) {
            chai.request(app)
                .post('/track/clicked')
                .send()
                .send(data.clicked)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
                });
        });
    });
});

describe('Complained tracking', function () {

    describe('when requested', function () {
        beforeEach((done) => {
            Complained.remove({}, (err) => {
                done();
            });
        });
        it('can show complained tracking', function (done) {
            chai.request(app)
                .get('/track/complained')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
        it('can create new complained tracking', function (done) {
            chai.request(app)
                .post('/track/complained')
                .send()
                .send(data.complained)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
                });
        });
    });
});

describe('Failed tracking', function () {

    describe('when requested', function () {
        beforeEach((done) => {
            Failed.remove({}, (err) => {
                done();
            });
        });
        it('can show failed tracking', function (done) {
            chai.request(app)
                .get('/track/failed')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
        it('can create new failed tracking', function (done) {
            chai.request(app)
                .post('/track/failed')
                .send()
                .send(data.failed)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
                });
        });
    });
});

describe('Opened tracking', function () {

    describe('when requested', function () {
        beforeEach((done) => {
            Opened.remove({}, (err) => {
                done();
            });
        });
        it('can show opened tracking', function (done) {
            chai.request(app)
                .get('/track/opened')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
        it('can create new opened tracking', function (done) {
            chai.request(app)
                .post('/track/opened')
                .send()
                .send(data.opened)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
                });
        });
    });
});

describe('Unsubscribed tracking', function () {

    describe('when requested', function () {
        beforeEach((done) => {
            Unsubscribed.remove({}, (err) => {
                done();
            });
        });
        it('can show unsubscribed tracking', function (done) {
            chai.request(app)
                .get('/track/unsubscribed')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
        it('can create new unsubscribed tracking', function (done) {
            chai.request(app)
                .post('/track/unsubscribed')
                .send()
                .send(data.unsubscribed)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
                });
        });
    });
});