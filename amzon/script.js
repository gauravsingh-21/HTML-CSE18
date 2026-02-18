let count = 0;

function addToCart(){
    count++;
    localStorage.setItem("cartCount",count);
    document.getElementById("cartCount").innerText = count;
}

window.onload = function(){
    let saved = localStorage.getItem("cartCount");
    if(saved){
        count = saved;
        document.getElementById("cartCount").innerText = count;
    }
}
