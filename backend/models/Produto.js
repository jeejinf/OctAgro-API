const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Produtos = db.define('produtos', {
    id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome_produto: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },

    quantidade_produto: {
        type:Sequelize.FLOAT,
        require: true,
        allowNull: false
    },

    data_entrada_empresa: {
        type:Sequelize.DATE,
        require: true,
        allowNull: false
    },

    hora_entrada_empresa:{
        type:Sequelize.TIME,
        require: true,
        allowNull: false
    }
})

/* //INPUT DOS PRODUTOS
Produtos.create({
    nome_produto: 'Milho',
    quantidade_produto: 100.5,
    data_entrada_empresa: '2023-04-18',
    hora_entrada_empresa: '08:30:00'
});

Produtos.create({
    nome_produto: 'Soja',
    quantidade_produto: 75.2,
    data_entrada_empresa: '2023-04-17',
    hora_entrada_empresa: '14:45:00'
});

Produtos.create({
    nome_produto: 'Trigo',
    quantidade_produto: 50.0,
    data_entrada_empresa: '2023-04-16',
    hora_entrada_empresa: '11:20:00'
});

Produtos.create({
    nome_produto: 'Arroz',
    quantidade_produto: 30.8,
    data_entrada_empresa: '2023-04-15',
    hora_entrada_empresa: '09:10:00'
}); */

module.exports = Produtos