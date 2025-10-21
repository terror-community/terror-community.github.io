
import navLoc from "../script/navbar.js";
navLoc()

window.addEventListener("load", function() {
  document.getElementById('beforeload').classList.add('hidden')
  if(window.innerWidth > 1000){
    document.getElementById('logo').style.animation = "logoAnima 0.7s ease forwards 150ms";
  }
  document.getElementById('server-info').style.animation = "fade-in-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards 350ms";

  document.getElementById('discord-server').style.animation = "fade-in-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards 350ms";

  document.getElementById('instagram').style.animation = "linkAnima 0.4s forwards";
  document.getElementById('discord').style.animation = "linkAnima 0.4s forwards 100ms";
  document.getElementById('youtube').style.animation = "linkAnima 0.4s forwards 200ms";
  document.getElementById('tiktok').style.animation = "linkAnima 0.4s forwards 300ms";

});

document.getElementById('status-minecraft').addEventListener('click', () => {
    if(window.innerWidth > 1000){
        Swal.fire({
            title: "IP Coppied",
            text: "join server sekarang!",
            icon: "success"
          });
    }
    navigator.clipboard.writeText(document.getElementById('ip-minecraftServer').textContent);
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

    const memberCountElement = document.getElementById('count-discordServerUsers');
    async function fetchMemberCount() {
      try {
        // Discord widget API for server info in JSON format
        const response = await fetch(`https://discord.com/api/guilds/1171444246402838561/widget.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.presence_count !== undefined) {
          memberCountElement.textContent = data.presence_count.toLocaleString();
        } else {
          memberCountElement.textContent = "N/A";
        }
      } catch (error) {
        memberCountElement.textContent = "N/A";
        console.error('Error fetching Discord member count:', error);
      }
    }

  async function fetchServerData() {
    const serverip = document.getElementById('ip-minecraftServer')
    const serverData = `https://api.mcsrvstat.us/3/${serverip.textContent}`;
    try {
      const response = await fetch(serverData);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const serverDataInfo = await response.json();
      if (serverDataInfo !== undefined) {
        document.getElementById('count-minecraftServerPlayers').textContent = serverDataInfo.players.online.toLocaleString();
      } else {
        document.getElementById('count-minecraftServerPlayers').textContent = "N/A";
      }
    } catch (error) {
      document.getElementById('count-minecraftServerPlayers').textContent = "N/A";
      console.error(error.message);
    }
  }



setInterval(function() {
fetchMemberCount();
fetchServerData()
}, 15000)

fetchMemberCount();
fetchServerData();

