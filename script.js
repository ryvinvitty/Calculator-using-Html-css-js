let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = string.replace(/%/g, '0.1');
            string = string.replace(/X/g, '*');
            string = eval(string);
            document.querySelector('.display').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('.display').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.display').value = string; 
        }
        
    })
})
