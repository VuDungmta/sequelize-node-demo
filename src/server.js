require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const news = require("./controllers/news.controller.js");

db.sequelize.sync();
const app = express();
var router = require("express").Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/", news.create);
router.get("/", news.findAll);
router.get("/:id", news.findOne);
router.put("/:id", news.update);
router.delete("/:id", news.delete);
router.delete("/", news.deleteAll);

app.use('/api/news', router);
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});