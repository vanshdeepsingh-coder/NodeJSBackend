const mongoose = require('../connection.js')
const userSchema = new mongoose.Schema({name: String,age: Number})

class User{
    constructor(){};
  
    sendData(apiData){
        const User = mongoose.model('User', userSchema);
        const user = new User(apiData);
        user.save()
    }
  
    async getData(){
      const User = mongoose.model('User', userSchema);
      const data = await User.find(); // Fetch all documents
      return data;
    }
  
    async updateData(id,updateData){
      const User = mongoose.model('User', userSchema);
      const updatedDocument = await User.findByIdAndUpdate(id, { $set: updateData }, { new: true });
      return updatedDocument;
    }
  
    async deleteData(id){
      const User = mongoose.model('User', userSchema);
      const deletedData = await User.deleteOne({ _id: new ObjectId(id) });
      return deletedData;
    }
  }

  module.exports = User;