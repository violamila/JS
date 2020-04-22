var container = document.getElementById('buttons');

function changeColor(){
    if(container.style.backgroundColor === 'red'){
       container.style.backgroundColor = 'green';
     }else{
        container.style.backgroundColor = 'red';
    }
}