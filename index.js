function shout(string) {
    return string.toUpperCase();
}

function whisper(string)  {
let whisper = "HELLO"
    return whisper.toLowerCase();
}
function logShout(string){
    var logShout = string.toUpperCase();
    console.log(logShout);
}
function logWhisper(string){
    var logWhisper= string.toLowerCase();
    console.log(logWhisper);
}
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase() === string){
      return "I can't hear you!"
    }
    if (string.toUpperCase() === string){
        return "YES INDEED!"
    }
    if ("Let's have dinner together!" === string) {
        return "I would love to!"
    }
}