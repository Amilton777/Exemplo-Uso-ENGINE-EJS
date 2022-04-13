//DEPENDENCIA
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const porta = 4001;

//Setando os valores para funcionar a ENGINE EJS
//O segundo views é referente a pasta views la dentro arquivo user.ejs 
app.set("views", path.join(__dirname, 'views'));
app.set("views engine","ejs");

//Dados para nosso exemplo de passagens de dados para o template ENGINE EJS
let dados =[
 {
   id: 0,
   name:"Amilton",
   phone:"(18)9.9696-9696"
 },
 {
    id: 1,
    name:"Andrade",
    phone:"(18)9.9595-9595"
  },
  {
    id: 2,
    name:"Horacio",
    phone:"(18)9.9797-9797"
  }]

//Rota raiz localhost:4001
app.get("/", (req, res)=>{
    
    //Como nosso dados é um array de objetos precisamos colocar chaves: {dados}
    res.render('user.ejs', {dados});
})

app.listen(porta, ()=>{
    console.log('Servidor rodando, '+porta);

})