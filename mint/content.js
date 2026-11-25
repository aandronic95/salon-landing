/*
 * ─────────────────────────────────────────────────────────────
 *  CONȚINUTUL SITE-ULUI · КОНТЕНТ САЙТА
 *  Acesta e singurul fișier pe care trebuie să-l modifici.
 *  Это единственный файл, который нужно менять.
 * ─────────────────────────────────────────────────────────────
 *
 *  Reguli simple:
 *  • Textele sunt în ghilimele: 'așa'. Dacă textul are apostrof, folosește „ghilimele românești” în interior.
 *  • Unde vezi { ro: '...', ru: '...' }, scrii textul în ambele limbi.
 *    Dacă ai doar română, pune languages: ['ro'] mai jos.
 *  • Nu șterge virgulele dintre elemente. Dacă site-ul apare alb, de obicei lipsește o virgulă sau o ghilimea.
 *  • Pozele: pune fișierele în folderul images/ și scrie calea, de exemplu 'images/cabinet.jpg'.
 *  • Fiecare tratament are un id (de exemplu 'peeling'). Îl folosești la „Ce mi se potrivește” și la „Pregătire”.
 */

window.SITE = {
  /* ── 1. Date generale ─────────────────────────────────────── */
  languages: ['ro', 'ru', 'it'],
  url: 'https://salon.devhub.md/mint',          // adresa site-ului, fără / la final
  currency: { ro: 'lei', ru: 'лей' },

  brand: {
    name: 'Ilara',
    suffix: { ro: 'cosmetologie', ru: 'косметология' },
    since: '2020',
  },

  /* Culoarea principală: butoane, accente. Exemple: '#2F8F7A' mentă, '#3E7CB1' albastru, '#B5677D' roz prăfuit */
  accent: '#2F8F7A',

  /* ── 2. Programări și contact ─────────────────────────────── */
  booking: {
    url: 'https://rezervaora.md',
    label: { ro: 'Programează-te', ru: 'Записаться' },
  },
  /* Consultația: butonul secundar din primul ecran și din „Ce mi se potrivește”. Lasă '' ca să-l ascunzi. */
  consult: {
    label: { ro: 'Consultație gratuită', ru: 'Бесплатная консультация' },
    note: { ro: '15 minute, cu analiza tenului', ru: '15 минут, с анализом кожи' },
  },
  contact: {
    phone: '+373 60 000 000',
    whatsapp: '37360000000',          // doar cifre, cu prefixul țării
    telegram: '',
    instagram: 'https://instagram.com/',
    email: 'salut@exemplu.md',
    street: { ro: 'bd. Ștefan cel Mare 1, et. 2', ru: 'бул. Штефан чел Маре 1, эт. 2' },
    city: { ro: 'Chișinău', ru: 'Кишинёв' },
    country: 'MD',
    mapEmbed: 'https://maps.google.com/maps?q=Chisinau&z=14&output=embed',
    mapLink: 'https://maps.google.com/?q=Chisinau',
    parking: { ro: 'Parcare în fața clădirii', ru: 'Парковка перед зданием' },
  },

  /* day: 1 = luni … 7 = duminică. open: '' pentru zilele închise. */
  hours: [
    { day: 1, open: '09:00', close: '20:00' },
    { day: 2, open: '09:00', close: '20:00' },
    { day: 3, open: '09:00', close: '20:00' },
    { day: 4, open: '09:00', close: '20:00' },
    { day: 5, open: '09:00', close: '20:00' },
    { day: 6, open: '10:00', close: '17:00' },
    { day: 7, open: '', close: '' },
  ],

  /* ── 3. Google și distribuire ─────────────────────────────── */
  seo: {
    title: { ro: 'Site pentru cabinet de cosmetologie: demo Mint clinic', ru: 'Сайт для кабинета косметологии: демо Mint clinic' },
    description: { ro: 'Demo complet de site pentru cosmetologie: „Ce tratament mi se potrivește?”, tratamente cu preț și cură, pachete, rezultate înainte și după, pregătire și contraindicații, echipă, program și programare online. În română și rusă.', ru: 'Полное демо сайта для косметологии: подбор процедуры, цены и курсы, пакеты, результаты до и после, подготовка и противопоказания, команда, часы работы и онлайн-запись. На румынском и русском.' },
    priceRange: '350–1500 lei',
    image: 'images/share.jpg',
  },

  /* ── 4. Pozele ────────────────────────────────────────────── */
  images: {
    hero: 'https://images.unsplash.com/photo-1728727217834-b190862837a3?auto=format&fit=crop&w=1400&q=80',
    about: 'https://images.unsplash.com/photo-1596740926849-2d473dee8d60?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1713085085470-fba013d67e65?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1647004692483-c5d942fe1137?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1655026392641-bf283a5f12d4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1786937680099-779e1da6f7f7?auto=format&fit=crop&w=900&q=80',
    ],
    before: 'https://images.unsplash.com/photo-1728727267814-792db55ce678?auto=format&fit=crop&w=1100&q=80',
    after: 'https://images.unsplash.com/photo-1728727267814-792db55ce678?auto=format&fit=crop&w=1100&q=80',
  },

  /* ── 5. Ordinea secțiunilor ───────────────────────────────── */
  sections: ['hero', 'trust', 'finder', 'services', 'packages', 'results', 'prep', 'about', 'team', 'gallery', 'reviews', 'gift', 'faq', 'contact'],

  /* ── 6. Textele ───────────────────────────────────────────── */
  nav: {
    finder: { ro: 'Ce mi se potrivește', ru: 'Что мне подходит' },
    services: { ro: 'Tratamente', ru: 'Процедуры' },
    packages: { ro: 'Pachete', ru: 'Пакеты' },
    prep: { ro: 'Pregătire', ru: 'Подготовка' },
    contact: { ro: 'Contact', ru: 'Контакты' },
  },

  hero: {
    kicker: { ro: 'Cabinet de cosmetologie · Chișinău', ru: 'Кабинет косметологии · Кишинёв' },
    title: { ro: 'Piele sănătoasă,\nfără ghicit.', ru: 'Здоровая кожа\nбез догадок.' },
    text: {
      ro: 'Începem cu o analiză a tenului și un plan pe ședințe. Știi de la început ce facem, cât durează și cât costă.',
      ru: 'Начинаем с анализа кожи и плана по сеансам. С самого начала понятно, что делаем, сколько это займёт и сколько стоит.',
    },
    card: { title: { ro: 'Prima vizită', ru: 'Первый визит' }, text: { ro: 'Analiza tenului + plan de îngrijire, gratuit', ru: 'Анализ кожи + план ухода, бесплатно' } },
  },

  trust: [
    { title: { ro: 'Cosmetologi cu diplomă', ru: 'Дипломированные косметологи' }, text: { ro: 'Cursuri anuale de specializare', ru: 'Ежегодное повышение квалификации' } },
    { title: { ro: 'Instrumente sterilizate', ru: 'Стерильные инструменты' }, text: { ro: 'Autoclav și pachete sigilate, deschise în fața ta', ru: 'Автоклав и крафт-пакеты, вскрываем при вас' } },
    { title: { ro: 'Cosmetice profesionale', ru: 'Профессиональная косметика' }, text: { ro: 'Alese după tipul tău de ten', ru: 'Подбираем под ваш тип кожи' } },
    { title: { ro: 'Plan scris', ru: 'Письменный план' }, text: { ro: 'Ședințe, intervale și îngrijire acasă', ru: 'Сеансы, интервалы и домашний уход' } },
  ],

  /* „Ce tratament mi se potrivește?”: fiecare problemă trimite la tratamentele din lista de servicii (după id) */
  finder: {
    title: { ro: 'Ce tratament mi se potrivește?', ru: 'Какая процедура мне подходит?' },
    text: { ro: 'Alege ce te deranjează. Îți arătăm de unde începem de obicei, iar la consultație stabilim planul exact.', ru: 'Выберите, что беспокоит. Покажем, с чего обычно начинаем, а точный план составим на консультации.' },
    recommended: { ro: 'De obicei începem cu', ru: 'Обычно начинаем с' },
    concerns: [
      { name: { ro: 'Acnee și pori', ru: 'Акне и поры' }, text: { ro: 'Curățăm în profunzime, apoi calmăm și reglăm sebumul. Rezultatul vine în cură, nu dintr-o ședință.', ru: 'Глубоко очищаем, затем успокаиваем и регулируем себум. Результат даёт курс, а не один сеанс.' }, treatments: ['curatare', 'peeling', 'acnee'] },
      { name: { ro: 'Pete pigmentare', ru: 'Пигментация' }, text: { ro: 'Peeling-urile se fac toamna și iarna, cu protecție solară zilnică. Petele vechi cer mai multe ședințe.', ru: 'Пилинги делаем осенью и зимой, с ежедневной защитой от солнца. Старые пятна требуют больше сеансов.' }, treatments: ['peeling', 'vitamina-c'] },
      { name: { ro: 'Riduri fine', ru: 'Мелкие морщины' }, text: { ro: 'Stimulăm colagenul și hidratăm. Lucrăm în cure de 4–6 ședințe, cu întreținere lunară.', ru: 'Стимулируем коллаген и увлажняем. Работаем курсами по 4–6 сеансов с ежемесячной поддержкой.' }, treatments: ['microneedling', 'masaj', 'hidratare'] },
      { name: { ro: 'Ten deshidratat', ru: 'Обезвоженная кожа' }, text: { ro: 'Refacem bariera pielii și adăugăm hidratare în straturi. Se simte diferența de la prima ședință.', ru: 'Восстанавливаем барьер кожи и увлажняем слоями. Разницу видно с первого сеанса.' }, treatments: ['hidratare', 'masaj'] },
      { name: { ro: 'Roșeață, sensibilitate', ru: 'Покраснения, чувствительность' }, text: { ro: 'Tratamente blânde, fără exfoliere puternică. Întâi calmăm, apoi lucrăm pe cauză.', ru: 'Мягкие процедуры без сильной эксфолиации. Сначала успокаиваем, затем работаем с причиной.' }, treatments: ['hidratare', 'acnee'] },
      { name: { ro: 'Ten tern', ru: 'Тусклый цвет лица' }, text: { ro: 'Exfoliere ușoară și vitamina C, ca pielea să-și recapete luminozitatea.', ru: 'Мягкая эксфолиация и витамин C, чтобы вернуть коже сияние.' }, treatments: ['vitamina-c', 'curatare'] },
    ],
  },

  services: {
    title: { ro: 'Tratamente și prețuri', ru: 'Процедуры и цены' },
    text: { ro: 'Prețul include demachierea, tratamentul, masca și protecția la final.', ru: 'В цену входят демакияж, процедура, маска и защита в конце.' },
    minutes: { ro: 'min', ru: 'мин' },
    sessions: { ro: 'Cură recomandată', ru: 'Рекомендуемый курс' },
    categories: [
      {
        name: { ro: 'Curățare', ru: 'Чистка' },
        items: [
          { id: 'curatare', name: { ro: 'Curățare facială combinată', ru: 'Комбинированная чистка лица' }, desc: { ro: 'Ultrasonică și manuală, cu mască calmantă', ru: 'Ультразвуковая и мануальная, с успокаивающей маской' }, duration: '90', price: '650', sessions: { ro: 'la 4–6 săptămâni', ru: 'раз в 4–6 недель' } },
          { id: 'acnee', name: { ro: 'Tratament pentru acnee', ru: 'Уход при акне' }, desc: { ro: 'Curățare blândă, peeling ușor, terapie LED', ru: 'Мягкая чистка, лёгкий пилинг, LED-терапия' }, duration: '75', price: '700', sessions: { ro: '6 ședințe, la 10 zile', ru: '6 сеансов, раз в 10 дней' }, tag: { ro: 'Cel mai cerut', ru: 'Самое популярное' } },
        ],
      },
      {
        name: { ro: 'Peeling', ru: 'Пилинги' },
        items: [
          { id: 'peeling', name: { ro: 'Peeling chimic', ru: 'Химический пилинг' }, desc: { ro: 'Acizi aleși după ten: migdalic, glicolic sau salicilic', ru: 'Кислоты под тип кожи: миндальная, гликолевая или салициловая' }, duration: '60', price: '600', sessions: { ro: '4–6 ședințe, la 2 săptămâni', ru: '4–6 сеансов, раз в 2 недели' } },
          { id: 'vitamina-c', name: { ro: 'Peeling cu vitamina C', ru: 'Пилинг с витамином C' }, desc: { ro: 'Pentru luminozitate și ten uniform', ru: 'Для сияния и ровного тона' }, duration: '60', price: '650', sessions: { ro: '4 ședințe, la 2 săptămâni', ru: '4 сеанса, раз в 2 недели' } },
        ],
      },
      {
        name: { ro: 'Îngrijire', ru: 'Уход' },
        items: [
          { id: 'hidratare', name: { ro: 'Hidratare intensivă', ru: 'Интенсивное увлажнение' }, desc: { ro: 'Acid hialuronic, mască de alginat', ru: 'Гиалуроновая кислота, альгинатная маска' }, duration: '60', price: '550', sessions: { ro: 'lunar', ru: 'раз в месяц' } },
          { id: 'masaj', name: { ro: 'Masaj facial sculptural', ru: 'Скульптурный массаж лица' }, desc: { ro: 'Tonifiere, drenaj, relaxare', ru: 'Тонус, дренаж, расслабление' }, duration: '50', price: '500', sessions: { ro: '5–10 ședințe, săptămânal', ru: '5–10 сеансов, раз в неделю' } },
        ],
      },
      {
        name: { ro: 'Aparatură', ru: 'Аппаратные' },
        items: [
          { id: 'microneedling', name: { ro: 'Microneedling', ru: 'Микронидлинг' }, desc: { ro: 'Stimulează colagenul: textură, pori, riduri fine', ru: 'Стимулирует коллаген: текстура, поры, мелкие морщины' }, duration: '75', price: '1200', sessions: { ro: '3–4 ședințe, la 4 săptămâni', ru: '3–4 сеанса, раз в 4 недели' } },
          { id: 'led', name: { ro: 'Terapie LED', ru: 'LED-терапия' }, desc: { ro: 'Ca adaos la orice tratament', ru: 'Дополнение к любой процедуре' }, duration: '20', price: '200', sessions: { ro: 'la fiecare vizită', ru: 'при каждом визите' } },
        ],
      },
    ],
  },

  packages: {
    title: { ro: 'Pachete și abonamente', ru: 'Пакеты и абонементы' },
    text: { ro: 'Rezultatele vin din regularitate. Pachetele te țin pe plan și costă mai puțin.', ru: 'Результат даёт регулярность. Пакеты помогают держаться плана и стоят дешевле.' },
    save: { ro: 'economisești', ru: 'экономия' },
    cta: { ro: 'Vreau pachetul', ru: 'Хочу пакет' },
    items: [
      { name: { ro: 'Cură anti-acnee', ru: 'Курс против акне' }, price: '3500', old: '4200', items: { ro: ['6 tratamente pentru acnee', 'Plan de îngrijire acasă', 'Control gratuit după o lună'], ru: ['6 процедур при акне', 'План домашнего ухода', 'Бесплатный контроль через месяц'] } },
      { name: { ro: 'Abonament Glow', ru: 'Абонемент Glow' }, price: '900', per: { ro: '/lună', ru: '/мес' }, featured: true, tag: { ro: 'Cel mai ales', ru: 'Выбирают чаще' }, items: { ro: ['1 tratament la alegere pe lună', 'Terapie LED inclusă', '10% la cosmetice'], ru: ['1 процедура на выбор в месяц', 'LED-терапия включена', '10% на косметику'] } },
      { name: { ro: 'Pregătire pentru eveniment', ru: 'Подготовка к событию' }, price: '1600', old: '1900', items: { ro: ['Curățare cu 2 săptămâni înainte', 'Hidratare cu 3 zile înainte', 'Masaj facial în ziua evenimentului'], ru: ['Чистка за 2 недели', 'Увлажнение за 3 дня', 'Массаж лица в день события'] } },
    ],
    note: { ro: 'Pachetele se plătesc la prima vizită și sunt valabile 6 luni.', ru: 'Пакеты оплачиваются при первом визите и действуют 6 месяцев.' },
  },

  results: {
    kicker: { ro: 'Rezultate', ru: 'Результаты' },
    title: { ro: 'Rezultate, ședință cu ședință', ru: 'Результат по сеансам' },
    text: { ro: 'Trage de linie ca să vezi diferența.', ru: 'Потяните линию, чтобы увидеть разницу.' },
    before: { ro: 'Înainte', ru: 'До' },
    after: { ro: 'După', ru: 'После' },
    steps: [
      { when: { ro: 'După 1 ședință', ru: 'После 1 сеанса' }, text: { ro: 'Pielea e curată și calmă, porii par mai mici.', ru: 'Кожа чистая и спокойная, поры выглядят меньше.' } },
      { when: { ro: 'După 3 ședințe', ru: 'После 3 сеансов' }, text: { ro: 'Mai puține inflamații, textura se uniformizează.', ru: 'Меньше воспалений, текстура выравнивается.' } },
      { when: { ro: 'După cură', ru: 'После курса' }, text: { ro: 'Ten echilibrat, cu îngrijire de întreținere lunară.', ru: 'Ровная кожа и ежемесячный поддерживающий уход.' } },
    ],
    disclaimer: { ro: 'Rezultatele diferă de la o persoană la alta. Planul îl stabilim la consultație.', ru: 'Результаты у всех разные. План составляем на консультации.' },
  },

  /* Pregătire și contraindicații, pe tratamente (după id) */
  prep: {
    title: { ro: 'Pregătire și contraindicații', ru: 'Подготовка и противопоказания' },
    text: { ro: 'Citește înainte de vizită, ca să nu amânăm tratamentul în ziua programării.', ru: 'Прочитайте до визита, чтобы не переносить процедуру в день записи.' },
    labels: { before: { ro: 'Înainte', ru: 'До' }, after: { ro: 'După', ru: 'После' }, contra: { ro: 'Nu facem dacă', ru: 'Не делаем, если' } },
    items: [
      { treatment: 'peeling',
        before: { ro: ['Fără retinoizi și exfoliante cu 5 zile înainte', 'Fără plajă și solar cu 2 săptămâni înainte'], ru: ['Без ретиноидов и скрабов за 5 дней', 'Без загара и солярия за 2 недели'] },
        after: { ro: ['Protecție solară SPF 50 în fiecare zi', 'Fără saună și piscină 3 zile', 'Nu îndepărta pielea care se descuamează'], ru: ['Солнцезащита SPF 50 каждый день', 'Без сауны и бассейна 3 дня', 'Не снимайте шелушащуюся кожу'] },
        contra: { ro: ['Sarcină sau alăptare', 'Herpes activ sau răni pe zona tratată', 'Tratament cu isotretinoin în ultimele 6 luni', 'Arsuri solare recente'], ru: ['Беременность или кормление грудью', 'Активный герпес или раны в зоне процедуры', 'Приём изотретиноина за последние 6 месяцев', 'Недавние солнечные ожоги'] } },
      { treatment: 'microneedling',
        before: { ro: ['Fără retinoizi cu 5 zile înainte', 'Vino fără machiaj'], ru: ['Без ретиноидов за 5 дней', 'Приходите без макияжа'] },
        after: { ro: ['Fără machiaj 24 de ore', 'Fără sport intens și saună 2 zile', 'SPF 50 zilnic'], ru: ['Без макияжа 24 часа', 'Без интенсивного спорта и сауны 2 дня', 'SPF 50 ежедневно'] },
        contra: { ro: ['Sarcină', 'Acnee inflamată activă', 'Tendință la cicatrici cheloide', 'Tulburări de coagulare'], ru: ['Беременность', 'Активное воспалённое акне', 'Склонность к келоидным рубцам', 'Нарушения свёртываемости крови'] } },
      { treatment: 'curatare',
        before: { ro: ['Fără exfoliante cu 3 zile înainte', 'Spune-ne ce produse folosești acum'], ru: ['Без скрабов за 3 дня', 'Расскажите, какие средства используете сейчас'] },
        after: { ro: ['Fără machiaj până seara', 'Fără saună 2 zile'], ru: ['Без макияжа до вечера', 'Без сауны 2 дня'] },
        contra: { ro: ['Herpes activ', 'Inflamații extinse sau infecții ale pielii'], ru: ['Активный герпес', 'Обширные воспаления или инфекции кожи'] } },
    ],
    disclaimer: { ro: 'Lista nu înlocuiește consultația. Spune-ne mereu despre medicamente, alergii și sarcină.', ru: 'Список не заменяет консультацию. Всегда сообщайте о лекарствах, аллергиях и беременности.' },
  },

  about: {
    label: { ro: 'Despre noi', ru: 'О нас' },
    title: { ro: 'Un cabinet mic, cu timp pentru fiecare', ru: 'Небольшой кабинет, где есть время для каждого' },
    text: {
      ro: 'Lucrăm doar cu programare, câte o clientă pe rând. Fiecare tratament începe cu întrebări și se termină cu un plan de îngrijire acasă, scris, nu doar spus.',
      ru: 'Работаем только по записи, по одной клиентке. Каждая процедура начинается с вопросов и заканчивается письменным планом домашнего ухода.',
    },
    points: {
      ro: ['Analiza tenului la prima vizită', 'Fișă cu istoricul tratamentelor', 'Mesaj de reamintire înainte de ședință'],
      ru: ['Анализ кожи при первом визите', 'Карта с историей процедур', 'Напоминание перед сеансом'],
    },
  },

  team: {
    kicker: { ro: 'Echipa', ru: 'Команда' },
    title: { ro: 'Specialiștii', ru: 'Специалисты' },
    book: { ro: 'Programează-te la', ru: 'Записаться к' },
    yearsLabel: { ro: 'ani de experiență', ru: 'лет опыта' },
    people: [
      { name: { ro: 'Ana', ru: 'Анна' }, role: { ro: 'Cosmetolog · fondatoare', ru: 'Косметолог · основательница' }, detail: { ro: 'Acnee, peeling, microneedling', ru: 'Акне, пилинги, микронидлинг' }, years: '10', photo: 'https://images.unsplash.com/photo-1781888683081-3ac4b43f21db?auto=format&fit=crop&w=700&q=80' },
      { name: { ro: 'Irina', ru: 'Ирина' }, role: { ro: 'Cosmetolog', ru: 'Косметолог' }, detail: { ro: 'Îngrijire, hidratare, ten sensibil', ru: 'Уход, увлажнение, чувствительная кожа' }, years: '6', photo: 'https://images.unsplash.com/photo-1781888679143-01d758aedbe6?auto=format&fit=crop&w=700&q=80' },
      { name: { ro: 'Elena', ru: 'Елена' }, role: { ro: 'Specialist masaj facial', ru: 'Специалист по массажу лица' }, detail: { ro: 'Masaj sculptural și drenaj', ru: 'Скульптурный массаж и дренаж' }, years: '5', photo: 'https://images.unsplash.com/photo-1758600587728-9bde755354ad?auto=format&fit=crop&w=700&q=80' },
    ],
  },

  gallery: {
    kicker: { ro: 'Galerie', ru: 'Галерея' },
    title: { ro: 'Cabinetul și tratamentele', ru: 'Кабинет и процедуры' },
    text: { ro: 'Mai multe pe Instagram.', ru: 'Больше в Instagram.' },
    more: { ro: 'Vezi pe Instagram', ru: 'Смотреть в Instagram' },
  },

  reviews: {
    kicker: { ro: 'Recenzii', ru: 'Отзывы' },
    title: { ro: 'Ce spun clientele', ru: 'Что говорят клиентки' },
    rating: '4.9',
    count: '210',
    label: { ro: 'recenzii pe Google', ru: 'отзывов в Google' },
    link: '',
    items: [
      { name: { ro: 'Cristina', ru: 'Кристина' }, text: { ro: 'Prima dată când cineva mi-a explicat de ce am pori dilatați și ce fac acasă. După trei ședințe se vede.', ru: 'Впервые мне объяснили, почему у меня расширенные поры и что делать дома. После трёх сеансов видно разницу.' } },
      { name: { ro: 'Natalia', ru: 'Наталья' }, text: { ro: 'Am ten sensibil și mi-era frică de peeling. Ana a ales unul blând și nu am avut nicio roșeață.', ru: 'У меня чувствительная кожа, я боялась пилинга. Анна подобрала мягкий, и не было никакого покраснения.' } },
      { name: { ro: 'Diana', ru: 'Диана' }, text: { ro: 'Curat, liniștit, la ora fixă. Planul scris m-a ajutat să nu renunț la jumătate.', ru: 'Чисто, спокойно, точно по времени. Письменный план помог не бросить на полпути.' } },
    ],
  },

  gift: {
    kicker: { ro: 'Cadou', ru: 'Подарок' },
    title: { ro: 'Certificat cadou', ru: 'Подарочный сертификат' },
    text: { ro: 'Pe o sumă sau pe un tratament anume. Îl primești pe WhatsApp, în format PDF, sau îl iei din cabinet.', ru: 'На сумму или на конкретную процедуру. Получите в WhatsApp в формате PDF или заберите в кабинете.' },
    amounts: ['500', '1000', '1500'],
    cta: { ro: 'Comandă pe WhatsApp', ru: 'Заказать в WhatsApp' },
    message: { ro: 'Bună! Vreau un certificat cadou de ', ru: 'Здравствуйте! Хочу сертификат на ' },
    label: { ro: 'Certificat cadou', ru: 'Сертификат' },
  },

  faq: {
    kicker: { ro: 'Întrebări', ru: 'Вопросы' },
    title: { ro: 'Întrebări frecvente', ru: 'Частые вопросы' },
    items: [
      { q: { ro: 'Consultația chiar e gratuită?', ru: 'Консультация правда бесплатная?' }, a: { ro: 'Da. 15 minute, cu analiza tenului și recomandarea de tratament. Dacă faci tratamentul în aceeași zi, consultația e inclusă.', ru: 'Да. 15 минут, анализ кожи и рекомендация. Если делаете процедуру в тот же день, консультация входит в неё.' } },
      { q: { ro: 'Pot face peeling vara?', ru: 'Можно делать пилинг летом?' }, a: { ro: 'Peeling-urile puternice le facem din octombrie până în martie. Vara alegem variante blânde, cu SPF zilnic.', ru: 'Сильные пилинги делаем с октября по март. Летом выбираем мягкие варианты с ежедневным SPF.' } },
      { q: { ro: 'Cât durează până se vede rezultatul?', ru: 'Когда будет виден результат?' }, a: { ro: 'Hidratarea se vede imediat. Pentru acnee, pete și riduri fine contează cura: de obicei 4–6 ședințe.', ru: 'Увлажнение видно сразу. При акне, пигментации и морщинах важен курс: обычно 4–6 сеансов.' } },
      { q: { ro: 'Pot veni cu machiaj?', ru: 'Можно прийти с макияжем?' }, a: { ro: 'Da, demachierea e inclusă. Pentru microneedling e mai bine să vii fără.', ru: 'Да, демакияж входит в процедуру. На микронидлинг лучше приходить без макияжа.' } },
    ],
  },

  contactSection: {
    title: { ro: 'Unde ne găsești', ru: 'Как нас найти' },
    hours: { ro: 'Program', ru: 'Часы работы' },
    closed: { ro: 'Închis', ru: 'Выходной' },
    openNow: { ro: 'Deschis acum · până la', ru: 'Открыто · до' },
    closedNow: { ro: 'Închis acum', ru: 'Сейчас закрыто' },
    route: { ro: 'Deschide în Google Maps', ru: 'Открыть в Google Maps' },
    call: { ro: 'Sună', ru: 'Позвонить' },
    days: { ro: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'], ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] },
  },

  footer: {
    text: { ro: 'Cabinet de cosmetologie în Chișinău. Tratamente faciale cu plan scris, doar cu programare.', ru: 'Кабинет косметологии в Кишинёве. Уход за лицом с письменным планом, только по записи.' },
    rights: { ro: 'Toate drepturile rezervate.', ru: 'Все права защищены.' },
    language: { ro: 'Limba', ru: 'Язык' },
  },
}
