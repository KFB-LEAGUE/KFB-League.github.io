async function loadKfbPlayerStats(){
  const root=document.querySelector('#player-results');
  if(!root||!window.KFB_SUPABASE_URL)return;
  const client=window.supabase.createClient(window.KFB_SUPABASE_URL,window.KFB_SUPABASE_KEY);
  const {data,error}=await client.from('player_game_stats').select('*').order('created_at',{ascending:true});
  if(error){root.innerHTML='<div class="player-empty"><strong>Player stats database is not ready yet.</strong><span>Please finish the Supabase table setup.</span></div>';return;}
  const grouped={};
  (data||[]).forEach(r=>{const a=grouped[r.player]||(grouped[r.player]={games:0,pa:0,ab:0,h:0,doubles:0,triples:0,hr:0,rbi:0,bb:0,so:0,team:r.team});a.games++;['pa','ab','h','doubles','triples','hr','rbi','bb','so'].forEach(k=>a[k]+=Number(r[k])||0);});
  window.KFB_DB_PLAYER_STATS=grouped;
  if(typeof renderPlayers==='function')renderPlayers(document.querySelector('#player-search-input')?.value||'');
}
loadKfbPlayerStats();