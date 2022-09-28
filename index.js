const personOne = {
    name: 'Bob',
    age: 21,
    location: {
        city: 'York'
    }
}

function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person);
    updatePerson.age +=1;
    updatePerson.location.city = 'New';
    return updatePerson;
}

const updatePersonOne = increasePersonAge(personOne);
console.log(personOne.age);
console.log(updatePersonOne.age);
console.log(personOne.location.city);
console.log(updatePersonOne.location.city);
