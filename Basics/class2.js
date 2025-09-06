let myYoutube = "Ashvinci"
let anotherYt = myYoutube;
 anotherYt = 123;                 // stack example
// console.log(anotherYt);
// console.log(myYoutube);
//.............................................
let user ={
    userid: "ashgmail.com" ,
    userpass: "2324242"
}                                     // heap example 
let userTwo = user;
userTwo.userid = "Ashermail.com"
 console.log(user.userid);
 console.log(userTwo.userid);

 //............................................
 //string

 let V = "Vishal";
 let G = 24345;

 console.log(V+G+ "Dog");
//..................................................................
 const gameName = new String('Hitesh')
 console.log(gameName[0]);               // posotion related methods like charAT
 console.log(gameName.charAt(3));
 console.log(gameName.__proto__);
//............................................................................
 const ab = "  hiteshop";
 console.log(ab.trim());     // trim method
 console.log(ab);
//.............................................................
 const url = "hitesh king shogy"
 console.log(url.replace('king','op'));    // replace method
 
 console.log(url.includes('chava'));  // pta kro ki chava hai ki nhi 

 



 
 
 

 
 
