var categories = (function() {
  return {
    getSeasons: function(callBack) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'categories.json')
        xhr.addEventListener('load', function(evt){
          var seasonal = JSON.parse(evt.target.responseText)
          callBack(seasonal)
        })
        xhr.send()
    }
  }
})();

function showCategories (categories) {
  var list = document.querySelector('.seasonalDiscounts')
  console.log(categories)
  categories.categories.forEach(function (category) {
    list.innerHTML += `<option>${category.season_discount}</option>`
  })
}
console.log(categories)
categories.getSeasons(showCategories);