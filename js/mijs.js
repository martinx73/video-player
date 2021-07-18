const $video=document.querySelector('#video');
const $play=document.querySelector('#play');
const $pause=document.querySelector('#pause');
const $backward=document.querySelector('#backward');
const $forward=document.querySelector('#forward');

$play.addEventListener('click',handlePlay);
function handlePlay(){
    $video.play();
    $play.hidden=true;
    $pause.hidden=false;
    console.log('clic en play')
}

$pause.addEventListener('click',handlePause);
function handlePause(){
    //$video.pause();    
    $play.hidden=false;
    $pause.hidden=true;
    console.log('clic en pausa')
}

$backward.addEventListener('click',handleBackward);
function handleBackward(){
    //$video.currentTime=$video.currentTime-10;    
    $video.currentTime-=10;
    console.log('atras 10 segundos',$video.currentTime)
}

$forward.addEventListener('click',handleForward);
function handleForward(){
    //$video.currentTime=$video.currentTime+10;
    $video.currentTime +=10;
    console.log('adelante 10 segundos',$video.currentTime)
}

const $progress=document.querySelector('#progress');
$video.addEventListener('loadedmetadata',handleLoaded)
function handleLoaded(){
    $progress.max=$video.duration;
    console.log('video cargado',$video.duration);
}

$video.addEventListener('timeupdate',handleTimeUpdate)
function handleTimeUpdate(){    
    $progress.value=$video.currentTime;
    //console.log('tiempo actual',$video.currentTime);
}

$progress.addEventListener('input',handleInput);
function handleInput(){    
    $video.currentTime=$progress.value;
    console.log($progress.value);
    
}