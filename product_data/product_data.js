var Items = {
  DETAIL: [
    {"name":"1","url":"1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},
    {"name":"2","url":"2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},
    {"name":"3","url":"3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},
    {"name":"4","url":"4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},
    {"name":"5","url":"5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},
    {"name":"6","url":"6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},
    {"name":"7","url":"7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},
    {"name":"8","url":"8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},
    {"name":"9","url":"9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},
    {"name":"10","url":"10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},
    {"name":"11","url":"11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},
    {"name":"12","url":"12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},
    {"name":"13","url":"13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},
    {"name":"14","url":"14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},
    {"name":"15","url":"15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},
    {"name":"16","url":"16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},
    {"name":"17","url":"17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},
    {"name":"18","url":"18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},
    {"name":"19","url":"19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},
    {"name":"20","url":"20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}
  ]
};

function Store(productsList, imagePath, sortItems){
  this.productsList = productsList;
  this.imagePath = imagePath;
  this.sortItems = sortItems;
  this.init();
}

Store.prototype.showProducts = function(productDetail) {
  this.productsList.innerHTML = "";
  for(var i in productDetail) {
    var productImage = this.productsList.appendChild(document.createElement("img"));
    productImage.src = this.imagePath + productDetail[i].url;
  }
}

Store.prototype.sortProducts = function(attr) {
  var compare = function(active, next) {
    if (active[attr] < next[attr])
      return -1;
    if (active[attr] > next[attr])
      return 1;
    return 0;
  }
  this.showProducts(this.productDetail.sort(compare));
}

Store.prototype.init = function() {
  this.productDetail = Items.DETAIL;
  this.showProducts(this.productDetail);
  var _this = this; 
  this.sortItems.onchange = function() {
    var currentItem =  this.options[this.selectedIndex].getAttribute('value');
    _this.sortProducts(currentItem);
  }
}

window.onload = function() {
  var productsList = document.getElementById('products_list');
  var sortItems = document.getElementById('sortItems');
  new Store(productsList, 'images/', sortItems);
}