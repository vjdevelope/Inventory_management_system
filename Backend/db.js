const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://vaibhavjadhav1374:Ylnyynyrb886zNmt@cluster0.qxua6jb.mongodb.net/inventoryDB?retryWrites=true&w=majority";
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
