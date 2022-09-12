"use strict"


var BotonDatos;
var BotonEstudios;
var BotonExperiencia;
var BotonInformatica;
var BotonVirtudes;
var BotonIdiomas;
var BotonComplementarios;
var BotonPortfolio;
var formularioMostrar;

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


var pepe={
    chicos:["pepe","luis"],
    auto:
        {modelo:"lamborgini",
        velocidades:["cien Kph","200 Kph"]

        },
    fabrica:"Pepitos CO",
    mascota:"Perro"
};
var arrpepe=["hola","chau","goodby"];

var posts = null;
var posts2=null;


window.addEventListener('load',(event)=>{

    fetch("./informationAB/Spanish/CurriculumIndexAB.JSON")
        .then(response => {
                return response.json();
                })
        .then(jsondata => {
            posts2=jsondata;
            

        });

   
    fetch("./informationAB/Spanish/CurriculumAB.JSON")
        .then(response => {
                return response.json();
                })
        .then(jsondata => {
            posts=jsondata;
           // mostrarExperiencia(posts);
           appendDatos(elemDatos,posts,posts2);
           appendContenido(elemExperiencia,posts["experience"],posts2,0,posts2["experience"]);
           appendContenido(elemEstudios,posts["education"],posts2,0,posts2["education"]);
           appendContenido(elemInformatica,posts["computing"],posts2,0,posts2["computing"]);
           appendContenido(elemIdiomas,posts["languajes"],posts2,0,posts2["languajes"]);
           appendContenido(elemVirtudes,posts["virtues"],posts2,1,posts2["virtues"]);
           appendContenido(elemComplementarios,posts["supplementary data"],posts2,1,posts2["supplementary data"]);

        });


    
    tablaDatos= document.getElementById("tablaDatos");
    elemDatos= document.getElementById("elemDatos");
    elemExperiencia= document.getElementById("elemExperiencia");
    elemEstudios= document.getElementById("elemEstudios");
    elemInformatica= document.getElementById("elemInformatica");
    elemIdiomas= document.getElementById("elemIdiomas");
    elemVirtudes= document.getElementById("elemVirtudes");
    elemComplementarios= document.getElementById("elemComplementarios");
    elemPortafolio= document.getElementById("elemPortafolio");

    contenedor= document.getElementById("contenedor");

   
 



    BotonDatos= document.getElementById("BotonDatos");
    BotonExperiencia= document.getElementById("BotonExperiencia");
    BotonEstudios= document.getElementById("BotonEstudios");
    BotonInformatica= document.getElementById("BotonInformatica");
    BotonVirtudes= document.getElementById("BotonVirtudes");
    BotonIdiomas= document.getElementById("BotonIdiomas");
    BotonComplementarios= document.getElementById("BotonComplementario");
    BotonPortfolio= document.getElementById("Portfolio");

    formularioMostrar= document.getElementById("formularioMostrar");


    errorElement = document.getElementById("errorSquare");

    



    formularioMostrar.addEventListener('click',()=>verificarCheckBoxes()); 

  
    
        });
    
 
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
    cadena=nombresDeEtiquetas["age"]+objetivo["age"];
    appendString(padre,cadena,2,"dt");
    cadena=nombresDeEtiquetas["Date of Birth"]+objetivo["Date of Birth"];
    appendString(padre,cadena,2,"dt");
    cadena=nombresDeEtiquetas["civil state"]+objetivo["civil state"];
    appendString(padre,cadena,2,"dt");
    cadena=nombresDeEtiquetas["address"]+objetivo["address"];
    appendString(padre,cadena,2,"dt");

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
            appendString(padre,strOut,nivel,'dt');
        break;

        case "object":

           
            strOut=strAnexo;
            //console.log(strOut);
            appendString(padre,strOut,nivel,'dt');

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
                    {   
                        appendString(padre,objetivo[dato],nivel,'h1');
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

function verificarCheckBox(chkbxElement,elementoAMostrar)
{
    if(chkbxElement.checked) elementoAMostrar.style.display='';
    else elementoAMostrar.style.display='none';
}

function verificarCheckBoxes()
{
    verificarCheckBox(BotonDatos,tablaDatos);
    verificarCheckBox(BotonExperiencia,elemExperiencia);
    verificarCheckBox(BotonEstudios,elemEstudios);
    verificarCheckBox(BotonInformatica,elemInformatica);
    verificarCheckBox(BotonIdiomas,elemIdiomas);
    verificarCheckBox(BotonVirtudes,elemVirtudes);
    verificarCheckBox(BotonComplementarios,elemComplementarios);
    verificarCheckBox(BotonPortfolio,elemPortafolio);
    



}


