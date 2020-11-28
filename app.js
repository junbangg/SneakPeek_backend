const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
// grab the packages we need
// getProducts(keyword, callback) takes in a keyword and returns an array of products
// sneaks.getProducts("Jordan", function(err, products){
   // console.log(products)
// })
 sneaks.getProductPrices("FY2903", function(err, product){
    console.log(product)
})
