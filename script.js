const standings = [
  {team:'Hyundai Unicorns', g:0, w:0, l:0},
  {team:'Samsung Lions', g:0, w:0, l:0},
  {team:'KT wiz', g:0, w:0, l:0},
  {team:'Yakult Swallows', g:0, w:0, l:0}
];

const games = [
  {round:1, home:'Samsung Lions', away:'KT wiz'}, {round:1, home:'Yakult Swallows', away:'Hyundai Unicorns'},
  {round:2, home:'Hyundai Unicorns', away:'Samsung Lions'}, {round:2, home:'KT wiz', away:'Yakult Swallows'},
  {round:3, home:'KT wiz', away:'Hyundai Unicorns'}, {round:3, home:'Yakult Swallows', away:'Samsung Lions'},
  {round:4, home:'KT wiz', away:'Samsung Lions'}, {round:4, home:'Hyundai Unicorns', away:'Yakult Swallows'},
  {round:5, home:'Samsung Lions', away:'Hyundai Unicorns'}, {round:5, home:'Yakult Swallows', away:'KT wiz'},
  {round:6, home:'Hyundai Unicorns', away:'KT wiz'}, {round:6, home:'Samsung Lions', away:'Yakult Swallows'},
  {round:7, home:'KT wiz', away:'Samsung Lions'}, {round:7, home:'Hyundai Unicorns', away:'Yakult Swallows'},
  {round:8, home:'Samsung Lions', away:'Hyundai Unicorns'}, {round:8, home:'Yakult Swallows', away:'KT wiz'},
  {round:9, home:'Hyundai Unicorns', away:'KT wiz'}, {round:9, home:'Samsung Lions', away:'Yakult Swallows'},
  {round:10, home:'Samsung Lions', away:'KT wiz'}, {round:10, home:'Yakult Swallows', away:'Hyundai Unicorns'},
  {round:11, home:'Hyundai Unicorns', away:'Samsung Lions'}, {round:11, home:'KT wiz', away:'Yakult Swallows'},
  {round:12, home:'KT wiz', away:'Hyundai Unicorns'}, {round:12, home:'Yakult Swallows', away:'Samsung Lions'},
  {round:13, home:'KT wiz', away:'Samsung Lions'}, {round:13, home:'Hyundai Unicorns', away:'Yakult Swallows'},
  {round:14, home:'Samsung Lions', away:'Hyundai Unicorns'}, {round:14, home:'Yakult Swallows', away:'KT wiz'},
  {round:15, home:'Hyundai Unicorns', away:'KT wiz'}, {round:15, home:'Samsung Lions', away:'Yakult Swallows'},
  {round:16, home:'Samsung Lions', away:'KT wiz'}, {round:16, home:'Yakult Swallows', away:'Hyundai Unicorns'},
  {round:17, home:'Hyundai Unicorns', away:'Samsung Lions'}, {round:17, home:'KT wiz', away:'Yakult Swallows'},
  {round:18, home:'KT wiz', away:'Hyundai Unicorns'}, {round:18, home:'Yakult Swallows', away:'Samsung Lions'},
  {round:19, home:'Samsung Lions', away:'KT wiz'}, {round:19, home:'Yakult Swallows', away:'Hyundai Unicorns'},
  {round:20, home:'Hyundai Unicorns', away:'Samsung Lions'}, {round:20, home:'KT wiz', away:'Yakult Swallows'},
  {round:21, home:'KT wiz', away:'Hyundai Unicorns'}, {round:21, home:'Yakult Swallows', away:'Samsung Lions'},
  {round:22, home:'KT wiz', away:'Samsung Lions'}, {round:22, home:'Hyundai Unicorns', away:'Yakult Swallows'},
  {round:23, home:'Samsung Lions', away:'Hyundai Unicorns'}, {round:23, home:'Yakult Swallows', away:'KT wiz'},
  {round:24, home:'Hyundai Unicorns', away:'KT wiz'}, {round:24, home:'Samsung Lions', away:'Yakult Swallows'}
];

const teams = [
  {name:'Hyundai Unicorns', city:'HCBB', logo:'hyundai'},
  {name:'KT wiz', city:'HCBB', logo:'kt'},
  {name:'Samsung Lions', city:'HCBB', logo:'samsung'},
  {name:'Yakult Swallows', city:'HCBB', logo:'yakult'}
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
  document.querySelector('#teams-grid').innerHTML=teams.map(t=>{
    const logo = t.logo === 'yakult'
      ? `<img class="team-logo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20Yakult%20Swallows%20insignia.svg" alt="${t.name} logo">`
      : `<div class="team-logo team-logo-${t.logo}" aria-label="${t.name} logo"></div>`;
    return `<article class="team-card">${logo}<h3>${t.name}</h3><p>${t.city}</p></article>`;
  }).join('');
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
