let a = document.getElementsByClassName("section-btn-no");
let b = document.getElementsByClassName("section-btn-yes");
let dem = 0;
let dem1 = 0;
a[0].addEventListener("click", function () {
    if (dem === 0) {
        document.getElementById('1-gif').style.display = 'none';
        document.getElementById('4-gifs').style.display = 'block';
        document.getElementById('2-gifs').style.display = 'none' ;
        dem = 1;
    }
    else if (dem === 1) {
        document.getElementById('1-gif').style.display = 'block';
        document.getElementById('4-gifs').style.display = 'none';
        document.getElementById('2-gifs').style.display = 'none' ;
        dem = 0;
    }
});
b[0].addEventListener("click", function () {
    document.getElementById('2-gifs').style.display = 'block' ;
    document.getElementById('ok').style.display = 'block';
    document.getElementById('1-gif').style.display = 'none' ;
    document.getElementById('4-gifs').style.display = 'none';
});