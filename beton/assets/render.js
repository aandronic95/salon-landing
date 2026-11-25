/*
 * Beton barber · randarea paginii din content.js
 * Același cod rulează în browser (deschizi index.html) și în build.mjs (HTML static pentru Google).
 * Nu trebuie modificat pentru textele obișnuite: ele sunt toate în content.js.
 */
(function (root) {
  'use strict'

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c] }) }

  function make(S, lang, base) {
    /* Textul în limba curentă: acceptă și text simplu, și { ro, ru } */
    function L(v) {
      if (v == null) return ''
      if (typeof v === 'object' && !Array.isArray(v)) return v[lang] != null && v[lang] !== '' ? v[lang] : (v.ro != null ? v.ro : '')
      return v
    }
    function T(v) { return esc(L(v)) }
    /* Calea unei poze: linkurile complete rămân, căile locale primesc prefixul paginii */
    function img(p) { return /^(https?:)?\/\//.test(p) || !p ? p : base + p }
    function bw() { return S.photosBW ? ' is-bw' : '' }
    var cur = L(S.currency)
    var book = S.booking.url
    var wa = 'https://wa.me/' + S.contact.whatsapp
    var tel = 'tel:' + String(S.contact.phone).replace(/[^\d+]/g, '')
    var n = 0
    function label(id, text) {
      n += 1
      return '<p class="label"><span>' + (n < 10 ? '0' : '') + n + '</span>' + T(text) + '</p>'
    }
    function bookBtn(text, cls) {
      return '<a class="btn ' + (cls || 'btn--accent') + '" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(text || S.booking.label) + ' <i aria-hidden="true">→</i></a>'
    }
    function list(items) { return (items || []).map(function (x) { return '<li>' + T(x) + '</li>' }).join('') }

    var R = {}

    R.hero = function () {
      var h = S.hero
      return '<section class="hero" id="top">' +
        '<img class="hero__img' + bw() + '" src="' + esc(img(S.images.hero)) + '" alt="" fetchpriority="high" width="1800" height="1200">' +
        '<div class="hero__shade" aria-hidden="true"></div><div class="grid-lines" aria-hidden="true"></div>' +
        '<div class="wrap hero__inner">' +
          '<p class="label label--hero"><span>00</span>' + T(h.kicker) + '</p>' +
          '<h1 class="hero__title">' + L(h.title).split('\n').map(function (line, i) {
            return '<span class="hero__line' + (i ? ' hero__line--accent' : '') + '">' + esc(line) + '</span>'
          }).join(' ') + '</h1>' +
          '<p class="hero__text">' + T(h.text) + '</p>' +
          '<div class="hero__actions">' + bookBtn() +
            '<a class="btn btn--ghost" href="' + esc(tel) + '">' + T(h.call) + ' ' + esc(S.contact.phone) + '</a></div>' +
          '<p class="status" data-open-status hidden></p>' +
        '</div></section>'
    }

    R.ticker = function () {
      var items = L(S.ticker) || []
      var row = items.map(function (x) { return '<span>' + esc(x) + '</span>' }).join('')
      return '<div class="ticker" aria-hidden="true"><div class="ticker__track">' + row + row + '</div></div>'
    }

    R.facts = function () {
      return '<section class="facts"><div class="wrap facts__grid">' + S.facts.map(function (f) {
        return '<div class="fact"><b>' + esc(f.value) + '</b><span>' + T(f.label) + '</span></div>'
      }).join('') + '</div></section>'
    }

    R.services = function () {
      var s = S.services
      var tabs = s.categories.map(function (c, i) {
        return '<button type="button" role="tab" id="tab-' + i + '" aria-controls="cat-' + i + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : '') + '>' + T(c.name) + '</button>'
      }).join('')
      var panels = s.categories.map(function (c, i) {
        return '<div class="menu" role="tabpanel" id="cat-' + i + '" aria-labelledby="tab-' + i + '"' + (i ? ' hidden' : '') + '>' +
          '<h3 class="menu__cat">' + T(c.name) + '</h3><ul>' + c.items.map(function (it) {
            return '<li class="menu__row"><div class="menu__name"><b>' + T(it.name) + '</b>' + (it.tag ? '<em>' + T(it.tag) + '</em>' : '') +
              '<span>' + T(it.desc) + '</span></div><span class="menu__dots" aria-hidden="true"></span>' +
              '<span class="menu__time">' + esc(it.duration) + ' ' + T(s.minutes) + '</span>' +
              '<span class="menu__price">' + esc(it.price) + ' <small>' + esc(cur) + '</small></span></li>'
          }).join('') + '</ul></div>'
      }).join('')
      return '<section class="section section--light" id="servicii"><div class="wrap">' +
        label('services', S.nav.services) +
        '<div class="section__head"><h2 class="h2">' + T(s.title) + '</h2><p>' + T(s.text) + '</p></div>' +
        '<div class="tabs" role="tablist">' + tabs + '</div>' + panels +
        '<div class="center">' + bookBtn(null, 'btn--dark') + '</div>' +
        '</div></section>'
    }

    R.about = function () {
      var a = S.about
      return '<section class="section about"><div class="wrap about__grid">' +
        '<figure class="about__img"><img class="' + bw().trim() + '" src="' + esc(img(S.images.about)) + '" alt="" loading="lazy" width="1200" height="900"></figure>' +
        '<div>' + label('about', a.label) +
          '<h2 class="h2">' + T(a.title) + '</h2><p class="lead">' + T(a.text) + '</p>' +
          '<ol class="steps">' + a.steps.map(function (st, i) {
            return '<li><b>' + (i + 1) + '</b><div><h3>' + T(st.title) + '</h3><p>' + T(st.text) + '</p></div></li>'
          }).join('') + '</ol></div>' +
        '</div></section>'
    }

    R.team = function () {
      var t = S.team
      return '<section class="section" id="echipa"><div class="wrap">' + label('team', S.nav.team) +
        '<h2 class="h2">' + T(t.title) + '</h2><div class="team">' + t.people.map(function (p) {
          return '<article class="person"><div class="person__img"><img class="' + bw().trim() + '" src="' + esc(img(p.photo)) + '" alt="' + T(p.name) + '" loading="lazy" width="700" height="875">' +
            (p.years ? '<span class="person__years"><b>' + esc(p.years) + '</b> ' + T(t.yearsLabel) + '</span>' : '') + '</div>' +
            '<h3 class="person__name">' + T(p.name) + '</h3><p class="person__role">' + T(p.role) + '</p>' +
            '<a class="link" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(t.book) + ' ' + T(p.name) + ' →</a>' +
            (p.instagram ? ' <a class="link link--muted" href="' + esc(p.instagram) + '" target="_blank" rel="noopener">Instagram</a>' : '') +
            '</article>'
        }).join('') + '</div></div></section>'
    }

    R.gallery = function () {
      var g = S.gallery
      return '<section class="section section--panel" id="lucrari"><div class="wrap">' + label('gallery', S.nav.gallery) +
        '<div class="section__head"><h2 class="h2">' + T(g.title) + '</h2><p>' + T(g.text) + '</p></div>' +
        '<div class="gallery">' + S.images.gallery.map(function (src, i) {
          return '<button type="button" class="gallery__item" data-full="' + esc(img(src)) + '" aria-label="' + T(g.title) + ' ' + (i + 1) + '">' +
            '<img class="' + bw().trim() + '" src="' + esc(img(src)) + '" alt="" loading="lazy" width="900" height="900"></button>'
        }).join('') + '</div>' +
        (S.contact.instagram ? '<div class="center"><a class="btn btn--ghost" href="' + esc(S.contact.instagram) + '" target="_blank" rel="noopener">' + T(g.more) + '</a></div>' : '') +
        '</div></section>'
    }

    R.beforeAfter = function () {
      var b = S.beforeAfter
      var same = S.images.before === S.images.after
      return '<section class="section"><div class="wrap ba__wrap">' +
        '<div>' + label('ba', b.title) + '<h2 class="h2">' + T(b.title) + '</h2><p class="lead">' + T(b.text) + '</p></div>' +
        '<div class="ba" style="--pos:50%">' +
          '<img class="ba__img' + (same ? ' ba__img--before-demo' : '') + bw() + '" src="' + esc(img(S.images.before)) + '" alt="' + T(b.before) + '" loading="lazy" width="1100" height="825">' +
          '<div class="ba__after"><img class="ba__img' + bw() + '" src="' + esc(img(S.images.after)) + '" alt="' + T(b.after) + '" loading="lazy" width="1100" height="825"></div>' +
          '<span class="ba__tag ba__tag--l">' + T(b.before) + '</span><span class="ba__tag ba__tag--r">' + T(b.after) + '</span>' +
          '<span class="ba__handle" aria-hidden="true"></span>' +
          '<input class="ba__range" type="range" min="0" max="100" value="50" aria-label="' + T(b.title) + '">' +
        '</div></div></section>'
    }

    R.membership = function () {
      var m = S.membership
      return '<section class="section section--panel" id="abonament"><div class="wrap">' + label('membership', S.nav.membership) +
        '<div class="section__head"><h2 class="h2">' + T(m.title) + '</h2><p>' + T(m.text) + '</p></div>' +
        '<div class="plans">' + m.plans.map(function (p) {
          return '<article class="plan' + (p.featured ? ' plan--featured' : '') + '">' + (p.tag ? '<span class="plan__tag">' + T(p.tag) + '</span>' : '') +
            '<h3>' + T(p.name) + '</h3><p class="plan__price"><b>' + esc(p.price) + '</b> ' + esc(cur) + ' <span>' + T(m.per) + '</span></p>' +
            '<ul>' + list(L(p.items)) + '</ul>' + bookBtn(m.cta, p.featured ? 'btn--accent' : 'btn--ghost') + '</article>'
        }).join('') + '</div><p class="note">' + T(m.note) + '</p></div></section>'
    }

    R.reviews = function () {
      var r = S.reviews
      var head = '<p class="rating"><b>' + esc(r.rating) + '</b><span class="stars" aria-hidden="true">★★★★★</span>' +
        (r.link ? '<a href="' + esc(r.link) + '" target="_blank" rel="noopener">' + esc(r.count) + ' ' + T(r.label) + '</a>' : '<span>' + esc(r.count) + ' ' + T(r.label) + '</span>') + '</p>'
      return '<section class="section"><div class="wrap">' + label('reviews', r.title) +
        '<div class="section__head"><h2 class="h2">' + T(r.title) + '</h2>' + head + '</div>' +
        '<div class="reviews">' + r.items.map(function (x) {
          return '<figure class="review"><blockquote>„' + T(x.text) + '”</blockquote><figcaption>' + esc(x.name) + '</figcaption></figure>'
        }).join('') + '</div></div></section>'
    }

    R.gift = function () {
      var g = S.gift
      return '<section class="section section--accent"><div class="wrap gift">' +
        '<div>' + label('gift', g.title) + '<h2 class="h2">' + T(g.title) + '</h2><p class="lead">' + T(g.text) + '</p>' +
        '<div class="gift__amounts">' + g.amounts.map(function (a) {
          return '<a class="chip" href="' + esc(wa + '?text=' + encodeURIComponent(L(g.message) + a + ' ' + cur)) + '" target="_blank" rel="noopener">' + esc(a) + ' ' + esc(cur) + '</a>'
        }).join('') + '</div>' +
        '<a class="btn btn--dark" href="' + esc(wa + '?text=' + encodeURIComponent(L(g.message))) + '" target="_blank" rel="noopener">' + T(g.cta) + ' <i aria-hidden="true">→</i></a></div>' +
        '<div class="giftcard" aria-hidden="true"><span class="giftcard__brand">' + esc(S.brand.name) + '</span><span class="giftcard__label">' + T(g.label) + '</span>' +
        '<span class="giftcard__amount">' + esc(g.amounts[1] || g.amounts[0]) + ' <small>' + esc(cur) + '</small></span><span class="giftcard__stripe"></span></div>' +
        '</div></section>'
    }

    R.rules = function () {
      var r = S.rules
      return '<section class="section"><div class="wrap rules">' + '<div>' + label('rules', r.title) + '<h2 class="h2">' + T(r.title) + '</h2></div>' +
        '<ol class="rules__list">' + r.items.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ol></div></section>'
    }

    R.faq = function () {
      var f = S.faq
      return '<section class="section section--panel" id="intrebari"><div class="wrap faq__wrap">' + '<div>' + label('faq', f.title) + '<h2 class="h2">' + T(f.title) + '</h2></div>' +
        '<div class="faq">' + f.items.map(function (x) {
          return '<details><summary>' + T(x.q) + '</summary><p>' + T(x.a) + '</p></details>'
        }).join('') + '</div></div></section>'
    }

    R.contact = function () {
      var c = S.contact, k = S.contactSection, days = L(k.days)
      var rows = S.hours.slice().sort(function (a, b) { return a.day - b.day }).map(function (h) {
        return '<tr data-day="' + h.day + '"><th>' + esc(days[h.day - 1]) + '</th><td>' + (h.open ? esc(h.open) + '–' + esc(h.close) : T(k.closed)) + '</td></tr>'
      }).join('')
      return '<section class="section contact" id="contact"><div class="wrap contact__grid">' +
        '<div>' + label('contact', S.nav.contact) + '<h2 class="h2">' + T(k.title) + '</h2>' +
          '<address><b>' + T(c.street) + ', ' + T(c.city) + '</b>' + (c.parking ? '<span>' + T(c.parking) + '</span>' : '') + '</address>' +
          '<p class="status" data-open-status hidden></p>' +
          '<h3 class="contact__h">' + T(k.hours) + '</h3><table class="hours">' + rows + '</table>' +
          '<div class="contact__btns">' + bookBtn() +
            '<a class="btn btn--ghost" href="' + esc(tel) + '">' + esc(c.phone) + '</a>' +
            (c.whatsapp ? '<a class="btn btn--ghost" href="' + esc(wa) + '" target="_blank" rel="noopener">WhatsApp</a>' : '') +
            (c.telegram ? '<a class="btn btn--ghost" href="https://t.me/' + esc(c.telegram) + '" target="_blank" rel="noopener">Telegram</a>' : '') +
          '</div>' +
          '<p class="contact__links">' + (c.mapLink ? '<a class="link" href="' + esc(c.mapLink) + '" target="_blank" rel="noopener">' + T(k.route) + ' →</a>' : '') +
          (c.email ? ' <a class="link link--muted" href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' : '') + '</p>' +
        '</div>' +
        '<div class="map">' + (c.mapEmbed ? '<iframe src="' + esc(c.mapEmbed) + '" title="' + T(k.title) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>' : '') + '</div>' +
        '</div></section>'
    }

    function langHref(l) { return base + (l === 'ro' ? '' : l + '/') }

    function header() {
      var links = ['services', 'team', 'gallery', 'membership', 'contact'].filter(function (k) { return S.sections.indexOf(k === 'contact' ? 'contact' : k) > -1 })
      var ids = { services: 'servicii', team: 'echipa', gallery: 'lucrari', membership: 'abonament', contact: 'contact' }
      var langs = S.languages.length > 1 ? '<nav class="langs" aria-label="' + T(S.footer.language) + '">' + S.languages.map(function (l) {
        return '<a href="' + langHref(l) + '" hreflang="' + l + '" lang="' + l + '"' + (l === lang ? ' aria-current="true"' : '') + '>' + l.toUpperCase() + '</a>'
      }).join('') + '</nav>' : ''
      return '<header class="top" data-top><div class="wrap top__inner">' +
        '<a class="logo" href="#top"><b>' + esc(S.brand.name) + '</b><span>' + T(S.brand.suffix) + '</span></a>' +
        '<nav class="nav" id="nav" aria-label="Meniu">' + links.map(function (k) { return '<a href="#' + ids[k] + '">' + T(S.nav[k]) + '</a>' }).join('') + '</nav>' +
        langs + '<a class="btn btn--accent btn--sm top__book" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(S.booking.label) + '</a>' +
        '<button class="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="Meniu"><span></span><span></span></button>' +
        '</div></header>'
    }

    function footer() {
      var year = new Date().getFullYear()
      return '<footer class="foot"><div class="wrap foot__grid">' +
        '<div><a class="logo" href="#top"><b>' + esc(S.brand.name) + '</b><span>' + T(S.brand.suffix) + '</span></a><p>' + T(S.footer.text) + '</p></div>' +
        '<div class="foot__links"><a href="' + esc(tel) + '">' + esc(S.contact.phone) + '</a>' +
          (S.contact.instagram ? '<a href="' + esc(S.contact.instagram) + '" target="_blank" rel="noopener">Instagram</a>' : '') +
          (S.contact.whatsapp ? '<a href="' + esc(wa) + '" target="_blank" rel="noopener">WhatsApp</a>' : '') + '</div>' +
        '</div><div class="wrap foot__bottom"><span>© ' + (S.brand.since && S.brand.since != year ? esc(S.brand.since) + '–' : '') + '<span data-year>' + year + '</span> ' + esc(S.brand.name) + '. ' + T(S.footer.rights) + '</span></div></footer>' +
        '<nav class="dock" aria-label="' + T(S.booking.label) + '"><a href="' + esc(tel) + '">' + T(S.hero.call) + '</a>' +
        (S.contact.whatsapp ? '<a href="' + esc(wa) + '" target="_blank" rel="noopener">WhatsApp</a>' : '') +
        '<a class="dock__book" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(S.booking.label) + '</a></nav>' +
        '<dialog class="lightbox"><img alt=""><button type="button" class="lightbox__close" aria-label="×">×</button></dialog>'
    }

    function body() {
      n = 0
      return header() + '<main>' + S.sections.filter(function (k) { return R[k] }).map(function (k) { return R[k]() }).join('') + '</main>' + footer()
    }

    /* Date pentru <head>: titlu, descriere, JSON-LD pentru Google */
    function head() {
      var c = S.contact
      var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      var url = S.url + '/' + (lang === 'ro' ? '' : lang + '/')
      var ld = {
        '@context': 'https://schema.org', '@type': 'BarberShop', name: S.brand.name + ' ' + L(S.brand.suffix), url: url,
        description: L(S.seo.description), telephone: c.phone, email: c.email || undefined, priceRange: S.seo.priceRange,
        image: /^https?:/.test(S.seo.image) ? S.seo.image : S.url + '/' + S.seo.image,
        address: { '@type': 'PostalAddress', streetAddress: L(c.street), addressLocality: L(c.city), addressCountry: c.country },
        openingHoursSpecification: S.hours.filter(function (h) { return h.open }).map(function (h) {
          return { '@type': 'OpeningHoursSpecification', dayOfWeek: days[h.day - 1], opens: h.open, closes: h.close }
        }),
        sameAs: [c.instagram].filter(Boolean),
        potentialAction: { '@type': 'ReserveAction', target: S.booking.url },
      }
      return { title: L(S.seo.title), description: L(S.seo.description), url: url, image: ld.image, jsonld: JSON.stringify(ld), accent: S.accent }
    }

    return { body: body, head: head }
  }

  root.BetonRender = make
})(typeof window !== 'undefined' ? window : globalThis)
