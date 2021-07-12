//for navbar-order-button
function order(order){
    order.style.backgroundColor = "orangered";
    order.style.color = "white";
    order.style.transition = "1s ease-in";
}
function orderback(order){
    order.style.backgroundColor = "transparent";
    order.style.color= "black";
}

// for bar on s,sm,md
function bars(){
    let nav = document.querySelector(".navbar-s",".navbar-sm","navbar-md");
        nav.classList.toggle("mystyle");
}

// for menu
function speical(){
    let speical = document.querySelector(".img-speical");
    speical.style.display = "flex";
    let dinner = document.querySelector(".img-dinner");
    dinner.style.display = "none";
    let lunch = document.querySelector(".img-lunch");
    lunch.style.display = "none";
    let breakfast = document.querySelector(".img-breakfast");
    breakfast.style.display = "none";
}
function breakfast(){
    let breakfast = document.querySelector(".img-breakfast");
    breakfast.style.display = "flex";
    let speical = document.querySelector(".img-speical");
    speical.style.display = "none";
    let dinner = document.querySelector(".img-dinner");
    dinner.style.display = "none";
    let lunch = document.querySelector(".img-lunch");
    lunch.style.display = "none";
}
function lunch(){
    let lunch = document.querySelector(".img-lunch");
    lunch.style.display = "flex";
    let speical = document.querySelector(".img-speical");
    speical.style.display = "none";
    let dinner = document.querySelector(".img-dinner");
    dinner.style.display = "none";
    let breakfast = document.querySelector(".img-breakfast");
    breakfast.style.display = "none";
}
function dinner(){
    let dinner = document.querySelector(".img-dinner");
    dinner.style.display = "flex";
    let speical = document.querySelector(".img-speical");
    speical.style.display = "none";
    let lunch = document.querySelector(".img-lunch");
    lunch.style.display = "none";
    let breakfast = document.querySelector(".img-breakfast");
    breakfast.style.display = "none";
}

// for booking table
function book(){
    let book = document.getElementById("book");
    let person = document.getElementById("person").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    alert(`No Of Person Are ${person}, Date Is ${date} and Timing Is ${time}, Thank You For Booking!`)
}

