// let res = Array.from(document.getElementsByClassName('ress'));
// let disp = document.getElementById('disp');
// res.map( num => {
//     num.addEventListener('click', (n) => {
//         switch(n.target.innerText)
//         {

//             case '←':
//                 if(disp.innerText)
//                     disp.innerText= disp.innerText.slice(0, -1);
//                 break; 

//             case 'C':
//                 disp.innerText = '';
//                 break;

           
//             case '=': 
//                  try
//                  {
//                     disp.innerText= eval(disp.innerText);
//                   } 
//                 catch
//                 {
//                     disp.innerText= 'Error!';
//                 }                
//                  break;
            
//             default :
//                 disp.innerText += n.target.innerText;
            
//         }
//     });
// });


let disp=document.getElementById("disp");
function display(num)
{
    disp.value+=num;
}
function Calculate()
{
    try{
        disp.value=eval(disp.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}
function Clear()
{
    disp.value="";
}
function del()
{
    disp.value=disp.value.slice(0,-1);
}