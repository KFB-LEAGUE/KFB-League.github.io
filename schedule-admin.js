/* KFB League - stable schedule admin controls */
(function(){
  function setup(){
    const add=document.getElementById('add-notice');
    const save=document.getElementById('save-notices');
    if(!add) return;
    add.onclick=async function(){
      const date=document.getElementById('notice-date')?.value || '';
      const title=document.getElementById('notice-title')?.value.trim() || '';
      const time=document.getElementById('notice-time')?.value || '';
      const match=document.getElementById('notice-match')?.value.trim() || '';
      const content=document.getElementById('notice-content')?.value.trim() || '';
      const status=document.getElementById('notice-status');
      if(!date || !title || !match){ if(status) status.textContent='날짜, 공지 제목, 경기 내용을 모두 입력하세요.'; return; }
      notices.push({date,time,title,match,content});
      renderNotices();
      if(status) status.textContent='경기 공지를 추가했습니다. 저장 버튼을 눌러 GitHub에 반영하세요.';
      ['notice-date','notice-title','notice-time','notice-match','notice-content'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
    };
    if(save) save.onclick=async function(){
      await saveNotices();
    };
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup); else setup();
})();
