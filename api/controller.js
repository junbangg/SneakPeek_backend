const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


module.exports = {
  getProducts: (shoe, callBack) => {
    // console.log(req.body)

    sneaks.getProducts(shoe, function(err, products) {
      return products
    }),
    (error, results, fields) => {
      if(error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  }
};
