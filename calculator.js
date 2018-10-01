/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function() {
    var memory = 0;
    var total = 0;

    return {
        // memory: memory,
        // total: total,
    // function validate(num) {
    //     if(typeof num !== 'number') {
    //         throw err;
    //     }
    // }
        load: function(num) {
            if (typeof num === 'number') {
                return total = num;
            }
            else {
                throw err;
            }
            
            // return total = num;
        },

        getTotal: function() {
            return total;
        },
        add: function(num) {
            if (typeof num === 'number') {
                return total += num;
            }
            else {
                throw err;
            }
            // return total += num;

        },

        subtract: function(num) {
            if (typeof num === 'number') {
                return total -= num;
            }
            else {
                throw err;
            }
            // return total -= num;
        },

        multiply: function(num) {
            if (typeof num === 'number') {
                return total *= num;
            }
            else {
                throw err;
            }
            // return total *= num;
        },
        divide: function(num) {
            if (typeof num === 'number') {
                return total /= num;
            }
            else {
                throw err;
            }
            // return total /= num;
        },
        
        recallMemory: function() {
            return memory;
        },

        saveMemory: function() {
            return memory = total;
        },

        clearMemory: function() {
            return memory = 0;
        
        }

    }

};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */



  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */
