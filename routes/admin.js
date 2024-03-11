const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
	res.render("add-product", {
		title: "Add Product (ejs)",
	});
});
// router.get("/add-product", (req, res, next) => {
// 	// res.sendFile(path.join(__dirname, "../views/add-product.html"));
// 	// res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
// 	res.sendFile(path.join(rootDir, "views", "add-product.html"));
// });

router.use("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
