const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao.js');
const postTransferencias = require('../fixtures/postTransferencias.json');


describe('Transferências', () => {
     let token;
        beforeEach(async () => {
            //Capturar o token
            token = await obterToken('julio.lima', '123456');
        })
    describe('POST/transferencias', () => {
    
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
    describe('GET/transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 quando o ID da transferência for válido', async () =>{
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/17')
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(17);
            expect(resposta.body.id).to.be.a('number');
            expect(resposta.body.conta_origem_id).to.equal(1);
            expect(resposta.body.conta_destino_id).to.equal(2);
            expect(resposta.body.valor).to.equal(11.00);
        
        })
    })

    describe('GET/transferencias', () => {
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () =>{
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/?pagina=1&limite=10')
                .set('Authorization', `Bearer ${token}`)

                expect(resposta.status).to.equal(200);
                expect(resposta.body.limit).to.equal(10);
                expect(resposta.body.transferencias).to.have.lengthOf(10);
        })
    })
})