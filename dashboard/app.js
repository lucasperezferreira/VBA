const DATA=[
  {numero_processo:"0012345-22.2019.5.02.0001",cumprimento_sentenca:"0098765-44.2022.5.02.0001",reclamante:"João Silva Santos",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-15",resultado:"Procedente Total",valor_est:85000,calculos:true,calc_hom:true,vlr_hom:78500,vlr_inc:52000,materia:"Horas Extras"},
  {numero_processo:"0023456-11.2020.5.02.0002",cumprimento_sentenca:"0087654-33.2023.5.02.0002",reclamante:"Maria Oliveira Lima",reclamadas:"Supermercados BomPreço Ltda.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-08-22",resultado:"Procedente Parcial",valor_est:42000,calculos:true,calc_hom:true,vlr_hom:38000,vlr_inc:25000,materia:"Verbas Rescisórias"},
  {numero_processo:"0034567-88.2018.5.02.0003",cumprimento_sentenca:"0076543-55.2021.5.02.0003",reclamante:"Carlos Eduardo Ferreira",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-12-10",resultado:"Procedente Total",valor_est:180000,calculos:true,calc_hom:true,vlr_hom:165000,vlr_inc:90000,materia:"Acidente de Trabalho"},
  {numero_processo:"0045678-77.2021.5.02.0004",cumprimento_sentenca:"0065432-66.2023.5.02.0004",reclamante:"Ana Paula Rodrigues",reclamadas:"Banco Meridional S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-09-18",resultado:"Procedente Parcial",valor_est:65000,calculos:true,calc_hom:false,vlr_hom:45000,vlr_inc:30000,materia:"Dano Moral"},
  {numero_processo:"0056789-66.2020.5.02.0005",cumprimento_sentenca:"0054321-77.2022.5.02.0005",reclamante:"Pedro Henrique Costa",reclamadas:"TechServices Brasil Ltda.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-07-30",resultado:"Procedente Total",valor_est:38000,calculos:true,calc_hom:true,vlr_hom:35000,vlr_inc:28000,materia:"FGTS"},
  {numero_processo:"0067890-55.2019.5.02.0006",cumprimento_sentenca:null,reclamante:"Fernanda Alves Teixeira",reclamadas:"Varejo Express S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Arquivado",ultima_mov:"2024-03-15",resultado:"Improcedente",valor_est:22000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Verbas Rescisórias"},
  {numero_processo:"0078901-44.2022.5.02.0007",cumprimento_sentenca:null,reclamante:"Roberto Souza Martins",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-10-08",resultado:"Procedente Parcial",valor_est:56000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Horas Extras"},
  {numero_processo:"0089012-33.2020.5.02.0008",cumprimento_sentenca:"0043210-88.2023.5.02.0008",reclamante:"Juliana Mendes Carvalho",reclamadas:"Supermercados BomPreço Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-20",resultado:"Procedente Total",valor_est:78000,calculos:true,calc_hom:true,vlr_hom:72000,vlr_inc:50000,materia:"Dano Moral"},
  {numero_processo:"0090123-22.2021.5.02.0009",cumprimento_sentenca:null,reclamante:"Marcos Antonio Barbosa",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-09-14",resultado:"Procedente Parcial",valor_est:48000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Insalubridade/Periculosidade"},
  {numero_processo:"0101234-11.2019.5.02.0010",cumprimento_sentenca:"0032109-99.2022.5.02.0010",reclamante:"Luciana Pereira Gomes",reclamadas:"Banco Meridional S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-25",resultado:"Procedente Parcial",valor_est:92000,calculos:true,calc_hom:true,vlr_hom:80000,vlr_inc:55000,materia:"Horas Extras"},
  {numero_processo:"0112345-00.2023.5.02.0011",cumprimento_sentenca:null,reclamante:"Ricardo Santos Almeida",reclamadas:"TechServices Brasil Ltda.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-02",resultado:"Em andamento",valor_est:35000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Reconhecimento de Vínculo"},
  {numero_processo:"0123456-99.2020.5.02.0012",cumprimento_sentenca:"0021098-10.2023.5.02.0012",reclamante:"Patricia Lima Cunha",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-08-18",resultado:"Procedente Parcial",valor_est:61000,calculos:true,calc_hom:true,vlr_hom:52000,vlr_inc:38000,materia:"Verbas Rescisórias"},
  {numero_processo:"0134567-88.2021.5.02.0013",cumprimento_sentenca:"0010987-21.2024.5.02.0013",reclamante:"Fernando Costa Vieira",reclamadas:"Supermercados BomPreço Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-05",resultado:"Procedente Total",valor_est:44000,calculos:true,calc_hom:true,vlr_hom:41000,vlr_inc:30000,materia:"Horas Extras"},
  {numero_processo:"0145678-77.2019.5.02.0014",cumprimento_sentenca:null,reclamante:"Camila Ferreira Nunes",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:true,transito_julgado:false,fase_atual:"Recurso de Revista",ultima_mov:"2025-10-12",resultado:"Procedente Parcial",valor_est:220000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Acidente de Trabalho"},
  {numero_processo:"0156789-66.2020.5.02.0015",cumprimento_sentenca:"0009876-32.2023.5.02.0015",reclamante:"Alexandre Rodrigues Lima",reclamadas:"Banco Meridional S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-09-08",resultado:"Procedente Parcial",valor_est:55000,calculos:true,calc_hom:false,vlr_hom:42000,vlr_inc:28000,materia:"Dano Moral"},
  {numero_processo:"0167890-55.2018.5.02.0016",cumprimento_sentenca:"0008765-43.2021.5.02.0016",reclamante:"Beatriz Alves Santos",reclamadas:"TechServices Brasil Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Execução",ultima_mov:"2025-12-15",resultado:"Procedente Total",valor_est:72000,calculos:true,calc_hom:true,vlr_hom:68000,vlr_inc:45000,materia:"Horas Extras"},
  {numero_processo:"0178901-44.2019.5.02.0017",cumprimento_sentenca:null,reclamante:"Diego Martins Oliveira",reclamadas:"Varejo Express S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Arquivado",ultima_mov:"2024-06-20",resultado:"Improcedente",valor_est:18000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"FGTS"},
  {numero_processo:"0189012-33.2020.5.02.0018",cumprimento_sentenca:null,reclamante:"Natalia Gomes Ferreira",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:true,transito_julgado:false,fase_atual:"Recurso de Revista",ultima_mov:"2025-11-28",resultado:"Procedente Parcial",valor_est:145000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Acidente de Trabalho"},
  {numero_processo:"0190123-22.2024.5.02.0019",cumprimento_sentenca:null,reclamante:"Thiago Silva Costa",reclamadas:"Supermercados BomPreço Ltda.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-08",resultado:"Em andamento",valor_est:32000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Verbas Rescisórias"},
  {numero_processo:"0201234-11.2019.5.02.0020",cumprimento_sentenca:"0007654-54.2022.5.02.0020",reclamante:"Adriana Mendes Pereira",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-30",resultado:"Procedente Total",valor_est:95000,calculos:true,calc_hom:true,vlr_hom:88000,vlr_inc:62000,materia:"Horas Extras"},
  {numero_processo:"0212345-00.2020.5.02.0021",cumprimento_sentenca:"0006543-65.2023.5.02.0021",reclamante:"Gustavo Barbosa Carvalho",reclamadas:"Banco Meridional S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-09-22",resultado:"Procedente Total",valor_est:78000,calculos:true,calc_hom:true,vlr_hom:72000,vlr_inc:52000,materia:"Horas Extras"},
  {numero_processo:"0223456-99.2023.5.02.0022",cumprimento_sentenca:null,reclamante:"Isabela Lima Teixeira",reclamadas:"TechServices Brasil Ltda.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-01",resultado:"Em andamento",valor_est:45000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Dano Moral"},
  {numero_processo:"0234567-88.2021.5.02.0023",cumprimento_sentenca:"0005432-76.2024.5.02.0023",reclamante:"Leonardo Santos Almeida",reclamadas:"Varejo Express S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-12",resultado:"Procedente Total",valor_est:38000,calculos:true,calc_hom:true,vlr_hom:36000,vlr_inc:25000,materia:"Verbas Rescisórias"},
  {numero_processo:"0245678-77.2021.5.02.0024",cumprimento_sentenca:null,reclamante:"Renata Oliveira Cunha",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-10-05",resultado:"Improcedente",valor_est:28000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Insalubridade/Periculosidade"},
  {numero_processo:"0256789-66.2020.5.02.0025",cumprimento_sentenca:"0004321-87.2023.5.02.0025",reclamante:"Bruno Ferreira Rodrigues",reclamadas:"Supermercados BomPreço Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-08-28",resultado:"Procedente Parcial",valor_est:56000,calculos:true,calc_hom:true,vlr_hom:48000,vlr_inc:35000,materia:"Horas Extras"},
  {numero_processo:"0267890-55.2021.5.02.0026",cumprimento_sentenca:"0003210-98.2024.5.02.0026",reclamante:"Monica Costa Martins",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-12-18",resultado:"Procedente Total",valor_est:42000,calculos:true,calc_hom:true,vlr_hom:39000,vlr_inc:28000,materia:"FGTS"},
  {numero_processo:"0278901-44.2023.5.02.0027",cumprimento_sentenca:null,reclamante:"Henrique Pereira Gomes",reclamadas:"Banco Meridional S.A.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-11-30",resultado:"Em andamento",valor_est:62000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Reconhecimento de Vínculo"},
  {numero_processo:"0289012-33.2022.5.02.0028",cumprimento_sentenca:null,reclamante:"Viviane Alves Barbosa",reclamadas:"TechServices Brasil Ltda.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-10-18",resultado:"Procedente Parcial",valor_est:48000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Horas Extras"},
  {numero_processo:"0290123-22.2021.5.02.0029",cumprimento_sentenca:"0002109-09.2024.5.02.0029",reclamante:"Paulo Roberto Lima",reclamadas:"Varejo Express S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-09-05",resultado:"Procedente Parcial",valor_est:72000,calculos:true,calc_hom:true,vlr_hom:58000,vlr_inc:40000,materia:"Dano Moral"},
  {numero_processo:"0301234-11.2020.5.02.0030",cumprimento_sentenca:"0001098-20.2023.5.02.0030",reclamante:"Cristiane Santos Vieira",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-20",resultado:"Procedente Total",valor_est:35000,calculos:true,calc_hom:true,vlr_hom:33000,vlr_inc:24000,materia:"Verbas Rescisórias"},
  {numero_processo:"0312345-00.2024.5.02.0031",cumprimento_sentenca:null,reclamante:"Rodrigo Mendes Nunes",reclamadas:"Transportadora Norte S.A.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-05",resultado:"Em andamento",valor_est:68000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Horas Extras"},
  {numero_processo:"0323456-99.2021.5.02.0032",cumprimento_sentenca:"0009087-31.2024.5.02.0032",reclamante:"Simone Ferreira Lima",reclamadas:"Supermercados BomPreço Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-25",resultado:"Procedente Parcial",valor_est:28000,calculos:true,calc_hom:true,vlr_hom:25000,vlr_inc:18000,materia:"FGTS"},
  {numero_processo:"0334567-88.2017.5.02.0033",cumprimento_sentenca:"0008076-42.2020.5.02.0033",reclamante:"Anderson Costa Santos",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Execução",ultima_mov:"2025-12-20",resultado:"Procedente Total",valor_est:320000,calculos:true,calc_hom:true,vlr_hom:295000,vlr_inc:180000,materia:"Acidente de Trabalho"},
  {numero_processo:"0345678-77.2022.5.02.0034",cumprimento_sentenca:null,reclamante:"Tatiane Rodrigues Gomes",reclamadas:"Banco Meridional S.A.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-10-28",resultado:"Procedente Parcial",valor_est:85000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Horas Extras"},
  {numero_processo:"0356789-66.2023.5.02.0035",cumprimento_sentenca:null,reclamante:"William Oliveira Pereira",reclamadas:"TechServices Brasil Ltda.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-11-18",resultado:"Em andamento",valor_est:55000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Reconhecimento de Vínculo"},
  {numero_processo:"0367890-55.2021.5.02.0036",cumprimento_sentenca:"0007065-53.2024.5.02.0036",reclamante:"Larissa Barbosa Carvalho",reclamadas:"Varejo Express S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-09-15",resultado:"Procedente Total",valor_est:42000,calculos:true,calc_hom:true,vlr_hom:39000,vlr_inc:28000,materia:"Horas Extras"},
  {numero_processo:"0378901-44.2020.5.02.0037",cumprimento_sentenca:"0006054-64.2023.5.02.0037",reclamante:"Marcelo Lima Teixeira",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-15",resultado:"Procedente Parcial",valor_est:88000,calculos:true,calc_hom:true,vlr_hom:72000,vlr_inc:48000,materia:"Dano Moral"},
  {numero_processo:"0389012-33.2022.5.02.0038",cumprimento_sentenca:null,reclamante:"Vanessa Santos Martins",reclamadas:"Supermercados BomPreço Ltda.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-11-08",resultado:"Improcedente",valor_est:32000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Insalubridade/Periculosidade"},
  {numero_processo:"0390123-22.2021.5.02.0039",cumprimento_sentenca:"0005043-75.2024.5.02.0039",reclamante:"Daniel Ferreira Almeida",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-09-25",resultado:"Procedente Parcial",valor_est:52000,calculos:true,calc_hom:true,vlr_hom:44000,vlr_inc:32000,materia:"Verbas Rescisórias"},
  {numero_processo:"0401234-11.2019.5.02.0040",cumprimento_sentenca:"0004032-86.2022.5.02.0040",reclamante:"Leticia Gomes Cunha",reclamadas:"Banco Meridional S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-02",resultado:"Procedente Total",valor_est:96000,calculos:true,calc_hom:true,vlr_hom:88000,vlr_inc:62000,materia:"Dano Moral"},
  {numero_processo:"0412345-00.2019.5.02.0041",cumprimento_sentenca:null,reclamante:"Sergio Pereira Lima",reclamadas:"Varejo Express S.A.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Baixado",ultima_mov:"2024-08-10",resultado:"Improcedente",valor_est:25000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Verbas Rescisórias"},
  {numero_processo:"0423456-99.2020.5.02.0042",cumprimento_sentenca:"0003021-97.2023.5.02.0042",reclamante:"Aline Costa Rodrigues",reclamadas:"Frigorifico Central Ltda.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-08",resultado:"Procedente Parcial",valor_est:58000,calculos:true,calc_hom:true,vlr_hom:50000,vlr_inc:36000,materia:"Horas Extras"},
  {numero_processo:"0434567-88.2019.5.02.0043",cumprimento_sentenca:"0002010-08.2022.5.02.0043",reclamante:"Fabio Santos Barbosa",reclamadas:"Frigorifico Central Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-11-18",resultado:"Procedente Total",valor_est:75000,calculos:true,calc_hom:true,vlr_hom:70000,vlr_inc:48000,materia:"Insalubridade/Periculosidade"},
  {numero_processo:"0445678-77.2024.5.02.0044",cumprimento_sentenca:null,reclamante:"Raquel Oliveira Ferreira",reclamadas:"Transportadora Norte S.A.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-12",resultado:"Em andamento",valor_est:32000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"FGTS"},
  {numero_processo:"0456789-66.2021.5.02.0045",cumprimento_sentenca:"0001009-19.2024.5.02.0045",reclamante:"Guilherme Lima Pereira",reclamadas:"Supermercados BomPreco Ltda.",sentenca:true,acordao:false,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-22",resultado:"Procedente Total",valor_est:65000,calculos:true,calc_hom:true,vlr_hom:62000,vlr_inc:42000,materia:"Dano Moral"},
  {numero_processo:"0467890-55.2020.5.02.0046",cumprimento_sentenca:null,reclamante:"Denise Martins Costa",reclamadas:"Construtora Omega S.A.",sentenca:true,acordao:true,transito_julgado:false,fase_atual:"Recurso de Revista",ultima_mov:"2025-11-22",resultado:"Procedente Parcial",valor_est:112000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Horas Extras"},
  {numero_processo:"0478901-44.2023.5.02.0047",cumprimento_sentenca:null,reclamante:"Rafael Santos Gomes",reclamadas:"Hospital Sao Lucas S.A.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-08",resultado:"Em andamento",valor_est:48000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Verbas Rescisórias"},
  {numero_processo:"0489012-33.2021.5.02.0048",cumprimento_sentenca:null,reclamante:"Priscila Ferreira Almeida",reclamadas:"Transportadora Norte S.A.",sentenca:true,acordao:false,transito_julgado:false,fase_atual:"Recurso Ordinário",ultima_mov:"2025-09-30",resultado:"Improcedente",valor_est:165000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Acidente de Trabalho"},
  {numero_processo:"0490123-22.2019.5.02.0049",cumprimento_sentenca:"0000998-30.2022.5.02.0049",reclamante:"Edson Costa Lima",reclamadas:"Industria Metal Sul Ltda.",sentenca:true,acordao:true,transito_julgado:true,fase_atual:"Cumprimento de Sentença",ultima_mov:"2025-10-12",resultado:"Procedente Total",valor_est:82000,calculos:true,calc_hom:true,vlr_hom:76000,vlr_inc:54000,materia:"Horas Extras"},
  {numero_processo:"0501234-11.2024.5.02.0050",cumprimento_sentenca:null,reclamante:"Mariana Rodrigues Teixeira",reclamadas:"Escola Global Educacao Ltda.",sentenca:false,acordao:false,transito_julgado:false,fase_atual:"Conhecimento",ultima_mov:"2025-12-18",resultado:"Em andamento",valor_est:38000,calculos:false,calc_hom:false,vlr_hom:null,vlr_inc:null,materia:"Reconhecimento de Vínculo"}
];
const R=v=>v!=null?v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}):'—';
const D=s=>{if(!s)return'—';const[y,m,d]=s.split('-');return`${d}/${m}/${y}`};
const S=v=>`<span class="${v?'sim':'nao'}">${v?'Sim':'Não'}</span>`;
const BR={'Procedente Total':'b-pt','Procedente Parcial':'b-pp','Improcedente':'b-im','Em andamento':'b-ea'};
const bdg=(c,t)=>`<span class="b ${c}">${t}</span>`;
let sortKey='numero_processo',sortAsc=true;

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

function update(){const d=filtered();renderKPIs(d);renderTable(d)}
function srt(k){sortKey===k?sortAsc=!sortAsc:(sortKey=k,sortAsc=true);update()}

function renderKPIs(d){
  document.getElementById('kTotal').textContent=d.length;
  document.getElementById('kValor').textContent=R(d.reduce((s,p)=>s+p.valor_est,0));
  const com=d.filter(p=>p.resultado!=='Em andamento');
  const proc=com.filter(p=>p.resultado!=='Improcedente').length;
  document.getElementById('kProc').textContent=com.length?Math.round(proc/com.length*100)+'%':'—';
  const tj=d.filter(p=>p.transito_julgado).length;
  document.getElementById('kTJ').textContent=`${tj} (${d.length?Math.round(tj/d.length*100):0}%)`;
}

function renderCharts(d){
  const COLS=['#F2A900','#D28B00','#373A36','#7A7670','#B0ADA7','#E0DDD8','#C8C5BF'];
  const res={'Procedente Total':0,'Procedente Parcial':0,'Improcedente':0,'Em andamento':0};
  d.forEach(p=>res[p.resultado]++);
  new Chart(document.getElementById('cResultado'),{type:'doughnut',
    data:{labels:Object.keys(res),datasets:[{data:Object.values(res),backgroundColor:['#2E7D32','#F2A900','#C62828','#1565C0'],borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:8}}}}});

  const fases={};d.forEach(p=>{fases[p.fase_atual]=(fases[p.fase_atual]||0)+1});
  const fs=Object.entries(fases).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('cFase'),{type:'bar',
    data:{labels:fs.map(f=>f[0]),datasets:[{data:fs.map(f=>f[1]),backgroundColor:'#373A36',borderRadius:5}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}});

  const recs={};d.forEach(p=>{recs[p.reclamadas]=(recs[p.reclamadas]||0)+1});
  const rs=Object.entries(recs).sort((a,b)=>b[1]-a[1]).slice(0,7);
  new Chart(document.getElementById('cReclamadas'),{type:'bar',
    data:{labels:rs.map(r=>r[0]),datasets:[{data:rs.map(r=>r[1]),backgroundColor:'#F2A900',borderRadius:5}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,ticks:{stepSize:1}}}}});

  const mats={};d.forEach(p=>{mats[p.materia]=(mats[p.materia]||0)+1});
  const ms=Object.entries(mats).sort((a,b)=>b[1]-a[1]);
  new Chart(document.getElementById('cMaterias'),{type:'doughnut',
    data:{labels:ms.map(m=>m[0]),datasets:[{data:ms.map(m=>m[1]),backgroundColor:COLS,borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:8}}}}});
}

function renderTable(d){
  document.getElementById('tCount').textContent=`${d.length} processo${d.length!==1?'s':''}`;
  document.getElementById('tBody').innerHTML=d.map(p=>`<tr>
    <td class="mono">${p.numero_processo}</td>
    <td class="mono">${p.cumprimento_sentenca||'—'}</td>
    <td>${p.reclamante}</td><td>${p.reclamadas}</td>
    <td>${S(p.sentenca)}</td><td>${S(p.acordao)}</td><td>${S(p.transito_julgado)}</td>
    <td>${bdg('b-f',p.fase_atual)}</td>
    <td>${D(p.ultima_mov)}</td>
    <td>${bdg(BR[p.resultado],p.resultado)}</td>
    <td class="r">${R(p.valor_est)}</td>
    <td>${S(p.calculos)}</td><td>${S(p.calc_hom)}</td>
    <td class="r">${R(p.vlr_hom)}</td>
    <td class="r">${R(p.vlr_inc)}</td>
    <td>${p.materia}</td>
  </tr>`).join('');
}

function exportXL(){
  const d=filtered();
  const hdr=['Nr Processo','Cumpr. Sentenca','Reclamante','Reclamadas','Sentenca','Acordao','Transito em Julgado','Fase Atual','Ultima Movimentacao','Resultado','Valor Estimado (R$)','Calculos','Calc. Homologados','Valor Homologado (R$)','Valor Incontroverso (R$)','Materia'];
  const rows=d.map(p=>[p.numero_processo,p.cumprimento_sentenca||'',p.reclamante,p.reclamadas,
    p.sentenca?'Sim':'Nao',p.acordao?'Sim':'Nao',p.transito_julgado?'Sim':'Nao',
    p.fase_atual,p.ultima_mov,p.resultado,p.valor_est,
    p.calculos?'Sim':'Nao',p.calc_hom?'Sim':'Nao',p.vlr_hom||'',p.vlr_inc||'',p.materia]);
  const ws=XLSX.utils.aoa_to_sheet([hdr,...rows]);
  ws['!cols']=[{wch:30},{wch:30},{wch:24},{wch:30},{wch:9},{wch:9},{wch:9},{wch:24},{wch:16},{wch:18},{wch:18},{wch:9},{wch:12},{wch:18},{wch:18},{wch:24}];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Processos');
  XLSX.writeFile(wb,'Juri_Carteira_MoraSilvaPereira.xlsx');
}
