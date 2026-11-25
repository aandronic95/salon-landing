/*
 * Mint clinic · randarea paginii din content.js
 * Același cod rulează în browser (deschizi index.html) și în build.mjs (HTML static pentru Google).
 * Textele obișnuite se schimbă în content.js, nu aici.
 */
(function (root) {
  'use strict'

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c] }) }

  function make(S, lang, base) {
    function L(v) {
      if (v == null) return ''
      if (typeof v === 'object' && !Array.isArray(v)) return v[lang] != null && v[lang] !== '' ? v[lang] : (v.ro != null ? v.ro : '')
      return v
    }
    function T(v) { return esc(L(v)) }
    function img(p) { return /^(https?:)?\/\//.test(p) || !p ? p : base + p }
    var cur = L(S.currency)
    var book = S.booking.url
    var wa = 'https://wa.me/' + S.contact.whatsapp
    var tel = 'tel:' + String(S.contact.phone).replace(/[^\d+]/g, '')
    var consultHref = S.consult && L(S.consult.label) ? wa + '?text=' + encodeURIComponent(L(S.consult.label)) : ''

    /* Toate tratamentele, după id, pentru „Ce mi se potrivește” și „Pregătire” */
    var byId = {}
    S.services.categories.forEach(function (c) { c.items.forEach(function (it) { if (it.id) byId[it.id] = it }) })

    function label(text) { return '<p class="label">' + T(text) + '</p>' }
    function bookBtn(text, cls) {
      return '<a class="btn ' + (cls || 'btn--accent') + '" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(text || S.booking.label) + '</a>'
    }
    function list(items, cls) { return '<ul' + (cls ? ' class="' + cls + '"' : '') + '>' + (items || []).map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul>' }
    function head2(lbl, title, text) {
      return '<div class="section__head">' + label(lbl) + '<h2 class="h2">' + T(title) + '</h2>' + (text ? '<p class="lead">' + T(text) + '</p>' : '') + '</div>'
    }

    var R = {}

    R.hero = function () {
      var h = S.hero
      return '<section class="hero" id="top"><div class="wrap hero__grid">' +
        '<div class="hero__copy">' +
          '<p class="label">' + T(h.kicker) + '</p>' +
          '<h1 class="hero__title">' + L(h.title).split('\n').map(function (l, i) { return '<span' + (i ? ' class="accent"' : '') + '>' + esc(l) + '</span>' }).join(' ') + '</h1>' +
          '<p class="hero__text">' + T(h.text) + '</p>' +
          '<div class="hero__actions">' + bookBtn() +
            (consultHref ? '<a class="btn btn--soft" href="' + esc(consultHref) + '" target="_blank" rel="noopener">' + T(S.consult.label) + '</a>' : '') + '</div>' +
          (S.consult && L(S.consult.note) ? '<p class="hero__note">' + T(S.consult.note) + '</p>' : '') +
          '<p class="status" data-open-status hidden></p>' +
        '</div>' +
        '<div class="hero__media"><div class="hero__arch"><img src="' + esc(img(S.images.hero)) + '" alt="" fetchpriority="high" width="1000" height="1250"></div>' +
          '<div class="hero__card"><span class="hero__dot" aria-hidden="true"></span><b>' + T(h.card.title) + '</b><span>' + T(h.card.text) + '</span></div>' +
        '</div>' +
      '</div></section>'
    }

    R.trust = function () {
      return '<section class="trust"><div class="wrap trust__grid">' + S.trust.map(function (t, i) {
        return '<div class="trust__item"><span class="trust__n">0' + (i + 1) + '</span><b>' + T(t.title) + '</b><span>' + T(t.text) + '</span></div>'
      }).join('') + '</div></section>'
    }

    R.finder = function () {
      var f = S.finder
      var chips = f.concerns.map(function (c, i) {
        return '<button type="button" class="concern" role="tab" id="cn-' + i + '" aria-controls="cp-' + i + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : '') + '>' + T(c.name) + '</button>'
      }).join('')
      var panels = f.concerns.map(function (c, i) {
        var recs = (c.treatments || []).map(function (id) { return byId[id] }).filter(Boolean)
        return '<div class="finder__panel" role="tabpanel" id="cp-' + i + '" aria-labelledby="cn-' + i + '"' + (i ? ' hidden' : '') + '>' +
          '<h3>' + T(c.name) + '</h3><p>' + T(c.text) + '</p>' +
          '<p class="finder__rec">' + T(f.recommended) + '</p><ul class="recs">' + recs.map(function (it) {
            return '<li><a href="#t-' + esc(it.id) + '"><b>' + T(it.name) + '</b><span>' + esc(it.duration) + ' ' + T(S.services.minutes) + ' · ' + esc(it.price) + ' ' + esc(cur) + '</span></a></li>'
          }).join('') + '</ul>' +
          '<div class="finder__actions">' + bookBtn() + (consultHref ? '<a class="btn btn--ghost" href="' + esc(consultHref) + '" target="_blank" rel="noopener">' + T(S.consult.label) + '</a>' : '') + '</div>' +
        '</div>'
      }).join('')
      return '<section class="section" id="potrivit"><div class="wrap">' + head2(S.nav.finder, f.title, f.text) +
        '<div class="finder"><div class="finder__list" role="tablist" aria-orientation="vertical">' + chips + '</div>' + panels + '</div>' +
        '</div></section>'
    }

    R.services = function () {
      var s = S.services
      var tabs = s.categories.map(function (c, i) {
        return '<button type="button" role="tab" id="st-' + i + '" aria-controls="sc-' + i + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : '') + '>' + T(c.name) + '</button>'
      }).join('')
      var panels = s.categories.map(function (c, i) {
        return '<div class="services__panel" role="tabpanel" id="sc-' + i + '" aria-labelledby="st-' + i + '"' + (i ? ' hidden' : '') + '><h3 class="sr">' + T(c.name) + '</h3>' +
          c.items.map(function (it) {
            return '<article class="treat" id="t-' + esc(it.id || '') + '">' +
              '<div class="treat__main"><h4>' + T(it.name) + (it.tag ? ' <em>' + T(it.tag) + '</em>' : '') + '</h4><p>' + T(it.desc) + '</p>' +
              (it.sessions ? '<p class="treat__sessions"><span>' + T(s.sessions) + ':</span> ' + T(it.sessions) + '</p>' : '') + '</div>' +
              '<div class="treat__side"><span class="treat__time">' + esc(it.duration) + ' ' + T(s.minutes) + '</span><span class="treat__price">' + esc(it.price) + ' <small>' + esc(cur) + '</small></span></div>' +
            '</article>'
          }).join('') + '</div>'
      }).join('')
      return '<section class="section section--tint" id="tratamente"><div class="wrap">' + head2(S.nav.services, s.title, s.text) +
        '<div class="tabs" role="tablist">' + tabs + '</div>' + panels +
        '<div class="center">' + bookBtn() + '</div></div></section>'
    }

    R.packages = function () {
      var p = S.packages
      return '<section class="section" id="pachete"><div class="wrap">' + head2(S.nav.packages, p.title, p.text) +
        '<div class="packs">' + p.items.map(function (x) {
          var save = x.old ? (+x.old - +x.price) : 0
          return '<article class="pack' + (x.featured ? ' pack--featured' : '') + '">' + (x.tag ? '<span class="pack__tag">' + T(x.tag) + '</span>' : '') +
            '<h3>' + T(x.name) + '</h3>' +
            '<p class="pack__price"><b>' + esc(x.price) + '</b> ' + esc(cur) + (x.per ? ' <span>' + T(x.per) + '</span>' : '') +
            (x.old ? ' <s>' + esc(x.old) + '</s>' : '') + '</p>' +
            (save > 0 ? '<p class="pack__save">' + T(p.save) + ' ' + save + ' ' + esc(cur) + '</p>' : '') +
            list(L(x.items), 'checks') + bookBtn(p.cta, x.featured ? 'btn--accent' : 'btn--ghost') + '</article>'
        }).join('') + '</div><p class="note">' + T(p.note) + '</p></div></section>'
    }

    R.results = function () {
      var r = S.results
      var same = S.images.before === S.images.after
      return '<section class="section section--tint"><div class="wrap results">' +
        '<div>' + head2(r.kicker || r.title, r.title, r.text) +
          '<ol class="timeline">' + r.steps.map(function (s) { return '<li><b>' + T(s.when) + '</b><span>' + T(s.text) + '</span></li>' }).join('') + '</ol>' +
          '<p class="note">' + T(r.disclaimer) + '</p></div>' +
        '<div class="ba" style="--pos:50%">' +
          '<img class="ba__img' + (same ? ' ba__img--before-demo' : '') + '" src="' + esc(img(S.images.before)) + '" alt="' + T(r.before) + '" loading="lazy" width="1100" height="1100">' +
          '<div class="ba__after"><img class="ba__img" src="' + esc(img(S.images.after)) + '" alt="' + T(r.after) + '" loading="lazy" width="1100" height="1100"></div>' +
          '<span class="ba__tag ba__tag--l">' + T(r.before) + '</span><span class="ba__tag ba__tag--r">' + T(r.after) + '</span>' +
          '<span class="ba__handle" aria-hidden="true"></span>' +
          '<input class="ba__range" type="range" min="0" max="100" value="50" aria-label="' + T(r.title) + '">' +
        '</div></div></section>'
    }

    R.prep = function () {
      var p = S.prep, lb = p.labels
      return '<section class="section" id="pregatire"><div class="wrap">' + head2(S.nav.prep, p.title, p.text) +
        '<div class="prep">' + p.items.map(function (x, i) {
          var t = byId[x.treatment]
          return '<details class="prep__item"' + (i === 0 ? ' open' : '') + '><summary>' + (t ? T(t.name) : esc(x.treatment)) + '</summary>' +
            '<div class="prep__cols">' +
              '<div><h4>' + T(lb.before) + '</h4>' + list(L(x.before), 'checks') + '</div>' +
              '<div><h4>' + T(lb.after) + '</h4>' + list(L(x.after), 'checks') + '</div>' +
              '<div class="prep__contra"><h4>' + T(lb.contra) + '</h4>' + list(L(x.contra), 'crosses') + '</div>' +
            '</div></details>'
        }).join('') + '</div><p class="note">' + T(p.disclaimer) + '</p></div></section>'
    }

    R.about = function () {
      var a = S.about
      return '<section class="section section--tint"><div class="wrap about">' +
        '<figure class="about__img"><img src="' + esc(img(S.images.about)) + '" alt="" loading="lazy" width="1200" height="900"></figure>' +
        '<div>' + label(a.label) + '<h2 class="h2">' + T(a.title) + '</h2><p class="lead">' + T(a.text) + '</p>' + list(L(a.points), 'checks') + '</div>' +
        '</div></section>'
    }

    R.team = function () {
      var t = S.team
      return '<section class="section" id="echipa"><div class="wrap">' + head2(t.kicker || t.title, t.title) +
        '<div class="team">' + t.people.map(function (p) {
          return '<article class="person"><div class="person__img"><img src="' + esc(img(p.photo)) + '" alt="' + T(p.name) + '" loading="lazy" width="700" height="875"></div>' +
            '<div class="person__body"><h3>' + T(p.name) + '</h3><p class="person__role">' + T(p.role) + (p.years ? ' · ' + esc(p.years) + ' ' + T(t.yearsLabel) : '') + '</p>' +
            '<p class="person__detail">' + T(p.detail) + '</p>' +
            '<a class="link" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(t.book) + ' ' + T(p.name) + ' →</a></div></article>'
        }).join('') + '</div></div></section>'
    }

    R.gallery = function () {
      var g = S.gallery
      return '<section class="section section--tint"><div class="wrap">' + head2(g.kicker || g.title, g.title, g.text) +
        '<div class="gallery">' + S.images.gallery.map(function (src, i) {
          return '<button type="button" class="gallery__item" data-full="' + esc(img(src)) + '" aria-label="' + T(g.title) + ' ' + (i + 1) + '"><img src="' + esc(img(src)) + '" alt="" loading="lazy" width="900" height="900"></button>'
        }).join('') + '</div>' +
        (S.contact.instagram ? '<div class="center"><a class="btn btn--ghost" href="' + esc(S.contact.instagram) + '" target="_blank" rel="noopener">' + T(g.more) + '</a></div>' : '') +
        '</div></section>'
    }

    R.reviews = function () {
      var r = S.reviews
      return '<section class="section"><div class="wrap">' +
        '<div class="section__head section__head--row"><div>' + label(r.kicker || r.title) + '<h2 class="h2">' + T(r.title) + '</h2></div>' +
        '<p class="rating"><b>' + esc(r.rating) + '</b><span class="stars" aria-hidden="true">★★★★★</span>' +
        (r.link ? '<a href="' + esc(r.link) + '" target="_blank" rel="noopener">' + esc(r.count) + ' ' + T(r.label) + '</a>' : '<span>' + esc(r.count) + ' ' + T(r.label) + '</span>') + '</p></div>' +
        '<div class="reviews">' + r.items.map(function (x) {
          return '<figure class="review"><blockquote>„' + T(x.text) + '”</blockquote><figcaption>' + T(x.name) + '</figcaption></figure>'
        }).join('') + '</div></div></section>'
    }

    R.gift = function () {
      var g = S.gift
      return '<section class="section"><div class="wrap"><div class="gift">' +
        '<div>' + label(g.kicker || g.title) + '<h2 class="h2">' + T(g.title) + '</h2><p class="lead">' + T(g.text) + '</p>' +
        '<div class="gift__amounts">' + g.amounts.map(function (a) {
          return '<a class="chip" href="' + esc(wa + '?text=' + encodeURIComponent(L(g.message) + a + ' ' + cur)) + '" target="_blank" rel="noopener">' + esc(a) + ' ' + esc(cur) + '</a>'
        }).join('') + '</div>' +
        '<a class="btn btn--accent" href="' + esc(wa + '?text=' + encodeURIComponent(L(g.message))) + '" target="_blank" rel="noopener">' + T(g.cta) + '</a></div>' +
        '<div class="giftcard" aria-hidden="true"><span class="giftcard__brand">' + esc(S.brand.name) + '</span><span class="giftcard__label">' + T(g.label) + '</span>' +
        '<span class="giftcard__amount">' + esc(g.amounts[1] || g.amounts[0]) + ' <small>' + esc(cur) + '</small></span></div>' +
        '</div></div></section>'
    }

    R.faq = function () {
      var f = S.faq
      return '<section class="section section--tint"><div class="wrap faq__wrap"><div>' + label(f.kicker || f.title) + '<h2 class="h2">' + T(f.title) + '</h2></div>' +
        '<div class="faq">' + f.items.map(function (x) { return '<details><summary>' + T(x.q) + '</summary><p>' + T(x.a) + '</p></details>' }).join('') + '</div></div></section>'
    }

    R.contact = function () {
      var c = S.contact, k = S.contactSection, days = L(k.days)
      var rows = S.hours.slice().sort(function (a, b) { return a.day - b.day }).map(function (h) {
        return '<tr data-day="' + h.day + '"><th>' + esc(days[h.day - 1]) + '</th><td>' + (h.open ? esc(h.open) + '–' + esc(h.close) : T(k.closed)) + '</td></tr>'
      }).join('')
      return '<section class="section" id="contact"><div class="wrap contact">' +
        '<div class="contact__card">' + label(S.nav.contact) + '<h2 class="h2">' + T(k.title) + '</h2>' +
          '<address><b>' + T(c.street) + ', ' + T(c.city) + '</b>' + (c.parking ? '<span>' + T(c.parking) + '</span>' : '') + '</address>' +
          '<p class="status" data-open-status hidden></p>' +
          '<table class="hours"><caption>' + T(k.hours) + '</caption>' + rows + '</table>' +
          '<div class="contact__btns">' + bookBtn() + '<a class="btn btn--ghost" href="' + esc(tel) + '">' + esc(c.phone) + '</a>' +
            (c.whatsapp ? '<a class="btn btn--ghost" href="' + esc(wa) + '" target="_blank" rel="noopener">WhatsApp</a>' : '') +
            (c.telegram ? '<a class="btn btn--ghost" href="https://t.me/' + esc(c.telegram) + '" target="_blank" rel="noopener">Telegram</a>' : '') + '</div>' +
          '<p class="contact__links">' + (c.mapLink ? '<a class="link" href="' + esc(c.mapLink) + '" target="_blank" rel="noopener">' + T(k.route) + ' →</a>' : '') +
            (c.email ? ' <a class="link link--muted" href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' : '') + '</p>' +
        '</div>' +
        '<div class="map">' + (c.mapEmbed ? '<iframe src="' + esc(c.mapEmbed) + '" title="' + T(k.title) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>' : '') + '</div>' +
        '</div></section>'
    }

    function langHref(l) { return base + (l === 'ro' ? '' : l + '/') }

    function header() {
      var ids = { finder: 'potrivit', services: 'tratamente', packages: 'pachete', prep: 'pregatire', contact: 'contact' }
      var links = Object.keys(ids).filter(function (k) { return S.sections.indexOf(k) > -1 && S.nav[k] })
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
        '</div><div class="wrap foot__bottom">© ' + (S.brand.since && S.brand.since != year ? esc(S.brand.since) + '–' : '') + '<span data-year>' + year + '</span> ' + esc(S.brand.name) + '. ' + T(S.footer.rights) + '</div></footer>' +
        '<nav class="dock" aria-label="' + T(S.booking.label) + '"><a href="' + esc(tel) + '">' + T(S.contactSection.call) + '</a>' +
        (S.contact.whatsapp ? '<a href="' + esc(wa) + '" target="_blank" rel="noopener">WhatsApp</a>' : '') +
        '<a class="dock__book" href="' + esc(book) + '" target="_blank" rel="noopener">' + T(S.booking.label) + '</a></nav>' +
        '<dialog class="lightbox"><img alt=""><button type="button" class="lightbox__close" aria-label="×">×</button></dialog>'
    }

    function body() {
      return header() + '<main>' + S.sections.filter(function (k) { return R[k] }).map(function (k) { return R[k]() }).join('') + '</main>' + footer()
    }

    function head() {
      var c = S.contact
      var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      var url = S.url + '/' + (lang === 'ro' ? '' : lang + '/')
      var offers = []
      S.services.categories.forEach(function (cat) {
        cat.items.forEach(function (it) {
          offers.push({ '@type': 'Offer', price: it.price, priceCurrency: S.contact.country === 'RO' ? 'RON' : 'MDL', itemOffered: { '@type': 'Service', name: L(it.name), description: L(it.desc) } })
        })
      })
      var ld = {
        '@context': 'https://schema.org', '@type': 'BeautySalon', name: S.brand.name + ' ' + L(S.brand.suffix), url: url,
        description: L(S.seo.description), telephone: c.phone, email: c.email || undefined, priceRange: S.seo.priceRange,
        image: /^https?:/.test(S.seo.image) ? S.seo.image : S.url + '/' + S.seo.image,
        address: { '@type': 'PostalAddress', streetAddress: L(c.street), addressLocality: L(c.city), addressCountry: c.country },
        openingHoursSpecification: S.hours.filter(function (h) { return h.open }).map(function (h) {
          return { '@type': 'OpeningHoursSpecification', dayOfWeek: days[h.day - 1], opens: h.open, closes: h.close }
        }),
        hasOfferCatalog: { '@type': 'OfferCatalog', name: L(S.services.title), itemListElement: offers },
        sameAs: [c.instagram].filter(Boolean),
        potentialAction: { '@type': 'ReserveAction', target: S.booking.url },
      }
      return { title: L(S.seo.title), description: L(S.seo.description), url: url, image: ld.image, jsonld: JSON.stringify(ld), accent: S.accent }
    }

    return { body: body, head: head }
  }

  root.ThemeRender = make
})(typeof window !== 'undefined' ? window : globalThis)
