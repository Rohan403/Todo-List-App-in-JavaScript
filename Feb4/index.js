var form = document.querySelector(".form");
var counrty_Name=document.getElementById("Country_name")


form.addEventListener("submit", submitForm);
function submitForm(geek) {
    geek.preventDefault();
    searchImg(counrty_Name)
}

function showImg(){
    
    const key="GaAp2xxMNBNKafu_qypv1AgQeNEMioK9P8d_SXLAtxo"
    var url =`https://api.unsplash.com/photos/?client_id=${key}&per_page=30`
    fetch(url).then((some)=>some.json())
    .then((data)=>{
    console.log(data)
    for (var i=0;i<data.length;i=i+1){
        var div =document.getElementById("container")
        var img=document.createElement("img");
        img.src=(data[i].urls.small);
        
        div.appendChild(img)
    }
}).catch((err)=>alert(err))
}
function searchImg(elment){
    var counrty_name=elment.value;
    console.log(counrty_name)
    const key="GaAp2xxMNBNKafu_qypv1AgQeNEMioK9P8d_SXLAtxo"
    var url=`https://api.unsplash.com/search/photos/?query=${counrty_name}&client_id=${key}&per_page=9`
    fetch(url).then((some)=>some.json())
    .then((data)=>{
    console.log(data)
    for (var i=0;i<data.results.length;i=i+1){
        var div =document.getElementById("container")
        var img=document.createElement("img");
        img.src=(data.results[i].urls.small)
        img.addEventListener('click', imageClicked)
        div.appendChild(img)
    }
}).catch((err)=>alert(err))
}
function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    
    var img_r = img_prev_r.children[0];

    img_r.src = event.target.src;
    var removeg =document.getElementById('remove');
removeg.addEventListener("click", function(){
    img_prev_r.classList.add("d-none")
})
}