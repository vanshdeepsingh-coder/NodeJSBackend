const mongoDBUser = require('../../repository/modals/UserModal.js')

function handlePostRequest(req,res){
    const apiData = req.body;
    const mongoDB = new mongoDBUser();
    mongoDB.sendData(apiData['users']);
    res.sendStatus(200)
}

module.exports = handlePostRequest;