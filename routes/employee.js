const express = require("express");
const router = express.Router();
const EMPLOYEE = require("../model/Employee");

//* get routes
router.get("/fetch-emp", async (req, res) => {
  let employee = await EMPLOYEE.find({});
  res.status(200).json({ employee });
});
router.get("/fetch-emp/:id", async (req, res) => {
  let employee = await EMPLOYEE.find({ _id: req.params.id });
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
  res.status(201).json({ message: "profile created..." });
});
//* put routes
router.put("/edit-emp/:id", async (req, res) => {
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
  let updateEmp = EMPLOYEE.findByIdAndUpdate(
    req.params.id,
    {
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
    },
    { new: true }
  );
  // await updateEmp.save();
  await (
    await updateEmp
  ).save;
  return res.status(201).json({ message: "profile updated" });
});

//* delete routes
router.delete("/delete-emp/:id", async (req, res) => {
  await EMPLOYEE.findOneAndDelete({ _id: req.params.id });
  return res.status(201).json({ message: "profile deleted" });
});

module.exports = router;
