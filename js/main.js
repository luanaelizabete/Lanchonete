const qtyElements = document.querySelectorAll('.qty');
qtyElements.forEach(qtyElement => {
    const minusButton = qtyElement.querySelector('.minus');
    const plusButton = qtyElement.querySelector('.plus');
    const countInput = qtyElement.querySelector('.count');

    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(countInput.value);
        if (currentValue > 0) {
            countInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(countInput.value);
        countInput.value = currentValue + 1;
    });
});