const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../model/student");
const Faculty = require("../model/faculty");
// eslint-disable-next-line no-unused-vars
const studentauthenticate = require("../middleware/studentauthenticate");
// eslint-disable-next-line no-unused-vars
const facultyauthenticate = require("../middleware/facultyauthenticate");
const router = express.Router();

//------------------------------------STUDENT SIDE--------------------------------------------//
router.post("/student_register", async (req, res) => {
  const { email, studentid, password, cpassword } = req.body;
  console.log("hi");
  if (!email || !studentid || !password || !cpassword) {
    return res.status(422).json("422");
  }

  if (password === cpassword) {
    try {
      const studentExist = await Student.findOne({ email });
      if (studentExist) {
        return res.status(423).json("423");
      }

      const newStudent = new Student({ email, studentid, password });
      await newStudent.save();
      return res.status(200).json("200");
    } catch (err) {
      console.log("Error with", err);
    }
  } else {
    return res.status(425).json("425");
  }
});

router.post("/student_login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json("404");
    }

    const studentLogin = await Student.findOne({ email });

    if (studentLogin) {
      const matchpass = await bcrypt.compare(password, studentLogin.password);

      if (matchpass) {
        let token = await studentLogin.generateStudentToken();
        res.cookie("studentLoginToken", token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        });
        // return res.send(req.userLogin)
        return res.status(200).json(studentLogin);
      } else {
        return res.status(405).json("405");
      }
    } else {
      return res.status(406).json("406");
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/student_logout", (req, res) => {
  res.clearCookie("studentLoginToken", { path: "/" });
  return res.status(200).json("Logged out");
});

//------------------------------------Faculty SIDE--------------------------------------------//
router.post("/faculty_register", async (req, res) => {
  const { name, email, room_no, phone_no, password, cpassword } = req.body;
  console.log("hi");
  if (!name || !email || !room_no || !phone_no || !password || !cpassword) {
    return res.status(422).json("422");
  }

  if (password === cpassword) {
    try {
      const facultyExist = await Faculty.findOne({ email });
      if (facultyExist) {
        return res.status(423).json("423");
      }

      const newFaculty = new Faculty({
        name,
        email,
        room_no,
        phone_no,
        password,
      });
      await newFaculty.save();
      return res.status(200).json("200");
    } catch (err) {
      console.log("Error with", err);
    }
  } else {
    return res.status(425).json("425");
  }
});

router.post("/faculty_login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json("404");
    }

    const facultyLogin = await Faculty.findOne({ email });

    if (facultyLogin) {
      const matchpass = await bcrypt.compare(password, facultyLogin.password);

      if (matchpass) {
        let token = await facultyLogin.generateFacultyToken();
        res.cookie("facultyLoginToken", token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        });
        // return res.send(req.userLogin)
        return res.status(200).json(facultyLogin);
      } else {
        return res.status(405).json("405");
      }
    } else {
      return res.status(406).json("406");
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/faculty_logout", (req, res) => {
  res.clearCookie("facultyLoginToken", { path: "/home" });
  return res.status(200).json("Logged out");
});

module.exports = router;
