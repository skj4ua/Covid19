var fetch = require('node-fetch');

var redis = require("redis"),
client = redis.createClient();

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);
const baseURL = 'https://api.covid19api.com/summary'

async function fetchCovid(){
    const res = await fetch(baseURL);
    const cases = await res.json();
    const newcases = (cases.Countries);
    //console.log(newcases);
    //console.log(newcases.length);

    for(i=0;i<newcases.length;i++){
        if(newcases[i].Country==="India"){
            console.log(newcases[i]);
        }
        
    }

    const success = await setAsync('covid',JSON.stringify(newcases));
    console.log('Waiting for confirmation');
    console.log({success});
}
fetchCovid();
module.exports=fetchCovid;
