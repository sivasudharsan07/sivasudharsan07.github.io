/* =========================
   TERMINAL LOADING EFFECT
========================= */
const loadingElement = document.getElementById("loadingText");
const terminalContent = document.getElementById("terminalContent");

const lines = [
"Initializing developer profile...",
"Loading user data...",
"Preparing system environment...",
"System ready."
];

let lineIndex = 0;

function typeLine(){

if(lineIndex < lines.length){

loadingElement.innerHTML += lines[lineIndex] + "<br>";
lineIndex++;

setTimeout(typeLine,600);

}else{

showAbout();

}

}

typeLine();


function showAbout(){

terminalContent.innerHTML = `

<div class="terminal-section-title">> About Developer</div>
<div class="terminal-1">Interests : Machine Learning | Full Stack Development | Cybersecurity</div>

<div class="terminal-line">
Passionate developer interested in building intelligent software systems and data driven applications.
</div>

<div class="terminal-line">
Experienced in Python, Java, Flutter and modern web technologies with strong problem solving skills.
</div>

<div class="terminal-line">
Focused on applying machine learning, data analysis and software engineering principles to real-world problems.
</div>

`;

}


/* =========================
   PROJECT DATA
========================= */

const projects = [

{
title:"Flight Reservation System",
type:"INDIVIDUAL PROJECT",
role:"Developer",
tech:"Linked Lists, Arrays, C",
time:"Semester 2 (Jan–Jun 2024)",
desc:[
"Designed a flight reservation system using Data Structures.",
"Implemented booking and seat allocation using linked lists.",
"Handled passenger cancellation and dynamic seat updates.",
"Optimized memory usage combining arrays with linked lists."
]
},

{
title:"Income Tax Calculator",
type:"TEAM PROJECT",
role:"Frontend + Backend Developer",
tech:"HTML, CSS, JavaScript, MySQL",
time:"Semester 3 (Jul–Dec 2024)",
desc:[
"Built a web based tax calculator for Indian tax slabs.",
"Implemented stored procedures and functions in MySQL.",
"Designed responsive UI using HTML, CSS and JavaScript.",
"Enabled automatic tax computation based on salary input."
]
},

{
title:"Nutrimealo",
type:"TEAM PROJECT",
role:"System Architect",
tech:"Flutter, PostgreSQL, Firebase",
time:"Semester 4 (Jan–May 2025)",
desc:[
"Developed a cross platform nutrition tracking mobile app.",
"Implemented authentication using Firebase.",
"Designed PostgreSQL database for meal and nutrition data.",
"Added weekly meal plan and grocery list generation."
]
},

{
title:"Student Mark Analysis",
type:"TEAM PROJECT",
role:"Data Analyst & Frontend Developer",
tech:"Python, NumPy, Matplotlib, Flask",
time:"Semester 5 (Jul–Nov 2025)",
desc:[
"Performed academic data analysis using Python.",
"Processed datasets using NumPy for statistical insights.",
"Visualized performance trends using Matplotlib graphs.",
"Built Flask web interface for displaying analysis results."
]
},

{
title:"Seaport Logistics Calculator",
type:"INDIVIDUAL PROJECT",
role:"UI Developer & Algo Implementer",
tech:"HTML, Tailwind CSS, JavaScript",
time:"Semester 5 (Jul–Nov 2025)",
desc:[
"Developed logistics cost estimation tool for port cargo.",
"Calculated shipment cost using cargo weight parameters.",
"Designed web interface for logistics input values.",
"Automated calculations to improve logistics planning."
]
},

{
title:"Intrusion Detection System",
type:"INDIVIDUAL PROJECT",
role:"Data Analyst & ML Engineer",
tech:"Python, Flask, Random Forest, XGBoost",
time:"Semester 6 (Jan 2026 – Present)",
desc:[
"Developing ML based intrusion detection system.",
"Trained Random Forest and XGBoost models.",
"Created Flask dashboard for monitoring threats.",
"Improved detection accuracy using ensemble learning."
]
}

];


/* =========================
   PROJECT DESCRIPTION VIEW
========================= */

function showProject(i){

const p = projects[i];
const details = document.getElementById("projectDetails");

if(!details) return;

let list = "";

p.desc.forEach(point=>{
list += `<li>${point}</li>`;
});

details.innerHTML = `
<h3>${p.title}</h3>
<p><b>Technologies:</b> ${p.tech}</p>
<p><b>Timeline:</b> ${p.time}</p>
<p class="project-extra">
  <span class="project-type-text">Type: ${p.type}</span>
  <span class="project-role-text">Role: ${p.role}</span>
</p>
<ul>${list}</ul>
`;

}

function renderProjectList(){
  const list = document.getElementById("projectList");
  if(!list) return;

  let html = "";

  projects.forEach((p,index)=>{
    html += `
      <div class="project-card" onclick="showProject(${index}); highlightSkills(${index});">
        <div class="project-title">${p.title}</div>
        <div class="project-meta">
          <span class="project-badge project-role">${p.role}</span>
        </div>
      </div>
    `;
  });

  list.innerHTML = html;
}

renderProjectList();


/* =========================
   SKILL → PROJECT MAPPING
========================= */

const projectSkillMap=[

["C","Linked Lists","Arrays"],
["HTML","CSS","JavaScript","MySQL"],
["Flutter","PostgreSQL","Firebase"],
["Python","NumPy","Matplotlib","Flask"],
["HTML","CSS","JavaScript"],
["Python","Flask","RandomForest","XGBoost"]

];

function highlightSkills(projectIndex){

const skills = document.querySelectorAll(".skill");

skills.forEach(skill=>{
skill.classList.remove("active");
});

const usedSkills = projectSkillMap[projectIndex];

usedSkills.forEach(s => {

const el = document.querySelector(`[data-skill="${s}"]`);

if(el){
el.classList.add("active");
}

});

}


/* =========================
   TIMELINE CHART
========================= */

const timelineCanvas = document.getElementById("timeline");

if(timelineCanvas){

new Chart(timelineCanvas,{

type:"line",

data:{

labels:[
"2024 DS",
"2024 DBMS",
"2025 SE",
"2025 DM",
"2025 Web Tech",
"2026 ML"
],

datasets:[{

label:"Project Complexity",

data:[20,35,55,70,75,90],

borderColor:"#4df3ff",
backgroundColor:"rgba(77,243,255,0.15)",

pointRadius:6,
pointHoverRadius:14,
pointHitRadius:25,

pointBackgroundColor:"#ff007f",
pointBorderColor:"#ffffff",

pointHoverBackgroundColor:"#39ff14",

tension:0.4

}]

},

options:{

responsive:true,

interaction:{
mode:"nearest",
intersect:false
},

plugins:{
legend:{display:false},
tooltip:{
callbacks:{
label:function(context){

const info=[
"Flight Reservation System",
"Income Tax Calculator",
"Nutrimealo",
"Student Mark Analysis",
"Seaport Logistics Calculator",
"Intrusion Detection System"
];

return info[context.dataIndex];

}
}
}
},

scales:{
y:{display:false}
}

}

});

}


/* =========================
   SKILL RADAR CHART
========================= */

const radarCanvas = document.getElementById("skillRadar");

if(radarCanvas){
  new Chart(radarCanvas,{ 
    type:"radar",
    data:{
      labels:["Java","C","Linked Lists","Arrays","Python","HTML","CSS","JavaScript","MySQL","Flutter","PostgreSQL","Firebase","Flask","NumPy","Matplotlib","RandomForest","XGBoost"],
      datasets:[{
        label:"Skill Proficiency",
        data:[8,7,7,7,8,7,7,7,6,6,6,6,7,7,7,6,6],
        backgroundColor:"rgba(77,243,255,0.18)",
        borderColor:"#4df3ff",
        pointBackgroundColor:"#ff007f",
        pointBorderColor:"#ffffff",
        pointHoverBackgroundColor:"#39ff14",
        borderWidth:2,
        fill:true
      }]
    },
    options:{
      responsive:true,
      plugins:{
        legend:{
          display:true,
          labels:{
            color:"#ffffff"
          }
        }
      },
      elements:{
        line:{
          tension:0.3
        }
      },
      scales:{
        r:{
          angleLines:{
            color:"rgba(77,243,255,0.3)"
          },
          grid:{
            color:"rgba(77,243,255,0.25)"
          },
          pointLabels:{
            color:"#ffffff"
          },
          suggestedMin:0,
          suggestedMax:10,
          ticks:{
            color:"#a5ffff",
            display:false
          }
        }
      }
    }
  });
}


/* =========================
   FLOATING BACKGROUND
========================= */

const canvas = document.getElementById("bg");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ["<>","{}","[]","SQL","JS","PY"];
const particles = [];

for(let i=0;i<40;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
s:symbols[Math.floor(Math.random()*symbols.length)]
});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#4df3ff";
ctx.font="14px monospace";

particles.forEach(p=>{

ctx.fillText(p.s,p.x,p.y);

p.y += 0.3;

if(p.y > canvas.height) p.y = 0;

});

requestAnimationFrame(draw);

}

draw();

}