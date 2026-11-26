// ============================================================
//  DADOS DO DASHBOARD  -  este é o único arquivo que você edita
// ============================================================
//
//  Para adicionar um novo mês, copie uma linha de "meses" e
//  coloque no final da lista (sempre com vírgula entre as linhas):
//
//    { mes: "2026-12", hot: 250, spot: 1100, media: 41.2 },
//
//  mes   -> ano-mês no formato AAAA-MM
//  hot   -> total de inserções Hot no mês
//  spot  -> total de inserções Spot no mês
//  media -> média diária (total ÷ dias com registro)
//           Se preferir, troque "media" por "dias" (nº de dias com
//           registro) que o painel calcula a média sozinho.
//
//  O total, a variação mês a mês e a participação do Hot
//  são calculados automaticamente. Não precisa digitar.
// ============================================================

window.KPI_DATA = {
  titulo: "KPI mensal Hot & Spot",
  atualizadoEm: "26/11/2026",

  meses: [
    { mes: "2026-06", hot: 272, spot: 1068, media: 44.7 },
    { mes: "2026-07", hot: 152, spot: 1207, media: 43.8 },
    { mes: "2026-08", hot: 372, spot: 1818, media: 70.6 },
    { mes: "2026-09", hot: 191, spot: 1153, media: 43.4 },
    { mes: "2026-10", hot: 247, spot: 1813, media: 66.5 },
    { mes: "2026-11", hot: 222, spot: 1066, media: 42.5 }
  ],

  // Contagem de hoje. Só aparece se "data" for o dia atual;
  // em qualquer outro dia o painel mostra 0 (zera sozinho à meia-noite).
  hoje: { data: "26/11/2026", hot: 0, spot: 0 }
};
