import card from "./card.js"
const staffs = document.getElementById('staffs')
const members = document.getElementById('members')
const sdata = async () => {
    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh-9EtSunrCAHh-5NiMI_EmnEfpnx-f2gYDRuM9dsgmABcCYMaNkIYwWnULRNAhIGFaLEZ8ln9vIj2PxJn-9cycoaAlWmNeOWI7zV_CGD4GTYI0jq03kZXUGwsW8kCmiNH89cZIRT7LYDkobKFudA108be-FdJ6E2xqCI90KQfGTgUoynaz2sqUCvw1lcQ7rqwZvU9K3A4827B_i5TSStPTW_OP_elL8ae7HB78rrfYH0SE9paSlv6dSL-eIxP6IEQu8gimYH9_uzhINEfnrp3ATpD5nQ&lib=MXPOxT4dGWEqvX8Qel1J_NMaF4-yRly96')
    const datas = await res.json();
    return datas.datas;
}
const mdata = async () => {
    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjnIhpoaBOOAET9oYmfv44CAxxkhfXPScGj_S_7sNNP4lhf5pJbXZ8wcqOCmqKrkfFm4ZC8bikGFNFtoZOTtmtwmWBYBltE8JqN6GftudvpwFnvHywAfLXji0dFa-sy-VWzjiv3hh6i3CkYnvsbmQR2IrwbAyIJhyamw0WNx_eNW0Yclx5vXEcJsA0Zx1uo4GxltCzTQ2OM_UZiMlhQUcUHwAkO3p18z2FY1tUVA2mBFT-qN2HViRgVlSa1PDyZCrmH1fFwFvIIIcvND4zwazsetPxVoQ&lib=MXPOxT4dGWEqvX8Qel1J_NMaF4-yRly96')
    const datas = await res.json();
    return datas.content;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
});

var staffdata = [];
var memdata = []
try {
    staffs.innerHTML = localStorage.getItem("cardRender")
    members.innerHTML = localStorage.getItem("cardRendermem")
} catch (ee) {

    try {
        staffdata = JSON.parse(localStorage.getItem("data"));
        memdata = JSON.parse(localStorage.getItem("mdata"));
        
        staffs.innerHTML = ""
        members.innerHTML = ""

        staffdata.forEach(e => {
            staffs.innerHTML += card(e.Name, e.role, e.profile)
            localStorage.setItem("cardRender", staffs.innerHTML.toString())
        });
        memdata.forEach(e => {
            members.innerHTML += card(e.Name, "member", e.profile)
            localStorage.setItem("cardRendermem", members.innerHTML.toString())
        });
    } catch (e) {
        staffdata = await sdata()
        memdata = await mdata()
    }
}
staffdata = await sdata()
memdata = await mdata()

localStorage.setItem("data", JSON.stringify(staffdata))
localStorage.setItem("mdata", JSON.stringify(memdata))

staffs.innerHTML = ""
members.innerHTML = ""
staffdata.forEach(e => {
    staffs.innerHTML += card(e.Name, e.role, e.profile)
    localStorage.setItem("cardRender", staffs.innerHTML.toString())
});
memdata.forEach(e => {
    members.innerHTML += card(e.Name, "member", e.profile)
    localStorage.setItem("cardRendermem", members.innerHTML.toString())
});
