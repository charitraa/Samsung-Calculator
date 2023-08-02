let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');

let num = '';
let arr = Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener('click', (str)=>{
        if(str.target.innerHTML==='='){
            num = eval(num);
            input.value = num;
        }
        else if(str.target.innerHTML==='C'){
            num="";
            input.value = num;

        }
        else if(str.target.innerHTML==='DEL'){
            num = num.substring(0,num.length-1);
            input.value = num
        }
        else if(str.target.innerHTML==='+/-'){
            num = '-' + num;
            input.value = num;
        }
        else if(str.target.innerHTML==='%'){
            num=num/100;
            input.value = num
        }
        else{
            num+=str.target.innerHTML;
            input.value = num;}

        
    }) 
})
