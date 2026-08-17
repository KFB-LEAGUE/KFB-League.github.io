const standings = [
  {team:'KFB Tigers', g:8, w:7, l:1},
  {team:'Seoul Bears', g:8, w:6, l:2},
  {team:'Incheon Eagles', g:8, w:4, l:4},
  {team:'Busan Waves', g:8, w:3, l:5},
  {team:'Daejeon Hawks', g:8, w:2, l:6},
  {team:'Gyeonggi Giants', g:8, w:2, l:6}
];

const games = [
  {date:'08.22 (토) 18:00', home:'KFB Tigers', away:'Seoul Bears', status:'예정'},
  {date:'08.23 (일) 14:00', home:'Incheon Eagles', away:'Busan Waves', status:'예정'},
  {date:'08.23 (일) 18:00', home:'Daejeon Hawks', away:'Gyeonggi Giants', status:'예정'}
];

const teams = [
  {name:'KFB Tigers', city:'서울', short:'KT'},
  {name:'Seoul Bears', city:'서울', short:'SB'},
  {name:'Incheon Eagles', city:'인천', short:'IE'},
  {name:'Busan Waves', city:'부산', short:'BW'},
  {name:'Daejeon Hawks', city:'대전', short:'DH'},
  {name:'Gyeonggi Giants', city:'경기', short:'GG'}
];

function renderStandings(){
  const body=document.querySelector('#standings-body');
  body.innerHTML=standings.map((x,i)=>{
    const pct=(x.w/x.g).toFixed(3).replace('0.','.')
    return `<tr><td class="rank">${i+1}</td><td class="team-name">${x.team}</td><td>${x.g}</td><td>${x.w}</td><td>${x.l}</td><td>${pct}</td></tr>`;
  }).join('');
}

function renderSchedule(){
  document.querySelector('#schedule-list').innerHTML=games.map(g=>`<article class="match"><div class="match-date">${g.date}</div><div class="match-teams"><span>${g.away}</span><span class="vs">VS</span><span>${g.home}</span></div><div class="match-status">${g.status}</div></article>`).join('');
}

function renderTeams(){
  document.querySelector('#teams-grid').innerHTML=teams.map(t=>`<article class="team-card"><div class="team-logo">${t.short}</div><h3>${t.name}</h3><p>${t.city}</p></article>`).join('');
}

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
renderStandings();
renderSchedule();
renderTeams();
