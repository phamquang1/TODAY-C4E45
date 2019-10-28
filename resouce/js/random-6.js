let clickBtn = document.getElementById("section-btn");
clickBtn.addEventListener("click",function(){
    window.location.href = keywords[0].link2[Math.floor(Math.random() * 10)]
})