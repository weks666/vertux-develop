(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var translations = {
    ru: {
      'a11y.skip':'К содержанию','nav.product':'Продукт','nav.solutions':'Возможности','nav.deployment':'Размещение','nav.updates':'Обновления','nav.account':'Кабинет','nav.get':'Получить Nexus',
      'hero.title':'Вся работа компании.<br><em>В одном Nexus.</em>','hero.lede':'Персональный workspace, AI-инструменты, звонки, виджеты и локальные системы. Nexus собирается вокруг вашего процесса и показывает каждому сотруднику только нужное.','hero.primary':'Посмотреть продукт','hero.secondary':'Nexus для Windows','hero.note':'ДОСТУП ПО ПРИГЛАШЕНИЮ · WINDOWS + WEB · УПРАВЛЯЕМОЕ ОБСЛУЖИВАНИЕ',
      'sat.call':'Звонок анализируется','sat.node':'ЗАЩИЩЁННОЕ СОЕДИНЕНИЕ','sat.widget':'НОВЫЙ ВОПРОС В БАЗУ','sat.usage':'64% ОТ МЕСЯЧНОГО ПЛАНА',
      'demo.online':'Система в норме','demo.space':'Пространство','demo.overview':'Обзор','demo.calls':'Звонки + AI','demo.widget':'AI-виджет','demo.local':'Local Node','demo.company':'Ваша компания','demo.role':'OWNER ACCESS','demo.caption':'Интерактивная демонстрация — выберите раздел внутри интерфейса',
      'overview.title':'Рабочий день под контролем','overview.sub':'Продукты, команда и системные события — в одном экране.','overview.action':'Новое действие','overview.m1':'Продукты','overview.m1s':'все доступны','overview.m2':'Сервисы','overview.m2s':'стабильно','overview.m3':'AI usage','overview.m3s':'в пределах плана','overview.products':'Мои продукты','overview.synced':'СИНХРОНИЗИРОВАНО','overview.ws':'Проекты · Клиенты · Финансы','overview.call':'Анализ · Суфлёр · Тренер','overview.widget':'Диалоги · Знания · Лиды','overview.node':'1С · Файлы · Бэкапы','overview.activity':'Активность','overview.week':'7 ДНЕЙ','overview.normal':'Нормальная нагрузка',
      'status.active':'АКТИВЕН','status.online':'ONLINE','status.secure':'ЗАЩИЩЕНО',
      'calls.title':'AI рядом во время разговора','calls.sub':'Транскрипция, подсказки и разбор качества — без переключения окон.','calls.live':'РАЗГОВОР ИДЁТ','calls.client':'Входящий звонок','calls.manager':'МЕНЕДЖЕР · 02:18','calls.customer':'КЛИЕНТ · 02:29','calls.line1':'Подскажите, что для вас важнее: скорость запуска или полный набор функций?','calls.line2':'Нужно запустить быстро, но потом подключить команду и отчётность.','calls.line3':'Тогда начнём с основного процесса и добавим модули после запуска...','calls.coach':'AI-СУФЛЁР','calls.tiptitle':'Зафиксируйте следующий шаг','calls.tip':'Предложите короткий запуск и назовите конкретную дату следующего созвона.','calls.insert':'Добавить в заметку','calls.quality':'КАЧЕСТВО РАЗГОВОРА','calls.score':'Хорошо выявлена задача. Не хватает договорённости по сроку.',
      'widget.title':'Видно, что спрашивают клиенты','widget.sub':'Диалоги, конверсия подсказок и вопросы, которых не хватает в базе знаний.','widget.assistant':'Консультант','widget.bot1':'Здравствуйте! Помогу подобрать решение и отвечу на вопросы.','widget.user1':'Можно подключить это к нашей CRM?','widget.bot2':'Да. Сначала проверю ваш сценарий и предложу безопасный способ интеграции.','widget.placeholder':'Введите сообщение...','widget.gaps':'Пробелы в знаниях','widget.q1':'Срок подключения CRM','widget.q1s':'спросили 8 раз','widget.q2':'Стоимость дополнительной роли','widget.q2s':'спросили 5 раз','widget.coverage':'Покрытие базы',
      'local.title':'Локальные данные остаются локально','local.sub':'Nexus управляет лицензией и заданиями. Файлы, 1С и закрытые операции остаются на компьютере компании.','local.outbound':'ИСХОДЯЩЕЕ СОЕДИНЕНИЕ','local.e1':'Последняя связь','local.now':'сейчас','local.e2':'Резервная копия','local.e3':'Входящие порты',
      'system.title':'Не восемь сервисов.<br><em>Одна рабочая среда.</em>','system.lede':'Nexus не заставляет компанию подстраиваться под готовую CRM. Мы собираем только те модули, которые нужны вашему процессу.','compare.before':'ДО NEXUS · РАЗРОЗНЕННО','compare.chats':'Чаты','compare.calls':'Звонки','compare.docs':'Документы','compare.after':'ПОСЛЕ · ОДИН КОНТУР','compare.status':'Один статус. Один процесс.','system.c1t':'Процесс, который узнаёт команда','system.c1d':'Проекты, лиды, документы, деньги и сотрудники — в логике вашей компании, а не чужого шаблона.','system.c2t':'AI работает внутри задачи','system.c2d':'Анализирует звонки, помогает менеджеру, проверяет документы и замечает то, что обычно теряется.','system.c3t':'Расход и качество видны сразу','system.c3d':'Лимиты, токены, ответы без результата, статусы сервисов и подписка — без слепых зон.',
      'worlds.title':'Один Nexus.<br><em>Разные рабочие миры.</em>','worlds.lede':'Продукт начинается с задачи, а не с длинного списка одинаковых функций.','worlds.w1t':'Работа движется по понятному маршруту','worlds.w1d':'У каждого проекта есть статус, ответственный, следующий шаг и короткая заметка. Руководитель видит картину, команда — только свою работу.','worlds.w1a':'Роли и доступы','worlds.w1b':'Статусы вручную','worlds.w1c':'Финансы и команда','worlds.projects':'Проекты','worlds.w2t':'AI не просто отвечает — он улучшает работу','worlds.w2d':'Суфлёр подсказывает во время звонка, тренер разбирает разговор после него, а виджет показывает, каких знаний не хватает клиентам.','worlds.w2a':'Подсказки в реальном времени','worlds.w2b':'Персональный разбор','worlds.w2c':'Контроль качества','worlds.i1':'Уточните критерий выбора<small>LIVE COACH</small>','worlds.i2':'Следующий шаг не назначен<small>CALL REVIEW</small>','worlds.i3':'Новый вопрос для базы<small>WIDGET INSIGHT</small>','worlds.w3t':'Облако управляет. Локальный узел исполняет.','worlds.w3d':'Закрытые файлы и 1С остаются внутри компании. Nexus доставляет подписанные задания, версии и настройки через исходящее соединение.','worlds.w3a':'Без входящих портов','worlds.w3b':'Отзыв лицензии','worlds.w3c':'Управляемые обновления',
      'deploy.title':'Размещается там,<br><em>где это разумно.</em>','deploy.lede':'Архитектура выбирается по данным, нагрузке и процессу. Подписка оплачивает не “ярлык на компьютере”, а лицензирование, AI, обновления, мониторинг и поддержку.','deploy.localt':'На компьютере компании','deploy.locald':'Закрытые операции выполняются локально. Управление версиями, лицензией и поддержкой остаётся в Nexus.','deploy.compute':'Вычисления','deploy.clientpc':'ПК клиента','deploy.closed':'Закрытые данные','deploy.localkeep':'Локально','deploy.cost':'Обслуживание','deploy.lower':'Ниже','deploy.best':'ОПТИМАЛЬНЫЙ БАЛАНС','deploy.hybridt':'Облако + Local Node','deploy.hybridd':'Команда работает 24/7 в облаке, а 1С, файлы и резервные копии остаются внутри компании.','deploy.access':'Доступ команды','deploy.private':'Закрытый контур','deploy.onpc':'На ПК','deploy.scale':'Масштабирование','deploy.flex':'Гибкое','deploy.cloudt':'В контуре Vertux','deploy.cloudd':'Сервер, мониторинг, резервирование и обновления обслуживаются централизованно.','deploy.infra':'Инфраструктура','deploy.maint':'Обслуживание','deploy.full':'Полное',
      'portal.title':'Продукт остаётся<br><em>под вашим контролем.</em>','portal.lede':'В веб-кабинете видны продукты, подписка, версии, расход AI и обращения. Изменения базы знаний и настроек не требуют переписки по каждому поводу.','portal.login':'Войти в кабинет','portal.changelog':'История обновлений','portal.connected':'ПОДКЛЮЧЕНО','portal.plan':'ТЕКУЩИЙ ПЛАН','portal.usage':'AI USAGE','portal.renewal':'Следующее продление','portal.manage':'Управление',
      'final.title':'Ваш процесс.<br><em>Собран в продукт.</em>','final.lede':'Начнём с одной рабочей задачи, соберём Nexus и подключим нужные модули без лишней инфраструктуры.','final.contact':'Обсудить Nexus','final.windows':'Версия для Windows',
      'footer.note':'Персональные бизнес-системы Vertux.','footer.product':'ПРОДУКТ','footer.access':'ДОСТУП','footer.windows':'Windows','footer.contact':'СВЯЗЬ','footer.made':'Сделано в студии <b>Vertux</b>',
      'updates.kicker':'ОБНОВЛЕНИЯ / NEXUS','updates.title':'Nexus становится сильнее.<br><em>Версия за версией.</em>','updates.lede':'Здесь фиксируются изменения продукта, клиентского кабинета и локального узла. Без маркетингового шума — только то, что стало удобнее, быстрее или безопаснее.','updates.back':'Вернуться к продукту','updates.access':'Получить доступ','updates.v040t':'Новый продуктовый сайт','updates.v040d':'Перестроили презентацию Nexus вокруг реального интерфейса и сценария работы.','updates.v040a':'Полная русская и английская версии','updates.v040b':'Интерактивные режимы Workspace, Calls, Widget и Local Node','updates.v040c':'Отдельные страницы кабинета, Windows и обновлений','updates.v030t':'Call Intelligence','updates.v030d':'Добавили продуктовый сценарий для анализа звонков и помощи менеджеру.','updates.v030a':'Транскрипция в реальном времени','updates.v030b':'AI-суфлёр во время разговора','updates.v030c':'Оценка качества и персональный тренер после звонка','updates.v020t':'Hybrid Runtime','updates.v020d':'Сформировали безопасную схему совместной работы облака и локального компьютера.','updates.v020a':'Local Node для Windows','updates.v020b':'Исходящее TLS-соединение без открытых портов','updates.v020c':'Управляемые лицензии и обновления',
      'download.kicker':'NEXUS / WINDOWS','download.title':'Nexus там,<br><em>где работает команда.</em>','download.lede':'Windows-версия устанавливается вместе с настроенным workspace и привязывается к компании, ролям и лицензии.','download.back':'К продукту','download.changelog':'Что нового','download.cardt':'Nexus для Windows','download.cardd':'Локальный клиент, защищённый доступ к продуктам и Local Node для систем, которые остаются на компьютере компании.','download.request':'Запросить установку','download.req':'Системные требования','download.os':'Система','download.arch':'Архитектура','download.ram':'Память','download.net':'Соединение','download.note':'Установка выдаётся после настройки продукта: универсального файла без лицензии и контура компании нет. Это защищает клиентские данные и сам Nexus.','download.webt':'Web Access','download.webd':'Для сотрудников, которым нужен браузерный доступ без установки. Адрес выдаётся вместе с приглашением в компанию.','download.account':'Открыть кабинет',
      'account.kicker':'CLIENT ACCESS','account.title':'Ваш Nexus.<br><em>Ваши продукты.</em>','account.lede':'Один вход к workspace, AI-инструментам, подписке, версиям и поддержке.','account.b1':'Только продукты вашей компании','account.b2':'Роли и изолированные данные','account.b3':'Лицензии и обновления под контролем','account.formkicker':'ВХОД ПО ПРИГЛАШЕНИЮ','account.formtitle':'Войти в Nexus','account.formlede':'Используйте данные, которые были выданы при подключении компании.','account.email':'Рабочая почта','account.password':'Пароль','account.submit':'Продолжить','account.help':'Нет приглашения или изменился адрес входа?','account.contact':'Написать в Vertux','account.message':'Демо-форма не принимает и не отправляет данные. В рабочей версии вход подключается к серверу вашей компании.'
    },
    en: {
      'a11y.skip':'Skip to content','nav.product':'Product','nav.solutions':'Capabilities','nav.deployment':'Deployment','nav.updates':'Updates','nav.account':'Account','nav.get':'Get Nexus',
      'hero.title':'Your entire company.<br><em>Inside one Nexus.</em>','hero.lede':'A personal workspace, AI tools, calls, widgets and local systems. Nexus is shaped around your process and gives every teammate exactly what they need.','hero.primary':'Explore the product','hero.secondary':'Nexus for Windows','hero.note':'INVITE-ONLY ACCESS · WINDOWS + WEB · MANAGED SERVICE',
      'sat.call':'Call analysis in progress','sat.node':'SECURE CONNECTION','sat.widget':'NEW KNOWLEDGE GAP','sat.usage':'64% OF MONTHLY PLAN',
      'demo.online':'All systems normal','demo.space':'Workspace','demo.overview':'Overview','demo.calls':'Calls + AI','demo.widget':'AI Widget','demo.local':'Local Node','demo.company':'Your company','demo.role':'OWNER ACCESS','demo.caption':'Interactive demo — choose a section inside the interface',
      'overview.title':'Your workday, under control','overview.sub':'Products, team and system events on a single screen.','overview.action':'New action','overview.m1':'Products','overview.m1s':'all available','overview.m2':'Services','overview.m2s':'stable','overview.m3':'AI usage','overview.m3s':'within plan','overview.products':'My products','overview.synced':'SYNCED','overview.ws':'Projects · Clients · Finance','overview.call':'Analysis · Copilot · Coach','overview.widget':'Dialogs · Knowledge · Leads','overview.node':'ERP · Files · Backups','overview.activity':'Activity','overview.week':'7 DAYS','overview.normal':'Normal load',
      'status.active':'ACTIVE','status.online':'ONLINE','status.secure':'SECURE',
      'calls.title':'AI stays with you during the call','calls.sub':'Live transcription, guidance and quality review — no window switching.','calls.live':'CALL IN PROGRESS','calls.client':'Incoming call','calls.manager':'MANAGER · 02:18','calls.customer':'CUSTOMER · 02:29','calls.line1':'What matters more to you: launching quickly or having the full feature set?','calls.line2':'We need to launch fast, then add the team and reporting.','calls.line3':'Then we can start with the core process and add modules after launch...','calls.coach':'AI COPILOT','calls.tiptitle':'Lock in the next step','calls.tip':'Offer a short launch and name a specific date for the next call.','calls.insert':'Add to note','calls.quality':'CALL QUALITY','calls.score':'The task was identified well. A concrete deadline is still missing.',
      'widget.title':'See what customers actually ask','widget.sub':'Conversations, suggestion conversion and questions missing from your knowledge base.','widget.assistant':'Assistant','widget.bot1':'Hello! I can help you choose a solution and answer your questions.','widget.user1':'Can this connect to our CRM?','widget.bot2':'Yes. I will first review your workflow and suggest a secure integration route.','widget.placeholder':'Type a message...','widget.gaps':'Knowledge gaps','widget.q1':'CRM connection timeline','widget.q1s':'asked 8 times','widget.q2':'Additional user pricing','widget.q2s':'asked 5 times','widget.coverage':'Knowledge coverage',
      'local.title':'Local data stays local','local.sub':'Nexus manages licensing and jobs. Files, ERP data and sensitive operations stay on the company computer.','local.outbound':'OUTBOUND CONNECTION','local.e1':'Last connection','local.now':'now','local.e2':'Last backup','local.e3':'Inbound ports',
      'system.title':'Not eight services.<br><em>One operating system.</em>','system.lede':'Nexus does not force your company into a generic CRM. We assemble only the modules your workflow actually needs.','compare.before':'BEFORE NEXUS · FRAGMENTED','compare.chats':'Chats','compare.calls':'Calls','compare.docs':'Documents','compare.after':'AFTER · ONE CONTROL LAYER','compare.status':'One status. One process.','system.c1t':'A process your team already understands','system.c1d':'Projects, leads, documents, money and people — shaped around your company, not someone else’s template.','system.c2t':'AI works inside the task','system.c2d':'It reviews calls, supports managers, checks documents and catches what usually gets missed.','system.c3t':'Cost and quality stay visible','system.c3d':'Limits, tokens, unresolved answers, service health and subscriptions — no blind spots.',
      'worlds.title':'One Nexus.<br><em>Different work worlds.</em>','worlds.lede':'The product starts with a problem, not a generic feature list.','worlds.w1t':'Work follows a clear route','worlds.w1d':'Every project has a status, owner, next step and a short note. Leaders see the whole picture; teammates see their work.','worlds.w1a':'Roles and permissions','worlds.w1b':'Manual statuses','worlds.w1c':'Finance and team','worlds.projects':'Projects','worlds.w2t':'AI does more than answer — it improves work','worlds.w2d':'The copilot guides live calls, the coach reviews them afterwards, and the widget reveals missing customer knowledge.','worlds.w2a':'Real-time guidance','worlds.w2b':'Personal review','worlds.w2c':'Quality control','worlds.i1':'Clarify the buying criterion<small>LIVE COACH</small>','worlds.i2':'Next step is not scheduled<small>CALL REVIEW</small>','worlds.i3':'New knowledge gap<small>WIDGET INSIGHT</small>','worlds.w3t':'Cloud controls. The local node executes.','worlds.w3d':'Sensitive files and ERP data stay in the company. Nexus delivers signed jobs, versions and settings over an outbound connection.','worlds.w3a':'No inbound ports','worlds.w3b':'Revocable license','worlds.w3c':'Managed updates',
      'deploy.title':'Runs where<br><em>it makes sense.</em>','deploy.lede':'Architecture follows the data, load and process. The subscription pays for licensing, AI, updates, monitoring and support — not a shortcut on a desktop.','deploy.localt':'On the company computer','deploy.locald':'Sensitive operations run locally. Version, license and support control stay in Nexus.','deploy.compute':'Compute','deploy.clientpc':'Client PC','deploy.closed':'Sensitive data','deploy.localkeep':'Local','deploy.cost':'Service cost','deploy.lower':'Lower','deploy.best':'BEST BALANCE','deploy.hybridt':'Cloud + Local Node','deploy.hybridd':'The team works in the cloud 24/7 while ERP, files and backups stay inside the company.','deploy.access':'Team access','deploy.private':'Private layer','deploy.onpc':'On PC','deploy.scale':'Scaling','deploy.flex':'Flexible','deploy.cloudt':'Managed by Vertux','deploy.cloudd':'Server, monitoring, backups and updates are managed centrally.','deploy.infra':'Infrastructure','deploy.maint':'Maintenance','deploy.full':'Full',
      'portal.title':'Your product stays<br><em>under your control.</em>','portal.lede':'The web account shows products, subscription, versions, AI usage and support. Knowledge and settings can change without a message for every small update.','portal.login':'Open account','portal.changelog':'View changelog','portal.connected':'CONNECTED','portal.plan':'CURRENT PLAN','portal.usage':'AI USAGE','portal.renewal':'Next renewal','portal.manage':'Manage',
      'final.title':'Your process.<br><em>Built into a product.</em>','final.lede':'We start with one operational task, assemble Nexus and connect the right modules without unnecessary infrastructure.','final.contact':'Discuss Nexus','final.windows':'Windows version',
      'footer.note':'Personal business systems by Vertux.','footer.product':'PRODUCT','footer.access':'ACCESS','footer.windows':'Windows','footer.contact':'CONTACT','footer.made':'Made by <b>Vertux</b> Studio',
      'updates.kicker':'UPDATES / NEXUS','updates.title':'Nexus gets stronger.<br><em>Release by release.</em>','updates.lede':'Product, client portal and local node changes. No marketing noise — only what became clearer, faster or safer.','updates.back':'Back to product','updates.access':'Get access','updates.v040t':'New product website','updates.v040d':'Rebuilt the Nexus presentation around the real interface and operational scenarios.','updates.v040a':'Complete Russian and English versions','updates.v040b':'Interactive Workspace, Calls, Widget and Local Node modes','updates.v040c':'Separate Account, Windows and Updates pages','updates.v030t':'Call Intelligence','updates.v030d':'Added a product scenario for call analysis and manager support.','updates.v030a':'Real-time transcription','updates.v030b':'AI copilot during the call','updates.v030c':'Quality score and personal coach after the call','updates.v020t':'Hybrid Runtime','updates.v020d':'Designed a secure shared architecture for cloud and local computers.','updates.v020a':'Local Node for Windows','updates.v020b':'Outbound TLS connection with no open ports','updates.v020c':'Managed licenses and updates',
      'download.kicker':'NEXUS / WINDOWS','download.title':'Nexus where<br><em>your team works.</em>','download.lede':'The Windows build is installed with a configured workspace and bound to the company, roles and license.','download.back':'Back to product','download.changelog':'What’s new','download.cardt':'Nexus for Windows','download.cardd':'Local client, secure product access and Local Node for systems that remain on the company computer.','download.request':'Request installation','download.req':'System requirements','download.os':'Operating system','download.arch':'Architecture','download.ram':'Memory','download.net':'Connection','download.note':'Installation is issued after product setup. There is no universal unlicensed package. This protects client data and Nexus itself.','download.webt':'Web Access','download.webd':'For teammates who need browser access without an installation. The address is included with the company invitation.','download.account':'Open account',
      'account.kicker':'CLIENT ACCESS','account.title':'Your Nexus.<br><em>Your products.</em>','account.lede':'One sign-in for workspace, AI tools, subscription, versions and support.','account.b1':'Only your company products','account.b2':'Roles and isolated data','account.b3':'Licenses and updates under control','account.formkicker':'INVITE-ONLY SIGN IN','account.formtitle':'Sign in to Nexus','account.formlede':'Use the credentials issued when your company was connected.','account.email':'Work email','account.password':'Password','account.submit':'Continue','account.help':'No invitation or sign-in address changed?','account.contact':'Contact Vertux','account.message':'The demo form does not collect or send data. Production sign-in connects to your company server.'
    }
  };

  var language = localStorage.getItem('vertux-nexus-lang') || 'ru';
  if (!translations[language]) language = 'ru';

  function setLanguage(next) {
    language = translations[next] ? next : 'ru';
    localStorage.setItem('vertux-nexus-lang', language);
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var value = translations[language][node.getAttribute('data-i18n')];
      if (value != null) node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (node) {
      var value = translations[language][node.getAttribute('data-i18n-html')];
      if (value != null) node.innerHTML = value;
    });
    document.querySelectorAll('[data-lang]').forEach(function (node) {
      node.classList.toggle('active', node.getAttribute('data-lang') === language);
    });
    var page = document.body.getAttribute('data-page') || 'home';
    var titles = {
      home:{ru:'Vertux Nexus — рабочая система вашей компании',en:'Vertux Nexus — your company operating system'},
      updates:{ru:'Обновления — Vertux Nexus',en:'Updates — Vertux Nexus'},
      download:{ru:'Nexus для Windows — Vertux Nexus',en:'Nexus for Windows — Vertux Nexus'},
      account:{ru:'Вход — Vertux Nexus',en:'Sign in — Vertux Nexus'}
    };
    if (titles[page]) document.title = titles[page][language];
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(language === 'ru' ? 'en' : 'ru'); });
  });
  setLanguage(language);

  var header = document.getElementById('siteHeader');
  var nav = document.getElementById('mainNav');
  var menuButton = document.getElementById('menuButton');
  function updateHeader() { if (header) header.classList.toggle('scrolled', window.scrollY > 18); }
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open'); document.body.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded','false');
      });
    });
  }

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(function (node) { revealObserver.observe(node); });

  function activateGroup(buttonSelector, panelSelector, attribute) {
    var buttons = document.querySelectorAll(buttonSelector);
    var panels = document.querySelectorAll(panelSelector);
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute(attribute);
        buttons.forEach(function (item) { item.classList.toggle('active', item === button); });
        panels.forEach(function (panel) { panel.classList.toggle('active', panel.getAttribute(attribute.replace('tab','panel')) === target); });
      });
    });
  }
  activateGroup('[data-demo-tab]','[data-demo-panel]','data-demo-tab');
  activateGroup('[data-world-tab]','[data-world-panel]','data-world-tab');

  var stage = document.getElementById('product');
  var productWindow = document.getElementById('productWindow');
  var pointerY = 0;
  if (stage && productWindow && !reduced) {
    stage.addEventListener('pointermove', function (event) {
      var rect = stage.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - .5;
      pointerY = x * 2.4;
      productWindow.style.setProperty('--ry', pointerY + 'deg');
    });
    stage.addEventListener('pointerleave', function () { pointerY = 0; productWindow.style.setProperty('--ry','0deg'); });
    var stageTicking = false;
    function animateStage() {
      var rect = stage.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * .78)));
      productWindow.style.setProperty('--rx', (15 - progress * 13) + 'deg');
      productWindow.style.setProperty('--stage-scale', (.91 + progress * .09).toFixed(3));
      productWindow.style.setProperty('--lift', ((1 - progress) * 48) + 'px');
      stage.classList.toggle('motion-1', progress > .2);
      stage.classList.toggle('motion-2', progress > .38);
      stage.classList.toggle('motion-3', progress > .56);
      stage.classList.toggle('motion-4', progress > .72);
      stageTicking = false;
    }
    animateStage();
    window.addEventListener('scroll', function () { if (!stageTicking) { stageTicking = true; requestAnimationFrame(animateStage); } }, {passive:true});
  } else if (stage) {
    stage.classList.add('motion-1','motion-2','motion-3','motion-4');
  }

  if (!reduced) {
    window.addEventListener('pointermove', function (event) {
      document.documentElement.style.setProperty('--mx',event.clientX+'px');
      document.documentElement.style.setProperty('--my',event.clientY+'px');
    }, {passive:true});
    document.querySelectorAll('.magnetic').forEach(function (button) {
      button.addEventListener('pointermove', function (event) {
        var rect = button.getBoundingClientRect();
        button.style.transform = 'translate(' + ((event.clientX-rect.left-rect.width/2)*.07) + 'px,' + ((event.clientY-rect.top-rect.height/2)*.1) + 'px)';
      });
      button.addEventListener('pointerleave', function () { button.style.transform = ''; });
    });
  }

  var loginForm = document.querySelector('[data-login-form]');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var message = document.querySelector('[data-login-message]');
      if (message) message.textContent = translations[language]['account.message'];
    });
  }
})();
