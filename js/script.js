$(function(){
    Time.install();
});

Time = {
    install:function(){
        this.setSeconds();
        this.setMinutes();
        this.setHours();
    },
    setSeconds:function(){
        setInterval(function(){
            var seconds = new Date().getSeconds();
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            $('.second').css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
        },1000);
    },
    setMinutes:function(){
        setInterval(function(){
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            $('.minute').css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
        },1000);
    },
    setHours:function(){
        setInterval(function(){
            var hours = new Date().getHours();
            var mins = new Date().getMinutes();
            var hdegree = hours * 30 + (mins / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            $('.hour').css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
        },1000);
    }
}