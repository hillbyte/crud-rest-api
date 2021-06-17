let { Schema, model } = require("mongoose");
let EmployeeSchema = new Schema(
  {
    emp_id: {
      type: String,
      required: true,
    },
    emp_name: {
      type: String,
      required: true,
    },
    emp_email: {
      type: String,
      required: true,
    },
    emp_phone: {
      type: String,
      required: true,
    },
    emp_salary: {
      type: Number,
      required: true,
    },
    emp_designation: {
      type: String,
      required: true,
    },
    emp_gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    emp_company: {
      type: String,
      required: true,
    },
    emp_experience: {
      type: Number,
      required: true,
    },
    emp_education: {
      type: String,
      required: true,
    },
    emp_location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("employee", EmployeeSchema);
