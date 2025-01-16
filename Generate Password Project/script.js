let passId = document.getElementById("inPass")
const btn = document.querySelector("#btn")

const resetBtn = document.querySelector("#reset-btn");

function genRandompass(length){
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    for(let i = 0 ;i < length;++i){
        let idx = Math.floor(Math.random() * character.length);
        password += character[idx];
    }
    return password;
}

btn.addEventListener('click',()=>{
    let Pass = genRandompass(5);
    passId.value = Pass;
})

resetBtn.addEventListener('click',()=>{
    passId.value = '';
})



//Practice

// let input = document.querySelector("#inPass")
// let btn = document.querySelector("#btn")

// btn.addEventListener('click',()=>{
//     let pass = getPassword(6);
//     input.value = pass;
// })

// function getPassword(length){
//     let number = '1234567890'
//     let password = '';
//     for(let i = 0;i < length;++i){
//         let idx = Math.floor(Math.random() * number.length)
//         password += number[idx];
//     }
//     return password;
// }

// let resetBtn = document.querySelector("#reset-btn")

// resetBtn.addEventListener('click',()=>{
//     input.value = ''
// })
