function calculate() {
    // let, const
    
    
    const vid = +document.f.a.value,
        moth = +document.f.b.value,
        coolers = +document.f.c.value,
        opMemory = +document.f.d.value,
        cpu = +document.f.e.value;
    s0 = vid + moth + coolers + opMemory + cpu;
    s1 = s0 * 1.15;
    otv = Math.round(s1);
    document.f.r.value = otv;
}