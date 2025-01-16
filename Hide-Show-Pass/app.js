let password = document.querySelector("#password")
let eyeicon = document.querySelector("#eyeicon")

eyeicon.addEventListener('click', ()=>{
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "images/eye-open.png"
    }else{
        eyeicon.src = "images/eye-close.png"
        password.type = "password";
    }
})

// eyeicon.onclick = function(){
//     if(password.type == "password"){
//         password.type = "text";
//         eyeicon.src = "images/eye-open.png"
//     }else{
//         eyeicon.src = "images/eye-close.png"
//         password.type = "password";
//     }
// }