const express = require('express')
const app = express()
const port = 5000
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./route/auth");
const userRoute = require("./route/users");
const postRoute = require("./route/posts");
const categoryRoute = require("./route/categories");
const multer = require("multer");
const path = require("path");


dotenv.config();

app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:false,
}).then(console.log("connected to mongo")).catch(err => console.log(err));


//Uploading images of the post in the images folder by using multer 
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images")
  },filename:(req,file,cb)=>{
    cb(null,req.body.name);
  },
});

const upload = multer({storage:storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("File Has been Uploaded");
});


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);

app.listen(port, () => {
  console.log(`Backend is listening at http://localhost:${port}`)
});