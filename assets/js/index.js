const sidebar = document.getElementById('sidebar');
const sideToggleButton = document.getElementById('toggle-button');

sideToggleButton.addEventListener('click', ()=>{
    sidebar.classList.toggle('sidebar-collapse')
    // toggleButton.classList.add('toggle-button-collapse')
})

sidebar.addEventListener('transitionstart', ()=>{
    if(sidebar.classList.contains('sidebar-collapse')){
        sideToggleButton.classList.add('toggle-button-collapse')
        sideToggleButton.innerText = '>'
    }
    else{
        sideToggleButton.classList.remove('toggle-button-collapse')
        sideToggleButton.innerText = '<'
    }
})


