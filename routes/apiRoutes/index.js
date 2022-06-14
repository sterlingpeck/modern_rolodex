const router = require("express").Router();
const contactsRoutes = require("./contactsRoutes");

router.use("/contacts", contactsRoutes);

module.exports = router;
