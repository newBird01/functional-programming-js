var  {Student} =require( './Student');
var  {Address} = require( './Address');
var curry = new Student('Haskell','Curry','111-11-1111','Penn State',111,new Address('US'));
curry.address = new Address('US')

var turing = new Student('Alan','Turing','222-22-2222','Princeton');
turing.address = new Address('England')

var church = new Student('Alonzo','Church','333-33-3333','Princeton');
church.address = new Address('US')

var kleene = new Student('Stephen','Kleene','444-44-4444',' Princeton');
kleene.address = new Address('US')
exports.students = [
    curry,turing,church,kleene
]

