const express = require("express");
const router = express.Router();

// Create a contact
router.post("/api/contactpost", ({ body }, res) => {
  const sql = `INSERT INTO contactdatabase (first_name, last_name, email, phone_number) VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.email,
    body.phone_number,
  ];

  db.query(sql, params, (err, result) => {
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

router.get("/api/contactget", (req, res) => {
  const sql = `SELECT * FROM contact_card
                  AS contacts 
                  FROM contact_card`;
  // LEFT JOIN parties
  // ON candidates.party_id = parties.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = router;
