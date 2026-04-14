// DATA is loaded from data.js
const R=v=>v!=null&&v>0?v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}):'—';
const D=s=>{if(!s)return'—';const[y,m,d]=s.split('-');return`${d}/${m}/${y}`};
const S=v=>`<span class="${v?'sim':'nao'}">${v?'Sim':'Não'}</span>`;
const BR={'Procedente':'b-pt','Improcedente':'b-im','Arquivado':'b-ar','Ativo - Sem informação de sentença':'b-ea'};
const bdg=(c,t)=>`<span class="b ${c}">${t}</span>`;
let sortKey='numero_processo',sortAsc=true,page=0;
const PAGE_SIZE=200;

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('hdrDate').textContent='Gerado em: '+new Date().toLocaleDateString('pt-BR');
  const fases=[...new Set(DATA.map(p=>p.fase_atual))].sort();
  fases.forEach(f=>{document.getElementById('sFase').innerHTML+=`<option>${f}</option>`});
  const mats=[...new Set(DATA.map(p=>p.materia))].sort();
  mats.forEach(m=>{document.getElementById('sMat').innerHTML+=`<option>${m}</option>`});
  renderKPIs(DATA);
  renderCharts(DATA);
  renderTable(DATA);
  ['srch','sFase','sRes','sMat'].forEach(id=>document.getElementById(id).addEventListener('input',update));
  document.getElementById('btnPrev').addEventListener('click',()=>{page=Math.max(0,page-1);renderTable(filtered())});
  document.getElementById('btnNext').addEventListener('click',()=>{page++;renderTable(filtered())});
});

function filtered(){
  const s=document.getElementById('srch').value.toLowerCase();
  const f=document.getElementById('sFase').value;
  const r=document.getElementById('sRes').value;
  const m=document.getElementById('sMat').value;
  return DATA.filter(p=>{
    if(s&&!`${p.numero_processo} ${p.reclamante} ${p.reclamadas} ${p.cumprimento_sentenca||''}`.toLowerCase().includes(s))return false;
    if(f&&p.fase_atual!==f)return false;
    if(r&&p.resultado!==r)return false;
    if(m&&p.materia!==m)return false;
    return true;
  }).sort((a,b)=>{
    let va=a[sortKey]??'',vb=b[sortKey]??'';
    if(typeof va==='boolean'){va=va?1:0;vb=vb?1:0}
    return va<vb?(sortAsc?-1:1):va>vb?(sortAsc?1:-1):0;
  });
}

function update(){page=0;const d=filtered();renderKPIs(d);renderTable(d)}
function srt(k){sortKey===k?sortAsc=!sortAsc:(sortKey=k,sortAsc=true);update()}

function renderKPIs(d){
  document.getElementById('kTotal').textContent=d.length;
  document.getElementById('kValor').textContent=R(d.reduce((s,p)=>s+(p.valor_est||0),0));
  const com=d.filter(p=>p.resultado==='Procedente'||p.resultado==='Improcedente');
  const proc=com.filter(p=>p.resultado==='Procedente').length;
  document.getElementById('kProc').textContent=com.length?Math.round(proc/com.length*100)+'%':'—';
  const tj=d.filter(p=>p.transito_julgado).length;
  document.getElementById('kTJ').textContent=`${tj} (${d.length?Math.round(tj/d.length*100):0}%)`;
}

function renderCharts(d){
  const COLS=['#F2A900','#D28B00','#373A36','#7A7670','#B0ADA7','#E0DDD8','#C8C5BF'];
  const res={'Procedente':0,'Improcedente':0,'Arquivado':0,'Ativo - Sem informação de sentença':0};
  d.forEach(p=>{if(res[p.resultado]!==undefined)res[p.resultado]++});
  new Chart(document.getElementById('cResultado'),{type:'doughnut',
    data:{labels:Object.keys(res),datasets:[{data:Object.values(res),backgroundColor:['#2E7D32','#C62828','#7A7670','#1565C0'],borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:8}}}}});

  const fases={};d.forEach(p=>{fases[p.fase_atual]=(fases[p.fase_atual]||0)+1});
  const fs=Object.entries(fases).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('cFase'),{type:'bar',
    data:{labels:fs.map(f=>f[0]),datasets:[{data:fs.map(f=>f[1]),backgroundColor:'#373A36',borderRadius:5}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}});

  const recs={};d.forEach(p=>{recs[p.reclamadas]=(recs[p.reclamadas]||0)+1});
  const rs=Object.entries(recs).sort((a,b)=>b[1]-a[1]).slice(0,7);
  new Chart(document.getElementById('cReclamadas'),{type:'bar',
    data:{labels:rs.map(r=>r[0]),datasets:[{data:rs.map(r=>r[1]),backgroundColor:'#F2A900',borderRadius:5}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{beginAtZero:true}}}});

  const mats={};d.forEach(p=>{mats[p.materia]=(mats[p.materia]||0)+1});
  const ms=Object.entries(mats).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('cMaterias'),{type:'doughnut',
    data:{labels:ms.map(m=>m[0]),datasets:[{data:ms.map(m=>m[1]),backgroundColor:COLS,borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:8}}}}});
}

function renderTable(d){
  const total=d.length;
  const totalPages=Math.ceil(total/PAGE_SIZE)||1;
  page=Math.min(page,totalPages-1);
  const slice=d.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE);
  document.getElementById('tCount').textContent=`${total} processo${total!==1?'s':''}${totalPages>1?` — pág. ${page+1}/${totalPages}`:''}`;
  document.getElementById('tBody').innerHTML=slice.map(p=>`<tr>
    <td class="mono">${p.numero_processo}</td>
    <td class="mono">${p.cumprimento_sentenca||'—'}</td>
    <td>${p.reclamante}</td><td>${p.reclamadas}</td>
    <td>${S(p.sentenca)}</td><td>${S(p.acordao)}</td><td>${S(p.transito_julgado)}</td>
    <td>${bdg('b-f',p.fase_atual)}</td>
    <td>${D(p.ultima_mov)}</td>
    <td>${bdg(BR[p.resultado]||'b-ar',p.resultado)}</td>
    <td class="r">${R(p.valor_est)}</td>
    <td>${S(p.calculos)}</td><td>${S(p.calc_hom)}</td>
    <td class="r">${R(p.vlr_hom)}</td>
    <td class="r">${R(p.vlr_inc)}</td>
    <td>${p.materia}</td>
  </tr>`).join('');
  document.getElementById('btnPrev').disabled=page===0;
  document.getElementById('btnNext').disabled=page>=totalPages-1;
}

function exportXL(){
  const d=filtered();
  const hdr=['Nr Processo','Cumpr. Sentença','Reclamante','Reclamadas','Sentença','Acórdão','Trânsito em Julgado','Fase Atual','Última Data','Resultado','Valor de Causa (R$)','Cálculos Homologados','Valor Homologado (R$)','Valor Incontroverso (R$)','Classe'];
  const rows=d.map(p=>[p.numero_processo,p.cumprimento_sentenca||'',p.reclamante,p.reclamadas,
    p.sentenca?'Sim':'Não',p.acordao?'Sim':'Não',p.transito_julgado?'Sim':'Não',
    p.fase_atual,p.ultima_mov||'',p.resultado,p.valor_est||0,
    p.calculos?'Sim':'Não',p.vlr_hom||'',p.vlr_inc||'',p.materia]);
  const ws=XLSX.utils.aoa_to_sheet([hdr,...rows]);
  ws['!cols']=[{wch:30},{wch:30},{wch:24},{wch:30},{wch:9},{wch:9},{wch:9},{wch:24},{wch:16},{wch:30},{wch:18},{wch:12},{wch:18},{wch:18},{wch:30}];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Processos');
  XLSX.writeFile(wb,'Juri_Carteira_MouraNakano.xlsx');
}
