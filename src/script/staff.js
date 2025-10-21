import card from "./card.js"
const staffs = document.getElementById('staffs')
const sdata = async () => {
    const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh-9EtSunrCAHh-5NiMI_EmnEfpnx-f2gYDRuM9dsgmABcCYMaNkIYwWnULRNAhIGFaLEZ8ln9vIj2PxJn-9cycoaAlWmNeOWI7zV_CGD4GTYI0jq03kZXUGwsW8kCmiNH89cZIRT7LYDkobKFudA108be-FdJ6E2xqCI90KQfGTgUoynaz2sqUCvw1lcQ7rqwZvU9K3A4827B_i5TSStPTW_OP_elL8ae7HB78rrfYH0SE9paSlv6dSL-eIxP6IEQu8gimYH9_uzhINEfnrp3ATpD5nQ&lib=MXPOxT4dGWEqvX8Qel1J_NMaF4-yRly96')
    const datas = await res.json();
    return datas.datas;
}


var staffdata = [];
try {
    staffs.innerHTML = localStorage.getItem("cardRender")

} catch (ee) {



    try {
        staffdata = JSON.parse(localStorage.getItem("data"));
        console.log("a", staffdata)
        
        staffs.innerHTML = ""
        JSON.parse(localStorage.getItem("data")).forEach(e => {
            staffs.innerHTML += card(e.Name, e.role, e.profile)
            localStorage.setItem("cardRender", staffs.innerHTML.toString())
        });

    } catch (e) {
        staffdata = await sdata()
    }
}
staffdata = await sdata()

localStorage.setItem("data", JSON.stringify(staffdata))

staffs.innerHTML = ""
staffdata.forEach(e => {
    staffs.innerHTML += card(e.Name, e.role, e.profile)
    localStorage.setItem("cardRender", staffs.innerHTML.toString())
});

setInterval(async () => {
    staffdata = await sdata()

    staffs.innerHTML = ""
    staffdata.forEach(e => {
        staffs.innerHTML += card(e.Name, e.role, e.profile)
    });
    console.log("refresh")
}, 60000);