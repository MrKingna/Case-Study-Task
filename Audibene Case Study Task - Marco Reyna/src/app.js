function dateFormat() {
    var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];       
    
    var twoDaysBehind = new Date();
    
    twoDaysBehind.setTime(twoDaysBehind.getTime() + (1000*3600*-48));

    if (window.innerWidth > 600) {
        document.getElementById("date").innerHTML = 
        twoDaysBehind.getDate() + " " + months[twoDaysBehind.getMonth()]+ ", " + twoDaysBehind.getFullYear();
    } else {
        document.getElementById("date").innerHTML = 
        twoDaysBehind.getDate() + "/" + (twoDaysBehind.getMonth() + 1) + "/" + twoDaysBehind.getFullYear();
    }   
}

window.addEventListener("resize", dateFormat);

dateFormat();