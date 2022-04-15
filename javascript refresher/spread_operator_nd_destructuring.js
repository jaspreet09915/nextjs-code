// spread operator and destructuring 
// arr = [1,2,4]
arr = [1,2,4,5,7]

function avg(a,b,c){
    return a+b+c/3
}

// usage of spread operator in array
// let a = avg(...arr) // ...arr resolve this as 1,2,4 as an argument for avg
// console.log(a)

// let b = [4,5,8, ...arr,87]
// console.log(b)

// let c = [...arr] // create a copy of arr
// console.log(c)

// let a2 = [5,6,2]
// let a = [...arr,...a2] // concatenate arr and a2
// console.log(a)

// Usage of spread operator in object 

obj1 = {
    name : "jaspreet",
    class : "5A",
    favLang : "javascript"
}
// console.log(obj1)

// without using spread operator
// let obj2 = {}
// obj2.name = obj1.name;
// obj2.class = obj1.class;
// obj2.favLang = "Python";

// using spread operator
// let obj2 = {...obj1, favLang:"python"} // copy all element except favLang And change it to phython
// console.log(obj2)


