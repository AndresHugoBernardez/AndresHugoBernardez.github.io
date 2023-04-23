"use strict"

var EtiquetaCurriculumAB;
var EtiquetaPaginaEnConstruccion;
var etiquetaDescargarCV;
var etiquetaDatos;
var etiquetaExperiencia;
var etiquetaEstudios;
var etiquetaInformatica;
var etiquetaIdiomas;
var etiquetaVirtudes;
var etiquetaDatosComplementarios;
var etiquetaPortfolio;
var etiquetaMostrarTodo;
var etiquetaOcultarTodo;
var etiquetaLinkedin;
var etiquetaPaginaEnContruccion2;
var IdiomaActual="Spanish";


function getEtiquetasID()

{

EtiquetaCurriculumAB         =document.getElementById("EtiquetaCurriculumAB");
EtiquetaPaginaEnConstruccion =document.getElementById("EtiquetaPaginaEnConstruccion");
etiquetaDescargarCV          =document.getElementById("etiquetaDescargarCV");
etiquetaDatos                =document.getElementById("etiquetaDatos");
etiquetaExperiencia          =document.getElementById("etiquetaExperiencia");
etiquetaEstudios             =document.getElementById("etiquetaEstudios");
etiquetaInformatica          =document.getElementById("etiquetaInformatica")
etiquetaIdiomas              =document.getElementById("etiquetaIdiomas");
etiquetaVirtudes             =document.getElementById("etiquetaVirtudes");
etiquetaDatosComplementarios =document.getElementById("etiquetaDatosComplementarios");
etiquetaPortfolio            =document.getElementById("etiquetaPortfolio");
etiquetaMostrarTodo          =document.getElementById("etiquetaMostrarTodo");
etiquetaOcultarTodo          =document.getElementById("etiquetaOcultarTodo");
etiquetaLinkedin             =document.getElementById("etiquetaLinkedin");
etiquetaPaginaEnContruccion2 =document.getElementById("etiquetaPaginaEnContruccion2");

etiquetaDescargarCV.addEventListener("click", function(){
    window.location.href='informationAB/Spanish/cv Bernardez Andres Hugo.pdf';
});


}

/************************** */
function spanishVersion()
{
    
    if(IdiomaActual!="Spanish")
    {

        etiquetaDescargarCV.removeEventListener("click", function(){
            window.location.href='informationAB/English/cv Bernardez Andres Hugo English.pdf';
        });
    
        etiquetaDescargarCV.addEventListener("click", function(){
            window.location.href='informationAB/Spanish/cv Bernardez Andres Hugo.pdf';
        });

    BorrarShowroom()
    if(posts&&posts2)
    appendALL(posts,posts2);



    EtiquetaCurriculumAB.innerHTML=" Curriculum de Andrés Hugo Bernárdez";        
    etiquetaDescargarCV.innerHTML="Descargar CV";    
    etiquetaDatos.innerHTML="Datos";               
    etiquetaExperiencia.innerHTML="Experiencia";         
    etiquetaEstudios.innerHTML="Estudios";            
    etiquetaInformatica.innerHTML="Informática";        
    etiquetaIdiomas.innerHTML="Idiomas";             
    etiquetaVirtudes.innerHTML="Virtudes";            
    etiquetaDatosComplementarios.innerHTML="Datos Complementarios";
    etiquetaPortfolio.innerHTML="Portfolio";           
    etiquetaMostrarTodo.innerHTML="Mostrar Todo";         
    etiquetaOcultarTodo.innerHTML="Ocultar Todo";         
    etiquetaLinkedin.innerHTML="Visite mi Linkedin haciendo click aquí";            
    etiquetaPaginaEnContruccion2.innerHTML="* Última actualización: 23 de abril del 2023";

    IdiomaActual="Spanish";



    }


}
function englishVersion()
{

    if(IdiomaActual!="English")
    {

        etiquetaDescargarCV.removeEventListener("click", function(){
            window.location.href='informationAB/Spanish/cv Bernardez Andres Hugo.pdf';
            
        });
    
        etiquetaDescargarCV.addEventListener("click", function(){
            window.location.href='informationAB/English/cv Bernardez Andres Hugo English.pdf';
        });

        BorrarShowroom();
    if(postsEnglish&&posts2English)appendALL(postsEnglish,posts2English);
    EtiquetaCurriculumAB.innerHTML="Andrés Hugo Bernárdez's CV";        
    etiquetaDescargarCV.innerHTML="Download CV"; 
  
    etiquetaDatos.innerHTML="Data";               
    etiquetaExperiencia.innerHTML="Experience";         
    etiquetaEstudios.innerHTML="Education";            
    etiquetaInformatica.innerHTML="Computing";        
    etiquetaIdiomas.innerHTML="Languajes";             
    etiquetaVirtudes.innerHTML="Virtues";            
    etiquetaDatosComplementarios.innerHTML="Supplementary Data";
    etiquetaPortfolio.innerHTML="Portfolio";           
    etiquetaMostrarTodo.innerHTML="Show All";         
    etiquetaOcultarTodo.innerHTML="Hide All";         
    etiquetaLinkedin.innerHTML="Visit my Linkedin Profile by clicking here";            
    etiquetaPaginaEnContruccion2.innerHTML="* Last updated: April 23th, 2023";

    IdiomaActual="English"
    }
}
