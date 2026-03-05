function enterVault(){

var collector=document.getElementById("collector").value;
var code=document.getElementById("code").value;

if(collector==="VIP001" && code==="ECLIPSE999"){

document.getElementById("login").style.display="none";
document.getElementById("vault").style.display="block";

}
else{
alert("Access Denied");
}

}