'use strict';

var express = require('express'),
		router = express.Router(),
		passport = require('passport'),
		User = require('../models/user'),
    Process = require('../models/process'),
    Reference = require('../models/reference'),
		service = require('../services/service'),
    simpleTableList = require('../services/simpleTable');

router.get('/', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Início',
  	page: '../index.html',
  	requiresJS: ['app/controllers/index'],
    simpleTableList: simpleTableList
  });
});

router.get('/historico', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Histórico',
    page: '../history.html',
    requiresJS: ['app/controllers/history']
  });
});

router.get('/tabela-simples', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Tabela Simples',
    page: '../simpleTable.html',
    requiresJS: [],
    simpleTableList: simpleTableList
  });
});

router.get('/tabela-referencia', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Tabela Referência',
    page: '../referenceTable.html',
    requiresJS: ['app/controllers/reference']
  });
});

router.get('/configuracao', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Configuração',
    page: '../configuration.html',
    requiresJS: ['app/controllers/configuration']
  });
});

router.get('/processo/:id', service.isAutenticate, function(req, res, next) {
  Process.findById(req.param('id'), function(err, process){
    res.render('layouts/defaultProcess', {
      process: process
    });
  })
});

router.get('/start/:password', service.isAutenticate, function(req, res, next) {
  if(req.param('password') == 'inmei-start'){
    Reference.insertMany(JSON.parse('[{"ncm":"3001.20","description":"- Extratos de glândulas ou de outros órgãos ou das suas secreções"},{"ncm":"3001.20.10","description":"De fígado"},{"ncm":"3001.20.90","description":"Outros"},{"ncm":"3001.90","description":"- Outros"},{"ncm":"3001.90.10","description":"Heparina e seus sais"},{"ncm":"3001.90.20","description":"Pedaços de pericárdio de origem bovina ou suína"},{"ncm":"3001.90.3","description":"Glândulas e outros órgãos, dessecados, mesmo em pó"},{"ncm":"3001.90.31","description":"Fígados"},{"ncm":"3001.90.39","description":"Outros"},{"ncm":"3001.90.90","description":"Outros"},{"ncm":"3002.10","description":"- Anti-soros, outras frações do sangue e produtos imunológicos, mesmo modificados ou obtidos por via biotecnológica"},{"ncm":"3002.10.1","description":"Anti-soros específicos de animais ou de pessoas imunizados"},{"ncm":"3002.10.11","description":"Antiofídicos e outros antivenenosos"},{"ncm":"3002.10.12","description":"Antitetânico"},{"ncm":"3002.10.13","description":"Anticatarral"},{"ncm":"3002.10.14","description":"Antipiogênico"},{"ncm":"3002.10.15","description":"Antidiftérico"},{"ncm":"3002.10.16","description":"Polivalentes"},{"ncm":"3002.10.19","description":"Outros"},{"ncm":"3002.10.2","description":"Outras frações do sangue e produtos imunológicos, exceto os preparados como medicamentos"},{"ncm":"3002.10.22","description":"Imunoglobulina anti-Rh"},{"ncm":"3002.10.23","description":"Outras imunoglobulinas séricas"},{"ncm":"3002.10.24","description":"Concentrado de fator VIII"},{"ncm":"3002.10.25","description":"Soroalbumina, em forma de gel, para preparação de reagentes de diagnóstico"},{"ncm":"3002.10.26","description":"Anticorpos monoclonais em solução tampão, contendo albumina bovina"},{"ncm":"3002.10.29","description":"Outros"},{"ncm":"3002.10.3","description":"Outras frações do sangue e produtos imunológicos, preparados como medicamentos"},{"ncm":"3002.10.31","description":"Soroalbumina, exceto a humana"},{"ncm":"3002.10.32","description":"Plasmina (fibrinolisina)"},{"ncm":"3002.10.33","description":"Uroquinase"},{"ncm":"3002.10.34","description":"Imunoglobulina e cloridrato de histamina, associados"},{"ncm":"3002.10.35","description":"Imunoglobulina G, liofilizada ou em solução"},{"ncm":"3002.10.36","description":"Interferon beta; peg interferon alfa-2-a"},{"ncm":"3002.10.37","description":"Soroalbumina humana"},{"ncm":"3002.10.38","description":"Bevacizumab (DCI); daclizumab (DCI); etanercept (DCI); gemtuzumab (DCI)-ozogamicin(DCI); oprelvekin (DCI); rituximab (DCI); trastuzumab (DCI)"},{"ncm":"3002.10.39","description":"Outros"},{"ncm":"3002.20","description":"- Vacinas para medicina humana"},{"ncm":"3002.20.1","description":"Não apresentadas em doses, nem acondicionadas para venda a retalho"},{"ncm":"3002.20.11","description":"Contra a gripe"},{"ncm":"3002.20.12","description":"Contra a poliomielite"},{"ncm":"3002.20.13","description":"Contra a hepatite B"},{"ncm":"3002.20.14","description":"Contra o sarampo"},{"ncm":"3002.20.15","description":"Contra a meningite"},{"ncm":"3002.20.16","description":"Contra a rubéola, sarampo e caxumba (tríplice)"},{"ncm":"3002.20.17","description":"Outras tríplices"},{"ncm":"3002.20.18","description":"Anticatarral e antipiogênico"},{"ncm":"3002.20.19","description":"Outras"},{"ncm":"3002.20.2","description":"Apresentadas em doses ou acondicionadas para venda a retalho"},{"ncm":"3002.20.21","description":"Contra a gripe"},{"ncm":"3002.20.22","description":"Contra a poliomielite"},{"ncm":"3002.20.23","description":"Contra a hepatite B"},{"ncm":"3002.20.24","description":"Contra o sarampo"},{"ncm":"3002.20.25","description":"Contra a meningite"},{"ncm":"3002.20.26","description":"Contra a rubéola, sarampo e caxumba (tríplice)"},{"ncm":"3002.20.27","description":"Outras tríplices"},{"ncm":"3002.20.28","description":"Anticatarral e antipiogênico"},{"ncm":"3002.20.29","description":"Outras"},{"ncm":"3002.90.20","description":"Antitoxinas de origem microbiana"},{"ncm":"3002.90.92","description":"Para a saúde humana"},{"ncm":"3002.90.99","description":"Outros"},{"ncm":"3003.10","description":"- Que contenham penicilinas ou seus derivados, com a estrutura do ácido penicilânico, ou estreptomicinas ou seus derivados"},{"ncm":"3003.10.1","description":"Que contenham penicilinas ou seus derivados, com estrutura de ácido penicilânico"},{"ncm":"3003.10.11","description":"Ampicilina ou seus sais"},{"ncm":"3003.10.12","description":"Amoxicilina ou seus sais"},{"ncm":"3003.10.13","description":"Penicilina G benzatínica"},{"ncm":"3003.10.14","description":"Penicilina G potássica"},{"ncm":"3003.10.15","description":"Penicilina G procaínica"},{"ncm":"3003.10.19","description":"Outros"},{"ncm":"3003.10.20","description":"Que contenham estreptomicinas ou seus derivados"},{"ncm":"3003.20","description":"- Que contenham outros antibióticos"},{"ncm":"3003.20.1","description":"Que contenham anfenicóis ou seus derivados"},{"ncm":"3003.20.11","description":"Cloranfenicol, seu palmitato, seu succinato ou seu hemissuccinato"},{"ncm":"3003.20.19","description":"Outros"},{"ncm":"3003.20.2","description":"Que contenham macrolídios ou seus derivados"},{"ncm":"3003.20.21","description":"Eritromicina ou seus sais"},{"ncm":"3003.20.29","description":"Outros"},{"ncm":"3003.20.3","description":"Que contenham ansamicinas ou seus derivados"},{"ncm":"3003.20.31","description":"Rifamicina SV sódica"},{"ncm":"3003.20.32","description":"Rifampicina"},{"ncm":"3003.20.39","description":"Outros"},{"ncm":"3003.20.4","description":"Que contenham lincosamidas ou seus derivados"},{"ncm":"3003.20.41","description":"Cloridrato de lincomicina"},{"ncm":"3003.20.49","description":"Outros"},{"ncm":"3003.20.5","description":"Que contenham cefalosporinas, cefamicinas ou derivados destes produtos"},{"ncm":"3003.20.51","description":"Cefalotina sódica"},{"ncm":"3003.20.52","description":"Cefaclor ou cefalexina monoidratados"},{"ncm":"3003.20.59","description":"Outros"},{"ncm":"3003.20.6","description":"Que contenham aminoglucosídios ou seus derivados"},{"ncm":"3003.20.61","description":"Sulfato de gentamicina"},{"ncm":"3003.20.62","description":"Daunorubicina"},{"ncm":"3003.20.63","description":"Idarubicina; pirarubicina"},{"ncm":"3003.20.69","description":"Outros"},{"ncm":"3003.20.7","description":"Que contenham polipeptídios ou seus derivados"},{"ncm":"3003.20.71","description":"Vancomicina"},{"ncm":"3003.20.72","description":"Actinomicinas"},{"ncm":"3003.20.73","description":"Ciclosporina A"},{"ncm":"3003.20.79","description":"Outros"},{"ncm":"3003.20.9","description":"Outros"},{"ncm":"3003.20.91","description":"Mitomicina"},{"ncm":"3003.20.92","description":"Fumarato de tiamulina"},{"ncm":"3003.20.93","description":"Bleomicinas ou seus sais"},{"ncm":"3003.20.94","description":"Imipenem"},{"ncm":"3003.20.95","description":"Anfotericina B em lipossomas"},{"ncm":"3003.20.99","description":"Outros"},{"ncm":"3003.3","description":"- Que contenham hormônios ou outros produtos da posição 29.37, mas que não contenham antibióticos:"},{"ncm":"3003.31.00","description":"-- Que contenham insulina"},{"ncm":"3003.39","description":"-- Outros"},{"ncm":"3003.39.1","description":"Que contenham os seguintes hormônios polipeptídicos ou protéicos: buserelina ou seu acetato; corticotropina (ACTH); gonadotropina coriônica (hCG); gonadotropina sérica (PMSG); leuprolida ou seu acetato; menotropinas; somatostatina ou seus sais; somatotropina; triptorelina ou seus sais"},{"ncm":"3003.39.11","description":"Somatotropina"},{"ncm":"3003.39.12","description":"Gonadotropina coriônica (hCG)"},{"ncm":"3003.39.13","description":"Menotropinas"},{"ncm":"3003.39.14","description":"Corticotropina (ACTH)"},{"ncm":"3003.39.15","description":"Gonadotropina sérica (PMSG)"},{"ncm":"3003.39.16","description":"Somatostatina ou seus sais"},{"ncm":"3003.39.17","description":"Buserelina ou seu acetato"},{"ncm":"3003.39.18","description":"Triptorelina ou seus sais"},{"ncm":"3003.39.19","description":"Leuprolida ou seu acetato"},{"ncm":"3003.39.2","description":"Que contenham outros hormônios polipeptídicos ou protéicos, mas que não contenham produtos do item 3003.39.1"},{"ncm":"3003.39.21","description":"LH-RH (gonadorelina)"},{"ncm":"3003.39.22","description":"Oxitocina"},{"ncm":"3003.39.23","description":"Sais de insulina"},{"ncm":"3003.39.24","description":"Timosinas"},{"ncm":"3003.39.25","description":"Octreotida"},{"ncm":"3003.39.26","description":"Goserelina ou seu acetato"},{"ncm":"3003.39.27","description":"Nafarelina ou seu acetato"},{"ncm":"3003.39.29","description":"Outros"},{"ncm":"3003.39.3","description":"Que contenham estrogênios ou progestogênios"},{"ncm":"3003.39.31","description":"Hemissuccinato de estradiol"},{"ncm":"3003.39.32","description":"Fempropionato de estradiol"},{"ncm":"3003.39.33","description":"Estriol ou seu succinato"},{"ncm":"3003.39.34","description":"Alilestrenol"},{"ncm":"3003.39.35","description":"Linestrenol"},{"ncm":"3003.39.36","description":"Acetato de megestrol; formestano; fulvestranto"},{"ncm":"3003.39.37","description":"Desogestrel"},{"ncm":"3003.39.39","description":"Outros"},{"ncm":"3003.39.8","description":"Levotiroxina sódica; liotironina sódica"},{"ncm":"3003.39.81","description":"Levotiroxina sódica"},{"ncm":"3003.39.82","description":"Liotironina sódica"},{"ncm":"3003.39.9","description":"Outros"},{"ncm":"3003.39.91","description":"Sal sódico ou éster metílico do ácido 9,11,15-triidroxi-16-(3-clorofenoxi)prosta-5,13-dien-1-óico (derivado da prostaglandina F2alfa)"},{"ncm":"3003.39.92","description":"Tiratricol (triac) ou seu sal sódico"},{"ncm":"3003.39.94","description":"Espironolactona"},{"ncm":"3003.39.95","description":"Exemestano"},{"ncm":"3003.39.99","description":"Outros"},{"ncm":"3003.40","description":"- Que contenham alcalóides ou seus derivados, mas que não contenham hormônios nem outros produtos da posição 29.37, nem antibióticos"},{"ncm":"3003.40.10","description":"Vimblastina; vincristina; derivados destes produtos; topotecan ou seu cloridrato"},{"ncm":"3003.40.20","description":"Pilocarpina, seu nitrato ou seu cloridrato"},{"ncm":"3003.40.30","description":"Metanossulfonato de diidroergocristina"},{"ncm":"3003.40.40","description":"Codeína ou seus sais"},{"ncm":"3003.40.50","description":"Granisetron; tropisetrona ou seu cloridrato"},{"ncm":"3003.40.90","description":"Outros"},{"ncm":"3003.90","description":"- Outros"},{"ncm":"3003.90.1","description":"Que contenham vitaminas e outros produtos da posição 29.36"},{"ncm":"3003.90.11","description":"Folinato de cálcio (leucovorina)"},{"ncm":"3003.90.12","description":"Nicotinamida"},{"ncm":"3003.90.13","description":"Hidroxocobalamina ou seus sais; cianocobalamina"},{"ncm":"3003.90.14","description":"Vitamina A1 (retinol) ou seus derivados, exceto o ácido retinóico"},{"ncm":"3003.90.15","description":"D-Pantotenato de cálcio; vitamina D3 (colecalciferol)"},{"ncm":"3003.90.16","description":"Ésteres das vitaminas A e D3, em concentração superior ou igual a 1.500.000 UI/g de vitamina A e superior ou igual a 50.000 UI/g de vitamina D3"},{"ncm":"3003.90.17","description":"Ácido retinóico (tretinoína)"},{"ncm":"3003.90.19","description":"Outros"},{"ncm":"3003.90.2","description":"Que contenham enzimas mas que não contenham vitaminas nem outros produtos da posição 29.36"},{"ncm":"3003.90.21","description":"Estreptoquinase"},{"ncm":"3003.90.22","description":"L-Asparaginase"},{"ncm":"3003.90.23","description":"Deoxirribonuclease"},{"ncm":"3003.90.29","description":"Outros"},{"ncm":"3003.90.3","description":"Que contenham produtos das posições 29.16 a 29.20, mas que não contenham produtos dos itens 3003.90.1 e 3003.90.2"},{"ncm":"3003.90.31","description":"Permetrina; nitrato de propatila; benzoato de benzila; dioctilsulfossuccinato de sódio"},{"ncm":"3003.90.32","description":"Ácido cólico; ácido deoxicólico; sal magnésico do ácido deidrocólico"},{"ncm":"3003.90.33","description":"Ácido glucônico, seus sais ou seus ésteres"},{"ncm":"3003.90.34","description":"Ácido O-acetilsalicílico; O-acetilsalicilato de alumínio; salicilato de metila; diclorvós"},{"ncm":"3003.90.35","description":"Lactofosfato de cálcio"},{"ncm":"3003.90.36","description":"Ácido láctico, seus sais ou seus ésteres; ácido 4-(4-hidroxifenoxi)-3,5-diiodofenilacético"},{"ncm":"3003.90.37","description":"Ácido fumárico, seus sais ou seus ésteres"},{"ncm":"3003.90.38","description":"Etretinato; fosfestrol ou seus sais de di ou tetrassódio"},{"ncm":"3003.90.39","description":"Outros"},{"ncm":"3003.90.4","description":"Que contenham produtos das posições 29.21 e 29.22, mas que não contenham produtos dos itens 3003.90.1 a 3003.90.3"},{"ncm":"3003.90.41","description":"Sulfato de tranilcipromina; dietilpropiona"},{"ncm":"3003.90.42","description":"Cloridrato de ketamina"},{"ncm":"3003.90.43","description":"Clembuterol ou seu cloridrato"},{"ncm":"3003.90.44","description":"Tamoxifen ou seu citrato"},{"ncm":"3003.90.45","description":"Levodopa; alfa-metildopa"},{"ncm":"3003.90.46","description":"Cloridrato de fenilefrina; mirtecaína; propranolol ou seus sais"},{"ncm":"3003.90.47","description":"Diclofenaco de sódio; diclofenaco de potássio; diclofenaco de dietilamônio"},{"ncm":"3003.90.48","description":"Clorambucil; clormetina (DCI) ou seu cloridrato; melfalano; toremifene ou seu citrato"},{"ncm":"3003.90.49","description":"Outros"},{"ncm":"3003.90.5","description":"Que contenham produtos das posições 29.24 a 29.26, mas que não contenham produtos dos itens 3003.90.1 a 3003.90.4"},{"ncm":"3003.90.51","description":"Metoclopramida ou seu cloridrato; closantel"},{"ncm":"3003.90.52","description":"Atenolol; prilocaína ou seu cloridrato; talidomida"},{"ncm":"3003.90.53","description":"Lidocaína ou seu cloridrato; flutamida"},{"ncm":"3003.90.54","description":"Femproporex"},{"ncm":"3003.90.55","description":"Paracetamol; bromoprida"},{"ncm":"3003.90.57","description":"Clorexidina ou seus sais; isetionato de pentamidina"},{"ncm":"3003.90.58","description":"Aminoglutetimida; carmustina; deferoxamina (desferrioxamina B) ou seus sais, derivados destes produtos; lomustina"},{"ncm":"3003.90.59","description":"Outros"},{"ncm":"3003.90.6","description":"Que contenham produtos das posições 29.30 a 29.32, mas que não contenham produtos dos itens 3003.90.1 a 3003.90.5"},{"ncm":"3003.90.61","description":"Quercetina"},{"ncm":"3003.90.62","description":"Tiaprida"},{"ncm":"3003.90.63","description":"Etidronato dissódico"},{"ncm":"3003.90.64","description":"Cloridrato de amiodarona"},{"ncm":"3003.90.65","description":"Nitrovin; moxidectina"},{"ncm":"3003.90.66","description":"Ácido clodrônico ou seu sal dissódico; estreptozocina; fotemustina"},{"ncm":"3003.90.67","description":"Carbocisteína; sulfiram"},{"ncm":"3003.90.69","description":"Outros"},{"ncm":"3003.90.7","description":"Que contenham produtos da posição 29.33, mas que não contenham produtos dos itens 3003.90.1 a 3003.90.6"},{"ncm":"3003.90.71","description":"Terfenadina; talniflumato; malato ácido de cleboprida; econazol ou seu nitrato; nitrato de isoconazol; flubendazol; cloridrato de mepivacaína; trimetoprima; cloridrato de bupivacaína"},{"ncm":"3003.90.72","description":"Cloridrato de loperamida; fembendazol; ketorolac trometamina; nifedipina; nimodipina; nitrendipina"},{"ncm":"3003.90.73","description":"Albendazol ou seu sulfóxido; mebendazol; 6-mercaptopurina; metilsulfato de amezínio; oxifendazol; praziquantel"},{"ncm":"3003.90.74","description":"Alprazolam; bromazepam; clordiazepóxido; cloridrato de petidina; diazepam; droperidol; mazindol; triazolam"},{"ncm":"3003.90.75","description":"Benzetimida ou seu cloridrato; fenitoína ou seu sal sódico; isoniazida; pirazinamida"},{"ncm":"3003.90.76","description":"Ácido 2-(2-metil-3-cloroanilina)nicotínico ou seu sal de lisina; metronidazol ou seus sais; azatioprina; nitrato de miconazol"},{"ncm":"3003.90.77","description":"Enrofloxacina; maleato de enalapril; maleato de pirilamina; nicarbazina; norfloxacina; sais de piperazina"},{"ncm":"3003.90.78","description":"Altretamina; bortezomib; dacarbazina; disoproxilfumarato de tenofovir; enfuvirtida; fluspirileno; letrozol; lopinavir; mesilato de imatinib; nelfinavir ou seu mesilato; nevirapine; pemetrexed; saquinavir; sulfato de abacavir; sulfato de atazanavir; sulfato de indinavir; temozolomida; tioguanina; tiopental sódico; trietilenotiofosforamida; trimetrexato; uracil e tegafur; verteporfin"},{"ncm":"3003.90.79","description":"Outros"},{"ncm":"3003.90.8","description":"Que contenham produtos das posições 29.34, 29.35 e 29.38, mas que não contenham produtos dos itens 3003.90.1 a 3003.90.7"},{"ncm":"3003.90.81","description":"Levamisol ou seus sais; tetramisol"},{"ncm":"3003.90.82","description":"Sulfadiazina ou seu sal sódico; sulfametoxazol"},{"ncm":"3003.90.83","description":"Cloxazolam; ketazolam; piroxicam; tenoxicam"},{"ncm":"3003.90.84","description":"Ftalilsulfatiazol; inosina"},{"ncm":"3003.90.85","description":"Enantato de flufenazina; prometazina; gliburida; rutosídio; deslanosídio"},{"ncm":"3003.90.86","description":"Clortalidona; furosemida"},{"ncm":"3003.90.87","description":"Cloridrato de tizanidina; cetoconazol; furazolidona"},{"ncm":"3003.90.88","description":"Amprenavir; aprepitanto; delavirdina ou seu mesilato; efavirenz; emtricitabina; etopósido; everolimus; fosamprenavir cálcico; fosfato de fludarabina; gencitabina ou seu cloridrato; raltitrexida; ritonavir; sirolimus; tacrolimus; tenipósido"},{"ncm":"3003.90.89","description":"Outros"},{"ncm":"3003.90.9","description":"Outros"},{"ncm":"3003.90.91","description":"Extrato de pólen"},{"ncm":"3003.90.92","description":"Crisarobina; disofenol"},{"ncm":"3003.90.93","description":"Diclofenaco resinato"},{"ncm":"3003.90.94","description":"Silimarina"},{"ncm":"3003.90.95","description":"Bussulfano; dexormaplatina; dietilestilbestrol ou seu dipropionato; enloplatina; iproplatina; lobaplatina; miboplatina; miltefosina; mitotano; ormaplatina; procarbazina ou seu cloridrato; propofol; sebriplatina; zeniplatina"},{"ncm":"3003.90.96","description":"Complexo de ferro dextrana"},{"ncm":"3003.90.99","description":"Outros"},{"ncm":"3004.10","description":"- Que contenham penicilinas ou seus derivados, com estrutura de ácido penicilânico, ou estreptomicinas ou seus derivados"},{"ncm":"3004.10.1","description":"Que contenham penicilinas ou seus derivados, com estrutura de ácido penicilânico"},{"ncm":"3004.10.11","description":"Ampicilina ou seus sais"},{"ncm":"3004.10.12","description":"Amoxicilina ou seus sais"},{"ncm":"3004.10.13","description":"Penicilina G benzatínica"},{"ncm":"3004.10.14","description":"Penicilina G potássica"},{"ncm":"3004.10.15","description":"Penicilina G procaínica"},{"ncm":"3004.10.19","description":"Outros"},{"ncm":"3004.10.20","description":"Que contenham estreptomicinas ou seus derivados"},{"ncm":"3004.20","description":"- Que contenham outros antibióticos"},{"ncm":"3004.20.1","description":"Que contenham anfenicóis ou seus sais"},{"ncm":"3004.20.11","description":"Cloranfenicol, seu palmitato, seu succinato ou seu hemissuccinato"},{"ncm":"3004.20.19","description":"Outros"},{"ncm":"3004.20.2","description":"Que contenham macrolídios ou seus derivados"},{"ncm":"3004.20.21","description":"Eritromicina ou seus sais"},{"ncm":"3004.20.29","description":"Outros"},{"ncm":"3004.20.3","description":"Que contenham ansamicinas ou seus derivados"},{"ncm":"3004.20.31","description":"Rifamicina SV sódica"},{"ncm":"3004.20.32","description":"Rifampicina"},{"ncm":"3004.20.39","description":"Outros"},{"ncm":"3004.20.4","description":"Que contenham lincosamidas ou seus derivados"},{"ncm":"3004.20.41","description":"Cloridrato de lincomicina"},{"ncm":"3004.20.49","description":"Outros"},{"ncm":"3004.20.5","description":"Que contenham cefalosporinas, cefamicinas ou derivados destes produtos"},{"ncm":"3004.20.51","description":"Cefalotina sódica"},{"ncm":"3004.20.52","description":"Cefaclor ou cefalexina monoidratados"},{"ncm":"3004.20.59","description":"Outros"},{"ncm":"3004.20.6","description":"Que contenham aminoglucosídios ou seus derivados"},{"ncm":"3004.20.61","description":"Sulfato de gentamicina"},{"ncm":"3004.20.62","description":"Daunorubicina"},{"ncm":"3004.20.63","description":"Idarubicina; pirarubicina"},{"ncm":"3004.20.69","description":"Outros"},{"ncm":"3004.20.7","description":"Que contenham polipeptídios ou seus derivados"},{"ncm":"3004.20.71","description":"Vancomicina"},{"ncm":"3004.20.72","description":"Actinomicinas"},{"ncm":"3004.20.73","description":"Ciclosporina A"},{"ncm":"3004.20.79","description":"Outros"},{"ncm":"3004.20.9","description":"Outros"},{"ncm":"3004.20.91","description":"Mitomicina"},{"ncm":"3004.20.92","description":"Fumarato de tiamulina"},{"ncm":"3004.20.93","description":"Bleomicinas ou seus sais"},{"ncm":"3004.20.94","description":"Imipenem"},{"ncm":"3004.20.95","description":"Anfotericina B em lipossomas"},{"ncm":"3004.20.99","description":"Outros"},{"ncm":"3004.3","description":"- Que contenham hormônios ou outros produtos da posição 29.37, mas que não contenham antibióticos:"},{"ncm":"3004.31.00","description":"-- Que contenham insulina"},{"ncm":"3004.32","description":"-- Que contenham hormônios corticosteróides, seus derivados ou análogos estruturais"},{"ncm":"3004.32.10","description":"Hormônios corticosteróides"},{"ncm":"3004.32.20","description":"Espironolactona"},{"ncm":"3004.32.90","description":"Outros"},{"ncm":"3004.39","description":"-- Outros"},{"ncm":"3004.39.1","description":"Que contenham os seguintes hormônios polipeptídicos ou protéicos: buserelina ou seu acetato; corticotropina (ACTH); gonadotropina coriônica (hCG); gonadotropina sérica (PMSG); leuprolida ou seu acetato; menotropinas; somatostatina ou seus sais; somatotropina; triptorelina ou seus sais"},{"ncm":"3004.39.11","description":"Somatotropina"},{"ncm":"3004.39.12","description":"Gonadotropina coriônica (hCG)"},{"ncm":"3004.39.13","description":"Menotropinas"},{"ncm":"3004.39.14","description":"Corticotropina (ACTH)"},{"ncm":"3004.39.15","description":"Gonadotropina sérica (PMSG)"},{"ncm":"3004.39.16","description":"Somatostatina ou seus sais"},{"ncm":"3004.39.17","description":"Buserelina ou seu acetato"},{"ncm":"3004.39.18","description":"Triptorelina ou seus sais"},{"ncm":"3004.39.19","description":"Leuprolida ou seu acetato"},{"ncm":"3004.39.2","description":"Que contenham outros hormônios polipeptídicos ou protéicos, mas que não contenham produtos do item 3004.39.1"},{"ncm":"3004.39.21","description":"LH-RH (gonadorelina)"},{"ncm":"3004.39.22","description":"Oxitocina"},{"ncm":"3004.39.23","description":"Sais de insulina"},{"ncm":"3004.39.24","description":"Timosinas"},{"ncm":"3004.39.25","description":"Calcitonina"},{"ncm":"3004.39.26","description":"Octreotida"},{"ncm":"3004.39.27","description":"Goserelina ou seu acetato"},{"ncm":"3004.39.28","description":"Nafarelina ou seu acetato"},{"ncm":"3004.39.29","description":"Outros"},{"ncm":"3004.39.3","description":"Que contenham estrogênios ou progestogênios"},{"ncm":"3004.39.31","description":"Hemissuccinato de estradiol"},{"ncm":"3004.39.32","description":"Fempropionato de estradiol"},{"ncm":"3004.39.33","description":"Estriol ou seu succinato"},{"ncm":"3004.39.34","description":"Alilestrenol"},{"ncm":"3004.39.35","description":"Linestrenol"},{"ncm":"3004.39.36","description":"Acetato de megestrol; formestano; fulvestranto"},{"ncm":"3004.39.37","description":"Desogestrel"},{"ncm":"3004.39.39","description":"Outros"},{"ncm":"3004.39.8","description":"Levotiroxina sódica; liotironina sódica"},{"ncm":"3004.39.81","description":"Levotiroxina sódica"},{"ncm":"3004.39.82","description":"Liotironina sódica"},{"ncm":"3004.39.9","description":"Outros"},{"ncm":"3004.39.91","description":"Sal sódico ou éster metílico do ácido 9,11,15-triidroxi-16-(3-clorofenoxi)prosta-5,13-dien-1-óico (derivado da prostaglandina F2alfa)"},{"ncm":"3004.39.92","description":"Tiratricol (triac) ou seu sal sódico"},{"ncm":"3004.39.94","description":"Exemestano"},{"ncm":"3004.39.99","description":"Outros"},{"ncm":"3004.40","description":"- Que contenham alcalóides ou seus derivados, mas que não contenham hormônios nem outros produtos da posição 29.37, nem antibióticos"},{"ncm":"3004.40.10","description":"Vimblastina; vincristina; derivados destes produtos; topotecan ou seu cloridrato"},{"ncm":"3004.40.20","description":"Pilocarpina, seu nitrato ou seu cloridrato"},{"ncm":"3004.40.30","description":"Metanossulfonato de diidroergocristina"},{"ncm":"3004.40.40","description":"Codeína ou seus sais"},{"ncm":"3004.40.50","description":"Granisetron; tropisetrona ou seu cloridrato"},{"ncm":"3004.40.90","description":"Outros"},{"ncm":"3004.50","description":"- Outros medicamentos que contenham vitaminas ou outros produtos da posição 29.36"},{"ncm":"3004.50.10","description":"Folinato de cálcio (leucovorina)"},{"ncm":"3004.50.20","description":"Nicotinamida"},{"ncm":"3004.50.30","description":"Hidroxocobalamina ou seus sais; cianocobalamina"},{"ncm":"3004.50.40","description":"Vitamina A1 (retinol) ou seus derivados, exceto o ácido retinóico"},{"ncm":"3004.50.50","description":"D-Pantotenato de cálcio; vitamina D3 (colecalciferol)"},{"ncm":"3004.50.60","description":"Ácido retinóico (tretinoína)"},{"ncm":"3004.50.90","description":"Outros"},{"ncm":"3004.90","description":"- Outros"},{"ncm":"3004.90.1","description":"Que contenham enzimas"},{"ncm":"3004.90.11","description":"Estreptoquinase"},{"ncm":"3004.90.12","description":"L-Asparaginase"},{"ncm":"3004.90.13","description":"Deoxirribonuclease"},{"ncm":"3004.90.19","description":"Outros"},{"ncm":"3004.90.2","description":"Que contenham produtos das posições 29.16 a 29.20, mas que não contenham produtos do item 3004.90.1"},{"ncm":"3004.90.21","description":"Permetrina; nitrato de propatila; benzoato de benzila; dioctilsulfossuccinato de sódio"},{"ncm":"3004.90.22","description":"Ácido cólico; ácido deoxicólico; sal magnésico do ácido deidrocólico"},{"ncm":"3004.90.23","description":"Ácido glucônico, seus sais ou seus ésteres"},{"ncm":"3004.90.24","description":"Ácido O-acetilsalicílico; O-acetilsalicilato de alumínio; salicilato de metila; diclorvós"},{"ncm":"3004.90.25","description":"Lactofosfato de cálcio"},{"ncm":"3004.90.26","description":"Ácido láctico, seus sais ou seus ésteres; ácido 4-(4-hidroxifenoxi)-3,5-diiodofenilacético; ácido fumárico, seus sais ou seus ésteres"},{"ncm":"3004.90.27","description":"Nitroglicerina, destinada a ser administrada por via percutânea"},{"ncm":"3004.90.28","description":"Etretinato; fosfestrol ou seus sais de di ou tetrassódio"},{"ncm":"3004.90.29","description":"Outros"},{"ncm":"3004.90.3","description":"Que contenham produtos das posições 29.21 e 29.22, mas que não contenham produtos dos itens 3004.90.1 e 3004.90.2"},{"ncm":"3004.90.31","description":"Sulfato de tranilcipromina; dietilpropiona"},{"ncm":"3004.90.32","description":"Cloridrato de ketamina"},{"ncm":"3004.90.33","description":"Clembuterol ou seu cloridrato"},{"ncm":"3004.90.34","description":"Tamoxifen ou seu citrato"},{"ncm":"3004.90.35","description":"Levodopa; alfa-metildopa"},{"ncm":"3004.90.36","description":"Cloridrato de fenilefrina; mirtecaína; propranolol ou seus sais"},{"ncm":"3004.90.37","description":"Diclofenaco de sódio; diclofenaco de potássio; diclofenaco de dietilamônio"},{"ncm":"3004.90.38","description":"Clorambucil; clormetina (DCI) ou seu cloridrato; melfalano; toremifene ou seu citrato"},{"ncm":"3004.90.39","description":"Outros"},{"ncm":"3004.90.4","description":"Que contenham produtos das posições 29.24 a 29.26, mas que não contenham produtos dos itens 3004.90.1 a 3004.90.3"},{"ncm":"3004.90.41","description":"Metoclopramida ou seu cloridrato; closantel"},{"ncm":"3004.90.42","description":"Atenolol; prilocaína ou seu cloridrato; talidomida"},{"ncm":"3004.90.43","description":"Lidocaína ou seu cloridrato; flutamida"},{"ncm":"3004.90.44","description":"Femproporex"},{"ncm":"3004.90.45","description":"Paracetamol; bromoprida"},{"ncm":"3004.90.47","description":"Clorexidina ou seus sais; isetionato de pentamidina"},{"ncm":"3004.90.48","description":"Aminoglutetimida; carmustina; deferoxamina (desferrioxamina B) ou seus sais, derivados destes produtos; lomustina"},{"ncm":"3004.90.49","description":"Outros"},{"ncm":"3004.90.5","description":"Que contenham produtos das posições 29.30 a 29.32, mas que não contenham produtos dos itens 3004.90.1 a 3004.90.4"},{"ncm":"3004.90.51","description":"Quercetina"},{"ncm":"3004.90.52","description":"Tiaprida"},{"ncm":"3004.90.53","description":"Etidronato dissódico"},{"ncm":"3004.90.54","description":"Cloridrato de amiodarona"},{"ncm":"3004.90.55","description":"Nitrovin; moxidectina"},{"ncm":"3004.90.57","description":"Carbocisteína; sulfiram"},{"ncm":"3004.90.58","description":"Ácido clodrônico ou seu sal dissódico; estreptozocina; fotemustina"},{"ncm":"3004.90.59","description":"Outros"},{"ncm":"3004.90.6","description":"Que contenham produtos da posição 29.33, mas que não contenham produtos dos itens 3004.90.1 a 3004.90.5"},{"ncm":"3004.90.61","description":"Terfenadina; talniflumato; malato ácido de cleboprida; econazol ou seu nitrato; nitrato de isoconazol; flubendazol; cloridrato de mepivacaína; trimetoprima; cloridrato de bupivacaína"},{"ncm":"3004.90.62","description":"Cloridrato de loperamida; fembendazol; ketorolac trometamina; nifedipina nimodipina; nitrendipina"},{"ncm":"3004.90.63","description":"Albendazol ou seu sulfóxido; mebendazol; 6-mercaptopurina; metilsulfato de amezínio; oxifendazol; praziquantel"},{"ncm":"3004.90.64","description":"Alprazolam; bromazepam; clordiazepóxido; cloridrato de petidina; diazepam; droperidol; mazindol; triazolam"},{"ncm":"3004.90.65","description":"Benzetimida ou seu cloridrato; fenitoína ou seu sal sódico; isoniazida; pirazinamida"},{"ncm":"3004.90.66","description":"Ácido 2-(2-metil-3-cloroanilina)nicotínico ou seu sal de lisina; metronidazol ou seus sais; azatioprina; nitrato de miconazol"},{"ncm":"3004.90.67","description":"Enrofloxacina; maleato de enalapril; maleato de pirilamina; nicarbazina; norfloxacina; sais de piperazina"},{"ncm":"3004.90.68","description":"Altretamina; bortezomib; dacarbazina; disoproxilfumarato de tenofovir; enfuvirtida; fluspirileno; letrozol; lopinavir; mesilato de imatinib; nelfinavir ou seu mesilato; nevirapine; pemetrexed; saquinavir; sulfato de abacavir; sulfato de atazanavir; sulfato de indinavir; temozolomida; tioguanina; tiopental sódico; trietilenotiofosforamida; trimetrexato; uracil e tegafur; verteporfin"},{"ncm":"3004.90.69","description":"Outros"},{"ncm":"3004.90.7","description":"Que contenham produtos das posições 29.34, 29.35 e 29.38, mas que não contenham produtos dos itens 3004.90.1 a 3004.90.6"},{"ncm":"3004.90.71","description":"Levamisol ou seus sais; tetramisol"},{"ncm":"3004.90.72","description":"Sulfadiazina ou seu sal sódico; sulfametoxazol"},{"ncm":"3004.90.73","description":"Cloxazolam; ketazolam; piroxicam; tenoxicam"},{"ncm":"3004.90.74","description":"Ftalilsulfatiazol; inosina"},{"ncm":"3004.90.75","description":"Enantato de flufenazina; prometazina; gliburida; rutosídio; deslanosídio"},{"ncm":"3004.90.76","description":"Clortalidona; furosemida"},{"ncm":"3004.90.77","description":"Cloridrato de tizanidina; cetoconazol; furazolidona"},{"ncm":"3004.90.78","description":"Amprenavir; aprepitanto; delavirdina ou seu mesilato; efavirenz; emtricitabina; etopósido; everolimus; fosamprenavir cálcico; fosfato de fludarabina; gencitabina ou seu cloridrato; raltitrexida; ritonavir; sirolimus; tacrolimus; tenipósido"},{"ncm":"3004.90.79","description":"Outros"},{"ncm":"3004.90.9","description":"Outros"},{"ncm":"3004.90.91","description":"Extrato de pólen"},{"ncm":"3004.90.92","description":"Crisarobina; disofenol"},{"ncm":"3004.90.93","description":"Diclofenaco resinato"},{"ncm":"3004.90.94","description":"Silimarina"},{"ncm":"3004.90.95","description":"Bussulfano; dexormaplatina; dietilestilbestrol ou seu dipropionato; enloplatina; iproplatina; lobaplatina; miboplatina; miltefosina; mitotano; ormaplatina; procarbazina ou seu cloridrato; propofol; sebriplatina; zeniplatina"},{"ncm":"3004.90.96","description":"Complexo de ferro dextrana"},{"ncm":"3004.90.99","description":"Outros"},{"ncm":"3005.10","description":"- Curativos (pensos) adesivos e outros artigos com uma camada adesiva"},{"ncm":"3005.10.10","description":"Impregnados ou recobertos de substâncias farmacêuticas"},{"ncm":"3006.30.1","description":"Preparações opacificantes para exames radiográficos"},{"ncm":"3006.30.11","description":"À base de ioexol"},{"ncm":"3006.30.12","description":"À base de iocarmato de dimeglumina ou de gadoterato de meglumina"},{"ncm":"3006.30.13","description":"À base de iopamidol"},{"ncm":"3006.30.15","description":"À base de dióxido de zircônio e sulfato de gentamicina"},{"ncm":"3006.30.16","description":"À base de diatrizoato de sódio ou de meglumina"},{"ncm":"3006.30.17","description":"À base de ioversol ou de iopromida"},{"ncm":"3006.30.18","description":"À base de iotalamato de sódio, de iotalamato de meglumina ou de suas misturas"},{"ncm":"3006.30.19","description":"Outras"},{"ncm":"3006.30.2","description":"Reagentes de diagnóstico concebidos para serem administrados ao paciente"},{"ncm":"3006.30.21","description":"À base de somatoliberina"},{"ncm":"3006.30.29","description":"Outros"},{"ncm":"3006.60.00","description":"- Preparações químicas contraceptivas à base de hormônios, de outros produtos da posição 29.37 ou de espermicidas"},{"ncm":"3303.00.10","description":"Perfumes (extratos)"},{"ncm":"3303.00.20","description":"Águas-de-colônia"},{"ncm":"3304.10.00","description":"- Produtos de maquiagem para os lábios"},{"ncm":"3304.20","description":"- Produtos de maquiagem para os olhos"},{"ncm":"3304.20.10","description":"Sombra, delineador, lápis para sobrancelhas e rímel"},{"ncm":"3304.20.90","description":"Outros"},{"ncm":"3304.30.00","description":"- Preparações para manicuros e pedicuros"},{"ncm":"3304.9","description":"- Outros:"},{"ncm":"3304.91.00","description":"-- Pós, incluindo os compactos"},{"ncm":"3304.99","description":"-- Outros"},{"ncm":"3304.99.10","description":"Cremes de beleza e cremes nutritivos; loções tônicas"},{"ncm":"3304.99.90","description":"Outros"},{"ncm":"3305.10.00","description":"- Xampus"},{"ncm":"3305.20.00","description":"- Preparações para ondulação ou alisamento, permanentes, dos cabelos"},{"ncm":"3305.30.00","description":"- Laquês para o cabelo"},{"ncm":"3305.90.00","description":"- Outras"},{"ncm":"3307.10.00","description":"- Preparações para barbear (antes, durante ou após)"},{"ncm":"3307.20","description":"- Desodorantes (desodorizantes) corporais e antiperspirantes"},{"ncm":"3307.20.10","description":"Líquidos"},{"ncm":"3307.20.90","description":"Outros"},{"ncm":"3307.30.00","description":"- Sais perfumados e outras preparações para banhos"},{"ncm":"3307.4","description":"- Preparações para perfumar ou para desodorizar ambientes, incluindo as preparações odoríferas para cerimônias religiosas:"},{"ncm":"3307.41.00","description":"-- Agarbate e outras preparações odoríferas que atuem por combustão"},{"ncm":"3307.49.00","description":"-- Outras"},{"ncm":"3307.90.00","description":"- Outros"},{"ncm":"3401.1","description":"- Sabões, produtos e preparações orgânicos tensoativos, em barras, pães, pedaços ou figuras moldadas, e papel, pastas (ouates), feltros e falsos tecidos, impregnados, revestidos ou recobertos de sabão ou de detergentes:"},{"ncm":"3401.20","description":"- Sabões sob outras formas"},{"ncm":"3401.20.10","description":"De toucador"},{"ncm":"3401.20.90","description":"Outros"},{"ncm":"3401.30.00","description":"- Produtos e preparações orgânicos tensoativos para lavagem da pele, em forma de líquido ou de creme, acondicionados para venda a retalho, mesmo que contenham sabão"},{"ncm":"9603.2","description":"- Escovas de dentes, escovas e pincéis de barba, escovas para cabelos, para cílios ou para unhas e outras escovas de toucador de pessoas, incluindo as que sejam partes de aparelhos:"},{"ncm":"9603.21.00","description":"-- Escovas de dentes, incluindo as escovas para dentaduras"},{"ncm":"2106.90","description":"- Outras"},{"ncm":"2106.90.10","description":"Preparações dos tipos utilizados para elaboração de bebidas"},{"ncm":"2201.10.00","description":"- Águas minerais e águas gaseificadas"},{"ncm":"2201.90.00","description":"- Outros"},{"ncm":"2202.10.00","description":"- Águas, incluindo as águas minerais e as águas gaseificadas, adicionadas de açúcar ou de outros edulcorantes ou aromatizadas"},{"ncm":"2202.90.00","description":"- Outras"},{"ncm":"2402.10.00","description":"- Charutos e cigarrilhas, que contenham tabaco"},{"ncm":"2402.20.00","description":"- Cigarros que contenham tabaco"},{"ncm":"2402.90.00","description":"- Outros"}]'));
    res.send({ error: 0, message: 'Iniciado!' });
  }else{
    res.send({ error: 1, message: 'Senha inválida!' });
  }
});

router.get('/login', function(req, res, next) {
  res.render('layouts/login', {
  	title: 'Login'
  });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  req.logOut();
  res.redirect('/')
});

router.post('/login', function(req, res, next) {
   passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login?error'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
});

router.post('/register', function(req, res) {
  console.log('Recording user: ' + req.body.username);
  User.register(new User({
    username : req.body.username
  }), req.body.password, function(err, user) {
    if (err) {
    	res.redirect('/login');
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

module.exports = router;