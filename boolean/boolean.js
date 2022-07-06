const isdogbetter=true;
const iscatbetter=false;

const atoms=8;
const starinsky=3;
const sandgrains=5;

console.log(isdogbetter && iscatbetter+"   " +isdogbetter|| iscatbetter);
console.log((iscatbetter && isdogbetter));

console.log(atoms>starinsky && atoms>sandgrains);
console.log(!(atoms>sandgrains));
console.log(starinsky<sandgrains|| starinsky>atoms);
console.log(atoms!=sandgrains);

console.log(parseInt(atoms) +"  "+ starinsky +"   "+"    "+ sandgrains+"   " +String(atoms==sandgrains|| atoms!=sandgrains) );
console.log( atoms==starinsky || atoms!=sandgrains);



console.log(atoms>10 || atoms!=sandgrains);
console.log(atoms*starinsky);
console.log(atoms*sandgrains);
console.log(atoms*starinsky<100|| atoms*sandgrains>100);

