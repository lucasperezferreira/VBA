// DATA is loaded from data.js
const R=v=>v!=null&&v>0?v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}):'—';
const D=s=>{if(!s)return'—';const[y,m,d]=s.split('-');return`${d}/${m}/${y}`};
const S=v=>`<span class="${v?'sim':'nao'}">${v?'Sim':'Não'}</span>`;
const BR={'Procedente':'b-pt','Improcedente':'b-im','Arquivado':'b-ar','Ativo - Sem informação de sentença':'b-ea'};
const bdg=(c,t)=>`<span class="b ${c}">${t}</span>`;
let sortKey='numero_processo',sortAsc=true,page=0;
let chartFilter={field:null,value:null};
const charts={};
const PAGE_SIZE=200;
const COLS=['#F2A900','#D28B00','#373A36','#7A7670','#B0ADA7','#5C9BD6','#2E7D32','#C62828'];

function getSector(reclamadas){
  const r=(reclamadas||'').toLowerCase();
  if(/itaú|itau|bradesco|santander|safra|c6 consig|daycoval|fibra|banco original|bank of china|cetelem|bmw financeira|kirton|industrial e comercial|banco multiplo|banco fibra/.test(r))return'Financeiro';
  if(/telef|vivo|claro|tim\b|oi\b|nextel/.test(r))return'Telecom';
  if(/magazine|luiza|mondelez|carrefour|americanas|pao de acucar/.test(r))return'Varejo';
  if(/electrolux|whirlpool|ambev|fiat|volkswagen|toyota|ford\b|honda|samsung/.test(r))return'Indústria';
  if(/cooperativa|unicooper/.test(r))return'Cooperativas';
  if(/hospital|saúde|saude|medic|pharma|farma|drogari/.test(r))return'Saúde';
  if(/consultoria|assessoria|recursos humanos|\brh\b|lhc\b/.test(r))return'Serviços/RH';
  return'Outros';
}

// --- Chart filter ---
function setChartFilter(field,value){
  if(chartFilter.field===field&&chartFilter.value===value){
    chartFilter={field:null,value:null}; // toggle off
  }else{
    chartFilter={field,value};
  }
  page=0;
  updateFilterTag();
  update();
}

function clearChartFilter(){
  chartFilter={field:null,value:null};
  updateFilterTag();
  page=0;
  update();
}

function updateFilterTag(){
  const wrap=document.getElementById('cftWrap');
  const txt=document.getElementById('cftText');
  if(!chartFilter.field){wrap.classList.remove('visible');return;}
  const labels={resultado:'Resultado',fase:'Fase Processual',reclamada:'Reclamada',materia:'Classe',setor:'Setor'};
  txt.textContent=`${labels[chartFilter.field]}: ${chartFilter.value}`;
  wrap.classList.add('visible');
}

// --- Init ---
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('hdrDate').textContent='Atualizado em: '+new Date().toLocaleDateString('pt-BR');

  const fases=[...new Set(DATA.map(p=>p.fase_atual))].sort();
  fases.forEach(f=>{document.getElementById('sFase').innerHTML+=`<option>${f}</option>`});
  const mats=[...new Set(DATA.map(p=>p.materia))].sort();
  mats.forEach(m=>{document.getElementById('sMat').innerHTML+=`<option>${m}</option>`});

  ['srch','sFase','sRes','sMat'].forEach(id=>document.getElementById(id).addEventListener('input',()=>{page=0;update()}));
  document.getElementById('btnPrev').addEventListener('click',()=>{page=Math.max(0,page-1);renderTable(filtered())});
  document.getElementById('btnNext').addEventListener('click',()=>{page++;renderTable(filtered())});

  update();
});

// --- Filter ---
function filtered(){
  const s=document.getElementById('srch').value.toLowerCase();
  const f=document.getElementById('sFase').value;
  const r=document.getElementById('sRes').value;
  const m=document.getElementById('sMat').value;
  return DATA.filter(p=>{
    // Chart filter
    if(chartFilter.field==='resultado'&&p.resultado!==chartFilter.value)return false;
    if(chartFilter.field==='fase'&&p.fase_atual!==chartFilter.value)return false;
    if(chartFilter.field==='reclamada'&&p.reclamadas!==chartFilter.value)return false;
    if(chartFilter.field==='materia'&&p.materia!==chartFilter.value)return false;
    if(chartFilter.field==='setor'&&getSector(p.reclamadas)!==chartFilter.value)return false;
    // Text/select filters
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

function update(){const d=filtered();renderKPIs(d);renderCharts(d);renderTable(d)}
function srt(k){sortKey===k?sortAsc=!sortAsc:(sortKey=k,sortAsc=true);update()}

// --- KPIs ---
function renderKPIs(d){
  document.getElementById('kTotal').textContent=d.length;
  document.getElementById('kValor').textContent=R(d.reduce((s,p)=>s+(p.valor_est||0),0));
  const com=d.filter(p=>p.resultado==='Procedente'||p.resultado==='Improcedente');
  const proc=com.filter(p=>p.resultado==='Procedente').length;
  document.getElementById('kProc').textContent=com.length?Math.round(proc/com.length*100)+'%':'—';
  const tj=d.filter(p=>p.transito_julgado).length;
  document.getElementById('kTJ').textContent=`${tj} (${d.length?Math.round(tj/d.length*100):0}%)`;
}

// --- Charts ---
function destroyChart(id){if(charts[id]){charts[id].destroy();delete charts[id]}}

// Highlight selected item vs others
function bgColors(labels,activeField,activeValue,baseColors){
  if(!chartFilter.field||chartFilter.field!==activeField)return baseColors;
  return labels.map((l,i)=>l===activeValue?baseColors[i%baseColors.length]:(baseColors[i%baseColors.length]+'55'));
}

function renderCharts(d){
  // Resultado
  destroyChart('cResultado');
  const res={'Procedente':0,'Improcedente':0,'Arquivado':0,'Ativo - Sem informação de sentença':0};
  d.forEach(p=>{if(res[p.resultado]!==undefined)res[p.resultado]++});
  const resBase=['#2E7D32','#C62828','#7A7670','#1565C0'];
  charts['cResultado']=new Chart(document.getElementById('cResultado'),{type:'doughnut',
    data:{labels:Object.keys(res),datasets:[{data:Object.values(res),
      backgroundColor:bgColors(Object.keys(res),'resultado',chartFilter.value,resBase),
      borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'right',labels:{font:{size:11,family:'Montserrat'},padding:8}}},
      onClick:(_,els)=>{if(!els.length)return;setChartFilter('resultado',Object.keys(res)[els[0].index])}}});

  // Fases
  destroyChart('cFase');
  const fases={};d.forEach(p=>{fases[p.fase_atual]=(fases[p.fase_atual]||0)+1});
  const fs=Object.entries(fases).sort((a,b)=>b[1]-a[1]);
  const faseLabels=fs.map(f=>f[0]);
  charts['cFase']=new Chart(document.getElementById('cFase'),{type:'bar',
    data:{labels:faseLabels,datasets:[{data:fs.map(f=>f[1]),
      backgroundColor:faseLabels.map(l=>chartFilter.field==='fase'?(l===chartFilter.value?'#373A36':'#37373655'):'#373A36'),
      borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true,ticks:{font:{size:10,family:'Montserrat'}}}},
      onClick:(_,els)=>{if(!els.length)return;setChartFilter('fase',faseLabels[els[0].index])}}});

  // Reclamadas
  destroyChart('cReclamadas');
  const recs={};d.forEach(p=>{recs[p.reclamadas]=(recs[p.reclamadas]||0)+1});
  const rs=Object.entries(recs).sort((a,b)=>b[1]-a[1]).slice(0,7);
  const fullRec=rs.map(r=>r[0]);
  const dispRec=rs.map(r=>r[0].length>30?r[0].slice(0,30)+'…':r[0]);
  charts['cReclamadas']=new Chart(document.getElementById('cReclamadas'),{type:'bar',
    data:{labels:dispRec,datasets:[{data:rs.map(r=>r[1]),
      backgroundColor:fullRec.map(l=>chartFilter.field==='reclamada'?(l===chartFilter.value?'#F2A900':'#F2A90055'):'#F2A900'),
      borderRadius:6}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{x:{beginAtZero:true,ticks:{font:{size:10,family:'Montserrat'}}},y:{ticks:{font:{size:10,family:'Montserrat'}}}},
      onClick:(_,els)=>{if(!els.length)return;setChartFilter('reclamada',fullRec[els[0].index])}}});

  // Classe
  destroyChart('cMaterias');
  const mats={};d.forEach(p=>{mats[p.materia]=(mats[p.materia]||0)+1});
  const ms=Object.entries(mats).sort((a,b)=>b[1]-a[1]);
  const matLabels=ms.map(m=>m[0]);
  charts['cMaterias']=new Chart(document.getElementById('cMaterias'),{type:'doughnut',
    data:{labels:matLabels,datasets:[{data:ms.map(m=>m[1]),
      backgroundColor:bgColors(matLabels,'materia',chartFilter.value,COLS),
      borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'right',labels:{font:{size:11,family:'Montserrat'},padding:8}}},
      onClick:(_,els)=>{if(!els.length)return;setChartFilter('materia',matLabels[els[0].index])}}});

  // Setor
  destroyChart('cSetor');
  const setores={};d.forEach(p=>{const s=getSector(p.reclamadas);setores[s]=(setores[s]||0)+1});
  const ss=Object.entries(setores).sort((a,b)=>b[1]-a[1]);
  const setorLabels=ss.map(s=>s[0]);
  charts['cSetor']=new Chart(document.getElementById('cSetor'),{type:'bar',
    data:{labels:setorLabels,datasets:[{data:ss.map(s=>s[1]),
      backgroundColor:setorLabels.map((l,i)=>{
        const base=COLS[i%COLS.length];
        return chartFilter.field==='setor'?(l===chartFilter.value?base:base+'55'):base;
      }),borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true,ticks:{font:{size:11,family:'Montserrat'}}},x:{ticks:{font:{size:12,family:'Montserrat',weight:'700'}}}},
      onClick:(_,els)=>{if(!els.length)return;setChartFilter('setor',setorLabels[els[0].index])}}});
}

// --- Table ---
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

// --- Export ---
function exportXL(){
  const d=filtered();
  const hdr=['Nr Processo','Cumpr. Sentença','Reclamante','Reclamadas','Sentença','Acórdão','Trânsito em Julgado','Fase Atual','Última Data','Resultado','Valor de Causa (R$)','Cálculos Homologados','Valor Homologado (R$)','Valor Incontroverso (R$)','Classe','Setor'];
  const rows=d.map(p=>[p.numero_processo,p.cumprimento_sentenca||'',p.reclamante,p.reclamadas,
    p.sentenca?'Sim':'Não',p.acordao?'Sim':'Não',p.transito_julgado?'Sim':'Não',
    p.fase_atual,p.ultima_mov||'',p.resultado,p.valor_est||0,
    p.calculos?'Sim':'Não',p.vlr_hom||'',p.vlr_inc||'',p.materia,getSector(p.reclamadas)]);
  const ws=XLSX.utils.aoa_to_sheet([hdr,...rows]);
  ws['!cols']=[{wch:30},{wch:30},{wch:24},{wch:30},{wch:9},{wch:9},{wch:9},{wch:24},{wch:16},{wch:30},{wch:18},{wch:12},{wch:18},{wch:18},{wch:30},{wch:16}];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Processos');
  XLSX.writeFile(wb,'JuriCapital_Carteira_MouraNakano.xlsx');
}
