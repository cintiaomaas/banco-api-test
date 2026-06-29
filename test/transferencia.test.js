const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao.js');
const postTransferencias = require('../fixtures/postTransferencias.json');


describe('Transferências', () => {
    describe('POST/transferencias', () => {
        let token;

        beforeEach(async () => {
            //Capturar o token
            token = await obterToken('julio.lima', '123456');
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10,00', async () => {
           const bodyTranferencias = {...postTransferencias}
           
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //ou .set('Authorization', 'Bearer ' + token)
                .send(bodyTranferencias);
            expect(resposta.status).to.equal(201);
        })

        it('Deve retornar erro com 422 quando o valor da transferencia for abaixo de R$10,00', async () => {
            const bodyTranferencias = {...postTransferencias}
            bodyTranferencias.valor = 9.99;

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) //ou .set('Authorization', 'Bearer ' + token)
                .send(bodyTranferencias);
            expect(resposta.status).to.equal(422);
        })

    })
})