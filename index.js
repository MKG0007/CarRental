
let button = document.querySelector("#mode");
let cond = button.innerText;
let nav = document.querySelectorAll(".nav-link");
button.addEventListener("click" , () =>{
    if(cond == "Light"){

        button.innerText = "Dark";
        cond = button.innerText;
        button.style.color = "white";
        button.style.backgroundColor = "black";
        document.querySelector(".container-fluid").style.backgroundColor = "black";

        document.querySelector(".container-fluid").style.color = "white";
        nav.forEach(element => {
            element.style.color = "white";
        });
        document.querySelector(".btn").style.color = "white";
        document.querySelector(".me-2").style.backgroundColor = "black";
        document.querySelector(".me-2").style.color = "white";
        document.body.style.backgroundColor = "black";
        document.querySelector("#carouselExampleAutoplaying").style.opacity = "0.5";
        document.querySelector(".webtext").style.opacity = "0.5";
        document.querySelector("#aboutPara").style.color = "white";
        document.querySelector("section").style.color = "white";

        document.querySelector("#imm").style.opacity = "0.5";

        document.querySelector("#hhh").style.color = "black";



        

    }
    else{
        button.innerText = "Light";
        cond = button.innerText;
        button.style.color = "black";
        button.style.backgroundColor = "white";
        document.querySelector(".container-fluid").style.backgroundColor = "white";

        document.querySelector(".container-fluid").style.color = "black";
        nav.forEach(element => {
            element.style.color = "black";
        });
        document.querySelector(".btn").style.color = "black";
        document.querySelector(".me-2").style.backgroundColor = "white";
        document.querySelector(".me-2").style.color = "black";
        document.body.style.backgroundColor = "rgb(213, 213, 213)";
        document.querySelector("#carouselExampleAutoplaying").style.opacity = "1";
        document.querySelector(".webtext").style.opacity = "1";
        document.querySelector("#aboutPara").style.color = "black";
        document.querySelector("section").style.color = "black";

        document.querySelector("#imm").style.opacity = "1";

        document.querySelector("#hhh").style.color = "rgb(92, 92, 92)";





    }
});