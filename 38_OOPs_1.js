console.clear()
var videoname="Intro to Js"
var videotype="mp4"
var videolength="2:54"
var owner="ABJ"

function GetVideoname(){
    return videoname
}
function GetVideoType(){
    return videotype
}
function GetVideoLength(){
    return videolength
}
function FindOwner(){
    return owner
}

var video={
     videoname:"Intro to Js",
     videotype:"mp4",
     videolength:"2:54",
     owner:"ABJ",
     GetVideoname:function(){
        return this.videoname
     },
     GetVideoLength:function(){
        return this.videolength
     },
     GetVideoType:function(){
        return this.videotype
     },
     FindOwner:function(){
        return this.owner
     }
}
console.log(video.GetVideoname())