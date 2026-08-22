const standings = [
  {team:'현대 유니콘스', g:0, w:0, l:0},
  {team:'삼성 라이온즈', g:0, w:0, l:0},
  {team:'케이티위즈', g:0, w:0, l:0},
  {team:'야쿠르트 스왈로즈', g:0, w:0, l:0}
];

// 경기 일정은 실제 HCBB KFB 리그 일정에 맞춰 추가할 수 있습니다.
const games = [];

const teams = [
  {name:'현대 유니콘스', city:'HCBB', short:'HU'},
  {name:'삼성 라이온즈', city:'HCBB', short:'SL'},
  {name:'케이티위즈', city:'HCBB', short:'KT'},
  {name:'야쿠르트 스왈로즈', city:'HCBB', short:'YS'}
];

function renderStandings(){
  const body=document.querySelector('#standings-body');
  body.innerHTML=standings.map((x,i)=>{
    const pct=x.g ? (x.w/x.g).toFixed(3).replace('0','') : '-';
    return `<tr><td class="rank">${i+1}</td><td class="team-name">${x.team}</td><td>${x.g}</td><td>${x.w}</td><td>${x.l}</td><td>${pct}</td></tr>`;
  }).join('');
}

function renderSchedule(){
  const list=document.querySelector('#schedule-list');
  if(!games.length){
    list.innerHTML='<div class="news-card"><span class="tag">SCHEDULE</span><h3>경기 일정 준비 중</h3><p>HCBB KFB 리그의 실제 경기 일정이 확정되면 이곳에 표시됩니다.</p></div>';
    return;
  }
  list.innerHTML=games.map(g=>`<article class="match"><div class="match-date">${g.date}</div><div class="match-teams"><span>${g.away}</span><span class="vs">VS</span><span>${g.home}</span></div><div class="match-status">${g.status}</div></article>`).join('');
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
