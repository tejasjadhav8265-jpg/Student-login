const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });


// SIGNUP API

app.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({
                success: false,
                message: "Account already exists"
            });
        }

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.json({
            success: true,
            message: "Signup Successful"
        });

    } catch (error) {
        console.log(error);
    }

});



// LOGIN API

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (user) {

            res.json({
                success: true,
                message: "Login Successful"
            });

        } else {

            res.json({
                success: false,
                message: "Invalid Credentials"
            });

        }

    } catch (error) {
        console.log(error);
    }

});



// STUDENT FORM API

app.post("/student", async (req, res) => {

    try {

        const student = new Student(req.body);

        await student.save();

        res.json({
            success: true,
            message: "Information Submitted"
        });

    } catch (error) {
        console.log(error);
    }

});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Running");
});