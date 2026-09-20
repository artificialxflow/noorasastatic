(function () {
  const titles = {
    "users.html": "مدیریت کاربران",
    "doctors.html": "مدیریت پزشکان",
    "services.html": "مدیریت خدمات و بخش‌ها",
    "news.html": "مدیریت اخبار و مقالات",
    "pages.html": "مدیریت صفحات سایت",
    "appointments.html": "مدیریت نوبت‌ها",
    "documents.html": "مدارک و درخواست‌ها",
    "messages.html": "مدیریت پیام‌ها",
    "payments.html": "پرداخت‌ها و فاکتورها",
    "languages.html": "مدیریت زبان‌ها",
    "settings.html": "تنظیمات ظاهری"
  };
  const rows = {
    "users.html": [["علی محمدی","بیمار","فعال"],["نرگس احمدی","منشی","فعال"],["رضا مدیر","سوپرادمین","فعال"]],
    "doctors.html": [["سارا رضایی","قلب","تأیید شده"],["امیر کریمی","جراحی","در انتظار"]],
    "services.html": [["قلب و عروق","فعال","۲۴ تخت"],["چکاپ طلایی","فعال","پکیج"]],
    "news.html": [["پایش فشار خون","منتشر","آموزش"],["افتتاح تصویربرداری","پیش‌نویس","خبر"]],
    "pages.html": [["خانه","منتشر","/"],["درباره ما","منتشر","/about"]],
    "appointments.html": [["علی محمدی","رضایی","در انتظار"],["مریم کاظمی","کریمی","تأیید شده"]],
    "documents.html": [["آزمایش خون","علی محمدی","در انتظار"],["ام‌آرآی","کاظمی","تأیید شده"]],
    "messages.html": [["نتیجه اکو","خوانده‌نشده","رضایی"],["نوبت فردا","خوانده","سیستم"]],
    "payments.html": [["فاکتور ۱۲۲۰","۲.۴ م","پرداخت شده"],["فاکتور ۱۲۲۱","۱.۸ م","در انتظار"]],
    "languages.html": [["فارسی","پیش‌فرض","فعال"],["انگلیسی","سوئیچر","ظاهری"]],
    "settings.html": [["رنگ اصلی","#0B6E99","فعال"],["لوگو","نورآسا","فعال"]]
  };
  const page = document.body.dataset.admin;
  const h = titles[page] || "مدیریت";
  const data = rows[page] || [];
  document.getElementById("admin-main").innerHTML = `
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-black text-medical">${h}</h1>
      <button data-modal-open="editM" class="btn-primary rounded-lg px-4 py-2 text-sm">افزودن / ویرایش</button>
    </div>
    <div class="hidden md:block card-solid overflow-x-auto">
      <table class="admin-table w-full text-sm">
        <thead><tr><th class="p-3 text-right">عنوان</th><th>جزئیات</th><th>وضعیت</th><th></th></tr></thead>
        <tbody>
          ${data.map(r => `<tr class="border-b"><td class="p-3">${r[0]}</td><td>${r[1]}</td><td><span class="status-wait px-2 py-1 rounded-full text-xs">${r[2]}</span></td><td><button data-modal-open="editM" class="text-medical text-xs">ویرایش</button>
          ${page==='appointments.html'||page==='documents.html' ? '<button class="text-calm text-xs mr-2">تأیید</button><button class="text-coral text-xs">رد</button>' : ''}
          </td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div class="md:hidden space-y-3">
      ${data.map(r => `<article class="card-solid p-4"><h2 class="font-bold">${r[0]}</h2><p class="text-sm">${r[1]}</p><span class="status-ok text-xs px-2 py-1 rounded-full">${r[2]}</span></article>`).join("")}
    </div>
    ${page==='settings.html' ? '<form class="card-solid p-5 mt-5 space-y-3"><label class="block text-sm">رنگ اصلی<input class="border rounded-lg px-3 py-2 w-full" value="#0B6E99"></label><button class="btn-gold rounded-lg px-4 py-2">ذخیره ظاهری</button></form>' : ''}
    <div id="editM" class="modal hidden fixed inset-0 bg-black/40 grid place-items-center p-4">
      <div class="card-solid p-6 w-full max-w-md">
        <h3 class="font-bold mb-3">فرم نمونه</h3>
        <input class="w-full border rounded-lg px-3 py-2 mb-2" placeholder="عنوان">
        <button data-modal-close class="btn-primary rounded-lg px-4 py-2">ثبت نمایشی</button>
      </div>
    </div>`;
})();
