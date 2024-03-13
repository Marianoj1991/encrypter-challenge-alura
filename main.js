// HTML REFERENCES

const TEXTAREAENCRYPT = document.querySelector('#encript-textarea');

const BUTTON_ENCRYPT = document.querySelector('#text__button--encrypt');

const BUTTON_DESENCRYPT = document.querySelector('#text__button--desencrypt');

const DIV_ENCRIPTED_TOERASE = document.querySelector(
  '#text-zone__encripted_child'
);

const PARAGRAPH_TAG = document.querySelector('#encripted-message');

const COPY_BUTTON = document.querySelector('.button-copy')

let isEncrypting = true;
let textToEncrypt = '';

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

BUTTON_ENCRYPT.addEventListener('click', (e) => {
 e.preventDefault();
 let textToEncrypt = TEXTAREAENCRYPT.value.toLowerCase().trim();
 let textEncrypted = '';
  for(let i = 0; i < textToEncrypt.length; i++) {
    if(textToEncrypt[i] === 'e') {
      textEncrypted += 'enter';
    } else if(textToEncrypt[i] === 'i') {
      textEncrypted += 'imes'
    } else if(textToEncrypt[i] === 'a') {
      textEncrypted += 'ai'
    } else if(textToEncrypt[i] === 'o') {
      textEncrypted += 'ober';
    } else if (textToEncrypt[i] === 'u') {
      textEncrypted += 'ufat'
    } else {
      textEncrypted += textToEncrypt[i]
    }
  }
 console.log(textEncrypted);
 DIV_ENCRIPTED_TOERASE.style.display = 'none';
 PARAGRAPH_TAG.textContent = textEncrypted;
 PARAGRAPH_TAG.style.fontSize = '2rem';

 COPY_BUTTON.style.display = 'block';
 COPY_BUTTON.style.position = 'absolute';
 COPY_BUTTON.style.bottom = '20px';
})

COPY_BUTTON.addEventListener('click', (e) => {
  const text = PARAGRAPH_TAG.innerText;
  navigator.clipboard.writeText(text);
})

BUTTON_DESENCRYPT.addEventListener('click', (e) => {
  e.preventDefault();
  let textToEncrypt = TEXTAREAENCRYPT.value.toLowerCase().trim();
  let textEncrypted = ''
  // for (let i = 0; i < textToEncrypt.length; i++) {
  //   if (textToEncrypt[i] === 'e') {
  //     textEncrypted += 'enter'
  //   } else if (textToEncrypt[i] === 'i') {
  //     textEncrypted += 'imes'
  //   } else if (textToEncrypt[i] === 'a') {
  //     textEncrypted += 'ai'
  //   } else if (textToEncrypt[i] === 'o') {
  //     textEncrypted += 'ober'
  //   } else if (textToEncrypt[i] === 'u') {
  //     textEncrypted += 'ufat'
  //   } else {
  //     textEncrypted += textToEncrypt[i]
  //   }
  // }

  textEncrypted = textToEncrypt.replace(/enter/g, 'e');
  textEncrypted = textEncrypted.replace(/imes/g, 'i');
  textEncrypted = textEncrypted.replace(/ai/g, 'a');
  textEncrypted = textEncrypted.replace(/ufat/g, 'u');
  textEncrypted = textEncrypted.replace(/ober/g, 'o');
  console.log('desencrypt');
  console.log(textEncrypted);
  DIV_ENCRIPTED_TOERASE.style.display = 'none'
  PARAGRAPH_TAG.textContent = textEncrypted
  PARAGRAPH_TAG.style.fontSize = '2rem'

  COPY_BUTTON.style.display = 'block'
  COPY_BUTTON.style.position = 'absolute'
  COPY_BUTTON.style.bottom = '10px'
})