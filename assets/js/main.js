var btnShortmovie = document.getElementById("btn-shortmovie");
var btnNewcast = document.getElementById("btn-newcast");
var btnScrabble = document.getElementById("btn-scrabble");
var btnStorytelling = document.getElementById("btn-storytelling");
var btnDebate = document.getElementById("btn-debate");
var btnSpeech = document.getElementById("btn-speech");

var timelineShortmovie = document.getElementById("timeline-shortmovie");
var timelineNewcast = document.getElementById("timeline-newcast");
var timelineScrabble = document.getElementById("timeline-scrabble");
var timelineStorytelling = document.getElementById("timeline-storytelling");
var timelineDebate = document.getElementById("timeline-debate");
var timelineSpeech = document.getElementById("timeline-speech");

btnShortmovie.addEventListener("click", () => {
    btnShortmovie.style.backgroundColor = "rgba(62, 173, 195, 1)";

    btnNewcast.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnScrabble.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnStorytelling.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnDebate.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnSpeech.style.backgroundColor = "rgba(234, 234, 234, 1)";

    timelineShortmovie.style.display = "flex";
    timelineNewcast.style.display = "none";
    timelineScrabble.style.display = "none";
    timelineStorytelling.style.display = "none";
    timelineDebate.style.display = "none";
    timelineSpeech.style.display = "none";
});

btnNewcast.addEventListener("click", () => {
    btnNewcast.style.backgroundColor = "rgba(62, 173, 195, 1)";

    btnShortmovie.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnScrabble.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnStorytelling.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnDebate.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnSpeech.style.backgroundColor = "rgba(234, 234, 234, 1)";

    timelineShortmovie.style.display = "none";
    timelineNewcast.style.display = "flex";
    timelineScrabble.style.display = "none";
    timelineStorytelling.style.display = "none";
    timelineDebate.style.display = "none";
    timelineSpeech.style.display = "none";
});

btnScrabble.addEventListener("click", () => {
    btnScrabble.style.backgroundColor = "rgba(62, 173, 195, 1)";

    btnShortmovie.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnNewcast.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnStorytelling.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnDebate.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnSpeech.style.backgroundColor = "rgba(234, 234, 234, 1)";

    timelineShortmovie.style.display = "none";
    timelineNewcast.style.display = "none";
    timelineScrabble.style.display = "flex";
    timelineStorytelling.style.display = "none";
    timelineDebate.style.display = "none";
    timelineSpeech.style.display = "none";
});

btnStorytelling.addEventListener("click", () => {
    btnStorytelling.style.backgroundColor = "rgba(62, 173, 195, 1)";

    btnShortmovie.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnNewcast.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnScrabble.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnDebate.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnSpeech.style.backgroundColor = "rgba(234, 234, 234, 1)";

    timelineShortmovie.style.display = "none";
    timelineNewcast.style.display = "none";
    timelineScrabble.style.display = "none";
    timelineStorytelling.style.display = "flex";
    timelineDebate.style.display = "none";
    timelineSpeech.style.display = "none";
});

btnDebate.addEventListener("click", () => {
    btnDebate.style.backgroundColor = "rgba(62, 173, 195, 1)";

    btnShortmovie.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnNewcast.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnScrabble.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnStorytelling.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnSpeech.style.backgroundColor = "rgba(234, 234, 234, 1)";

    timelineShortmovie.style.display = "none";
    timelineNewcast.style.display = "none";
    timelineScrabble.style.display = "none";
    timelineStorytelling.style.display = "none";
    timelineDebate.style.display = "flex";
    timelineSpeech.style.display = "none";
});

btnSpeech.addEventListener("click", () => {
    btnSpeech.style.backgroundColor = "rgba(62, 173, 195, 1)";

    btnShortmovie.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnNewcast.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnScrabble.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnStorytelling.style.backgroundColor = "rgba(234, 234, 234, 1)";
    btnDebate.style.backgroundColor = "rgba(234, 234, 234, 1)";

    timelineShortmovie.style.display = "none";
    timelineNewcast.style.display = "none";
    timelineScrabble.style.display = "none";
    timelineStorytelling.style.display = "none";
    timelineDebate.style.display = "none";
    timelineSpeech.style.display = "flex";
});