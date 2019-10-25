async function pet(){
    const newRes = await fetch ("https://dog.ceo/api/breeds/image/random");
    const newPro = await newRes.json();
    console.log(newPro);
    document.getElementById("section").innerHTML += `
        <div >
            <img class="section-img" src="${newPro.message}">
        </div>
    `;
}
pet();