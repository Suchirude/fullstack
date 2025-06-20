const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const app = express();

app.use(cors());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get("api/data", async (req, res) => {
    try{
        const [rows] = await pool.query("select * from fullstack.recipes");
        res.json(rows);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));






const dataBaseInfo = document.querySelector(".db");
