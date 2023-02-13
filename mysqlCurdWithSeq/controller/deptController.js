const db = require("../model/db");

// create main Model
const Employee = db.employees;
const Dept = db.depts;

const addDept = async (req, res) => {
  let info = {
    deptName: req.body.deptName,
  };

  const dept = await Dept.create(info);
  res.status(200).send(dept);
  console.log(dept);
};

const getDeptData = async (req, res) => {
  let dept = await Dept.findAll({});
  res.status(200).send(dept);
  console.log(dept);
};

module.exports = {
  addDept,
  getDeptData,
};
