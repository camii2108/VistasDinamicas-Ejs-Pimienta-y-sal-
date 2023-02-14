let express = require('express');
let router = express.Router();
let controller = require("../controllers/indexControllers")

/* GET home page. */
/* respuestra de ruta */
router.get('/',controller.index );
router.get("/detalle/:id", controller.detalle);

module.exports = router;
