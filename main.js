/******************************************************************************
 * /*YOU WILL PROBABLY NOT HAVE TO TAKE DESTRUCTURING TO SUCH A LEVEL AS THIS *
 *    BUT THIS IS FOR YOU TO REALLY WRAP YOUR BRAINS AROUND THE MECHANICS.    *
 *                 EVERY EXERCISE SHOULD USE DESTRUCTURING*/                  
  //******************************************************************************/

  // 1.
  /**************************************************************************
   *                //CREATE AN OBJECT OUT OF THE ARR1 BELOW                 *
   * //  THEN USING DESTRUCTURING, DECLARE VARIABLES USING THE OBJECT KEYS. *
   **************************************************************************/
  let arr1 = [
    ['name', 'jon'],
    ['age', 20],
    ['eyes', 'blue'],
  ];



const obj = Object.fromEntries(arr1)
console.log('object: ',  obj)

const objKeys = Object.keys(obj)
console.log('keys:', objKeys)

const objValues = Object.values(obj)
console.log('values:',  objValues)

const [name, age, eyes] = objValues
// console.log(name)

//=============================================================================//
//=============================================================================//


// 2.
/**************************************************************************
 * //A. SET 3 VARIABLES NAMES: THE THIRD INDEX SHOULD BE CALLED 'THREE',  *
 * //  THE FOURTH ITEM 'FOUR' AND THE REST OF THE ITEMS THEREAFTER 'REST' *
 *          //B. SWAP THE THIRD AND FOURTH ITEM VARIABLE VALUES           *
 **************************************************************************/
let arr2 = [1, 2, 3, 4, 5, 6]

let [one, two, four, three, ...rest] = arr2
console.log(four)

let temp = four;
four = three;
three = temp;

console.log(three)
console.log(four)

//=============================================================================//
//=============================================================================//
