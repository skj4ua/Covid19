const express = require('express')
const app  = express()
const port = 3001

var redis = require("redis"),
    client = redis.createClient();

    const {promisify} = require('util');
    const getAsync = promisify(client.get).bind(client);

    app.get('/cases',async(req,res)=>{
        const cases = await getAsync('covid');
        console.log(JSON.parse(cases).length);
        res.header("Access-Control-Allow-Origin","http://localhost:3000");
        return res.send(cases)
    })

    app.listen(port,()=>console.log(`Example app listening on port ${port}!`))