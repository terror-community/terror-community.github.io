if (localStorage.getItem("pendaftaran") !== null) {
    if (localStorage.getItem("pendaftaran") == "true") {
        document.getElementById("#join").classList = "bg-[#a7c957] hover:bg-[#6a994e] px-8 py-3 rounded-full font-semibold transition-all text-white hover:shadow-[#6a994e] shadow-[#a7c957] shadow-[0_0_20px]"
        document.getElementById("#join").innerHTML = /* html */`<i class="fa-solid fa-door-open text-xl"></i> Pendaftaran Dibuka`
    }
}


  document.addEventListener('click', e => {
    if(document.getElementById('supportModalDialog').classList.contains('shown')) {
      if (!document.getElementById('supportModalDialog').classList.contains('hidden')) {
        if (!document.getElementById('SupportModal').contains(e.target)){
          setTimeout(function() {
            document.getElementById('supportModalDialog').classList.add('hidden')
            document.getElementById('supportModalDialog').classList.remove('shown')
          }, 100);
          document.getElementById('SupportModal').classList.add('translate-y-[7rem]')
          document.getElementById('SupportModal').classList.remove('translate-y-[10rem]')
          document.getElementById('supportModalDialog').classList.remove('bg-black/25')
        }
      }
    }
  });



  document.getElementById('SupportmodalClose').addEventListener('click', () => {
    if (!document.getElementById('supportModalDialog').classList.contains('hidden')) {
      setTimeout(function() {
        document.getElementById('supportModalDialog').classList.add('hidden')
        document.getElementById('supportModalDialog').classList.remove('shown')
      }, 100);
      document.getElementById('SupportModal').classList.add('translate-y-[7rem]')
      document.getElementById('SupportModal').classList.remove('translate-y-[10rem]')
      document.getElementById('supportModalDialog').classList.remove('bg-black/25')
    }
  });
  
  document.getElementById('support').addEventListener('click', () => {
    if (document.getElementById('supportModalDialog').classList.contains('hidden')) {
      setTimeout(function() {
        document.getElementById('SupportModal').classList.remove('translate-y-[7rem]')
        document.getElementById('SupportModal').classList.add('translate-y-[10rem]')
      }, 0);
      document.getElementById('supportModalDialog').classList.remove('hidden')
      setTimeout(function() {
        document.getElementById('supportModalDialog').classList.add('shown')
        document.getElementById('supportModalDialog').classList.add('bg-black/25')
      }, 10);
    }
  });


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
        document.getElementById("#join").innerHTML = /* html */`<i class="fa-solid fa-door-open text-xl"></i> Pendaftaran Dibuka`
    }
}
