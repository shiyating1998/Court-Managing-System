console.log('my name is Jenn');

const fruits = ['appke', 'banana']

fruits[0] ='apple'
fruits.push('mangos')

fruits.unshift("strawberries")
console.log(fruits)


//JSON.stringify(todo)


function addNums(num1 = 1, num2 = 1) {

    return num1+num2;
}



const addNums2 = (num1 = 1, num2 = 1) => {
    num1+num2
}

addNums2(5,4);

//querySelector
//querySelectorAll
//getElementsByClassName