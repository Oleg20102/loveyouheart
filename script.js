const home = document.getElementById("home");
const heartPage = document.getElementById("heartPage");
const btn = document.getElementById("openBtn");
const container = document.querySelector(".heart-text");

btn.onclick = () => {
    home.classList.remove("active");
    heartPage.classList.add("active");

    createHeart();
};

function createHeart(){

    const points = [];

    for(let t = 0; t < Math.PI * 2; t += 0.09){

        const x = 16 * Math.pow(Math.sin(t),3);
        const y = -(13*Math.cos(t) - 5*Math.cos(2*t)
                - 2*Math.cos(3*t)
                - Math.cos(4*t));

        points.push({
            x: x * 12 + 160,
            y: y * 12 + 160
        });
    }

    points.forEach((point,index)=>{

        const span = document.createElement("span");

        span.className = "word";
        span.innerText = "I LOVE YOU";

        span.style.left = point.x + "px";
        span.style.top = point.y + "px";

        span.style.animationDelay = index * 0.03 + "s";

        container.appendChild(span);
    });
}