const KFB_SUPABASE_URL = 'https://kkkmnzviokuvulvyqjkz.supabase.co';
const KFB_SUPABASE_KEY = 'sb_publishable_M_vzBQ9Dcby_4M9cu3A-4g_zh1EIVN8';

async function loadKfbPlayerStatsFromSupabase() {
  try {
    const res = await fetch(`${KFB_SUPABASE_URL}/rest/v1/player_stats?select=*`, {
      headers: {
        apikey: KFB_SUPABASE_KEY,
        Authorization: `Bearer ${KFB_SUPABASE_KEY}`
      }
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);

    const rows = await res.json();
    const dbPlayers = {};
    rows.forEach(row => {
      if (!row.player_name) return;
      dbPlayers[row.player_name] = {
        team: row.team || '',
        gp: Number(row.games) || 0,
        pa: 0,
        ab: Number(row.games) ? 0 : 0,
        h: Number(row.hits) || 0,
        doubles: 0,
        triples: 0,
        hr: Number(row.home_runs) || 0,
        rbi: Number(row.rbi) || 0,
        bb: 0,
        so: 0,
        batting_avg: row.batting_avg,
        stolen_bases: Number(row.stolen_bases) || 0,
        wins: Number(row.wins) || 0,
        era: row.era
      };
    });

    window.kfbDbPlayers = dbPlayers;
    if (typeof renderPlayers === 'function') renderPlayers(document.querySelector('#player-search-input')?.value || '');
  } catch (error) {
    console.error('KFB Supabase player_stats error:', error);
  }
}

loadKfbPlayerStatsFromSupabase();
