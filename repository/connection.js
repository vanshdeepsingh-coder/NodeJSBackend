const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const uri = 'mongodb+srv://vanshdeepsingh:Vanshdeep24907@cluster0.jzjcoqk.mongodb.net/';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
})

module.exports = mongoose;