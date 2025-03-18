console.log("nitin")  
/*javascript lec10
stack:primitive
heap:non-primitive and reference*/
//baki saare primitive wale heap se aate h
//yeh heap se aaya h with refernce
//hence original value bhi change hi gyi

let user1={
email:"ginni.com",
cont:988899,}

let user2=user1
user2.email="noway.com"
console.log(user1.email);
console.log(user2.email);
/*
const string=" shyam "
for removing space from intial and last
console.log(string.trim());

//replacing a particular part
console.log(string.replace('d','t))

check substring
console.log(string.includes('dha'))://return false
*/