// Beim Verlassen pausieren; ein Aufbau oder Antworten werden nicht zurückgesetzt.
window.addEventListener('message',event=>{
 if(event.source!==window.parent||event.data?.type!=='elektrochemie-pause')return;
 if(location.protocol!=='file:'&&event.origin!==location.origin)return;
 for(const button of document.querySelectorAll('button')){
  if(/^(Versuch pausieren|Pause|Pausieren)$/i.test(button.textContent.trim())&&!button.disabled)button.click();
 }
});
