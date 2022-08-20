// create a type name with a string
let My_name: string = 'harsha';

// create a type age with a number
let age: number =20;

// create a type isFetching with boolean
let isFetching: boolean=true

// create an array of numbers
let arr1: number[]=[1,2,3,4,6]

// create an array of strings (using array constructor generic type)
let arr2: Array<string> = ['a','b','c','d']

// create a tuple , which keeps a string as the first value, and boolean as the second
let tuple:[string,boolean]
tuple=['checked',false]

// create an enum it should have User, SuperUser, Admin, SuperAdmin
enum panel{
    User='User',
    SuperUser='SuperUser',
    Admin='Admin',
    SuperAdmin='SuperAdmin'
}

// create a function that takes 2 arguments, x, y both numbers it should return the product of the 2 numbers
function product(x:number,y:number){
    return x*y
}
console.log(product(2,3))
// create a function that takes 2 arguments, x ,y both numbers, it should divide output ( x / y )
function division(x:number,y:number){
    return x/y
}
console.log(division(8,4))