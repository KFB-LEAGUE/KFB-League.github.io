// KFB League - Supabase player database
const KFB_SUPABASE_URL = 'https://kkkmnzviokuvulvyqjkz.supabase.co';
const KFB_SUPABASE_KEY = 'sb_publishable_M_vzBQ9Dcby_4M9cu3A-4g_zh1EIVN8';

async function loadKfbPlayers() {
  try {
    const url = `${KFB_SUPABASE_URL}/rest/v1/player_stats?select=*`;
    const response = await fetch(url, {
      headers: {
        apikey: KFB_SUPABASE_KEY,
        Authorization: `Bearer ${KFB_SUPABASE_KEY}`
      }
    });
    if (!response.ok) {
      console.error('KFB player DB error:', response.status, await response.text());
      window.kfbDbPlayers = {};
      return;
    }
    const rows = await response.json();
    const players = {};
    rows.forEach(row => {
      if (row.player_name) players[row.player_name] = row;
    });
    window.kfbDbPlayers = players;
    if (typeof renderPlayers === 'function') {
      const input = document.querySelector('#player-search-input');
      renderPlayers(input ? input.value : '');
    }
  } catch (error) {
    console.error('KFB player DB connection failed:', error);
    window.kfbDbPlayers = {};
  }
}

window.kfbDbPlayers = {};
loadKfbPlayers();
