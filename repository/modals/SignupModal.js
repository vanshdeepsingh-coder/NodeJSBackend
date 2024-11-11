const mongoose = require('../connection.js');
const signupSchema = new mongoose.Schema({email: String, password: String, token: String});

class SignUp{
    constructor(){}

    sendData(apiData){
        const Signup = mongoose.model('Signup', signupSchema);
        const signup = new Signup(apiData);
        signup.save()
    }

    async getDataByUserEmail(myEmail){
      const Signup = mongoose.model('Signup',signupSchema);
      const user = await Signup.findOne({email: myEmail});
      return user
    }
  
    async getData(){
      const Signup = mongoose.model('Signup', signupSchema);
      const data = await Signup.find(); // Fetch all documents
      return data;
    }
  
    async updateData(id,updateData){
      const Signup = mongoose.model('Signup', signupSchema);
      const updatedDocument = await Signup.findByIdAndUpdate(id, { $set: updateData }, { new: true });
      return updatedDocument;
    }
  
    async deleteData(id){
      const Signup = mongoose.model('Signup', signupSchema);
      const deletedData = await Signup.deleteOne({ _id: new ObjectId(id) });
      return deletedData;
    }
}

module.exports = SignUp;