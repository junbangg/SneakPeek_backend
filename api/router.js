const { getProducts,
        getProductPrices
      } = require("./controller");

const router = require("express").Router();

router.get("/search/:keyword", getProducts);
// router.get("/", getProductPrices);

module.exports = router;
