const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  contact:{
    type: String,
    required: [true, 'Please add Contact Number']
},
  address: {
    type: String,
    required: [true, "Please add an Address"],
  },
  role: {
    type: String,
    enum: ['patient', ],
    default: 'patient'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

PatientSchema.statics.isThisEmailInUse = async function(email) {
  if(!email) throw new Error('Invalid Email!');
  try {
    const patient = await this.findOne({email});
    
    if(patient) return false;

    return true;
  } catch (error) {
    console.log(error);
  }
}

module.exports = mongoose.model("Patients", PatientSchema);
