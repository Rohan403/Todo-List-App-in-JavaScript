img_arr = [
    "https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4889055/pexels-photo-4889055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/7319296/pexels-photo-7319296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]
var count = document.querySelectorAll(".id1");
    var img_ref = document.querySelectorAll('.img1')
    var heart = document.querySelectorAll('.like');
    for(let i = 0; i < img_ref.length; i++){
        img_ref[i].addEventListener('dblclick',function(){
            heart[i].innerText="❤️";
            count[i].value = parseInt(count.value)+1;
        });
    }
    for(let i = 0; i < heart.length; i++){
        heart[i].addEventListener('click',function(){
            heart[i].innerText= "🤍";
        });
    }
    var like_btn = document.querySelector('.img1');
var counter = document.querySelector('.like_btns');
like_btn.addEventListener('dblclick',function(){
    totallikes++;
    if(totallikes >= 0){
        counter.value = totallikes + "Likes";
    }
   else{
    counter.value = String(totallikes +" Dislikes").slice(1);
   }
})
var dislike = document.querySelector('.like');
var totallikes = 0;
dislike.addEventListener('click', function(){
    if(totallikes <= 0){
        totallikes--;
       counter.value = String(totallikes +" Dislikes").slice(1);
    }
    else{
        totallikes--;
        counter.value = totallikes + "Likes" ;
    }
    console.log(parseInt(counter.value));
})
var change_img1 = document.getElementById("id1")
change_img1.src = img_arr[0]
var change_img2 = document.getElementById("id2")
change_img2.src = img_arr[1]
var change_img3 = document.getElementById("id3")
change_img3.src = img_arr[2]
var change_img = document.getElementById("id4")
change_img.src =  img_arr[3]
var change_img = document.getElementById("id5")
change_img.src =  img_arr[4]