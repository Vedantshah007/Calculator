let string = "";
let buttons = document.querySelectorAll('.button');
let s = "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            s=eval(s);
            string=s;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            s="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='+/-'){
            let r = Number(string);
            r=r*(-1);
            string = r.toString();
            s=string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='%'){
            string = string+'%';
            document.querySelector('input').value=string;
            s=s+'/100*'
        }
        else if(e.target.innerHTML=='Clr'){
            let y = string.replace('Clr','')
            let u = "";
            for(let i=0;i<y.length-1;i++){
                u=u+y[i];
            }
            string = u;
            s=u;
            document.querySelector('input').value=string;
        }
        else{
        string = string + e.target.innerHTML;
        s = s + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})