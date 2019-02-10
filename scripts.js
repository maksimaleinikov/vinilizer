let $player = document.getElementsByClassName('snap')[0];

let $record = document.getElementsByClassName('record')[0];
let $play = document.getElementsByClassName('play')[0];
let $pause = document.getElementsByClassName('pause')[0];

$play.addEventListener('click', play);
$pause.addEventListener('click', pause);

$player.addEventListener('playing', function() {
    $record.classList.remove('off');
});
$player.addEventListener('pause', function() {
    $record.classList.add('off');
});

function play() {
    $player.play();
}

function pause() {
    $player.pause();
}


