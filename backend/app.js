const http = require('http')
const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express();
const { listenerCount } = require('process')
const ejs = require('ejs')


app.listen('9000', () => {
    console.log('nigger')
})

app.set('views' , __dirname + '/strony')


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {nazwa: 'index'})
})

app.get('/about', (req, res ) => {
    res.render('about', {nazwa: 'about'})
})


app.get('/about-tak', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.status(404).render('404', {nazwa: '404'})
})