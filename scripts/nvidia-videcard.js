NVDA.length
console.log(NVDA.length)

const selectNVDAVID = document.createElement('select');

for (let i = 0; i < NVDA.length; i++) {
    const powerUnitIntelCpu = NVDA[i];

    const optionNVDAVID= document.createElement('option');
    optionNVDAVID.value = powerUnitIntelCpu.power;
    optionNVDAVID.innerText = powerUnitIntelCpu.name;

    selectNVDAVID.appendChild(optionNVDAVID);
}

document.body.appendChild(selectNVDAVID);