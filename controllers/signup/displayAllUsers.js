const mongoDBSignup = require('../../repository/modals/SignupModal');

async function handleGetAllUsers(req,res){
    try{
        const signup = new mongoDBSignup();
        const data = await signup.getData();
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = handleGetAllUsers;