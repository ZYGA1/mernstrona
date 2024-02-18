const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    console.log("tak")
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>czarnuch</h1> <hr>')
    if(req.url == '/'){
    fs.readFile('./index.html',  function(err ,data){
        if (err){
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
} else if (req.url == '/about'){
    fs.readFile('./about.html' , (err, data) =>{
        err ? console.log(err) : res.end(data) 
    })
} else {
    fs.readFile('./404.html' , (err, data) => {
        err ? console.log(err) : res.end(data)
    })
}



})

server.listen(9000 , 'localhost' , function(){
    console.log("nie")
});


