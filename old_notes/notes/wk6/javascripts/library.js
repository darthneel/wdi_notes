var library = {
  math: {
    author: "Lambda WDI class",
    PI: 3.14,
    sum: function(num1, num2){
      var n1 = parseInt(num1);
      var n2 = parseInt(num2);
      return n1 + n2;
    },
    sum_list: function(list){
      var list_length = list.length;
      var sum = 0;
      // initial state; terminal state; increment
      for (var n = 0; n < list_length; n += 1) {
        sum += list[n];
      }
      return sum;
    }
  },

  words: {
    capitalize: function(word){
      return word[0].toUpperCase()+word.slice(1);
    }
  },

  array: {

    uniq: function(array){

      // Jonathan's
      // uniq_array = [];
      // array = array.sort();
      // for ( var i = 0; i < array.length; i++ ) {
      //     if ( array[i] != array[i + 1] ) {
      //         uniq_array.push( array[i] );
      //     }
      // }
      // return uniq_array;

      new_array = [];
      for (var i = 0; i < array.length; i++) {
        if (new_array.indexOf(array[i]) == -1) {
          new_array.push(array[i]);
        } 
      }
      return new_array;

    }

  }
};