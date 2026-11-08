// Замените данные только в CONFIG. Для скрытия плашки: showDemoBadge: false.
const CONFIG = {
  name: 'Название', logo: 'Н.', title: 'Ещё немного', titleAccent: 'посидим.',
  slogan: 'Вечер, который не хочется складывать в карман.',
  manifesto: ['Хлеб ломают руками.', 'Разговоры не торопят.', 'За столом есть место для вас.'],
  established: 'Est. 2019', artwork: 'Этюд № 01 / Свет на столе',
  address: 'Ваш город, улица Примерная, 12', phone: '+7 (000) 000-00-00',
  hours: 'Ежедневно · 12:00 — 00:00', telegram: '', // Например: https://t.me/your_restaurant
  currency: '₸', locale: 'ru-RU', showDemoBadge: true,
  colors: { bg:'#eee9df', surface:'#eee9df', ink:'#292721', muted:'#696156', accent:'#9c432d', 'accent-ink':'#eee9df', line:'#b7afa1', dark:'#292721', 'dark-text':'#eee9df' },
  fonts: { body:"'Manrope', sans-serif", display:"'Cormorant Garamond', Georgia, serif" },
  benefits: [
    { icon:'✳', title:'Авторская кухня', text:'Знакомые вкусы в новом прочтении.' },
    { icon:'⌂', title:'Уютный зал', text:'Для встреч, которые хочется продлить.' },
    { icon:'☾', title:'До позднего вечера', text:'Время для себя и хорошей компании.' }
  ],
  menu: [
    { name:'Закуски', dishes:[{name:'Блюдо 1',description:'Свежие ингредиенты, нежная текстура и лёгкая заправка.',price:2900},{name:'Блюдо 2',description:'Гармоничное сочетание сезонных продуктов и пряных нот.',price:3400},{name:'Блюдо 3',description:'Небольшое начало большого гастрономического вечера.',price:3100}] },
    { name:'Основные блюда', dishes:[{name:'Блюдо 4',description:'Горячее блюдо с сезонным гарниром и авторским соусом.',price:5600},{name:'Блюдо 5',description:'Насыщенный вкус, ароматные травы и деликатные специи.',price:6200},{name:'Блюдо 6',description:'Сбалансированное сочетание текстур в каждой порции.',price:4900}] },
    { name:'Десерты', dishes:[{name:'Блюдо 7',description:'Нежный крем, воздушная основа и ягодный акцент.',price:2400},{name:'Блюдо 8',description:'Бархатная текстура и деликатная сладость.',price:2600},{name:'Блюдо 9',description:'Лёгкое завершение вечера с сезонными фруктами.',price:2200}] },
    { name:'Напитки', dishes:[{name:'Напиток 1',description:'Освежающий напиток с цитрусовыми нотами.',price:1500},{name:'Напиток 2',description:'Ароматный горячий напиток для неспешной беседы.',price:1200},{name:'Напиток 3',description:'Ягодное сочетание с лёгкой приятной кислинкой.',price:1700}] }
  ],
  about: { title:'Свет тише. Разговор ближе.', text:'Длинный стол для друзей. Маленький — у окна. Днём здесь читают за кофе, вечером делят ужин на двоих. Можно прийти без повода.', stats:[{value:'40',label:'мест за столами'},{value:'12:00',label:'первый кофе'},{value:'2019',label:'первая встреча'}] },
  booking: { maxGuests:12, times:['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'], title:'На сколько накрыть?', text:'Выберите день. Скажите, сколько вас будет. Мы перезвоним и договоримся о деталях.', success:'Заявка отправлена! Мы свяжемся с вами для подтверждения' },
  labels: { navMenu:'Меню', navAbout:'О нас', navContacts:'Контакты', book:'Забронировать стол', viewMenu:'Смотреть меню', heroEyebrow:'Кухня · атмосфера · встречи', heroNote:'Для особенных поводов и обычных дней', heroBottom:'Хороший вкус начинается с деталей', heroArt:'Место для вашего вкуса', photo:'Фото блюда', interior:'Фото интерьера', menuEyebrow:'Найдите свой вкус', menuTitle:'Меню с настроением', menuDescription:'От первого знакомства до любимого блюда. Выбирайте то, что хочется именно сейчас.', menuNote:'Демонстрационное меню · состав и цены можно изменить', aboutEyebrow:'Немного о нас', bookingEyebrow:'Бронирование', bookingDetail:'За одним столом — самые важные люди.', formName:'Ваше имя', formPhone:'Телефон', formDate:'Дата', formTime:'Время', formGuests:'Количество гостей', formComment:'Комментарий', namePlaceholder:'Как к вам обращаться?', phonePlaceholder:'+7 (___) ___-__-__', commentPlaceholder:'Особый повод, пожелания к столику…', timePlaceholder:'Выберите время', submit:'Отправить заявку', submitting:'Отправляем…', formNote:'Это демо: данные никуда не отправляются. Для проверки используйте вымышленные имя и телефон.', contactEyebrow:'Будем рады встрече', contactTitle:'Загляните в гости', address:'Адрес', phone:'Телефон', hours:'Часы работы', call:'Позвонить', telegram:'Написать в Telegram', telegramMissing:'В демо ссылка Telegram не задана. Добавьте её в CONFIG.', map:'Здесь будет карта', mapNote:'Место для карты вашего заведения', demo:'Демо-шаблон', footer:'Демо-версия сайта', mobileBook:'Забронировать', required:'Заполните это поле.', invalidPhone:'Введите телефон: от 10 до 15 цифр.', pastDate:'Выберите сегодняшнюю или будущую дату.', pastTime:'Это время уже прошло. Выберите другое.', failed:'Не удалось отправить заявку. Попробуйте ещё раз.', invalidGuests:'Выберите количество гостей из списка.', invalidTime:'Выберите доступное время.', successDemo:'Демонстрация завершена. Реальная заявка не отправлялась.' }
};

const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const L = CONFIG.labels;
const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const brand = () => `<a class="brand" href="#main"><span class="brand-symbol" aria-hidden="true">${esc(CONFIG.logo)}</span><span>${esc(CONFIG.name)}</span></a>`;
const bookLink = (extra='') => `<a class="btn ${extra}" href="#booking">${esc(L.book)}${arrow}</a>`;
Object.entries(CONFIG.colors).forEach(([key,value])=>document.documentElement.style.setProperty(`--${key}`,value));
Object.entries(CONFIG.fonts).forEach(([key,value])=>document.documentElement.style.setProperty(`--font-${key}`,value));
document.title = `${CONFIG.name} — ${L.footer}`;
document.querySelector('meta[name="theme-color"]').content = CONFIG.colors.bg;
const field = (id,label,control) => `<div class="field"><label for="${id}">${esc(label)} *</label>${control}<span class="error" id="${id}-error"></span></div>`;
const attrs = id => `id="${id}" name="${id}" required aria-describedby="${id}-error"`;
document.getElementById('app').innerHTML = `
<header class="header"><div class="container header-inner">${brand()}<nav class="nav" id="navigation" aria-label="Основная навигация"><a href="#menu">${esc(L.navMenu)}</a><a href="#about">${esc(L.navAbout)}</a><a href="#contacts">${esc(L.navContacts)}</a><a class="mobile-nav-book" href="#booking">${esc(L.book)}</a></nav>${bookLink('desktop-book')}<button class="burger" aria-label="Открыть меню" aria-controls="navigation" aria-expanded="false"><span></span><span></span></button></div></header>
<main id="main">
<section class="hero container" aria-labelledby="hero-title"><div class="hero-grid"><div class="hero-copy"><div class="eyebrow">${esc(L.heroEyebrow)}</div><h1 id="hero-title">${esc(CONFIG.title)}<br><span>${esc(CONFIG.titleAccent)}</span></h1><p>${esc(CONFIG.slogan)}</p><div class="actions">${bookLink()}<a class="btn secondary" href="#menu">${esc(L.viewMenu)}<span aria-hidden="true">↓</span></a></div><div class="hero-note"><span class="dot"></span>${esc(L.heroNote)}</div></div><div class="hero-art" role="img" aria-label="Декоративная композиция с тарелкой"><div class="plate" aria-hidden="true"></div><span class="art-sticker">${esc(L.heroArt)}</span><span class="art-label">${esc(L.photo)}</span></div></div><div class="hero-bottom"><span>${esc(L.heroBottom)}</span><span>${esc(CONFIG.hours)}</span></div></section>
<section class="container manifesto"><span class="eyebrow">№ 01</span><blockquote>${CONFIG.manifesto.map(line=>`<span class="quote-line reveal">${esc(line)}</span>`).join('')}</blockquote><span class="manifesto-end">${esc(CONFIG.established)}</span></section>
<section class="container section reveal" id="menu" aria-labelledby="menu-title"><div class="section-head"><div><div class="eyebrow">${esc(L.menuEyebrow)}</div><h2 id="menu-title">${esc(L.menuTitle)}</h2></div><p>${esc(L.menuDescription)}</p></div><div class="tabs" role="tablist" aria-label="Категории меню">${CONFIG.menu.map((cat,i)=>`<button class="tab" id="tab-${i}" role="tab" aria-selected="${i===0}" aria-controls="menu-panel" tabindex="${i===0?0:-1}" data-category="${i}">${esc(cat.name)}</button>`).join('')}</div><div id="menu-panel" role="tabpanel" aria-labelledby="tab-0" tabindex="0"><div class="menu-grid" id="dishes"></div></div><div class="menu-foot"><span class="dot"></span>${esc(L.menuNote)}</div></section>
<section class="container section about reveal" id="about" aria-labelledby="about-title"><div class="about-art" role="img" aria-label="Декоративная арка — заглушка интерьера"><div class="arch"></div><span class="art-label">${esc(L.interior)}</span></div><div class="about-copy"><div class="eyebrow">${esc(L.aboutEyebrow)}</div><h2 id="about-title">${esc(CONFIG.about.title)}</h2><p>${esc(CONFIG.about.text)}</p><div class="stats">${CONFIG.about.stats.map(s=>`<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div></div></section>
<section class="container section reveal" id="booking" aria-labelledby="booking-title"><div class="booking-shell"><div class="booking-copy"><div class="eyebrow">${esc(L.bookingEyebrow)}</div><h2 id="booking-title">${esc(CONFIG.booking.title)}</h2><p>${esc(CONFIG.booking.text)}</p><div class="booking-detail">${esc(L.bookingDetail)}</div></div><form class="booking-form" novalidate>
${field('name',L.formName,`<input ${attrs('name')} autocomplete="given-name" maxlength="80" placeholder="${esc(L.namePlaceholder)}">`)}
${field('phone',L.formPhone,`<input ${attrs('phone')} type="tel" inputmode="tel" autocomplete="tel" maxlength="30" placeholder="${esc(L.phonePlaceholder)}">`)}
${field('date',L.formDate,`<input ${attrs('date')} type="date">`)}
${field('time',L.formTime,`<select ${attrs('time')}><option value="">${esc(L.timePlaceholder)}</option>${CONFIG.booking.times.map(t=>`<option>${esc(t)}</option>`).join('')}</select>`)}
${field('guests',L.formGuests,`<select ${attrs('guests')}>${Array.from({length:CONFIG.booking.maxGuests},(_,i)=>`<option value="${i+1}" ${i===1?'selected':''}>${i+1}</option>`).join('')}</select>`)}
<div class="field full"><label for="comment">${esc(L.formComment)}</label><textarea id="comment" name="comment" maxlength="1000" placeholder="${esc(L.commentPlaceholder)}"></textarea></div><button class="btn full" type="submit">${esc(L.submit)}${arrow}</button><p class="form-note full">${esc(L.formNote)}</p><p class="error full" id="form-error" role="alert"></p></form><div class="success" hidden tabindex="-1" role="status"><div class="success-icon" aria-hidden="true">✓</div><h3>${esc(CONFIG.booking.success)}</h3><p>${esc(L.successDemo)}</p></div></div></section>
<section class="container section contacts reveal" id="contacts" aria-labelledby="contacts-title"><div><div class="eyebrow">${esc(L.contactEyebrow)}</div><h2 id="contacts-title">${esc(L.contactTitle)}</h2><div class="contact-list"><div class="contact-item"><span>${esc(L.address)}</span><p>${esc(CONFIG.address)}</p></div><div class="contact-item"><span>${esc(L.phone)}</span><a href="tel:${esc(CONFIG.phone.replace(/[^+\d]/g,''))}">${esc(CONFIG.phone)}</a></div><div class="contact-item"><span>${esc(L.hours)}</span><p>${esc(CONFIG.hours)}</p></div></div><div class="actions"><a class="btn" href="tel:${esc(CONFIG.phone.replace(/[^+\d]/g,''))}">${esc(L.call)}${arrow}</a><a class="btn secondary" id="telegram-link" href="#contacts">${esc(L.telegram)}${arrow}</a></div><p id="telegram-notice" role="status" hidden></p></div><div class="map"><div class="map-card"><div class="map-pin" aria-hidden="true">⌖</div><strong>${esc(L.map)}</strong><p>${esc(L.mapNote)}</p></div></div></section>
</main><footer class="footer"><div class="container footer-inner">${brand()}<small>© ${new Date().getFullYear()} ${esc(CONFIG.name)}</small><small>${esc(L.footer)}</small></div></footer>${CONFIG.showDemoBadge?`<div class="demo-badge">${esc(L.demo)}</div>`:''}<a class="btn mobile-book" href="#booking">${esc(L.mobileBook)}${arrow}</a>`;

function renderMenu(index) {
  document.getElementById('dishes').innerHTML = `<h3 class="category-title">${esc(CONFIG.menu[index].name)}</h3>`+CONFIG.menu[index].dishes.map(d=>`<article class="dish"><div class="dish-title"><h3>${esc(d.name)}</h3><span class="leaders" aria-hidden="true"></span><span class="price">${esc(new Intl.NumberFormat(CONFIG.locale).format(d.price))} ${esc(CONFIG.currency)}</span></div><p>${esc(d.description)}</p></article>`).join('');
  document.querySelectorAll('.tab').forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
  document.getElementById('menu-panel').setAttribute('aria-labelledby',`tab-${index}`);
}
renderMenu(0);
document.querySelector('.hero-art .art-label').textContent=CONFIG.artwork;
document.querySelector('.hero-art').setAttribute('aria-label',CONFIG.artwork);
document.querySelector('.hero-bottom').innerHTML=`<span>${esc(CONFIG.address)}</span><span>${esc(CONFIG.hours)}</span>`;
const tabs = [...document.querySelectorAll('.tab')];
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>renderMenu(index));
  tab.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight') next=(index+1)%tabs.length;
    if(event.key==='ArrowLeft') next=(index-1+tabs.length)%tabs.length;
    if(event.key==='Home') next=0;
    if(event.key==='End') next=tabs.length-1;
    if(next!==undefined){event.preventDefault();renderMenu(next);tabs[next].focus();}
  });
});
const burger=document.querySelector('.burger'), nav=document.querySelector('.nav');
function closeNav(){nav.classList.remove('is-open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Открыть меню');}
burger.addEventListener('click',()=>{const open=burger.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);burger.setAttribute('aria-expanded',String(open));burger.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&burger.getAttribute('aria-expanded')==='true'){closeNav();burger.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeNav();});
matchMedia('(min-width:960px)').addEventListener('change',closeNav);
// Удерживаем клавиатурный фокус внутри раскрытого мобильного меню.
document.addEventListener('keydown',event=>{
  if(event.key!=='Tab'||burger.getAttribute('aria-expanded')!=='true')return;
  const links=[...nav.querySelectorAll('a')], first=links[0], last=burger;
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});

const telegramLink=document.getElementById('telegram-link');
// Принимаем только HTTPS-ссылки Telegram; пустая заглушка не ведёт в чужой аккаунт.
if(/^https:\/\/(t\.me|telegram\.me)\/[a-zA-Z0-9_]+\/?$/.test(CONFIG.telegram)){
  telegramLink.href=CONFIG.telegram;telegramLink.target='_blank';telegramLink.rel='noopener noreferrer';
}else telegramLink.addEventListener('click',e=>{e.preventDefault();const notice=document.getElementById('telegram-notice');notice.textContent=L.telegramMissing;notice.hidden=false;});

function localDate(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
const form=document.querySelector('.booking-form');
form.elements.date.min=localDate();
form.elements.date.addEventListener('focus',()=>{form.elements.date.min=localDate();});
function setError(id,message){document.getElementById(`${id}-error`).textContent=message;form.elements[id].setAttribute('aria-invalid',String(Boolean(message)));}
form.addEventListener('input',e=>{if(e.target.name&&document.getElementById(`${e.target.name}-error`))setError(e.target.name,'');});

async function sendBooking(data) {
  // ДЕМО. Замените на fetch к собственному серверу/серверной функции.
  // Сервер может отправить данные в Telegram-бот или Google Sheets.
  // Токен Telegram и ключи Google нельзя размещать в CONFIG или браузерном JS.
  // В рабочей версии удалите console.log и проверьте ответ сервера до показа успеха.
  console.log('Демонстрационная заявка (не отправлена):',data);
  await new Promise(resolve=>setTimeout(resolve,750));
  return {ok:true};
}
form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(form.dataset.sending==='true')return;
  const data=Object.fromEntries(new FormData(form));
  Object.keys(data).forEach(key=>{data[key]=data[key].trim();});
  const errors={};
  ['name','phone','date','time','guests'].forEach(id=>{setError(id,'');if(!data[id])errors[id]=L.required;});
  if(data.phone&&!/^\+?[\d\s()\-]+$/.test(data.phone))errors.phone=L.invalidPhone;
  const digits=data.phone.replace(/\D/g,'');
  if(data.phone&&(digits.length<10||digits.length>15))errors.phone=L.invalidPhone;
  if(data.date&&(data.date<localDate()||!form.elements.date.validity.valid))errors.date=L.pastDate;
  if(data.time&&!CONFIG.booking.times.includes(data.time))errors.time=L.invalidTime;
  if(data.date&&data.time&&!errors.date&&!errors.time&&new Date(`${data.date}T${data.time}`)<=new Date())errors.time=L.pastTime;
  if(data.guests&&(!Number.isInteger(Number(data.guests))||Number(data.guests)<1||Number(data.guests)>CONFIG.booking.maxGuests))errors.guests=L.invalidGuests;
  Object.entries(errors).forEach(([id,message])=>setError(id,message));
  if(Object.keys(errors).length){form.elements[Object.keys(errors)[0]].focus();return;}
  const submit=form.querySelector('[type="submit"]');
  form.dataset.sending='true';submit.disabled=true;submit.textContent=L.submitting;form.setAttribute('aria-busy','true');document.getElementById('form-error').textContent='';
  try{const result=await sendBooking({...data,guests:Number(data.guests)});if(!result?.ok)throw new Error('Ошибка отправки');form.hidden=true;const success=document.querySelector('.success');success.hidden=false;success.focus();}
  catch{document.getElementById('form-error').textContent=L.failed;}
  finally{form.dataset.sending='false';submit.disabled=false;submit.innerHTML=esc(L.submit)+arrow;form.removeAttribute('aria-busy');}
});

if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  document.documentElement.classList.add('motion');
}
