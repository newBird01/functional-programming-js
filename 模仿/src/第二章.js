const R = require('ramda');
var {students} = require( '../model/Students');
// console.log(students,'11')
var countryPath = ['_address','_country'];
var countryL = R.lens(R.path(countryPath), R.assocPath(countryPath));

 
var inCountry = R.curry((country, person) => {
    return R.equals( R.view(countryL,person),country)
})    
students.filter(inCountry('US')).map(console.log)