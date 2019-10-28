let a = document.getElementById("input-text");
    a.addEventListener("keyup",function(event){
      let b = document.getElementById("input-text").value;
      let result = keywords.find(function(val){
          // tim thang nao co content ma chua b
          let searchResult = val.content.find(function(v) {
            if (v.indexOf(b.toLowerCase()) >= 0) {
                return true;
            } else {
                return false;
            }
          })
         if (searchResult) {
             return true;
         } else {
             return false;
         }
      })
      if(event.keyCode === 13){
      if (result) {
          window.location.href = result.link[Math.floor(Math.random() * 10)];
      } else {
          window.location.href = 'resouce/html-random-789/random-10%20-nhac.html'
      }
    }
 })
