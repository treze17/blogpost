const xyz = require('./people')
console.log(xyz.people,xyz.ages)

// or Destructuring this way
const {people,ages} = require('./people') 
console.log(people,ages)