(function () {
  const page = document.body.dataset.admin || "index.html";
  const items = [
    ["index.html", "داشبورد"],
    ["users.html", "کاربران"],
    ["doctors.html", "پزشکان"],
    ["services.html", "خدمات و بخش‌ها"],
    ["news.html", "اخبار و مقالات"],
    ["pages.html", "صفحات سایت"],
    ["appointments.html", "نوبت‌ها"],
    ["documents.html", "مدارک بیماران"],
    ["messages.html", "پیام‌ها"],
    ["payments.html", "پرداخت و فاکتور"],
    ["languages.html", "زبان‌ها"],
    ["settings.html", "تنظیمات ظاهری"]
  ];
  const side = document.getElementById("admin-side");
  if (side) {
    side.innerHTML = `
      <div class="p-4 border-b border-white/20">
        <p class="font-black text-lg">نورآسا ادمین</p>
        <p class="text-xs text-white/70">نقش: سوپرادمین (ظاهری)</p>
      </div>
      <nav class="p-3 space-y-1 text-sm">
        ${items.map(([h, l]) => `<a class="block rounded-lg px-3 py-2 ${page===h?'bg-white text-medical font-bold':'hover:bg-white/10'}" href="${h}">${l}</a>`).join("")}
      </nav>
      <a class="block m-3 text-sm underline" href="../index.html">بازگشت به سایت</a>`;
  }
  document.getElementById("adminMenu")?.addEventListener("click", () => {
    document.getElementById("admin-side")?.classList.toggle("hidden");
  });
  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-modal-open]");
    if (open) document.getElementById(open.dataset.modalOpen)?.classList.remove("hidden");
    const close = e.target.closest("[data-modal-close]");
    if (close) close.closest(".modal")?.classList.add("hidden");
  });
})();
