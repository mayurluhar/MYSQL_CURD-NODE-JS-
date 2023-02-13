const db = require("../model/db");

// create main Model
const Employee = db.employees;
const Dept = db.depts;

// main work

// 1. create employee

const addEmployee = async (req, res) => {
  let info = {
    name: req.body.name,
    deptIDFK: req.body.deptIDFK,
  };

  const employee = await Employee.create(info);
  res.status(200).send(employee);
  console.log(employee);
};

const getEmployeeData = async (req, res) => {
  let employee = await Employee.findAll({});
  res.status(200).send(employee);
  console.log(employee);
};

const getOneEmployee = async (req, res) => {
  let id = req.body.id;
  let employee = await Employee.findOne({ where: { id: id } });
  res.status(200).send(employee);
};

const updateEmployee = async (req, res) => {
  let id = req.body.id;

  const employee = await Employee.update(req.body, { where: { id: id } });

  res.status(200).send(employee);
};

const deleteEmployee = async (req, res) => {
  let id = req.body.id;

  await Employee.destroy({ where: { id: id } });

  res.status(200).send("Employee is deleted !");
};

const getEmpData = async (req, res) => {
  const id = req.body.id;

  const data = await Employee.findOne({
    include: [
      {
        model: Dept,
        as: "dept",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(data);
};

module.exports = {
  addEmployee,
  getEmployeeData,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  getEmpData,
};
