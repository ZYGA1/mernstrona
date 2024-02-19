const http = require('http')
const path = require('path')
const fs = require('fs')
const express = require('express')
const { listenerCount } = require('process')
const ejs = require('ejs')




const app = express();




app.listen('9000', () => {
})



app.use((req,res, next) => {
    console.log('New Request')
    console.log('host: ', req.hostname)
    console.log('path: ', req.path)
    console.log('method', req.method)
    next();
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