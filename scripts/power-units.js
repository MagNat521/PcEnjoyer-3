powerUnits.length // 2


const select = document.createElement('select');

for (let i = 0; i < powerUnits.length; i++) {
    const powerUnit = powerUnits[i];

    const option = document.createElement('option');
    option.value = powerUnit.power;
    option.innerText = powerUnit.name;

    select.appendChild(option);
}

document.body.appendChild(select);