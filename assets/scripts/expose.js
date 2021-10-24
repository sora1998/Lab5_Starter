// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn_type=document.getElementById('horn-select')
  horn_type.addEventListener('change',function(){
    let image=document.querySelector('img');
    image.setAttribute('src','assets/images/'+event.target.value+'.svg');
    let aud=document.querySelector('.hidden');
    aud.setAttribute('src','assets/audio/'+event.target.value+'.mp3')
  });


  const change_volume=document.getElementById('volume');
  change_volume.addEventListener('change',function(){
    let vol=Number(event.target.value);
    let sound_icon=document.querySelector('div img');
    if(vol==0){
      sound_icon.setAttribute('src','assets/icons/volume-level-0.svg');
    }
    else if(vol>=1&&vol<33){
      sound_icon.setAttribute('src','assets/icons/volume-level-1.svg');
    }
    else if(vol>=33&&vol<67){
      sound_icon.setAttribute('src','assets/icons/volume-level-2.svg');
    }
    else {
      sound_icon.setAttribute('src','assets/icons/volume-level-3.svg');
    }
    let aud=document.querySelector('.hidden');
    aud.volume=vol/100;
  })



  const play_sound=document.querySelector('button');
  play_sound.addEventListener("click",function(){
    let aud=document.querySelector('.hidden');
    aud.play();
    let source_audio=aud.getAttribute('src');
    if(source_audio=='assets/audio/party-horn.mp3'){
      const jsConfetti=new JSConfetti();
      jsConfetti.addConfetti()
    }
  });
}