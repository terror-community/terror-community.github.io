if (localStorage.getItem("pendaftaran") !== null) {
    if (localStorage.getItem("pendaftaran") == "true") {
        document.getElementById("#join").classList = "bg-[#a7c957] hover:bg-[#6a994e] px-8 py-3 rounded-full font-semibold transition-all text-white hover:shadow-[#6a994e] shadow-[#a7c957] shadow-[0_0_20px]"
        document.getElementById("#join").innerHTML = /* html */`<i class="fa-solid fa-door-open"></i> Pendaftaran Dibuka`
    }
}



import navLoc from "./navbar.js";
navLoc()

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
});
document.getElementById("#join").onclick = () => { 
    smoother.scrollTo("#panduan", true)
}


const type = async () => {
    const res = await fetch('https://script.google.com/macros/s/AKfycbzhAXzYUq5xlW-gfy0K8AytZRFPvK5u8zQuyDHwkLEeKdssZNrTbaVk9Rqi2U0oYkh3/exec')
    const datas = await res.json();
    return datas.content[0];
}
var pendaftaran = await type();
localStorage.setItem("pendaftaran", pendaftaran.value)
if (localStorage.getItem("pendaftaran") !== null) {
    if (localStorage.getItem("pendaftaran") == "true") {
        document.getElementById("#join").classList = "bg-[#a7c957] hover:bg-[#6a994e] px-8 py-3 rounded-full font-semibold transition-all text-white hover:shadow-[#6a994e] shadow-[#a7c957] shadow-[0_0_20px]"
        document.getElementById("#join").innerHTML = /* html */`<i class="fa-solid fa-door-open"></i> Pendaftaran Dibuka`
    }
}
