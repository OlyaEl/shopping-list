const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {
    const itemsText = sendInput.value;

    const newItem = document.createElement('div');
    newItem.classList.add('points');
    newItem.textContent = itemsText;
    newItem.addEventListener('click', function() {
        newItem.classList.toggle('done');
    })

    if (itemsText != '') {

        if (event.key == 'Enter') {
            itemsContainer.append(newItem);
            sendInput.value = '';
        }
    }
});
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */