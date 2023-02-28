const mongoose = require('mongoose');
const schema = mongoose.Schema;
const studentModel = new schema ({
name: 
{
        type : String,
        require : true
},
email:
{
        type: String,
        require:true,
        unique: true,
},
image:{
        type: String,
        data:Buffer,
        require: false
}
});
module.exports=mongoose.model('students',studentModel);