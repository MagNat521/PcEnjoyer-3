powerUnitsIntelCpu.length
console.log(powerUnitsIntelCpu.length)

const selectIntelCpu = document.createElement('select');

for (let i = 0; i < powerUnitsIntelCpu.length; i++) {
    const powerUnitIntelCpu = powerUnitsIntelCpu[i];

    const optionIntelCpu = document.createElement('option');
    optionIntelCpu.value = powerUnitIntelCpu.power;
    optionIntelCpu.innerText = powerUnitIntelCpu.name;

    selectIntelCpu.appendChild(optionIntelCpu);
}

document.body.appendChild(selectIntelCpu);