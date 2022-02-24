function renderSelect (container, data) {
    const select = document.createElement('select');

    select.classList.add("calc-form-select");

    for (let i = 0; i < data.length; i++) {
        const powerUnit = data[i];

        const option = document.createElement('option');
        option.value = powerUnit.power;
        option.innerText = powerUnit.name;

        select.appendChild(option);
    }

    container.appendChild(select);

    return select;
}