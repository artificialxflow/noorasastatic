(function () {
  const root = document.body.dataset.root || "";
  const active = document.body.dataset.page || "";

  const nav = [
    ["index.html", "خانه"],
    ["about.html", "درباره ما"],
    ["departments.html", "بخش‌ها"],
    ["doctors.html", "پزشکان"],
    ["packages.html", "چکاپ و خدمات"],
    ["news.html", "اخبار"],
    ["gallery.html", "گالری"],
    ["contact.html", "تماس"]
  ];

  function header() {
    return `
    <div class="bg-coral text-white text-sm">
      <div class="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <p>🚑 دسترسی اضطراری: <a class="underline font-bold" href="tel:02191001234">۰۲۱-۹۱۰۰۱۲۳۴</a></p>
        <p>واتساپ: <a class="underline" href="contact.html">۰۹۱۲۱۲۳۴۵۶۷</a></p>
      </div>
    </div>
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b-2 border-medical">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <a href="${root}index.html" class="flex items-center gap-2">
          <span class="w-11 h-11 rounded-xl bg-medical text-white grid place-items-center font-black">ن</span>
          <span>
            <strong class="block text-medical text-lg leading-none">نورآسا</strong>
            <small class="text-calm">NoorAsa</small>
          </span>
        </a>
        <nav class="hidden lg:flex items-center gap-4 text-sm font-medium">
          ${nav.map(([h, l]) => `<a class="${active===h?'text-medical font-bold':'text-slate-700 hover:text-medical'}" href="${root}${h}">${l}</a>`).join("")}
        </nav>
        <div class="flex items-center gap-2">
          <button id="searchBtn" class="hidden md:inline-flex border border-slate-200 rounded-lg px-3 py-2 text-sm">جستجو</button>
          <div class="hidden sm:flex border border-slate-200 rounded-lg overflow-hidden text-xs">
            <span class="px-2 py-2 bg-medical text-white">FA</span>
            <button class="px-2 py-2" type="button">EN</button>
          </div>
          <a class="btn-primary rounded-lg px-3 py-2 text-sm font-bold" href="${root}appointment.html">رزرو نوبت</a>
          <button id="menuBtn" class="lg:hidden border rounded-lg px-3 py-2" aria-label="منو">☰</button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden lg:hidden border-t bg-white px-4 py-3 space-y-2">
        ${nav.map(([h, l]) => `<a class="block py-1" href="${root}${h}">${l}</a>`).join("")}
        <a class="block py-1" href="${root}login.html">ورود بیمار</a>
        <a class="block py-1" href="${root}faq.html">سوالات متداول</a>
      </div>
    </header>
    <div id="searchModal" class="hidden fixed inset-0 z-50 bg-black/40 p-4">
      <div class="card-solid max-w-lg mx-auto mt-24 p-5">
        <div class="flex justify-between mb-3"><h3 class="font-bold">جستجوی ظاهری</h3><button id="closeSearch">✕</button></div>
        <input class="w-full border rounded-lg px-3 py-2" placeholder="پزشک، خدمت یا مقاله...">
        <p class="text-sm text-slate-500 mt-3">نتایج نمونه: قلب و عروق، دکتر رضایی، چکاپ کامل.</p>
      </div>
    </div>`;
  }

  function footer() {
    return `
    <footer class="mt-16 bg-medical text-white">
      <div class="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold text-xl mb-2">نورآسا <span class="text-gold">NoorAsa</span></h3>
          <p class="text-white/80 text-sm">مراقبت روشن، آرامش مطمئن. مجموعه بیمارستانی چندتخصصی مدرن.</p>
        </div>
        <div>
          <h4 class="font-bold mb-2">پیوندها</h4>
          <a class="block text-sm text-white/80" href="${root}about.html">درباره بیمارستان</a>
          <a class="block text-sm text-white/80" href="${root}doctors.html">پزشکان</a>
          <a class="block text-sm text-white/80" href="${root}facilities.html">تجهیزات</a>
          <a class="block text-sm text-white/80" href="${root}faq.html">سوالات متداول</a>
        </div>
        <div>
          <h4 class="font-bold mb-2">خدمات بیمار</h4>
          <a class="block text-sm text-white/80" href="${root}appointment.html">نوبت آنلاین</a>
          <a class="block text-sm text-white/80" href="${root}login.html">ورود / ثبت‌نام</a>
          <a class="block text-sm text-white/80" href="${root}patient.html">پنل بیمار</a>
          <a class="block text-sm text-white/80" href="${root}admin/index.html">ورود مدیریت</a>
        </div>
        <div>
          <h4 class="font-bold mb-2">شبکه‌ها</h4>
          <p class="text-sm">اینستاگرام · لینکدین · آپارات</p>
          <p class="text-sm mt-2">تهران، خیابان ولیعصر، مجموعه نورآسا</p>
        </div>
      </div>
      <div class="border-t border-white/20 text-center text-sm py-4">© ۱۴۰۵ نورآسا — همه حقوق محفوظ است</div>
    </footer>`;
  }

  const mountH = document.getElementById("site-header");
  const mountF = document.getElementById("site-footer");
  if (mountH) mountH.innerHTML = header();
  if (mountF) mountF.innerHTML = footer();

  document.getElementById("menuBtn")?.addEventListener("click", () => {
    document.getElementById("mobileMenu")?.classList.toggle("hidden");
  });
  document.getElementById("searchBtn")?.addEventListener("click", () => {
    document.getElementById("searchModal")?.classList.remove("hidden");
  });
  document.getElementById("closeSearch")?.addEventListener("click", () => {
    document.getElementById("searchModal")?.classList.add("hidden");
  });

  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const buttons = wrap.querySelectorAll("[data-tab]");
    const panes = wrap.querySelectorAll("[data-pane]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.tab;
        buttons.forEach((b) => b.classList.remove("bg-medical", "text-white"));
        btn.classList.add("bg-medical", "text-white");
        panes.forEach((p) => p.classList.toggle("hidden", p.dataset.pane !== id));
      });
    });
  });

  document.querySelectorAll("[data-modal-open]").forEach((btn) => {
    btn.addEventListener("click", () => document.getElementById(btn.dataset.modalOpen)?.classList.remove("hidden"));
  });
  document.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest(".modal")?.classList.add("hidden"));
  });

  const steps = document.querySelectorAll("[data-step]");
  let step = 1;
  function showStep() {
    steps.forEach((s) => s.classList.toggle("hidden", Number(s.dataset.step) !== step));
  }
  document.getElementById("nextStep")?.addEventListener("click", () => { if (step < 4) { step++; showStep(); }});
  document.getElementById("prevStep")?.addEventListener("click", () => { if (step > 1) { step--; showStep(); }});
  document.getElementById("finishAppt")?.addEventListener("click", () => {
    document.getElementById("apptSuccess")?.classList.remove("hidden");
  });
})();
