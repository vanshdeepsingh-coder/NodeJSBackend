const mongoDBUser = require('../../repository/modals/UserModal.js');

async function handleDeleteRequest(req,res){
    const id = req.params.id;

    try{
        const mongoDB = new mongoDBUser();
        const updatedData = await mongoDB.deleteData(id);
        res.json(updatedData);
    }
    catch(error){
        console.log(error)
    }

}

module.exports = handleDeleteRequest;