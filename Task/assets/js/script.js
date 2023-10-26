function handleOnInput (value,id) {
    const span = document.getElementById(id);
    if(value.trim()){
        span.textContent = value
        span.style.display = 'block'
    }else{
        span.style.display = 'none'
    }
}