"use strict"



var BotonEstudios;
var BotonPortfolio;
var BotonExperiencia;
var BotonInformatica;
var BotonVirtudes;
var BotonIdiomas;
var BotonComplementarios;
var contenedor ;

var posts = null;


window.addEventListener('load',(event)=>{

    fetch("./informationAB/Spanish/CurriculumAB.JSON")
        .then(response => {
                return response.json();
                })
        .then(jsondata => {
            posts=jsondata;
            mostrarExperiencia(posts);

        });
    



    
    BotonExperiencia= document.getElementById("BotonExperiencia");
    BotonEstudios= document.getElementById("BotonEstudios");
    BotonInformatica= document.getElementById("BotonInformatica");
    BotonVirtudes= document.getElementById("BotonVirtudes");
    BotonIdiomas= document.getElementById("BotonIdiomas");
    BotonComplementarios= document.getElementById("BotonComplementario");
    BotonPortfolio= document.getElementById("Portfolio");
    contenedor= document.getElementById("contenedor");
    BotonPortfolio.addEventListener('click',()=>mostrarPortfolio());
    BotonEstudios.addEventListener('click', ()=>mostrarEstudios(posts));
    BotonExperiencia.addEventListener('click',()=>mostrarExperiencia(posts));
    BotonInformatica.addEventListener('click',()=>mostrarInformatica(posts)); 
    BotonIdiomas.addEventListener('click',()=>mostrarIdiomas(posts));
    BotonVirtudes.addEventListener('click',()=>mostrarVirtudes(posts));
    BotonComplementarios.addEventListener('click',()=>mostrarComplementarios(posts));  
            
    
        });
    
 
//------------------------





function mostrarEstudios(posts) {
    
        let titulo;

        let name;
        let ending;
        let average;
        let institution;
        let level;
        let observations;
        let lista;
        let errorElement;
        let i=0;
        BorrarContenedor()
        //objetoJSON=JSON.parse(posts);
        if(posts!=null)
        {
            titulo = document.createElement('h1');
            titulo.innerHTML =  "EDUCACION:";
            contenedor.appendChild(titulo);



        
            for (let k in posts["education"]["titles"])
            {
                
                i=posts["education"]["titles"].length-k-1;
                name = document.createElement('h2');
                name.innerHTML=posts["education"]["titles"][i]["name"];
                contenedor.appendChild(name);
                lista= document.createElement('ul');


                level = document.createElement('li');
                level.innerHTML="Nivel: "+posts["education"]["titles"][i]["level"];
                lista.appendChild(level);
                ending = document.createElement('li');
                ending.innerHTML="Año de finalización: "+posts["education"]["titles"][i]["ending"];
                lista.appendChild(ending);
                average = document.createElement('li');
                average.innerHTML="Promedio: "+posts["education"]["titles"][i]["average"];
                lista.appendChild(average);
                institution = document.createElement('li');
                institution.innerHTML="Institución: "+posts["education"]["titles"][i]["institution"];
                lista.appendChild(institution);
                observations = document.createElement('li');
                observations.innerHTML="Observaciones: "+posts["education"]["titles"][i]["observations"];
                lista.appendChild(observations);

                contenedor.appendChild(lista);
            }


            titulo = document.createElement('h1');
            titulo.innerHTML =  "RECONOCIMIENTOS:";
            contenedor.appendChild(titulo);

            for (let i in posts["education"]["recognitions"])
            {
                name = document.createElement('h2');
                name.innerHTML=posts["education"]["recognitions"][i]["name"];
                contenedor.appendChild(name);
                lista= document.createElement('ul');

                
                ending = document.createElement('li');
                ending.innerHTML="Año de finalización: "+posts["education"]["recognitions"][i]["ending"];
                lista.appendChild(ending);
               
                institution = document.createElement('li');
                institution.innerHTML="Institución: "+posts["education"]["recognitions"][i]["institution"];
                lista.appendChild(institution);
                observations = document.createElement('li');
                observations.innerHTML="Observaciones: "+posts["education"]["recognitions"][i]["observations"];
                lista.appendChild(observations);

                contenedor.appendChild(lista);
            }
        }
        else
        {
            errorElement = document.getElementById("errorSquare");
            errorElement.innerHTML = " No se a podido conectar al servidor para obtener datos";
            errorElement.classList.toggle("hide");
             setTimeout(() => errorElement.classList.toggle('hide'), 6000);

        }

    
}
/*function mostrarExperiencia(posts) {


}*/
//----------------------

function mostrarExperiencia(posts) {
    
    let titulo;

    let name;
    let company;
    let category;
    let tasks;
    let from;
    let until;
    let lista;

    let errorElement;
    BorrarContenedor()
    //objetoJSON=JSON.parse(posts);
    if(posts!=null)
    {
        titulo = document.createElement('h1');
        titulo.innerHTML =  "Experiencia:";
        contenedor.appendChild(titulo);



    
        for (let i in posts["experience"])
        {
            name = document.createElement('h2');
            name.innerHTML=posts["experience"][i]["name"];
            contenedor.appendChild(name);
            lista= document.createElement('ul');


            company = document.createElement('li');
            company.innerHTML="Empresa: "+posts["experience"][i]["company"];
            lista.appendChild(company);
            category = document.createElement('li');
            category.innerHTML="Rubro: "+posts["experience"][i]["category"];
            lista.appendChild(category);

            tasks = document.createElement('li');
            tasks.innerHTML="Tareas Realizadas:";
            lista.appendChild(tasks);

            for (let j in posts["experience"][i]["tasks performed"])
            {
            tasks = document.createElement('dd');
            tasks.innerHTML=posts["experience"][i]["tasks performed"][j];
            lista.appendChild(tasks);
            }

            from = document.createElement('li');
            from.innerHTML="Institución: "+posts["experience"][i]["from"];
            lista.appendChild(from);
            until = document.createElement('li');
            until.innerHTML="Observaciones: "+posts["experience"][i]["until"];
            lista.appendChild(until);

            contenedor.appendChild(lista);
        }
    }
    else
    {
        errorElement = document.getElementById("errorSquare");
        errorElement.innerHTML = " No se a podido conectar al servidor para obtener datos";
        errorElement.classList.toggle("hide");
         setTimeout(() => errorElement.classList.toggle('hide'), 6000);

    }


}
//----------------------
function mostrarInformatica(posts) {
    
    let titulo;

    let name;
    let level;

    let lista;

    let errorElement;
    BorrarContenedor()
    //objetoJSON=JSON.parse(posts);
    if(posts!=null)
    {
        titulo = document.createElement('h1');
        titulo.innerHTML =  "Informática:";
        contenedor.appendChild(titulo);


        name = document.createElement('h2');
        name.innerHTML="Lenguajes de Programación:";
        contenedor.appendChild(name);
    
        for (let i in posts["computing"]["programming languajes"])
        {
            name = document.createElement('p');
            name.innerHTML=posts["computing"]["programming languajes"][i]["name"];
            contenedor.appendChild(name);
            lista= document.createElement('ul');
            level = document.createElement('li');
            level.innerHTML="Nivel: "+posts["computing"]["programming languajes"][i]["level"];
            lista.appendChild(level);
            contenedor.appendChild(lista);
            
        }
        name = document.createElement('h2');
        name.innerHTML="Base de Datos:";
        contenedor.appendChild(name);
    
        for (let i in posts["computing"]["database"])
        {
            name = document.createElement('p');
            name.innerHTML=posts["computing"]["database"][i]["name"];
            contenedor.appendChild(name);
            lista= document.createElement('ul');
            level = document.createElement('li');
            level.innerHTML="Nivel: "+posts["computing"]["database"][i]["level"];
            lista.appendChild(level);
            contenedor.appendChild(lista);
            
        }

        name = document.createElement('h2');
        name.innerHTML="Sistemas Operativos:";
        contenedor.appendChild(name);
    
        for (let i in posts["computing"]["SO"])
        {
            name = document.createElement('p');
            name.innerHTML=posts["computing"]["SO"][i]["name"];
            contenedor.appendChild(name);
            lista= document.createElement('ul');
            level = document.createElement('li');
            level.innerHTML="Nivel: "+posts["computing"]["SO"][i]["level"];
            lista.appendChild(level);
            contenedor.appendChild(lista);
            
        }
        name = document.createElement('h2');
        name.innerHTML="Office:";
        contenedor.appendChild(name);
    
        for (let i in posts["computing"]["office"])
        {
            name = document.createElement('p');
            name.innerHTML=posts["computing"]["office"][i]["name"];
            contenedor.appendChild(name);
            lista= document.createElement('ul');
            level = document.createElement('li');
            level.innerHTML="Nivel: "+posts["computing"]["office"][i]["level"];
            lista.appendChild(level);
            contenedor.appendChild(lista);
            
        }

    }
    else
    {
        errorElement = document.getElementById("errorSquare");
        errorElement.innerHTML = " No se a podido conectar al servidor para obtener datos";
        errorElement.classList.toggle("hide");
         setTimeout(() => errorElement.classList.toggle('hide'), 6000);

    }


}
//----------------------
function mostrarIdiomas(posts) {
    
    let titulo;

    let name;
    let level;

    let lista;

    let errorElement;
    BorrarContenedor()
    //objetoJSON=JSON.parse(posts);
    if(posts!=null)
    {
        titulo = document.createElement('h1');
        titulo.innerHTML =  "Idiomas:";
        contenedor.appendChild(titulo);

    
        for (let i in posts["languajes"])
        {
            name = document.createElement('p');
            name.innerHTML=posts["languajes"][i]["name"];
            contenedor.appendChild(name);
            lista= document.createElement('ul');
            level = document.createElement('li');
            level.innerHTML="Nivel: "+posts["languajes"][i]["level"];
            lista.appendChild(level);
            contenedor.appendChild(lista);
            
        }

    }
    else
    {
        errorElement = document.getElementById("errorSquare");
        errorElement.innerHTML = " No se a podido conectar al servidor para obtener datos";
        errorElement.classList.toggle("hide");
         setTimeout(() => errorElement.classList.toggle('hide'), 6000);

    }


}
//----------------------
function mostrarVirtudes(posts) {
    
    let titulo;
    let lista;
    let name;


    let errorElement;
    BorrarContenedor()
    //objetoJSON=JSON.parse(posts);
    if(posts!=null)
    {
        titulo = document.createElement('h1');
        titulo.innerHTML =  "Virtudes:";
        contenedor.appendChild(titulo);

        lista= document.createElement('ul');
            
        for (let i in posts["virtues"])
        {
            name = document.createElement('li');
            name.innerHTML=posts["virtues"][i];
            lista.appendChild(name);
            
            
        }
        
        contenedor.appendChild(lista);
       

    }
    else
    {
        errorElement = document.getElementById("errorSquare");
        errorElement.innerHTML = " No se a podido conectar al servidor para obtener datos";
        errorElement.classList.toggle("hide");
         setTimeout(() => errorElement.classList.toggle('hide'), 6000);

    }


}
//--------------------------
function mostrarComplementarios(posts) {
    
    let titulo;

    let name;


    let errorElement;
    BorrarContenedor()
    //objetoJSON=JSON.parse(posts);
    if(posts!=null)
    {
        titulo = document.createElement('h1');
        titulo.innerHTML =  "Datos Complementarios:";
        contenedor.appendChild(titulo);

    
        for (let i in posts["supplementary data"])
        {
            name = document.createElement('p');
            name.innerHTML=posts["supplementary data"][i];
            contenedor.appendChild(name);
            
            
        }

    }
    else
    {
        errorElement = document.getElementById("errorSquare");
        errorElement.innerHTML = " No se a podido conectar al servidor para obtener datos";
        errorElement.classList.toggle("hide");
         setTimeout(() => errorElement.classList.toggle('hide'), 6000);

    }


}
//--------------------------

function mostrarPortfolio() {
    
    let titulo;

    let name;


    BorrarContenedor()
    

        titulo = document.createElement('h1');
        titulo.innerHTML =  "Portfolio:";
        contenedor.appendChild(titulo);

    
       
            name = document.createElement('a');
            name.href="./portfolioAB/Calculadora.html";
            name.innerHTML="Calculadora";
            contenedor.appendChild(name);
            
      

    

}
//--------------------------
function BorrarContenedor(){

    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

}





