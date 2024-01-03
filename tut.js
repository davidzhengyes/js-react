//to use in another file
export default function DoSomething(){

}

//same ass let
export const DoSomething = () => {

}

const MyComponent = () => {
    return <div> </div>
}

//anonymous function, dont need to make a name
<button onClick={() => {console.log("Hello World!")}}>
</button>

//instead of 
if (true) {

} else {

}
//this is too much code

// let age = 10;
// let name = "Pedro";

// if (age>10){
//     name="Pedro"
// } else{
//     name="Jack"
// }


let age = 10;
// let name = age>10 && "Pedro";
// || is the other one

//if/else.
let name = age>10 ? "Pedro" : "Jack"

const Component = () => {
    return age>10 ? <div> Pedro </div> : <div> Jack </div>
}

//"Objects"
const name = "Pedro"
const person = {
    //can do name:name but if you have the same varname
    // just put name,
    name:"Pedro",
    age: 20,
    isMarried: false,
};

//too much code 
// const name=person.name
// const age=person.age
// const isMarried=person.isMarried

//could we have different names for these variables? ex const {a,b,c}
const {name,age,isMarried} = person

//everything from the person object except name is jack
const person2 = {...person, name:"Jack"}


//same with arrays:
const names = ["Pedro", "Jack", "Jessica"]
const names2=[...names, "Joel"]


// map,filter...
let names=["Pedro","Jessica","Carol"]
.map()
.filter()
//.reduce() not often used

//like a lambda
names.map((name) => {
    console.log(name);
});

names.map((name) => {
    return "Joe" //every element is changed to Joe.
});

names.map((name) => {
    return name+"1" //appends 1 to every name
});


let names=["Pedro","Jessica","Carol"]

names.map((name) => {
    return <h1> {name} </h1>  //one header for every name.
})


let names=["Pedro","Jessica","Carol","Pedro","Pedro",]
names.filter((name) => {
    return name=="Pedro" ? null : name
}) //close

let names=["Pedro","Jessica","Carol","Pedro","Pedro",]
names.filter((name) => {
    return name !=="Pedro"
}) //close


//
// async await fetch
//PedroTech on youtube !!!!!