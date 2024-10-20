let person = {
    name: 'Nazme',
    age: 20,
    city: 'Khorog'
};

console.log('Object at the start:', person);

person.email = 'nazme@gmail.com';
console.log('Addied an email:', person);

delete person.city;
console.log('Removed the city:', person);

person.age = 40;
console.log('Updated the age:', person);

let propertyToAdd = 'country';
person[propertyToAdd] = 'Tajikistan';
console.log('Added country dynamically:', person);

let propertyToUpdate = 'name'
person[propertyToUpdate] = 'Bahriddin';
console.log('Updated dynamically the name:', person);

console.log('Object at the end:', person);
