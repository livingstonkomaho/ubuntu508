jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        titleinbarwidthmode:"fixed",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        showtime:true,
        titleinbarwidth:80,
        showprogress:false,
        random:false,
        titleformat:"%TITLE%",
        height:300,
        loadingformat:"Loading...",
        prevnextimage:"prevnext-48-48-1.png",
        showinfo:true,
        imageheight:180,
        skin:"LightBox",
        loopimage:"loop-24-24-2.png",
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:48,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        stopotherplayers:true,
        showloading:true,
        forcefirefoxflash:false,
        showvolumebar:true,
        imagefullwidth:true,
        width:300,
        showtitleinbar:false,
        showloop:true,
        volumeimage:"volume-24-24-2.png",
        playpauseimagewidth:48,
        loopimageheight:24,
        tracklistitem:20,
        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",
        prevnextimagewidth:48,
        tracklistarrowimage:"tracklistarrow-48-16-1.png",
        forceflash:false,
        playpauseimageheight:48,
        showbackgroundimage:false,
        imagewidth:300,
        stopimage:"stop-48-48-0.png",
        playpauseimage:"playpause-48-48-1.png",
        forcehtml5:true,
        showprevnext:true,
        backgroundimage:"",
        autoplay:false,
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        titleinbarscroll:true,
        showtitle:true,
        defaultvolume:100,
        tracklistarrowimageheight:16,
        heightmode:"fixed",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:48,
        volumeimageheight:24,
        stopimagewidth:48,
        volumebarheight:80,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showbarbackgroundimage:false,
        showimage:true,
        tracklistarrowimagewidth:48,
        timeformat:"%CURRENT% / %DURATION%",
        showvolume:true,
        fullwidth:true,
        loop:1,
        preloadaudio:true
    });
});