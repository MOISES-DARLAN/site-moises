/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/


// This file is intentionally blank
// Use this file to add JavaScript to your project

var btn_colaborar = window.document.getElementById('btn-colaborar')
var modalQrCode = window.document.getElementById('qrcode-pix')
let copyText = window.document.getElementById('pixelCode')
let btnCopiar = window.document.getElementById("copyButton")
let btnFecharmodal = window.document.getElementById("closeButton")


function openModal(){
    modalQrCode.style.display = "block"
}

function closeModal(){
    modalQrCode.style.display = "none"
}

function copyPix(){
    btnCopiar.style.backgroundColor = "green"
    copyText.select();
  copyText.setSelectionRange(0, 99999); /* Para dispositivos móveis */

  /* Alertar o usuário que o texto foi copiado */
  alert("Código do pixel copiado: " + copyText.value);
}

btn_colaborar.addEventListener('click', openModal)
btnCopiar.addEventListener('click', copyPix)
btnFecharmodal.addEventListener('click', closeModal)