
function card(name, rank, profile) {
    let ranktype = rank.toLowerCase();
    const _profile = () => {
        if (profile == '' || profile == '-') {
            return /* html */`<img loading="lazy" src="https://mc-heads.net/avatar/Steve2" class="rounded-lg transition-all duration-300 group-hover:scale-105 z-2" draggable="false">`
        }
        else {
            return /* html */ `<img loading="lazy" src="${profile}" class="rounded-lg transition-all duration-300 group-hover:scale-105 z-2" draggable="false">`
        }
    } 
    return /* html */`
        <div class="flex flex-row sm:justify-center space-x-6 py-4 lg:py-6 px-6 hover:cursor-pointer group transition duration-200 bg-black/20 border-2 border-white/5 backdrop-blur-sm rounded-xl"> <!--card-->
            <div class="flex justify-center sm:hidden w-24 h-24 bg-white/10 rounded-lg"><div class="absolute  w-24 h-24 bg-white/10 rounded-lg animate-pulse z-1"></div>${_profile()}</div>
            <div class="sm:text-center space-y-1 max-w-[12rem]">
                <div class="flex justify-center max-sm:hidden w-40 h-40"><div class="absolute w-40 h-40 bg-white/10 rounded-lg animate-pulse z-1"></div>${_profile()}</div>
                <h1 class="mb-1 text-lg lg:text-2xl text-white">${name}</h1>
                <div class="rank flex sm:justify-center"><p class="w-fit px-3 rounded-full ${ranktype}">${rank}</p></div>
                <!-- <div class="sm:pt-2 flex flex-row sm:justify-center space-x-2 "> 
                    <a href="https://discord.com/users/1095177845686419488" target="_blank" class="transition duration-200 hover:scale-105 hover:-translate-y-2 active:-translate-y-0 active:scale-100 w-fit h-fit rounded-full p-2 border-2 border-white/5 bg-white/5"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"></path></svg></a>
                </div> -->
            </div>
        </div>
    `
}

export default card