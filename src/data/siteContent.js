const image = (name) => `/images/${name}`

export const assets = {
  logo: image('logo-horizontal.png'),
  logoSource: image('logo.png'),
  visitingCard: '/v-card-horizontal.jpeg',
}

export const labels = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'من نحن' },
  services: { en: 'Services', ar: 'الخدمات' },
  products: { en: 'Products', ar: 'المنتجات' },
  nursery: { en: 'Nursery', ar: 'المشتل' },
  portfolio: { en: 'Portfolio', ar: 'الأعمال' },
  blog: { en: 'Blog', ar: 'المدونة' },
  contact: { en: 'Contact', ar: 'اتصل بنا' },
  faq: { en: 'FAQs', ar: 'الأسئلة' },
  cart: { en: 'Cart', ar: 'السلة' },
  checkout: { en: 'Checkout', ar: 'الدفع' },
  legal: { en: 'Legal', ar: 'القوانين' },
  getQuote: { en: 'Get a Quote', ar: 'اطلب عرض سعر' },
  freeConsultation: { en: 'Free Consultation', ar: 'استشارة مجانية' },
  shopNow: { en: 'Shop Now', ar: 'تسوق الآن' },
  viewDetails: { en: 'View details', ar: 'عرض التفاصيل' },
  addToCart: { en: 'Add to cart', ar: 'أضف للسلة' },
  requestQuote: { en: 'Request quote', ar: 'اطلب عرض سعر' },
  readMore: { en: 'Read more', ar: 'اقرأ المزيد' },
  viewAll: { en: 'View all', ar: 'عرض الكل' },
  search: { en: 'Search', ar: 'بحث' },
  all: { en: 'All', ar: 'الكل' },
  featured: { en: 'Featured', ar: 'مختار' },
  priceFrom: { en: 'From', ar: 'ابتداء من' },
  subtotal: { en: 'Subtotal', ar: 'المجموع' },
  continueShopping: { en: 'Continue shopping', ar: 'متابعة التسوق' },
  proceedCheckout: { en: 'Proceed to checkout', ar: 'المتابعة للدفع' },
  emptyCart: { en: 'Your cart is empty.', ar: 'سلتك فارغة.' },
  sendMessage: { en: 'Send message', ar: 'إرسال الرسالة' },
  formSuccess: {
    en: 'Thanks. Your request has been saved for the EDGE team.',
    ar: 'شكرا لك. تم حفظ طلبك لفريق EDGE.',
  },
  language: { en: 'العربية', ar: 'English' },
}

export const navItems = [
  { to: '/', label: 'home' },
  { to: '/services', label: 'services' },
  { to: '/products', label: 'products' },
  { to: '/nursery', label: 'nursery' },
  { to: '/portfolio', label: 'portfolio' },
  { to: '/blog', label: 'blog' },
  { to: '/contact', label: 'contact' },
]

export const contactInfo = {
  phone: '+971 55 7373242',
  landline: '+971 4 5728176',
  whatsapp: '+971 52 7373922',
  email: '',
  contacts: [
    { name: 'Muhammad Naseer', phone: '+971 50 2424666' },
    { name: 'Muhammad Sadiq', phone: '+971 55 5122626' },
    { name: 'Asad Mehmood', phone: '+971 52 7373922' },
  ],
  address: {
    en: 'Shop No. 8, Street 5A, Al Barsha Second, Dubai, UAE',
    ar: 'محل رقم 8، شارع 5A، البرشاء الثانية، دبي، الإمارات',
  },
  hours: {
    en: 'Saturday to Thursday, 8:00 AM - 6:00 PM',
    ar: 'السبت إلى الخميس، 8:00 صباحا - 6:00 مساء',
  },
}

export const hero = {
  eyebrow: {
    en: 'Dubai landscaping, nursery and agriculture supplies',
    ar: 'تنسيق حدائق ومشتل ومستلزمات زراعية في دبي',
  },
  title: {
    en: 'Grow greener with EDGE Agriculture.',
    ar: 'مع EDGE Agriculture، حديقتك تزدهر.',
  },
  subtitle: {
    en: 'Premium irrigation tools, fertilizers, seeds, nursery plants, and complete villa landscaping services for Dubai homes and commercial spaces.',
    ar: 'معدات ري احترافية وأسمدة وبذور ونباتات مشتل وخدمات تنسيق حدائق متكاملة للفلل والمساحات التجارية في دبي.',
  },
  image: image('5.jpeg'),
  metrics: [
    { value: '360+', label: { en: 'plant and supply items', ar: 'منتجا ونبتة' } },
    { value: '24h', label: { en: 'quote response target', ar: 'للرد على العروض' } },
    { value: 'EN/AR', label: { en: 'bilingual support', ar: 'دعم ثنائي اللغة' } },
  ],
}

export const productCategories = [
  {
    slug: 'irrigation',
    icon: 'droplets',
    title: { en: 'Irrigation', ar: 'الري' },
    summary: {
      en: 'Drip systems, sprinklers, timers, valves, pipes, and water-saving parts.',
      ar: 'أنظمة تنقيط ورشاشات ومؤقتات وصمامات وأنابيب موفرة للمياه.',
    },
  },
  {
    slug: 'fertilizers',
    icon: 'sprout',
    title: { en: 'Fertilizers', ar: 'الأسمدة' },
    summary: {
      en: 'Organic blends, soil conditioners, compost, and seasonal nutrients.',
      ar: 'خلطات عضوية ومحسنات تربة وكمبوست ومغذيات موسمية.',
    },
  },
  {
    slug: 'seeds',
    icon: 'seedling',
    title: { en: 'Seeds', ar: 'البذور' },
    summary: {
      en: 'Vegetable, herb, flower, and lawn seed packs suited to UAE conditions.',
      ar: 'بذور خضروات وأعشاب وزهور ومسطحات خضراء مناسبة لطقس الإمارات.',
    },
  },
  {
    slug: 'tools',
    icon: 'shovel',
    title: { en: 'Garden Tools', ar: 'أدوات الحدائق' },
    summary: {
      en: 'Hand tools, sprayers, planters, safety gear, and nursery essentials.',
      ar: 'أدوات يدوية ومرشات وأحواض ومعدات سلامة واحتياجات المشتل.',
    },
  },
]

export const services = [
  {
    slug: 'villa-landscaping',
    icon: 'trees',
    title: { en: 'Villa Landscaping', ar: 'تنسيق حدائق الفلل' },
    summary: {
      en: 'Softscape and hardscape design for private gardens, entrances, courtyards, and pool areas.',
      ar: 'تصميم وتنفيذ المسطحات النباتية والإنشائية لحدائق الفلل والمداخل والساحات ومناطق المسابح.',
    },
    detail: {
      en: 'From soil preparation and plant selection to pergolas, paving, turf, lighting, and planting, the villa landscaping service gives every outdoor zone a coherent plan for Dubai conditions.',
      ar: 'من تجهيز التربة واختيار النباتات إلى البرجولات والأرضيات والعشب والإضاءة والزراعة، تمنح خدمة تنسيق الفلل كل مساحة خارجية خطة متكاملة تناسب مناخ دبي.',
    },
    image: image('14.jpeg'),
    features: [
      { en: 'Concept design and plant palette', ar: 'تصميم مبدئي وقائمة نباتات' },
      { en: 'Hardscape, turf, pergolas, and lighting', ar: 'أرضيات وعشب وبرجولات وإضاءة' },
      { en: 'Low-maintenance desert-friendly planting', ar: 'زراعة سهلة العناية ومناسبة للصحراء' },
    ],
    process: [
      { en: 'Site survey', ar: 'معاينة الموقع' },
      { en: 'Design proposal', ar: 'مقترح التصميم' },
      { en: 'Installation', ar: 'التنفيذ' },
      { en: 'Aftercare', ar: 'العناية اللاحقة' },
    ],
  },
  {
    slug: 'irrigation-systems',
    icon: 'droplets',
    title: { en: 'Smart Irrigation', ar: 'أنظمة الري الذكية' },
    summary: {
      en: 'Automated drip and sprinkler systems designed to reduce water waste.',
      ar: 'أنظمة تنقيط ورش آلية مصممة لتقليل هدر المياه.',
    },
    detail: {
      en: 'EDGE Agriculture designs, installs, and maintains irrigation systems with timers, zones, filters, pumps, and efficient emitters for villas, nurseries, farms, and commercial landscapes.',
      ar: 'تصمم EDGE Agriculture وتنفذ وتصون أنظمة ري بمؤقتات ومناطق وفلاتر ومضخات ونقاطات فعالة للفلل والمشاتل والمزارع والمساحات التجارية.',
    },
    image: image('9.jpeg'),
    features: [
      { en: 'Drip, sprinkler, and misting layouts', ar: 'مخططات تنقيط ورش ورذاذ' },
      { en: 'Timers, valves, filters, and pumps', ar: 'مؤقتات وصمامات وفلاتر ومضخات' },
      { en: 'Water-saving zone planning', ar: 'تخطيط مناطق موفر للمياه' },
    ],
    process: [
      { en: 'Water pressure check', ar: 'فحص ضغط المياه' },
      { en: 'Zone planning', ar: 'تخطيط المناطق' },
      { en: 'Installation', ar: 'التركيب' },
      { en: 'Calibration', ar: 'المعايرة' },
    ],
  },
  {
    slug: 'pools-civil-works',
    icon: 'waves',
    title: { en: 'Pools & Civil Works', ar: 'المسابح والأعمال المدنية' },
    summary: {
      en: 'Pool surroundings, paving, planters, retaining walls, edging, and outdoor finishes.',
      ar: 'محيط المسابح والأرضيات والأحواض والجدران والحواف والتشطيبات الخارجية.',
    },
    detail: {
      en: 'Coordinate garden upgrades with civil works so paths, planters, pool edges, and outdoor zones feel considered, durable, and easy to maintain.',
      ar: 'تنسيق تطوير الحديقة مع الأعمال المدنية حتى تكون الممرات والأحواض وحواف المسبح والمساحات الخارجية عملية ومتينة وسهلة الصيانة.',
    },
    image: image('13.jpeg'),
    features: [
      { en: 'Pool deck and outdoor paving', ar: 'أرضيات المسابح والممرات الخارجية' },
      { en: 'Planter boxes and retaining edges', ar: 'أحواض زراعة وحواف داعمة' },
      { en: 'Outdoor finishes and drainage', ar: 'تشطيبات خارجية وتصريف' },
    ],
    process: [
      { en: 'Scope review', ar: 'مراجعة النطاق' },
      { en: 'Material selection', ar: 'اختيار المواد' },
      { en: 'Civil execution', ar: 'تنفيذ الأعمال' },
      { en: 'Finishing', ar: 'التشطيب' },
    ],
  },
  {
    slug: 'nursery-sourcing',
    icon: 'leaf',
    title: { en: 'Nursery Sourcing', ar: 'توريد نباتات المشتل' },
    summary: {
      en: 'Indoor plants, palms, climbers, shrubs, flowers, groundcover, planters, and soils.',
      ar: 'نباتات داخلية ونخيل ومتسلقات وشجيرات وزهور وأغطية أرضية وأحواض وتربة.',
    },
    detail: {
      en: 'The nursery team helps homeowners, contractors, and designers source the right plant stock with care information and installation support when needed.',
      ar: 'يساعد فريق المشتل أصحاب المنازل والمقاولين والمصممين في اختيار النباتات المناسبة مع معلومات العناية وخدمة التركيب عند الحاجة.',
    },
    image: image('6.jpeg'),
    features: [
      { en: 'Palms, trees, shrubs, and climbers', ar: 'نخيل وأشجار وشجيرات ومتسلقات' },
      { en: 'Indoor plant recommendations', ar: 'ترشيحات للنباتات الداخلية' },
      { en: 'Planters, soil, and accessories', ar: 'أحواض وتربة وإكسسوارات' },
    ],
    process: [
      { en: 'Plant brief', ar: 'تحديد الاحتياج' },
      { en: 'Stock selection', ar: 'اختيار المخزون' },
      { en: 'Delivery', ar: 'التوصيل' },
      { en: 'Care guide', ar: 'دليل العناية' },
    ],
  },
]

export const products = [
  {
    id: 'drip-kit-01',
    category: 'irrigation',
    name: { en: 'Drip Irrigation Starter Kit', ar: 'طقم ري بالتنقيط' },
    description: {
      en: 'A compact kit for villa planters, balconies, and small garden zones.',
      ar: 'طقم عملي لأحواض الفلل والشرفات ومناطق الحدائق الصغيرة.',
    },
    price: 185,
    tag: { en: 'Water saving', ar: 'موفر للمياه' },
    image: image('5.jpeg'),
    specs: [
      { en: 'Includes pipe, emitters, connectors, and timer option', ar: 'يشمل أنابيب ونقاطات ووصلات وخيار مؤقت' },
      { en: 'Best for balcony beds and villa planters', ar: 'مناسب للشرفات وأحواض الفلل' },
    ],
  },
  {
    id: 'sprinkler-rotor-02',
    category: 'irrigation',
    name: { en: 'Adjustable Lawn Sprinkler', ar: 'رشاش عشب قابل للتعديل' },
    description: {
      en: 'Adjustable coverage for turf, groundcover, and mixed garden beds.',
      ar: 'تغطية قابلة للتعديل للعشب والأغطية الأرضية وأحواض الزراعة.',
    },
    price: 58,
    tag: { en: 'Popular', ar: 'الأكثر طلبا' },
    image: image('9.jpeg'),
    specs: [
      { en: 'Adjustable spray angle', ar: 'زاوية رش قابلة للتعديل' },
      { en: 'Compatible with common irrigation lines', ar: 'متوافق مع خطوط الري الشائعة' },
    ],
  },
  {
    id: 'organic-compost-03',
    category: 'fertilizers',
    name: { en: 'Organic Compost Blend', ar: 'خلطة كمبوست عضوية' },
    description: {
      en: 'Soil-building compost for UAE gardens, planters, and nursery use.',
      ar: 'كمبوست لتحسين تربة الحدائق والأحواض والمشاتل في الإمارات.',
    },
    price: 42,
    tag: { en: 'Organic', ar: 'عضوي' },
    image: image('10.jpeg'),
    specs: [
      { en: 'Improves moisture retention', ar: 'يحسن احتفاظ التربة بالرطوبة' },
      { en: 'Suitable for palms, shrubs, and vegetables', ar: 'مناسب للنخيل والشجيرات والخضروات' },
    ],
  },
  {
    id: 'palm-feed-04',
    category: 'fertilizers',
    name: { en: 'Palm & Tree Fertilizer', ar: 'سماد للنخيل والأشجار' },
    description: {
      en: 'Balanced nutrients for palms, ornamental trees, and mature landscapes.',
      ar: 'مغذيات متوازنة للنخيل والأشجار التزيينية والمساحات الناضجة.',
    },
    price: 74,
    tag: { en: 'For palms', ar: 'للنخيل' },
    image: image('13.jpeg'),
    specs: [
      { en: 'Slow-release formula', ar: 'تركيبة بطيئة الذوبان' },
      { en: 'Supports leaf color and root strength', ar: 'يدعم لون الأوراق وقوة الجذور' },
    ],
  },
  {
    id: 'herb-seeds-05',
    category: 'seeds',
    name: { en: 'Herb Seed Collection', ar: 'مجموعة بذور أعشاب' },
    description: {
      en: 'Basil, mint, coriander, parsley, and seasonal culinary herbs.',
      ar: 'ريحان ونعناع وكزبرة وبقدونس وأعشاب مطبخ موسمية.',
    },
    price: 35,
    tag: { en: 'Kitchen garden', ar: 'حديقة منزلية' },
    image: image('11.jpeg'),
    specs: [
      { en: 'Five seed packs', ar: 'خمس عبوات بذور' },
      { en: 'Care guide included', ar: 'يتضمن دليل عناية' },
    ],
  },
  {
    id: 'garden-tool-set-06',
    category: 'tools',
    name: { en: 'Garden Hand Tool Set', ar: 'طقم أدوات يدوية للحديقة' },
    description: {
      en: 'Durable everyday tools for planting, pruning, and soil care.',
      ar: 'أدوات يومية متينة للزراعة والتقليم والعناية بالتربة.',
    },
    price: 96,
    tag: { en: 'Essential', ar: 'أساسي' },
    image: image('12.jpeg'),
    specs: [
      { en: 'Trowel, fork, pruner, gloves, and bag', ar: 'مجرفة وشوكة ومقص وقفازات وحقيبة' },
      { en: 'Comfort grip handles', ar: 'مقابض مريحة' },
    ],
  },
]

export const nurseryCategories = [
  { slug: 'climbers', label: { en: 'Climbers', ar: 'متسلقات' } },
  { slug: 'shrubs', label: { en: 'Shrubs', ar: 'شجيرات' } },
  { slug: 'groundcover', label: { en: 'Groundcover', ar: 'أغطية أرضية' } },
  { slug: 'flowers', label: { en: 'Flowers', ar: 'زهور' } },
  { slug: 'trees-palms', label: { en: 'Trees & Palms', ar: 'أشجار ونخيل' } },
  { slug: 'indoor', label: { en: 'Indoor Plants', ar: 'نباتات داخلية' } },
]

export const plants = [
  {
    id: 'bougainvillea',
    category: 'climbers',
    name: { en: 'Bougainvillea', ar: 'جهنمية' },
    botanical: 'Bougainvillea glabra',
    care: { en: 'Full sun, low water once established.', ar: 'شمس مباشرة، ري قليل بعد الاستقرار.' },
    price: 45,
    image: image('1.jpeg'),
  },
  {
    id: 'ficus',
    category: 'shrubs',
    name: { en: 'Ficus Hedge', ar: 'فيكس سياج' },
    botanical: 'Ficus microcarpa',
    care: { en: 'Bright sun, regular trimming, moderate water.', ar: 'شمس قوية، تقليم منتظم، ري متوسط.' },
    price: 38,
    image: image('12.jpeg'),
  },
  {
    id: 'wedelia',
    category: 'groundcover',
    name: { en: 'Wedelia Groundcover', ar: 'ويدليا غطاء أرضي' },
    botanical: 'Sphagneticola trilobata',
    care: { en: 'Sun to partial shade with regular irrigation.', ar: 'شمس إلى ظل جزئي مع ري منتظم.' },
    price: 18,
    image: image('10.jpeg'),
  },
  {
    id: 'petunia',
    category: 'flowers',
    name: { en: 'Seasonal Petunia', ar: 'بتونيا موسمية' },
    botanical: 'Petunia hybrida',
    care: { en: 'Morning sun, rich soil, deadhead often.', ar: 'شمس صباحية، تربة غنية، إزالة الزهور الذابلة.' },
    price: 12,
    image: image('4.jpeg'),
  },
  {
    id: 'date-palm',
    category: 'trees-palms',
    name: { en: 'Date Palm', ar: 'نخلة تمر' },
    botanical: 'Phoenix dactylifera',
    care: { en: 'Full sun, deep watering, sandy soil.', ar: 'شمس مباشرة، ري عميق، تربة رملية.' },
    price: 450,
    image: image('13.jpeg'),
  },
  {
    id: 'monstera',
    category: 'indoor',
    name: { en: 'Monstera', ar: 'مونستيرا' },
    botanical: 'Monstera deliciosa',
    care: { en: 'Bright indirect light and well-drained soil.', ar: 'ضوء ساطع غير مباشر وتربة جيدة التصريف.' },
    price: 120,
    image: image('11.jpeg'),
  },
]

export const portfolioProjects = [
  {
    id: 'barsha-villa',
    category: { en: 'Residential', ar: 'سكني' },
    title: { en: 'Al Barsha Villa Garden', ar: 'حديقة فيلا البرشاء' },
    summary: {
      en: 'A low-maintenance family garden with shaded seating, turf, and drip irrigation.',
      ar: 'حديقة عائلية سهلة العناية مع جلسة مظللة وعشب وري بالتنقيط.',
    },
    image: image('14.jpeg'),
  },
  {
    id: 'pool-courtyard',
    category: { en: 'Pools', ar: 'مسابح' },
    title: { en: 'Poolside Courtyard Refresh', ar: 'تجديد فناء بجانب المسبح' },
    summary: {
      en: 'Planters, palms, lighting, and textured paving around an outdoor pool.',
      ar: 'أحواض ونخيل وإضاءة وأرضيات حول مسبح خارجي.',
    },
    image: image('8.jpeg'),
  },
  {
    id: 'commercial-entry',
    category: { en: 'Commercial', ar: 'تجاري' },
    title: { en: 'Commercial Entrance Softscape', ar: 'زراعة مدخل تجاري' },
    summary: {
      en: 'Layered shrubs, palms, seasonal flowers, and clean irrigation access.',
      ar: 'شجيرات ونخيل وزهور موسمية مع وصول واضح للري.',
    },
    image: image('6.jpeg'),
  },
]

export const blogPosts = [
  {
    slug: 'water-saving-irrigation-dubai',
    title: {
      en: 'Water-saving irrigation tips for Dubai gardens',
      ar: 'نصائح ري موفرة للمياه لحدائق دبي',
    },
    excerpt: {
      en: 'How to plan zones, timers, and drip lines for healthier plants and lower water use.',
      ar: 'كيف تخطط مناطق الري والمؤقتات وخطوط التنقيط لنباتات أفضل واستهلاك أقل.',
    },
    image: image('5.jpeg'),
    date: '2026-05-12',
  },
  {
    slug: 'best-plants-for-uae-villas',
    title: { en: 'Best plants for UAE villa landscapes', ar: 'أفضل نباتات لحدائق الفلل في الإمارات' },
    excerpt: {
      en: 'Palms, climbers, shrubs, and groundcovers that can handle heat beautifully.',
      ar: 'نخيل ومتسلقات وشجيرات وأغطية أرضية تتحمل الحرارة بجمال.',
    },
    image: image('3.jpeg'),
    date: '2026-04-28',
  },
  {
    slug: 'organic-fertilizer-season',
    title: { en: 'When to use organic fertilizers in Dubai', ar: 'متى تستخدم الأسمدة العضوية في دبي' },
    excerpt: {
      en: 'A simple seasonal rhythm for feeding lawns, palms, flowers, and planters.',
      ar: 'جدول موسمي بسيط لتغذية العشب والنخيل والزهور والأحواض.',
    },
    image: image('10.jpeg'),
    date: '2026-04-05',
  },
]

export const faqs = [
  {
    question: { en: 'Do you offer maintenance after installation?', ar: 'هل تقدمون صيانة بعد التنفيذ؟' },
    answer: {
      en: 'Yes. EDGE Agriculture can plan aftercare visits, irrigation checks, pruning, fertilization, and seasonal replacements.',
      ar: 'نعم. يمكن لفريق EDGE Agriculture ترتيب زيارات عناية وفحص ري وتقليم وتسميد واستبدال موسمي.',
    },
  },
  {
    question: { en: 'Can I buy products online and request installation?', ar: 'هل يمكن شراء المنتجات وطلب التركيب؟' },
    answer: {
      en: 'Yes. The catalog supports product enquiries and cart planning, and the contact form can include installation notes.',
      ar: 'نعم. يدعم الكتالوج طلبات المنتجات وتخطيط السلة، ويمكن إضافة ملاحظات التركيب في نموذج التواصل.',
    },
  },
  {
    question: { en: 'Do you provide Arabic and English content?', ar: 'هل يتوفر المحتوى بالعربية والإنجليزية؟' },
    answer: {
      en: 'The website is bilingual with right-to-left Arabic layout support and localized calls to action.',
      ar: 'الموقع ثنائي اللغة ويدعم اتجاه العربية من اليمين إلى اليسار ودعوات إجراء محلية.',
    },
  },
  {
    question: { en: 'Which areas do you serve?', ar: 'ما المناطق التي تخدمونها؟' },
    answer: {
      en: 'The website is positioned for Dubai, including Al Barsha, Dubai Marina, Palm Jumeirah, and surrounding villa communities.',
      ar: 'الموقع موجه لدبي، بما في ذلك البرشاء ودبي مارينا ونخلة جميرا ومجتمعات الفلل القريبة.',
    },
  },
]

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: 'EDGE Agriculture',
  url: 'https://edge-agri.ae',
  image: 'https://edge-agri.ae/images/logo-horizontal.png',
  telephone: contactInfo.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 8, Street 5A, Al Barsha Second',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: ['https://instagram.com/edgeagri', 'https://facebook.com/edgeagri'],
}
