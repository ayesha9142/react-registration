const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "test"
});

app.post('/test', (req, res) => {
    const sql = "INSERT INTO user (uname,age,sex,mobile,idtype,id,guardianlabel,guardian,email,phone,address,state,city,country,pincode,occupation,religion,mstatus,blood,nationality) VALUES(?)";
    const values = [
        req.body.uname,
        req.body.age,
        req.body.sex,
        req.body.mobile,
        req.body.idtype,
        req.body.id,
        req.body.guardianlabel,
        req.body.guardian,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.state,
        req.body.city,
        req.body.country,
        req.body.pincode,
        req.body.occupation,
        req.body.religion,
        req.body.mstatus,
        req.body.blood,
        req.body.nationality


    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(5000, () => {
    console.log("server running");
})