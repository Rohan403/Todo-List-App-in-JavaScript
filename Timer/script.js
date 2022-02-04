let counter = 100;
let counter_id = setInterval(function(){
    counter = counter - 1;
    document.getElementById("seconds").innerText = counter;
},1000);
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(counter_id);
});
document.getElementById("resume").addEventListener("click",function(){
    counter_id = setInterval(function(){
        counter = counter + 1;
        document.getElementById("seconds").innerText = counter;
    },1000);
});