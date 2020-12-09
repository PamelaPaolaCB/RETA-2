localStorage.setItem('A1',"a");
localStorage.setItem('A2',"b");
localStorage.setItem('A3',"c");

localStorage.setItem('B1',"b");
localStorage.setItem('B2',"b");
localStorage.setItem('B3',"a");


let name= (localStorage.getItem('name')==undefined)?"":localStorage.getItem('name');

if (document.getElementById("divName")!=null){
    document.getElementById("divName").innerHTML="HOLA "+name;
}



document.getElementById("btnReg").onclick = function(){
    localStorage.setItem('name',document.getElementById("txtName").value);
    let myName = localStorage.getItem('name');
   
    window.location.href = "saludo.html";
};


function setUserAnswer(q,a){
    localStorage.setItem("R_"+q,a);
};

function calculateResult(typeQuestion){

    let passTest = (
        localStorage.getItem(typeQuestion+"1")==localStorage.getItem("R_"+typeQuestion+"1") &&
        localStorage.getItem(typeQuestion+"2")==localStorage.getItem("R_"+typeQuestion+"2") &&
        localStorage.getItem(typeQuestion+"3")==localStorage.getItem("R_"+typeQuestion+"3")
    )


        if(passTest){
            window.location.href = "felicitaciones.html"; 
        }else{
            window.location.href = "fallaste.html";
        }

}
