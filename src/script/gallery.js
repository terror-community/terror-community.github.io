import navLoc from "./navbar.js";
navLoc()

// var title = document.getElementById("Ttitle")
// var t2 = title.innerHTML.split("")

// title.innerHTML = ""
// t2.forEach(e => {
//     title.innerHTML += /* html */`<span>${e}</span>`
// });


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


    document.getElementById("gallery-terrorlegend").innerHTML = localStorage.getItem("gallery-terrorlegend")
    document.getElementById("gallery-terrorarc").innerHTML = localStorage.getItem("gallery-terrorarc")
    document.getElementById("gallery-terrorhardcore").innerHTML = localStorage.getItem("gallery-terrorhardcore")
    document.getElementById("gallery-terrorforsaken").innerHTML = localStorage.getItem("gallery-terrorforsaken")


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
});



const content = async () => {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyv-4AhEN9TkrFOL6GDezBnX1_7F3F60Z5cGIMTe2p2CHsl0CzAaF4Afdtje-lZ_Z-A/exec')
    const datas = await res.json();
    return datas;
}
var gallery = await content()

if (localStorage.getItem("gallery-terrorlegend") == undefined) {


    gallery.terrorlegends.forEach(e => {
        document.getElementById("gallery-terrorlegend").innerHTML += /* html */`
            <img src="${e.url}" alt="" referrerpolicy="no-referrer" >
        `
    });
    localStorage.setItem("gallery-terrorlegend", document.getElementById("gallery-terrorlegend").innerHTML)
    

} else {

    document.getElementById("gallery-terrorlegend").innerHTML = localStorage.getItem("gallery-terrorlegend")


    var _cache = ""

    gallery.terrorlegends.forEach(e => {
        _cache += /* html */` <img src="${e.url}" alt="" referrerpolicy="no-referrer" >`
    });

    if (localStorage.getItem("gallery-terrorlegend") !== _cache) {
        document.getElementById("gallery-terrorlegend").innerHTML = _cache
        localStorage.setItem("gallery-terrorlegend", document.getElementById("gallery-terrorlegend").innerHTML)
    }

}

if (localStorage.getItem("gallery-terrorarc") == undefined) {

    var gallery = await content()

    gallery.terrorarc.forEach(e => {
        document.getElementById("gallery-terrorarc").innerHTML += /* html */`
            <img src="${e.url}" alt="" referrerpolicy="no-referrer" >
        `
    });
    localStorage.setItem("gallery-terrorarc", document.getElementById("gallery-terrorarc").innerHTML)
    

} else {

    document.getElementById("gallery-terrorarc").innerHTML = localStorage.getItem("gallery-terrorarc")


    var _cache = ""

    gallery.terrorarc.forEach(e => {
        _cache += /* html */` <img src="${e.url}" alt="" referrerpolicy="no-referrer" >`
    });

    if (localStorage.getItem("gallery-terrorarc") !== _cache) {
        document.getElementById("gallery-terrorarc").innerHTML = _cache
        localStorage.setItem("gallery-terrorarc", document.getElementById("gallery-terrorarc").innerHTML)
    }

}

if (localStorage.getItem("gallery-terrorhardcore") == undefined) {

    var gallery = await content()

    gallery.terrorhardcore.forEach(e => {
        document.getElementById("gallery-terrorhardcore").innerHTML += /* html */`
            <img src="${e.url}" alt="" referrerpolicy="no-referrer" >
        `
    });
    localStorage.setItem("gallery-terrorhardcore", document.getElementById("gallery-terrorhardcore").innerHTML)
    

} else {

    document.getElementById("gallery-terrorhardcore").innerHTML = localStorage.getItem("gallery-terrorhardcore")


    var _cache = ""

    gallery.terrorhardcore.forEach(e => {
        _cache += /* html */` <img src="${e.url}" alt="" referrerpolicy="no-referrer" >`
    });

    if (localStorage.getItem("gallery-terrorhardcore") !== _cache) {
        document.getElementById("gallery-terrorhardcore").innerHTML = _cache
        localStorage.setItem("gallery-terrorhardcore", document.getElementById("gallery-terrorhardcore").innerHTML)
    }

}

if (localStorage.getItem("gallery-terrorforsaken") == undefined) {

    var gallery = await content()

    gallery.terrorforsaken.forEach(e => {
        document.getElementById("gallery-terrorforsaken").innerHTML += /* html */`
            <img src="${e.url}" alt="" referrerpolicy="no-referrer" >
        `
    });
    localStorage.setItem("gallery-terrorforsaken", document.getElementById("gallery-terrorforsaken").innerHTML)
    

} else {

    document.getElementById("gallery-terrorforsaken").innerHTML = localStorage.getItem("gallery-terrorforsaken")


    var _cache = ""

    gallery.terrorforsaken.forEach(e => {
        _cache += /* html */` <img src="${e.url}" alt="" referrerpolicy="no-referrer" >`
    });

    if (localStorage.getItem("gallery-terrorforsaken") !== _cache) {
        document.getElementById("gallery-terrorforsaken").innerHTML = _cache
        localStorage.setItem("gallery-terrorforsaken", document.getElementById("gallery-terrorforsaken").innerHTML)
    }

}