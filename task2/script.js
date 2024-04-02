document.querySelector("#consoleLog").addEventListener('click',
(event)=>{
    alert("метод для вывода сообщения в консоль");
}
)

document.querySelector("#alert").addEventListener('click',
(event)=>{
    alert("метод вывода информации в диалоговом окне с кнопкой ОК");
}
)

document.querySelector("#prompt").addEventListener('click',
(event)=>{
    alert("метод для ввода пользователя в диалоговом окне с двумя кнопками:'OK' и 'Отмена'");
}
)