// var some_words = [
//     {
//       name: "blahblah"
//     },
//     {
//       name: "tree"
//     },
//     {
//       name: "mississippi"
//     }
// ]

var parseWords = function(){

  var some_words = [{
    name: $('input').val()
  }]

  $('input').val('')

  var projection = d3.select('.main_container')

  _.each(some_words, function(word){

    var new_div = projection.append('div').data([word])

    new_div.text(word.name).style({
      "color": "#ff0000",
      "font-size": function(d){
        return (d.name.length*15)+"px"
      }
    }).transition(100)

  })  

}

$(function(){

  $('button').on("click", function(e){
    e.preventDefault()
    parseWords()
  })

    

})