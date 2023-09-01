
function move(){
    
    let button = document.getElementById("trollbutton");
    let rand_x = Math.round(Math.random() * 100) ;
    let rand_y = Math.round(Math.random() * 100) ;
    button.style.left = rand_x + 'px';
    button.style.top = rand_y + 'px' ;
    
    let addto = document.getElementById;
    let text = document.createElement("h1");
    text.innerHTML = "ENTER THE NUMBER!!";
    document.body.insertAdjacentElement('beforeend',addto);
}
