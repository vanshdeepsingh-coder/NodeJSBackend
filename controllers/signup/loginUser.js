const bcrypt = require('bcrypt');
const mongoDBSignup = require('../../repository/modals/SignupModal');
const {getUser} = require('../../service/auth');

async function passwordValidation(userPassword, hashedPassword){
    const validation = await bcrypt.compare(userPassword, hashedPassword);
    return validation;
}

async function handleLoginUser(req,res){
    const signup = new mongoDBSignup();
    let userToken = null;

    if(req.headers.cookie){
        userToken = req.headers.cookie.substring(4);
    }

    const user = await signup.getDataByUserEmail(req.body?.email);
    const authenticateViaToken = getUser(userToken)

    if(userToken && authenticateViaToken){
        res.json(true);
    }
    else{
        if(user){
            const validation = await passwordValidation(req.body?.password, user.password);
            if(user && validation){
                res.json(true);
            }
            else{
                res.json(false);
            }
        }
        else{
            res.json(false);
        }
    }
}

module.exports = handleLoginUser;