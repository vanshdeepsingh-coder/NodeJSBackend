const bcrypt = require('bcrypt');
const {setUser} = require('../../service/auth')
const {sendEmail} = require('../../service/mail')
const mongoDBSignup = require('../../repository/modals/SignupModal')

async function handleCreateUser(req,res){
    const signup = new mongoDBSignup();
    const user = req.body;
    const payload = {email: user.email, password: await bcrypt.hash(user.password,10)};
    const token = setUser(payload);
    signup.sendData({...payload,token:token});
    res.cookie("uid",token);

    sendEmail(user.email,'Account Successfully Created',`Your Account has been 
    successfully created on our Node JS test APP`)

    res.sendStatus(200);
}

module.exports = handleCreateUser;