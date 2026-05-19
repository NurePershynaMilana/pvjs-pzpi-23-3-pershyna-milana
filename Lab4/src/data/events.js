import { EVENT_TYPES } from '@/constants'

export const events = [
  {
    id: 'vue-meetup-2026',
    title: 'Vue Meetup',
    type: EVENT_TYPES.MEETUP,
    date: '2026-05-01',
    coverSlogan: 'Talks, networking and snacks — meet other Vue devs.',
    shortDescription:
      'Зустріч Vue-розробників у дружній атмосфері. Доповіді, нетворкінг і закуски.',
    fullDescription:
      'Камерний вечір для тих, хто пише на Vue або хоче розпочати. У програмі три коротких доповіді від практиків, дискусія про Composition API та екосистему, а також вільне спілкування за чашкою кави.',
    location: 'Київ, IT-Hub',
  },
  {
    id: 'frontend-conf-2026',
    title: 'Frontend Conf',
    type: EVENT_TYPES.CONFERENCE,
    date: '2026-06-12',
    coverSlogan: 'Performance, accessibility, modern tooling.',
    shortDescription:
      'Повний день доповідей про продуктивність, доступність і сучасні інструменти фронтенду.',
    fullDescription:
      'Найбільша frontend-конференція року. Дві сцени, понад 20 доповідей про продуктивність, доступність, архітектуру SPA та сучасні build-tools. Кава-брейки, нетворкінг-зона та afterparty для учасників.',
    location: 'Львів, Palace of Arts',
  },
  {
    id: 'hackathon-2026',
    title: 'Hackathon',
    type: EVENT_TYPES.HACKATHON,
    date: '2026-07-20',
    coverSlogan: '48 hours to build something awesome with mentors and prizes.',
    shortDescription:
      '48 годин, щоб побудувати щось неймовірне — ментори, призи та незабутній досвід.',
    fullDescription:
      'Хакатон з призовим фондом і командою менторів від провідних IT-компаній України. Тема оголошується на старті, команди до 4 учасників, цілодобовий доступ до простору, харчування та технічна підтримка протягом усіх 48 годин.',
    location: 'Харків, UNIT.City',
  },
  {
    id: 'react-workshop-2026',
    title: 'React Workshop',
    type: EVENT_TYPES.WORKSHOP,
    date: '2026-08-05',
    coverSlogan: 'Hands-on React 19 — hooks, concurrent features, and more.',
    shortDescription:
      'Практичний воркшоп з React 19: нові хуки, конкурентні функції та оптимізація.',
    fullDescription:
      'Інтенсивний одноденний воркшоп для розробників із базовими знаннями React. Учасники пишуть код разом із тренером, розбирають реальні кейси, вивчають use(), useOptimistic та серверні компоненти. Максимум 20 учасників для якісного фідбеку.',
    location: 'Київ, Projector Space',
  },
  {
    id: 'node-meetup-2026',
    title: 'Node.js Meetup',
    type: EVENT_TYPES.MEETUP,
    date: '2026-08-21',
    coverSlogan: 'Backend meets JavaScript — streams, workers, and Fastify.',
    shortDescription:
      'Зустріч Node.js-розробників: стріми, worker threads та Fastify у бойових умовах.',
    fullDescription:
      'Вечір для backend-розробників, які будують сервіси на Node.js. Три доповіді від команд, які використовують Node у продакшні: робота зі стрімами, багатопотоковість через worker_threads та порівняння Fastify vs Express за реальними бенчмарками.',
    location: 'Дніпро, Coworking Hub',
  },
  {
    id: 'ux-conf-2026',
    title: 'UX Conference',
    type: EVENT_TYPES.CONFERENCE,
    date: '2026-09-03',
    coverSlogan: 'Design that works — research, systems, and real users.',
    shortDescription:
      'Конференція про UX-дослідження, дизайн-системи та роботу з реальними користувачами.',
    fullDescription:
      'Одноденна конференція для UX-дизайнерів, продакт-менеджерів і всіх, кому важливий досвід користувача. Доповіді про user research, побудову дизайн-систем з нуля, A/B-тестування та як переконати розробників у цінності UX.',
    location: 'Київ, Creative Quarter',
  },
  {
    id: 'typescript-workshop-2026',
    title: 'TypeScript Workshop',
    type: EVENT_TYPES.WORKSHOP,
    date: '2026-09-18',
    coverSlogan: 'Type-safe code from zero to advanced generics.',
    shortDescription:
      'Воркшоп з TypeScript: від основ до просунутих дженериків і conditional types.',
    fullDescription:
      'Практичний воркшоп для тих, хто хоче впевнено писати типізований TypeScript-код. Починаємо з базових типів і поступово доходимо до mapped types, conditional types та infer. Усі вправи — реальні задачі, з якими стикаються команди щодня.',
    location: 'Одеса, DevSpace',
  },
  {
    id: 'ai-conf-2026',
    title: 'AI & Dev Conference',
    type: EVENT_TYPES.CONFERENCE,
    date: '2026-10-10',
    coverSlogan: 'LLMs, agents, and the future of software development.',
    shortDescription:
      'Конференція про LLM, AI-агентів та їх вплив на майбутнє розробки програмного забезпечення.',
    fullDescription:
      'Дводенна конференція на перетині AI та розробки ПЗ. Доповіді від інженерів, які інтегрують LLM у продакшн-системи: RAG, fine-tuning, AI-агенти, інструменти для написання коду та питання безпеки. Окремий трек для практиків із hands-on сесіями.',
    location: 'Київ, NSC Olympiyskiy',
  },
  {
    id: 'gamedev-hackathon-2026',
    title: 'GameDev Hackathon',
    type: EVENT_TYPES.HACKATHON,
    date: '2026-10-25',
    coverSlogan: '72 hours to ship a playable game — any engine, any genre.',
    shortDescription:
      '72 години, щоб зробити гру з нуля — будь-який рушій, будь-який жанр.',
    fullDescription:
      'Хакатон для ігрових розробників і всіх, хто мріяв зробити свою гру. 72 години, повна свобода у виборі рушія (Unity, Godot, Phaser, або власний). Команди до 5 осіб. Журі оцінює ідею, геймплей і презентацію. Призи від партнерів та публічна демонстрація всіх проєктів.',
    location: 'Львів, GameDev Hub',
  },
  {
    id: 'devops-meetup-2026',
    title: 'DevOps Meetup',
    type: EVENT_TYPES.MEETUP,
    date: '2026-11-14',
    coverSlogan: 'Kubernetes, CI/CD, and the art of shipping without fear.',
    shortDescription:
      'Зустріч DevOps-інженерів: Kubernetes у продакшні, CI/CD та культура безстрашного деплою.',
    fullDescription:
      'Вечір для DevOps-інженерів, SRE та всіх, хто відповідає за інфраструктуру. Дві доповіді від практиків: управління Kubernetes-кластерами у реальних умовах та побудова CI/CD пайплайну, який команда не боїться запускати. Відкрита дискусія після кожної доповіді.',
    location: 'Харків, IT Cluster',
  },
  {
    id: 'css-workshop-2026',
    title: 'CSS Mastery Workshop',
    type: EVENT_TYPES.WORKSHOP,
    date: '2026-11-22',
    coverSlogan: 'Grid, container queries, and animations that wow.',
    shortDescription:
      'Воркшоп з сучасного CSS: Grid, container queries та анімації, які вражають.',
    fullDescription:
      'Практичний воркшоп для frontend-розробників, які хочуть підняти рівень верстки. Розбираємо CSS Grid у деталях, container queries, @layer, cascade layers та сучасні анімації через View Transitions API. Кожна тема — живі приклади та самостійні вправи.',
    location: 'Київ, Coworking Unit',
  },
  {
    id: 'security-conf-2026',
    title: 'Web Security Conf',
    type: EVENT_TYPES.CONFERENCE,
    date: '2026-12-05',
    coverSlogan: 'OWASP, auth, and real attacks on real apps.',
    shortDescription:
      'Конференція з веб-безпеки: OWASP Top 10, автентифікація та реальні атаки на реальні застосунки.',
    fullDescription:
      'Одноденна конференція для розробників, які хочуть писати безпечний код. Доповіді охоплюють OWASP Top 10 у 2026 році, вразливості OAuth/JWT, XSS та CSRF у сучасних фреймворках, а також практичні демонстрації пентесту веб-застосунків від сертифікованих фахівців.',
    location: 'Дніпро, Skypark',
  },
  {
    id: 'mobile-hackathon-2026',
    title: 'Mobile Hackathon',
    type: EVENT_TYPES.HACKATHON,
    date: '2026-12-13',
    coverSlogan: '36 hours to ship a mobile app — iOS, Android, or cross-platform.',
    shortDescription:
      '36 годин, щоб створити мобільний застосунок — iOS, Android або кросплатформний.',
    fullDescription:
      'Хакатон для мобільних розробників і тих, хто хоче ними стати. Дозволені будь-які технології: Swift, Kotlin, Flutter, React Native. Команди до 4 осіб. Ментори з компаній-партнерів доступні протягом усього хакатону. Призи: грошові нагороди та стажування у провідних продуктових компаніях.',
    location: 'Київ, UNIT.City',
  },
  {
    id: 'graphql-workshop-2026',
    title: 'GraphQL Workshop',
    type: EVENT_TYPES.WORKSHOP,
    date: '2027-01-15',
    coverSlogan: 'Schema design, subscriptions, and federation at scale.',
    shortDescription:
      'Воркшоп з GraphQL: проєктування схем, підписки та федерація у масштабі.',
    fullDescription:
      'Поглиблений воркшоп для тих, хто вже знайомий з REST і хоче освоїти GraphQL. Починаємо зі schema-first дизайну, переходимо до resolver-ланцюжків, N+1 проблеми та DataLoader, а завершуємо федерацією через Apollo Federation. Усі приклади — Node.js + TypeScript.',
    location: 'Львів, Tech Hub',
  },
  {
    id: 'open-source-meetup-2027',
    title: 'Open Source Meetup',
    type: EVENT_TYPES.MEETUP,
    date: '2027-01-29',
    coverSlogan: 'Contribute, maintain, and grow in the open.',
    shortDescription:
      'Зустріч для контрибʼюторів та мейнтейнерів open source: як починати, рости та не вигоряти.',
    fullDescription:
      'Вечір для тих, хто вже контрибʼютить у відкритий код або хоче розпочати. Доповіді від мейнтейнерів популярних українських та міжнародних проєктів: як знайти свій перший issue, підтримувати мотивацію, будувати репутацію та монетизувати open source-роботу.',
    location: 'Київ, Garage Hub',
  },
  {
    id: 'data-conf-2027',
    title: 'Data Engineering Conf',
    type: EVENT_TYPES.CONFERENCE,
    date: '2027-02-20',
    coverSlogan: 'Pipelines, lakehouses, and streaming data at scale.',
    shortDescription:
      'Конференція з дата-інженерії: пайплайни, lakehouse-архітектура та стримінг у масштабі.',
    fullDescription:
      'Конференція для дата-інженерів, аналітиків та архітекторів даних. Доповіді про побудову надійних ETL-пайплайнів, lakehouse-підхід з Apache Iceberg, стримінг через Kafka та Flink, а також governance і якість даних у великих організаціях.',
    location: 'Харків, Digital Campus',
  },
  {
    id: 'design-systems-workshop-2027',
    title: 'Design Systems Workshop',
    type: EVENT_TYPES.WORKSHOP,
    date: '2027-03-06',
    coverSlogan: 'Build a component library your team will actually use.',
    shortDescription:
      'Воркшоп із побудови дизайн-системи: компонентна бібліотека, яку команда реально використовує.',
    fullDescription:
      'Практичний воркшоп для команд, які хочуть побудувати або покращити свою дизайн-систему. Розбираємо токени, атомарний дизайн, Storybook, версіонування та процес синхронізації дизайн-системи між дизайнерами та розробниками. Результат — готовий шаблон для вашої команди.',
    location: 'Одеса, Creative Space',
  },
  {
    id: 'startup-hackathon-2027',
    title: 'Startup Hackathon',
    type: EVENT_TYPES.HACKATHON,
    date: '2027-03-22',
    coverSlogan: '54 hours to validate your startup idea — from zero to pitch.',
    shortDescription:
      '54 години, щоб перевірити стартап-ідею — від нуля до пітчу перед інвесторами.',
    fullDescription:
      'Хакатон для підприємців і розробників, які хочуть створити продукт з нуля. Команди до 5 осіб: розробники, дизайнери, бізнес-аналітики. Ментори з бізнес-розвитку, технологій та маркетингу. Фінал — пітч перед журі з представників венчурних фондів. Переможці отримують гранти та акселерацію.',
    location: 'Київ, iHUB',
  },
]
