var flash_lights = document.getElementsByClassName("flash_ligth")
var flash_light = document.getElementById("flash_ligth")

function move(event){
    let x = event.clientX-64;
    let y = event.clientY-64;
    flash_light.style.left = x+"px";
    flash_light.style.top = y+"px";
    // console.log(x, y)
}

var lastScrollTop = 0;
element = document.getElementsByTagName("body")[0]
element.addEventListener("wheel", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   styles = window.getComputedStyle(flash_light);
   if (st > lastScrollTop) {
        var numericValue = parseFloat(styles.width) - 20
    } else if (st < lastScrollTop) {
        var numericValue = parseFloat(styles.width) + 20
    }
    var newValue = numericValue + "px";
    flash_light.style.width = newValue;
    flash_light.style.height = newValue;
   lastScrollTop = st <= 0 ? 0 : st;
}, false);

function scroll(event){
    console.log(event);
}