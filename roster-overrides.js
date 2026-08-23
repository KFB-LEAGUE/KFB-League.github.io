// KFB League roster data
const KFB_ROSTERS = {
  'Samsung Lions': { preSign: ['mico24524'], am: ['mico24524', 'Ak1Kurai', 'NOOB_dghm'] },
  'Hyundai Unicorns': { preSign: ['ShiroaDoll'], am: ['ShiroaDoll', 'nicemanman_1', 'wakashizz'] },
  'KT wiz': { preSign: ['Jeongliarz'], am: ['Jeongliarz', 'BaIemoon', 'YutaNalDo'] },
  'Yakult Swallows': { preSign: ['blaxkstra_a'], am: ['1Lov3_Darin', 'DANA_X1126', 'blaxkstra_a'] }
};

function renderKfbRosters() {
  const root = document.querySelector('#rosters-grid');
  if (!root) return;
  root.innerHTML = Object.entries(KFB_ROSTERS).map(([team, data]) => {
    const rows = [
      ...data.preSign.map(name => `<div class="roster-row staff-row"><span>Pre-sign</span><strong>${name}</strong><em></em></div>`),
      ...data.am.map(name => `<div class="roster-row staff-row"><span>AM</span><strong>${name}</strong><em></em></div>`)
    ].join('');
    return `<article class="roster-card"><div class="roster-card-header"><h3>${team}</h3></div><div class="roster-staff">${rows}</div></article>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderKfbRosters);
if (document.readyState !== 'loading') renderKfbRosters();
