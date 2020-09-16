const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    idade:{
        type: String,
        require: true
    },
    turma:{
        type: String,
        required: true
    },
    horario:{
        type: String,
        required: true
    }
},
{
    timestamps:true
}
);

mongoose.model('students',studentSchema);