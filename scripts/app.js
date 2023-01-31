

let studentNames = []
let randomname = document.getElementById("randomname");
let generate = document.getElementById("generate");
let name1 =  document.getElementById("name1")
let name2 =  document.getElementById("name2")
let name3 =  document.getElementById("name3")
let name4 =  document.getElementById("name4")
let name5 =  document.getElementById("name5")

let array = ["name", "name", "name" ,"name" ,"name"]

generate.addEventListener("click",function(){
    generateGetData()
    pullnames()
});

async function getNames(){
  const promise = await  fetch('../data/data.json')
  const data = await promise.json();
  studentNames = data
  console.log(studentNames.studentNames)
  console.log(studentNames.studentnames.length);
// console.log(studentNames.studentNames[0].firstName);
// pullnames(studentNames.studentnames[0].firstName)
   
}
 
 getNames()

 function generateGetData(){
    let random = Math.floor(Math.random() * studentNames.studentnames.
    length);
    randomname.innerText = studentNames.studentnames[random].firstName;
    console.log(random);
    pullnames(studentNames.studentnames[random].firstName)
 }
function pullnames(name){
    if (array.length >= 5)
    {
        array.pop()
        array.unshift(name)

    }else{
        array.unshift(name)
    }
    name1.innerHTML = array[0]
    name2.innerHTML = array[1]
    name3.innerHTML = array[2]
    name3.innerHTML = array[3]
    name5.innerHTML = array[4]
    


}

