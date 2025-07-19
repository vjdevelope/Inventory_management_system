const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://vaibhavjadhav1374:Ylnyynyrb886zNmt@cluster0.qxua6jb.mongodb.net/";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
