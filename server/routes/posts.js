const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios');

// const PostAPI = 'http://localhost/phpmyadmin';
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'shops'
});

//GET POST
router.get('/', (req, res) => {
    connection.connect((err) => {
        if (err) {
            res.send(err);
        } else {
            const sql = "SELECT * FROM `admins`";
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    // res.setHeader('Access-Control-Allow-Origin', '*');
                    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                    res.status(200).json(result);
                }
            });
        }
    });
});

module.exports = router;