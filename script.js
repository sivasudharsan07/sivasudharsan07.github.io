/* ===================================================
   PRELOADER
=================================================== */
(function(){
  const preloader = document.getElementById('preloader');
  function hidePreloader(){
    if(preloader) preloader.classList.add('hidden');
  }
  // Hide after page fully loads, or after 1.8s max
  window.addEventListener('load', function(){
    setTimeout(hidePreloader, 500);
  });
  setTimeout(hidePreloader, 1800);
})();

/* ===================================================
   HEADER SCROLL EFFECT
=================================================== */
window.addEventListener('scroll',()=>{
  const h = document.getElementById('mainHeader');
  if(h) h.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===================================================
   MOBILE NAV TOGGLE
=================================================== */
function toggleNav(){
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('navOverlay');
  const open = nav.classList.toggle('open');
  btn.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  // prevent body scroll when nav is open
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeNav(){
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('navOverlay');
  nav.classList.remove('open');
  btn.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

// Close nav on resize to desktop
window.addEventListener('resize',()=>{
  if(window.innerWidth > 768) closeNav();
});


/* ===================================================
   TERMINAL LOADING EFFECT
=================================================== */
const loadingElement = document.getElementById('loadingText');
const terminalContent = document.getElementById('terminalContent');

const lines = [
  '> Initializing developer profile...',
  '> Loading user data...',
  '> Preparing system environment...',
  '> System ready.'
];
let lineIndex = 0;

function typeLine(){
  if(lineIndex < lines.length){
    loadingElement.innerHTML += lines[lineIndex] + '<br>';
    lineIndex++;
    setTimeout(typeLine, 500);
  } else {
    showAbout();
  }
}
typeLine();

function showAbout(){
  terminalContent.innerHTML = `
    <div class="terminal-section-title">> About Developer</div>
    <div class="terminal-1">Interests : Machine Learning | Full Stack Development | Cybersecurity</div>
    <div class="terminal-line">Passionate developer building intelligent software systems and data-driven applications.</div>
    <div class="terminal-line">Experienced in Python, Java, Flutter and modern web technologies with strong problem-solving skills.</div>
    <div class="terminal-line">Focused on applying ML, data analysis and software engineering to real-world problems.</div>
  `;
}

/* ===================================================
   PROJECT DATA
=================================================== */
const projects = [
  {
    title:'Flight Reservation System',
    type:'INDIVIDUAL PROJECT',
    role:'Developer',
    tech:'Linked Lists, Arrays, C',
    time:'Semester 2 (Jan–Jun 2024)',
    desc:[
      'Designed a flight reservation system using Data Structures.',
      'Implemented booking and seat allocation using linked lists.',
      'Handled passenger cancellation and dynamic seat updates.',
      'Optimized memory usage by combining arrays with linked lists.'
    ]
  },
  {
    title:'Income Tax Calculator',
    type:'TEAM PROJECT',
    role:'Frontend + Backend Developer',
    tech:'HTML, CSS, JavaScript, MySQL',
    time:'Semester 3 (Jul–Dec 2024)',
    desc:[
      'Built a web-based tax calculator for Indian tax slabs.',
      'Implemented stored procedures and functions in MySQL.',
      'Designed responsive UI using HTML, CSS and JavaScript.',
      'Enabled automatic tax computation based on salary input.'
    ]
  },
  {
    title:'Nutrimealo',
    type:'TEAM PROJECT',
    role:'System Architect',
    tech:'Flutter, PostgreSQL, Firebase',
    time:'Semester 4 (Jan–May 2025)',
    desc:[
      'Developed a cross-platform nutrition tracking mobile app.',
      'Implemented authentication using Firebase.',
      'Designed PostgreSQL database for meal and nutrition data.',
      'Added weekly meal plan and grocery list generation.'
    ]
  },
  {
    title:'Student Mark Analysis',
    type:'TEAM PROJECT',
    role:'Data Analyst & Frontend Developer',
    tech:'Python, NumPy, Matplotlib, Flask',
    time:'Semester 5 (Jul–Nov 2025)',
    desc:[
      'Performed academic data analysis using Python.',
      'Processed datasets using NumPy for statistical insights.',
      'Visualized performance trends using Matplotlib graphs.',
      'Built Flask web interface for displaying analysis results.'
    ]
  },
  {
    title:'Seaport Logistics Calculator',
    type:'INDIVIDUAL PROJECT',
    role:'UI Developer & Algo Implementer',
    tech:'HTML, Tailwind CSS, JavaScript',
    time:'Semester 5 (Jul–Nov 2025)',
    desc:[
      'Developed logistics cost estimation tool for port cargo.',
      'Calculated shipment cost using cargo weight parameters.',
      'Designed web interface for logistics input values.',
      'Automated calculations to improve logistics planning.'
    ]
  },
  {
    title:'Intrusion Detection System',
    type:'INDIVIDUAL PROJECT',
    role:'Data Analyst & ML Engineer',
    tech:'Python, Flask, Random Forest, XGBoost',
    time:'Semester 6 (Jan 2026 – Present)',
    desc:[
      'Developing ML-based hybrid intrusion detection system.',
      'Trained Random Forest and XGBoost ensemble models.',
      'Created Flask dashboard for real-time threat monitoring.',
      'Improved detection accuracy using ensemble learning.'
    ]
  }
];

/* ===================================================
   SHOW PROJECT DETAILS
=================================================== */
function showProject(i){
  const p = projects[i];
  const details = document.getElementById('projectDetails');
  if(!details) return;

  // Mark active card
  document.querySelectorAll('.project-card').forEach((c,idx)=>{
    c.classList.toggle('active', idx === i);
  });

  let list = '';
  p.desc.forEach(pt=>{ list += `<li>${pt}</li>`; });

  details.innerHTML = `
    <h3>${p.title}</h3>
    <p class="project-extra">
      <span class="project-type-text">Type: ${p.type}</span>
      <span class="project-role-text">Role: ${p.role}</span>
    </p>
    <p><b>Technologies:</b> ${p.tech}</p>
    <p><b>Timeline:</b> ${p.time}</p>
    <ul>${list}</ul>
  `;
}

function renderProjectList(){
  const list = document.getElementById('projectList');
  if(!list) return;
  let html = '';
  projects.forEach((p,index)=>{
    html += `
      <div class="project-card" id="proj-card-${index}" onclick="showProject(${index});">
        <div class="project-title">${p.title}</div>
        <div class="project-meta">
          <span class="project-badge">${p.role}</span>
        </div>
      </div>
    `;
  });
  list.innerHTML = html;
}
renderProjectList();

/* ===================================================
   SKILL → PROJECT MAPPING
=================================================== */
const projectSkillMap = [
  ['C','Linked Lists','Arrays'],
  ['HTML','CSS','JavaScript','MySQL'],
  ['Flutter','PostgreSQL','Firebase'],
  ['Python','NumPy','Matplotlib','Flask'],
  ['HTML','CSS','JavaScript'],
  ['Python','Flask','RandomForest','XGBoost']
];

function setActiveMapProject(el){
  document.querySelectorAll('.map-project').forEach(m=> m.classList.remove('active-map'));
  el.classList.add('active-map');
}

function highlightSkills(projectIndex){
  document.querySelectorAll('.skill').forEach(s=> s.classList.remove('active'));
  const used = projectSkillMap[projectIndex];
  used.forEach(s=>{
    const el = document.querySelector(`[data-skill="${s}"]`);
    if(el) el.classList.add('active');
  });
}

/* ===================================================
   TIMELINE CHART (with background)
=================================================== */
const timelineCanvas = document.getElementById('timeline');
if(timelineCanvas){
  new Chart(timelineCanvas,{
    type:'line',
    data:{
      labels:['2024 DS','2024 DBMS','2025 SE','2025 DM','2025 Web Tech','2026 ML'],
      datasets:[{
        label:'Project Complexity',
        data:[20,35,55,70,75,90],
        borderColor:'#4df3ff',
        backgroundColor:'rgba(77,243,255,0.12)',
        pointRadius:7,
        pointHoverRadius:12,
        pointBackgroundColor:'#ff007f',
        pointBorderColor:'#ffffff',
        pointBorderWidth:2,
        pointHoverBackgroundColor:'#39ff14',
        fill:true,
        tension:0.4
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{mode:'nearest',intersect:false},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(7,9,15,0.9)',
          borderColor:'rgba(77,243,255,0.4)',
          borderWidth:1,
          titleColor:'#4df3ff',
          bodyColor:'#fff',
          callbacks:{
            label:function(ctx){
              const info=['Flight Reservation System','Income Tax Calculator','Nutrimealo','Student Mark Analysis','Seaport Logistics Calculator','Intrusion Detection System'];
              return '  ' + info[ctx.dataIndex];
            },
            title:function(ctx){ return 'Complexity: ' + ctx[0].raw + '/100'; }
          }
        }
      },
      scales:{
        x:{
          grid:{color:'rgba(77,243,255,0.08)'},
          ticks:{color:'#6b7a8d',font:{size:11}}
        },
        y:{
          grid:{color:'rgba(77,243,255,0.08)'},
          ticks:{color:'#6b7a8d',font:{size:11}},
          suggestedMin:0,
          suggestedMax:100
        }
      }
    }
  });
}

/* ===================================================
   SKILL RADAR CHART (with background)
=================================================== */
function initSkillRadar(){
  const radarCanvas = document.getElementById('skillRadar');
  if(!radarCanvas) return;

  new Chart(radarCanvas,{
    type:'radar',
    data:{
      labels:['Java','C','Linked Lists','Arrays','Python','HTML','CSS','JavaScript','MySQL','Flutter','PostgreSQL','Firebase','Flask','NumPy','Matplotlib','RandomForest','XGBoost'],
      datasets:[{
        label:'Skill Proficiency',
        data:[8,7,7,7,9,7,7,8,6,6,6,6,7,7,7,7,7],
        backgroundColor:'rgba(77,243,255,0.12)',
        borderColor:'#4df3ff',
        pointBackgroundColor:'#ff007f',
        pointBorderColor:'#fff',
        pointHoverBackgroundColor:'#39ff14',
        borderWidth:2,
        fill:true
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{
          display:true,
          labels:{color:'#a0b4c8',font:{size:11}}
        },
        tooltip:{
          backgroundColor:'rgba(7,9,15,0.9)',
          borderColor:'rgba(77,243,255,0.4)',
          borderWidth:1,
          titleColor:'#4df3ff',
          bodyColor:'#fff'
        }
      },
      scales:{
        r:{
          angleLines:{color:'rgba(77,243,255,0.2)'},
          grid:{color:'rgba(77,243,255,0.15)'},
          pointLabels:{color:'#a0b4c8',font:{size:11}},
          suggestedMin:0,
          suggestedMax:10,
          ticks:{color:'#4df3ff',font:{size:9},backdropColor:'rgba(7,9,15,0.7)',stepSize:2}
        }
      }
    }
  });
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initSkillRadar);
}else{
  initSkillRadar();
}

/* ===================================================
   FLOATING BACKGROUND CANVAS
=================================================== */
const canvas = document.getElementById('bg');
if(canvas){
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const symbols = ['<>','{}','[]','SQL','JS','PY','ML','AI','⬡','//'];
  const particles = [];

  for(let i=0; i<50; i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      s: symbols[Math.floor(Math.random()*symbols.length)],
      speed: 0.15 + Math.random()*0.25,
      opacity: 0.06 + Math.random()*0.08,
      size: 10 + Math.random()*6
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = '#4df3ff';
      ctx.font = `${p.size}px monospace`;
      ctx.fillText(p.s, p.x, p.y);
      p.y += p.speed;
      if(p.y > canvas.height + 20) p.y = -20;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}