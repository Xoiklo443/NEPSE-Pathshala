/* =========================================================================
   STATE (in-memory only — resets on reload, as required in this environment)
   ========================================================================= */
const state = {
  lang: 'en',
  theme: 'light',
  route: 'home',
  topicId: null,
  progress: new Set(),
  quizAnswers: {},
};

/* =========================================================================
   UI STRINGS
   ========================================================================= */
const UI = {
  en: {
    'brand.name':'NEPSE Pathshala','brand.tag':'Free NEPSE Learning',
    'nav.home':'Home','nav.roadmap':'Roadmap','nav.chapters':'Chapters','nav.glossary':'Glossary','nav.calculators':'Calculators','nav.faq':'FAQ',
    'hero.eyebrow':'A free course for every Nepali investor',
    'hero.h1a':'Learn NEPSE from ','hero.h1b':'zero','hero.h1c':', at your own pace.',
    'hero.lead':'A structured, bilingual course that takes you from "what is a share?" to reading a company\'s balance sheet — built entirely around how the Nepal Stock Exchange actually works.',
    'hero.cta1':'Start the roadmap','hero.cta2':'Browse chapters',
    'hero.stat1n':'19','hero.stat1s':'Lessons',
    'hero.stat2n':'7','hero.stat2s':'Chapters',
    'hero.stat3n':'38','hero.stat3s':'Quiz questions',
    'hero.stat4n':'100%','hero.stat4s':'Free, always',
    'ledger.title':'Sample NEPSE Ledger','ledger.badge':'Illustrative',
    'ledger.co1':'Commercial Bank Co.','ledger.co1s':'Large-cap · Banking',
    'ledger.co2':'Hydro Development Ltd.','ledger.co2s':'Mid-cap · Hydropower',
    'ledger.co3':'Finance & Capital Co.','ledger.co3s':'Small-cap · Finance',
    'ledger.note':'Figures are illustrative examples for learning — not live market data.',
    'roadmap.kicker':'Your Learning Path','roadmap.title':'The Beginner Roadmap',
    'roadmap.lead':'Follow these seven stages in order. Each stage builds on the last — by the end, you\'ll be able to open an account, apply for an IPO, read a company\'s key ratios, and protect yourself from common scams.',
    'chapters.kicker':'Full Curriculum','chapters.title':'All Chapters & Lessons',
    'chapters.lead':'Nineteen lessons organised into seven chapters, moving from foundational concepts to advanced analysis and investor psychology.',
    'glossary.kicker':'Quick Reference','glossary.title':'Financial Glossary',
    'glossary.lead':'Every key term used across this course, in one searchable place.',
    'glossary.search':'Search a term… e.g. BOID, CRN, EPS',
    'calc.kicker':'Try It Yourself','calc.title':'Interactive Calculators',
    'calc.lead':'Play with real formulas used in NEPSE investing. These are for learning purposes — always confirm with your broker or Mero Share before making decisions.',
    'faq.kicker':'Still Curious?','faq.title':'Frequently Asked Questions',
    'search.kicker':'Search Results','search.title':'Search',
    'topic.backToChapters':'Back to chapters',
    'topic.simple':'Simple Explanation','topic.detailed':'Detailed Explanation','topic.example':'Real Nepal Example',
    'topic.why':'Why It Matters','topic.misconceptions':'Common Misconceptions','topic.takeaways':'Remember This',
    'topic.markDone':'Mark as complete','topic.markedDone':'Completed ✓',
    'topic.quizTitle':'Quick Check','topic.quizSub':'Test what you just learned',
    'topic.prev':'Previous lesson','topic.next':'Next lesson',
    'quiz.submit':'Check answer','quiz.correct':'Correct!','quiz.incorrect':'Not quite.',
    'roadmap.progressLabel':'Overall progress',
    'calc.div.title':'Dividend Calculator','calc.div.hint':'Estimate what a dividend announcement is actually worth to you.',
    'calc.div.shares':'Shares you own','calc.div.type':'Dividend type','calc.div.cash':'Cash %','calc.div.bonus':'Bonus %','calc.div.price':'Current share price (NPR)',
    'calc.div.cashBtn':'Cash Dividend','calc.div.bonusBtn':'Bonus Shares',
    'calc.div.resultCash':'Cash you receive','calc.div.resultBonus':'New bonus shares','calc.div.resultTotal':'New total shares','calc.div.adjNote':'After a bonus, the market usually adjusts the price down proportionally — your total portfolio value doesn\'t jump just because you have more shares.',
    'calc.pe.title':'P/E & EPS Calculator','calc.pe.hint':'See how price, earnings, and the P/E ratio relate to each other.',
    'calc.pe.price':'Share Price (NPR)','calc.pe.eps':'EPS (NPR)','calc.pe.result':'P/E Ratio',
    'calc.pe.low':'This is on the lower side — could mean undervalued, or the market expects weak growth.',
    'calc.pe.mid':'This is a fairly typical range for many NEPSE-listed commercial banks.',
    'calc.pe.high':'This is on the higher side — the market may be pricing in strong future growth, or the stock could be overvalued.',
    'calc.cap.title':'Market Cap Visualizer','calc.cap.hint':'Compare how market capitalisation changes with price and share count.',
    'calc.cap.price':'Share Price (NPR)','calc.cap.shares':'Total Shares Outstanding (in millions)','calc.cap.result':'Market Capitalisation',
    'calc.cap.tierlabel':'Size Category',
    'calc.risk.title':'Risk Comparison Chart','calc.risk.hint':'An illustrative look at how volatility tends to differ by company size — not a prediction for any specific stock.',
    'calc.risk.large':'Large-Cap','calc.risk.mid':'Mid-Cap','calc.risk.small':'Small-Cap',
    'calc.risk.metric':'Typical relative volatility',
    'footer.tagline':'A free educational resource. Not investment advice.',
    'footer.source':'Content adapted for beginners from a NEPSE knowledge-base reference. Always verify facts with SEBON, NEPSE, and CDSC before investing.',
    'nores':'No results found. Try a different term.',
    'search.placeholderTop':'Search lessons and glossary…',
    'journey.kicker':'The Real-World Path',
    'journey.title':'Start Your Journey',
    'journey.subtitle':'From your first click to your first trade.',
    'journey.lead':'Every step a real first-time investor in Nepal actually goes through, in the order they happen. Each lesson in this path walks through one of these steps in full detail.',
    'journey.guidesTitle':'Deep-Dive Guides',
    'journey.resourcesTitle':'Official resources',
    'journey.resourcesLead':'This platform is educational only. For live data, filings, and official processes, always use the regulator\'s and infrastructure providers\' own sites:',
    'journey.bannerKicker':'The Real-World Path',
    'journey.bannerTitle':'Ready to actually get started?',
    'journey.bannerDesc':'See the exact 8-step path a first-time NEPSE investor follows — from your first click to your first trade.',
    'journey.bannerCta':'Start Your Journey',
  },
  np: {
    'brand.name':'नेप्से पाठशाला','brand.tag':'निःशुल्क नेप्से शिक्षा',
    'nav.home':'गृहपृष्ठ','nav.roadmap':'रोडम्याप','nav.chapters':'अध्यायहरू','nav.glossary':'शब्दकोश','nav.calculators':'क्यालकुलेटर','nav.faq':'प्रश्नोत्तर',
    'hero.eyebrow':'हरेक नेपाली लगानीकर्ताको लागि निःशुल्क कोर्स',
    'hero.h1a':'सुरुदेखि ','hero.h1b':'नेप्से','hero.h1c':' सिक्नुहोस्, आफ्नै गतिमा।',
    'hero.lead':'"सेयर के हो?" देखि कम्पनीको वासलात पढ्नेसम्म लैजाने संरचित, द्विभाषी कोर्स — नेपाल स्टक एक्सचेन्ज (नेप्से) कसरी काम गर्छ भन्ने कुरामा नै आधारित।',
    'hero.cta1':'रोडम्याप सुरु गर्नुहोस्','hero.cta2':'अध्यायहरू हेर्नुहोस्',
    'hero.stat1n':'१९','hero.stat1s':'पाठहरू',
    'hero.stat2n':'७','hero.stat2s':'अध्यायहरू',
    'hero.stat3n':'३८','hero.stat3s':'प्रश्नोत्तर',
    'hero.stat4n':'१००%','hero.stat4s':'सधैं निःशुल्क',
    'ledger.title':'नमूना नेप्से लेजर','ledger.badge':'उदाहरण मात्र',
    'ledger.co1':'कमर्सियल बैंक कं.','ledger.co1s':'ठूलो पूँजी · बैंकिङ',
    'ledger.co2':'हाइड्रो डेभलपमेन्ट लि.','ledger.co2s':'मध्यम पूँजी · जलविद्युत',
    'ledger.co3':'फाइनान्स एण्ड क्यापिटल कं.','ledger.co3s':'सानो पूँजी · फाइनान्स',
    'ledger.note':'यी अंकहरू सिकाइका लागि उदाहरण मात्र हुन् — प्रत्यक्ष बजार डाटा होइन।',
    'roadmap.kicker':'तपाईंको सिकाइ मार्ग','roadmap.title':'सुरुवाती रोडम्याप',
    'roadmap.lead':'यी सात चरणहरू क्रमैसँग पछ्याउनुहोस्। प्रत्येक चरण अघिल्लोमा आधारित छ — अन्त्यमा, तपाईं खाता खोल्न, IPO आवेदन दिन, कम्पनीको मुख्य अनुपातहरू पढ्न, र सामान्य ठगीबाट आफूलाई जोगाउन सक्षम हुनुहुनेछ।',
    'chapters.kicker':'पूर्ण पाठ्यक्रम','chapters.title':'सबै अध्याय र पाठहरू',
    'chapters.lead':'आधारभूत अवधारणादेखि उन्नत विश्लेषण र लगानीकर्ता मनोविज्ञानसम्म लैजाने सात अध्यायमा उन्नाइस पाठहरू।',
    'glossary.kicker':'द्रुत सन्दर्भ','glossary.title':'वित्तीय शब्दकोश',
    'glossary.lead':'यस कोर्समा प्रयोग भएका सबै मुख्य शब्दहरू एकै ठाउँमा, खोज्न मिल्ने गरी।',
    'glossary.search':'शब्द खोज्नुहोस्… जस्तै BOID, CRN, EPS',
    'calc.kicker':'आफैं प्रयास गर्नुहोस्','calc.title':'अन्तरक्रियात्मक क्यालकुलेटरहरू',
    'calc.lead':'नेप्से लगानीमा प्रयोग हुने वास्तविक सूत्रहरूसँग खेल्नुहोस्। यी सिकाइका लागि मात्र हुन् — निर्णय लिनुअघि सधैं आफ्नो ब्रोकर वा मेरो शेयरसँग पुष्टि गर्नुहोस्।',
    'faq.kicker':'अझै जिज्ञासा छ?','faq.title':'बारम्बार सोधिने प्रश्नहरू',
    'search.kicker':'खोज नतिजा','search.title':'खोज्नुहोस्',
    'topic.backToChapters':'अध्यायहरूमा फर्कनुहोस्',
    'topic.simple':'सरल व्याख्या','topic.detailed':'विस्तृत व्याख्या','topic.example':'वास्तविक नेपाली उदाहरण',
    'topic.why':'यो किन महत्त्वपूर्ण छ','topic.misconceptions':'सामान्य भ्रमहरू','topic.takeaways':'यो सम्झनुहोस्',
    'topic.markDone':'पूरा भएको चिन्ह लगाउनुहोस्','topic.markedDone':'पूरा भयो ✓',
    'topic.quizTitle':'द्रुत जाँच','topic.quizSub':'भर्खरै सिकेको कुरा जाँच्नुहोस्',
    'topic.prev':'अघिल्लो पाठ','topic.next':'अर्को पाठ',
    'quiz.submit':'उत्तर जाँच्नुहोस्','quiz.correct':'सही!','quiz.incorrect':'त्यो ठीक छैन।',
    'roadmap.progressLabel':'समग्र प्रगति',
    'calc.div.title':'लाभांश क्यालकुलेटर','calc.div.hint':'लाभांश घोषणाले तपाईंलाई वास्तवमा कति फाइदा दिन्छ भन्ने अनुमान गर्नुहोस्।',
    'calc.div.shares':'तपाईंको सेयर संख्या','calc.div.type':'लाभांशको प्रकार','calc.div.cash':'नगद %','calc.div.bonus':'बोनस %','calc.div.price':'हालको सेयर मूल्य (रु)',
    'calc.div.cashBtn':'नगद लाभांश','calc.div.bonusBtn':'बोनस सेयर',
    'calc.div.resultCash':'तपाईंले पाउने नगद','calc.div.resultBonus':'नयाँ बोनस सेयर','calc.div.resultTotal':'नयाँ कुल सेयर','calc.div.adjNote':'बोनस पछि, बजारले सामान्यतया मूल्यलाई समानुपातिक रूपमा घटाउँछ — सेयर संख्या बढेकै कारणले मात्र तपाईंको कुल पोर्टफोलियो मूल्य उफ्रँदैन।',
    'calc.pe.title':'P/E र EPS क्यालकुलेटर','calc.pe.hint':'मूल्य, नाफा, र P/E अनुपात एकअर्कासँग कसरी सम्बन्धित छन् हेर्नुहोस्।',
    'calc.pe.price':'सेयर मूल्य (रु)','calc.pe.eps':'EPS (रु)','calc.pe.result':'P/E अनुपात',
    'calc.pe.low':'यो अलि कम हो — मूल्यमूल्यांकन कम भएको वा बजारले कमजोर वृद्धिको अपेक्षा गरेको हुनसक्छ।',
    'calc.pe.mid':'धेरै नेप्से-सूचीकृत कमर्सियल बैंकहरूको लागि यो सामान्य दायरा हो।',
    'calc.pe.high':'यो अलि उच्च हो — बजारले बलियो भविष्यको वृद्धिको मूल्य तोकेको हुनसक्छ, वा सेयर अधिमूल्यन भएको हुनसक्छ।',
    'calc.cap.title':'बजार पूँजीकरण भिजुअलाइजर','calc.cap.hint':'मूल्य र सेयर संख्यासँगै बजार पूँजीकरण कसरी परिवर्तन हुन्छ तुलना गर्नुहोस्।',
    'calc.cap.price':'सेयर मूल्य (रु)','calc.cap.shares':'कुल बक्यौता सेयर (लाखमा)','calc.cap.result':'बजार पूँजीकरण',
    'calc.cap.tierlabel':'आकार वर्ग',
    'calc.risk.title':'जोखिम तुलना चार्ट','calc.risk.hint':'कम्पनीको आकार अनुसार अस्थिरता कसरी फरक हुने गर्छ भन्ने उदाहरणात्मक झलक — कुनै खास सेयरको भविष्यवाणी होइन।',
    'calc.risk.large':'ठूलो पूँजी','calc.risk.mid':'मध्यम पूँजी','calc.risk.small':'सानो पूँजी',
    'calc.risk.metric':'सामान्य सापेक्षिक अस्थिरता',
    'footer.tagline':'यो निःशुल्क शैक्षिक स्रोत हो। यो लगानी सल्लाह होइन।',
    'footer.source':'यो सामग्री सुरुवातीहरूका लागि नेप्से ज्ञान-आधार सन्दर्भबाट रूपान्तरण गरिएको हो। लगानी गर्नुअघि सधैं SEBON, NEPSE, र CDSC सँग तथ्य पुष्टि गर्नुहोस्।',
    'nores':'कुनै नतिजा फेला परेन। फरक शब्द प्रयास गर्नुहोस्।',
    'search.placeholderTop':'पाठ र शब्दकोश खोज्नुहोस्…',
    'journey.kicker':'वास्तविक-जीवन मार्ग',
    'journey.title':'आफ्नो यात्रा सुरु गर्नुहोस्',
    'journey.subtitle':'तपाईंको पहिलो क्लिकदेखि पहिलो कारोबारसम्म।',
    'journey.lead':'नेपालमा वास्तविक पहिलो-पटक लगानीकर्ताले साँच्चै भोग्ने हरेक चरण, तिनीहरू हुने क्रममा नै। यस मार्गको प्रत्येक पाठले यी चरणहरू मध्ये एउटालाई पूर्ण विस्तारमा वर्णन गर्छ।',
    'journey.guidesTitle':'गहिरो-अध्ययन गाइडहरू',
    'journey.resourcesTitle':'आधिकारिक स्रोतहरू',
    'journey.resourcesLead':'यो प्लेटफर्म शैक्षिक उद्देश्यका लागि मात्र हो। प्रत्यक्ष डाटा, फाइलिङ, र आधिकारिक प्रक्रियाहरूका लागि, सधैं नियामक र पूर्वाधार प्रदायकहरूको आफ्नै साइट प्रयोग गर्नुहोस्:',
    'journey.bannerKicker':'वास्तविक-जीवन मार्ग',
    'journey.bannerTitle':'साँच्चै सुरु गर्न तयार हुनुहुन्छ?',
    'journey.bannerDesc':'पहिलो-पटक नेप्से लगानीकर्ताले पछ्याउने ठ्याक्कै ८-चरण मार्ग हेर्नुहोस् — तपाईंको पहिलो क्लिकदेखि पहिलो कारोबारसम्म।',
    'journey.bannerCta':'आफ्नो यात्रा सुरु गर्नुहोस्',
  }
};
function t(key){ return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || key; }

/* =========================================================================
   COURSE CONTENT DATA
   ========================================================================= */
const CHAPTERS = [
  {id:'c1', num:'01', title:{en:'Foundations of the Market', np:'बजारको जग'}},
  {id:'c2', num:'02', title:{en:'The Primary Market', np:'प्राथमिक बजार'}},
  {id:'c3', num:'03', title:{en:'Digital Infrastructure', np:'डिजिटल संरचना'}},
  {id:'c4', num:'04', title:{en:'Secondary Market Trading', np:'दोस्रो बजार कारोबार'}},
  {id:'c5', num:'05', title:{en:'Corporate Actions & Benefits', np:'कर्पोरेट कार्य र लाभ'}},
  {id:'c6', num:'06', title:{en:'Market Metrics & Analysis', np:'बजार सूचकांक र विश्लेषण'}},
  {id:'c7', num:'07', title:{en:'Risk, Rules & Psychology', np:'जोखिम, नियम र मनोविज्ञान'}},
];

const TOPICS = [
{
  id:'what-is-market', chapter:'c1', icon:'🏛️',
  title:{en:'What Is a Stock Market? (NEPSE, SEBON, CDSC)', np:'सेयर बजार भनेको के हो? (नेप्से, सेबोन, सीडीएससी)'},
  card:{en:'The bazaar, the police, and the warehouse — how Nepal\'s market is organised.', np:'बजार, प्रहरी, र भण्डार — नेपालको बजार कसरी संरचित छ।'},
  simple:{en:'Think of the stock market like a big digital bazaar. NEPSE is the bazaar building where trading happens. SEBON is the police, making sure everyone follows the rules. CDSC is the secure warehouse that keeps track of who owns what.',
    np:'सेयर बजारलाई ठूलो डिजिटल बजारको रूपमा सोच्नुहोस्। नेप्से त्यो बजार भवन हो जहाँ कारोबार हुन्छ। सेबोन प्रहरी हो, जसले सबैले नियम पालना गरेको सुनिश्चित गर्छ। सीडीएससी सुरक्षित भण्डार हो जसले कसको के स्वामित्व छ भन्ने अभिलेख राख्छ।'},
  detailed:{en:'The Nepal Stock Exchange (NEPSE) is the sole secondary market in Nepal where listed securities are traded. The Securities Board of Nepal (SEBON) is the apex regulatory body, established in 1993, that protects investor interests and oversees every market participant — brokers, companies, and the exchange itself. CDS and Clearing Limited (CDSC), a subsidiary of NEPSE, manages the "dematerialisation" of shares (turning paper certificates into digital records) and settles every trade so ownership actually transfers correctly.',
    np:'नेपाल स्टक एक्सचेन्ज (नेप्से) नेपालको एकमात्र दोस्रो बजार हो जहाँ सूचीकृत धितोपत्रहरू कारोबार हुन्छन्। सेबोन (सेक्युरिटिज बोर्ड अफ नेपाल) सन् १९९३ मा स्थापना भएको सर्वोच्च नियामक निकाय हो, जसले लगानीकर्ताको हित संरक्षण गर्छ र ब्रोकर, कम्पनी, र एक्सचेन्ज आफैंलाई नियमन गर्छ। सीडीएससी (सीडीएस एण्ड क्लियरिङ लिमिटेड), नेप्सेको सहायक कम्पनी, सेयरको "डिम्याटेरियलाइजेसन" (कागजी प्रमाणपत्रलाई डिजिटल रेकर्डमा बदल्ने काम) व्यवस्थापन गर्छ र प्रत्येक कारोबारको फर्स्यौट गरी स्वामित्व सही तरिकाले हस्तान्तरण भएको सुनिश्चित गर्छ।'},
  example:{en:'NEPSE opened its physical trading floor in 1994 and transitioned to a fully automated online system called NOTS in 2018 — meaning nobody shouts orders on a floor anymore; everything happens through your broker\'s app.',
    np:'नेप्सेले सन् १९९४ मा भौतिक कारोबार तला सुरु गरेको थियो र सन् २०१८ मा NOTS भनिने पूर्ण स्वचालित अनलाइन प्रणालीमा परिवर्तन भयो — अर्थात् अब कसैले तलामा चिच्याएर अर्डर दिँदैन; सबै कुरा तपाईंको ब्रोकरको एपमार्फत हुन्छ।'},
  why:{en:'Understanding this triangle helps you know who to trust, who to complain to, and where your legal protection actually comes from. If a broker misbehaves, SEBON is who you report to — not NEPSE.',
    np:'यो त्रिकोण बुझ्नाले तपाईंलाई कसलाई विश्वास गर्ने, कसलाई गुनासो गर्ने, र तपाईंको कानुनी सुरक्षा वास्तवमा कहाँबाट आउँछ भनेर थाहा हुन्छ। कुनै ब्रोकरले गलत व्यवहार गरेमा, तपाईंले सेबोनमा उजुरी गर्नुपर्छ — नेप्सेमा होइन।'},
  misconceptions:{en:'Many beginners think NEPSE and "the stock market" are two separate things. In reality, NEPSE is simply the institution that operates the market in Nepal — there is no other exchange to compare it to.',
    np:'धेरै सुरुवातीहरूले नेप्से र "सेयर बजार" दुई फरक कुरा हुन् भन्ने सोच्छन्। वास्तवमा, नेप्से भनेको नेपालमा बजार सञ्चालन गर्ने संस्था मात्र हो — तुलना गर्न अर्को एक्सचेन्ज छैन।'},
  takeaways:{en:['You trade ON NEPSE.','You are protected BY SEBON\'s rules.','Your shares are safely recorded BY CDSC.','All three exist for different jobs — memorise which is which.'],
    np:['तपाईं नेप्सेमा कारोबार गर्नुहुन्छ।','तपाईं सेबोनको नियमद्वारा सुरक्षित हुनुहुन्छ।','तपाईंको सेयर सीडीएससीले सुरक्षित रूपमा अभिलेख राख्छ।','तीनओटैको फरक-फरक काम छ — कुन के हो राम्ररी सम्झनुहोस्।']},
  quiz:[
    {q:{en:'If you want to file a complaint about a broker\'s misconduct, who should you contact?',np:'ब्रोकरको गलत व्यवहारबारे उजुरी दिन तपाईंले कसलाई सम्पर्क गर्नुपर्छ?'},
     opts:{en:['NEPSE','SEBON','CDSC','Mero Share'],np:['नेप्से','सेबोन','सीडीएससी','मेरो शेयर']}, correct:1,
     explain:{en:'SEBON is the regulator responsible for investor protection and overseeing market participants.',np:'सेबोन लगानीकर्ता संरक्षण र बजार सहभागीहरूको नियमनको लागि जिम्मेवार नियामक हो।'}},
    {q:{en:'What does CDSC primarily manage?',np:'सीडीएससीले मुख्यतया के व्यवस्थापन गर्छ?'},
     opts:{en:['Setting share prices','Dematerialisation and trade settlement','Approving new brokers only','Writing new laws'],np:['सेयर मूल्य तोक्ने','डिम्याट र कारोबार फर्स्यौट','नयाँ ब्रोकर मात्र स्वीकृत गर्ने','नयाँ कानून बनाउने']}, correct:1,
     explain:{en:'CDSC handles dematerialisation of shares and settles trades so ownership transfers correctly.',np:'सीडीएससीले सेयरको डिम्याटेरियलाइजेसन गर्छ र स्वामित्व सही तरिकाले सर्ने गरी कारोबार फर्स्यौट गर्छ।'}},
  ]
},
{
  id:'what-are-shares', chapter:'c1', icon:'📄',
  title:{en:'What Are Shares?', np:'सेयर भनेको के हो?'},
  card:{en:'Owning a tiny piece of a real company — and what that ownership actually gives you.', np:'वास्तविक कम्पनीको सानो अंश स्वामित्व — र त्यो स्वामित्वले तपाईंलाई वास्तवमा के दिन्छ।'},
  simple:{en:'A share is a tiny piece of ownership in a company. If you own one share of a bank, you are a part-owner of that bank.',
    np:'सेयर भनेको कम्पनीको सानो स्वामित्व अंश हो। यदि तपाईंसँग कुनै बैंकको एउटा सेयर छ भने, तपाईं त्यो बैंकको आंशिक मालिक हुनुहुन्छ।'},
  detailed:{en:'Securities are long-term financial instruments — shares, bonds, and debentures — that companies use to raise capital. When you buy a share you become a "shareholder," which gives you rights to future dividends and a vote at the company\'s Annual General Meeting (AGM), where major decisions are approved.',
    np:'धितोपत्र भनेका सेयर, बण्ड, र डिबेन्चर जस्ता दीर्घकालीन वित्तीय उपकरणहरू हुन्, जुन कम्पनीहरूले पुँजी उठाउन प्रयोग गर्छन्। तपाईंले सेयर किन्दा तपाईं "सेयरधनी" बन्नुहुन्छ, जसले तपाईंलाई भविष्यको लाभांश पाउने अधिकार र कम्पनीको वार्षिक साधारणसभा (AGM) मा मत दिने अधिकार दिन्छ, जहाँ ठूला निर्णयहरू पारित हुन्छन्।'},
  example:{en:'Common shares in Nepal usually carry a "Face Value" of NPR 100 — the original nominal value printed on the share, separate from its current market price.',
    np:'नेपालमा साधारण सेयरहरूको "अंकित मूल्य" सामान्यतया रु १०० हुन्छ — यो सेयरमा छापिएको मौलिक नाममात्र मूल्य हो, जुन हालको बजार मूल्यभन्दा फरक हुन्छ।'},
  why:{en:'Knowing exactly what a share represents stops you from treating the stock market like a lottery. You are buying a legal, ongoing claim on a real business\'s future profits.',
    np:'सेयरले वास्तवमा के प्रतिनिधित्व गर्छ भन्ने ठ्याक्कै थाहा पाउनाले तपाईंलाई सेयर बजारलाई लटरीजस्तो व्यवहार गर्नबाट रोक्छ। तपाईं वास्तविक व्यवसायको भविष्यको नाफामा कानुनी, निरन्तर दाबी किन्दै हुनुहुन्छ।'},
  misconceptions:{en:'Owning a share doesn\'t mean you can walk into the company and take their furniture — you only own a financial stake in their profits and assets, exercised through your voting and dividend rights, not physical control.',
    np:'सेयर स्वामित्वको अर्थ तपाईं कम्पनीमा गएर उनीहरूको फर्निचर लैजान सक्नुहुन्छ भन्ने होइन — तपाईंसँग केवल तिनीहरूको नाफा र सम्पत्तिमा वित्तीय हिस्सा हुन्छ, जुन तपाईंको मतदान र लाभांश अधिकारमार्फत प्रयोग हुन्छ, भौतिक नियन्त्रणमार्फत होइन।'},
  takeaways:{en:['A share = a legal ownership claim, not a physical object.','Shareholders can vote at the AGM.','Face value (often NPR 100) ≠ market price.','More shares = a bigger (but still tiny) slice of the company.'],
    np:['सेयर = कानुनी स्वामित्व दाबी, भौतिक वस्तु होइन।','सेयरधनीहरूले AGM मा मतदान गर्न सक्छन्।','अंकित मूल्य (प्रायः रु १००) ≠ बजार मूल्य।','धेरै सेयर = कम्पनीको ठूलो (तर अझै सानो) अंश।']},
  quiz:[
    {q:{en:'Owning shares in a company legally entitles you to:',np:'कम्पनीको सेयर स्वामित्वले तपाईंलाई कानुनी रूपमा के अधिकार दिन्छ?'},
     opts:{en:['Free products from the company','A claim on profits and voting rights at the AGM','A management job at the company','Free entry to company offices'],np:['कम्पनीबाट निःशुल्क उत्पादन','नाफामा दाबी र AGM मा मतदान अधिकार','कम्पनीमा व्यवस्थापन जागिर','कम्पनी कार्यालयमा निःशुल्क प्रवेश']}, correct:1,
     explain:{en:'Shareholders have a financial claim on profits and voting rights — not physical control of company assets.',np:'सेयरधनीहरूको नाफामा वित्तीय दाबी र मतदान अधिकार हुन्छ — कम्पनीको सम्पत्तिमा भौतिक नियन्त्रण होइन।'}},
    {q:{en:'What is the typical face value of a common share in Nepal?',np:'नेपालमा साधारण सेयरको सामान्य अंकित मूल्य कति हो?'},
     opts:{en:['NPR 10','NPR 100','NPR 1,000','It has no fixed value'],np:['रु १०','रु १००','रु १,०००','यसको निश्चित मूल्य हुँदैन']}, correct:1,
     explain:{en:'Common shares in Nepal typically carry a face value of NPR 100.',np:'नेपालमा साधारण सेयरहरूको अंकित मूल्य सामान्यतया रु १०० हुन्छ।'}},
  ]
},
{
  id:'why-list', chapter:'c1', icon:'🚀',
  title:{en:'Why Do Companies Get Listed?', np:'कम्पनीहरू किन सूचीकृत हुन्छन्?'},
  card:{en:'Going from private to public — and what it means for you as an investor.', np:'निजीबाट सार्वजनिक बन्ने बाटो — र यसले लगानीकर्ताको लागि के अर्थ राख्छ।'},
  simple:{en:'A company "gets listed" when it sells pieces of itself (shares) to the public for the first time so it can raise money to grow, instead of borrowing all of it from a bank.',
    np:'कम्पनी "सूचीकृत" हुन्छ जब यसले पहिलो पटक आफ्नो अंश (सेयर) सर्वसाधारणलाई बेच्छ ताकि बैंकबाट सबै पैसा ऋण लिनुको सट्टा बढ्नको लागि पुँजी उठाउन सकोस्।'},
  detailed:{en:'Companies must convert from "Private Limited" to "Public Limited" status and get approval from SEBON before they can offer shares to the public. Listing gives a company access to a much larger pool of capital than bank loans alone, and it gives ordinary citizens a legal way to become part-owners of major businesses — banks, hydropower plants, insurance companies, and more.',
    np:'कम्पनीहरूले सर्वसाधारणलाई सेयर प्रस्ताव गर्नुअघि "प्राइभेट लिमिटेड" बाट "पब्लिक लिमिटेड" मा परिवर्तन हुनुपर्छ र सेबोनको स्वीकृति लिनुपर्छ। सूचीकरणले कम्पनीलाई बैंक ऋणभन्दा धेरै ठूलो पुँजीको पहुँच दिन्छ, र सामान्य नागरिकहरूलाई ठूला व्यवसायहरू — बैंक, जलविद्युत आयोजना, बीमा कम्पनी, आदिको आंशिक-मालिक बन्ने कानुनी बाटो दिन्छ।'},
  example:{en:'Hydropower companies are one of the most active sectors for new listings in Nepal, and they often reserve about 10% of their IPO shares specifically for local residents affected by the project.',
    np:'जलविद्युत कम्पनीहरू नेपालमा नयाँ सूचीकरणका लागि सबैभन्दा सक्रिय क्षेत्रहरू मध्ये एक हुन्, र तिनीहरूले प्रायः आयोजनाबाट प्रभावित स्थानीय बासिन्दाहरूका लागि IPO सेयरको लगभग १०% छुट्याउँछन्।'},
  why:{en:'Understanding why companies list helps you judge their motives — are they raising money for real expansion, or just to pay off old debt? Reading a company\'s prospectus with this question in mind is a core investing skill.',
    np:'कम्पनीहरू किन सूचीकृत हुन्छन् भन्ने बुझ्नाले तिनीहरूको उद्देश्य जाँच्न मद्दत गर्छ — के तिनीहरूले वास्तविक विस्तारका लागि पैसा उठाउँदैछन्, कि पुरानो ऋण तिर्नका लागि मात्र? यो प्रश्न ध्यानमा राखेर कम्पनीको प्रस्पेक्टस पढ्नु एक मुख्य लगानी सीप हो।'},
  misconceptions:{en:'Listing does not mean a company is guaranteed to succeed, nor does it mean the government has "approved" the company as a good investment — SEBON approves the process and disclosure, not the business quality.',
    np:'सूचीकरणको अर्थ कम्पनी सफल हुने ग्यारेन्टी छैन, न त सरकारले कम्पनीलाई राम्रो लगानीको रूपमा "स्वीकृति" दिएको हो — सेबोनले प्रक्रिया र खुलासालाई स्वीकृति दिन्छ, व्यवसायको गुणस्तरलाई होइन।'},
  takeaways:{en:['Listing = selling ownership to the public to raise capital.','Requires SEBON approval and a Private-to-Public conversion.','Hydropower IPOs often reserve shares for locals.','Listing ≠ a government guarantee of quality.'],
    np:['सूचीकरण = पुँजी उठाउन सर्वसाधारणलाई स्वामित्व बेच्ने काम।','सेबोन स्वीकृति र प्राइभेट-देखि-पब्लिक रूपान्तरण आवश्यक।','जलविद्युत IPO ले प्रायः स्थानीयका लागि सेयर छुट्याउँछ।','सूचीकरण ≠ गुणस्तरको सरकारी ग्यारेन्टी।']},
  quiz:[
    {q:{en:'Before offering shares to the public, a company must first become:',np:'सर्वसाधारणलाई सेयर प्रस्ताव गर्नुअघि कम्पनी पहिले के बन्नुपर्छ?'},
     opts:{en:['A cooperative','A Public Limited company approved by SEBON','A government agency','A non-profit organisation'],np:['सहकारी','सेबोनद्वारा स्वीकृत पब्लिक लिमिटेड कम्पनी','सरकारी निकाय','गैर-नाफामूलक संस्था']}, correct:1,
     explain:{en:'Companies must convert to Public Limited status and get SEBON approval before an IPO.',np:'कम्पनीहरूले IPO अघि पब्लिक लिमिटेड स्थितिमा परिवर्तन हुनुपर्छ र सेबोन स्वीकृति लिनुपर्छ।'}},
    {q:{en:'In Nepal, hydropower IPOs often reserve shares specifically for:',np:'नेपालमा जलविद्युत IPOहरूले प्रायः कसका लागि सेयर छुट्याउँछन्?'},
     opts:{en:['Foreign investors only','Local residents affected by the project','Bank employees only','SEBON staff'],np:['केवल विदेशी लगानीकर्ता','आयोजनाबाट प्रभावित स्थानीय बासिन्दा','केवल बैंक कर्मचारी','सेबोन कर्मचारी']}, correct:1,
     explain:{en:'Hydropower companies often reserve about 10% of shares for locally affected residents.',np:'जलविद्युत कम्पनीहरूले प्रायः स्थानीय प्रभावित बासिन्दाका लागि लगभग १०% सेयर छुट्याउँछन्।'}},
  ]
},
{
  id:'ipo-fpo', chapter:'c2', icon:'🎟️',
  title:{en:'IPO & FPO', np:'IPO र FPO'},
  card:{en:'The very first — and later — sale of company shares to the public.', np:'कम्पनी सेयरको पहिलो — र पछिको — सार्वजनिक बिक्री।'},
  simple:{en:'An IPO (Initial Public Offering) is the first time a private company sells shares to the public to raise money for growth. An FPO (Further Public Offering) is when an already-listed company sells additional new shares later on.',
    np:'IPO (सुरुवाती सार्वजनिक निष्कासन) भनेको कुनै निजी कम्पनीले बढ्नको लागि पैसा उठाउन पहिलो पटक सर्वसाधारणलाई सेयर बेच्ने काम हो। FPO (थप सार्वजनिक निष्कासन) भनेको पहिल्यै सूचीकृत कम्पनीले पछि थप नयाँ सेयर बेच्ने काम हो।'},
  detailed:{en:'In Nepal, companies often use a "Fixed Price" method for IPOs (commonly NPR 100 per share) or the newer "Book Building" method, where investor demand helps discover a fair market-clearing price before listing. An FPO works similarly but is issued by a company that is already trading on NEPSE, usually to fund expansion or meet regulatory capital requirements.',
    np:'नेपालमा, कम्पनीहरूले प्रायः IPOका लागि "फिक्स्ड प्राइस" विधि (सामान्यतया प्रति सेयर रु १००) वा नयाँ "बुक बिल्डिङ" विधि प्रयोग गर्छन्, जसमा लगानीकर्ताको माग सूचीकरणअघि उचित बजार मूल्य पत्ता लगाउन मद्दत गर्छ। FPO पनि उस्तै तरिकाले काम गर्छ तर यो पहिल्यै नेप्सेमा कारोबार भइरहेको कम्पनीले जारी गर्छ, प्रायः विस्तार वित्तपोषण गर्न वा नियामक पुँजी आवश्यकता पूरा गर्न।'},
  example:{en:'Many IPOs in Nepal list at a higher price than their offer price — a pattern called "underpricing" — which is why IPOs are popular, though it is never guaranteed.',
    np:'नेपालमा धेरै IPOहरू आफ्नो प्रस्ताव मूल्यभन्दा उच्च मूल्यमा सूचीकृत हुन्छन् — यसलाई "अन्डरप्राइसिङ" भनिन्छ — यही कारणले IPOहरू लोकप्रिय छन्, तर यो कहिल्यै ग्यारेन्टी हुँदैन।'},
  why:{en:'IPOs and FPOs are usually a beginner\'s first entry point into investing, since the primary market has a simpler, standardised application process compared to actively trading in the secondary market.',
    np:'IPO र FPOहरू प्रायः सुरुवातीहरूको लगानीमा पहिलो प्रवेश बिन्दु हुन्छन्, किनभने प्राथमिक बजारको आवेदन प्रक्रिया दोस्रो बजारमा सक्रिय कारोबार गर्नुभन्दा सरल र मानकीकृत हुन्छ।'},
  misconceptions:{en:'Many think getting an IPO is a "guaranteed" profit. While many IPOs in Nepal do list higher than their issue price, there is always a risk that the listing price could be lower — losses are possible too.',
    np:'धेरैले IPO पाउनु "ग्यारेन्टी" नाफा हो भन्ने सोच्छन्। नेपालमा धेरै IPOहरू आफ्नो निष्कासन मूल्यभन्दा उच्चमा सूचीकृत भए पनि, सूचीकरण मूल्य कमै हुने जोखिम सधैं रहन्छ — नोक्सान पनि सम्भव छ।'},
  takeaways:{en:['IPO = first-ever public sale of shares.','FPO = a repeat sale by an already-listed company.','Fixed Price and Book Building are the two common methods.','Underpricing is common but never guaranteed.'],
    np:['IPO = कम्पनीको पहिलो सार्वजनिक सेयर बिक्री।','FPO = पहिल्यै सूचीकृत कम्पनीको दोहोरिने बिक्री।','फिक्स्ड प्राइस र बुक बिल्डिङ दुई सामान्य विधि हुन्।','अन्डरप्राइसिङ सामान्य हो तर कहिल्यै ग्यारेन्टी हुँदैन।']},
  quiz:[
    {q:{en:'What is the key difference between an IPO and an FPO?',np:'IPO र FPO बीचको मुख्य भिन्नता के हो?'},
     opts:{en:['FPO is only for hydropower companies','IPO is a company\'s very first public share sale; FPO is a later one','IPO shares cannot be sold later','FPO does not require SEBON approval'],np:['FPO केवल जलविद्युत कम्पनीका लागि हो','IPO कम्पनीको पहिलो सार्वजनिक बिक्री हो; FPO पछिको हो','IPO सेयर पछि बेच्न मिल्दैन','FPO लाई सेबोन स्वीकृति चाहिँदैन']}, correct:1,
     explain:{en:'IPO is the very first public offering; FPO is any subsequent public offering by an already-listed company.',np:'IPO पहिलो सार्वजनिक निष्कासन हो; FPO पहिल्यै सूचीकृत कम्पनीको पछिल्लो निष्कासन हो।'}},
    {q:{en:'Is profit from an IPO guaranteed in Nepal?',np:'नेपालमा IPO बाट नाफा ग्यारेन्टी हुन्छ?'},
     opts:{en:['Yes, always','No — listing price can be lower than the issue price','Only for hydropower IPOs','Only if you apply through Mero Share'],np:['हो, सधैं','होइन — सूचीकरण मूल्य निष्कासन मूल्यभन्दा कम हुनसक्छ','केवल जलविद्युत IPOका लागि','केवल मेरो शेयरमार्फत आवेदन गरे मात्र']}, correct:1,
     explain:{en:'Underpricing is common but not guaranteed — the listing price can fall below the offer price.',np:'अन्डरप्राइसिङ सामान्य हो तर ग्यारेन्टी होइन — सूचीकरण मूल्य प्रस्ताव मूल्यभन्दा घट्न सक्छ।'}},
  ]
},
{
  id:'asba-crn', chapter:'c2', icon:'🏦',
  title:{en:'ASBA, C-ASBA & CRN', np:'ASBA, C-ASBA र CRN'},
  card:{en:'How your money gets safely "frozen" while you wait for an IPO allotment.', np:'IPO बाँडफाँडको प्रतीक्षा गर्दा तपाईंको पैसा कसरी सुरक्षित रूपमा "रोकिन्छ"।'},
  simple:{en:'ASBA is the system that freezes money in your bank account when you apply for an IPO, instead of taking it out immediately. C-ASBA is the centralised version linking all your accounts. A CRN is the unique ID your bank gives you to use this system.',
    np:'ASBA त्यो प्रणाली हो जसले तपाईंले IPO आवेदन दिँदा तुरुन्तै पैसा नझिकी तपाईंको बैंक खातामा पैसा रोक्छ। C-ASBA सबै खाता जोड्ने केन्द्रीकृत संस्करण हो। CRN भनेको यो प्रणाली प्रयोग गर्न तपाईंको बैंकले दिने अद्वितीय परिचय नम्बर हो।'},
  detailed:{en:'"Application Supported by Blocked Amount" (ASBA) ensures your money stays in your own account — earning any applicable interest — until shares are actually allotted to you, rather than being deducted upfront. A CRN (C-ASBA Registration Number) is mandatory for applying to any IPO through the Mero Share portal.',
    np:'"एप्लिकेसन सपोर्टेड बाई ब्लक्ड अमाउन्ट" (ASBA) ले तपाईंको पैसा अग्रिम रूपमा नकाटिकन, सेयर वास्तवमा बाँडफाँड नभएसम्म तपाईंकै खातामा — कुनै लागू ब्याजसहित — रहन्छ भनी सुनिश्चित गर्छ। मेरो शेयर पोर्टलमार्फत कुनै पनि IPO आवेदन दिन CRN (C-ASBA दर्ता नम्बर) अनिवार्य हुन्छ।'},
  example:{en:'Before ASBA existed, Nepalese investors had to stand in long physical lines at bank branches just to submit paper IPO application forms.',
    np:'ASBA अस्तित्वमा आउनुअघि, नेपाली लगानीकर्ताहरूले कागजी IPO आवेदन फारम बुझाउनका लागि मात्र बैंक शाखाहरूमा लामो लाइनमा उभिनुपर्थ्यो।'},
  why:{en:'Without a valid CRN, you simply cannot apply for any IPO in Nepal today — it is the mandatory first step of your entire investing journey.',
    np:'मान्य CRN बिना, तपाईंले आज नेपालमा कुनै पनि IPO का लागि आवेदन दिन सक्नुहुन्न — यो तपाईंको सम्पूर्ण लगानी यात्राको अनिवार्य पहिलो कदम हो।'},
  misconceptions:{en:'Investors often forget that they need a separate CRN for each bank account they want to link to their DEMAT account — one CRN does not automatically cover every bank.',
    np:'लगानीकर्ताहरूले प्रायः बिर्सन्छन् कि तिनीहरूले आफ्नो DEMAT खातासँग जोड्न चाहेको हरेक बैंक खाताका लागि छुट्टै CRN चाहिन्छ — एउटा CRN ले स्वतः सबै बैंक कभर गर्दैन।'},
  takeaways:{en:['ASBA blocks, not deducts, your money.','CRN is mandatory to apply for any IPO via Mero Share.','You need a separate CRN per bank account.','C-ASBA links everything centrally.'],
    np:['ASBA ले तपाईंको पैसा रोक्छ, कट्टा गर्दैन।','मेरो शेयरमार्फत कुनै पनि IPO आवेदन दिन CRN अनिवार्य।','प्रत्येक बैंक खाताका लागि छुट्टै CRN चाहिन्छ।','C-ASBA ले सबै कुरा केन्द्रीय रूपमा जोड्छ।']},
  quiz:[
    {q:{en:'What does ASBA do to your money when you apply for an IPO?',np:'IPO आवेदन दिँदा ASBA ले तपाईंको पैसालाई के गर्छ?'},
     opts:{en:['Deducts it immediately','Blocks it in your own account until allotment','Sends it to SEBON','Converts it into shares immediately'],np:['तुरुन्तै कट्टा गर्छ','बाँडफाँड नभएसम्म तपाईंकै खातामा रोक्छ','सेबोनलाई पठाउँछ','तुरुन्तै सेयरमा परिणत गर्छ']}, correct:1,
     explain:{en:'ASBA blocks the amount in your own account rather than deducting it upfront.',np:'ASBA ले पैसा अग्रिम कट्टा नगरी तपाईंकै खातामा रोक्छ।'}},
    {q:{en:'If you have two bank accounts you want to use for IPOs, how many CRNs do you need?',np:'यदि तपाईंसँग IPOका लागि प्रयोग गर्ने दुई बैंक खाता छन् भने, कतिओटा CRN चाहिन्छ?'},
     opts:{en:['One CRN for both','A separate CRN for each account','No CRN is needed for the second account','CRNs are not linked to bank accounts'],np:['दुवैका लागि एउटै CRN','हरेक खाताका लागि छुट्टै CRN','दोस्रो खाताका लागि CRN चाहिँदैन','CRN बैंक खातासँग जोडिएको हुँदैन']}, correct:1,
     explain:{en:'Each linked bank account requires its own separate CRN.',np:'जोडिएको प्रत्येक बैंक खाताका लागि छुट्टै CRN चाहिन्छ।'}},
  ]
},
{
  id:'demat-boid', chapter:'c3', icon:'💳',
  title:{en:'DEMAT Account & BOID', np:'DEMAT खाता र BOID'},
  card:{en:'Your digital "bank account" for shares — and the 16-digit ID that proves it\'s yours.', np:'सेयरका लागि तपाईंको डिजिटल "बैंक खाता" — र यो तपाईंकै हो भनी प्रमाणित गर्ने १६-अंकको नम्बर।'},
  simple:{en:'A DEMAT account is like a digital bank account, but for holding your shares instead of your money.',
    np:'DEMAT खाता तपाईंको पैसाको सट्टा सेयर राख्ने डिजिटल बैंक खाता जस्तै हो।'},
  detailed:{en:'All physical share certificates must be "dematerialised" into electronic form before they can be traded on NEPSE. Your DEMAT account carries a unique 16-digit number called a BOID (Beneficiary Owner Identification Number), which you will use in almost every step of investing — from IPO applications to placing trade orders.',
    np:'नेप्सेमा कारोबार गर्नुअघि सबै भौतिक सेयर प्रमाणपत्रहरू इलेक्ट्रोनिक रूपमा "डिम्याटेरियलाइज्ड" हुनुपर्छ। तपाईंको DEMAT खातामा BOID (लाभग्राही स्वामी परिचय नम्बर) भनिने १६-अंकको अद्वितीय नम्बर हुन्छ, जुन तपाईंले IPO आवेदनदेखि कारोबार अर्डरसम्म लगानीको लगभग हरेक चरणमा प्रयोग गर्नुहुनेछ।'},
  example:{en:'You can open a DEMAT account through "Depository Participants" (DPs) — which in Nepal are usually banks or licensed stockbrokers acting on behalf of CDSC.',
    np:'तपाईंले "डिपोजिटरी पार्टिसिपेन्ट" (DP) मार्फत DEMAT खाता खोल्न सक्नुहुन्छ — जुन नेपालमा प्रायः बैंक वा CDSCको तर्फबाट काम गर्ने इजाजतपत्र प्राप्त स्टक ब्रोकरहरू हुन्छन्।'},
  why:{en:'No DEMAT account means no ability to legally hold or trade shares in Nepal at all — it is the absolute prerequisite before anything else in your investing journey.',
    np:'DEMAT खाता नभएमा नेपालमा कानुनी रूपमा सेयर राख्न वा कारोबार गर्न सकिँदैन — यो तपाईंको लगानी यात्रामा अरू सबैभन्दा पहिले चाहिने अनिवार्य पूर्वशर्त हो।'},
  misconceptions:{en:'A DEMAT account is not the same thing as a bank account — you need both, working together, to actually trade in the stock market: the bank account for money, the DEMAT account for shares.',
    np:'DEMAT खाता बैंक खाता जस्तै होइन — सेयर बजारमा कारोबार गर्न तपाईंलाई दुवै चाहिन्छ, सँगै काम गर्दै: पैसाका लागि बैंक खाता, सेयरका लागि DEMAT खाता।'},
  takeaways:{en:['DEMAT holds shares digitally, just like a bank holds money.','Your BOID is a unique 16-digit identity number.','Opened via a Depository Participant (bank or broker).','You need both a bank account AND a DEMAT account.'],
    np:['DEMAT ले बैंकले पैसा राखे जस्तै सेयर डिजिटल रूपमा राख्छ।','तपाईंको BOID एउटा अद्वितीय १६-अंकको परिचय नम्बर हो।','डिपोजिटरी पार्टिसिपेन्ट (बैंक वा ब्रोकर) मार्फत खोलिन्छ।','तपाईंलाई बैंक खाता र DEMAT खाता दुवै चाहिन्छ।']},
  quiz:[
    {q:{en:'What is a BOID?',np:'BOID के हो?'},
     opts:{en:['A password for Mero Share','A 16-digit unique identifier for your DEMAT account','A broker\'s license number','A type of dividend'],np:['मेरो शेयरको पासवर्ड','तपाईंको DEMAT खाताको १६-अंकको अद्वितीय परिचय नम्बर','ब्रोकरको इजाजतपत्र नम्बर','लाभांशको एक प्रकार']}, correct:1,
     explain:{en:'BOID (Beneficiary Owner Identification Number) is the unique 16-digit ID tied to your DEMAT account.',np:'BOID तपाईंको DEMAT खातासँग जोडिएको अद्वितीय १६-अंकको परिचय नम्बर हो।'}},
    {q:{en:'To trade shares in Nepal, you need:',np:'नेपालमा सेयर कारोबार गर्न तपाईंलाई के चाहिन्छ?'},
     opts:{en:['Only a bank account','Only a DEMAT account','Both a bank account and a DEMAT account','Neither, just cash'],np:['केवल बैंक खाता','केवल DEMAT खाता','बैंक खाता र DEMAT खाता दुवै','दुवै होइन, केवल नगद']}, correct:2,
     explain:{en:'You need both accounts working together — one for money, one for shares.',np:'तपाईंलाई दुवै खाता सँगै चाहिन्छ — एउटा पैसाका लागि, अर्को सेयरका लागि।'}},
  ]
},
{
  id:'meroshare', chapter:'c3', icon:'📱',
  title:{en:'Mero Share Portal & EDIS', np:'मेरो शेयर पोर्टल र EDIS'},
  card:{en:'Your command center for IPOs, portfolio tracking, and transferring sold shares.', np:'IPO, पोर्टफोलियो ट्र्याकिङ, र बेचेको सेयर हस्तान्तरणको लागि तपाईंको मुख्य केन्द्र।'},
  simple:{en:'Mero Share is the website and app you use to apply for IPOs, check your portfolio, and transfer shares you have sold.',
    np:'मेरो शेयर त्यो वेबसाइट र एप हो जुन तपाईंले IPOका लागि आवेदन दिन, पोर्टफोलियो हेर्न, र बेचेको सेयर हस्तान्तरण गर्न प्रयोग गर्नुहुन्छ।'},
  detailed:{en:'Developed by CDSC, Mero Share lets you view your Beneficial Owner details and full transaction history online. It is also where you perform EDIS (Electronic Delivery Instruction Slip) — the mandatory step of "releasing" shares to your broker after you have sold them in the secondary market, so the trade can actually settle.',
    np:'CDSCद्वारा विकसित मेरो शेयरले तपाईंलाई लाभग्राही स्वामी विवरण र पूर्ण कारोबार इतिहास अनलाइन हेर्न दिन्छ। यो त्यो ठाउँ पनि हो जहाँ तपाईंले EDIS (इलेक्ट्रोनिक डेलिभरी इन्स्ट्रक्सन स्लिप) गर्नुहुन्छ — दोस्रो बजारमा सेयर बेचिसकेपछि आफ्नो ब्रोकरलाई सेयर "रिलिज" गर्ने अनिवार्य चरण, ताकि कारोबार वास्तवमा फर्स्यौट हुन सकोस्।'},
  example:{en:'The annual renewal fee for Mero Share is a small amount (around NPR 50), which can typically be paid through local digital wallets like eSewa or Khalti.',
    np:'मेरो शेयरको वार्षिक नवीकरण शुल्क सानो रकम (लगभग रु ५०) हो, जुन सामान्यतया eSewa वा Khalti जस्ता स्थानीय डिजिटल वालेटमार्फत तिर्न सकिन्छ।'},
  why:{en:'Skipping the EDIS step after a sale is one of the most common beginner errors — it can delay your money or attract penalties, even though the trade itself went through fine.',
    np:'बिक्रीपछि EDIS चरण छुटाउनु सुरुवातीहरूको सबैभन्दा सामान्य गल्तीहरू मध्ये एक हो — कारोबार आफैं ठीकसँग भए पनि, यसले तपाईंको पैसा ढिलो गराउन वा जरिवाना ल्याउन सक्छ।'},
  misconceptions:{en:'Simply placing a sell order on the trading system is not enough — you must also log into Mero Share and complete the EDIS transfer, or you will face a penalty and settlement delay.',
    np:'ट्रेडिङ प्रणालीमा बिक्री अर्डर राख्नु मात्र पर्याप्त छैन — तपाईंले मेरो शेयरमा लगइन गरेर EDIS हस्तान्तरण पनि पूरा गर्नुपर्छ, नत्र तपाईंले जरिवाना र फर्स्यौट ढिलाइ भोग्नुपर्नेछ।'},
  takeaways:{en:['Mero Share = your portfolio + IPO application hub.','EDIS releases sold shares to your broker — never skip it.','Annual renewal fee is small and payable via digital wallets.','Built and maintained by CDSC.'],
    np:['मेरो शेयर = तपाईंको पोर्टफोलियो + IPO आवेदन केन्द्र।','EDIS ले बेचेको सेयर ब्रोकरलाई रिलिज गर्छ — कहिल्यै नछुटाउनुहोस्।','वार्षिक नवीकरण शुल्क सानो र डिजिटल वालेटमार्फत तिर्न मिल्ने।','CDSCद्वारा निर्मित र सञ्चालित।']},
  quiz:[
    {q:{en:'What must you do after selling shares in the secondary market, using Mero Share?',np:'मेरो शेयर प्रयोग गरी दोस्रो बजारमा सेयर बेचेपछि तपाईंले के गर्नुपर्छ?'},
     opts:{en:['Nothing further is needed','Complete an EDIS transfer to release the shares','Reapply for a new BOID','Pay the IPO fee again'],np:['केही थप गर्न आवश्यक छैन','सेयर रिलिज गर्न EDIS हस्तान्तरण पूरा गर्ने','नयाँ BOID को लागि पुनः आवेदन दिने','IPO शुल्क पुनः तिर्ने']}, correct:1,
     explain:{en:'EDIS must be completed to release sold shares to your broker for settlement.',np:'फर्स्यौटका लागि ब्रोकरलाई बेचेको सेयर रिलिज गर्न EDIS पूरा गर्नैपर्छ।'}},
    {q:{en:'Who developed and manages the Mero Share portal?',np:'मेरो शेयर पोर्टल कसले विकास र सञ्चालन गर्छ?'},
     opts:{en:['SEBON','NEPSE','CDSC','A private startup'],np:['सेबोन','नेप्से','सीडीएससी','एउटा निजी स्टार्टअप']}, correct:2,
     explain:{en:'Mero Share is developed and managed by CDSC.',np:'मेरो शेयर CDSCद्वारा विकसित र सञ्चालित छ।'}},
  ]
},
{
  id:'trading-mechanics', chapter:'c4', icon:'⚙️',
  title:{en:'How Buying & Selling Works (NOTS & TMS)', np:'किनबेच कसरी हुन्छ (NOTS र TMS)'},
  card:{en:'Who you actually buy shares from — and it isn\'t NEPSE itself.', np:'तपाईं वास्तवमा सेयर कोबाट किन्नुहुन्छ — र त्यो नेप्से आफैं होइन।'},
  simple:{en:'The secondary market is where investors buy and sell shares from each other, not from NEPSE. You place your order through a TMS (Trade Management System) provided by your broker.',
    np:'दोस्रो बजार त्यो हो जहाँ लगानीकर्ताहरूले एकअर्कासँग सेयर किनबेच गर्छन्, नेप्सेसँग होइन। तपाईंले आफ्नो ब्रोकरले उपलब्ध गराएको TMS (ट्रेड म्यानेजमेन्ट सिस्टम) मार्फत अर्डर राख्नुहुन्छ।'},
  detailed:{en:'NEPSE uses an "order-driven" system, where the best available buy price is automatically matched with the best available sell price through the NEPSE Online Trading System (NOTS). Regular trading hours run Sunday to Thursday, 11:00 AM to 3:00 PM.',
    np:'नेप्सेले "अर्डर-ड्रिभन" प्रणाली प्रयोग गर्छ, जहाँ उपलब्ध सबैभन्दा राम्रो खरिद मूल्य NOTS (नेप्से अनलाइन ट्रेडिङ सिस्टम) मार्फत उपलब्ध सबैभन्दा राम्रो बिक्री मूल्यसँग स्वतः मिलान हुन्छ। नियमित कारोबार समय आइतबारदेखि बिहीबारसम्म, बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म हुन्छ।'},
  example:{en:'Investors can place orders 24 hours a day through their broker\'s app; any order placed outside market hours simply sits in a "queuing" system until the market opens next.',
    np:'लगानीकर्ताहरूले आफ्नो ब्रोकरको एपमार्फत दिनको २४ घण्टा अर्डर राख्न सक्छन्; बजार समयबाहिर राखिएको कुनै पनि अर्डर बजार अर्को पटक नखुलेसम्म "क्यु" प्रणालीमा बस्छ।'},
  why:{en:'Realising you are trading against other real people — not a faceless institution — changes how you think about price movements: someone on the other side of your trade believes the opposite of what you believe.',
    np:'तपाईं कुनै निर्जीव संस्थासँग होइन, वास्तविक व्यक्तिहरूसँग कारोबार गर्दै हुनुहुन्छ भन्ने महसुस गर्नाले तपाईंले मूल्य उतार-चढावबारे कसरी सोच्नुहुन्छ भन्ने कुरा बदल्छ: तपाईंको कारोबारको अर्को छेउमा भएको व्यक्तिले तपाईंले विश्वास गरेको ठीक विपरीत विश्वास गर्छ।'},
  misconceptions:{en:'Beginners often think they are buying shares directly from NEPSE or from the company itself; in reality, in the secondary market, you are buying from another investor, with NEPSE and your broker simply facilitating the match.',
    np:'सुरुवातीहरूले प्रायः सोच्छन् कि उनीहरूले नेप्से वा कम्पनी आफैंबाट सोझै सेयर किन्दैछन्; वास्तवमा, दोस्रो बजारमा, तपाईंले अर्को लगानीकर्ताबाट किन्नुहुन्छ, नेप्से र तपाईंको ब्रोकरले केवल मिलान सहज बनाउँछन्।'},
  takeaways:{en:['You trade with other investors, not with NEPSE directly.','TMS is your broker\'s trading interface.','Market hours: Sun–Thu, 11 AM – 3 PM.','Orders outside hours queue for the next session.'],
    np:['तपाईं नेप्सेसँग होइन, अन्य लगानीकर्ताहरूसँग कारोबार गर्नुहुन्छ।','TMS तपाईंको ब्रोकरको कारोबार इन्टरफेस हो।','बजार समय: आइत–बिही, बिहान ११ – दिउँसो ३।','समयबाहिरका अर्डर अर्को सत्रका लागि क्युमा बस्छन्।']},
  quiz:[
    {q:{en:'When you buy a share in the secondary market, who are you actually buying it from?',np:'दोस्रो बजारमा सेयर किन्दा, तपाईं वास्तवमा कोबाट किन्दै हुनुहुन्छ?'},
     opts:{en:['NEPSE itself','The company that issued the share','Another investor selling their shares','SEBON'],np:['नेप्से आफैं','सेयर जारी गर्ने कम्पनी','आफ्नो सेयर बेच्ने अर्को लगानीकर्ता','सेबोन']}, correct:2,
     explain:{en:'In the secondary market, you buy from other investors — NEPSE and your broker just facilitate the match.',np:'दोस्रो बजारमा, तपाईं अन्य लगानीकर्ताबाट किन्नुहुन्छ — नेप्से र ब्रोकरले केवल मिलान सहज बनाउँछन्।'}},
    {q:{en:'What happens to an order placed outside NEPSE market hours?',np:'नेप्से बजार समयबाहिर राखिएको अर्डरलाई के हुन्छ?'},
     opts:{en:['It is automatically rejected','It queues until the next market session','It executes at midnight','It is sent to SEBON for review'],np:['यो स्वतः अस्वीकृत हुन्छ','यो अर्को बजार सत्रसम्म क्युमा बस्छ','यो मध्यरातमा कार्यान्वयन हुन्छ','यो समीक्षाका लागि सेबोनलाई पठाइन्छ']}, correct:1,
     explain:{en:'Orders placed outside trading hours sit in a queue until the market reopens.',np:'कारोबार समयबाहिर राखिएका अर्डरहरू बजार पुनः नखुलेसम्म क्युमा बस्छन्।'}},
  ]
},
{
  id:'brokers', chapter:'c4', icon:'🧾',
  title:{en:'Stock Brokers & Commissions', np:'स्टक ब्रोकर र कमिसन'},
  card:{en:'The licensed middlemen who make every trade possible — and take a small cut for it.', np:'हरेक कारोबार सम्भव बनाउने इजाजतपत्रप्राप्त बिचौलिया — र यसका लागि सानो कमिसन लिने।'},
  simple:{en:'Brokers are licensed middlemen who carry out your trades for you. In Nepal there are around 50 registered stockbrokers to choose from.',
    np:'ब्रोकर इजाजतपत्रप्राप्त बिचौलिया हुन् जसले तपाईंको तर्फबाट कारोबार सम्पन्न गर्छन्। नेपालमा छनोट गर्न लगभग ५० दर्ता स्टक ब्रोकरहरू छन्।'},
  detailed:{en:'Brokers charge a commission on every buy and sell transaction. These commission rates are tiered — the larger your trade value, the lower the percentage commission you typically pay, so frequent small trades can cost proportionally more than fewer larger ones.',
    np:'ब्रोकरहरूले हरेक खरिद र बिक्री कारोबारमा कमिसन लिन्छन्। यी कमिसन दरहरू तह-तह हुन्छन् — तपाईंको कारोबार मूल्य जति ठूलो हुन्छ, प्रायः प्रतिशत कमिसन त्यति नै कम हुन्छ, त्यसैले धेरै साना कारोबारहरूले कम धेरै ठूला कारोबारभन्दा सापेक्षिक रूपमा बढी खर्च गराउन सक्छ।'},
  example:{en:'Brokers in Nepal are commonly identified by a broker number (for example, "Broker No. 34" or "Broker No. 42") which you will see referenced when you select your broker in Mero Share or your TMS app.',
    np:'नेपालमा ब्रोकरहरू सामान्यतया ब्रोकर नम्बरद्वारा चिनिन्छन् (जस्तै, "ब्रोकर नं. ३४" वा "ब्रोकर नं. ४२"), जुन तपाईंले मेरो शेयर वा TMS एपमा आफ्नो ब्रोकर छनोट गर्दा देख्नुहुनेछ।'},
  why:{en:'Ignoring commissions, SEBON fees, and Capital Gains Tax (CGT) when calculating your profit is one of the fastest ways to overestimate how much money you actually made.',
    np:'नाफा गणना गर्दा कमिसन, सेबोन शुल्क, र पूँजीगत लाभ कर (CGT) बेवास्ता गर्नु तपाईंले वास्तवमा कति कमाउनुभयो भन्ने अत्यधिक अनुमान गर्ने सबैभन्दा छिटो तरिकाहरू मध्ये एक हो।'},
  misconceptions:{en:'Many beginners think the profit number shown in their portfolio app is their "net" take-home profit; in reality you must subtract broker commission, SEBON fees, and Capital Gains Tax to know your real earnings.',
    np:'धेरै सुरुवातीहरूले आफ्नो पोर्टफोलियो एपमा देखिने नाफा नम्बर नै आफ्नो "खुद" नाफा हो भन्ने सोच्छन्; वास्तवमा तपाईंको वास्तविक कमाइ थाहा पाउन ब्रोकर कमिसन, सेबोन शुल्क, र पूँजीगत लाभ कर घटाउनुपर्छ।'},
  takeaways:{en:['Commission rates are tiered by trade size.','Choose a broker for reliability and service, not just low fees.','Always subtract fees + CGT to find your real profit.','Around 50 licensed brokers operate in Nepal.'],
    np:['कमिसन दर कारोबार आकार अनुसार तह-तह हुन्छ।','केवल कम शुल्कका लागि होइन, भरपर्दोपना र सेवाका लागि ब्रोकर छान्नुहोस्।','वास्तविक नाफा थाहा पाउन सधैं शुल्क + CGT घटाउनुहोस्।','नेपालमा लगभग ५० इजाजतपत्रप्राप्त ब्रोकर सञ्चालनमा छन्।']},
  quiz:[
    {q:{en:'To find your true profit from a trade, you should subtract:',np:'कारोबारबाट तपाईंको वास्तविक नाफा पत्ता लगाउन तपाईंले के घटाउनुपर्छ?'},
     opts:{en:['Nothing, the app shows the final number','Commission, SEBON fees, and Capital Gains Tax','Only the share\'s face value','Your CRN fee'],np:['केही होइन, एपले अन्तिम नम्बर देखाउँछ','कमिसन, सेबोन शुल्क, र पूँजीगत लाभ कर','केवल सेयरको अंकित मूल्य','तपाईंको CRN शुल्क']}, correct:1,
     explain:{en:'Real profit = displayed gain minus commission, fees, and CGT.',np:'वास्तविक नाफा = देखाइएको लाभ घटा कमिसन, शुल्क, र CGT।'}},
    {q:{en:'How are broker commission rates typically structured in Nepal?',np:'नेपालमा ब्रोकर कमिसन दरहरू सामान्यतया कसरी संरचित हुन्छन्?'},
     opts:{en:['Flat rate regardless of trade size','Tiered — larger trades often pay a lower percentage','Only charged on losing trades','Set by SEBON per company'],np:['कारोबार आकार जेसुकै भए पनि समान दर','तह-तह — प्रायः ठूला कारोबारले कम प्रतिशत तिर्छन्','केवल नोक्सानीको कारोबारमा मात्र लगाइन्छ','सेबोनले प्रति कम्पनी तोक्छ']}, correct:1,
     explain:{en:'Commission is tiered, with larger trade values generally paying a lower percentage.',np:'कमिसन तह-तह हुन्छ, ठूला कारोबार मूल्यले सामान्यतया कम प्रतिशत तिर्छन्।'}},
  ]
},
{
  id:'supply-demand-cycles', chapter:'c4', icon:'📈',
  title:{en:'Supply, Demand & Bull vs Bear Markets', np:'माग, आपूर्ति र बुल बनाम बेयर बजार'},
  card:{en:'Why prices move at all, and what to call the market\'s two big moods.', np:'मूल्य किन घटबढ हुन्छ, र बजारको दुई ठूला मुडलाई के भनिन्छ।'},
  simple:{en:'When more people want to buy a share than sell it, the price tends to rise (high demand). When more people want to sell than buy, the price tends to fall (high supply). A "bull market" is a long period of rising prices and optimism; a "bear market" is a long period of falling prices and pessimism.',
    np:'जब बेच्नेभन्दा किन्न चाहनेहरू धेरै हुन्छन्, मूल्य बढ्ने प्रवृत्ति हुन्छ (उच्च माग)। जब किन्नेभन्दा बेच्न चाहनेहरू धेरै हुन्छन्, मूल्य घट्ने प्रवृत्ति हुन्छ (उच्च आपूर्ति)। "बुल मार्केट" भनेको मूल्य बढिरहने र आशावाद रहने लामो अवधि हो; "बेयर मार्केट" भनेको मूल्य घटिरहने र निराशावाद रहने लामो अवधि हो।'},
  detailed:{en:'Because NEPSE is an order-driven, order-matching exchange, every single price change is ultimately a reflection of shifting buy and sell orders. Broader "bull" and "bear" trends across the whole NEPSE Index are usually driven by macro factors — interest rates, liquidity in the banking system, monsoon and hydropower output, political stability, and overall investor sentiment.',
    np:'नेप्से अर्डर-ड्रिभन, अर्डर-मिलान गर्ने एक्सचेन्ज भएकाले, प्रत्येक मूल्य परिवर्तन अन्ततः बदलिँदो खरिद र बिक्री अर्डरको प्रतिबिम्ब हो। सम्पूर्ण नेप्से इन्डेक्समा व्यापक "बुल" र "बेयर" प्रवृत्तिहरू सामान्यतया व्यापक कारकहरूद्वारा सञ्चालित हुन्छन् — ब्याजदर, बैंकिङ प्रणालीमा तरलता, मनसुन र जलविद्युत उत्पादन, राजनैतिक स्थिरता, र समग्र लगानीकर्ता भावना।'},
  example:{en:'NEPSE has historically experienced sharp bull runs followed by prolonged bear corrections — periods often linked to shifts in bank lending liquidity, since liquidity strongly affects how much money is available for share purchases in Nepal.',
    np:'नेप्सेले ऐतिहासिक रूपमा तीव्र बुल दौडपछि लामो बेयर सुधारहरू भोगेको छ — यी अवधिहरू प्रायः बैंक ऋण तरलतामा परिवर्तनसँग जोडिएका हुन्छन्, किनभने तरलताले नेपालमा सेयर खरिदका लागि उपलब्ध पैसामा ठूलो प्रभाव पार्छ।'},
  why:{en:'Recognising whether you are in a bull or bear phase — and understanding that it is driven by collective supply and demand, not by any single company\'s fundamentals alone — helps you avoid panicking during normal corrections or getting overconfident during rallies.',
    np:'तपाईं बुल वा बेयर चरणमा हुनुहुन्छ भनी पहिचान गर्नाले — र यो सामूहिक माग र आपूर्तिद्वारा सञ्चालित हो, कुनै एउटा कम्पनीको आधारभूत तथ्यांकले मात्र होइन भन्ने बुझ्नाले — तपाईंलाई सामान्य सुधारका बेला डराउनबाट वा उफानका बेला अति आत्मविश्वासी हुनबाट जोगाउँछ।'},
  misconceptions:{en:'Beginners often think a falling market means every single stock is a "bad" investment, and a rising market means every stock is "safe" — in reality, individual company quality still matters enormously within any broader market trend.',
    np:'सुरुवातीहरूले प्रायः सोच्छन् कि घट्दो बजारको अर्थ प्रत्येक सेयर "नराम्रो" लगानी हो, र बढ्दो बजारको अर्थ प्रत्येक सेयर "सुरक्षित" हो — वास्तवमा, कुनै पनि व्यापक बजार प्रवृत्ति भित्र व्यक्तिगत कम्पनीको गुणस्तर अझै धेरै महत्त्वपूर्ण हुन्छ।'},
  takeaways:{en:['Prices move because of shifting buy/sell orders.','Bull = rising, optimistic; Bear = falling, pessimistic.','Liquidity and macro factors drive broad NEPSE trends.','Individual stock quality matters in any market phase.'],
    np:['खरिद/बिक्री अर्डर बदलिँदा मूल्य घटबढ हुन्छ।','बुल = बढ्दो, आशावादी; बेयर = घट्दो, निराशावादी।','तरलता र व्यापक कारकहरूले नेप्सेको व्यापक प्रवृत्ति निर्देशित गर्छन्।','कुनै पनि बजार चरणमा व्यक्तिगत सेयरको गुणस्तर महत्त्वपूर्ण हुन्छ।']},
  quiz:[
    {q:{en:'A "bull market" refers to a period of:',np:'"बुल मार्केट" ले कस्तो अवधिलाई जनाउँछ?'},
     opts:{en:['Falling prices and pessimism','Rising prices and optimism','No price movement at all','Only IPO activity'],np:['घट्दो मूल्य र निराशावाद','बढ्दो मूल्य र आशावाद','कुनै मूल्य परिवर्तन नहुने','केवल IPO गतिविधि']}, correct:1,
     explain:{en:'A bull market is a sustained period of rising prices and investor optimism.',np:'बुल मार्केट भनेको बढ्दो मूल्य र लगानीकर्ता आशावादको निरन्तर अवधि हो।'}},
    {q:{en:'In a broad market downturn (bear market), is every individual stock automatically a bad investment?',np:'व्यापक बजार गिरावट (बेयर मार्केट) मा, के हरेक व्यक्तिगत सेयर स्वतः नराम्रो लगानी हो?'},
     opts:{en:['Yes, always','No — individual company quality still matters','Only hydropower stocks are affected','Only if SEBON says so'],np:['हो, सधैं','होइन — व्यक्तिगत कम्पनीको गुणस्तर अझै महत्त्वपूर्ण हुन्छ','केवल जलविद्युत सेयर मात्र प्रभावित हुन्छ','केवल सेबोनले भनेमा मात्र']}, correct:1,
     explain:{en:'Broad market trends don\'t erase the importance of an individual company\'s fundamentals.',np:'व्यापक बजार प्रवृत्तिले व्यक्तिगत कम्पनीको आधारभूत तथ्यांकको महत्त्व मेटाउँदैन।'}},
  ]
},
{
  id:'dividends', chapter:'c5', icon:'💰',
  title:{en:'Dividends: Cash vs Bonus', np:'लाभांश: नगद बनाम बोनस'},
  card:{en:'How a company shares its profit with you — and why "10% richer instantly" is a myth.', np:'कम्पनीले आफ्नो नाफा तपाईंसँग कसरी बाँड्छ — र "तुरुन्तै १०% धनी" किन मिथक हो।'},
  simple:{en:'Dividends are how a company shares its profits with you. You can receive them as Cash (money into your bank) or as Bonus Shares (extra shares added to your account for free).',
    np:'लाभांश भनेको कम्पनीले आफ्नो नाफा तपाईंसँग बाँड्ने तरिका हो। तपाईंले यसलाई नगद (बैंकमा पैसा) वा बोनस सेयर (खातामा थपिने अतिरिक्त सेयर) को रूपमा पाउन सक्नुहुन्छ।'},
  detailed:{en:'A cash dividend is money deposited directly into your linked bank account. A bonus share (stock dividend) is an additional share issued to you for free, which increases your total share count — but it also typically triggers a "price adjustment," where the market price of the stock drops on the book closure date to reflect that the company\'s total value is now split across more shares.',
    np:'नगद लाभांश भनेको तपाईंको जोडिएको बैंक खातामा सोझै जम्मा हुने पैसा हो। बोनस सेयर (स्टक लाभांश) भनेको तपाईंलाई निःशुल्क जारी गरिने अतिरिक्त सेयर हो, जसले तपाईंको कुल सेयर संख्या बढाउँछ — तर यसले सामान्यतया "मूल्य समायोजन" पनि ल्याउँछ, जहाँ बुक क्लोजर मितिमा सेयरको बजार मूल्य घट्छ किनभने कम्पनीको कुल मूल्य अब धेरै सेयरमा विभाजित हुन्छ।'},
  example:{en:'Nepalese investors have historically favoured bonus shares over cash dividends, believing bonus shares lead to greater long-term wealth by compounding their total share count over time.',
    np:'नेपाली लगानीकर्ताहरूले ऐतिहासिक रूपमा नगद लाभांशभन्दा बोनस सेयरलाई प्राथमिकता दिएका छन्, किनभने उनीहरू विश्वास गर्छन् कि बोनस सेयरले समयसँगै कुल सेयर संख्या बढाएर दीर्घकालीन सम्पत्ति बढाउँछ।'},
  why:{en:'Understanding the price adjustment mechanic prevents you from feeling "cheated" when your per-share price drops right after a bonus announcement — your total portfolio value is mathematically almost unchanged on that day.',
    np:'मूल्य समायोजन संयन्त्र बुझ्नाले तपाईंलाई बोनस घोषणापछि तुरुन्तै प्रति-सेयर मूल्य घट्दा "ठगिएको" महसुस गर्नबाट रोक्छ — त्यो दिन तपाईंको कुल पोर्टफोलियो मूल्य गणितीय रूपमा लगभग अपरिवर्तित हुन्छ।'},
  misconceptions:{en:'Many think a 10% bonus share announcement makes them 10% richer instantly. In reality, the market price usually drops proportionally on the book closure date, so your total portfolio value stays roughly the same at that moment — the real benefit comes only if the company keeps growing afterward.',
    np:'धेरैले १०% बोनस सेयर घोषणाले उनीहरूलाई तुरुन्तै १०% धनी बनाउँछ भन्ने सोच्छन्। वास्तवमा, बजार मूल्य सामान्यतया बुक क्लोजर मितिमा समानुपातिक रूपमा घट्छ, त्यसैले त्यो क्षणमा तपाईंको कुल पोर्टफोलियो मूल्य लगभग उस्तै रहन्छ — वास्तविक फाइदा त्यसपछि मात्र आउँछ यदि कम्पनी बढ्दै जान्छ भने।'},
  takeaways:{en:['Cash dividend = direct money; Bonus share = extra shares.','Bonus shares trigger a proportional price adjustment.','Total portfolio value doesn\'t jump just from a bonus.','Nepalese investors often favour bonus shares historically.'],
    np:['नगद लाभांश = सोझो पैसा; बोनस सेयर = अतिरिक्त सेयर।','बोनस सेयरले समानुपातिक मूल्य समायोजन ल्याउँछ।','केवल बोनसले कुल पोर्टफोलियो मूल्य उफ्रँदैन।','नेपाली लगानीकर्ताहरूले ऐतिहासिक रूपमा प्रायः बोनस सेयर रुचाउँछन्।']},
  quiz:[
    {q:{en:'After a company announces a 10% bonus share, what typically happens to the market price?',np:'कम्पनीले १०% बोनस सेयर घोषणा गरेपछि, बजार मूल्यमा सामान्यतया के हुन्छ?'},
     opts:{en:['It stays exactly the same','It usually adjusts downward proportionally','It always doubles','It becomes NPR 100 flat'],np:['ठ्याक्कै उस्तै रहन्छ','सामान्यतया समानुपातिक रूपमा घट्छ','सधैं दोब्बर हुन्छ','ठ्याक्कै रु १०० हुन्छ']}, correct:1,
     explain:{en:'Bonus shares trigger a proportional downward price adjustment, keeping total value roughly constant.',np:'बोनस सेयरले समानुपातिक मूल्य घटाइ ल्याउँछ, जसले कुल मूल्य लगभग स्थिर राख्छ।'}},
    {q:{en:'What is a cash dividend?',np:'नगद लाभांश के हो?'},
     opts:{en:['Extra free shares','Money deposited into your bank account','A loan from the company','A discount on your next IPO'],np:['अतिरिक्त निःशुल्क सेयर','तपाईंको बैंक खातामा जम्मा हुने पैसा','कम्पनीबाट ऋण','अर्को IPO मा छुट']}, correct:1,
     explain:{en:'A cash dividend is money paid directly into your bank account.',np:'नगद लाभांश तपाईंको बैंक खातामा सोझै तिरिने पैसा हो।'}},
  ]
},
{
  id:'rights-bookclosure', chapter:'c5', icon:'📅',
  title:{en:'Rights Shares & Book Closure', np:'हक प्रद सेयर र बुक क्लोजर'},
  card:{en:'Your chance to buy more (at a discount) — and the deadline date that decides who qualifies.', np:'थप किन्ने तपाईंको मौका (छुटमा) — र योग्य हुने निर्णय गर्ने अन्तिम मिति।'},
  simple:{en:'Rights shares give existing owners a chance to buy more shares, often at a cheaper price (commonly NPR 100), before they are offered to anyone else. Book Closure is the deadline date — you must own the shares before this date to qualify for any dividend or rights.',
    np:'हक प्रद सेयरले भइरहेका सेयरधनीहरूलाई अरूलाई प्रस्ताव गर्नुअघि, प्रायः सस्तो मूल्यमा (सामान्यतया रु १००) थप सेयर किन्ने मौका दिन्छ। बुक क्लोजर अन्तिम मिति हो — कुनै पनि लाभांश वा हकको लागि योग्य हुन तपाईंले यो मितिअघि सेयर स्वामित्वमा राख्नुपर्छ।'},
  detailed:{en:'Companies issue rights shares to raise additional capital directly from their existing owners, rather than from the general public. If you choose not to exercise your right to buy, your percentage ownership in the company decreases — a process known as "dilution" — because the total number of shares in the company increases while yours stays the same.',
    np:'कम्पनीहरूले सर्वसाधारणको सट्टा आफ्ना भइरहेका मालिकहरूबाट सोझै थप पुँजी उठाउन हक प्रद सेयर जारी गर्छन्। यदि तपाईंले किन्ने आफ्नो हक प्रयोग नगर्ने छनोट गर्नुभयो भने, कम्पनीमा तपाईंको स्वामित्व प्रतिशत घट्छ — यसलाई "डाइलुसन" भनिन्छ — किनभने कम्पनीमा कुल सेयर संख्या बढ्छ जबकि तपाईंको उस्तै रहन्छ।'},
  example:{en:'Many hydropower and finance companies in Nepal use rights issues to fund new projects or to meet minimum capital requirements set by their regulators, such as Nepal Rastra Bank for financial institutions.',
    np:'नेपालमा धेरै जलविद्युत र फाइनान्स कम्पनीहरूले नयाँ आयोजना वित्तपोषण गर्न वा नेपाल राष्ट्र बैंक जस्ता नियामकहरूले तोकेको न्यूनतम पुँजी आवश्यकता पूरा गर्न हक प्रद निष्कासन प्रयोग गर्छन्।'},
  why:{en:'Missing a Book Closure date because you didn\'t realise it was coming can mean losing out entirely on a dividend or a rights offer you were otherwise entitled to — always track upcoming corporate action dates for stocks you hold.',
    np:'बुक क्लोजर मिति आउँदैछ भनी थाहा नपाएर छुटाउनुको अर्थ तपाईं अन्यथा हकदार हुनुहुने लाभांश वा हक प्रस्ताव पूर्ण रूपमा गुमाउनु हुन सक्छ — तपाईंले राखेको सेयरहरूको आगामी कर्पोरेट कार्य मितिहरू सधैं ट्र्याक गर्नुहोस्।'},
  misconceptions:{en:'Beginners often confuse rights shares with bonus shares. The key difference: rights shares require you to pay money to receive them, while bonus shares are completely free.',
    np:'सुरुवातीहरूले प्रायः हक प्रद सेयर र बोनस सेयर बीच भ्रमित हुन्छन्। मुख्य भिन्नता: हक प्रद सेयर पाउन तपाईंले पैसा तिर्नुपर्छ, जबकि बोनस सेयर पूर्ण रूपमा निःशुल्क हुन्छ।'},
  takeaways:{en:['Rights shares = you pay to buy more, at a discount.','Bonus shares = completely free.','Not exercising rights leads to dilution of your ownership %.','Always check Book Closure dates for stocks you hold.'],
    np:['हक प्रद सेयर = छुटमा थप किन्न तपाईंले तिर्नुपर्छ।','बोनस सेयर = पूर्ण रूपमा निःशुल्क।','हक प्रयोग नगर्दा तपाईंको स्वामित्व % डाइलुट हुन्छ।','राखेको सेयरहरूको बुक क्लोजर मिति सधैं जाँच्नुहोस्।']},
  quiz:[
    {q:{en:'What is the key difference between rights shares and bonus shares?',np:'हक प्रद सेयर र बोनस सेयर बीचको मुख्य भिन्नता के हो?'},
     opts:{en:['There is no difference','Rights shares require payment; bonus shares are free','Bonus shares require payment; rights shares are free','Both require the same fee'],np:['कुनै भिन्नता छैन','हक प्रद सेयरका लागि भुक्तानी चाहिन्छ; बोनस सेयर निःशुल्क','बोनस सेयरका लागि भुक्तानी चाहिन्छ; हक प्रद सेयर निःशुल्क','दुवैलाई उस्तै शुल्क चाहिन्छ']}, correct:1,
     explain:{en:'Rights shares must be paid for; bonus shares are issued free of charge.',np:'हक प्रद सेयरका लागि भुक्तानी गर्नुपर्छ; बोनस सेयर निःशुल्क जारी गरिन्छ।'}},
    {q:{en:'If you don\'t exercise your right to buy rights shares, what happens?',np:'यदि तपाईंले हक प्रद सेयर किन्ने आफ्नो हक प्रयोग गर्नुभएन भने के हुन्छ?'},
     opts:{en:['You get the shares for free anyway','Your ownership percentage decreases (dilution)','Your existing shares are cancelled','Nothing changes at all'],np:['तपाईंले जसरी पनि निःशुल्क सेयर पाउनुहुन्छ','तपाईंको स्वामित्व प्रतिशत घट्छ (डाइलुसन)','तपाईंको भइरहेको सेयर रद्द हुन्छ','केही पनि परिवर्तन हुँदैन']}, correct:1,
     explain:{en:'Not exercising your rights leads to dilution of your ownership percentage.',np:'आफ्नो हक प्रयोग नगर्दा तपाईंको स्वामित्व प्रतिशत डाइलुट हुन्छ।'}},
  ]
},
{
  id:'market-cap', chapter:'c6', icon:'🏷️',
  title:{en:'Market Capitalization & Company Size', np:'बजार पूँजीकरण र कम्पनीको आकार'},
  card:{en:'The "total price tag" of a company, and why a low share price can be misleading.', np:'कम्पनीको "कुल मूल्य ट्याग", र सस्तो सेयर मूल्य किन भ्रामक हुन सक्छ।'},
  simple:{en:'Market capitalisation is the "total price tag" of a company. It equals the current share price multiplied by the total number of shares that exist.',
    np:'बजार पूँजीकरण भनेको कम्पनीको "कुल मूल्य ट्याग" हो। यो हालको सेयर मूल्यलाई अस्तित्वमा रहेको कुल सेयर संख्याले गुणन गरेर निकालिन्छ।'},
  detailed:{en:'Large-cap companies (like major commercial banks) are generally considered relatively safer but slower-growing, since they are already large and established. Small-cap and mid-cap companies (like many smaller hydropower or finance firms) are often more volatile and riskier, but can offer higher growth potential.',
    np:'ठूलो पूँजीका कम्पनीहरू (जस्तै प्रमुख कमर्सियल बैंकहरू) सामान्यतया अपेक्षाकृत सुरक्षित तर ढिलो बढ्ने मानिन्छन्, किनभने तिनीहरू पहिल्यै ठूला र स्थापित छन्। सानो र मध्यम पूँजीका कम्पनीहरू (जस्तै धेरै साना जलविद्युत वा फाइनान्स फर्महरू) प्रायः बढी अस्थिर र जोखिमपूर्ण हुन्छन्, तर उच्च वृद्धि सम्भावना प्रस्ताव गर्न सक्छन्।'},
  example:{en:'The total market capitalisation of NEPSE reached over NPR 334,000 crore (roughly USD 27 billion) in May 2022, showing how large the combined value of all listed companies can become.',
    np:'नेप्सेको कुल बजार पूँजीकरण मे २०२२ मा रु ३,३४,००० करोड (लगभग USD २७ बिलियन) भन्दा बढी पुगेको थियो, जसले सबै सूचीकृत कम्पनीहरूको संयुक्त मूल्य कति ठूलो हुन सक्छ भन्ने देखाउँछ।'},
  why:{en:'Market cap gives you a quick, standardised way to compare the true size of two very different-priced companies, which is essential before you decide how much risk you are actually taking on.',
    np:'बजार पूँजीले तपाईंलाई दुई फरक-फरक मूल्यका कम्पनीहरूको वास्तविक आकार तुलना गर्ने द्रुत, मानकीकृत तरिका दिन्छ, जुन तपाईंले वास्तवमा कति जोखिम लिँदैहुनुहुन्छ भनी निर्णय गर्नुअघि आवश्यक हुन्छ।'},
  misconceptions:{en:'A company with a "low" share price (say NPR 150) is not automatically "cheaper" or "smaller" than one with a "high" share price (say NPR 800) — you must compare their total market capitalisation, not just the per-share sticker price.',
    np:'"कम" सेयर मूल्य (जस्तै रु १५०) भएको कम्पनी स्वतः "सस्तो" वा "साना" हुँदैन "उच्च" सेयर मूल्य (जस्तै रु ८००) भएको कम्पनीभन्दा — तपाईंले प्रति-सेयर मूल्य मात्र होइन, तिनीहरूको कुल बजार पूँजीकरण तुलना गर्नुपर्छ।'},
  takeaways:{en:['Market Cap = Share Price × Total Shares Outstanding.','Large-cap = generally more stable, slower growth.','Small/Mid-cap = more volatile, higher growth potential.','Share price alone never tells you company size.'],
    np:['बजार पूँजी = सेयर मूल्य × कुल बक्यौता सेयर।','ठूलो पूँजी = सामान्यतया बढी स्थिर, ढिलो वृद्धि।','सानो/मध्यम पूँजी = बढी अस्थिर, उच्च वृद्धि सम्भावना।','सेयर मूल्य मात्रैले कम्पनीको आकार कहिल्यै बताउँदैन।']},
  quiz:[
    {q:{en:'How is market capitalisation calculated?',np:'बजार पूँजीकरण कसरी गणना गरिन्छ?'},
     opts:{en:['Share price + total shares','Share price × total shares outstanding','EPS × P/E ratio only','Face value × 100'],np:['सेयर मूल्य + कुल सेयर','सेयर मूल्य × कुल बक्यौता सेयर','केवल EPS × P/E अनुपात','अंकित मूल्य × १००']}, correct:1,
     explain:{en:'Market cap = current share price multiplied by total shares outstanding.',np:'बजार पूँजी = हालको सेयर मूल्य × कुल बक्यौता सेयर।'}},
    {q:{en:'A stock priced at NPR 150 is automatically smaller than a stock priced at NPR 800. True or false?',np:'रु १५० मूल्यको सेयर रु ८०० मूल्यको सेयरभन्दा स्वतः सानो हुन्छ। सही कि गलत?'},
     opts:{en:['True — lower price always means smaller company','False — you must compare total market cap, not price alone','True, but only for banks','False, price is the only thing that matters'],np:['सही — कम मूल्यले सधैं सानो कम्पनी जनाउँछ','गलत — तपाईंले कुल बजार पूँजी तुलना गर्नुपर्छ, मूल्य मात्र होइन','सही, तर केवल बैंकका लागि','गलत, मूल्य मात्रै महत्त्वपूर्ण हो']}, correct:1,
     explain:{en:'Company size depends on total market cap, not just the per-share price.',np:'कम्पनीको आकार कुल बजार पूँजीमा निर्भर हुन्छ, प्रति-सेयर मूल्यमा मात्र होइन।'}},
  ]
},
{
  id:'float-promoter', chapter:'c6', icon:'🧩',
  title:{en:'Float Shares vs Promoter Shares', np:'फ्लोट सेयर बनाम प्रवर्द्धक सेयर'},
  card:{en:'Not every share in a company is actually available to trade — here\'s why that matters.', np:'कम्पनीको हरेक सेयर वास्तवमा कारोबारका लागि उपलब्ध हुँदैन — यो किन महत्त्वपूर्ण छ।'},
  simple:{en:'"Promoter shares" are the shares held by the company\'s founders and major backers, which are usually locked and cannot be freely traded for a period. "Float shares" are the remaining shares that are actually available for the general public to buy and sell.',
    np:'"प्रवर्द्धक सेयर" भनेको कम्पनीका संस्थापक र मुख्य लगानीकर्ताहरूले राखेको सेयर हो, जुन सामान्यतया एउटा अवधिका लागि लक हुन्छ र स्वतन्त्र रूपमा कारोबार गर्न मिल्दैन। "फ्लोट सेयर" भनेको बाँकी रहेको सेयर हो जुन साँच्चै सर्वसाधारणले किनबेच गर्न उपलब्ध हुन्छ।'},
  detailed:{en:'Because promoter shares are locked, only the float portion of a company\'s total shares actively drives day-to-day price discovery on NEPSE. A company with a small float relative to its total shares can see much sharper price swings on relatively small trading volumes, since fewer shares are actually chasing each other in the market.',
    np:'प्रवर्द्धक सेयर लक भएकाले, कम्पनीको कुल सेयरको केवल फ्लोट भागले मात्र नेप्सेमा दैनिक मूल्य पत्ता लगाउने काम सक्रिय रूपमा गर्छ। आफ्नो कुल सेयरको तुलनामा सानो फ्लोट भएको कम्पनीले अपेक्षाकृत सानो कारोबार परिमाणमा पनि धेरै तीव्र मूल्य उतार-चढाव देख्न सक्छ, किनभने बजारमा वास्तवमा एकअर्कालाई पछ्याउने सेयर संख्या कम हुन्छ।'},
  example:{en:'Newly listed companies in Nepal, especially smaller hydropower or finance IPOs, often have a relatively small float in their first months of trading, which is one reason their prices can swing sharply right after listing.',
    np:'नेपालमा नयाँ सूचीकृत कम्पनीहरू, विशेष गरी साना जलविद्युत वा फाइनान्स IPOहरूले, कारोबारको पहिलो केही महिनामा प्रायः अपेक्षाकृत सानो फ्लोट राख्छन्, जुन सूचीकरणपछि तुरुन्तै तिनीहरूको मूल्य तीव्र रूपमा घटबढ हुनुको एउटा कारण हो।'},
  why:{en:'Before assuming heavy price swings mean "something is wrong" with a company, checking its float size gives you a more accurate read on whether the volatility is simply a mechanical result of limited tradable supply.',
    np:'ठूलो मूल्य उतार-चढावको अर्थ कम्पनीमा "केही समस्या छ" भनी सोच्नुअघि, यसको फ्लोट आकार जाँच्नाले यो अस्थिरता सीमित कारोबारयोग्य आपूर्तिको यान्त्रिक परिणाम मात्र हो कि होइन भन्ने बढी सही जानकारी दिन्छ।'},
  misconceptions:{en:'Beginners sometimes assume the market cap they see reflects shares that are all freely tradable; in reality a large chunk may be locked promoter shares that don\'t actually trade day-to-day.',
    np:'सुरुवातीहरूले कहिलेकाहीं देखेको बजार पूँजीले सबै स्वतन्त्र रूपमा कारोबारयोग्य सेयर प्रतिबिम्बित गर्छ भनी ठान्छन्; वास्तवमा ठूलो हिस्सा लक गरिएको प्रवर्द्धक सेयर हुन सक्छ जुन वास्तवमा दैनिक कारोबार हुँदैन।'},
  takeaways:{en:['Promoter shares are typically locked for a set period.','Float shares are what actually trade day-to-day.','Small float can mean sharper price volatility.','Total shares ≠ tradable (float) shares.'],
    np:['प्रवर्द्धक सेयर सामान्यतया तोकिएको अवधिका लागि लक हुन्छ।','फ्लोट सेयर वास्तवमा दैनिक कारोबार हुने हो।','सानो फ्लोटले तीव्र मूल्य अस्थिरता जनाउन सक्छ।','कुल सेयर ≠ कारोबारयोग्य (फ्लोट) सेयर।']},
  quiz:[
    {q:{en:'Which shares are typically locked and cannot be freely traded for a period?',np:'सामान्यतया कुन सेयर लक हुन्छ र एउटा अवधिसम्म स्वतन्त्र रूपमा कारोबार गर्न मिल्दैन?'},
     opts:{en:['Float shares','Promoter shares','Bonus shares','Rights shares'],np:['फ्लोट सेयर','प्रवर्द्धक सेयर','बोनस सेयर','हक प्रद सेयर']}, correct:1,
     explain:{en:'Promoter shares are held by founders/major backers and are typically locked for a period.',np:'प्रवर्द्धक सेयर संस्थापक/मुख्य लगानीकर्ताले राख्छन् र सामान्यतया एउटा अवधिका लागि लक हुन्छ।'}},
    {q:{en:'A company with a very small float relative to total shares tends to have:',np:'कुल सेयरको तुलनामा धेरै सानो फ्लोट भएको कम्पनीको प्रवृत्ति के हुन्छ?'},
     opts:{en:['Perfectly stable prices','Sharper price swings on smaller volumes','No trading at all','Guaranteed dividends'],np:['पूर्ण रूपमा स्थिर मूल्य','सानो परिमाणमा पनि तीव्र मूल्य उतार-चढाव','कुनै कारोबार नै नहुने','ग्यारेन्टी लाभांश']}, correct:1,
     explain:{en:'Smaller float means fewer shares actively trading, which can amplify price swings.',np:'सानो फ्लोटको अर्थ कम सेयर सक्रिय रूपमा कारोबार हुनु हो, जसले मूल्य उतार-चढाव बढाउन सक्छ।'}},
  ]
},
{
  id:'eps-pe', chapter:'c6', icon:'🧮',
  title:{en:'EPS & the P/E Ratio', np:'EPS र P/E अनुपात'},
  card:{en:'The two numbers most bank-stock investors in Nepal check first.', np:'नेपालका धेरै बैंक सेयर लगानीकर्ताले सबैभन्दा पहिले जाँच्ने दुई नम्बर।'},
  simple:{en:'EPS (Earnings Per Share) shows how much profit a company makes for every single share. The P/E Ratio (Price-to-Earnings) shows how much investors are willing to pay for each rupee of that profit.',
    np:'EPS (प्रति सेयर आम्दानी) ले कम्पनीले प्रत्येक सेयरका लागि कति नाफा कमाउँछ देखाउँछ। P/E अनुपात (मूल्य-देखि-आम्दानी) ले लगानीकर्ताहरू त्यो नाफाको प्रत्येक रुपियाँका लागि कति तिर्न तयार छन् देखाउँछ।'},
  detailed:{en:'P/E is calculated as Share Price ÷ EPS. A high P/E might mean the market believes the stock is overvalued, or it might mean investors expect strong future earnings growth — the number alone doesn\'t tell you which. In Nepal, studies on bank stocks have found that EPS and P/E ratios are among the most significant factors influencing share prices, with rising EPS generally correlating with a stronger stock price.',
    np:'P/E लाई सेयर मूल्य ÷ EPS द्वारा गणना गरिन्छ। उच्च P/E ले बजारले सेयर अधिमूल्यन भएको विश्वास गर्छ भन्ने अर्थ दिन सक्छ, वा लगानीकर्ताहरूले बलियो भविष्यको आम्दानी वृद्धिको अपेक्षा गर्छन् भन्ने अर्थ पनि दिन सक्छ — नम्बर मात्रैले कुन हो भन्ने बताउँदैन। नेपालमा, बैंक सेयरहरूमा गरिएका अध्ययनहरूले EPS र P/E अनुपातलाई सेयर मूल्य प्रभावित पार्ने सबैभन्दा महत्त्वपूर्ण कारकहरू मध्ये पाएका छन्, जहाँ बढ्दो EPS सामान्यतया बलियो सेयर मूल्यसँग सम्बन्धित हुन्छ।'},
  example:{en:'Many commercial banks listed on NEPSE have historically traded within a P/E ratio of roughly 15–25, though this range shifts significantly across different market cycles.',
    np:'नेप्सेमा सूचीकृत धेरै कमर्सियल बैंकहरू ऐतिहासिक रूपमा लगभग १५–२५ को P/E अनुपात भित्र कारोबार भएका छन्, यद्यपि यो दायरा फरक-फरक बजार चक्रहरूमा उल्लेखनीय रूपमा परिवर्तन हुन्छ।'},
  why:{en:'EPS and P/E let you compare how "expensive" two different companies are relative to their actual earning power — a much more meaningful comparison than looking at raw share price alone.',
    np:'EPS र P/E ले तपाईंलाई दुई फरक-फरक कम्पनीहरू तिनीहरूको वास्तविक आम्दानी क्षमताको तुलनामा कति "महँगो" छन् भनी तुलना गर्न दिन्छ — यो कच्चा सेयर मूल्य मात्र हेर्नुभन्दा धेरै अर्थपूर्ण तुलना हो।'},
  misconceptions:{en:'Investors often look only at dividend yield or share price momentum without checking the P/E ratio at all, potentially buying into a stock that is significantly overpriced relative to its actual earnings.',
    np:'लगानीकर्ताहरूले प्रायः P/E अनुपात नै नजाँची केवल लाभांश यिल्ड वा सेयर मूल्य गतिमा मात्र हेर्छन्, जसले तिनीहरूलाई वास्तविक आम्दानीको तुलनामा उल्लेखनीय रूपमा अधिमूल्यन भएको सेयरमा लगानी गराउन सक्छ।'},
  takeaways:{en:['EPS = Net Profit ÷ Total Shares Outstanding.','P/E = Share Price ÷ EPS.','High P/E = high expectations OR overvaluation — check further.','Compare P/E within the same sector, not across unrelated ones.'],
    np:['EPS = खुद नाफा ÷ कुल बक्यौता सेयर।','P/E = सेयर मूल्य ÷ EPS।','उच्च P/E = उच्च अपेक्षा वा अधिमूल्यन — थप जाँच गर्नुहोस्।','P/E लाई एउटै क्षेत्र भित्र तुलना गर्नुहोस्, असम्बन्धित क्षेत्रसँग होइन।']},
  quiz:[
    {q:{en:'How is the P/E ratio calculated?',np:'P/E अनुपात कसरी गणना गरिन्छ?'},
     opts:{en:['EPS ÷ Share Price','Share Price ÷ EPS','Market Cap ÷ EPS','Share Price × Total Shares'],np:['EPS ÷ सेयर मूल्य','सेयर मूल्य ÷ EPS','बजार पूँजी ÷ EPS','सेयर मूल्य × कुल सेयर']}, correct:1,
     explain:{en:'P/E Ratio = Share Price divided by EPS.',np:'P/E अनुपात = सेयर मूल्यलाई EPS ले भाग गरेर।'}},
    {q:{en:'A high P/E ratio always means a stock is overvalued. True or false?',np:'उच्च P/E अनुपातको अर्थ सधैं सेयर अधिमूल्यन भएको हो। सही कि गलत?'},
     opts:{en:['True, always','False — it could also reflect high growth expectations','True, but only for hydropower','False, P/E has no meaning at all'],np:['सही, सधैं','गलत — यसले उच्च वृद्धि अपेक्षा पनि प्रतिबिम्बित गर्न सक्छ','सही, तर केवल जलविद्युतका लागि','गलत, P/Eको कुनै अर्थ नै हुँदैन']}, correct:1,
     explain:{en:'A high P/E can mean overvaluation OR strong expected future growth — context matters.',np:'उच्च P/Eले अधिमूल्यन वा बलियो भविष्यको वृद्धि अपेक्षा दुवै जनाउन सक्छ — सन्दर्भ महत्त्वपूर्ण हुन्छ।'}},
  ]
},
{
  id:'nav-bookvalue', chapter:'c6', icon:'📗',
  title:{en:'Book Value & NAV', np:'बुक भ्यालु र NAV'},
  card:{en:'What a company (or fund) would theoretically be worth if it stopped operating today.', np:'कम्पनी (वा फन्ड) आज सञ्चालन बन्द भएमा सैद्धान्तिक रूपमा कति मूल्यको हुन्छ।'},
  simple:{en:'Book Value is roughly what a company\'s assets are worth on paper, minus its debts, divided across its shares. NAV (Net Asset Value) is a very similar idea, used mostly for mutual funds, showing the value of all the fund\'s assets per unit.',
    np:'बुक भ्यालु भनेको कम्पनीको सम्पत्तिको कागजी मूल्यबाट ऋण घटाई, सेयरहरूमा विभाजन गरेको मूल्य हो। NAV (खुद सम्पत्ति मूल्य) यससँग मिल्दोजुल्दो अवधारणा हो, जुन मुख्यतया म्युचुअल फन्डका लागि प्रयोग गरिन्छ, र फन्डको सबै सम्पत्तिको प्रति-युनिट मूल्य देखाउँछ।'},
  detailed:{en:'Book Value per share is calculated as (Total Assets − Total Liabilities) ÷ Total Shares Outstanding — essentially the company\'s net worth on an accounting basis. Comparing the market price to book value (a "Price-to-Book" comparison) can hint at whether a stock is trading above or below its accounting net worth, though for growth-oriented companies the market price is often well above book value for good reason.',
    np:'प्रति सेयर बुक भ्यालु (कुल सम्पत्ति − कुल दायित्व) ÷ कुल बक्यौता सेयर द्वारा गणना गरिन्छ — यो अनिवार्यतः कम्पनीको लेखांकन आधारमा खुद सम्पत्ति हो। बजार मूल्यलाई बुक भ्यालुसँग तुलना गर्नाले ("मूल्य-देखि-बुक" तुलना) सेयर आफ्नो लेखांकन खुद सम्पत्तिभन्दा माथि वा तल कारोबार भइरहेको छ कि भन्ने संकेत दिन सक्छ, यद्यपि वृद्धिउन्मुख कम्पनीहरूका लागि बजार मूल्य प्रायः राम्रो कारणले बुक भ्यालुभन्दा धेरै माथि हुन्छ।'},
  example:{en:'NAV is the number you will most often see when researching mutual funds listed and traded on NEPSE, since it tells you the actual underlying value of what the fund holds, separate from the fund unit\'s current trading price.',
    np:'नेप्सेमा सूचीकृत र कारोबार हुने म्युचुअल फन्ड अनुसन्धान गर्दा तपाईंले सबैभन्दा बढी देख्ने नम्बर NAV हो, किनभने यसले फन्ड युनिटको हालको कारोबार मूल्यबाट अलग, फन्डले राखेको वास्तविक अन्तर्निहित मूल्य बताउँछ।'},
  why:{en:'Book value and NAV give you a "floor" reference point grounded in actual accounting figures, which is a useful sanity check against a market price that can swing based purely on emotion and sentiment.',
    np:'बुक भ्यालु र NAV ले तपाईंलाई वास्तविक लेखांकन तथ्यांकमा आधारित "फ्लोर" सन्दर्भ बिन्दु दिन्छ, जुन केवल भावना र मनोदशामा आधारित घटबढ हुन सक्ने बजार मूल्यविरुद्ध उपयोगी सान्यता जाँच हो।'},
  misconceptions:{en:'Beginners sometimes assume a mutual fund unit trading above its NAV is automatically "overpriced" and a bad buy — but this ignores demand dynamics, distribution history, and fund management quality, which can justify a premium.',
    np:'सुरुवातीहरूले कहिलेकाहीं आफ्नो NAVभन्दा माथि कारोबार हुने म्युचुअल फन्ड युनिट स्वतः "अधिमूल्यन" र नराम्रो खरिद हो भनी ठान्छन् — तर यसले माग गतिशीलता, वितरण इतिहास, र फन्ड व्यवस्थापन गुणस्तरलाई बेवास्ता गर्छ, जसले प्रिमियमलाई उचित ठहराउन सक्छ।'},
  takeaways:{en:['Book Value = (Assets − Liabilities) ÷ Shares Outstanding.','NAV is the mutual-fund equivalent, per unit.','Market price can trade above or below book value.','Both are useful reference points, not automatic buy/sell signals.'],
    np:['बुक भ्यालु = (सम्पत्ति − दायित्व) ÷ बक्यौता सेयर।','NAV म्युचुअल फन्डको बराबरी अवधारणा हो, प्रति युनिट।','बजार मूल्य बुक भ्यालुभन्दा माथि वा तल कारोबार हुन सक्छ।','दुवै उपयोगी सन्दर्भ बिन्दु हुन्, स्वचालित खरिद/बिक्री संकेत होइन।']},
  quiz:[
    {q:{en:'NAV is most commonly used to evaluate:',np:'NAV सामान्यतया के मूल्यांकन गर्न प्रयोग गरिन्छ?'},
     opts:{en:['Commercial bank stocks only','Mutual funds','IPO applications','Broker commissions'],np:['केवल कमर्सियल बैंक सेयर','म्युचुअल फन्ड','IPO आवेदन','ब्रोकर कमिसन']}, correct:1,
     explain:{en:'NAV is primarily used to evaluate mutual funds, showing value per unit.',np:'NAV मुख्यतया म्युचुअल फन्ड मूल्यांकन गर्न प्रयोग हुन्छ, प्रति युनिट मूल्य देखाउँदै।'}},
    {q:{en:'How is Book Value per share calculated?',np:'प्रति सेयर बुक भ्यालु कसरी गणना गरिन्छ?'},
     opts:{en:['Share Price ÷ EPS','(Total Assets − Total Liabilities) ÷ Total Shares','Face Value × 100','Total Dividends ÷ Shares'],np:['सेयर मूल्य ÷ EPS','(कुल सम्पत्ति − कुल दायित्व) ÷ कुल सेयर','अंकित मूल्य × १००','कुल लाभांश ÷ सेयर']}, correct:1,
     explain:{en:'Book value per share = net assets (assets minus liabilities) divided by total shares outstanding.',np:'प्रति सेयर बुक भ्यालु = खुद सम्पत्ति (सम्पत्ति घटा दायित्व) लाई कुल बक्यौता सेयरले भाग गरेर।'}},
  ]
},
{
  id:'fundamental-technical', chapter:'c6', icon:'🔍',
  title:{en:'Fundamental vs Technical Analysis', np:'आधारभूत बनाम प्राविधिक विश्लेषण'},
  card:{en:'Two very different lenses for deciding what to buy — and when.', np:'के किन्ने र कहिले किन्ने भन्ने निर्णय गर्न दुई फरक-फरक दृष्टिकोण।'},
  simple:{en:'Fundamental analysis asks "is this a good company?" by studying its profits, debts, and management. Technical analysis asks "is this a good time to buy or sell?" by studying price charts and trading patterns.',
    np:'आधारभूत विश्लेषणले "के यो राम्रो कम्पनी हो?" भनी सोध्छ, यसको नाफा, ऋण, र व्यवस्थापन अध्ययन गरेर। प्राविधिक विश्लेषणले "के यो किन्न वा बेच्न राम्रो समय हो?" भनी सोध्छ, मूल्य चार्ट र कारोबार ढाँचा अध्ययन गरेर।'},
  detailed:{en:'Fundamental analysis relies on tools like EPS, P/E, book value, and a company\'s financial statements to judge whether a business is fundamentally sound and fairly priced over the long run. Technical analysis instead looks at historical price and volume charts, trend lines, and support/resistance levels to guess short-term price direction — it assumes patterns in past price behaviour tend to repeat.',
    np:'आधारभूत विश्लेषणले EPS, P/E, बुक भ्यालु, र कम्पनीको वित्तीय विवरण जस्ता उपकरणहरूमा भर पर्छ व्यवसाय दीर्घकालीन रूपमा आधारभूत रूपमा बलियो र उचित मूल्यमा छ कि भनी जाँच्न। प्राविधिक विश्लेषणले भने ऐतिहासिक मूल्य र परिमाण चार्ट, प्रवृत्ति रेखा, र समर्थन/प्रतिरोध स्तरहरू हेर्छ छोटो-अवधिको मूल्य दिशा अनुमान गर्न — यसले विगतको मूल्य व्यवहारका ढाँचाहरू दोहोरिने प्रवृत्ति राख्छन् भनी मान्छ।'},
  example:{en:'A NEPSE investor doing fundamental analysis on a bank might compare its EPS growth over five years; a technical analyst instead might watch the NEPSE Index chart for a stock breaking above its recent resistance level on strong volume.',
    np:'बैंकमा आधारभूत विश्लेषण गर्ने नेप्से लगानीकर्ताले सम्भवतः पाँच वर्षको EPS वृद्धि तुलना गर्न सक्छन्; प्राविधिक विश्लेषकले भने बलियो परिमाणमा हालैको प्रतिरोध स्तर माथि टुट्ने सेयरका लागि नेप्से इन्डेक्स चार्ट हेर्न सक्छन्।'},
  why:{en:'Beginners benefit most from starting with fundamental analysis — understanding what a business actually does and whether it makes money — before attempting technical timing, which requires much more practice to use reliably.',
    np:'सुरुवातीहरूले आधारभूत विश्लेषणबाट सुरु गर्दा सबैभन्दा बढी फाइदा हुन्छ — व्यवसायले वास्तवमा के गर्छ र यसले पैसा कमाउँछ कि भन्ने बुझ्दै — प्राविधिक समयको प्रयास गर्नुअघि, जुन भरपर्दो रूपमा प्रयोग गर्न धेरै अभ्यास चाहिन्छ।'},
  misconceptions:{en:'Beginners often think technical analysis can predict the future with certainty; in reality it only estimates probabilities based on historical patterns, and it can fail badly during unexpected news events.',
    np:'सुरुवातीहरूले प्रायः प्राविधिक विश्लेषणले भविष्यलाई निश्चितताका साथ भविष्यवाणी गर्न सक्छ भनी सोच्छन्; वास्तवमा यसले केवल ऐतिहासिक ढाँचाहरूमा आधारित सम्भाव्यता अनुमान गर्छ, र अप्रत्याशित समाचार घटनाहरूको बेला यो नराम्ररी असफल हुन सक्छ।'},
  takeaways:{en:['Fundamental = "is this a good business?"','Technical = "is this a good time to trade?"','Beginners should start with fundamentals.','Neither method guarantees future results.'],
    np:['आधारभूत = "के यो राम्रो व्यवसाय हो?"','प्राविधिक = "के यो कारोबार गर्न राम्रो समय हो?"','सुरुवातीहरूले आधारभूतबाट सुरु गर्नुपर्छ।','कुनै पनि विधिले भविष्यको नतिजाको ग्यारेन्टी दिँदैन।']},
  quiz:[
    {q:{en:'Which type of analysis primarily studies a company\'s financial statements and profitability?',np:'कुन प्रकारको विश्लेषणले मुख्यतया कम्पनीको वित्तीय विवरण र नाफायोग्यता अध्ययन गर्छ?'},
     opts:{en:['Technical analysis','Fundamental analysis','Sentiment analysis','Rumor analysis'],np:['प्राविधिक विश्लेषण','आधारभूत विश्लेषण','भावना विश्लेषण','हल्ला विश्लेषण']}, correct:1,
     explain:{en:'Fundamental analysis studies profitability, debts, and financial health.',np:'आधारभूत विश्लेषणले नाफायोग्यता, ऋण, र वित्तीय स्वास्थ्य अध्ययन गर्छ।'}},
    {q:{en:'What is a reasonable starting point for a complete beginner?',np:'पूर्ण सुरुवातीका लागि उचित सुरुवात बिन्दु के हो?'},
     opts:{en:['Advanced technical chart patterns','Fundamental analysis basics','Options trading','Insider tips from social media'],np:['उन्नत प्राविधिक चार्ट ढाँचा','आधारभूत विश्लेषणको आधार','अप्सन कारोबार','सामाजिक सञ्जालबाट इनसाइडर सुझाव']}, correct:1,
     explain:{en:'Beginners generally benefit most from starting with fundamental analysis.',np:'सुरुवातीहरूलाई सामान्यतया आधारभूत विश्लेषणबाट सुरु गर्दा सबैभन्दा बढी फाइदा हुन्छ।'}},
  ]
},
{
  id:'circuit-breakers', chapter:'c7', icon:'🚦',
  title:{en:'Circuit Breakers & Trading Halts', np:'सर्किट ब्रेकर र कारोबार रोकावट'},
  card:{en:'The "emergency brake" that keeps NEPSE from crashing or spiking too fast.', np:'नेप्सेलाई धेरै छिटो घट्न वा बढ्नबाट जोगाउने "आपतकालीन ब्रेक"।'},
  simple:{en:'A circuit breaker is an emergency brake that NEPSE pulls to stop the market from moving too fast in either direction, up or down.',
    np:'सर्किट ब्रेकर एउटा आपतकालीन ब्रेक हो जुन नेप्सेले बजारलाई माथि वा तल दुवैतर्फ धेरै छिटो चल्नबाट रोक्न प्रयोग गर्छ।'},
  detailed:{en:'If the overall NEPSE Index moves up or down by defined thresholds — such as 4%, 5%, or 6% — within certain time windows, trading is halted for the entire market. For individual companies, the price is not allowed to move more than 10% in a single day (a "price band"), which limits how far any one stock can swing regardless of market-wide circuit breakers.',
    np:'यदि समग्र नेप्से इन्डेक्स निश्चित सीमाहरू — जस्तै ४%, ५%, वा ६% — भित्र निश्चित समय झ्यालमा माथि वा तल सर्छ भने, सम्पूर्ण बजारका लागि कारोबार रोकिन्छ। व्यक्तिगत कम्पनीहरूका लागि, एक दिनमा मूल्य १०% भन्दा बढी सर्न मिल्दैन ("मूल्य ब्यान्ड"), जसले बजार-व्यापी सर्किट ब्रेकर जेसुकै भए पनि कुनै एउटा सेयर कति टाढा सर्न सक्छ भन्ने सीमित गर्छ।'},
  example:{en:'NEPSE has recently tightened these rules, introducing a "pre-opening" session where prices are only allowed to move within a 5% band before the main session officially begins.',
    np:'नेप्सेले हालसालै यी नियमहरू कडा बनाएको छ, "प्रि-ओपनिङ" सत्र सुरु गर्दै जहाँ मुख्य सत्र आधिकारिक रूपमा सुरु हुनुअघि मूल्य केवल ५% ब्यान्ड भित्र मात्र सर्न मिल्छ।'},
  why:{en:'Circuit breakers exist to give investors a "cooling off" period during moments of panic or extreme excitement, reducing the chance of irrational, emotion-driven decisions dominating the entire market in a single session.',
    np:'सर्किट ब्रेकरहरू डर वा अत्यधिक उत्साहका क्षणहरूमा लगानीकर्ताहरूलाई "शीतल हुने" अवधि दिन अस्तित्वमा छन्, जसले एउटै सत्रमा अतार्किक, भावनाद्वारा सञ्चालित निर्णयहरूले सम्पूर्ण बजारमा हावी हुने सम्भावना घटाउँछ।'},
  misconceptions:{en:'Some investors think a "negative circuit" on their stock means they can never sell it; in reality it just means trading in that stock is paused at that specific price for the remainder of the day, not permanently.',
    np:'केही लगानीकर्ताहरूले आफ्नो सेयरमा "नेगेटिभ सर्किट" लागेको अर्थ उनीहरूले कहिल्यै बेच्न सक्दैनन् भन्ने सोच्छन्; वास्तवमा यसको अर्थ त्यो सेयरमा कारोबार त्यो निश्चित मूल्यमा त्यो दिनको बाँकी समयका लागि रोकिएको हो, स्थायी रूपमा होइन।'},
  takeaways:{en:['Market-wide circuit breakers trigger at set index-move thresholds.','Individual stocks have a 10% daily price band.','A circuit halt is temporary, not permanent.','These rules exist to reduce panic-driven decisions.'],
    np:['बजार-व्यापी सर्किट ब्रेकर तोकिएको इन्डेक्स-सर परिवर्तनमा सक्रिय हुन्छ।','व्यक्तिगत सेयरको दैनिक मूल्य ब्यान्ड १०% हुन्छ।','सर्किट रोकावट अस्थायी हो, स्थायी होइन।','यी नियमहरू डरद्वारा सञ्चालित निर्णय घटाउन अस्तित्वमा छन्।']},
  quiz:[
    {q:{en:'What does a "negative circuit" on a stock mean?',np:'सेयरमा "नेगेटिभ सर्किट" को अर्थ के हो?'},
     opts:{en:['You can never sell that stock again','Trading is paused at that price for the rest of the day','The company is permanently delisted','SEBON has banned the stock'],np:['तपाईंले त्यो सेयर फेरि कहिल्यै बेच्न सक्नुहुन्न','त्यो मूल्यमा कारोबार दिनको बाँकी समयका लागि रोकिएको','कम्पनी स्थायी रूपमा डिलिस्ट भएको','सेबोनले सेयर प्रतिबन्ध लगाएको']}, correct:1,
     explain:{en:'A circuit halt just pauses trading at that price for the day — it is temporary.',np:'सर्किट रोकावटले त्यो दिनको लागि त्यो मूल्यमा कारोबार रोक्छ मात्र — यो अस्थायी हो।'}},
    {q:{en:'What is the maximum daily price movement allowed for an individual stock (the price band)?',np:'व्यक्तिगत सेयरको लागि अनुमति दिइएको अधिकतम दैनिक मूल्य परिवर्तन (मूल्य ब्यान्ड) कति हो?'},
     opts:{en:['1%','10%','25%','50%'],np:['१%','१०%','२५%','५०%']}, correct:1,
     explain:{en:'Individual stocks generally cannot move more than 10% in a single day.',np:'व्यक्तिगत सेयरहरू सामान्यतया एक दिनमा १०% भन्दा बढी सर्न सक्दैनन्।'}},
  ]
},
{
  id:'manipulation-rumors', chapter:'c7', icon:'🚫',
  title:{en:'Insider Trading, Manipulation & Rumors', np:'इनसाइडर ट्रेडिङ, हेरफेर, र हल्ला'},
  card:{en:'Why "hot tips" from social media groups are one of the fastest ways to lose money.', np:'सामाजिक सञ्जाल समूहबाट "तातो सुझाव" किन पैसा गुमाउने सबैभन्दा छिटो तरिकाहरू मध्ये एक हो।'},
  simple:{en:'Insider trading is when someone uses secret, non-public information — like a company\'s upcoming merger — to buy or sell shares for an unfair profit. This is illegal. "Pump-and-dump" schemes involve spreading false rumors to drive up a price so manipulators can sell at a high price, leaving new investors with losses.',
    np:'इनसाइडर ट्रेडिङ भनेको कसैले गोप्य, सार्वजनिक नभएको जानकारी — जस्तै कम्पनीको आउने मर्जर — प्रयोग गरी अनुचित नाफाका लागि सेयर किनबेच गर्ने काम हो। यो गैरकानुनी हो। "पम्प-एन्ड-डम्प" योजनाले मूल्य बढाउन झूटा हल्ला फैलाउने काम गर्छ ताकि हेरफेर गर्नेहरूले उच्च मूल्यमा बेच्न सकून्, नयाँ लगानीकर्ताहरूलाई नोक्सानीमा छोडेर।'},
  detailed:{en:'SEBON is currently researching an "Automated Market Surveillance System" designed to track large traders and detect fraud automatically, since manual detection of coordinated manipulation is extremely difficult. Rumors typically spread fastest in unofficial social media groups and messaging apps, where there is no accountability for false claims.',
    np:'सेबोन हाल "स्वचालित बजार निगरानी प्रणाली" अनुसन्धान गर्दैछ जुन ठूला व्यापारीहरू ट्र्याक गर्न र स्वतः ठगी पत्ता लगाउन डिजाइन गरिएको हो, किनभने समन्वित हेरफेरको म्यानुअल पत्ता लगाउनु अत्यन्त कठिन हुन्छ। हल्लाहरू सामान्यतया अनौपचारिक सामाजिक सञ्जाल समूह र म्यासेजिङ एपहरूमा सबैभन्दा छिटो फैलिन्छन्, जहाँ झूटा दाबीहरूको लागि कुनै जवाफदेहिता हुँदैन।'},
  example:{en:'"Following the crowd" based on tips from unverified social media or messaging groups is a common pattern among new investors in Nepal, and it frequently leads to losses once the manipulated price corrects back down.',
    np:'अपुष्ट सामाजिक सञ्जाल वा म्यासेजिङ समूहका सुझावमा आधारित "भीड पछ्याउने" काम नेपालमा नयाँ लगानीकर्ताहरूमा सामान्य ढाँचा हो, र हेरफेर गरिएको मूल्य फेरि तल सुध्रिँदा यसले प्रायः नोक्सानी निम्त्याउँछ।'},
  why:{en:'Recognising the pattern of pump-and-dump schemes — sudden hype, unverifiable claims, pressure to "buy now before it\'s too late" — can save you from becoming the exit liquidity for someone else\'s scheme.',
    np:'पम्प-एन्ड-डम्प योजनाहरूको ढाँचा — अचानक उत्साह, अपुष्ट दाबी, "अब किन्नुहोस् ढिलो नगरी" भन्ने दबाब — पहिचान गर्नाले तपाईंलाई कसैको अर्को योजनाको एग्जिट लिक्विडिटी बन्नबाट जोगाउन सक्छ।'},
  misconceptions:{en:'Many new investors think "following the crowd" or acting on tips from social media groups is a valid, low-risk investing strategy; in reality this pattern of behavior is closely associated with buying into manipulated prices and suffering losses.',
    np:'धेरै नयाँ लगानीकर्ताहरूले "भीड पछ्याउने" वा सामाजिक सञ्जाल समूहका सुझावमा काम गर्नु मान्य, कम-जोखिम लगानी रणनीति हो भनी सोच्छन्; वास्तवमा यो व्यवहार ढाँचा हेरफेर गरिएको मूल्यमा किनमेल गर्ने र नोक्सानी भोग्नेसँग नजिकबाट सम्बन्धित छ।'},
  takeaways:{en:['Insider trading on non-public information is illegal.','Pump-and-dump schemes rely on false urgency and rumors.','Rely on official disclosures, not social media tips.','SEBON is building automated surveillance to catch manipulation.'],
    np:['सार्वजनिक नभएको जानकारीमा इनसाइडर ट्रेडिङ गैरकानुनी हो।','पम्प-एन्ड-डम्प योजनाहरू झूटा हतार र हल्लामा निर्भर हुन्छन्।','सामाजिक सञ्जाल सुझावमा होइन, आधिकारिक खुलासामा भर पर्नुहोस्।','सेबोनले हेरफेर पक्रन स्वचालित निगरानी निर्माण गर्दैछ।']},
  quiz:[
    {q:{en:'What is a "pump-and-dump" scheme?',np:'"पम्प-एन्ड-डम्प" योजना के हो?'},
     opts:{en:['A legitimate trading strategy taught by SEBON','Spreading false rumors to inflate a price before selling at a profit','A type of dividend payout','A government support programme'],np:['सेबोनद्वारा सिकाइने वैध कारोबार रणनीति','नाफामा बेच्नुअघि मूल्य बढाउन झूटा हल्ला फैलाउने काम','एक प्रकारको लाभांश भुक्तानी','सरकारी सहयोग कार्यक्रम']}, correct:1,
     explain:{en:'Pump-and-dump involves spreading false hype to inflate a price, then selling at the top.',np:'पम्प-एन्ड-डम्पमा मूल्य बढाउन झूटा हल्ला फैलाइन्छ, त्यसपछि माथिबाट बेचिन्छ।'}},
    {q:{en:'What should you rely on instead of unverified social media tips?',np:'अपुष्ट सामाजिक सञ्जाल सुझावको सट्टा तपाईंले केमा भर पर्नुपर्छ?'},
     opts:{en:['Whoever shouts the loudest in a group chat','Official company disclosures and audited financial statements','Random forwarded messages','Your neighbour\'s guess'],np:['समूह च्याटमा सबैभन्दा चर्को स्वरमा बोल्ने जो कोही','आधिकारिक कम्पनी खुलासा र लेखा परीक्षण भएको वित्तीय विवरण','अनियमित फर्वार्ड गरिएको सन्देश','तपाईंको छिमेकीको अनुमान']}, correct:1,
     explain:{en:'Always rely on official disclosures and audited financials rather than rumors.',np:'हल्लामा होइन, सधैं आधिकारिक खुलासा र लेखा परीक्षण भएको वित्तीय विवरणमा भर पर्नुहोस्।'}},
  ]
},
{
  id:'risk-diversification', chapter:'c7', icon:'🛡️',
  title:{en:'Risk Management & Diversification', np:'जोखिम व्यवस्थापन र विविधीकरण'},
  card:{en:'Not putting all your eggs — or all your rupees — in one basket.', np:'सबै अण्डा — वा सबै रुपियाँ — एउटै डालोमा नराख्ने काम।'},
  simple:{en:'Risk management means only investing money you can afford to lose, and never putting everything into one single stock. Diversification means spreading your money across different companies and sectors so that one bad investment doesn\'t wipe out your whole portfolio.',
    np:'जोखिम व्यवस्थापनको अर्थ हो केवल गुमाउन सक्ने पैसा मात्र लगानी गर्ने, र कहिल्यै एउटै सेयरमा सबथोक नहाल्ने। विविधीकरणको अर्थ हो आफ्नो पैसा फरक-फरक कम्पनी र क्षेत्रहरूमा फैलाउने ताकि एउटा नराम्रो लगानीले तपाईंको सम्पूर्ण पोर्टफोलियो सखाप नपारोस्।'},
  detailed:{en:'Concentrating your entire portfolio in a single sector — for example, only hydropower stocks — exposes you to sector-specific risks like poor monsoon years or regulatory changes affecting every one of your holdings at once. A genuinely diversified portfolio mixes sectors (banking, hydropower, insurance, manufacturing) and company sizes (large, mid, small-cap) so that a downturn in any one area is cushioned by stability elsewhere.',
    np:'आफ्नो सम्पूर्ण पोर्टफोलियो एउटै क्षेत्रमा केन्द्रित गर्नु — उदाहरणका लागि, केवल जलविद्युत सेयरमा — तपाईंलाई क्षेत्र-विशिष्ट जोखिमहरूमा उजागर गर्छ जस्तै कमजोर मनसुन वर्ष वा नियामक परिवर्तनहरूले तपाईंका सबै लगानीलाई एकैचोटि प्रभावित पार्न सक्छ। साँच्चै विविधीकृत पोर्टफोलियोले क्षेत्रहरू (बैंकिङ, जलविद्युत, बीमा, उत्पादन) र कम्पनी आकारहरू (ठूलो, मध्यम, सानो-पूँजी) मिसाउँछ ताकि कुनै एउटा क्षेत्रको गिरावट अन्यत्रको स्थिरताले कम हुन्छ।'},
  example:{en:'A beginner NEPSE investor who put all their savings into a single small hydropower stock right before an unusually dry season would have felt a much sharper loss than one who had also held some banking and insurance shares.',
    np:'एउटा अस्वाभाविक रूपमा सुख्खा सिजनअघि सम्पूर्ण बचत एउटै साना जलविद्युत सेयरमा हालेको सुरुवाती नेप्से लगानीकर्ताले, केही बैंकिङ र बीमा सेयर पनि राखेको लगानीकर्ताभन्दा धेरै तीव्र नोक्सानी महसुस गर्नेछ।'},
  why:{en:'Risk management is what separates investors who survive market downturns and keep participating for decades from those who get wiped out by a single bad bet and leave the market permanently, often at the worst possible time.',
    np:'जोखिम व्यवस्थापनले नै बजार गिरावट बाँच्ने र दशकौंसम्म सहभागी रहने लगानीकर्ता र एउटा मात्र नराम्रो शर्तले सखाप भई बजार सधैंका लागि छोड्ने लगानीकर्ता — प्रायः सबैभन्दा नराम्रो समयमा — बीच फरक पार्छ।'},
  misconceptions:{en:'Beginners sometimes think diversification means simply buying many different stocks; but if all those stocks are in the same sector (say, only finance companies), you have not actually reduced your risk much at all.',
    np:'सुरुवातीहरूले कहिलेकाहीं विविधीकरणको अर्थ केवल धेरै फरक-फरक सेयर किन्नु हो भनी सोच्छन्; तर यदि ती सबै सेयर एउटै क्षेत्रमा छन् भने (जस्तै, केवल फाइनान्स कम्पनी), तपाईंले वास्तवमा आफ्नो जोखिम धेरै घटाउनुभएको हुँदैन।'},
  takeaways:{en:['Only invest money you can genuinely afford to lose.','Diversify across sectors, not just across company names.','Concentration amplifies both gains and losses.','Risk management is about surviving long enough to benefit from long-term growth.'],
    np:['केवल साँच्चै गुमाउन सक्ने पैसा मात्र लगानी गर्नुहोस्।','कम्पनीका नाम मात्र होइन, क्षेत्रहरूमा विविधीकरण गर्नुहोस्।','केन्द्रीकरणले नाफा र नोक्सानी दुवै बढाउँछ।','जोखिम व्यवस्थापन भनेको दीर्घकालीन वृद्धिको फाइदा लिन पर्याप्त समयसम्म बाँच्नु हो।']},
  quiz:[
    {q:{en:'What is true diversification?',np:'साँचो विविधीकरण के हो?'},
     opts:{en:['Buying 10 stocks that are all in the same sector','Spreading investment across different sectors and company sizes','Putting all money in one large-cap bank','Only investing in IPOs'],np:['एउटै क्षेत्रका १० सेयर किन्ने','फरक-फरक क्षेत्र र कम्पनी आकारमा लगानी फैलाउने','एउटा ठूलो-पूँजी बैंकमा सबै पैसा हाल्ने','केवल IPOमा मात्र लगानी गर्ने']}, correct:1,
     explain:{en:'True diversification spreads risk across different sectors and company sizes, not just different names.',np:'साँचो विविधीकरणले फरक-फरक नाम मात्र होइन, फरक-फरक क्षेत्र र कम्पनी आकारमा जोखिम फैलाउँछ।'}},
    {q:{en:'A key principle of risk management is:',np:'जोखिम व्यवस्थापनको मुख्य सिद्धान्त के हो?'},
     opts:{en:['Only invest money you can afford to lose','Always borrow money to invest more','Put all savings into one hot stock','Ignore sector concentration'],np:['केवल गुमाउन सक्ने पैसा मात्र लगानी गर्ने','थप लगानी गर्न सधैं पैसा ऋण लिने','सबै बचत एउटा तातो सेयरमा हाल्ने','क्षेत्र केन्द्रीकरणलाई बेवास्ता गर्ने']}, correct:0,
     explain:{en:'A core risk management principle is only investing money you can genuinely afford to lose.',np:'मुख्य जोखिम व्यवस्थापन सिद्धान्त हो केवल साँच्चै गुमाउन सक्ने पैसा मात्र लगानी गर्नु।'}},
  ]
},
{
  id:'trading-vs-investing', chapter:'c7', icon:'⏳',
  title:{en:'Trading vs Investing & the Long-Term Mindset', np:'ट्रेडिङ बनाम लगानी र दीर्घकालीन सोच'},
  card:{en:'Two very different games, played with the same shares.', np:'उही सेयरसँग खेलिने दुई एकदमै फरक खेल।'},
  simple:{en:'Trading means buying and selling shares frequently to profit from short-term price movements. Investing means buying shares in good companies and holding them for years, benefiting from the business growing and compounding over time.',
    np:'ट्रेडिङको अर्थ छोटो-अवधिको मूल्य परिवर्तनबाट नाफा लिन बारम्बार सेयर किनबेच गर्नु हो। लगानीको अर्थ राम्रो कम्पनीको सेयर किनेर वर्षौंसम्म राख्नु हो, समयसँगै व्यवसाय बढ्दै र कम्पाउन्ड हुँदै जाँदा फाइदा लिनु हो।'},
  detailed:{en:'Trading requires significant time, discipline, and often technical analysis skill, and it can generate large gains as well as large losses in short periods. Long-term investing generally requires less day-to-day attention but demands patience, since real business growth and compounding typically take years, not days, to meaningfully show up in your portfolio.',
    np:'ट्रेडिङमा उल्लेखनीय समय, अनुशासन, र प्रायः प्राविधिक विश्लेषण सीप चाहिन्छ, र यसले छोटो अवधिमा ठूलो नाफा र ठूलो नोक्सानी दुवै निम्त्याउन सक्छ। दीर्घकालीन लगानीलाई सामान्यतया दैनिक ध्यान कम चाहिन्छ तर धैर्य माग्छ, किनभने वास्तविक व्यवसाय वृद्धि र कम्पाउन्डिङ सामान्यतया तपाईंको पोर्टफोलियोमा अर्थपूर्ण रूपमा देखिन दिन होइन, वर्षौं लाग्छ।'},
  example:{en:'A long-term NEPSE investor who held a fundamentally strong bank stock through several bull-and-bear cycles, reinvesting bonus shares and dividends along the way, typically experiences a very different journey than a short-term trader chasing daily price swings on the same stock.',
    np:'आधारभूत रूपमा बलियो बैंक सेयरलाई धेरै बुल-र-बेयर चक्रहरूसम्म राख्ने, बाटोमा बोनस सेयर र लाभांश पुनर्लगानी गर्ने दीर्घकालीन नेप्से लगानीकर्ताले, उही सेयरमा दैनिक मूल्य उतार-चढाव पछ्याउने छोटो-अवधिको ट्रेडरभन्दा धेरै फरक यात्रा अनुभव गर्छन्।'},
  why:{en:'Choosing which approach you actually want to practice — before you start — prevents you from accidentally mixing the two: panic-selling a long-term holding on a bad day, or holding a short-term trade far too long hoping it "comes back."',
    np:'सुरु गर्नुअघि तपाईं वास्तवमा कुन दृष्टिकोण अभ्यास गर्न चाहनुहुन्छ भनी छान्नाले तपाईंलाई दुवैलाई अनजानमा मिसाउनबाट रोक्छ: नराम्रो दिनमा दीर्घकालीन होल्डिङ घबराएर बेच्ने, वा छोटो-अवधिको ट्रेड "फर्किएला" भन्ने आशामा धेरै लामो समय राख्ने।'},
  misconceptions:{en:'Beginners often blend both strategies without realising it — buying with a "long-term" intention, then panic-selling on the first dip, which usually locks in losses without capturing the long-term growth they originally wanted.',
    np:'सुरुवातीहरूले प्रायः थाहा नपाई दुवै रणनीति मिसाउँछन् — "दीर्घकालीन" उद्देश्यले किनेर, पहिलो गिरावटमा घबराएर बेच्छन्, जसले सामान्यतया मूलतः चाहेको दीर्घकालीन वृद्धि नसमेती नोक्सानी थन्क्याउँछ।'},
  takeaways:{en:['Trading = short-term, frequent, more time-intensive.','Investing = long-term, patient, compounding-focused.','Pick one intention per position, and stick to it.','Mixing the two often leads to the worst of both.'],
    np:['ट्रेडिङ = छोटो-अवधि, बारम्बार, बढी समय-गहन।','लगानी = दीर्घकालीन, धैर्यवान्, कम्पाउन्डिङ-केन्द्रित।','प्रत्येक पोजिसनका लागि एउटा उद्देश्य छान्नुहोस्, र त्यसैमा टिक्नुहोस्।','दुवै मिसाउँदा प्रायः दुवैको सबैभन्दा नराम्रो हुन्छ।']},
  quiz:[
    {q:{en:'What best describes long-term investing?',np:'दीर्घकालीन लगानीलाई राम्ररी के वर्णन गर्छ?'},
     opts:{en:['Buying and selling within the same day','Holding good companies for years to benefit from growth','Only trading on rumors','Avoiding the stock market entirely'],np:['उही दिनमा किनबेच गर्ने','वृद्धिको फाइदा लिन राम्रो कम्पनी वर्षौंसम्म राख्ने','केवल हल्लामा मात्र कारोबार गर्ने','सेयर बजारलाई पूर्ण रूपमा बेवास्ता गर्ने']}, correct:1,
     explain:{en:'Long-term investing means holding good companies for years to benefit from growth and compounding.',np:'दीर्घकालीन लगानीको अर्थ वृद्धि र कम्पाउन्डिङको फाइदा लिन राम्रो कम्पनी वर्षौंसम्म राख्नु हो।'}},
    {q:{en:'What commonly happens when investors mix trading and investing mindsets?',np:'लगानीकर्ताहरूले ट्रेडिङ र लगानी सोच मिसाउँदा सामान्यतया के हुन्छ?'},
     opts:{en:['They always profit more','They may panic-sell long-term holdings on a bad day, locking in losses','Nothing changes','They automatically qualify for lower commissions'],np:['उनीहरूले सधैं बढी नाफा कमाउँछन्','उनीहरूले नराम्रो दिनमा दीर्घकालीन होल्डिङ घबराएर बेच्न सक्छन्, नोक्सानी थन्क्याउँदै','केही परिवर्तन हुँदैन','उनीहरू स्वतः कम कमिसनका लागि योग्य हुन्छन्']}, correct:1,
     explain:{en:'Mixing mindsets often leads to panic-selling long-term positions, locking in avoidable losses.',np:'सोच मिसाउँदा प्रायः दीर्घकालीन पोजिसन घबराएर बेचिन्छ, जसले बच्न सकिने नोक्सानी थन्क्याउँछ।'}},
  ]
},
{
  id:'psychology-mistakes', chapter:'c7', icon:'🧠',
  title:{en:'Investor Psychology & Common Beginner Mistakes', np:'लगानीकर्ता मनोविज्ञान र सामान्य सुरुवाती गल्ती'},
  card:{en:'Your own emotions are often a bigger risk to your money than the market itself.', np:'तपाईंको आफ्नै भावना प्रायः बजार आफैंभन्दा तपाईंको पैसाका लागि ठूलो जोखिम हो।'},
  simple:{en:'Investor psychology is about how emotions like fear and greed affect your decisions. Common beginner mistakes include buying purely out of FOMO (fear of missing out), panic-selling during normal dips, and trading based on rumors instead of facts.',
    np:'लगानीकर्ता मनोविज्ञान भनेको डर र लोभ जस्ता भावनाहरूले तपाईंको निर्णयलाई कसरी असर गर्छ भन्ने हो। सामान्य सुरुवाती गल्तीहरूमा केवल FOMO (छुट्ने डर) का कारण किन्नु, सामान्य गिरावटको बेला घबराएर बेच्नु, र तथ्यको सट्टा हल्लामा आधारित कारोबार गर्नु पर्छन्।'},
  detailed:{en:'Fear and greed tend to push investors toward buying near market tops (when everyone is excited and prices are already high) and selling near market bottoms (when everyone is panicking and prices are already low) — the exact opposite of a sound strategy. Recognising these emotional patterns in yourself, in real time, is one of the hardest but most valuable investing skills to develop.',
    np:'डर र लोभले लगानीकर्ताहरूलाई बजार माथिको नजिक किन्न (जब सबैजना उत्साहित हुन्छन् र मूल्य पहिल्यै उच्च हुन्छ) र बजार तल्लो नजिक बेच्न (जब सबैजना घबराउँछन् र मूल्य पहिल्यै कम हुन्छ) धकेल्ने प्रवृत्ति राख्छ — यो ठोस रणनीतिको ठ्याक्कै विपरीत हो। आफूमा यी भावनात्मक ढाँचाहरू, वास्तविक समयमा पहिचान गर्नु सबैभन्दा गाह्रो तर सबैभन्दा मूल्यवान लगानी सीपहरू मध्ये एक हो, जुन विकास गर्नुपर्छ।'},
  example:{en:'A common pattern seen among new NEPSE investors is rushing to buy a stock only after it has already risen sharply and is trending in social media groups — buying at the top of the hype cycle rather than before it.',
    np:'नेप्सेका नयाँ लगानीकर्ताहरूमा देखिने सामान्य ढाँचा भनेको सेयर पहिल्यै तीव्र रूपमा बढिसकेपछि र सामाजिक सञ्जाल समूहहरूमा ट्रेन्डिङ भइसकेपछि मात्र किन्न हतार गर्नु हो — हाइपको सुरुमा होइन, चक्रको टुप्पोमा किन्नु।'},
  why:{en:'Most documented beginner investing losses trace back not to lack of information, but to emotional decision-making — buying too high out of excitement, and selling too low out of fear — so managing your own psychology is arguably as important as any financial ratio you learn.',
    np:'धेरैजसो दर्ता भएका सुरुवाती लगानी नोक्सानीहरू जानकारीको अभावमा होइन, भावनात्मक निर्णयमा फर्किन्छन् — उत्साहमा धेरै उच्चमा किन्ने, र डरमा धेरै न्यूनमा बेच्ने — त्यसैले आफ्नो मनोविज्ञान व्यवस्थापन गर्नु तपाईंले सिक्ने कुनै पनि वित्तीय अनुपातजत्तिकै महत्त्वपूर्ण हुन सक्छ।'},
  misconceptions:{en:'Beginners often believe that experienced investors simply "don\'t feel" fear or greed; in reality, experienced investors feel the same emotions but have built systems and rules — like a written investment plan — to stop those emotions from directly controlling their decisions.',
    np:'सुरुवातीहरूले प्रायः विश्वास गर्छन् कि अनुभवी लगानीकर्ताहरूले "डर वा लोभ महसुस नै गर्दैनन्"; वास्तवमा, अनुभवी लगानीकर्ताहरूले उही भावना महसुस गर्छन् तर तिनीहरूले प्रणाली र नियमहरू — जस्तै लिखित लगानी योजना — बनाएका छन् ती भावनाहरूले सोझै तिनीहरूको निर्णय नियन्त्रण गर्नबाट रोक्न।'},
  takeaways:{en:['Fear and greed push you toward buying high and selling low.','FOMO buying and panic-selling are among the top beginner mistakes.','Write down your investment plan before emotions get involved.','Recognising your own emotional patterns is a core skill.'],
    np:['डर र लोभले तपाईंलाई उच्चमा किन्न र न्यूनमा बेच्न धकेल्छ।','FOMO किनमेल र घबराएर बेच्नु शीर्ष सुरुवाती गल्तीहरू मध्ये पर्छन्।','भावना संलग्न हुनुअघि आफ्नो लगानी योजना लेख्नुहोस्।','आफ्नै भावनात्मक ढाँचा पहिचान गर्नु मुख्य सीप हो।']},
  quiz:[
    {q:{en:'What tends to happen when investors buy purely out of FOMO?',np:'लगानीकर्ताहरूले केवल FOMO का कारण किन्दा सामान्यतया के हुन्छ?'},
     opts:{en:['They usually buy at the best possible price','They often buy near the top of a hype cycle','They automatically get IPO priority','They are protected from losses'],np:['उनीहरू सामान्यतया सबैभन्दा राम्रो मूल्यमा किन्छन्','उनीहरू प्रायः हाइप चक्रको टुप्पो नजिक किन्छन्','उनीहरू स्वतः IPO प्राथमिकता पाउँछन्','उनीहरू नोक्सानीबाट सुरक्षित हुन्छन्']}, correct:1,
     explain:{en:'FOMO-driven buying often happens after a stock has already risen sharply, near the top of a hype cycle.',np:'FOMO-सञ्चालित किनमेल प्रायः सेयर पहिल्यै तीव्र रूपमा बढिसकेपछि, हाइप चक्रको टुप्पो नजिक हुन्छ।'}},
    {q:{en:'What do experienced investors typically do differently from beginners regarding emotions?',np:'भावनाको सन्दर्भमा अनुभवी लगानीकर्ताहरूले सुरुवातीहरूभन्दा सामान्यतया के फरक गर्छन्?'},
     opts:{en:['They feel no emotions at all','They build systems/rules to prevent emotions from controlling decisions','They ignore all financial data','They only trade on tips'],np:['उनीहरूले कुनै भावना नै महसुस गर्दैनन्','उनीहरूले भावनाले निर्णय नियन्त्रण गर्नबाट रोक्न प्रणाली/नियम बनाउँछन्','उनीहरूले सबै वित्तीय डाटा बेवास्ता गर्छन्','उनीहरू केवल सुझावमा मात्र कारोबार गर्छन्']}, correct:1,
     explain:{en:'Experienced investors still feel emotions but use rules and plans to prevent those emotions from driving decisions.',np:'अनुभवी लगानीकर्ताहरूले अझै भावना महसुस गर्छन् तर ती भावनाले निर्णय चलाउनबाट रोक्न नियम र योजना प्रयोग गर्छन्।'}},
  ]
},
];

// Glossary — flat searchable list
const GLOSSARY = [
  {term:'NEPSE', en:'Nepal Stock Exchange — the sole secondary market where listed securities are traded in Nepal.', np:'नेपाल स्टक एक्सचेन्ज — नेपालमा सूचीकृत धितोपत्र कारोबार हुने एकमात्र दोस्रो बजार।'},
  {term:'SEBON', en:'Securities Board of Nepal — the apex regulator overseeing the entire capital market since 1993.', np:'सेक्युरिटिज बोर्ड अफ नेपाल — सन् १९९३ देखि सम्पूर्ण पुँजी बजार नियमन गर्ने सर्वोच्च नियामक।'},
  {term:'CDSC', en:'CDS and Clearing Limited — handles dematerialisation of shares and settlement of trades.', np:'सीडीएस एण्ड क्लियरिङ लिमिटेड — सेयर डिम्याटेरियलाइजेसन र कारोबार फर्स्यौट व्यवस्थापन गर्छ।'},
  {term:'DEMAT Account', en:'A digital account that holds your shares electronically, similar to a bank account for money.', np:'तपाईंको सेयर इलेक्ट्रोनिक रूपमा राख्ने डिजिटल खाता, पैसाको लागि बैंक खाता जस्तै।'},
  {term:'BOID', en:'Beneficiary Owner Identification Number — the unique 16-digit ID tied to your DEMAT account.', np:'लाभग्राही स्वामी परिचय नम्बर — तपाईंको DEMAT खातासँग जोडिएको अद्वितीय १६-अंकको नम्बर।'},
  {term:'Mero Share', en:'CDSC\'s official portal for applying to IPOs, tracking your portfolio, and transferring shares (EDIS).', np:'IPO आवेदन, पोर्टफोलियो ट्र्याकिङ, र सेयर हस्तान्तरण (EDIS) का लागि CDSCको आधिकारिक पोर्टल।'},
  {term:'EDIS', en:'Electronic Delivery Instruction Slip — releases sold shares to your broker so the trade can settle.', np:'इलेक्ट्रोनिक डेलिभरी इन्स्ट्रक्सन स्लिप — कारोबार फर्स्यौट हुन बेचेको सेयर ब्रोकरलाई रिलिज गर्छ।'},
  {term:'ASBA', en:'Application Supported by Blocked Amount — blocks your money for an IPO instead of deducting it upfront.', np:'एप्लिकेसन सपोर्टेड बाई ब्लक्ड अमाउन्ट — IPOका लागि पैसा अग्रिम कट्टा नगरी रोक्छ।'},
  {term:'C-ASBA', en:'Centralised ASBA — links all your bank accounts to the ASBA system.', np:'केन्द्रीकृत ASBA — तपाईंका सबै बैंक खाता ASBA प्रणालीसँग जोड्छ।'},
  {term:'CRN', en:'C-ASBA Registration Number — a unique ID required for every bank account you use to apply for IPOs.', np:'C-ASBA दर्ता नम्बर — IPO आवेदनका लागि प्रयोग गर्ने प्रत्येक बैंक खाताका लागि आवश्यक अद्वितीय नम्बर।'},
  {term:'TMS', en:'Trade Management System — your broker\'s platform for placing buy/sell orders.', np:'ट्रेड म्यानेजमेन्ट सिस्टम — खरिद/बिक्री अर्डर राख्ने तपाईंको ब्रोकरको प्लेटफर्म।'},
  {term:'NOTS', en:'NEPSE Online Trading System — the automated, order-matching engine behind all NEPSE trades.', np:'नेप्से अनलाइन ट्रेडिङ सिस्टम — सबै नेप्से कारोबारको पछाडिको स्वचालित, अर्डर-मिलान इन्जिन।'},
  {term:'IPO', en:'Initial Public Offering — the first time a company sells shares to the public.', np:'सुरुवाती सार्वजनिक निष्कासन — कम्पनीले सर्वसाधारणलाई पहिलो पटक सेयर बेच्ने काम।'},
  {term:'FPO', en:'Further Public Offering — a later public share sale by an already-listed company.', np:'थप सार्वजनिक निष्कासन — पहिल्यै सूचीकृत कम्पनीको पछिको सार्वजनिक सेयर बिक्री।'},
  {term:'AGM', en:'Annual General Meeting — the yearly meeting where shareholders vote on major company decisions.', np:'वार्षिक साधारणसभा — सेयरधनीहरूले कम्पनीको ठूला निर्णयमा मतदान गर्ने वार्षिक भेला।'},
  {term:'Face Value', en:'The original nominal value printed on a share, commonly NPR 100 in Nepal, separate from market price.', np:'सेयरमा छापिएको मौलिक नाममात्र मूल्य, नेपालमा सामान्यतया रु १००, बजार मूल्यभन्दा फरक।'},
  {term:'Bonus Share', en:'A free additional share given to existing shareholders, which triggers a proportional price adjustment.', np:'भइरहेका सेयरधनीलाई दिइने निःशुल्क अतिरिक्त सेयर, जसले समानुपातिक मूल्य समायोजन ल्याउँछ।'},
  {term:'Cash Dividend', en:'A company profit-share paid directly into your bank account.', np:'तपाईंको बैंक खातामा सोझै तिरिने कम्पनी नाफा-हिस्सा।'},
  {term:'Rights Share', en:'A share existing owners can buy at a discount to raise fresh capital for the company.', np:'कम्पनीका लागि ताजा पुँजी उठाउन भइरहेका मालिकहरूले छुटमा किन्न सक्ने सेयर।'},
  {term:'Book Closure', en:'The deadline date; you must own shares before this date to qualify for dividends or rights.', np:'अन्तिम मिति; लाभांश वा हकका लागि योग्य हुन यो मितिअघि सेयर स्वामित्वमा हुनुपर्छ।'},
  {term:'Market Capitalisation', en:'Share price multiplied by total shares outstanding — a company\'s total "price tag."', np:'सेयर मूल्य × कुल बक्यौता सेयर — कम्पनीको कुल "मूल्य ट्याग"।'},
  {term:'Large-Cap', en:'Large, established companies — generally more stable, often slower-growing.', np:'ठूला, स्थापित कम्पनीहरू — सामान्यतया बढी स्थिर, प्रायः ढिलो बढ्ने।'},
  {term:'Mid-Cap', en:'Medium-sized companies — a balance of growth potential and moderate risk.', np:'मध्यम आकारका कम्पनीहरू — वृद्धि सम्भावना र मध्यम जोखिमको सन्तुलन।'},
  {term:'Small-Cap', en:'Smaller companies — often more volatile, with higher growth potential and higher risk.', np:'साना कम्पनीहरू — प्रायः बढी अस्थिर, उच्च वृद्धि सम्भावना र उच्च जोखिमसहित।'},
  {term:'Float Shares', en:'The portion of total shares actually available for public trading (excludes locked promoter shares).', np:'सार्वजनिक कारोबारका लागि वास्तवमा उपलब्ध कुल सेयरको भाग (लक गरिएको प्रवर्द्धक सेयर बाहेक)।'},
  {term:'Promoter Shares', en:'Shares held by founders/major backers, usually locked and not freely tradable for a period.', np:'संस्थापक/मुख्य लगानीकर्ताले राखेको सेयर, सामान्यतया एउटा अवधिका लागि लक र स्वतन्त्र रूपमा कारोबार नहुने।'},
  {term:'Bull Market', en:'A sustained period of rising prices and investor optimism.', np:'बढ्दो मूल्य र लगानीकर्ता आशावादको निरन्तर अवधि।'},
  {term:'Bear Market', en:'A sustained period of falling prices and investor pessimism.', np:'घट्दो मूल्य र लगानीकर्ता निराशावादको निरन्तर अवधि।'},
  {term:'EPS', en:'Earnings Per Share — a company\'s net profit divided by its total shares outstanding.', np:'प्रति सेयर आम्दानी — कम्पनीको खुद नाफालाई कुल बक्यौता सेयरले भाग गरेको।'},
  {term:'P/E Ratio', en:'Price-to-Earnings Ratio — share price divided by EPS; shows how much investors pay per rupee of profit.', np:'मूल्य-देखि-आम्दानी अनुपात — सेयर मूल्यलाई EPS ले भाग गरेको; नाफाको प्रति रुपियाँ लगानीकर्ताले कति तिर्छन् देखाउँछ।'},
  {term:'NAV', en:'Net Asset Value — the per-unit value of a mutual fund\'s total assets.', np:'खुद सम्पत्ति मूल्य — म्युचुअल फन्डको कुल सम्पत्तिको प्रति-युनिट मूल्य।'},
  {term:'Book Value', en:'A company\'s net worth (assets minus liabilities) divided across its total shares.', np:'कम्पनीको खुद सम्पत्ति (सम्पत्ति घटा दायित्व) कुल सेयरमा विभाजन गरेको।'},
  {term:'Circuit Breaker', en:'An automatic trading halt triggered when the index or a stock moves beyond a set threshold.', np:'इन्डेक्स वा सेयर तोकिएको सीमाभन्दा बाहिर सर्दा स्वतः सक्रिय हुने कारोबार रोकावट।'},
  {term:'Price Band', en:'The maximum percentage (commonly 10%) an individual stock is allowed to move in one day.', np:'व्यक्तिगत सेयरलाई एक दिनमा सर्न अनुमति दिइएको अधिकतम प्रतिशत (सामान्यतया १०%)।'},
  {term:'Insider Trading', en:'Illegally trading based on secret, non-public company information for unfair profit.', np:'अनुचित नाफाका लागि गोप्य, सार्वजनिक नभएको कम्पनी जानकारीमा आधारित गैरकानुनी कारोबार।'},
  {term:'Pump-and-Dump', en:'A scheme that spreads false hype to inflate a price, letting manipulators sell at the top.', np:'हेरफेर गर्नेहरूले टुप्पोमा बेच्न सकून् भनी मूल्य बढाउन झूटा हल्ला फैलाउने योजना।'},
  {term:'Diversification', en:'Spreading investments across sectors and company sizes to reduce overall risk.', np:'समग्र जोखिम घटाउन क्षेत्र र कम्पनी आकारहरूमा लगानी फैलाउने काम।'},
  {term:'Fundamental Analysis', en:'Judging a company\'s worth using financial statements, profits, and management quality.', np:'वित्तीय विवरण, नाफा, र व्यवस्थापन गुणस्तर प्रयोग गरी कम्पनीको मूल्य जाँच्ने काम।'},
  {term:'Technical Analysis', en:'Studying price charts and trading patterns to guess short-term price direction.', np:'छोटो-अवधिको मूल्य दिशा अनुमान गर्न मूल्य चार्ट र कारोबार ढाँचा अध्ययन गर्ने काम।'},
  {term:'Capital Gains Tax (CGT)', en:'A tax on the profit earned from selling shares at a higher price than you bought them.', np:'सेयर किनेको भन्दा उच्च मूल्यमा बेचेर कमाएको नाफामा लाग्ने कर।'},
];

const FAQ = [
  {q:{en:'Do I need a lot of money to start investing in NEPSE?', np:'नेप्सेमा लगानी सुरु गर्न मलाई धेरै पैसा चाहिन्छ?'},
   a:{en:'No. Since share prices vary widely and you can buy as few as one share, many beginners start with a small amount. What matters more than the starting amount is opening a DEMAT account, understanding the basics first, and never investing money you can\'t afford to lose.',
      np:'होइन। सेयर मूल्य विस्तृत रूपमा फरक-फरक हुने र तपाईंले एउटा मात्र सेयर पनि किन्न सक्ने भएकाले, धेरै सुरुवातीहरूले सानो रकमबाट सुरु गर्छन्। सुरुवाती रकमभन्दा DEMAT खाता खोल्नु, पहिले आधारभूत कुरा बुझ्नु, र गुमाउन नसक्ने पैसा कहिल्यै लगानी नगर्नु बढी महत्त्वपूर्ण छ।'}},
  {q:{en:'What is the very first step to start investing?', np:'लगानी सुरु गर्न पहिलो कदम के हो?'},
   a:{en:'Open a bank account (if you don\'t have one), then open a DEMAT account through a Depository Participant (usually a bank or broker), register on Mero Share, and get your CRN set up. Only after these steps can you apply for IPOs or trade in the secondary market.',
      np:'बैंक खाता खोल्नुहोस् (छैन भने), त्यसपछि डिपोजिटरी पार्टिसिपेन्ट (सामान्यतया बैंक वा ब्रोकर) मार्फत DEMAT खाता खोल्नुहोस्, मेरो शेयरमा दर्ता गर्नुहोस्, र आफ्नो CRN सेटअप गर्नुहोस्। यी चरणपछि मात्र तपाईंले IPOका लागि आवेदन दिन वा दोस्रो बजारमा कारोबार गर्न सक्नुहुन्छ।'}},
  {q:{en:'Is it safe to invest in NEPSE?', np:'नेप्सेमा लगानी गर्नु सुरक्षित छ?'},
   a:{en:'Investing always carries risk, and share prices can go down as well as up. However, the infrastructure itself — DEMAT accounts, SEBON regulation, and CDSC record-keeping — is designed to protect your legal ownership of shares. The risk lies in company and market performance, not in whether your shares are safely recorded.',
      np:'लगानीमा सधैं जोखिम रहन्छ, र सेयर मूल्य बढ्न र घट्न दुवै सक्छ। तथापि, संरचना आफैं — DEMAT खाता, सेबोन नियमन, र CDSC अभिलेख — तपाईंको सेयरको कानुनी स्वामित्व सुरक्षित गर्न डिजाइन गरिएको छ। जोखिम कम्पनी र बजार प्रदर्शनमा रहन्छ, तपाईंको सेयर सुरक्षित रूपमा अभिलेखमा छ कि छैन भन्नेमा होइन।'}},
  {q:{en:'What is the difference between a broker and a Depository Participant (DP)?', np:'ब्रोकर र डिपोजिटरी पार्टिसिपेन्ट (DP) बीच के भिन्नता छ?'},
   a:{en:'A broker executes your buy and sell orders in the secondary market through a TMS. A DP helps you open and manage your DEMAT account. In practice, many banks and brokerage firms in Nepal perform both roles, so you may interact with the same institution for both needs.',
      np:'ब्रोकरले TMS मार्फत दोस्रो बजारमा तपाईंको खरिद र बिक्री अर्डर सम्पन्न गर्छ। DPले तपाईंलाई DEMAT खाता खोल्न र व्यवस्थापन गर्न मद्दत गर्छ। व्यवहारमा, नेपालमा धेरै बैंक र ब्रोकरेज फर्महरूले दुवै भूमिका निर्वाह गर्छन्, त्यसैले तपाईंले दुवै आवश्यकताका लागि उही संस्थासँग सम्पर्क गर्न सक्नुहुन्छ।'}},
  {q:{en:'Can I lose more money than I invested?', np:'के मैले लगानी गरेभन्दा बढी पैसा गुमाउन सक्छु?'},
   a:{en:'For ordinary share investing (buying shares outright, without borrowed "margin" money), you cannot lose more than the amount you invested — the worst case is the share value falling to zero. Losses beyond your investment typically only happen with borrowed money or more advanced instruments, which beginners should approach with extra caution.',
      np:'सामान्य सेयर लगानी (उधारो "मार्जिन" पैसा बिना सिधै सेयर किन्ने) का लागि, तपाईंले लगानी गरेको रकमभन्दा बढी गुमाउन सक्नुहुन्न — सबैभन्दा नराम्रो अवस्था सेयर मूल्य शून्यमा झर्नु हो। तपाईंको लगानीभन्दा बढी नोक्सानी सामान्यतया उधारो पैसा वा बढी उन्नत उपकरणहरूसँग मात्र हुन्छ, जसमा सुरुवातीहरूले अतिरिक्त सावधानी अपनाउनुपर्छ।'}},
  {q:{en:'How do I know if a company is a good investment?', np:'कुनै कम्पनी राम्रो लगानी हो कि होइन कसरी थाहा पाउने?'},
   a:{en:'There is no single formula, but a reasonable starting checklist includes: consistent profit growth (rising EPS), a reasonable P/E ratio compared to similar companies, manageable debt levels, and transparent, regular disclosures. Combine this with an understanding of the sector\'s overall outlook before deciding.',
      np:'एउटै मात्र सूत्र छैन, तर उचित सुरुवाती चेकलिस्टमा यी समावेश छन्: निरन्तर नाफा वृद्धि (बढ्दो EPS), समान कम्पनीहरूको तुलनामा उचित P/E अनुपात, व्यवस्थापन योग्य ऋण स्तर, र पारदर्शी, नियमित खुलासा। निर्णय गर्नुअघि क्षेत्रको समग्र दृष्टिकोणको बुझाइसँग यसलाई मिलाउनुहोस्।'}},
  {q:{en:'What happens to my shares if my broker shuts down?', np:'मेरो ब्रोकर बन्द भएमा मेरो सेयरलाई के हुन्छ?'},
   a:{en:'Your shares are recorded in your own DEMAT account at CDSC, not inside the broker\'s own systems — the broker only facilitates trades. This structure is specifically designed so your ownership record survives independently of any single broker\'s business continuing to operate.',
      np:'तपाईंको सेयर CDSCमा तपाईंको आफ्नै DEMAT खातामा अभिलेखित हुन्छ, ब्रोकरको आफ्नै प्रणाली भित्र होइन — ब्रोकरले केवल कारोबार सहज बनाउँछ। यो संरचना विशेष रूपले डिजाइन गरिएको छ ताकि तपाईंको स्वामित्व अभिलेख कुनै एउटा ब्रोकरको व्यवसाय जारी रहनुबाट स्वतन्त्र रूपमा बाँच्छ।'}},
];

// The Real-World Path — practical step-by-step onboarding journey (distinct from the lesson roadmap)
const JOURNEY_STEPS = [
  {title:{en:'Learn the fundamentals first', np:'सुरुमा आधारभूत कुरा सिक्नुहोस्'},
   desc:{en:'Complete the Stock Market Basics path so terms like share, IPO, dividend and broker make sense before you touch a single form.',
         np:'कुनै फारम छुनुअघि सेयर, IPO, लाभांश, र ब्रोकर जस्ता शब्दहरू बुझ्नका लागि सेयर बजार आधारभूत मार्ग पूरा गर्नुहोस्।'}},
  {title:{en:'Get your documents & bank account ready', np:'आफ्ना कागजात र बैंक खाता तयार गर्नुहोस्'},
   desc:{en:'You\'ll need Nepali citizenship (or the equivalent ID for foreign investors), a PAN number, a passport photo, and an active bank account — every later step re-uses these.',
         np:'तपाईंलाई नेपाली नागरिकता (वा विदेशी लगानीकर्ताका लागि समकक्ष परिचयपत्र), PAN नम्बर, पासपोर्ट साइजको फोटो, र सक्रिय बैंक खाता चाहिन्छ — पछिका हरेक चरणले यिनै पुनः प्रयोग गर्छन्।'}},
  {title:{en:'Open a Demat account and get your BOID', np:'डिम्याट खाता खोल्नुहोस् र आफ्नो BOID प्राप्त गर्नुहोस्'},
   desc:{en:'Apply through a licensed Depository Participant — usually a bank or a broker. Once approved, you receive a 16-digit BOID, the number that identifies every share you\'ll ever hold electronically.',
         np:'इजाजतपत्रप्राप्त डिपोजिटरी पार्टिसिपेन्ट — सामान्यतया बैंक वा ब्रोकर — मार्फत आवेदन दिनुहोस्। स्वीकृत भएपछि, तपाईंले १६-अंकको BOID पाउनुहुन्छ, जुन नम्बरले तपाईंले इलेक्ट्रोनिक रूपमा राख्ने हरेक सेयर पहिचान गर्छ।'},
   duration:{en:'Typically 1–3 days', np:'सामान्यतया १–३ दिन'}},
  {title:{en:'Register on Meroshare', np:'मेरो शेयरमा दर्ता गर्नुहोस्'},
   desc:{en:'Meroshare is your investor dashboard — link your BOID, set a username and password, and connect your bank for ASBA-based IPO payments. This is where you\'ll view your portfolio and apply for new issues.',
         np:'मेरो शेयर तपाईंको लगानीकर्ता ड्यासबोर्ड हो — आफ्नो BOID जोड्नुहोस्, प्रयोगकर्ता नाम र पासवर्ड सेट गर्नुहोस्, र ASBA-आधारित IPO भुक्तानीका लागि आफ्नो बैंक जोड्नुहोस्। यहीँ तपाईंले आफ्नो पोर्टफोलियो हेर्नुहुनेछ र नयाँ निष्कासनका लागि आवेदन दिनुहुनेछ।'}},
  {title:{en:'Open a broker (TMS) account for the secondary market', np:'दोस्रो बजारका लागि ब्रोकर (TMS) खाता खोल्नुहोस्'},
   desc:{en:'Choose a SEBON-licensed broker and open a trading account. You\'ll get a separate TMS login — this is what you use to actually place buy and sell orders once shares are listed.',
         np:'सेबोन-इजाजतपत्रप्राप्त ब्रोकर छान्नुहोस् र कारोबार खाता खोल्नुहोस्। तपाईंले छुट्टै TMS लगइन पाउनुहुन्छ — सेयर सूचीकृत भएपछि खरिद र बिक्री अर्डर राख्न यही प्रयोग गर्नुहुन्छ।'}},
  {title:{en:'Apply for an IPO/FPO, or place your first secondary-market order', np:'IPO/FPO का लागि आवेदन दिनुहोस्, वा आफ्नो पहिलो दोस्रो-बजार अर्डर राख्नुहोस्'},
   desc:{en:'New companies are applied for through Meroshare (allotment is by lottery for retail applicants). Already-listed companies are bought directly through your broker\'s TMS platform.',
         np:'नयाँ कम्पनीहरूका लागि मेरो शेयरमार्फत आवेदन दिइन्छ (खुद्रा आवेदकहरूका लागि बाँडफाँड लटरीद्वारा हुन्छ)। पहिल्यै सूचीकृत कम्पनीहरू तपाईंको ब्रोकरको TMS प्लेटफर्ममार्फत सोझै किनिन्छन्।'}},
  {title:{en:'Track holdings, dividends, bonus & rights', np:'होल्डिङ, लाभांश, बोनस, र हक ट्र्याक गर्नुहोस्'},
   desc:{en:'All corporate actions post automatically to your Meroshare account. Whenever you sell, remember to complete the "My EDIS" transfer to avoid a penalty from your broker.',
         np:'सबै कर्पोरेट कार्यहरू स्वतः तपाईंको मेरो शेयर खातामा पोस्ट हुन्छन्। जब तपाईं बेच्नुहुन्छ, ब्रोकरबाट जरिवाना नआओस् भनेर "My EDIS" हस्तान्तरण पूरा गर्न नबिर्सनुहोस्।'}},
  {title:{en:'Understand settlement & taxes', np:'फर्स्यौट र करबारे बुझ्नुहोस्'},
   desc:{en:'Trades settle on a T+ cycle, and capital gains tax is withheld and reported through your broker — this path\'s last few lessons walk through exactly what to expect at year-end.',
         np:'कारोबार T+ चक्रमा फर्स्यौट हुन्छ, र पूँजीगत लाभ कर तपाईंको ब्रोकरमार्फत रोकिन्छ र रिपोर्ट गरिन्छ — यो मार्गका अन्तिम केही पाठहरूले वर्षको अन्त्यमा के अपेक्षा गर्ने भन्ने ठ्याक्कै वर्णन गर्छन्।'}},
];

const JOURNEY_GUIDES = [
  {title:{en:'Meroshare Guide', np:'मेरो शेयर गाइड'}, icon:'📱',
   desc:{en:'Registration, linking your BOID and bank, applying for issues, and the My EDIS transfer step people forget.',
         np:'दर्ता, आफ्नो BOID र बैंक जोड्ने काम, निष्कासनका लागि आवेदन दिने तरिका, र मानिसहरूले बिर्सने My EDIS हस्तान्तरण चरण।'}, topic:'meroshare'},
  {title:{en:'Broker Onboarding', np:'ब्रोकर सुरुवात'}, icon:'🧾',
   desc:{en:'How to compare SEBON-licensed brokers, open a TMS account, and place your first order safely.',
         np:'सेबोन-इजाजतपत्रप्राप्त ब्रोकरहरू कसरी तुलना गर्ने, TMS खाता कसरी खोल्ने, र आफ्नो पहिलो अर्डर सुरक्षित रूपमा कसरी राख्ने।'}, topic:'brokers'},
  {title:{en:'IPO & FPO', np:'IPO र FPO'}, icon:'🎟️',
   desc:{en:'Applying through C-ASBA, understanding lottery-based allotment odds, and what happens on listing day.',
         np:'C-ASBA मार्फत आवेदन दिने तरिका, लटरी-आधारित बाँडफाँड सम्भावना बुझ्ने, र सूचीकरण दिनमा के हुन्छ।'}, topic:'ipo-fpo'},
  {title:{en:'Tax & Settlement', np:'कर र फर्स्यौट'}, icon:'📗',
   desc:{en:'Capital gains tax slabs, the T+ settlement cycle, and reading your broker\'s trade confirmation.',
         np:'पूँजीगत लाभ कर स्तर, T+ फर्स्यौट चक्र, र आफ्नो ब्रोकरको कारोबार पुष्टिकरण पढ्ने तरिका।'}, topic:'brokers'},
];

const OFFICIAL_LINKS = [
  {name:'NEPSE', domain:'nepalstock.com.np', url:'https://www.nepalstock.com.np'},
  {name:'SEBON', domain:'sebon.gov.np', url:'https://www.sebon.gov.np'},
  {name:'CDSC', domain:'cdsc.com.np', url:'https://cdsc.com.np'},
  {name:'Meroshare', domain:'meroshare.cdsc.com.np', url:'https://meroshare.cdsc.com.np'},
];

/* =========================================================================
   HELPERS
   ========================================================================= */
const npDigits = ['०','१','२','३','४','५','६','७','८','९'];
function toNpNum(n){
  return String(n).replace(/[0-9]/g, d => npDigits[d]);
}
function fmtNum(n, decimals=0){
  let s = Number(n).toLocaleString('en-US', {maximumFractionDigits:decimals, minimumFractionDigits:decimals});
  return state.lang==='np' ? toNpNum(s) : s;
}
function getTopic(id){ return TOPICS.find(x=>x.id===id); }
function topicsByChapter(cid){ return TOPICS.filter(x=>x.chapter===cid); }
function updateProgressUI(){
  const pct = Math.round((state.progress.size / TOPICS.length) * 100);
  document.documentElement.style.setProperty('--pct', pct);
  document.getElementById('progressMini').style.setProperty('--pct', pct);
  document.getElementById('progressMiniText').textContent = pct+'%';
}

/* =========================================================================
   ROUTER
   ========================================================================= */
function navigate(hash){
  window.location.hash = hash;
}
window.addEventListener('hashchange', render);

function parseHash(){
  const h = window.location.hash.replace('#/','') || 'home';
  const parts = h.split('/');
  return {route: parts[0]||'home', arg: parts[1]||null};
}

/* =========================================================================
   RENDER: MAIN ROUTER DISPATCH
   ========================================================================= */
function render(){
  const {route, arg} = parseHash();
  state.route = route; state.topicId = arg;
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav === route);
  });
  const app = document.getElementById('app');
  let html = '';
  if(route==='home') html = renderHome();
  else if(route==='roadmap') html = renderRoadmap();
  else if(route==='chapters') html = renderChapters();
  else if(route==='topic') html = renderTopicDetail(arg);
  else if(route==='glossary') html = renderGlossary();
  else if(route==='calculators') html = renderCalculators();
  else if(route==='faq') html = renderFAQ();
  else html = renderHome();
  app.innerHTML = html;
  if(route==='roadmap' && arg==='journey'){
    requestAnimationFrame(()=>{
      const target = document.getElementById('journey-section');
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      else window.scrollTo({top:0});
    });
  } else {
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
  }
  afterRenderHooks(route, arg);
  updateProgressUI();
  applyI18n();
  observeReveals();
  // close mobile nav
  document.getElementById('navLinks').classList.remove('open');
}

function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.dataset.i18n);
  });
}

function observeReveals(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  }, {threshold:0.12});
  els.forEach(e=>io.observe(e));
}

/* =========================================================================
   RENDER: HOME
   ========================================================================= */
function renderHome(){
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <span class="eyebrow" data-i18n="hero.eyebrow">A free course for every Nepali investor</span>
        <h1>${t('hero.h1a')}<em>${t('hero.h1b')}</em>${t('hero.h1c')}</h1>
        <p class="lead" data-i18n="hero.lead">${t('hero.lead')}</p>
        <div class="hero-ctas">
          <a href="#/roadmap" class="btn btn-primary" data-i18n="hero.cta1">Start the roadmap</a>
          <a href="#/chapters" class="btn btn-ghost" data-i18n="hero.cta2">Browse chapters</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><b>${fmtNum(19)}</b><span data-i18n="hero.stat1s">Lessons</span></div>
          <div class="hero-stat"><b>${fmtNum(7)}</b><span data-i18n="hero.stat2s">Chapters</span></div>
          <div class="hero-stat"><b>${fmtNum(38)}</b><span data-i18n="hero.stat3s">Quiz questions</span></div>
          <div class="hero-stat"><b>100%</b><span data-i18n="hero.stat4s">Free, always</span></div>
        </div>
      </div>
      <div class="ledger fade-up">
        <div class="ledger-head">
          <b data-i18n="ledger.title">Sample NEPSE Ledger</b>
          <span class="badge" data-i18n="ledger.badge">Illustrative</span>
        </div>
        <div class="ledger-row">
          <div><span class="name" data-i18n="ledger.co1">Commercial Bank Co.</span><span class="sub" data-i18n="ledger.co1s">Large-cap · Banking</span></div>
          <div class="val up">▲ 418.20</div>
        </div>
        <div class="ledger-row">
          <div><span class="name" data-i18n="ledger.co2">Hydro Development Ltd.</span><span class="sub" data-i18n="ledger.co2s">Mid-cap · Hydropower</span></div>
          <div class="val down">▼ 261.50</div>
        </div>
        <div class="ledger-row">
          <div><span class="name" data-i18n="ledger.co3">Finance & Capital Co.</span><span class="sub" data-i18n="ledger.co3s">Small-cap · Finance</span></div>
          <div class="val up">▲ 142.75</div>
        </div>
        <div class="ticker-wrap">
          <div class="ticker">
            <span class="up">EPS ▲ 24.6</span><span>P/E 17.2x</span><span class="down">NAV ▼ 112.3</span>
            <span class="up">BONUS 10%</span><span>BOOK CLOSURE 15 ASHWIN</span><span class="down">CIRCUIT -4%</span>
            <span class="up">EPS ▲ 24.6</span><span>P/E 17.2x</span><span class="down">NAV ▼ 112.3</span>
            <span class="up">BONUS 10%</span><span>BOOK CLOSURE 15 ASHWIN</span><span class="down">CIRCUIT -4%</span>
          </div>
        </div>
        <p style="font-size:11px;color:var(--text-dim);margin:10px 0 0;" data-i18n="ledger.note">Figures are illustrative examples for learning — not live market data.</p>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;padding-bottom:0;">
    <div class="container">
      <div class="journey-banner reveal">
        <div class="jb-text">
          <span class="jb-kicker" data-i18n="journey.bannerKicker">The Real-World Path</span>
          <h3 data-i18n="journey.bannerTitle">Ready to actually get started?</h3>
          <p data-i18n="journey.bannerDesc">${t('journey.bannerDesc')}</p>
        </div>
        <a href="#/roadmap/journey" class="btn-journey">${t('journey.bannerCta')} &rarr;</a>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="chapters.kicker">Full Curriculum</span>
        <h2 data-i18n="chapters.title">All Chapters & Lessons</h2>
        <p data-i18n="chapters.lead">${t('chapters.lead')}</p>
      </div>
      ${renderChapterList(true)}
    </div>
  </section>
  `;
}

/* =========================================================================
   RENDER: ROADMAP
   ========================================================================= */
function renderRoadmap(){
  const pct = Math.round((state.progress.size/TOPICS.length)*100);
  const steps = CHAPTERS.map((c,i)=>{
    const chapterTopics = topicsByChapter(c.id);
    const done = chapterTopics.every(tp=>state.progress.has(tp.id)) && chapterTopics.length>0;
    return {c, done, count: chapterTopics.length};
  });
  return `
  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="roadmap.kicker">Your Learning Path</span>
        <h2 data-i18n="roadmap.title">The Beginner Roadmap</h2>
        <p data-i18n="roadmap.lead">${t('roadmap.lead')}</p>
      </div>
      <div class="side-card reveal" style="position:static;max-width:420px;margin-bottom:34px;">
        <h5 data-i18n="roadmap.progressLabel">Overall progress</h5>
        <div class="bar-track" style="height:16px;"><div class="bar-fill" style="width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--gold));"></div></div>
        <p style="margin:10px 0 0;font-size:13px;color:var(--text-dim);">${fmtNum(state.progress.size)} / ${fmtNum(TOPICS.length)} (${fmtNum(pct)}%)</p>
      </div>
      <div class="roadmap reveal">
        ${steps.map((s,i)=>`
          <div class="road-step ${s.done?'done':''}">
            <div class="road-num">${s.done?'✓':toDisplayNum(i+1)}</div>
            <div class="road-body">
              <b>${s.c.title[state.lang]}</b>
              <span>${fmtNum(s.count)} ${state.lang==='np'?'पाठहरू':'lessons'}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:30px;">
        <a href="#/chapters" class="btn btn-primary" data-i18n="hero.cta2">Browse chapters</a>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="journey-section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="journey.kicker">The Real-World Path</span>
        <h2 data-i18n="journey.title">Start Your Journey</h2>
        <p style="font-weight:600;color:var(--text);margin:0 0 10px;font-size:16px;" data-i18n="journey.subtitle">From your first click to your first trade.</p>
        <p data-i18n="journey.lead">${t('journey.lead')}</p>
      </div>

      <div class="journey-steps reveal">
        ${JOURNEY_STEPS.map((s,i)=>`
          <div class="journey-step">
            <div class="js-num">${toDisplayNum(i+1)}</div>
            <div class="js-body">
              <b>${s.title[state.lang]}</b>
              <p>${s.desc[state.lang]}</p>
              ${s.duration? `<span class="js-duration">⏱ ${s.duration[state.lang]}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="journey-guides-head reveal">
        <h3 data-i18n="journey.guidesTitle">Deep-Dive Guides</h3>
      </div>
      <div class="topic-grid reveal">
        ${JOURNEY_GUIDES.map(g=>{
          const tag = g.topic ? 'a' : 'div';
          const href = g.topic ? `href="#/topic/${g.topic}"` : '';
          return `
          <${tag} ${href} class="guide-card">
            <div class="topic-icon">${g.icon}</div>
            <h4>${g.title[state.lang]}</h4>
            <p>${g.desc[state.lang]}</p>
          </${tag}>`;
        }).join('')}
      </div>

      <div class="official-resources reveal">
        <h3 data-i18n="journey.resourcesTitle">Official resources</h3>
        <p data-i18n="journey.resourcesLead">${t('journey.resourcesLead')}</p>
        <div class="resource-links">
          ${OFFICIAL_LINKS.map(l=>`
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="resource-chip">
              <b>${l.name}</b><span>${l.domain}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  </section>`;
}
function toDisplayNum(n){ return state.lang==='np' ? toNpNum(n) : n; }

/* =========================================================================
   RENDER: CHAPTERS PAGE
   ========================================================================= */
function renderChapters(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="chapters.kicker">Full Curriculum</span>
        <h2 data-i18n="chapters.title">All Chapters & Lessons</h2>
        <p data-i18n="chapters.lead">${t('chapters.lead')}</p>
      </div>
      <div class="search-bar reveal">
        <span>🔎</span>
        <input id="topSearch" type="text" placeholder="${t('search.placeholderTop')}" oninput="handleTopSearch(this.value)">
      </div>
      <div id="searchResultsWrap"></div>
      <div id="chapterListWrap">${renderChapterList(false)}</div>
    </div>
  </section>`;
}

function renderChapterList(limitPreview){
  return CHAPTERS.map(c=>{
    const items = topicsByChapter(c.id);
    return `
    <div class="chapter-block reveal">
      <div class="chapter-title">
        <span class="num">${c.num}</span>
        <h3>${c.title[state.lang]}</h3>
      </div>
      <div class="topic-grid">
        ${items.map(tp=>renderTopicCard(tp)).join('')}
      </div>
    </div>`;
  }).join('');
}

function renderTopicCard(tp){
  const done = state.progress.has(tp.id);
  return `
  <a href="#/topic/${tp.id}" class="topic-card">
    <div class="top-row">
      <div class="topic-icon">${tp.icon}</div>
      <div class="check-badge ${done?'done':''}">${done?'✓':''}</div>
    </div>
    <h4>${tp.title[state.lang]}</h4>
    <p>${tp.card[state.lang]}</p>
  </a>`;
}

function handleTopSearch(q){
  q = q.trim().toLowerCase();
  const wrap = document.getElementById('searchResultsWrap');
  const listWrap = document.getElementById('chapterListWrap');
  if(!q){ wrap.innerHTML=''; listWrap.style.display='block'; return; }
  listWrap.style.display='none';
  const matches = TOPICS.filter(tp=>{
    const hay = (tp.title.en+' '+tp.title.np+' '+tp.card.en+' '+tp.card.np).toLowerCase();
    return hay.includes(q);
  });
  const glossMatches = GLOSSARY.filter(g=> (g.term+' '+g.en+' '+g.np).toLowerCase().includes(q));
  if(matches.length===0 && glossMatches.length===0){
    wrap.innerHTML = `<p style="color:var(--text-dim);padding:20px 0;">${t('nores')}</p>`;
    return;
  }
  wrap.innerHTML = `
    ${matches.length? `<div class="topic-grid" style="margin-bottom:26px;">${matches.map(renderTopicCard).join('')}</div>`:''}
    ${glossMatches.length? `<div class="glossary-grid">${glossMatches.map(g=>`
      <div class="gloss-card"><b>${g.term}</b><p>${g[state.lang]}</p></div>
    `).join('')}</div>`:''}
  `;
}

/* =========================================================================
   RENDER: TOPIC DETAIL
   ========================================================================= */
function renderTopicDetail(id){
  const tp = getTopic(id);
  if(!tp) return renderChapters();
  const idx = TOPICS.findIndex(x=>x.id===id);
  const prev = TOPICS[idx-1];
  const next = TOPICS[idx+1];
  const chapter = CHAPTERS.find(c=>c.id===tp.chapter);
  const done = state.progress.has(tp.id);
  return `
  <div class="topic-detail open">
    <div class="container">
      <a href="#/chapters" class="back-link">&larr; <span data-i18n="topic.backToChapters">Back to chapters</span></a>
      <span class="topic-tag">${chapter.title[state.lang]}</span>
      <div class="topic-head">
        <div class="topic-icon" style="width:56px;height:56px;font-size:26px;">${tp.icon}</div>
        <h1>${tp.title[state.lang]}</h1>
      </div>

      <div class="detail-columns">
        <div>
          <div class="info-block reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.simple">Simple Explanation</span></div>
            <p>${tp.simple[state.lang]}</p>
          </div>
          <div class="info-block reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.detailed">Detailed Explanation</span></div>
            <p>${tp.detailed[state.lang]}</p>
          </div>
          <div class="info-block example reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.example">Real Nepal Example</span></div>
            <p>${tp.example[state.lang]}</p>
          </div>
          <div class="info-block reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.why">Why It Matters</span></div>
            <p>${tp.why[state.lang]}</p>
          </div>
          <div class="info-block misconception reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.misconceptions">Common Misconceptions</span></div>
            <p>${tp.misconceptions[state.lang]}</p>
          </div>
          <div class="info-block reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.takeaways">Remember This</span></div>
            <ul class="takeaway-list">${tp.takeaways[state.lang].map(k=>`<li>${k}</li>`).join('')}</ul>
          </div>

          <div class="info-block reveal">
            <div class="label"><span class="dot"></span><span data-i18n="topic.quizTitle">Quick Check</span></div>
            <p style="margin-top:-4px;color:var(--text-dim);font-size:14px;" data-i18n="topic.quizSub">Test what you just learned</p>
            <div class="quiz-box" id="quizBox-${tp.id}">
              ${tp.quiz.map((q,qi)=>renderQuizQuestion(tp.id, q, qi)).join('')}
            </div>
          </div>

          <div class="topic-nav-btns">
            ${prev? `<a href="#/topic/${prev.id}" class="btn btn-ghost">&larr; ${t('topic.prev')}</a>` : '<span></span>'}
            ${next? `<a href="#/topic/${next.id}" class="btn btn-ghost">${t('topic.next')} &rarr;</a>` : '<span></span>'}
          </div>
        </div>

        <aside>
          <div class="side-card">
            <h5 data-i18n="topic.markDone">Mark as complete</h5>
            <button class="mark-btn ${done?'done':''}" id="markBtn" onclick="toggleProgress('${tp.id}')">
              ${done? '✓ '+t('topic.markedDone') : t('topic.markDone')}
            </button>
          </div>
          <div class="side-card" style="position:static;">
            <h5 data-i18n="chapters.kicker">Full Curriculum</h5>
            <div style="display:flex;flex-direction:column;gap:6px;">
              ${topicsByChapter(tp.chapter).map(x=>`
                <a href="#/topic/${x.id}" style="display:flex;gap:8px;align-items:center;text-decoration:none;color:${x.id===tp.id?'var(--accent)':'var(--text)'};font-size:13.5px;font-weight:${x.id===tp.id?'700':'500'};padding:6px 0;">
                  <span style="width:16px;">${state.progress.has(x.id)?'✓':'·'}</span>${x.title[state.lang]}
                </a>
              `).join('')}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>`;
}

function renderQuizQuestion(topicId, q, qi){
  const key = topicId+'-'+qi;
  return `
  <div class="quiz-q" data-qkey="${key}">
    <p class="qtext">${qi+1}. ${q.q[state.lang]}</p>
    <div class="quiz-opts">
      ${q.opts[state.lang].map((opt,oi)=>`
        <button class="quiz-opt" onclick="answerQuiz('${topicId}',${qi},${oi})">${opt}</button>
      `).join('')}
    </div>
    <div class="quiz-explain" id="explain-${key}"></div>
  </div>`;
}

function answerQuiz(topicId, qi, oi){
  const tp = getTopic(topicId);
  const q = tp.quiz[qi];
  const key = topicId+'-'+qi;
  const qEl = document.querySelector(`[data-qkey="${key}"]`);
  const buttons = qEl.querySelectorAll('.quiz-opt');
  buttons.forEach((b,i)=>{
    b.disabled = true;
    if(i===q.correct) b.classList.add('correct');
    else if(i===oi) b.classList.add('wrong');
  });
  const ex = document.getElementById('explain-'+key);
  ex.classList.add('show');
  ex.innerHTML = `<b>${oi===q.correct? t('quiz.correct') : t('quiz.incorrect')}</b> ${q.explain[state.lang]}`;
}

function toggleProgress(id){
  if(state.progress.has(id)) state.progress.delete(id);
  else state.progress.add(id);
  const btn = document.getElementById('markBtn');
  const done = state.progress.has(id);
  btn.classList.toggle('done', done);
  btn.textContent = done? '✓ '+t('topic.markedDone') : t('topic.markDone');
  updateProgressUI();
}

/* =========================================================================
   RENDER: GLOSSARY
   ========================================================================= */
function renderGlossary(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="glossary.kicker">Quick Reference</span>
        <h2 data-i18n="glossary.title">Financial Glossary</h2>
        <p data-i18n="glossary.lead">${t('glossary.lead')}</p>
      </div>
      <div class="search-bar reveal">
        <span>🔎</span>
        <input id="glossSearch" type="text" placeholder="${t('glossary.search')}" oninput="filterGlossary(this.value)">
      </div>
      <div class="glossary-grid reveal" id="glossaryGrid">
        ${GLOSSARY.map(g=>`<div class="gloss-card" data-term="${g.term.toLowerCase()}"><b>${g.term}</b><p>${g[state.lang]}</p></div>`).join('')}
      </div>
      <p id="glossNoRes" style="display:none;color:var(--text-dim);padding:20px 0;">${t('nores')}</p>
    </div>
  </section>`;
}
function filterGlossary(q){
  q = q.trim().toLowerCase();
  const cards = document.querySelectorAll('#glossaryGrid .gloss-card');
  let anyVisible = false;
  cards.forEach(c=>{
    const hay = c.textContent.toLowerCase();
    const show = hay.includes(q);
    c.style.display = show? '' : 'none';
    if(show) anyVisible = true;
  });
  document.getElementById('glossNoRes').style.display = anyVisible? 'none':'block';
}

/* =========================================================================
   RENDER: CALCULATORS
   ========================================================================= */
function renderCalculators(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="calc.kicker">Try It Yourself</span>
        <h2 data-i18n="calc.title">Interactive Calculators</h2>
        <p data-i18n="calc.lead">${t('calc.lead')}</p>
      </div>
      <div class="calc-grid">
        ${renderDividendCalc()}
        ${renderPECalc()}
        ${renderMarketCapCalc()}
        ${renderRiskChart()}
      </div>
    </div>
  </section>`;
}

/* --- Dividend calculator --- */
function renderDividendCalc(){
  return `
  <div class="calc-card reveal">
    <h3 data-i18n="calc.div.title">Dividend Calculator</h3>
    <p class="hint" data-i18n="calc.div.hint">${t('calc.div.hint')}</p>
    <div class="calc-toggle">
      <button id="divTypeCash" class="active" onclick="setDivType('cash')">${t('calc.div.cashBtn')}</button>
      <button id="divTypeBonus" onclick="setDivType('bonus')">${t('calc.div.bonusBtn')}</button>
    </div>
    <div class="field"><label>${t('calc.div.shares')}</label><input type="number" id="divShares" value="100" min="0" oninput="calcDividend()"></div>
    <div class="field" id="divCashField"><label>${t('calc.div.cash')}</label><input type="number" id="divCashPct" value="10" min="0" oninput="calcDividend()"></div>
    <div class="field" id="divBonusField" style="display:none;"><label>${t('calc.div.bonus')}</label><input type="number" id="divBonusPct" value="10" min="0" oninput="calcDividend()"></div>
    <div class="field"><label>${t('calc.div.price')}</label><input type="number" id="divPrice" value="300" min="0" oninput="calcDividend()"></div>
    <div class="calc-result" id="divResult"></div>
  </div>`;
}
let divType = 'cash';
function setDivType(type){
  divType = type;
  document.getElementById('divTypeCash').classList.toggle('active', type==='cash');
  document.getElementById('divTypeBonus').classList.toggle('active', type==='bonus');
  document.getElementById('divCashField').style.display = type==='cash'?'block':'none';
  document.getElementById('divBonusField').style.display = type==='bonus'?'block':'none';
  calcDividend();
}
function calcDividend(){
  const shares = parseFloat(document.getElementById('divShares').value)||0;
  const price = parseFloat(document.getElementById('divPrice').value)||0;
  const resEl = document.getElementById('divResult');
  if(divType==='cash'){
    const pct = parseFloat(document.getElementById('divCashPct').value)||0;
    const faceValue = 100;
    const cashPerShare = faceValue * (pct/100);
    const totalCash = cashPerShare * shares;
    resEl.innerHTML = `
      <div class="big">${state.lang==='np'?'रु ':'NPR '}${fmtNum(totalCash,2)}</div>
      <div class="small">${t('calc.div.resultCash')} (${fmtNum(shares)} × ${state.lang==='np'?'रु ':'NPR '}${fmtNum(cashPerShare,2)})</div>
    `;
  } else {
    const pct = parseFloat(document.getElementById('divBonusPct').value)||0;
    const newShares = shares * (pct/100);
    const totalShares = shares + newShares;
    resEl.innerHTML = `
      <div class="big">+${fmtNum(newShares,2)}</div>
      <div class="small">${t('calc.div.resultBonus')} → ${t('calc.div.resultTotal')}: ${fmtNum(totalShares,2)}</div>
      <p style="font-size:12.5px;color:var(--text-dim);margin-top:10px;line-height:1.5;">${t('calc.div.adjNote')}</p>
    `;
  }
}

/* --- P/E calculator --- */
function renderPECalc(){
  return `
  <div class="calc-card reveal">
    <h3 data-i18n="calc.pe.title">P/E & EPS Calculator</h3>
    <p class="hint" data-i18n="calc.pe.hint">${t('calc.pe.hint')}</p>
    <div class="field"><label>${t('calc.pe.price')}</label><input type="number" id="peShare" value="450" min="0" oninput="calcPE()"></div>
    <div class="field"><label>${t('calc.pe.eps')}</label><input type="number" id="peEps" value="25" min="0.01" oninput="calcPE()"></div>
    <div class="calc-result" id="peResult"></div>
  </div>`;
}
function calcPE(){
  const price = parseFloat(document.getElementById('peShare').value)||0;
  const eps = parseFloat(document.getElementById('peEps').value)||0.01;
  const pe = price/eps;
  let note = t('calc.pe.mid');
  if(pe < 12) note = t('calc.pe.low');
  else if(pe > 25) note = t('calc.pe.high');
  document.getElementById('peResult').innerHTML = `
    <div class="big">${fmtNum(pe,2)}x</div>
    <div class="small">${t('calc.pe.result')}</div>
    <p style="font-size:12.5px;color:var(--text-dim);margin-top:10px;line-height:1.5;">${note}</p>
  `;
}

/* --- Market cap calculator --- */
function renderMarketCapCalc(){
  return `
  <div class="calc-card reveal">
    <h3 data-i18n="calc.cap.title">Market Cap Visualizer</h3>
    <p class="hint" data-i18n="calc.cap.hint">${t('calc.cap.hint')}</p>
    <div class="field"><label>${t('calc.cap.price')}</label><input type="number" id="capPrice" value="500" min="0" oninput="calcMarketCap()"></div>
    <div class="field"><label>${t('calc.cap.shares')}</label><input type="number" id="capShares" value="50" min="0" oninput="calcMarketCap()"></div>
    <div class="calc-result" id="capResult"></div>
  </div>`;
}
function calcMarketCap(){
  const price = parseFloat(document.getElementById('capPrice').value)||0;
  const sharesM = parseFloat(document.getElementById('capShares').value)||0;
  const totalShares = sharesM * 1000000;
  const cap = price * totalShares;
  const capCroreNPR = cap / 10000000;
  let tier = state.lang==='np'?'सानो पूँजी':'Small-Cap';
  if(capCroreNPR >= 3000) tier = state.lang==='np'?'ठूलो पूँजी':'Large-Cap';
  else if(capCroreNPR >= 800) tier = state.lang==='np'?'मध्यम पूँजी':'Mid-Cap';
  document.getElementById('capResult').innerHTML = `
    <div class="big">${state.lang==='np'?'रु ':'NPR '}${fmtNum(capCroreNPR,1)} ${state.lang==='np'?'करोड':'crore'}</div>
    <div class="small">${t('calc.cap.result')}</div>
    <p style="margin-top:12px;"><span class="pill">${t('calc.cap.tierlabel')}: ${tier}</span></p>
  `;
}

/* --- Risk comparison chart --- */
function renderRiskChart(){
  return `
  <div class="calc-card reveal">
    <h3 data-i18n="calc.risk.title">Risk Comparison Chart</h3>
    <p class="hint" data-i18n="calc.risk.hint">${t('calc.risk.hint')}</p>
    <p style="font-size:12px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.04em;margin-bottom:0;" data-i18n="calc.risk.metric">Typical relative volatility</p>
    <div class="bar-chart">
      <div class="bar-row"><span class="label2">${t('calc.risk.large')}</span><div class="bar-track"><div class="bar-fill" style="width:32%;background:var(--jade);"></div></div><span class="valn">32%</span></div>
      <div class="bar-row"><span class="label2">${t('calc.risk.mid')}</span><div class="bar-track"><div class="bar-fill" style="width:58%;background:var(--gold);"></div></div><span class="valn">58%</span></div>
      <div class="bar-row"><span class="label2">${t('calc.risk.small')}</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:var(--sindoor);"></div></div><span class="valn">85%</span></div>
    </div>
  </div>`;
}

function initCalcs(){
  calcDividend();
  calcPE();
  calcMarketCap();
}

/* =========================================================================
   RENDER: FAQ
   ========================================================================= */
function renderFAQ(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker" data-i18n="faq.kicker">Still Curious?</span>
        <h2 data-i18n="faq.title">Frequently Asked Questions</h2>
      </div>
      <div class="reveal">
        ${FAQ.map((f,i)=>`
          <div class="faq-item" id="faq-${i}">
            <button class="faq-q" onclick="toggleFaq(${i})">
              <span>${f.q[state.lang]}</span><span class="plus">+</span>
            </button>
            <div class="faq-a"><div class="faq-a-inner">${f.a[state.lang]}</div></div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}
function toggleFaq(i){
  document.getElementById('faq-'+i).classList.toggle('open');
}

/* =========================================================================
   AFTER-RENDER HOOKS (per-route JS init)
   ========================================================================= */
function afterRenderHooks(route, arg){
  if(route==='calculators') initCalcs();
}

/* =========================================================================
   TOP-LEVEL UI: THEME, LANGUAGE, NAV
   ========================================================================= */
function setTheme(theme){
  state.theme = theme;
  document.documentElement.classList.toggle('dark', theme==='dark');
  document.getElementById('themeToggle').textContent = theme==='dark' ? '☀️' : '🌙';
}
document.getElementById('themeToggle').addEventListener('click', ()=>{
  setTheme(state.theme==='dark' ? 'light' : 'dark');
});
// default to system preference
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
  setTheme('dark');
} else {
  setTheme('light');
}

function setLang(lang){
  state.lang = lang;
  document.documentElement.lang = lang;
  document.getElementById('langEnBtn').classList.toggle('active', lang==='en');
  document.getElementById('langNpBtn').classList.toggle('active', lang==='np');
  render();
}
document.getElementById('langEnBtn').addEventListener('click', ()=>setLang('en'));
document.getElementById('langNpBtn').addEventListener('click', ()=>setLang('np'));

document.getElementById('hamburgerBtn').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', ()=> document.getElementById('navLinks').classList.remove('open'));
});

/* Initial render */
render();
