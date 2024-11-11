const mongoDBUser = require('../../repository/modals/UserModal.js')

async function handleUpdateRequest(req,res){
    const id = req.params.id;
    const body = req.body;
    
    try{
        const mongoDB = new mongoDBUser();
        const updatedData = await mongoDB.updateData(id,body.users);
        res.json(updatedData);
    }
    catch(error){
        console.log(error)
    }
}

module.exports = handleUpdateRequest;