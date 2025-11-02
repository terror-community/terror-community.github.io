
import navLoc from "../script/navbar.js";
navLoc()

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

window.addEventListener("load", function() {
  document.getElementById('beforeload').classList.add('hidden')
});


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
