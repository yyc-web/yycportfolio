// particlesJS("particles-js", {
//     "particles":{
//     "number":{
//     "value":50,
//         "density":{
//             "enable":true,
//             "value_area":300}},
//     "color":{
//         "value":"#ffffff"},
//     "shape":{
//         "type":"circle",
//         "stroke":{"width":0,"color":"#000000"},
//         "polygon":{"nb_sides":5},
//         "image":{"src":"img/github.svg",
//         "width":100,"height":100
//     }
//     },
//     "opacity":{
//     "value":0.5,
//     "random":false,
//     "anim":{
//     "enable":false,
//     "speed":1,
//     "opacity_min":0.1,
//     "sync":false}},
//     "size":{
//     "value":3,
//     "random":true,
//     "anim":{
//     "enable":false,
//     "speed":40,
//     "size_min":0.1,
//     "sync":false}},
//     "line_linked":{
//     "enable":false,
//     "distance":150,
//     "color":"#ffffff",
//     "opacity":0.4,
//     "width":1},
//     "move":{
//     "enable":true,
//     "speed":0.2,
//     "direction":"none",
//     "random":true,
//     "straight":false,
//     "out_mode":"out",
//     "bounce":false,
//     "attract":{
//     "enable":false,
//     "rotateX":600,
//     "rotateY":1200}}},
//     "interactivity":{
//     "detect_on":"canvas",
//     "events":{
//     "onhover":{
//     "enable":true,
//     "mode":"bubble"},
//     "onclick":{
//     "enable":true,
//     "mode":"push"},
//     "resize":true},
//     "modes":{
//     "grab":{
//     "distance":400,
//     "line_linked":{
//     "opacity":1}},
//     "bubble":{
//     "distance":73,
//     "size":1,
//     "duration":3,
//     "opacity":1,
//     "speed":3},
//     "repulse":{
//     "distance":200,"duration":0.4},
//     "push":{
//     "particles_nb":4},"remove":{
//     "particles_nb":2}}},
//     "retina_detect":true});
    
// ........................end of particles.........................//

//.......................... scroll ..............................//

$("body").scroll(function(){

    if($(this).scrollTop() >= 200){
        
        $(".arrow").hide();

    }
    else{

        $(".arrow").show();

    }
}
);

//..............................scroll end......................//

//------------------------------ cursor -----------------------------//

// const $bigBall=document.querySelector(".cursor__ball--big");
// const $smallBall=document.querySelector(".cursor__ball--small");

// document.body.addEventListener("mousemove", onMouseMove);
// for (let i = 0; i < $hoverables.length; i++){

//     $hoverables[i].addEventListener("mouseenter", onMouseHover);
//     $hoverables[i].addEventListener("mouseleave", onMouseMove);
// }

// function onMouseMove(e){
//     TweenMax.to($bigBall, .4, {
//         x: e.pageX - 15,
//         x: e.pageY - 15
//     })

//     TweenMax.to($smallBall, .1, {
//         x: e.pageX - 5,
//         x: e.pageY - 7
//     })

// }

// function onMouseHover(){
//     TweenMax.to($bigBall, .3, {
//         scale: 4
//     })
// }

// function onMouseHoverOut(){
//     TweenMax.to($bigball, .3, {
//         scale: 1
//     })
// }

//--------------------------- cursor end -----------------------------//

