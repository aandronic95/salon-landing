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
 *    Dacă ai doar română, pune languages: ['ro'] mai jos și poți lăsa ru gol.
 *  • Nu șterge virgulele dintre elemente. Dacă site-ul apare alb, de obicei lipsește o virgulă sau o ghilimea.
 *  • Pozele: pune fișierele în folderul images/ și scrie calea, de exemplu 'images/echipa-andrei.jpg'.
 *  • După ce salvezi, verifică site-ul: deschide index.html în browser.
 */

window.SITE = {
  /* ── 1. Date generale ─────────────────────────────────────── */
  languages: ['ro', 'ru'],            // ['ro'] dacă vrei doar română
  url: 'https://salon.devhub.md/beton',          // adresa site-ului, fără / la final (pentru Google și linkuri)
  currency: { ro: 'lei', ru: 'лей' },

  brand: {
    name: 'OȚEL',                     // numele frizeriei, apare mare în logo
    suffix: { ro: 'barbershop', ru: 'barbershop' },
    since: '2021',                    // anul deschiderii (apare în subsol), sau ''
  },

  /* Culoarea de accent: butoane, linii, cifre. Exemple: '#FF5A1F' portocaliu, '#E3B505' galben, '#3FA9F5' albastru */
  accent: '#FF5A1F',
  /* Pozele alb-negru (true) sau color (false). Alb-negru dă aerul industrial al temei. */
  photosBW: true,

  /* ── 2. Programări și contact ─────────────────────────────── */
  booking: {
    url: 'https://rezervaora.md',     // linkul tău de programare online (rezervaora.md sau altul)
    label: { ro: 'Programează-te', ru: 'Записаться' },
  },
  contact: {
    phone: '+373 60 000 000',
    whatsapp: '37360000000',          // doar cifre, cu prefixul țării, fără +
    telegram: '',                     // de exemplu 'otel_barbershop', sau ''
    instagram: 'https://instagram.com/',
    email: 'salut@exemplu.md',
    street: { ro: 'str. Uzinelor 12, hala 3', ru: 'ул. Узинелор 12, цех 3' },
    city: { ro: 'Chișinău', ru: 'Кишинёв' },
    country: 'MD',                    // MD sau RO
    /* Harta: caută adresa pe Google Maps → Distribuie → Încorporează harta → copiază doar linkul din src="..." */
    mapEmbed: 'https://maps.google.com/maps?q=Chisinau&z=13&output=embed',
    mapLink: 'https://maps.google.com/?q=Chisinau',
    parking: { ro: 'Parcare gratuită în curte', ru: 'Бесплатная парковка во дворе' },
  },

  /* Programul. day: 1 = luni … 7 = duminică. Lasă open: '' pentru zilele închise. */
  hours: [
    { day: 1, open: '10:00', close: '21:00' },
    { day: 2, open: '10:00', close: '21:00' },
    { day: 3, open: '10:00', close: '21:00' },
    { day: 4, open: '10:00', close: '21:00' },
    { day: 5, open: '10:00', close: '21:00' },
    { day: 6, open: '10:00', close: '19:00' },
    { day: 7, open: '', close: '' },
  ],

  /* ── 3. Google și distribuire ─────────────────────────────── */
  seo: {
    title: { ro: 'Site pentru barbershop în stil industrial: demo Beton barber', ru: 'Сайт для барбершопа в индустриальном стиле: демо Beton barber' },
    description: { ro: 'Demo complet de site pentru barbershop, în stil industrial: servicii și prețuri pe categorii, echipă, lucrări, înainte și după, abonament, card cadou, program și programare online. În română și rusă.', ru: 'Полное демо сайта для барбершопа в индустриальном стиле: услуги и цены, команда, работы, до и после, абонемент, сертификат, часы работы и онлайн-запись. На румынском и русском.' },
    priceRange: '150–450 lei',
    image: 'images/share.jpg',        // poza care apare când trimiți linkul pe WhatsApp sau Facebook (1200×630)
  },

  /* ── 4. Pozele ────────────────────────────────────────────── */
  images: {
    hero: 'https://images.unsplash.com/photo-1705976062088-5433328c2dcd?auto=format&fit=crop&w=1800&q=80',
    about: 'https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578390432942-d323db577792?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1648221122323-572c13a31663?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542330824862-c1db95917e69?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=900&q=80',
    ],
    /* Înainte și după: două poze ale aceluiași client, din același unghi */
    before: 'https://images.unsplash.com/photo-1635273051839-003bf06a8751?auto=format&fit=crop&w=1100&q=80',
    after: 'https://images.unsplash.com/photo-1635273051839-003bf06a8751?auto=format&fit=crop&w=1100&q=80',
  },

  /* ── 5. Ordinea secțiunilor ───────────────────────────────── */
  /* Scoate din listă ce nu-ți trebuie sau schimbă ordinea. */
  sections: ['hero', 'ticker', 'facts', 'services', 'about', 'team', 'gallery', 'beforeAfter', 'membership', 'reviews', 'gift', 'rules', 'faq', 'contact'],

  /* ── 6. Textele ───────────────────────────────────────────── */
  nav: {
    services: { ro: 'Servicii', ru: 'Услуги' },
    team: { ro: 'Echipa', ru: 'Команда' },
    gallery: { ro: 'Lucrări', ru: 'Работы' },
    membership: { ro: 'Abonament', ru: 'Абонемент' },
    contact: { ro: 'Contact', ru: 'Контакты' },
  },

  hero: {
    kicker: { ro: 'Barbershop · Chișinău', ru: 'Барбершоп · Кишинёв' },
    title: { ro: 'Tuns precis.\nFără grabă.', ru: 'Точная стрижка.\nБез спешки.' },
    text: {
      ro: 'Fade, tuns clasic și barbă, într-o fostă hală de fabrică. Fiecare client are 45 de minute doar ale lui, iar ora o alegi online.',
      ru: 'Фейд, классика и борода в бывшем заводском цехе. У каждого клиента 45 минут только для него, а время вы выбираете онлайн.',
    },
    call: { ro: 'Sună', ru: 'Позвонить' },
  },

  ticker: {
    ro: ['Skin fade', 'Tuns clasic', 'Barbă', 'Ras cu briciul', 'Prosop cald', 'Tuns copii', 'Design în păr'],
    ru: ['Скин-фейд', 'Классическая стрижка', 'Борода', 'Опасная бритва', 'Горячее полотенце', 'Детская стрижка', 'Узоры'],
  },

  facts: [
    { value: '45', label: { ro: 'de minute pentru fiecare client, fără grabă', ru: 'минут на каждого клиента, без спешки' } },
    { value: '3', label: { ro: 'frizeri, fiecare cu scaunul lui', ru: 'барбера, у каждого своё кресло' } },
    { value: '24/7', label: { ro: 'programare online, și la 23:00', ru: 'онлайн-запись, даже в 23:00' } },
  ],

  services: {
    title: { ro: 'Servicii și prețuri', ru: 'Услуги и цены' },
    text: { ro: 'Prețul e final: include spălat, aranjat și sfatul frizerului.', ru: 'Цена окончательная: мытьё, укладка и совет барбера включены.' },
    categories: [
      {
        name: { ro: 'Tuns', ru: 'Стрижка' },
        items: [
          { name: { ro: 'Tuns clasic', ru: 'Классическая стрижка' }, desc: { ro: 'Foarfecă și mașină, spălat și aranjat', ru: 'Ножницы и машинка, мытьё и укладка' }, duration: '45', price: '250' },
          { name: { ro: 'Skin fade', ru: 'Скин-фейд' }, desc: { ro: 'Degradé până la piele, contur cu briciul', ru: 'Переход до кожи, окантовка бритвой' }, duration: '50', price: '300' },
          { name: { ro: 'Tuns cu mașina', ru: 'Стрижка машинкой' }, desc: { ro: 'O singură lungime sau buzz cut', ru: 'Одна длина или базз-кат' }, duration: '25', price: '150' },
          { name: { ro: 'Tuns copii', ru: 'Детская стрижка' }, desc: { ro: 'Până la 12 ani', ru: 'До 12 лет' }, duration: '30', price: '180' },
        ],
      },
      {
        name: { ro: 'Barbă', ru: 'Борода' },
        items: [
          { name: { ro: 'Barbă', ru: 'Борода' }, desc: { ro: 'Formă, contur cu briciul, ulei', ru: 'Форма, окантовка бритвой, масло' }, duration: '30', price: '170' },
          { name: { ro: 'Ras cu prosop cald', ru: 'Бритьё с горячим полотенцем' }, desc: { ro: 'Ras complet cu briciul', ru: 'Полное бритьё опасной бритвой' }, duration: '40', price: '220' },
        ],
      },
      {
        name: { ro: 'Combo', ru: 'Комбо' },
        items: [
          { name: { ro: 'Tuns + barbă', ru: 'Стрижка + борода' }, desc: { ro: 'Cel mai cerut', ru: 'Самое популярное' }, duration: '75', price: '400', tag: { ro: 'Top', ru: 'Топ' } },
          { name: { ro: 'Tată + fiu', ru: 'Отец + сын' }, desc: { ro: 'Două tunsori, la rând', ru: 'Две стрижки подряд' }, duration: '75', price: '380' },
        ],
      },
      {
        name: { ro: 'Extra', ru: 'Дополнительно' },
        items: [
          { name: { ro: 'Design în păr', ru: 'Узор в волосах' }, desc: { ro: 'Linii și modele, la tuns', ru: 'Линии и узоры, к стрижке' }, duration: '15', price: '80' },
          { name: { ro: 'Camuflaj fire albe', ru: 'Камуфляж седины' }, desc: { ro: 'Natural, fără efect de vopsit', ru: 'Естественно, без эффекта окрашивания' }, duration: '20', price: '200' },
        ],
      },
    ],
    minutes: { ro: 'min', ru: 'мин' },
  },

  about: {
    label: { ro: 'Despre noi', ru: 'О нас' },
    title: { ro: 'O hală veche, tunsori de azi', ru: 'Старый цех, современные стрижки' },
    text: {
      ro: 'Am deschis OȚEL într-o fostă hală de fabrică: beton, oțel și lumină bună. Lucrăm doar cu programare, așa că nu aștepți pe hol și nimeni nu se grăbește.',
      ru: 'Мы открыли OȚEL в бывшем заводском цехе: бетон, сталь и хороший свет. Работаем только по записи, поэтому никто не ждёт в коридоре и никто не спешит.',
    },
    steps: [
      { title: { ro: 'Alegi ora', ru: 'Выбираете время' }, text: { ro: 'Online, în 30 de secunde, cu frizerul pe care îl vrei.', ru: 'Онлайн за 30 секунд, к нужному барберу.' } },
      { title: { ro: 'Stabilim tunsoarea', ru: 'Обсуждаем стрижку' }, text: { ro: 'Arată-ne o poză sau spune „ca data trecută”.', ru: 'Покажите фото или скажите «как в прошлый раз».' } },
      { title: { ro: 'Pleci aranjat', ru: 'Уходите с укладкой' }, text: { ro: 'Îți spunem ce produs să folosești acasă și când să revii.', ru: 'Подскажем, чем укладывать дома и когда прийти снова.' } },
    ],
  },

  team: {
    title: { ro: 'Echipa', ru: 'Команда' },
    book: { ro: 'Programează-te la', ru: 'Записаться к' },
    people: [
      { name: { ro: 'Andrei', ru: 'Андрей' }, role: { ro: 'Fondator · fade și design', ru: 'Основатель · фейды и узоры' }, years: '9', photo: 'https://images.unsplash.com/photo-1619233543112-fe382ff3693d?auto=format&fit=crop&w=700&q=80', instagram: '' },
      { name: { ro: 'Victor', ru: 'Виктор' }, role: { ro: 'Barbă și ras cu briciul', ru: 'Борода и бритьё' }, years: '6', photo: 'https://images.unsplash.com/photo-1582893561942-d61adcb2e534?auto=format&fit=crop&w=700&q=80', instagram: '' },
      { name: { ro: 'Mihai', ru: 'Михай' }, role: { ro: 'Tunsori clasice și copii', ru: 'Классика и детские стрижки' }, years: '4', photo: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80', instagram: '' },
    ],
    yearsLabel: { ro: 'ani de experiență', ru: 'лет опыта' },
  },

  gallery: {
    title: { ro: 'Lucrări', ru: 'Работы' },
    text: { ro: 'Toate din scaunele noastre. Mai multe pe Instagram.', ru: 'Все из наших кресел. Больше в Instagram.' },
    more: { ro: 'Vezi pe Instagram', ru: 'Смотреть в Instagram' },
  },

  beforeAfter: {
    title: { ro: 'Înainte și după', ru: 'До и после' },
    text: { ro: 'Trage de linie ca să vezi diferența.', ru: 'Потяните линию, чтобы увидеть разницу.' },
    before: { ro: 'Înainte', ru: 'До' },
    after: { ro: 'După', ru: 'После' },
  },

  membership: {
    title: { ro: 'Abonament lunar', ru: 'Ежемесячный абонемент' },
    text: { ro: 'Vii des? Plătești o dată pe lună și ai ora ta fixă.', ru: 'Приходите часто? Платите раз в месяц и получаете своё постоянное время.' },
    per: { ro: '/lună', ru: '/мес' },
    plans: [
      { name: 'Standard', price: '450', items: { ro: ['2 tunsori pe lună', 'Programare prioritară', 'Cafea din partea casei'], ru: ['2 стрижки в месяц', 'Приоритетная запись', 'Кофе от заведения'] } },
      { name: 'Standard + barbă', price: '700', featured: true, tag: { ro: 'Cel mai ales', ru: 'Выбирают чаще' }, items: { ro: ['2 tunsori + 2 bărbi pe lună', 'Programare prioritară', '10% la produse'], ru: ['2 стрижки + 2 бороды в месяц', 'Приоритетная запись', '10% на косметику'] } },
    ],
    note: { ro: 'Abonamentul se plătește la salon, în prima vizită din lună.', ru: 'Абонемент оплачивается в салоне при первом визите месяца.' },
    cta: { ro: 'Vreau abonament', ru: 'Хочу абонемент' },
  },

  reviews: {
    title: { ro: 'Ce spun clienții', ru: 'Что говорят клиенты' },
    rating: '4.9',                    // nota ta de pe Google
    count: '120',                     // numărul de recenzii de pe Google
    label: { ro: 'recenzii pe Google', ru: 'отзывов в Google' },
    link: '',                         // linkul spre recenziile tale de pe Google, sau ''
    items: [
      { name: { ro: 'Alexandru', ru: 'Александр' }, text: { ro: 'Cel mai curat fade din oraș. Și nu stai o oră să aștepți, intri la fix.', ru: 'Самый чистый фейд в городе. И не ждёшь час, заходишь ровно ко времени.' } },
      { name: { ro: 'Ion', ru: 'Ион' }, text: { ro: 'Vin cu fiul o dată la trei săptămâni. Victor are răbdare și cu cei mici.', ru: 'Хожу с сыном раз в три недели. У Виктора есть терпение и для малышей.' } },
      { name: { ro: 'Dmitri', ru: 'Дмитрий' }, text: { ro: 'Rasul cu prosop cald merită fiecare leu. Am ieșit ca nou.', ru: 'Бритьё с горячим полотенцем стоит каждого лея. Вышел как новый.' } },
    ],
  },

  gift: {
    title: { ro: 'Card cadou', ru: 'Подарочный сертификат' },
    text: { ro: 'Pentru tată, frate sau prieten. Îl iei de la salon sau îl primești pe WhatsApp, în format PDF.', ru: 'Для отца, брата или друга. Заберите в салоне или получите в WhatsApp в формате PDF.' },
    amounts: ['300', '500', '800'],
    cta: { ro: 'Comandă pe WhatsApp', ru: 'Заказать в WhatsApp' },
    message: { ro: 'Bună! Vreau un card cadou de ', ru: 'Здравствуйте! Хочу сертификат на ' },
    label: { ro: 'Card cadou', ru: 'Сертификат' },
  },

  rules: {
    title: { ro: 'Reguli de programare', ru: 'Правила записи' },
    items: [
      { ro: 'Dacă întârzii mai mult de 10 minute, s-ar putea să scurtăm serviciul sau să te reprogramăm.', ru: 'При опоздании больше чем на 10 минут мы можем сократить услугу или перенести запись.' },
      { ro: 'Anulezi sau muți gratuit cu cel puțin 3 ore înainte, din linkul de confirmare.', ru: 'Отменить или перенести бесплатно можно минимум за 3 часа, по ссылке из подтверждения.' },
      { ro: 'După două neprezentări, cerem un avans de 100 de lei la programare.', ru: 'После двух неявок мы просим предоплату 100 лей при записи.' },
      { ro: 'Copiii până la 12 ani vin însoțiți de un adult.', ru: 'Дети до 12 лет приходят со взрослым.' },
    ],
  },

  faq: {
    title: { ro: 'Întrebări frecvente', ru: 'Частые вопросы' },
    items: [
      { q: { ro: 'Pot veni fără programare?', ru: 'Можно прийти без записи?' }, a: { ro: 'Dacă e un scaun liber, da. Cel mai sigur e să-ți iei ora online: durează 30 de secunde.', ru: 'Если есть свободное кресло, да. Надёжнее записаться онлайн: это 30 секунд.' } },
      { q: { ro: 'Cât ține un fade?', ru: 'Сколько держится фейд?' }, a: { ro: 'Arată bine 2–3 săptămâni. Pentru un contur curat, mulți revin la 2 săptămâni.', ru: 'Хорошо выглядит 2–3 недели. Для чёткого контура многие приходят раз в 2 недели.' } },
      { q: { ro: 'Cum plătesc?', ru: 'Как оплатить?' }, a: { ro: 'Numerar, card sau transfer.', ru: 'Наличными, картой или переводом.' } },
      { q: { ro: 'Aveți parcare?', ru: 'Есть парковка?' }, a: { ro: 'Da, gratuită, în curtea halei.', ru: 'Да, бесплатная, во дворе цеха.' } },
    ],
  },

  contactSection: {
    title: { ro: 'Unde ne găsești', ru: 'Как нас найти' },
    hours: { ro: 'Program', ru: 'Часы работы' },
    closed: { ro: 'Închis', ru: 'Выходной' },
    openNow: { ro: 'Deschis acum · până la', ru: 'Открыто · до' },
    closedNow: { ro: 'Închis acum', ru: 'Сейчас закрыто' },
    route: { ro: 'Deschide în Google Maps', ru: 'Открыть в Google Maps' },
    days: { ro: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'], ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] },
  },

  footer: {
    text: { ro: 'Barbershop în Chișinău. Tuns, barbă și ras cu briciul, doar cu programare.', ru: 'Барбершоп в Кишинёве. Стрижка, борода и бритьё, только по записи.' },
    rights: { ro: 'Toate drepturile rezervate.', ru: 'Все права защищены.' },
    language: { ro: 'Limba', ru: 'Язык' },
  },
}
