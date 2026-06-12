const IAP_BASE_URL = 'https://iapredicthub.es';
const PROCESSED_IDS_PROPERTY = 'TELEGRAM_ALERTAS_PROCESSED_IDS';
const MAX_PROCESSED_IDS = 500;
const GMAIL_QUERY_OFERTAS =
  'newer_than:14d (subject:oferta OR subject:promo OR subject:beneficio OR subject:recurrente)';

const CASA_LINKS = {
  versus: 'https://app.afiliago.com/go/19148/JqXVcHDWdu/2',
  daznbet:
    'https://lp.daznbet.es/promomixta-3/?gad_campaignid=21585366146&gad_source=1&gbraid=0AAAAAo7lT3wjNM9l7FNEmpzJNCH45zEA6&gclid=CjwKCAiAqKbMBhBmEiwAZ3UboJQoeuzr7_GzDr1KlXxNZg2gDdBSGa-yukzAV4YwpiaBD64tJ0mBaRoCmx0QAvD_BwE&utm_campaign=ppcbrand_sports_es_google_daznbet_bb200_SIDN_search_registro_sports-casino_marca_21585366146_171722008288_dazn%20bet_c_p&utm_medium=google&utm_source=ppcbrand',
  retabet:
    'https://online.retabet.es/bono?pr=RETA069&utm_campaign=brand&utm_source=ppc&utm_medium=search&utm_term=retabet%20casino&campaignid=23303561015&adgroupid=192782291881&adid=785737353981&gad_source=1&gad_campaignid=23303561015&gbraid=0AAAABBtQEstUHH1LSegq4vx26N5WmJKf3&gclid=CjwKCAiAqKbMBhBmEiwAZ3UboGYFzbTCC3W8XxoVNOcz003-34NRhcswb3tqYytD5syRmmZ9KuvEBRoCxKsQAvD_BwE',
  bet365:
    'https://www.bet365.es/hub/es-es/open-account-offer?utm_source=google&utm_medium=cpc&utm_campaign=19809205141&utm_keyword=registrarse%20bet365&affiliate=365_01435717&gad_source=1&gad_campaignid=19809205141&gbraid=0AAAAADOVbuNaI8yk8sXYHYh5soGYmg7rB&gclid=CjwKCAiAqKbMBhBmEiwAZ3UboCHjR9ENmOEBfWjfVZhHaT2qkwrqBAJIy1umLn9yU_3bTbnpIshO-xoCvE8QAvD_BwE',
  sportium: 'https://bdeal.io/Sportium/136726/1',
  codere: 'https://bdeal.io/Codere/136722/1',
  botemania:
    'https://www.botemania.es/lp/p/apuestas-bono-bienvenida?acquisition-channel=ppc&keyword_id=322831080951&targetid=kwd-322831080951&campaign_id=21183740085&cq_src=google_ads&cq_cmp=21183740085&cq_term=casino%20online%20bono%20bienvenida&cq_plac=&cq_net=g&cq_plt=gp&gclsrc=aw.ds&gad_source=1&gad_campaignid=21183740085&gbraid=0AAAAADyTsIZsEH387oanaF4G02nARpUeb&gclid=CjwKCAiAqKbMBhBmEiwAZ3UboP5dvJi27bOO94mtyFrp-cK5_xkYiDXKG1Q8x4ocmXZxsEKcLR8kMhoCCokQAvD_BwE',
  paf: 'https://bdeal.io/PAF/100477/1',
  'casino-gran-madrid': 'https://bdeal.io/CGranMadrid/139749/1',
  juegging:
    'https://www.juegging.es/promo/bono-de-bienvenida-10e-primer-deposito-hasta-150e-para-apuestas-deportivas-online/?gad_source=1&gad_campaignid=21384301916&gbraid=0AAAAADf_xqsJfkKNVJvYbKlhjbhoam9Gd&gclid=Cj0KCQiA7rDMBhCjARIsAGDBuEB1YELWvbUe10N_UX9ji9LU4O5iOIkUiIklFuOyxBRP06EelVRwxrQaAnJoEALw_wcB',
  'marca-apuestas': 'https://bdeal.io/marcaapuestas/136724/1',
  bwin:
    'https://www.bwin.es/es/engage/lan/pm/sports/generic?wm=5238465&wm=5238465&tdpeh=29235_23463837299_189439309177_792853968132_kwd-37715403167_e_c&utm_source=search_google&utm_campaign=23463837299&utm_content=792853968132&utm_medium=e&utm_term=bwin%20bono%20bienvenida&sb=1&gad_source=1&gad_campaignid=23463837299&gbraid=0AAAAADxF3Xt0_9DF5rDeEetPiGU61dmcj&gclid=CjwKCAiAqKbMBhBmEiwAZ3UboP3lPzZ6n7Uv7g3bLjonVIXvqDCZ5xeYl-G1qmV3s0JwuyuZeve-lRoCMUAQAvD_BwE',
  winamax: 'https://bdeal.io/Winamax/99945/1',
  '888sport': 'https://bdeal.io/888Sport/136728/1',
  kirolbet:
    'https://bienvenida.kirolbet.es/wb/apuestas-deportivas-7547/?gad_source=1&gad_campaignid=12417805598&gbraid=0AAAAADr42bSE0NA8fQh90ta8dPev7K7C-&gclid=CjwKCAjw687NBhB4EiwAQ645dsJbKoiKj40wHLiVbUuTM6thQ40TgVDTTySmeC8bD4KglZVoTULmShoCRKMQAvD_BwE',
  pokerstars: 'https://bdeal.io/PokerStars/101907/1',
  olybet: 'https://welcome.olybet.es/bono-de-bienvenida-deportes/',
  interwetten: 'https://bdeal.io/Interwetten/136723/1',
  yaass: 'https://www.yaasscasino.es/promociones/promo-yaass-bienvenida-casino-sport',
  'william-hill': 'https://bdeal.io/WilliamHill/136725/1',
  betway:
    'https://app.afiliago.com/go/popup18/21553?url=https%3A%2F%2Fapp.afiliago.com%2Fgo%2F21553%2FfIkqcOFwoh%2F2',
  casumo: 'https://www.casumo.es/sports/#home',
  ebingo: 'https://www.ebingo.es/promos',
  goldenpark:
    'https://app.afiliago.com/go/popup18/19149?url=https%3A%2F%2Fapp.afiliago.com%2Fgo%2F19149%2FWs1nYCo4gw',
  betsson: 'https://bdeal.io/Betsson/136727/1',
  paston: 'https://www.paston.es/promociones/bono-bienvenida-casa-de-apuestas',
  efbet: 'https://efbet.com.es/bonos/',
  solcasino: 'https://www.solcasino.es/promociones/bets/bono-bienvenida-aadd',
  leovegas: 'https://leovegas.es/auth?intent=SIGNUP&provider=USERNAME_PASSWORD',
  jokerbet:
    'https://www.jokerbet.es/?campaigncode=marca-bono&utm_source=google&utm_medium=cpc&gad_source=1&gad_campaignid=22354333110&gbraid=0AAAAADFc_eHSs-pDDL4g09t4kKI19kjfm&gclid=CjwKCAjw687NBhB4EiwAQ645dnsma717_2D4J2kPu87Qn6VsZ4Sggp3cjMJM1Qmy8-JQ6njmviyi0hoCUdcQAvD_BwE',
  betfair: 'https://bdeal.io/Betfair/139419/2',
};

const CASA_ALIASES = {
  '888-sport': '888sport',
  '888-sports': '888sport',
  cgm: 'casino-gran-madrid',
  'casino-madrid': 'casino-gran-madrid',
  'dazn-bet': 'daznbet',
  golden: 'goldenpark',
  'golden-park': 'goldenpark',
  marca: 'marca-apuestas',
  'marcaapuestas': 'marca-apuestas',
  'poker-stars': 'pokerstars',
  'poker-stars-sports': 'pokerstars',
  'pokerstars-sports': 'pokerstars',
  reta: 'retabet',
  'reta-bet': 'retabet',
  williamhill: 'william-hill',
  'william-hill-es': 'william-hill',
  yaasscasino: 'yaass',
  'yaass-casino': 'yaass',
};

function enviarMensajePrueba() {
  const alerta = formatearAlerta({
    casa: 'Versus',
    descripcion: 'Promoción recurrente de prueba',
    importe: '10€',
  });

  return enviarTelegram(alerta);
}

function procesarOfertasNuevasPrueba() {
  return procesarOfertasNuevas_({
    limite: 3,
    marcarComoProcesadas: false,
  });
}

function procesarOfertasNuevasAutomatico() {
  return procesarOfertasNuevas_({
    limite: 20,
    marcarComoProcesadas: true,
  });
}

function inicializarOfertasRecientesSinEnviar() {
  const ids = extraerMensajesOferta_().map(function (item) {
    return item.id;
  });

  saveProcessedIds_(ids);
  return ids.length;
}

function procesarOfertasNuevas_(opciones) {
  const config = opciones || {};
  const limite = config.limite || 20;
  const marcarComoProcesadas = config.marcarComoProcesadas !== false;
  const processedIds = getProcessedIds_();
  const processedMap = processedIds.reduce(function (acc, id) {
    acc[id] = true;
    return acc;
  }, {});
  const mensajes = extraerMensajesOferta_().filter(function (item) {
    return !processedMap[item.id];
  });
  const enviados = [];
  const nuevosProcesados = [];

  mensajes.slice(0, limite).forEach(function (item) {
    const oferta = parsearAsuntoOferta(item.asunto);

    if (!oferta) {
      nuevosProcesados.push(item.id);
      return;
    }

    const alerta = formatearAlerta(oferta);
    enviarTelegram(alerta);
    enviados.push(item.id);
    nuevosProcesados.push(item.id);
  });

  if (marcarComoProcesadas && nuevosProcesados.length > 0) {
    saveProcessedIds_(nuevosProcesados.concat(processedIds).slice(0, MAX_PROCESSED_IDS));
  }

  return enviados.length;
}

function parsearAsuntoOferta(asunto) {
  if (!asunto) {
    return null;
  }

  const asuntoLimpio = String(asunto)
    .replace(/^\s*(iapredicthub|alerta|oferta|promo|promocion)\s*[:|-]\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();
  const importe = extraerImporte_(asuntoLimpio) || 'No disponible';
  const sinImporte = asuntoLimpio
    .replace(/(?:\d{1,3}(?:[.,]\d{3})*|\d+)(?:[.,]\d{1,2})?\s*(?:€|eur|euros)/gi, '')
    .replace(/\s*[-|:]\s*$/g, '')
    .trim();
  const casaDetectada = detectarCasa_(sinImporte);

  if (casaDetectada) {
    return {
      casa: casaDetectada.nombre,
      descripcion: limpiarDescripcion_(sinImporte, casaDetectada.nombre) || sinImporte || 'Oferta recurrente',
      importe: importe,
    };
  }

  const partes = sinImporte.split(/\s*[-|:]\s*/).filter(Boolean);
  const casa = partes.shift() || 'Casa no identificada';

  return {
    casa: casa,
    descripcion: partes.join(' - ') || sinImporte || 'Oferta recurrente',
    importe: importe,
  };
}

function extraerImporte_(texto) {
  if (!texto) {
    return '';
  }

  const match = String(texto).match(
    /(?:\d{1,3}(?:[.,]\d{3})*|\d+)(?:[.,]\d{1,2})?\s*(?:€|eur|euros)/i
  );

  return match ? match[0].replace(/\s*(eur|euros)$/i, '€') : '';
}

function formatearAlerta(oferta) {
  const casa = oferta && oferta.casa ? oferta.casa : 'Casa no identificada';
  const slug = resolverSlugCasa_(casa);
  const urlGuia = slug ? IAP_BASE_URL + '/casas/' + slug : IAP_BASE_URL + '/casas';
  const urlCasa = obtenerUrlCasa_(casa);
  const descripcion = oferta && oferta.descripcion ? oferta.descripcion : 'Oferta recurrente';
  const importe = oferta && oferta.importe ? oferta.importe : 'No disponible';
  const texto = [
    '🚨 Oferta Detectada',
    '',
    '🏠 Casa: ' + casa,
    '🎁 Promo: ' + descripcion,
    '💰 Importe estimado: ' + importe,
    '',
    '✅ Útil si ya tienes cuenta en esta casa.',
    '',
    '+18 · Juego responsable · Revisa siempre las condiciones oficiales de la casa.',
  ].join('\n');

  return {
    texto: texto,
    urlCasa: urlCasa,
    urlGuia: urlGuia,
  };
}

function crearSlugCasa(casa) {
  if (!casa) {
    return '';
  }

  return String(casa)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function enviarTelegram(alerta) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('BOT_TOKEN');
  const chatId = props.getProperty('TELEGRAM_CHAT_ID');

  if (!token || !chatId) {
    throw new Error('Faltan Script Properties BOT_TOKEN o TELEGRAM_CHAT_ID');
  }

  const payload = {
    chat_id: chatId,
    text: alerta.texto,
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: '🏠 Ver casa', url: alerta.urlCasa },
          { text: '📘 Ver guía', url: alerta.urlGuia },
        ],
      ],
    },
  };

  const response = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify(payload),
  });

  const status = response.getResponseCode();
  if (status < 200 || status >= 300) {
    throw new Error('Telegram devolvió HTTP ' + status + ': ' + response.getContentText());
  }

  return JSON.parse(response.getContentText());
}

function getProcessedIds_() {
  const raw = PropertiesService.getScriptProperties().getProperty(PROCESSED_IDS_PROPERTY);

  if (!raw) {
    return [];
  }

  try {
    const ids = JSON.parse(raw);
    return Array.isArray(ids) ? ids : [];
  } catch (error) {
    return [];
  }
}

function saveProcessedIds_(ids) {
  const uniqueIds = [];
  const seen = {};

  (ids || []).forEach(function (id) {
    if (id && !seen[id]) {
      seen[id] = true;
      uniqueIds.push(id);
    }
  });

  PropertiesService.getScriptProperties().setProperty(
    PROCESSED_IDS_PROPERTY,
    JSON.stringify(uniqueIds.slice(0, MAX_PROCESSED_IDS))
  );
}

function obtenerUrlCasa_(casa) {
  const slug = resolverSlugCasa_(casa);

  if (!slug) {
    return IAP_BASE_URL + '/casas';
  }

  return CASA_LINKS[slug] || IAP_BASE_URL + '/casas/' + slug;
}

function resolverSlugCasa_(casa) {
  const slug = crearSlugCasa(casa);

  if (!slug || slug === 'casa-no-identificada') {
    return '';
  }

  return CASA_ALIASES[slug] || slug;
}

function extraerMensajesOferta_() {
  const threads = GmailApp.search(GMAIL_QUERY_OFERTAS, 0, 50);
  const items = [];

  threads.forEach(function (thread) {
    thread.getMessages().forEach(function (message) {
      items.push({
        id: message.getId(),
        asunto: message.getSubject(),
        fecha: message.getDate(),
      });
    });
  });

  return items.sort(function (a, b) {
    return b.fecha.getTime() - a.fecha.getTime();
  });
}

function detectarCasa_(texto) {
  const slugTexto = crearSlugCasa(texto);
  const slugs = Object.keys(CASA_LINKS)
    .concat(Object.keys(CASA_ALIASES))
    .sort(function (a, b) {
      return b.length - a.length;
    });

  for (var i = 0; i < slugs.length; i += 1) {
    const slug = slugs[i];
    const canonicalSlug = CASA_ALIASES[slug] || slug;
    const pattern = new RegExp('(^|-)' + escaparRegExp_(slug) + '($|-)');

    if (pattern.test(slugTexto)) {
      return {
        slug: canonicalSlug,
        nombre: nombreCasaDesdeSlug_(canonicalSlug),
      };
    }
  }

  return null;
}

function limpiarDescripcion_(texto, casa) {
  const casaPattern = new RegExp(escaparRegExp_(casa), 'ig');

  return String(texto || '')
    .replace(casaPattern, '')
    .replace(/\s*[-|:]\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function nombreCasaDesdeSlug_(slug) {
  const nombres = {
    '888sport': '888Sport',
    bet365: 'Bet365',
    betfair: 'Betfair',
    betsson: 'Betsson',
    betway: 'Betway',
    botemania: 'Botemania',
    bwin: 'Bwin',
    'casino-gran-madrid': 'Casino Gran Madrid',
    casumo: 'Casumo',
    codere: 'Codere',
    daznbet: 'DaznBet',
    ebingo: 'Ebingo',
    efbet: 'EFBet',
    goldenpark: 'Goldenpark',
    interwetten: 'Interwetten',
    jokerbet: 'JokerBet',
    juegging: 'Juegging',
    kirolbet: 'Kirolbet',
    leovegas: 'LeoVegas',
    'marca-apuestas': 'Marca Apuestas',
    olybet: 'OlyBet',
    paf: 'PAF',
    paston: 'Pastón',
    pokerstars: 'PokerStars Sports',
    retabet: 'RetaBet',
    solcasino: 'SolCasino',
    sportium: 'Sportium',
    versus: 'Versus',
    'william-hill': 'William Hill',
    winamax: 'Winamax',
    yaass: 'Yaass Casino',
  };

  return nombres[slug] || slug;
}

function escaparRegExp_(texto) {
  return String(texto).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
