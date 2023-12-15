let btns= document.getElementsByClassName("btn1");
// console.dir(btn);

function liked(){
    alert("clicked");
}
function hover(){
    console.log("You enterred a button!");
}

for(btn of btns){
    btn.onclick= liked;
    btn.onmouseenter= hover;
}

btn.addEventListener("click", function(){
    alert("clicked 2");
});

let box= document.getElementsByClassName("box");

let colbtn= document.getElementsByClassName("colbtn");
let h2= document.querySelector("h2");

for(bt of colbtn){
    bt.addEventListener("click", function(){
        let x= Math.floor(Math.random()*255);
        let y= Math.floor(Math.random()*255);
        let z= Math.floor(Math.random()*255);

        let color= `rgb(${x}, ${y}, ${z})`;

        h2.innerText= color;
        box[0].style.backgroundColor= color;
        // console.log("yes");
    });
}
// bt.addEventListener("click", function(){
//     let x= Math.floor(Math.random()*256);
//     let y= Math.floor(Math.random()*256);
//     let z= Math.floor(Math.random()*256);
//     h1.innerText= "rgb(`${x}`, `${y}`, `${z}`)";
//     console.log("yes");
// });



// let x= Math.floor(Math.random()*256);
// let y= Math.floor(Math.random()*256);
// let z= Math.floor(Math.random()*256);


