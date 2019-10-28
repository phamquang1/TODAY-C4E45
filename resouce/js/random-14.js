let clickBtn = document.getElementById("section-btn");
clickBtn.addEventListener("click",function(){
    window.location.href = keywords[0].link1[Math.floor(Math.random() * 10)]
})