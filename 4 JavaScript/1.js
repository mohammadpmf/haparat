function f(){
    var age_element = document.getElementById('age');
    var age = age_element.value
    console.log(age);
    if (age>18){
        console.log("your age is upper than 18");
    }
    else if (age>15){
        console.log("your age is between 15 and 18");
    }
    else{
        console.log("your age is lower than 15");
    }
}