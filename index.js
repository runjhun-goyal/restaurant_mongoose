
var http=require('http')
var app=require('./server')
var ser=http.createServer(app)

ser.listen(4000,console.log("server is working"))

