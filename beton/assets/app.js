/*
 * Beton barber · interacțiunile din pagină
 * Dacă pagina nu e generată de build.mjs, o construiește aici, din content.js.
 */
(function () {
  'use strict'
  var S = window.SITE
  var html = document.documentElement
  var lang = html.lang === 'ru' ? 'ru' : 'ro'
  var base = html.getAttribute('data-base') || ''
  var app = document.getElementById('app')
  if (!S || !app) return

  html.style.setProperty('--accent', S.accent)
  /* Pagina se construiește mereu din content.js, ca modificările să se vadă imediat.
     HTML-ul generat de build.mjs rămâne pentru Google și pentru vizitatorii fără JavaScript. */
  var page = window.BetonRender(S, lang, base)
  app.innerHTML = page.body()
  var h = page.head()
  document.title = h.title
  var d = document.querySelector('meta[name="description"]')
  if (d) d.setAttribute('content', h.description)
  html.classList.add('ready')

  var $ = function (s, r) { return (r || document).querySelector(s) }
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)) }

  /* Meniul de pe telefon */
  var burger = $('.burger'), nav = $('#nav')
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') !== 'true'
      burger.setAttribute('aria-expanded', String(open))
      html.classList.toggle('nav-open', open)
    })
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () { burger.setAttribute('aria-expanded', 'false'); html.classList.remove('nav-open') })
    })
  }

  /* Bara de sus primește fundal după primul scroll */
  var top = $('[data-top]')
  function onScroll() { if (top) top.classList.toggle('is-stuck', window.scrollY > 24) }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll()

  /* Taburile de la servicii, cu săgeți de la tastatură */
  var tabs = $$('[role="tab"]')
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t
      x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1
      var p = document.getElementById(x.getAttribute('aria-controls'))
      if (p) p.hidden = !on
    })
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t) })
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
      if (!k) return
      e.preventDefault()
      var nx = tabs[(i + k + tabs.length) % tabs.length]; select(nx); nx.focus()
    })
  })

  /* Înainte și după */
  $$('.ba').forEach(function (ba) {
    var r = $('.ba__range', ba)
    if (r) r.addEventListener('input', function () { ba.style.setProperty('--pos', r.value + '%') })
  })

  /* Galeria se deschide mare */
  var box = $('.lightbox')
  if (box && box.showModal) {
    var big = $('img', box)
    $$('.gallery__item').forEach(function (b) {
      b.addEventListener('click', function () { big.src = b.getAttribute('data-full').replace(/w=\d+/, 'w=1600'); box.showModal() })
    })
    box.addEventListener('click', function (e) { if (e.target === box || e.target.closest('.lightbox__close')) box.close() })
  }

  /* „Deschis acum” după programul din content.js (ora locală a vizitatorului) */
  var k = S.contactSection
  function L(v) { return v && typeof v === 'object' ? (v[lang] || v.ro) : v }
  function mins(t) { var p = String(t).split(':'); return +p[0] * 60 + +(p[1] || 0) }
  var now = new Date(), day = now.getDay() || 7, m = now.getHours() * 60 + now.getMinutes()
  var today = S.hours.filter(function (x) { return x.day === day })[0]
  var open = today && today.open && m >= mins(today.open) && m < mins(today.close)
  $$('[data-open-status]').forEach(function (el) {
    el.textContent = open ? L(k.openNow) + ' ' + today.close : L(k.closedNow)
    el.classList.toggle('status--open', !!open)
    el.hidden = false
  })
  $$('.hours tr[data-day="' + day + '"]').forEach(function (tr) { tr.classList.add('is-today') })
  $$('[data-year]').forEach(function (el) { el.textContent = now.getFullYear() })

  /* Apariție la scroll (se oprește dacă vizitatorul a cerut mai puțină mișcare) */
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { rootMargin: '0px 0px -10% 0px' })
    $$('.section .h2, .fact, .menu__row, .person, .gallery__item, .plan, .review, .steps li, .rules__list li, .faq details').forEach(function (el, i) {
      el.classList.add('rv'); el.style.setProperty('--d', (i % 4) * 70 + 'ms'); io.observe(el)
    })
  }
})()
