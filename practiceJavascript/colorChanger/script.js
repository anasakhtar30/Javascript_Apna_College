const button = document.getElementById("changeColor")

button.addEventListener('click',function(){
    const random = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = random;
});