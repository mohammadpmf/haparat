const SIZE = 5

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function next(n){
    var image = document.getElementById("image");
    var src = image.src
    var slash = src.lastIndexOf('/');
    var dot = src.lastIndexOf('.');
    var file_number = src.substring(slash+1, dot);
    if (n==1)
        file_number++;
    else
        file_number--;
    file_number = file_number%(SIZE+1)
    if (file_number==0 && n==1)
        file_number=1;
    else if(file_number==0)
        file_number=SIZE;
    for(var i=1; i>=0; i-=0.01){
        image.style.opacity=i
        await sleep(2);
    }
    image.src = `images/${file_number}.jpg`;
    for(var i=0; i<=1; i+=0.01){
        image.style.opacity=i
        await sleep(2);
    }
}
