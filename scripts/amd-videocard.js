AmdVd.length
console.log(AmdVd.length)

const selectAmdVd = document.createElement('select');

for (let i = 0; i < AmdVd.length; i++) {
    const powerUnitIntelCpu = AmdVd[i];

    const optionAmdVd= document.createElement('option');
    optionAmdVd.value = powerUnitIntelCpu.power;
    optionAmdVd.innerText = powerUnitIntelCpu.name;

    selectAmdVd.appendChild(optionAmdVd);
}

document.body.appendChild(selectAmdVd);