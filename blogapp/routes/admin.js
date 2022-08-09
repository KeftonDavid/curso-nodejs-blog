const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index.handlebars')
})

router.get('/posts', (req, res) => {
    res.send('Página de posts')
})

router.get('/categorias', (req, res) => {
    res.render('admin/categorias.handlebars')
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias.handlebars')
})

module.exports = router;