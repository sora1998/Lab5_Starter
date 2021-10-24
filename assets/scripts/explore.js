// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
var synth = window.speechSynthesis;
var click_talk=document.querySelector('button');
var voice_select=document.getElementById('voice-select');
var voices=[];
function populateVoiceList() {
  voices = synth.getVoices();
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voice_select.appendChild(option);
  }
}
setTimeout(function(){populateVoiceList();}, 100);
click_talk.addEventListener('click',function(){
  let image=document.querySelector('img');
  let text=document.querySelector('textarea');
  var utterThis = new SpeechSynthesisUtterance(text.value);
  var selectedOption = voice_select.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  if(synth.speaking){
    image.setAttribute('src','assets/images/smiling-open.png');
  }
  setInterval(function(){ 
    if(!synth.speaking){
      image.setAttribute('src','assets/images/smiling.png');
    } }, 100);
})
}