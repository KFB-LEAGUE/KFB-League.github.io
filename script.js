const standings = [
  {team:'현대 유니콘스', g:0, w:0, l:0},
  {team:'삼성 라이온즈', g:0, w:0, l:0},
  {team:'케이티위즈', g:0, w:0, l:0},
  {team:'야쿠르트 스왈로즈', g:0, w:0, l:0}
];

const games = [
  {round:1, home:'삼성 라이온즈', away:'케이티위즈'},
  {round:1, home:'야쿠르트 스왈로즈', away:'현대 유니콘스'},
  {round:2, home:'현대 유니콘스', away:'삼성 라이온즈'},
  {round:2, home:'케이티위즈', away:'야쿠르트 스왈로즈'},
  {round:3, home:'케이티위즈', away:'현대 유니콘스'},
  {round:3, home:'야쿠르트 스왈로즈', away:'삼성 라이온즈'},
  {round:4, home:'케이티위즈', away:'삼성 라이온즈'},
  {round:4, home:'현대 유니콘스', away:'야쿠르트 스왈로즈'},
  {round:5, home:'삼성 라이온즈', away:'현대 유니콘스'},
  {round:5, home:'야쿠르트 스왈로즈', away:'케이티위즈'},
  {round:6, home:'현대 유니콘스', away:'케이티위즈'},
  {round:6, home:'삼성 라이온즈', away:'야쿠르트 스왈로즈'},
  {round:7, home:'케이티위즈', away:'삼성 라이온즈'},
  {round:7, home:'현대 유니콘스', away:'야쿠르트 스왈로즈'},
  {round:8, home:'삼성 라이온즈', away:'현대 유니콘스'},
  {round:8, home:'야쿠르트 스왈로즈', away:'케이티위즈'},
  {round:9, home:'현대 유니콘스', away:'케이티위즈'},
  {round:9, home:'삼성 라이온즈', away:'야쿠르트 스왈로즈'},
  {round:10, home:'삼성 라이온즈', away:'케이티위즈'},
  {round:10, home:'야쿠르트 스왈로즈', away:'현대 유니콘스'},
  {round:11, home:'현대 유니콘스', away:'삼성 라이온즈'},
  {round:11, home:'케이티위즈', away:'야쿠르트 스왈로즈'},
  {round:12, home:'케이티위즈', away:'현대 유니콘스'},
  {round:12, home:'야쿠르트 스왈로즈', away:'삼성 라이온즈'},
  {round:13, home:'케이티위즈', away:'삼성 라이온즈'},
  {round:13, home:'현대 유니콘스', away:'야쿠르트 스왈로즈'},
  {round:14, home:'삼성 라이온즈', away:'현대 유니콘스'},
  {round:14, home:'야쿠르트 스왈로즈', away:'케이티위즈'},
  {round:15, home:'현대 유니콘스', away:'케이티위즈'},
  {round:15, home:'삼성 라이온즈', away:'야쿠르트 스왈로즈'},
  {round:16, home:'삼성 라이온즈', away:'케이티위즈'},
  {round:16, home:'야쿠르트 스왈로즈', away:'현대 유니콘스'},
  {round:17, home:'현대 유니콘스', away:'삼성 라이온즈'},
  {round:17, home:'케이티위즈', away:'야쿠르트 스왈로즈'},
  {round:18, home:'케이티위즈', away:'현대 유니콘스'},
  {round:18, home:'야쿠르트 스왈로즈', away:'삼성 라이온즈'},
  {round:19, home:'삼성 라이온즈', away:'케이티위즈'},
  {round:19, home:'야쿠르트 스왈로즈', away:'현대 유니콘스'},
  {round:20, home:'현대 유니콘스', away:'삼성 라이온즈'},
  {round:20, home:'케이티위즈', away:'야쿠르트 스왈로즈'},
  {round:21, home:'케이티위즈', away:'현대 유니콘스'},
  {round:21, home:'야쿠르트 스왈로즈', away:'삼성 라이온즈'},
  {round:22, home:'케이티위즈', away:'삼성 라이온즈'},
  {round:22, home:'현대 유니콘스', away:'야쿠르트 스왈로즈'},
  {round:23, home:'삼성 라이온즈', away:'현대 유니콘스'},
  {round:23, home:'야쿠르트 스왈로즈', away:'케이티위즈'},
  {round:24, home:'현대 유니콘스', away:'케이티위즈'},
  {round:24, home:'삼성 라이온즈', away:'야쿠르트 스왈로즈'}
];

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
  const rounds=[...new Set(games.map(g=>g.round))];
  list.innerHTML=rounds.map(round=>{
    const roundGames=games.filter(g=>g.round===round);
    return `<div class="schedule-round"><h3>Round ${round}</h3>${roundGames.map(g=>`<article class="match"><div class="match-teams"><span>${g.away}</span><span class="vs">@</span><span>${g.home}</span></div><div class="match-status">예정</div></article>`).join('')}</div>`;
  }).join('');
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
