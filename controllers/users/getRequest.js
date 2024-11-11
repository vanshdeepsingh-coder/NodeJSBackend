const axios = require('axios'); // axios is used to handle Rest API (external) (GET, POST, PUT, DELETE) etc
const mongoDBUser = require('../../repository/modals/UserModal.js')

async function handleGetRequest(req,res){
    try{
        const mongoDB = new mongoDBUser();
        const data = await mongoDB.getData();
        res.json(data)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = handleGetRequest;