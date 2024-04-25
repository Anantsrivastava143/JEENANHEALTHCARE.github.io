const mongoose=require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/jeevan")
// mongoose.connect(mongodb_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
connect.then(() => {
  console.log("Database is connected");
})
.catch((error) => {
  console.log(error);
});
const loginschema = new mongoose.Schema({
name:{
    type:String,
    require:true,
},
email:{
    type:String,
    require:true,
    unique:true,
},
password:{
    type:String,
    require:true,
},
resetToken:{type: String,},

  resetTokenExpiration: {type:Date},

},{timestamps:true});
const collection=new mongoose.model("user",loginschema);
module.exports=collection;