var List = require('./list-es6');

var names = new List();

names.append('Alex');
names.append('Steve');
names.append('James');
names.append('Niall');
names.append('Liam');
names.append('Harry');
names.append('Scott');
console.log(names.toString());
names.remove('James');
console.log(names.toString());

names.front();
console.log(names.getElement());

names.next();
console.log(names.getElement());

names.next();
names.next();
names.prev();
console.log(names.getElement());

module.exports = List;
