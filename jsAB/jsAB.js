"use strict"


var BotonDatos;
var BotonEstudios;
var BotonExperiencia;
var BotonInformatica;
var BotonVirtudes;
var BotonIdiomas;
var BotonComplementarios;
var BotonPortfolio;
var botonMostrar;
var botonOcultar;

var contenedor ;
var errorElement;

var elemDatos;
var elemExperiencia;
var elemEstudios;
var elemInformatica;
var elemIdiomas;
var elemVirtudes;
var elemComplementarios;
var elemPortafolio;
var tablaDatos;

var formularioMostrar;
var botonOcultar;
var botonMostrar;

var elemCarta;

var errorShow;


var Music;
var MusicFlag=0;
var Player;





var posts = null;
var posts2=null;
var postsEnglish=null;
var posts2English=null;



window.addEventListener('load',(event)=>{

    elemDatos= document.getElementById("elemDatos");
    elemExperiencia= document.getElementById("elemExperiencia");
    elemEstudios= document.getElementById("elemEstudios");
    elemInformatica= document.getElementById("elemInformatica");
    elemIdiomas= document.getElementById("elemIdiomas");
    elemVirtudes= document.getElementById("elemVirtudes");
    elemComplementarios= document.getElementById("elemComplementarios");

    tablaDatos= document.getElementById("tablaDatos");
    elemPortafolio= document.getElementById("elemPortafolio");
    

    



    BotonDatos= document.getElementById("BotonDatos");
    BotonExperiencia= document.getElementById("BotonExperiencia");
    BotonEstudios= document.getElementById("BotonEstudios");
    BotonInformatica= document.getElementById("BotonInformatica");
    BotonVirtudes= document.getElementById("BotonVirtudes");
    BotonIdiomas= document.getElementById("BotonIdiomas");
    BotonComplementarios= document.getElementById("BotonComplementario");
    BotonPortfolio= document.getElementById("Portfolio");

    botonMostrar= document.getElementById("botonMostrar");
    botonOcultar= document.getElementById("botonOcultar");

    formularioMostrar= document.getElementById("formularioMostrar");


    errorElement = document.getElementById("errorSquare");
    elemCarta= document.getElementById("carta");

    Music = document.getElementById("Music");
  
    Player = document.getElementById("Player");
    
    getEtiquetasID();



    
    //contenedor= document.getElementById("contenedor");

   
    FetchCall();

    



    formularioMostrar.addEventListener('click',()=>verificarCheckBoxes()); 
    botonOcultar.addEventListener('click',()=>uncheckAll());
    botonMostrar.addEventListener('click',()=>checkAll());
    verificarCheckBoxes();
  
    
        });
    


//--------------------------------

function appendALL(postsData,postsIndex)
{

    appendDatos(elemDatos,postsData,postsIndex);
       appendContenido(elemExperiencia,postsData["experience"],postsIndex,0,postsIndex["experience"]);
       appendContenido(elemEstudios,postsData["education"],postsIndex,0,postsIndex["education"]);
       appendContenido(elemInformatica,postsData["computing"],postsIndex,0,postsIndex["computing"]);
       appendContenido(elemIdiomas,postsData["languages"],postsIndex,0,postsIndex["languages"]);
       appendContenido(elemVirtudes,postsData["virtues"],postsIndex,1,postsIndex["virtues"]);
       appendContenido(elemComplementarios,postsData["supplementary data"],postsIndex,1,postsIndex["supplementary data"]);

}


//-------------------------
function FetchCall()
{

    errorShow="";
    fetch("./informationAB/Spanish/CurriculumIndexAB.JSON")
    .then(response => {
            return response.json();
            })
    .then(jsondata => {
        posts2=jsondata;
        

    


fetch("./informationAB/Spanish/CurriculumAB.JSON")
    .then(response => {
            return response.json();
            })
    .then(jsondata => {
        posts=jsondata;

        

        appendALL(posts,posts2);
    
        Player.playVideo();
        Music.style.backgroundColor ='blue';
        MusicFlag=1;
       // mostrarExperiencia(posts);
       
       
    })
    .catch(err =>{  
      
        errorShow="ERROR: VUELVA A CARGAR LA PÁGINA "+err;
        console.log('Solicitud fallida 1', err);

                 errorElement.style.display='';
                 errorElement.innerHTML = errorShow;
                 setTimeout(() => errorElement.style.display='none', 8000);
 
                 
        
    
    }) ;     
        

})
.catch(err =>{  
   
    errorShow="ERROR: VUELVA A CARGAR LA PÁGINA "+err;

    console.log('Solicitud fallida 2', err);
   
        errorElement.style.display='';
        errorElement.innerHTML = errorShow;
         setTimeout(() => errorElement.style.display='none', 8000);


}) ;




errorShow="";
    fetch("./informationAB/English/CurriculumIndexABen.JSON")
    .then(response => {
            return response.json();
            })
    .then(jsondata => {
        posts2English=jsondata;
        

    


fetch("./informationAB/English/CurriculumABen.JSON")
    .then(response => {
            return response.json();
            })
    .then(jsondata => {
        postsEnglish=jsondata;

        

    

       // mostrarExperiencia(posts);
       
       
    })
    .catch(err =>{  
      
        errorShow="ERROR: press F5 "+err;
        console.log('Solicitud fallida 3', err);

                 errorElement.style.display='';
                 errorElement.innerHTML = errorShow;
                 setTimeout(() => errorElement.style.display='none', 8000);
 
                 
        
    
    }) ;     
        

})
.catch(err =>{  
   
    errorShow="ERROR: Press F5 "+err;

    console.log('Solicitud fallida 4', err);
   
        errorElement.style.display='';
        errorElement.innerHTML = errorShow;
         setTimeout(() => errorElement.style.display='none', 8000);


}) ;


}

 
//------------------------


function crearHijo(Padre,tagNuevo)
{   let elemento;
    elemento= document.createElement(tagNuevo);
    Padre.appendChild(elemento);
    return(elemento);

}




function appendString(Padre,cadena,nivel,tagSeleccionado)
{
    let elemento1;
    let izqPadding="";
    let nivelfinal;
    let claseObjeto="stlnivel";
    if(nivel<0)nivelfinal=0;
    else nivelfinal=nivel;

    if(nivelfinal<6)claseObjeto=claseObjeto+(nivelfinal.toString());
    else claseObjeto="stlnivel5";

    izqPadding=(nivelfinal*6).toString();
    izqPadding=izqPadding+"%";
    elemento1= document.createElement(tagSeleccionado);
    elemento1.style.paddingLeft=izqPadding;
    elemento1.classList.add(claseObjeto);
    elemento1.innerHTML=cadena;
    Padre.appendChild(elemento1);


}


function appendDatos(padre,objetivo,nombresDeEtiquetas)
{
    let cadena="";
    

    appendString(padre,objetivo["name"],0,"h1");
    cadena="<b>"+nombresDeEtiquetas["age"]+"</b>"+objetivo["age"];
    appendString(padre,cadena,2,"p");
    cadena="<b>"+nombresDeEtiquetas["Date of Birth"]+"</b>"+objetivo["Date of Birth"];
    appendString(padre,cadena,2,"p");
    cadena="<b>"+nombresDeEtiquetas["civil state"]+"</b>"+objetivo["civil state"];
    appendString(padre,cadena,2,"p");
    cadena="<b>"+nombresDeEtiquetas["address"]+"</b>"+objetivo["address"];
    appendString(padre,cadena,2,"p");
    cadena="<b>E-mail: </b><a href='mailto:andreshugobernardez@gmail.com?Subject=Interesado%20en%20concretar%20una%20entrevista'>andreshugobernardez@gmail.com.ar</a>"
    appendString(padre,cadena,1,"p");
  


}



function  appendContenido(padre,objetivo,nombresDeEtiquetas,nivel,strAnexo)
{
    let strEspacios="";
    let strOut="";
    let strDato="";
    let k;
    let izqPadding=0  ;
    
    /*for (k=0;k<nivel;k++)
            {
                strEspacios=strEspacios+"   ";
            }*/
    
    switch (typeof objetivo )
    {
        case "string":
            strOut=strAnexo+objetivo;
            //console.log(strOut);
            appendString(padre,strOut,nivel,'p');
        break;

        case "object":

           
            strOut=strAnexo;
            //console.log(strOut);
            appendString(padre,strOut,nivel,'p');

            if(objetivo[0])
            {
                for(let dato in objetivo)
                {
                    
                    appendContenido(padre,objetivo[dato],nombresDeEtiquetas,nivel+1,strEspacios);
                }
            }
            else
            {
                
                for(let dato in objetivo)
                {
                    if(dato=="name")
                    {                           appendString(padre,objetivo[dato],nivel,'h1');
                    }

                    else 
                    {   
                        if(nombresDeEtiquetas[dato]) strDato="<b>"+nombresDeEtiquetas[dato]+"</b>";
                        else  strDato="<b>"+dato+"</b>"+":";
                        appendContenido(padre,objetivo[dato],nombresDeEtiquetas,nivel+1,strEspacios+strDato);
                    }
                }
            }
        break;
    }
    
return 0;
}


function errorBox(str)
{
   
    errorElement.innerHTML = str;
    errorElement.classList.toggle("hide");
     setTimeout(() => errorElement.classList.toggle('hide'), 6000);

}


//--------------------------

function mostrarElemento(Padre) {
    
        
      Padre.classList.toggle("hide");

    

}
//--------------------------
function BorrarContenedor(Padre){

    while (Padre.firstChild) {
        Padre.removeChild(contenedor.firstChild);
      }

}

//-------------Borra todo el contenido incluido el padre.
function BorrarTodo(Padre)
{
    while(Padre.firstChild)
    {
        BorrarTodo(Padre.firstChild);
    }
    Padre.remove();
}

//---------------Borra todo el contenido sin incluir el padre
function BorrarTodoElContenido(Padre)
{
    while(Padre.firstChild)
    {
        BorrarTodo(Padre.firstChild);
    }

}


//-----------------Borrar todos los datos del ShowRoom

function BorrarShowroom()
{
   BorrarTodoElContenido(elemDatos)
   BorrarTodoElContenido(elemExperiencia)
   BorrarTodoElContenido(elemEstudios)
   BorrarTodoElContenido(elemInformatica)
   BorrarTodoElContenido(elemIdiomas)
   BorrarTodoElContenido(elemVirtudes)
   BorrarTodoElContenido(elemComplementarios)
}

//-----------------------------------------------------------------

function verificarCheckBox(chkbxElement,elementoAMostrar)
{
    if(chkbxElement.checked) {elementoAMostrar.style.display='';return 1;}
    else {elementoAMostrar.style.display='none';return 0}
}

function checkAll()
{
    BotonDatos.checked=true;
    BotonExperiencia.checked=true;
    BotonEstudios.checked=true;
    BotonInformatica.checked=true;
    BotonIdiomas.checked=true;
    BotonVirtudes.checked=true;
    BotonComplementarios.checked=true;
    BotonPortfolio.checked=true;
    verificarCheckBoxes()
}
function uncheckAll()
{
    BotonDatos.checked=false;
    BotonExperiencia.checked=false;
    BotonEstudios.checked=false;
    BotonInformatica.checked=false;
    BotonIdiomas.checked=false;
    BotonVirtudes.checked=false;
    BotonComplementarios.checked=false;
    BotonPortfolio.checked=false;
    verificarCheckBoxes()
}
function verificarCheckBoxes()
{
    let CantidadOn;
    CantidadOn=0;

    CantidadOn+= verificarCheckBox(BotonDatos,tablaDatos);
    CantidadOn+= verificarCheckBox(BotonExperiencia,elemExperiencia);
    CantidadOn+= verificarCheckBox(BotonEstudios,elemEstudios);
    CantidadOn+= verificarCheckBox(BotonInformatica,elemInformatica);
    CantidadOn+= verificarCheckBox(BotonIdiomas,elemIdiomas);
    CantidadOn+= verificarCheckBox(BotonVirtudes,elemVirtudes);
    CantidadOn+= verificarCheckBox(BotonComplementarios,elemComplementarios);
    CantidadOn+= verificarCheckBox(BotonPortfolio,elemPortafolio);
    
    if(CantidadOn==0)elemCarta.style.display='block';
    else elemCarta.style.display='none';
    

}




//-----------------Activa o desactiva la música.
function triggerMusic(){
    if(MusicFlag==0){
        Player.playVideo();
        MusicFlag=1;
        Music.style.backgroundColor = 'blue';
    }
    else {
        Player.pauseVideo();
        MusicFlag=0;
         Music.style.backgroundColor = 'transparent';
    }
}


