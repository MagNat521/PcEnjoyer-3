const calcForm = document.querySelector("#calcForm");
const calcFormSelects = document.querySelector(".calc-form-selects");
const finalPower = document.querySelector("#finalPower");

const intelCpuSelect = renderSelect(calcFormSelects, powerUnitsIntelCpu);
const amdCpuSelect = renderSelect(calcFormSelects, powerUnitsAmdCpu);
const nvdaCpuSelect = renderSelect(calcFormSelects, NVDA);
const amdvdlCpuSelect = renderSelect(calcFormSelects, AmdVd);
const coolingVentsSelect = renderSelect(calcFormSelects, coolingVents);
const pompsSelect = renderSelect(calcFormSelects, pomps);

intelCpuSelect.setAttribute('name', 'intel-cpu');
amdCpuSelect.setAttribute('name', 'amd-cpu');
nvdaCpuSelect.setAttribute('name', 'nvda-vid');
amdvdlCpuSelect.setAttribute('name', 'amd-vid');
coolingVentsSelect.setAttribute('name', 'cooling-vents');
pompsSelect.setAttribute('name', 'pomps');


const renderFinalPower = (power) => {
    finalPower.innerHTML = power;
}

calcForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(calcForm);

    const intelCpuValue = formData.get('intel-cpu');
    const amdCpuValue = formData.get('amd-cpu');
    const nvdaVidValue = formData.get('nvda-vid');
    const amdVidValue = formData.get('amd-vid');
    const coolingVentsValue = formData.get('cooling-vents');
    const pompsValue = formData.get('pomps');

    //const finalPower = getFinalPower(intelCpuValue, amdCpuValue, nvdaVidValue, amdVidValue);
    const finalPower = Math.round((Number(intelCpuValue) + Number(amdCpuValue) + Number(nvdaVidValue) + Number(amdVidValue) + Number(coolingVentsValue) + Number(pompsValue)+ 30 + 5 + 5 + 6) * 1.15)

    renderFinalPower(finalPower);
})
