// carousel slide-home pg
let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 3000);
//

//cartoon pg-random selector

let c=[
    {
        nm:"TOM AND JERRY",
        img:"img/jerry.jpg",
        fact:"They fight non-stop but secretly can't live without each other"
    },
    {
        nm:"BEN 10",
        img:"img/ben10.jpg",
        fact:"Has a watch that can turn him into 10+ aliens.... literally every kid's dream"
    },
    {
        nm:"SPIDERMAN",
        img:"img/spidey.jpg",
        fact:"A normal student until a spider bite turned him into a superhero overnight"
    },
     {
        nm:"KING JULIEN",
        img:"img/julien.jpg",
        fact:"Loves to party more than actually ruling anything"
    },
     {
        nm:"JACKIE CHAN",
        img:"img/jackie.jpg",
        fact:"Protects magical talismans while pulling off insane kung fu moves"
    }
];

function showcartoon(){
    let r=c[Math.floor(Math.random()*c.length)];

    document.getElementById("cartoon-img").src=r.img;
    document.getElementById("cartoon-name").innerText=r.nm;
    document.getElementById("fact").innerText=r.fact;

}
//

//memes-using api
async function getmeme() {
    try {
        let response = await fetch("https://meme-api.com/gimme");
        let data = await response.json();

        console.log(data);

        let img = document.getElementById("memeImg");
        let title = document.getElementById("memeTitle");

        img.src = data.url;
        title.innerText = data.title;

    } catch (err) {
        console.log("Error:", err);
    }
}

//
document.querySelector('.card-1').addEventListener('click',()=>{
    window.location.href="cartoon.html";

});
document.querySelector('.card-2').addEventListener('click',()=>{
    window.location.href="music.html";

})
document.querySelector('.card-3').addEventListener('click',()=>{
    window.location.href="meme.html";

})
