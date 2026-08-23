document.addEventListener('DOMContentLoaded', () => {
  const overrides = {
    'Samsung Lions': {
      preSign: ['mico24524'],
      am: ['mico24524', 'Ak1Kurai', 'NOOB_dghm']
    },
    'Hyundai Unicorns': {
      preSign: ['ShiroaDoll'],
      am: ['ShiroaDoll', 'nicemanman_1', 'wakashizz']
    },
    'KT wiz': {
      preSign: ['Jeongliarz'],
      am: ['Jeongliarz', 'BaIemoon', 'YutaNalDo']
    },
    'Yakult Swallows': {
      preSign: ['blaxkstra_a'],
      am: ['1Lov3_Darin', 'DANA_X1126', 'blaxkstra_a']
    }
  };

  document.querySelectorAll('.roster-card').forEach(card => {
    const title = card.querySelector('h3')?.textContent.trim();
    const data = overrides[title];
    if (!data) return;

    const staff = card.querySelector('.roster-staff');
    if (!staff) return;

    const rows = [];
    data.preSign.forEach(name => rows.push(`<div class="roster-row staff-row"><span>Pre-sign</span><strong>${name}</strong><em></em></div>`));
    data.am.forEach(name => rows.push(`<div class="roster-row staff-row"><span>AM</span><strong>${name}</strong><em></em></div>`));
    staff.innerHTML = rows.join('');
  });
});
