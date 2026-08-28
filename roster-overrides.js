// KFB League roster data
// Managed through the Admin panel.
const KFB_ROSTERS = {
  "Yakult Swallows": { pm: ["700GoldenChroma"], preSign: ["blaxkstra_a"], players: ["xck018","VorZaves","owldoskq","kosame55","1Lov3_HW","woozlordd","1Lov3_Doy0un9","ANYWAY789","ggkkbt21","Akon_kon","hamzziiiii","DANA_X1126","ShaltNK","dddfdsfc","Cola_1034657","1Lov3_Dar1n","bad_d0lphin","willie06080","youdam2001","0X_Perfect","qwweush","gjffhthhf","tsnsjjssjjd","ehvshbvf","arczonas","KooChangMo_59"] },
  "KT wiz": { pm: ["L_mipr"], preSign: ["Jeongliarz"], players: ["BaIemoon","Rozu_1x","Gre4n_Love","CUTI_STREET","imnotswomwi3 ","rayray24257978","kyota_kana","KOREA_goodgubber","YutaNaldo","Insanetricx","heerak2","sy_adi","ddnwwagefd9991","yu_x0412","H1n_Lx5h","sa1vationtrinty","kiabojiz","imgodkaito","EIL1sBack","JerryEEENTNL","Sam0705_Sam0705","domickey16","TheYoungKing_N05","sonpensj956"] },
  "Hyundai Unicorns": { pm: ["uwiqojaiwkibzi"], preSign: ["ShiroaDoll"], players: ["ho_0xz","wakashizz","nicemanman_1","xxsks_ekw","mandoo_19","klk122380","X_csm","ksmzsm123","Mylovesk62","apexghte","RxitoVII","Q_LDL","hwgahw76","graa_nice","djhxjffj0","STINSONA","npm_apple","JS13416","KRsungjae","1ee_youngchan","splint111","kingkueen0s","needam0721","OREO_5744","KimDoYoung_Good","1Lov3_donghee"] },
  "Samsung Lions": { pm: ["pistol0172"], preSign: ["mico24524"], players: ["Ak1Kurai","NOOB_dghm","jongpyokurai","cool327000","kgimpepepspepe","AdenElec","FINX_Z7","terry0185","GAEQ_74HRUE","koreahom123467","dex1va1ly","Kevin707952","ezgame0303","demon_091033","12twelve25","chosankru39","WgoodS1un_n1cegoodz","s9sdsei","kaname030844","tttttttrrrtttttttt","10wjwdgha","dgshjgdj","SHJBMV","aofo5934","Ua82222","gorsky7"] }
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
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderKfbRosters); else renderKfbRosters();
