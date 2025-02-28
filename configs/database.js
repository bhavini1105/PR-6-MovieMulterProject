const { default: mongoose } = require("mongoose");

const db = async()=>{
    try {
       
       await  mongoose.connect('mongodb+srv://bhavinipatel7532:12345@cluster0.f8dum.mongodb.net/movieMulter');
       console.log('Database Connected....');
        
    } catch (error) {
        
        console.log(error.message);
        console.log("Database is not Connected....");
        
    }
}

module.exports = db;