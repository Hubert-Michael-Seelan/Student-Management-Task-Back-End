const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    enrollNumber: { type: String, required: true },
    dateOfAdmission: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
