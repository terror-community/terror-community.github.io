const goTop = document.querySelector(".btnGoTop")
    window.addEventListener("scroll", ()=>{
        window.pageYOffset > 500 ? goTop.classList.add("active") : goTop.classList.remove("active");
    })
    goTop.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })