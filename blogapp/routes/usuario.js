const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

router.get("/registro", (req, res) => {
    res.render("usuarios/registro.handlebars")
})

router.post("/registro", (req, res) => {
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido "});
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "Email inválido "});
    }
    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto: "Senha inválida "});
    }
    if(!req.body.senha.lenght < 4){
        erros.push({texto: "Senha muito pequena"});
    }
    if(!req.body.senha != req.body.senha2){
        erros.push({texto: "As senhas são diferentes. Tente novamente!"});
    }
    if(erros.lenght > 0){
        res.render("usuarios/registro.handlebars", {erros: erros})
    }
    else{
        //em breve
    }
})

module.exports = router;