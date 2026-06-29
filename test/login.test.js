const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

describe('Login', () => {
    describe('POST/login', () => {
        it('Deve retornar 200 com um tokem em string quando usar credenciais válidas', async () => {
            const bodyLogin = {...postLogin}
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
            //console.log(resposta.staus);
            //console.log(resposta.body);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.a('string');
        })
    })
})