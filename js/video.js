var fullScreenVideo=fullScreenVideo||{},containerHeight=0;fullScreenVideo={name:"fullScreenVideo",backgroundVideo:"kr5kajxq3j",backgroundVideoDiv:"#wistia_kr5kajxq3j",embedVideo:function(){var i={};Wistia.obj.merge(i,{plugin:{cropFill:{src:"//fast.wistia.com/labs/crop-fill/plugin.js"}}}),wistiaEmbed=Wistia.embed(fullScreenVideo.backgroundVideo,i),wistiaEmbed.bind("play",function(){return wistiaEmbed.pause(),wistiaEmbed.time(0),$(fullScreenVideo.backgroundVideoDiv).css("visibility","visible"),wistiaEmbed.play(),this.unbind})},fixTextPosition:function(){var i=$(window).width(),e=$(window).height();textWidth=$("#text").width(),textHeight=$("#text").height(),$("#video_container").css("width",i).css("height",.65*e);var t=$("#video_container").height();$("#text").css("left",i/2-textWidth/2).css("top",t/2-textHeight/2)},fixVideoPosition:function(){}},$(document).ready(function(){fullScreenVideo.fixTextPosition(),fullScreenVideo.fixVideoPosition(),$("#text").delay(200).animate({opacity:1},650)}),$(window).resize(fullScreenVideo.fixTextPosition),fullScreenVideo.embedVideo();