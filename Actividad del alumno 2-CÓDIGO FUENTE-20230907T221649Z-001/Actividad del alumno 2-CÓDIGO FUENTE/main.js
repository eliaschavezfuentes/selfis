var reconocedorVos =window.webkitSpeechRecognition;
var reconocedor = new reconosedorVos();
var Textbox = document.getElementById("textbox");

function start()
{
    document.getElementById("microfono")
    document.getElementById("textbox").innerHTML = "";
    reconocedor.start();
}