var talkDiv = document.getElementsByClassName('text')[0];
var button=document.getElementsByClassName('speak')[0];

const speechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new speechRecognition();
button.addEventListener('click', ()=>{
    recognition.start();
})

recognition.onstart=function(){
    console.log('speak now');
}

recognition.onresult=function(event){
    const transcript=event.results[event.resultIndex][0].transcript;
    talkDiv.textContent=transcript;
    readOutLoad(transcript);
}

function readOutLoad(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume=1;
    speech.rate=.8;
    speech.text='I dont know, what you are speaking'
    if(message.includes('tell me about Athul')||message.includes('tell me about Abdul')||message.includes('tell me about Adil')||message.includes('tell me about Atul')){
        speech.text='Athul is final year engineering student from Thrissur, kerala. He is certified full stack developer. He is more interested in front end web development especially with react. for more details go to engineer athul dot github dot i o slash portfolio.';
        talkDiv.textContent="tell me about Athul";
    }
    if(message.includes('qualification')){
        speech.text="He completed twelth class with 91%, from J N V, Thrissur. Currently is persuing graduation in engineering from government engineering college palakkad. His knowledge in web development domain and willingness to do hardwork along with commitment toward work makes him stand out."
        talkDiv.textContent="Athul's Qualifications ?";
    }  
    window.speechSynthesis.speak(speech);
}