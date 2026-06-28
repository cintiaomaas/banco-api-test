const request = require('supertest');

const obterToken = async (username, senha) => {
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': username,
            'senha': senha
        })
    return respostaLogin.body.token;
};

module.exports = {
    obterToken
};