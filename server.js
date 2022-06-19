const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const router = express.Router();
const db = require("./config/connection");

// Create a contact
router.post("/api/contactpost", ({ body }, res) => {
  let sql =
    "INSERT INTO contact_card (firstname, lastname, email, phone, created_at, updated_at) VALUES ('" +
    body.firstname +
    "', '" +
    body.lastname +
    "', '" +
    body.email +
    "','" +
    body.phone +
    "', now(), now())";
  console.log(body);
  db.query(sql, (err, result) => {
    console.log(err);
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
      changes: result.affectedRows,
    });
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
