
const moongoose = require('mongoose');

moongoose.connect('mongodb://127.0.0.1:27017//Luxur');

const userSchema = moongoose.Schema({
    fullname : String,
    email : String , 
    password : String ,
    cart : {
        type : Array,
        default : [],
    },
    isAdmin: Boolean,
    orders:{
        type : Array,
        default : [],
    },
    contact : Number,
    picture : String,
});


module.exports = mongoose.model('user',userSchema);