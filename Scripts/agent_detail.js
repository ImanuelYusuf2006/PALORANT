const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const agent = urlParams.get('AGENT');

const agent_data = [
    {
        "name": "sova",
        "description": "Born from the perennial winter of the Russian tundra, Sova tracks, finds and finishes off enemies with devastating efficiency and precision. The special bow and excellent reconnaissance abilities ensure that you can run, but you can't hide.",
        "role": "sniper"
    },
    {
        "name": "iso",
        "description": "China's flagship agent, Iso, entered a focus condition to eradicate opponents. By converting the surrounding energy into bulletproof protection, he focused on adapting to the next duel until the last drop of blood.",
        "role": "fighter"
    },
    {
        "name": "chyper",
        "description": "An information broker from Morocco, Chyper is a one-man surveillance network that monitors the enemy's every move. There are no safe secrets. There are no invisible maneuvers. Cypher is always watching.",
        "role": "sniper"
    },
    {
        "name": "reyna",
        "description": "Forged in the heart of Mexico, Reyna dominates single-player combat and gets stronger with each kill. His expertise is only hampered by his raw skills, making him highly dependent on performance.",
        "role": "sniper"
    },
    {
        "name": "raze",
        "description": "Raze, the explosive from Brazil, brings a tough personality and big guns. With his brutal playstyle, Raze excels at sweeping away dwelling enemies and emptying tight spaces with massive explosions.",
        "role": "sniper"
    },
    {
        "name": "phoenix",
        "description": "Originating from the United Kingdom, the Phoenix's star power is displayed in his fighting style, setting the battlefield on fire with lightning and fire. When alone or with the help of his partner, he will jump into the fight in the flames.",
        "role": "mage"
    },
    {
        "name": "harbor",
        "description": "Originating from the coast of India, Harbor invaded the battlefield using ancient technology that controlled the water. He unleashed roaring torrents and devastating waves to protect allies, or destroy anyone who opposed him.",
        "role": "fighter"
    },
    {
        "name": "gekko",
        "description": "Gekko the Angeleno leads a compact crew of doomsday creatures. His comrades move forward getting rid of the enemy, and Gekko chases them down to reunite and leave again.",
        "role": "sniper"
    },
    {
        "name": "vyse",
        "description": "Vyse's metallic mastermind disperses molten metal to isolate, trap, and disarm enemies. With cunning and manipulation, he forced all who opposed him to fear the battlefield.",
        "role": "sniper"
    },
    {
        "name": "sage",
        "description": "A defensive fortress from China, Sage provides a sense of security for himself and his team wherever he goes. Being able to resurrect a friend who has fallen and withstand a fierce onslaught, he becomes a source of calm on the battlefield like hell.",
        "role": "mage"
    },
    {
        "name": "brimstone",
        "description": "Joining from the US, Brimstone's orbital weaponry ensured his squad was always within an advantageous position. His ability to deliver assistance precisely and safely makes him an unparalleled combat commander.",
        "role": "tank"
    },
    {
        "name": "breach",
        "description": "Breach, a bionic man from Sweden, fires powerful kinetic explosions targeted to aggressively break through enemy territory. The damage and distraction he caused ensured that the fight would never be fair.",
        "role": "fighter"
    }
];


if (agent) {
    const selectedAgent = agent_data.find(a => a.name.toLowerCase() === agent.toLowerCase());

    if (selectedAgent) {
        document.getElementById("name").innerHTML = selectedAgent.name.toUpperCase();
        document.getElementById("description").innerHTML = selectedAgent.description.toUpperCase();
        document.getElementById("role").innerHTML = "<span>ROLE</span> : " + selectedAgent.role.toUpperCase();
        document.getElementById("img-preview").src = "Resources/Agents/Detail/" + selectedAgent.name + '.png'
        document.getElementById("target").style.backgroundImage = `url(Resources/Role/${selectedAgent.role}.png)`;

    } else {
        document.getElementById("name").innerHTML = "Agent not found";
    }
}
