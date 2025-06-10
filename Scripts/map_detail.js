const patchNotes = [
    {
        version: "10.02",
        title: "PATCH NOTE PALORANT 10.02",
        subtitle: "Minor patches with important bug fixes for Agents and others.",
        bugFixes: {
            Common: [
                "Fixed an issue that caused certain types of damage to cause players with Regen Shield to still have 1 HP, when they should have fallen.",
                "This also fixes an issue where Clove can withstand lethal damage, especially when Regen Shield and Pick Me Up are active at the same time."
            ],
            Agent: {
                Vyse: [
                    "Fixed an issue with Arc Rose and Razorvine that could be seen when placed on certain water surfaces."
                ],
                Gekko: [
                    "Fixed an issue that caused players to rarely survive when directly running through the entire duration of Armageddon."
                ]
            }
        }
    },

    // Kamu bisa tambahkan patch lain di sini seperti:
    // {
    //     version: "10.05",
    //     ...
    // }
];


document.addEventListener("DOMContentLoaded", () => {
    const currentPatchVersion = "10.02"; // Atau bisa ambil dari query URL kalau mau dinamis
    const patch = patchNotes.find(p => p.version === currentPatchVersion);

    if (patch) {
        renderPatchNotes(patch);
    } else {
        console.error("Patch note not found");
    }
});

function renderPatchNotes(data) {
    document.querySelector(".patch-title").textContent = data.title;
    document.querySelector(".patch-subtitle").textContent = data.subtitle;

    const section = document.getElementById("patch-bug-fixes");
    section.innerHTML = `<h2 class="section-title">BUG FIXES</h2>`;

    // Common
    if (data.bugFixes.Common) {
        const commonDiv = document.createElement("div");
        commonDiv.className = "bug-category";

        const commonTitle = document.createElement("h3");
        commonTitle.className = "category-title";
        commonTitle.textContent = "Common";
        commonDiv.appendChild(commonTitle);

        const list = document.createElement("ul");
        list.className = "bug-list";

        data.bugFixes.Common.forEach(bug => {
            const li = document.createElement("li");
            li.textContent = bug;
            list.appendChild(li);
        });

        commonDiv.appendChild(list);
        section.appendChild(commonDiv);
    }

    // Agent
    if (data.bugFixes.Agent) {
        const agentDiv = document.createElement("div");
        agentDiv.className = "bug-category";

        const agentTitle = document.createElement("h3");
        agentTitle.className = "category-title";
        agentTitle.textContent = "Agent";
        agentDiv.appendChild(agentTitle);

        Object.entries(data.bugFixes.Agent).forEach(([agentName, bugs]) => {
            const agentBlock = document.createElement("div");
            agentBlock.className = "agent-bugs";

            const name = document.createElement("h4");
            name.className = "agent-name";
            name.textContent = agentName;
            agentBlock.appendChild(name);

            const bugList = document.createElement("ul");
            bugList.className = "bug-description";

            bugs.forEach(bug => {
                const li = document.createElement("li");
                li.textContent = bug;
                bugList.appendChild(li);
            });

            agentBlock.appendChild(bugList);
            agentDiv.appendChild(agentBlock);
        });

        section.appendChild(agentDiv);
    }
}
