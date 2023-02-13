const empController = require("../controller/empController.js");
const deptController = require("../controller/deptController");
const router = require("express").Router();

router.post("/addEmp", empController.addEmployee);

router.post("/addDept", deptController.addDept);

router.get("/getDept", deptController.getDeptData);

router.get("/getEmp", empController.getEmployeeData);

router.post("/getOneEmployee", empController.getOneEmployee);

router.post("/updateEmp", empController.updateEmployee);

router.post("/deleteEmployee", empController.deleteEmployee);

router.post("/getEmpData", empController.getEmpData);

module.exports = router;
