/* Bara demo + watermark comune pentru toate temele de pe salon.devhub.md */
(function () {
  var STORE = 'https://stan.store/devhubmd';
  var THEMES = [
    { id: 'nude', name: 'Editorial nude', ro: 'Coafură', ru: 'Причёски', buy: STORE + '/p/site-pentru-salon-de-coafur--editorial-nude' },
    { id: 'noir', name: 'Noir barber', ro: 'Barbershop', ru: 'Барбершоп', buy: STORE + '/p/site-pentru-frizerie--noir-barber' },
    { id: 'pop', name: 'Color pop', ro: 'Unghii', ru: 'Ногти', buy: STORE + '/p/site-pentru-studio-de-unghii--color-pop' },
    { id: 'glam', name: 'Bordo glam', ro: 'Make-up', ru: 'Макияж', buy: STORE + '/p/site-pentru-makeup-i-mirese--bordo-glam' },
    { id: 'lash', name: 'Soft lash', ro: 'Gene și sprâncene', ru: 'Ресницы и брови', buy: STORE }
  ];
  var T = {
    ro: { all: 'Toate temele', demo: 'Demo', buy: 'Cumpără acest site', buyShort: 'Cumpără', wm: 'DEMO · Agendă Plină', nav: 'Alte teme demo' },
    ru: { all: 'Все темы', demo: 'Демо', buy: 'Купить этот сайт', buyShort: 'Купить', wm: 'DEMO · Agendă Plină', nav: 'Другие демо-темы' }
  };
  var parts = location.pathname.split('/').filter(Boolean);
  var cur = parts[0];
  var lang = parts[1] === 'ru' ? 'ru' : 'ro';
  var t = T[lang];
  var theme = THEMES.filter(function (x) { return x.id === cur; })[0] || THEMES[0];
  var H = 44;

  var css =
    ':root{--demo-h:' + H + 'px}html{scroll-padding-top:calc(' + H + 'px + 72px)}' +
    '.dk-bar{position:sticky;top:0;z-index:2147483000;height:' + H + 'px;display:flex;align-items:center;gap:10px;padding:0 12px;background:#0f0f10;color:#f4f4f5;font:500 13px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;border-bottom:1px solid #27272a;box-sizing:border-box}' +
    '.dk-bar *{box-sizing:border-box}.dk-bar a{color:inherit;text-decoration:none}' +
    '.dk-home{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;padding:7px 10px;border-radius:8px;color:#d4d4d8}.dk-home:hover{background:#27272a;color:#fff}' +
    '.dk-tag{padding:4px 8px;border-radius:6px;background:#fafafa;color:#0f0f10;font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase}' +
    '.dk-themes{flex:1;min-width:0;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;mask-image:linear-gradient(90deg,#000 92%,transparent)}.dk-themes::-webkit-scrollbar{display:none}' +
    '.dk-pill{flex:none;display:inline-flex;align-items:center;gap:6px;padding:7px 11px;border-radius:999px;border:1px solid #3f3f46;color:#d4d4d8;white-space:nowrap;transition:background .15s,border-color .15s}' +
    '.dk-pill:hover{border-color:#a1a1aa;color:#fff}.dk-pill[aria-current=page]{background:#fafafa;border-color:#fafafa;color:#0f0f10}' +
    '.dk-pill small{font-size:11px;opacity:.7;font-weight:400}' +
    '.dk-buy{flex:none;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;background:#fafafa;color:#0f0f10!important;font-weight:600;white-space:nowrap}.dk-buy:hover{background:#e4e4e7}' +
    '.dk-short{display:none}@media (max-width:640px){.dk-home span,.dk-tag,.dk-pill small,.dk-long{display:none}.dk-short{display:inline}}' +
    '.dk-wm{position:fixed;inset:0;z-index:2147482999;pointer-events:none;background-image:url("data:image/svg+xml,' +
    encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="420" height="260"><text x="40" y="150" transform="rotate(-24 210 130)" font-family="system-ui,sans-serif" font-size="15" font-weight="600" letter-spacing="2" fill="rgb(128,128,128)" fill-opacity="0.09">' + t.wm + '</text></svg>') +
    '")}@media print{.dk-bar,.dk-wm{display:none}}';

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function mount() {
    if (document.querySelector('.dk-bar')) return;
    document.head.appendChild(el('style', { id: 'dk-style' }, css));
    var bar = el('nav', { 'class': 'dk-bar', 'aria-label': t.nav });
    bar.appendChild(el('a', { 'class': 'dk-home', href: lang === 'ru' ? '/ru/' : '/' },
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg><span>' + t.all + '</span>'));
    bar.appendChild(el('span', { 'class': 'dk-tag' }, t.demo));
    var list = el('div', { 'class': 'dk-themes' });
    THEMES.forEach(function (x) {
      var a = el('a', { 'class': 'dk-pill', href: '/' + x.id + '/' + (lang === 'ru' ? 'ru/' : '') }, x.name + ' <small>' + x[lang] + '</small>');
      if (x.id === theme.id) a.setAttribute('aria-current', 'page');
      list.appendChild(a);
    });
    bar.appendChild(list);
    bar.appendChild(el('a', { 'class': 'dk-buy', href: theme.buy, target: '_blank', rel: 'noopener' },
      '<span class="dk-long">' + t.buy + '</span><span class="dk-short">' + t.buyShort + '</span> →'));
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.appendChild(el('div', { 'class': 'dk-wm', 'aria-hidden': 'true' }));
    var active = list.querySelector('[aria-current]');
    if (active && active.scrollIntoView) list.scrollLeft = active.offsetLeft - 40;
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
