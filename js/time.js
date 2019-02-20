window.onload = function(){
    (function(){
        let date = new Date();
        let time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        document.querySelector(".get-time").textContent = time;
        window.setTimeout(arguments.callee, 1000);
    })();
};
