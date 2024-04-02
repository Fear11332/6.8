document.querySelector('body>a[href="#"]').addEventListener('click',
event=>{
    event.preventDefault();
    document.querySelector('a[href]').textContent = prompt("введите новый текст для элемента ссылки");
})
