
let emailList = ["pluto@gmail.com", "pippo@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "bugo@gmail.com"];

let emailInserita = prompt("Inserisci la tua email per accedere");
let emailConf = false;

for ( i=0 ; i < emailList.length ; i++){

    if (emailInserita == emailList[i]) {      
        emailConf = true;       
    }
      
} 
   if (emailConf == true) {
    document.getElementById("login").innerHTML = emailInserita + " puoi entrare";
   }

   else {
    document.getElementById("login").innerHTML = emailInserita  + " non puoi entrare"; 
   }
      
   
const dado = ['1', '2', '3', '4', '5', '6'];
console.log(dado);

console.log(dado.length);

let numUser = parseInt(Math.random() * dado.length+1);
let numComputer = parseInt(Math.random() * dado.length+1);
console.log("il numero scelto dal pc per te è" + " " + numUser);
console.log("il numero scelto dal pc è" + " " + numComputer);

document.getElementById("user").innerHTML = "in numero scelto per te è " + numUser;
document.getElementById("pc").innerHTML =   "in numero scelto dal pc è " + numComputer; 

if(numUser < numComputer){
    document.getElementById("result").innerHTML = "hai perso";

} else if (numUser == numComputer){
    document.getElementById("result").innerHTML = "siete pari";
} else {
    document.getElementById("result").innerHTML = "hai vinto";

}




