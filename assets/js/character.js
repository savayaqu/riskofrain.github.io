// Получаем выссоту характеристик персонажа
let statHeight = document.querySelector('.character-stats').clientHeight;
let character_stat = document.querySelector('.character-stats');
// Если высота больше 700px, то добавляется скролбар
if(statHeight > 700)
{
  character_stat.classList.add("scrollbar");
}
// Получаем элементы h3 и h2
let colors_h3 = document.querySelectorAll('.ability-up > div > h3')
let colors_h2 = document.querySelector('.abilities_header > h2')
let preview_h2 = document.querySelector('.preview-character > div > h2')
// В зависимости от того какое название у title, меняется цвет элементов, которые мы получили ранее
if (document.title === "Acrid")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#c9f24d";
    colors_h2.style.color = "#c9f24d";
    preview_h2.style.color = "#c9f24d";
  }

}
if (document.title === "Artificer")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#f7c1fd";
    colors_h2.style.color = "#f7c1fd";
    preview_h2.style.color = "#f7c1fd";
  }
}
else if (document.title === "Bandit")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#e88aea";
    colors_h2.style.color = "#e88aea";
    preview_h2.style.color = "#e88aea";
  }

}
else if (document.title === "Captain")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#beba92";
    colors_h2.style.color = "#beba92";
    preview_h2.style.color = "#beba92";
  }

}
else if (document.title === "Commando")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#ed9616";
    colors_h2.style.color = "#ed9616";
    preview_h2.style.color = "#ed9616";
  }
}
else if (document.title === "Engineer")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#5fe286";
    colors_h2.style.color = "#5fe286";
    preview_h2.style.color = "#5fe286";
  }

}
else if (document.title === "Huntress")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#d53d3d";
    colors_h2.style.color = "#d53d3d";
    preview_h2.style.color = "#d53d3d";
  }

}
else if (document.title === "Loader")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#6870de";
    colors_h2.style.color = "#6870de";
    preview_h2.style.color = "#6870de";
  }

}
else if (document.title === "Mercenary")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#6cd1ea";
    colors_h2.style.color = "#6cd1ea";
    preview_h2.style.color = "#6cd1ea";
  }

}
else if (document.title === "MUL-T")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#d3c44f";
    colors_h2.style.color = "#d3c44f";
    preview_h2.style.color = "#d3c44f";
  }

}
else if (document.title === "Railgunner")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#ed164d";
    colors_h2.style.color = "#ed164d";
    preview_h2.style.color = "#ed164d";
  }

}
else if (document.title === "REX")
{
  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#869e55";
    colors_h2.style.color = "#869e55";
    preview_h2.style.color = "#869e55";
  }

}
else if (document.title === "Void Friend")
{

  for (let i = 0; i < colors_h3.length; i++)
  {
    colors_h3[i].style.color = "#a324cf";
    colors_h2.style.color = "#a324cf";
    preview_h2.style.color = "#a324cf";
  }

}
//Создаем новый экземпляр Vue и определяем его параметры
new Vue({
  el: "#abilities",
  data: {
    selectedIndex: null,
    videos: [],
    abilities: [],
  },
  // Код инициализации данных
  created() {
    //Получаем текущее значение title, в зависимости от его значения присваиваем параметрам разные значения
    const pageTitle = document.title;
    if (pageTitle === "Acrid") {
      this.videos = [
        { src: "../assets/video/Acrid/Poison.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Blight.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Vicious_Wounds.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Neurotoxin.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Ravenous_Bite.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Caustic_Leap.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Frenzied_Leap.mp4", autoplay: false },
        { src: "../assets/video/Acrid/Epidemic.mp4", autoplay: false },

      ];
      this.abilities = [
        {
          name: "Poison",
          image: "../assets/images/Characters/Acrid/Poison.webp",
          description: "Poisonous attacks apply a powerful damage-over-time. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Blight",
          image: "../assets/images/Characters/Acrid/Blight.webp",
          description: "Attacks that apply Poison apply stacking Blight instead, dealing 60% damage per second. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Vicious Wounds",
          image: "../assets/images/Characters/Acrid/Vicious_Wounds.webp",
          description: "Maul an enemy for 200% damage. Every 3rd hit is Regenerative and deals 400% damage. ",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Neurotoxin",
          image: "../assets/images/Characters/Acrid/Neurotoxin.webp",
          description: "Poisonous. Spit toxic bile for 240% damage. ",
          cooldown: "2s",
          procCoefficient: "1.0",
        },
        {
          name: "Ravenous Bite",
          image: "../assets/images/Characters/Acrid/Ravenous_Bite.webp",
          description: "Poisonous. Slayer. Regenerative. Bite an enemy for 320% damage. ",
          cooldown: "2s",
          procCoefficient: "1.0",
        },
        {
          name: "Caustic Leap",
          image: "../assets/images/Characters/Acrid/Caustic_Leap.webp",
          description: "Poisonous. Stunning. Leap in the air, dealing 320% damage. Leave acid that deals 25% damage. ",
          cooldown: "6s",
          procCoefficient: "Leap: 1.0 " + "Pool: 0.1 ",
        },
        {
          name: "Frenzied Leap",
          image: "../assets/images/Characters/Acrid/Frenzied_Leap.webp",
          description: "Stunning. Leap in the air, dealing 550% damage. Reduce the cooldown by 2s for every enemy hit. ",
          cooldown: "10s",
          procCoefficient: "1.0",
        },
        {
          name: "Epidemic",
          image: "../assets/images/Characters/Acrid/Epidemic.webp",
          description: "Poisonous. Release a deadly disease that deals 100% damage. The disease spreads to up to 20 targets. ",
          cooldown: "10s",
          procCoefficient: "1.0",
        },
      ];
    }  else if (pageTitle === "Artificer") {
      this.videos = [
        {src: "../assets/video/Artificer/ENV_Suit.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Flame_Bolt.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Plasma_Bolt.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Charged_Nano-Bomb.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Cast_Nano-Spear.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Snapfreeze.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Flamethrower.mp4", autoplay: false},
        {src: "../assets/video/Artificer/Ion_Surge.mp4", autoplay: false},
      ];
      this.abilities = [
        {
          name: "ENV Suit",
          image: "../assets/images/Characters/Artificer/ENV_Suit.webp",
          description: "Holding the Jump key causes the Artificer to hover in the air.",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Flame Bolt",
          image: "../assets/images/Characters/Artificer/Flame_Bolt.webp",
          description: "Fire a bolt for 280% damage that ignites enemies. Hold up to 4.",
          cooldown: "1.3s/shot",
          procCoefficient: "1.0",
        },
        {
          name: "Plasma Bolt",
          image: "../assets/images/Characters/Artificer/Plasma_Bolt.webp",
          description: "Fire a bolt for 280% damage that explodes in a small area. Hold up to 4.",
          cooldown: "1.3s",
          procCoefficient: "1.0",
        },
        {
          name: "Charged Nano-Bomb",
          image: "../assets/images/Characters/Artificer/Charged_Nano-Bomb.webp",
          description: "Stunning. Charge up an exploding nano-bomb that deals 400%-2000% damage.",
          cooldown: "5s",
          procCoefficient: "Explosion: 1.0, Sparks: 0.3",
        },
        {
          name: "Cast Nano-Spear",
          image: "../assets/images/Characters/Artificer/Cast_Nano-Spear.webp",
          description: "Freezing. Charge up a piercing nano-spear that deals 400%-1200% damage.",
          cooldown: "5s",
          procCoefficient: "1.0",
        },
        {
          name: "Snapfreeze",
          image: "../assets/images/Characters/Artificer/Snapfreeze.webp",
          description: "Freezing. Create a barrier that hurts enemies for 100% damage.",
          cooldown: "12s",
          procCoefficient: "1.0 x 12",
        },
        {
          name: "Flamethrower",
          image: "../assets/images/Characters/Artificer/Flamethrower.webp",
          description: "Burn all enemies in front of you for 1700% damage.",
          cooldown: "5s",
          procCoefficient: "1.0 x 22+",
        },
        {
          name: "Ion Surge",
          image: "../assets/images/Characters/Artificer/Ion_Surge.webp",
          description: "Stunning. Burst into the sky, dealing 800% damage. ",
          cooldown: "8s",
          procCoefficient: "1.0",
        },
      ];
    } else if (pageTitle === "Bandit") {
      this.videos = [
        { src: "../assets/video/Bandit/Backstab.mp4", autoplay: false },
        { src: "../assets/video/Bandit/Burst.mp4", autoplay: false },
        { src: "../assets/video/Bandit/Blast.mp4", autoplay: false },
        { src: "../assets/video/Bandit/Serrated_Dagger.mp4", autoplay: false},
        { src: "../assets/video/Bandit/Serrated_Shiv.mp4", autoplay: false},
        { src: "../assets/video/Bandit/Smoke_Bomb.mp4", autoplay: false },
        { src: "../assets/video/Bandit/Lights_Out.mp4", autoplay: false },
        { src: "../assets/video/Bandit/Desperado.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Backstab",
          image: "../assets/images/Characters/Bandit/Backstab.webp",
          description: "All attacks from behind are Critical Strikes. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Burst",
          image: "../assets/images/Characters/Bandit/Burst.webp",
          description: "Fire a shotgun burst for 5x100% damage. Can hold up to 4 shells. ",
          cooldown: "0.3s/shot",
          procCoefficient: "0.5 x 5",
        },
        {
          name: "Blast",
          image: "../assets/images/Characters/Bandit/Blast.webp",
          description: "Fire a rifle blast for 330% damage. Can hold up to 4 bullets. ",
          cooldown: "0.3s/shot ",
          procCoefficient: "1.0",
        },
        {
          name: "Serrated Dagger",
          image: "../assets/images/Characters/Bandit/Serrated_Dagger.webp",
          description: "Lunge and slash for 360% damage. Critical Strikes also cause hemorrhaging. ",
          cooldown: "4s",
          procCoefficient: "1.0",
        },
        {
          name: "Serrated Shiv",
          image: "../assets/images/Characters/Bandit/Serrated_Shiv.webp",
          description: "Throw a hidden blade for 240% damage. Critical Strikes also cause hemorrhaging. ",
          cooldown: "4s",
          procCoefficient: "1.0",
        },
        {
          name: "Smoke Bomb",
          image: "../assets/images/Characters/Bandit/Smoke_Bomb.webp",
          description: "Stunning. Deal 200% damage, become invisible, then deal 200% damage again. ",
          cooldown: "6s",
          procCoefficient: "1.0",
        },
        {
          name: "Lights Out",
          image: "../assets/images/Characters/Bandit/Lights_Out.webp",
          description: "Slayer. Fire a revolver shot for 600% damage. Kills reset all your cooldowns. ",
          cooldown: "4s",
          procCoefficient: "1.0",
        },
        {
          name: "Desperado",
          image: "../assets/images/Characters/Bandit/Desperado.webp",
          description: "Slayer. Fire a revolver shot for 600% damage. Kills grant stacking tokens for 10% more Desperado damage. ",
          cooldown: "4s",
          procCoefficient: "1.0",
        },
      ];
    } else if (pageTitle === "Captain") {
      this.videos = [
        { src: "../assets/video/Captain/Defensive_Microbots.mp4", autoplay: false },
        { src: "../assets/video/Captain/Vulcan_Shotgun.mp4", autoplay: false },
        { src: "../assets/video/Captain/Power_Tazer.mp4", autoplay: false },
        { src: "../assets/video/Captain/Orbital_Probe.mp4", autoplay: false },
        { src: "../assets/video/Captain/DIABLO.mp4", autoplay: false },
        { src: "../assets/video/Captain/Orbital_Supply_Beacon.mp4", autoplay: false },
        { src: "../assets/video/Captain/Beacon_Healing.mp4", autoplay: false },
        { src: "../assets/video/Captain/Beacon_Shocking.mp4", autoplay: false },
        { src: "../assets/video/Captain/Beacon_Resupply.mp4", autoplay: false },
        { src: "../assets/video/Captain/Beacon_Hacking.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Defensive Microbots",
          image: "../assets/images/Characters/Captain/Defensive_Microbots_29.webp",
          description: "Passively gain Microbots that shoot down nearby enemy projectiles. Drones are also given Microbots. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Vulcan Shotgun",
          image: "../assets/images/Characters/Captain/Vulcan_Shotgun.webp",
          description: "Fire a blast of pellets that deal 8x120% damage. Charging the attack narrows the spread. ",
          cooldown: null,
          procCoefficient: "0.75 x 8 ",
        },
        {
          name: "Power Tazer",
          image: "../assets/images/Characters/Captain/Power_Tazer.webp",
          description: "Shocking. Fire a fast tazer that deals 100% damage. Travels farther if bounced. ",
          cooldown: "6s",
          procCoefficient: "1.0",
        },
        {
          name: "Orbital Probe",
          image: "../assets/images/Characters/Captain/Orbital_Probe.webp",
          description: "Stunning. Request up to 3 Orbital Probes from the UES Safe Travels. Each probe deals 1000% damage. ",
          cooldown: "11s",
          procCoefficient: "1.0 per probe",
        },
        {
          name: "OGM-72 'DIABLO' Strike",
          image: "../assets/images/Characters/Captain/OGM-72_'DIABLO'_Strike.webp",
          description: "Drop a capsule that heals allies for 10% of their maximum health and creates a temporary barrier that blocks 50% of incoming damage. ",
          cooldown: "7s",
          procCoefficient: null,
        },
        {
          name: "Orbital Supply Beacon",
          image: "../assets/images/Characters/Captain/Orbital_Supply_Beacon.webp",
          description: "Request a permanent Supply Beacon. Can only be requested twice per stage. ",
          cooldown: "N/A",
          procCoefficient: "0.0",
        },
        {
          name: "Beacon: Healing",
          image: "../assets/images/Characters/Captain/Beacon_Healing.webp",
          description: "Heal all nearby allies for 10% of their maximum health every second. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Beacon: Shocking",
          image: "../assets/images/Characters/Captain/Beacon_Shocking.webp",
          description: "Periodically Shock all nearby enemies, immobilizing them. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Beacon: Resupply",
          image: "../assets/images/Characters/Captain/Beacon_Resupply.webp",
          description: "Recharge Equipment on use. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Beacon: Hacking",
          image: "../assets/images/Characters/Captain/Beacon_Hacking.webp",
          description: "Hack all nearby purchasables to a cost of $0 over time. ",
          cooldown: null,
          procCoefficient: null,
        },
      ];
    } else if (pageTitle === "Commando") {
      this.videos = [
        { src: "../assets/video/Commando/Double_Tap.mp4", autoplay: false },
        { src: "../assets/video/Commando/Phase_Round.mp4", autoplay: false },
        { src: "../assets/video/Commando/Phase_Blast.mp4", autoplay: false },
        { src: "../assets/video/Commando/Tactical_Dive.mp4", autoplay: false },
        { src: "../assets/video/Commando/Tactical_Slide.mp4", autoplay: false },
        { src: "../assets/video/Commando/Suppressive_Fire.mp4", autoplay: false },
        { src: "../assets/video/Commando/Frag_Grenade.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Double Tap",
          image: "../assets/images/Characters/Commando/Double_Tap.webp",
          description: "Rapidly shoot an enemy for 100% damage.",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Phase Round",
          image: "../assets/images/Characters/Commando/Phase_Round.webp",
          description: "Fire a piercing bullet for 300% damage. Deals 40% more damage every time it passes through an enemy. ",
          cooldown: "3s",
          procCoefficient: "1.0",
        },
        {
          name: "Phase Blast",
          image: "../assets/images/Characters/Commando/Phase_Blast.webp",
          description: "Fire two close-range blasts that deal 8x200% damage total.",
          cooldown: "3s",
          procCoefficient: "0.5 x 8",
        },
        {
          name: "Tactical Dive",
          image: "../assets/images/Characters/Commando/Tactical_Dive.webp",
          description: "Roll a short distance. ",
          cooldown: "4s",
          procCoefficient: null,
        },
        {
          name: "Tactical Slide",
          image: "../assets/images/Characters/Commando/Tactical_Slide.webp",
          description: "Slide on the ground for a short distance. You can fire while sliding.",
          cooldown: "4s",
          procCoefficient: null,
        },
        {
          name: "Suppressive Fire",
          image: "../assets/images/Characters/Commando/Suppressive_Fire.webp",
          description: "Stunning. Fire repeatedly for 100% damage per bullet. The number of shots increases with attack speed. ",
          cooldown: "5s",
          procCoefficient: "1.0 x 6+ ",
        },
        {
          name: "Frag Grenade",
          image: "../assets/images/Characters/Commando/Frag_Grenade.webp",
          description: "Throw a grenade that explodes for 700% damage. Can hold up to 2.",
          cooldown: "5s",
          procCoefficient: "1.0",
        },
      ];
    } else if (pageTitle === "Engineer") {
      this.videos = [
        { src: "../assets/video/Engineer/Bouncing_Grenades.mp4", autoplay: false },
        { src: "../assets/video/Engineer/Pressure_Mines.mp4", autoplay: false },
        { src: "../assets/video/Engineer/Spider_Mines.mp4", autoplay: false },
        { src: "../assets/video/Engineer/Bubble_Shield.mp4", autoplay: false },
        { src: "../assets/video/Engineer/Thermal_Harpoons.mp4", autoplay: false },
        { src: "../assets/video/Engineer/TR12.mp4", autoplay: false },
        { src: "../assets/video/Engineer/TR58.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Bouncing Grenades",
          image: "../assets/images/Characters/Engineer/Bouncing_Grenades.webp",
          description: "Charge up to 8 grenades that deal 100% damage each.",
          cooldown: null,
          procCoefficient: "1.0 per grenade, up to 1.0 x 8",
        },
        {
          name: "Pressure Mines",
          image: "../assets/images/Characters/Engineer/Pressure_Mines.webp",
          description: "Place a two-stage mine that deals 300% damage, or 900% damage if fully armed. Can place up to 4.",
          cooldown: "8s",
          procCoefficient: "1.0",
        },
        {
          name: "Spider Mines",
          image: "../assets/images/Characters/Engineer/Spider_Mines.webp",
          description: "Place a robot mine that deals 600% damage when an enemy walks nearby. Can place up to 4.",
          cooldown: "8s",
          procCoefficient: "1.0",
        },
        {
          name: "Bubble Shield",
          image: "../assets/images/Characters/Engineer/Bubble_Shield.webp",
          description: "Place an impenetrable shield that blocks all incoming damage.",
          cooldown: "25s",
          procCoefficient: null,
        },
        {
          name: "Thermal Harpoons",
          image: "../assets/images/Characters/Engineer/Thermal_Harpoons.webp",
          description: "Enter target painting mode to launch heat-seeking harpoons that deal 500% damage each. Can store up to 4.",
          cooldown: "2.5s",
          procCoefficient: "1.0 per Harpoon",
        },
        {
          name: "TR12 Gauss Auto-Turret",
          image: "../assets/images/Characters/Engineer/TR12_Gauss_Auto-Turret.webp",
          description: "Place a turret that inherits all your items. Fires a cannon for 100% damage. Can place up to 2.",
          cooldown: "30s",
          procCoefficient: "1.0",
        },
        {
          name: "TR58 Gauss Auto-Turret",
          image: "../assets/images/Characters/Engineer/TR58_Carbonizer_Turret.webp",
          description: "Place a mobile turret that inherits all your items. Fires a laser for 200% damage per second that slows enemies. Can place up to 2.",
          cooldown: "30s",
          procCoefficient: "0.6",
        },
      ];
    } else if (pageTitle === "Huntress") {
      this.videos = [
        { src: "../assets/video/Huntress/Strafe.mp4", autoplay: false },
        { src: "../assets/video/Huntress/Flurry.mp4", autoplay: false },
        { src: "../assets/video/Huntress/Laser_Glaive.mp4", autoplay: false },
        { src: "../assets/video/Huntress/Blink.mp4", autoplay: false },
        { src: "../assets/video/Huntress/Phase_Blink.mp4", autoplay: false },
        { src: "../assets/video/Huntress/Arrow_Rain.mp4", autoplay: false },
        { src: "../assets/video/Huntress/Ballista.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Strafe",
          image: "../assets/images/Characters/Huntress/Strafe.webp",
          description: "Agile. Quickly fire a seeking arrow for 150% damage. ",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Flurry",
          image: "../assets/images/Characters/Huntress/Flurry.webp",
          description: "Agile. Draw back a volley of 3 seeking arrows for 3x100% damage. Critical Strikes fire 6 arrows. ",
          cooldown: null,
          procCoefficient: "0.7 x 3 (0.7 x 6 for critical strike) ",
        },
        {
          name: "Laser Glaive",
          image: "../assets/images/Characters/Huntress/Laser_Glaive.webp",
          description: "Throw a seeking glaive that bounces up to 6 times for 250% damage. Damage increases by 10% per bounce. ",
          cooldown: "7s",
          procCoefficient: "0.8 per bounce ",
        },
        {
          name: "Blink",
          image: "../assets/images/Characters/Huntress/Blink.webp",
          description: "Disappear and teleport forward. ",
          cooldown: "7s",
          procCoefficient: null,
        },
        {
          name: "Phase Blink",
          image: "../assets/images/Characters/Huntress/Phase_Blink.webp",
          description: "Agile. Disappear and teleport a short distance. Can store up to 3 charges. ",
          cooldown: "2s per charge ",
          procCoefficient: null,
        },
        {
          name: "Arrow Rain",
          image: "../assets/images/Characters/Huntress/Arrow_Rain.webp",
          description: "Teleport into the sky. Target an area to rain arrows, slowing all enemies and dealing 330% damage per second. ",
          cooldown: "12s",
          procCoefficient: "0.2 x 19 ",
        },
        {
          name: "Ballista",
          image: "../assets/images/Characters/Huntress/Ballista.webp",
          description: "Teleport backwards into the sky. Fire up to 3 energy bolts, dealing 3x900% damage. ",
          cooldown: "12s",
          procCoefficient: "1.0 x 3 ",
        },
      ];
    } else if (pageTitle === "Loader") {
      this.videos = [
        {src: "../assets/video/Loader/Scrap_Barrier.mp4", autoplay: false},
        {src: "../assets/video/Loader/Knuckleboom.mp4", autoplay: false},
        {src: "../assets/video/Loader/Grapple_Fist.mp4", autoplay: false},
        {src: "../assets/video/Loader/Spiked_Fist.mp4", autoplay: false},
        {src: "../assets/video/Loader/Charged_Gauntlet.mp4", autoplay: false},
        {src: "../assets/video/Loader/Thunder_Gauntlet.mp4", autoplay: false},
        {src: "../assets/video/Loader/M551.mp4", autoplay: false},
        {src: "../assets/video/Loader/Thunderslam.mp4", autoplay: false},
      ];
      this.abilities = [
        {
          name: "Scrap Barrier",
          image: "../assets/images/Characters/Loader/Scrap_Barrier.webp",
          description: "The Loader is immune to fall damage. Striking enemies with the Loader's gauntlets grants a temporary barrier. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Knuckleboom",
          image: "../assets/images/Characters/Loader/Knuckleboom.webp",
          description: "Swing at nearby enemies for 320% damage. ",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Grapple Fist",
          image: "../assets/images/Characters/Loader/Grapple_Fist.webp",
          description: "Fire your gauntlet forward, pulling you to the target.",
          cooldown: "5s",
          procCoefficient: null,
        },
        {
          name: "Spiked Fist",
          image: "../assets/images/Characters/Loader/Spiked_Fist.webp",
          description: "Stunning. Fire your gauntlet forward, dealing 320% damage. Pulls you to heavy targets. Light targets are pulled to YOU instead.",
          cooldown: "5s",
          procCoefficient: "1.0",
        },
        {
          name: "Charged Gauntlet",
          image: "../assets/images/Characters/Loader/Charged_Gauntlet.webp",
          description: "Heavy. Charge up a piercing punch for 600%-2700% damage.",
          cooldown: "5s",
          procCoefficient: "1.0",
        },
        {
          name: "Thunder Gauntlet",
          image: "../assets/images/Characters/Loader/Thunder_Gauntlet.webp",
          description: "Heavy. Charge up a single-target punch for 2100% damage that shocks enemies in a cone for 1000% damage.",
          cooldown: "5s",
          procCoefficient: "1.0",
        },
        {
          name: "M551 Pylon",
          image: "../assets/images/Characters/Loader/M551_Pylon.webp",
          description: "Throw a floating pylon that zaps up to 6 nearby enemies for 100% damage. Can be grappled.",
          cooldown: "20s",
          procCoefficient: "0.5",
        },
        {
          name: "Thunderslam",
          image: "../assets/images/Characters/Loader/Thunderslam.webp",
          description: "Stunning. Slam your fists down, dealing 2000% damage on impact. ",
          cooldown: "8s",
          procCoefficient: "1.0",
        }
      ];
    } else if (pageTitle === "Mercenary") {
      this.videos = [
        { src: "../assets/video/Mercenary/CyberneticEnhancements.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/Laser Sword.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/Whirlwind.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/RisingThunder.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/BlindingAssault.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/FocusedAssault.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/Eviscerate.mp4", autoplay: false },
        { src: "../assets/video/Mercenary/SlicingWinds.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Cybernetic Enhancements",
          image: "../assets/images/Characters/Mercenary/Cybernetic_Enhancements.webp",
          description: "The Mercenary can jump twice. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Laser Sword",
          image: "../assets/images/Characters/Mercenary/Laser_Sword.webp",
          description: "Agile. Slice in front for 130% damage. Every 3rd hit strikes in a greater area and Exposes enemies. ",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Whirlwind",
          image: "../assets/images/Characters/Mercenary/Whirlwind.webp",
          description: "Quickly slice horizontally twice, dealing 2x200% damage. If airborne, slice vertically instead. ",
          cooldown: "2.5s ",
          procCoefficient: "1.0 x 2",
        },
        {
          name: "Rising Thunder",
          image: "../assets/images/Characters/Mercenary/Rising_Thunder.webp",
          description: "Unleash a slicing uppercut, dealing 550% damage and sending you airborne. ",
          cooldown: "2.5s ",
          procCoefficient: "1.0",
        },
        {
          name: "Blinding Assault",
          image: "../assets/images/Characters/Mercenary/Blinding_Assault.webp",
          description: "Stunning. Dash forward, dealing 300% damage. If you hit an enemy, you can dash again, up to 3 total. ",
          cooldown: "8s ",
          procCoefficient: "1.0",
        },
        {
          name: "Focused Assault",
          image: "../assets/images/Characters/Mercenary/Focused_Assault.webp",
          description: "Stunning. Dash forward, dealing 700% damage and Exposing enemies after 1 second. ",
          cooldown: "8s ",
          procCoefficient: "1.0",
        },
        {
          name: "Eviscerate",
          image: "../assets/images/Characters/Mercenary/Eviscerate.webp",
          description: "Target the nearest enemy, attacking them for 110% damage repeatedly. You cannot be hit for the duration. ",
          cooldown: "6s ",
          procCoefficient: "1.0 x 7+ ",
        },
        {
          name: "Slicing Winds.webp",
          image: "../assets/images/Characters/Mercenary/Slicing_Winds.webp",
          description: "Fire a wind of blades that attack up to 3 enemies for 8x100% damage. The last hit Exposes enemies. ",
          cooldown: "6s",
          procCoefficient: "1.0 x 8 ",
        },
      ];
    } else if (pageTitle === "MUL-T") {
      this.videos = [
        { src: "../assets/video/MUL-T/Auto_Nailgun.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Rebar_Puncher.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Scrap_Launcher.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Power_Saw.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Blast_Canister.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Transport_Mode.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Retool.mp4", autoplay: false },
        { src: "../assets/video/MUL-T/Power_Mode.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Auto Nailgun",
          image: "../assets/images/Characters/MUL-T/Auto-Nailgun.webp",
          description: "Rapidly fire nails for 70% damage. Finishes with a blast of 12 nails. ",
          cooldown: null,
          procCoefficient: "0.6",
        },
        {
          name: "Rebar Puncher",
          image: "../assets/images/Characters/MUL-T/Rebar_Puncher.webp",
          description: "Fire a piercing rebar that deals 600% damage. ",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Scrap Launcher",
          image: "../assets/images/Characters/MUL-T/Scrap_Launcher.webp",
          description: "Fire a rocket that explodes for 360% damage. Hold up to 4. ",
          cooldown: "1.5s",
          procCoefficient: "1.0",
        },
        {
          name: "Power-Saw",
          image: "../assets/images/Characters/MUL-T/Power-Saw.webp",
          description: "Saw nearby enemies for 1000% damage per second.",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Blast Canister",
          image: "../assets/images/Characters/MUL-T/Blast_Canister.webp",
          description: "Stunning. Launch a canister for 220% damage. Drops stun bomblets for 5x44% damage. ",
          cooldown: "6s",
          procCoefficient: "Canister: 1 " + "Bomblets: 0.3 ",
        },
        {
          name: "Transport Mode",
          image: "../assets/images/Characters/MUL-T/Transport_Mode.webp",
          description: "Heavy. Zoom forward, gaining 200 armor and 220% movement speed. Deals 250% damage to enemies. ",
          cooldown: "6s",
          procCoefficient: "Charge: 1.0 " + "Ram: 1.0 ",
        },
        {
          name: "Retool",
          image: "../assets/images/Characters/MUL-T/Retool.webp",
          description: "Passively hold TWO equipment at once. Activating 'Retool' switches the active Equipment and MUL-T's primary attack. ",
          cooldown: "0.5s",
          procCoefficient: null,
        },
        {
          name: "Power Mode",
          image: "../assets/images/Characters/MUL-T/Power_Mode.webp",
          description: "Enter a heavy stance, equipping both your primary attacks at once. Gain 100 armor, but lose -60% movement speed. ",
          cooldown: "5s",
          procCoefficient: null,
        },
      ];
    } else if (pageTitle === "Railgunner") {
      this.videos = [
        { src: "../assets/video/Railgunner/", autoplay: false },
        { src: "../assets/video/Railgunner/XQR_Smart_Round_System.mp4", autoplay: false },
        { src: "../assets/video/Railgunner/M99_Sniper.mp4", autoplay: false },
        { src: "../assets/video/Railgunner/HH44_Marksman.mp4", autoplay: false },
        { src: "../assets/video/Railgunner/Concussion_Device.mp4", autoplay: false },
        { src: "../assets/video/Railgunner/Polar_Field_Device.mp4", autoplay: false },
        { src: "../assets/video/Railgunner/Supercharge.mp4", autoplay: false },
        { src: "../assets/video/Railgunner/Cryocharge.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Magnetic Accelerator",
          image: "../assets/images/Characters/Railgunner/Magnetic_Accelerator.webp",
          description: "All Critical Strike Chance is converted into Critical Strike Damage.",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "XQR Smart Round System",
          image: "../assets/images/Characters/Railgunner/XQR_Smart_Round_System.webp",
          description: "Fire aggressive tracking rounds for 100% damage.",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "M99 Sniper",
          image: "../assets/images/Characters/Railgunner/M99_Sniper.webp",
          description: "Activate your long-range scope, highlighting Weak Points and transforming your weapon into a piercing 1000% damage railgun.",
          cooldown: "N/A",
          procCoefficient: "1.0",
        },
        {
          name: "HH44 Marksman",
          image: "../assets/images/Characters/Railgunner/HH44_Marksman.webp",
          description: "Activate your short-range scope, highlighting Weak Points and transforming your weapon into a quick 400% damage railgun.",
          cooldown: "N/A",
          procCoefficient: "N/A",
        },
        {
          name: "Concussion Device",
          image: "../assets/images/Characters/Railgunner/Concussion_Device.webp",
          description: "Throw out a device that pushes you and all nearby enemies away. Can hold up to 2.",
          cooldown: "6s",
          procCoefficient: "0.0",
        },
        {
          name: "Polar Field Device",
          image: "../assets/images/Characters/Railgunner/Polar_Field_Device.webp",
          description: "Throw out a device that slows down all nearby enemies and projectiles.",
          cooldown: "12s",
          procCoefficient: "0.0",
        },
        {
          name: "Supercharge",
          image: "../assets/images/Characters/Railgunner/Supercharge.webp",
          description: "Fire a piercing round for 4000% damage and 150% Weak Point damage. Afterwards, all your weapons are disabled for 5 seconds.",
          cooldown: "15s",
          procCoefficient: "N/A",
        },
        {
          name: "Cryocharge",
          image: "../assets/images/Characters/Railgunner/Cryocharge.webp",
          description: "Freezing. Fire a piercing round for 2000% damage. ",
          cooldown: "15s",
          procCoefficient: "N/A",
        },
      ];
    } else if (pageTitle === "REX") {
      this.videos = [
        { src: "../assets/video/REX/Natural_Toxins.mp4", autoplay: false },
        { src: "../assets/video/REX/DIRECTIVE_Inject.mp4", autoplay: false },
        { src: "../assets/video/REX/DIRECTIVE_Drill.mp4", autoplay: false },
        { src: "../assets/video/REX/Seed_Barrage.mp4", autoplay: false },
        { src: "../assets/video/REX/DIRECTIVE_Disperse.mp4", autoplay: false },
        { src: "../assets/video/REX/Bramble_Volley.mp4", autoplay: false },
        { src: "../assets/video/REX/DIRECTIVE_Harvest.mp4", autoplay: false },
        { src: "../assets/video/REX/Tangling_Growth.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Natural Toxins",
          image: "../assets/images/Characters/REX/Natural_Toxins.webp",
          description: "Certain attacks Weaken enemies hit, reducing their movement speed, armor, and damage. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "DIRECTIVE: Inject",
          image: "../assets/images/Characters/REX/DIRECTIVE_Inject.webp",
          description: "Fire 3 syringes for 3x80% damage. The last syringe Weakens and heals for 60% of damage dealt. ",
          cooldown: null,
          procCoefficient: "0.5 x 3 ",
        },
        {
          name: "DIRECTIVE: Drill",
          image: "../assets/images/Characters/REX/DIRECTIVE_Drill.webp",
          description: "Launch a series of seed bullets into the sky, raining down for 450% damage per second. ",
          cooldown: "6s",
          procCoefficient: "0.5 x 16 ",
        },
        {
          name: "Seed Barrage",
          image: "../assets/images/Characters/REX/Seed_Barrage.webp",
          description: "15% HP. Launch a mortar into the sky for 450% damage. ",
          cooldown: "0.5s",
          procCoefficient: "1.0",
        },
        {
          name: "DIRECTIVE Disperse",
          image: "../assets/images/Characters/REX/DIRECTIVE_Disperse.webp",
          description: "Fire a Sonic Boom that Weakens all enemies hit. ",
          cooldown: "5.5s",
          procCoefficient: "0.0",
        },
        {
          name: "Bramble Volley",
          image: "../assets/images/Characters/REX/Bramble_Volley.webp",
          description: "20% HP. Fire a Sonic Boom that damages enemies for 550% damage. Heals for every target hit.",
          cooldown: "5.5s",
          procCoefficient: "0.5",
        },
        {
          name: "DIRECTIVE Harvest",
          image: "../assets/images/Characters/REX/DIRECTIVE_Harvest.webp",
          description: "Fire a bolt that deals 330% damage and injects an enemy. On death, drop multiple healing fruits that heal for 25% HP. ",
          cooldown: "6s",
          procCoefficient: "1.0",
        },
        {
          name: "Tangling Growth",
          image: "../assets/images/Characters/REX/Tangling_Growth.webp",
          description: "25% HP. Fire a flower that roots for 200% damage. Heals for every target hit. ",
          cooldown: "12s",
          procCoefficient: "Projectile: 1.0" + "Roots: 0.0 ",
        },
      ];
    } else if (pageTitle === "Void Friend") {
      this.videos = [
        { src: "../assets/video/Void-Friend/Void_Corruption.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Drown.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Corrupted_Drown.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Flood.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Corrupted_Flood.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Trespass.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Corrupted_Trespass.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Suppress.mp4", autoplay: false },
        { src: "../assets/video/Void-Friend/Corrupted_Suppress.mp4", autoplay: false },
      ];
      this.abilities = [
        {
          name: "Void Corruption",
          image: "../assets/images/Characters/Void-Fiend/Void_Corruption.webp",
          description: "At full Corruption, transform your abilities into more aggressive forms.",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Drown",
          image: "../assets/images/Characters/Void-Fiend/Drown.webp",
          description: "Fire a slowing long-range beam for 300% damage.",
          cooldown: null,
          procCoefficient: "1.0",
        },
        {
          name: "Corrupted Drown",
          image: "../assets/images/Characters/Void-Fiend/Corrupted_Drown.webp",
          description: "Fire a short-range beam for 2000% damage.",
          cooldown: null,
          procCoefficient: "0.625",
        },
        {
          name: "Flood",
          image: "../assets/images/Characters/Void-Fiend/Flood.webp",
          description: "Fire a plasma missile for 600% damage. Fully charge it for an explosive plasma ball instead, dealing 1100% damage.",
          cooldown: "4s",
          procCoefficient: "1.0",
        },
        {
          name: "Corrupted Flood",
          image: "../assets/images/Characters/Void-Fiend/Corrupted_Flood.webp",
          description: "Fire an arcing plasma bomb for 1100% damage.",
          cooldown: "4s",
          procCoefficient: "1.0",
        },
        {
          name: "Trespass",
          image: "../assets/images/Characters/Void-Fiend/Trespass.webp",
          description: "Disappear into the Void, cleansing all debuffs while moving in an upward arc.",
          cooldown: "5s",
          procCoefficient: null,
        },
        {
          name: "Corrupted Trespass",
          image: "../assets/images/Characters/Void-Fiend/Corrupted_Trespass.webp",
          description: "Disappear into the Void, cleansing all debuffs while moving at a fast forward angle. ",
          cooldown: "5s",
          procCoefficient: null,
        },
        {
          name: "Suppress",
          image: "../assets/images/Characters/Void-Fiend/Suppress.webp",
          description: "Crush 25% Corruption to heal yourself for 25% maximum health. ",
          cooldown: null,
          procCoefficient: null,
        },
        {
          name: "Corrupted Suppress",
          image: "../assets/images/Characters/Void-Fiend/Corrupted_Suppress.webp",
          description: "Crush 25% maximum health to gain 25% Corruption. ",
          cooldown: null,
          procCoefficient: null,
        },
      ];
    }
  },
  //Определяем методы, которые могут быть вызваны из шаблона Vue или других методов.
  methods: {
    //Это метод, который вызывается при выборе навыка с определенным индексом. Он принимает параметр index, который указывает на выбранный индекс навыка.
    selectAbility(index) {
      //Устанавливает значение свойства selectedIndex в экземпляре Vue равным выбранному индексу. Это позволяет отслеживать выбранный навык и использовать его в других частях кода.
      this.selectedIndex = index;
      //Эта строка получает элемент <video> на основе его идентификатора, который формируется путем объединения строки "video-" с выбранным индексом.
      const videoElement = document.getElementById("video-" + index);
      //Вызов метода для воспроизведения видео.
      videoElement.play();
      //Задаем чтобы при нажатии на кнопку видео всегда начиналось с 0 секунды
      videoElement.currentTime=0;
    },
  },
});
