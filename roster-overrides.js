// KFB League roster data
// Player + PM + Pre-sign. Each team has one pre-sign player.
const KFB_ROSTERS = {
  'Yakult Swallows': { pm: ['700GoldenChroma'], preSign: ['blaxkstra_a'], players: ['xck018','VorZaves','owldoskq','kosame55','1Lov3_HW','woozlordd','1Lov3_Doy0un9','ANYWAY789','hamzziii','ggkkbt21','Akon_Kon','1Lov3_Darin','DANA_X1126','ShaltNK','dddfdsfc','Cola_1034657','willie06080','youdam2001','0X_Perfect','ghffhthhf','qwweush','gorsky7'] },
  'KT wiz': { pm: ['L_mipr'], preSign: ['Jeongliarz'], players: ['BaIemoon','Rozu_1x','Gre4n_Love','CUTI_STREET','jongpyokurai','terry0185','rayray24257978','kyota_kana','ncd1nos','KOREA_goodgubber','JerryEEENTNL','Sam0705_Sam0705','YutaNalDo','heerak2','sy_adi','ddnwwagefd9991','yu_x0412','sa1vationtrinity','kiabojiz','imgodkaito','H1n_Lx5h','Insanetricx','EIL1sback'] },
  'Hyundai Unicorns': { pm: ['uwiqojaiwkibzi'], preSign: ['ShiroaDoll'], players: ['ho_0xz','wakashizz','nicemanman_1','xxsks_ekw','mandoo_19','klk122380','X_csm','ksmzsm123','Mylovesk62','apexghte','RxitoVII','Q_LDL','hwgahw76','graa_nice','Yoongichan0902','djhxjffj0','STINSONA','npm_apple','KRsungjae','JS13416','KimDoYoung_Good','kingkueen0s','OREO_5744','1ee_youngchan','needam0721','splint111','1Lov3_donghee','SHJBMV'] },
  'Samsung Lions': { pm: ['pistol0172'], preSign: ['mico24524'], players: ['Ak1Kurai','NOOB_dghm','imnotswomi3','cool327000','kgimpepepspepe','AdenElec','FINX_Z7','TheYoungKing_N05','GAEQ_74HRUE','koreahom123467','sdy131221','dex1va1ly','crvhjc','EZEZEZoqo','Kevin707952','ezgame0303','demon_091033','Acthdfgvj','12twelve25','chosankru39','WgoodS1un_n1cegoodz','s9sdsei','kaname030844','tttttttrrrtttttttt','qqedcjdxcg','woojin_0503','10wjwdgha','dgshjgdj'] }
};

function renderKfbRosters() {
  const root = document.querySelector('#rosters-grid');
  if (!root) return;
  root.innerHTML = Object.entries(KFB_ROSTERS).map(([team, data]) => {
    const pmRows = (data.pm || []).map(name => `<div class="roster-row staff-row"><span>PM</span><strong>${name}</strong><em></em></div>`).join('');
    const preSignRows = (data.preSign || []).map(name => `<div class="roster-row staff-row"><span>Pre-sign</span><strong>${name}</strong><em></em></div>`).join('');
    const playerRows = data.players.map((name, i) => `<div class="roster-row"><span>${i + 1}</span><strong>${name}</strong><em></em></div>`).join('');
    return `<article class="roster-card"><div class="roster-card-header"><h3>${team}</h3></div><div class="roster-staff">${pmRows}${preSignRows}${playerRows}</div></article>`;
  }).join('');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderKfbRosters);
else renderKfbRosters();
