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

// create a function that takes a name and prints it without returning anything

type person={
    name: string
}
let obj1: person={
    name:'masai'
}

const details=({name}:person):void=>{
        console.log(`${name}`)
}

// create an interface for an object

interface details{
    title: string,
    status: boolean,
    id: number
}

// create a function getName

interface details1{
    firstName: string,
    lastName: string,
    fullName?: string
}

let obj2:details1={
    firstName: 'Harsha',
    lastName:"C"
}

const person=({firstName,lastName,fullName}:details1)=>{
  fullName=(`${firstName}+${lastName}`)
     console.log(fullName);
}

// create an interface Address

interface Address{
houseNumber: number,
street: any,
city: string,
state: string,
postalCode: number,
country:string
}

let obj3:Address={
    houseNumber: 194,
    street: '2nd street nagpur' ,
    city: 'Nagpur',
    state: 'Tamil nadu',
    postalCode: 679330,
    country: 'India'
}

// create a PersonDetails interface

interface PersonDetails{
Prefix ?: string,
phones : number[],
addresses: string[],
email ?: any,
firstname: string,
lastname: string,
middlename ?: string,
}

let obj4:PersonDetails={
Prefix :'down',
phones :[9045673622,90487224613],
addresses:['cheppli(h)','karlikode','karulai'],
email : 'harshac2508@gmail.com',
firstname:'Suresh',
lastname:'C',
middlename:'Babu'
}

const phoneBook=({firstname,lastname,middlename,phones}:PersonDetails)=>{
    var wrap = (`${firstname}+${" "}+${middlename}+${" "}+${lastname}+${"="}+${phones}`)
}