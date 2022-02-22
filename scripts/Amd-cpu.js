powerUnitsAmdCpu.length
console.log(powerUnitsAmdCpu.length)

const selectAmdCpu = document.createElement('select');

for (let i = 0; i < powerUnitsAmdCpu.length; i++) {
    const powerUnitAmdCpu = powerUnitsAmdCpu[i];

    const optionAmdCpu = document.createElement('option');
    optionAmdCpu.value = powerUnitAmdCpu.power;
    optionAmdCpu.innerText = powerUnitAmdCpu.name;

    selectAmdCpu.appendChild(optionAmdCpu);
}

document.body.appendChild(selectAmdCpu);