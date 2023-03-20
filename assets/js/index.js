const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', ()=>{
    sidebar.classList.toggle('sidebar-collapse')
    // toggleButton.classList.add('toggle-button-collapse')
})

sidebar.addEventListener('transitionstart', ()=>{
    if(sidebar.classList.contains('sidebar-collapse')){
        toggleButton.classList.add('toggle-button-collapse')
        toggleButton.innerText = '>'
    }
    else{
        toggleButton.classList.remove('toggle-button-collapse')
        toggleButton.innerText = '<'
    }
})


