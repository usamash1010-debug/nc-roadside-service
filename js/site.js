/* ============================================================
   NC ROADSIDE SERVICE — shared site behaviour
   Renders header + footer, handles nav, reveals, form.
   ============================================================ */
(function () {
  const PHONE = "(704) 594-5353";
  const TEL = "+17045945353";

  const NAV = [
    { label: "Home", href: "index.html", n: "01" },
    { label: "Services", href: "services.html", n: "02" },
    { label: "Service Areas", href: "service-areas.html", n: "03" },
    { label: "About", href: "about.html", n: "04" },
    { label: "Contact", href: "contact.html", n: "05" },
  ];

  const AREAS = ["Charlotte","Belmont","Concord","Gastonia","Matthews","Mint Hill",
    "Pineville","Huntersville","Harrisburg","Stallings","Weddington","Salisbury"];

  const SERVICES = ["Jump Starts & Battery","Flat Tire Change","Fuel Delivery","Lockout Service",
    "Winch-Out & Recovery","Mobile Tire Repair","Mobile Mechanic","Fleet & Commercial"];

  // crafted inline icons (no emoji)
  const I = {
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2.1Z"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  };

  function currentFile() {
    const p = location.pathname.split("/").pop();
    return p && p.length ? p : "index.html";
  }

  function buildHeader() {
    const cur = currentFile();
    const isServiceDetail = cur.indexOf("service-") === 0 && cur !== "service-areas.html";
    const isActive = (href) => href === cur || (href === "services.html" && isServiceDetail);
    const links = NAV.map(x => `<a href="${x.href}" class="${isActive(x.href) ? "active" : ""}">${x.label}</a>`).join("");
    const drawerLinks = NAV.map(x => `<a href="${x.href}"><span>${x.n}</span>${x.label}</a>`).join("");

    return `
    <div class="utility">
      <div class="wrap">
        <span class="live u-hide"><span class="led"></span> DISPATCH ONLINE · 24/7 EMERGENCY RESPONSE</span>
        <div class="u-right">
          <span class="u-hide">CHARLOTTE METRO · NC</span>
          <a href="tel:${TEL}">${PHONE}</a>
        </div>
      </div>
    </div>
    <header class="site-header" id="siteHeader">
      <div class="wrap">
        <a href="index.html" class="brand">
          <img class="mark" src="assets/logo.png" alt="NC Roadside Service LLC logo">
          <span class="bt"><b>NC Roadside Service<i>LLC</i></b></span>
        </a>
        <nav class="nav-main">${links}</nav>
        <div class="header-cta">
          <a class="header-phone" href="tel:${TEL}"><b>${PHONE}</b></a>
          <a href="contact.html" class="btn btn-amber">Request Service</a>
          <button class="menu-btn" id="menuBtn" aria-label="Open menu">${I.menu}</button>
        </div>
      </div>
    </header>
    <div class="drawer" id="drawer">
      <div class="d-top">
        <a href="index.html" class="brand"><img class="mark" src="assets/logo.png" alt=""><span class="bt"><b>NC Roadside Service<i>LLC</i></b></span></a>
        <button class="d-close" id="drawerClose" aria-label="Close menu">&times;</button>
      </div>
      <nav>${drawerLinks}</nav>
      <div class="d-cta"><a href="tel:${TEL}" class="btn btn-amber btn-lg btn-block">${I.phone} Call ${PHONE}</a></div>
    </div>`;
  }

  function buildFooter() {
    const y = new Date().getFullYear();
    const svc = SERVICES.map(s => `<li><a href="services.html">${s}</a></li>`).join("");
    const ar = AREAS.map(a => `<li><a href="service-areas.html">${a}, NC</a></li>`).join("");
    return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="brand">
              <img class="mark" src="assets/logo.png" alt="NC Roadside Service LLC">
              <span class="bt"><b>NC Roadside Service<i>LLC</i></b></span>
            </a>
            <p>24/7 emergency roadside assistance for drivers and fleets across the greater Charlotte metro. Fast, fair, and always one call away.</p>
          </div>
          <div class="foot-col">
            <h4>Services</h4>
            <ul>${svc}</ul>
          </div>
          <div class="foot-col">
            <h4>Service Areas</h4>
            <ul>${ar}</ul>
          </div>
          <div class="foot-col">
            <h4>Contact</h4>
            <div class="foot-nap">
              <span class="np">${I.phone}<span><b><a href="tel:${TEL}">${PHONE}</a></b><br>24/7 emergency dispatch</span></span>
              <span class="np">${I.pin}<span><b>Belmont, NC</b><br>Serving the Charlotte metro</span></span>
              <span class="np">${I.clock}<span><b>Open 24 / 7</b><br>365 days a year</span></span>
            </div>
            <a href="contact.html" class="btn btn-line" style="margin-top:20px">Request Service</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${y} NC ROADSIDE SERVICE LLC · ALL RIGHTS RESERVED</span>
          <span>LICENSED &amp; INSURED · NC</span>
        </div>
      </div>
    </footer>
    <div class="callbar"><a href="tel:${TEL}">${I.phone} Call Now · ${PHONE}</a></div>`;
  }

  function init() {
    const h = document.getElementById("site-header-mount");
    const f = document.getElementById("site-footer-mount");
    if (h) h.innerHTML = buildHeader();
    if (f) f.innerHTML = buildFooter();

    // shrink header on scroll
    const header = document.getElementById("siteHeader");
    const onScroll = () => { if (header) header.classList.toggle("shrink", window.scrollY > 30); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // drawer
    const drawer = document.getElementById("drawer");
    const mb = document.getElementById("menuBtn");
    const dc = document.getElementById("drawerClose");
    if (mb) mb.addEventListener("click", () => drawer.classList.add("open"));
    if (dc) dc.addEventListener("click", () => drawer.classList.remove("open"));
    if (drawer) drawer.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => drawer.classList.remove("open")));

    // reveals
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));

    // request form
    document.querySelectorAll("form[data-request]").forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const scope = form.closest(".form-card") || form.parentElement;
        const ok = scope ? scope.querySelector("[data-ok]") : null;
        if (ok) {
          form.style.display = "none";
          ok.style.display = "flex";
        }
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
