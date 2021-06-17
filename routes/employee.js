const express = require("express");
const router = express.Router();
const EMPLOYEE = require("../model/Employee");

//* get routes
router.get("/fetch-emp", async (req, res) => {
  let employee = await EMPLOYEE.find({});
  res.status(200).json({ employee });
});

//* post routes
router.post("/create-emp", async (req, res) => {
  let {
    emp_id,
    emp_name,
    emp_email,
    emp_phone,
    emp_salary,
    emp_designation,
    emp_gender,
    emp_company,
    emp_experience,
    emp_education,
    emp_location,
  } = req.body;
  let newEmployee = new EMPLOYEE({
    emp_id,
    emp_name,
    emp_email,
    emp_phone,
    emp_salary,
    emp_designation,
    emp_gender,
    emp_company,
    emp_experience,
    emp_education,
    emp_location,
  });
  await newEmployee.save();
  res.status(201).json({ message: "employee created..." });
});
//* put routes
//* delete routes

module.exports = router;
