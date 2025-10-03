export const blogPosts = [
  // {
  //   id: 1,
  //   category: ["Data and AI", "Data Science"],
  //   title: "Build trustworthy graph neural networks",
  //   slug: "trustworthy-graph-neural-networks",
  //   excerpt:
  //     "Artificial intelligence (AI) is rapidly transforming our world, from recommendations to business decisions...",
  //   image: "/assets/HomePage/b6.jpg",
  //   author: "Linethemes",
  //   date: "November 19, 2024",
  //   points: [
  //     "Commitment to exceptional customer experience",
  //     "Drive for innovation and industry disruption",
  //   ],
  //   solutions: "Edgematics optimized the telecom provider's data ecosystem...",
  //   content: [
  //     {
  //       type: "heading",
  //       content: `
  //     <h3 class="text-xl font-normal leading-relaxed">
  //       Artificial intelligence (AI) is rapidly transforming our world, from recommending
  //       products to diagnosing diseases. Indeed, Graph Neural Networks (GNNs), a type of AI
  //       that excels at analyzing complex relationships within graph data, can be used for a
  //       number of applications such as:
  //     </h3>
  //   `,
  //     },
  //     {
  //       type: "list",
  //       content: `
  //     <ul class="mt-6 space-y-3 text-lg">
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">1.</span>
  //         <span><strong>Recommending products or content</strong> on social media and e-commerce platforms.</span>
  //       </li>
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">2.</span>
  //         <span><strong>Detecting fraud and anomalies</strong> in financial transactions and network activity.</span>
  //       </li>
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">3.</span>
  //         <span><strong>Discovering new drugs and materials</strong> in scientific research.</span>
  //       </li>
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">4.</span>
  //         <span><strong>Analyzing social networks and interactions</strong> to understand human behavior.</span>
  //       </li>
  //     </ul>
  //   `,
  //     },
  //     {
  //       type: "dropcap",
  //       content: `
  //     <p class="mt-8 text-lg leading-relaxed">
  //       <span class="text-5xl font-normal text-blue-600 align-middle mr-1 inline-block">G</span>
  //       iven that AI and GNNs are increasingly being used in ways that can have a significant
  //       social impact and can influence an individual’s life chances, such as in medicine,
  //       it’s crucial to ensure these systems are trustworthy. In this blog post, we give an
  //       overview of how the power of GNNs is being harnessed, how they can be implemented, and
  //       best practices to increase the trustworthiness of GNNs.
  //     </p>
  //   `,
  //     },
  //     {
  //       type: "heading",
  //       content: `<h2 class="mt-10 text-2xl font-bold text-gray-900">What are Graph Neural Networks?</h2>`,
  //     },
  //     {
  //       type: "dropcap",
  //       content: `
  //     <p class="mt-8 text-lg leading-relaxed">
  //       Graphs (or networks) are data structures that are present in different contexts of biology, engineering, physics, and economics that are composed from two fundamental elements: nodes and edges. Here, nodes represent entities, and the edges represent the relationships between those entities. Using this combination of nodes and edges, GNNs can be used to represent multiple types of data, including:
  //     </p>
  //   `,
  //     },
  //     {
  //       type: "list",
  //       content: `
  //     <ul class="mt-6 space-y-3 text-lg">
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">1.</span>
  //         <span><strong>Recommending products or content</strong> on social media and e-commerce platforms.</span>
  //       </li>
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">2.</span>
  //         <span><strong>Detecting fraud and anomalies</strong> in financial transactions and network activity.</span>
  //       </li>
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">3.</span>
  //         <span><strong>Discovering new drugs and materials</strong> in scientific research.</span>
  //       </li>
  //       <li class="flex items-start">
  //         <span class="text-blue-600 font-bold mr-2">4.</span>
  //         <span><strong>Analyzing social networks and interactions</strong> to understand human behavior.</span>
  //       </li>
  //     </ul>
  //   `,
  //     },
  //   ],
  // },
  {
    id: 1,
    category: ["HealthTech", "Wellness & AI"],
    title: "Smartphone-based pulse diagnosis and personalized wellness",
    slug: "smartphone-pulse-diagnosis-wellness",
    excerpt:
      "AyuRythm fuses Ayurvedic wisdom with AI to deliver pulse-based diagnostics and actionable recommendations—via a simple selfie video.",
    image: "/assets/HomePage/ayurvedam.png",
    author: "AyuRythm Team",
    date: "October 3, 2025",
    points: [
      "Non-invasive, fast health diagnostics on consumer smartphones",
      "Personalized lifestyle & treatment recommendations grounded in Ayurveda",
      "Scaling wellness access to millions via digital platform",
    ],
    solutions:
      "AyuRythm built a pipeline combining video signal processing, biomarker extraction, Ayurvedic modeling, and recommendation engines to transform raw smartphone video into holistic wellness insights.",
    content: [
      {
        type: "heading",
        content:
          '<h3 class="text-xl font-normal leading-relaxed">Bridging ancient science and modern tech</h3>',
      },
      {
        type: "dropcap",
        content:
          '\n<p class="mt-8 text-lg leading-relaxed">\nAyuRythm empowers users to take their health into their own hands: by recording a **30-second selfie video**, the app captures pulse wave information using camera-based plethysmography and derives signals that map to Ayurvedic biomarkers. Based on those, it computes a **Holistic Wellness Index**, assesses dosha imbalances, and then delivers personalized recommendations including yoga, pranayama, diet, herbal remedies, and home remedies drawn from a large Ayurvedic knowledge repository.\n</p>\n',
      },
      {
        type: "heading",
        content:
          '<h2 class="mt-10 text-2xl font-bold text-gray-900">Challenges & Approach</h2>',
      },
      {
        type: "list",
        content:
          '\n<ul class="mt-6 space-y-3 text-lg">\n  <li class="flex items-start"><span class="text-blue-600 font-bold mr-2">1.</span><span>Extracting reliable pulse signals from consumer smartphone video under varying lighting and motion conditions.</span></li>\n  <li class="flex items-start"><span class="text-blue-600 font-bold mr-2">2.</span><span>Mapping digital signal features to Ayurvedic biomarkers (e.g. Vata, Pitta, Kapha) in a meaningful, interpretable way.</span></li>\n  <li class="flex items-start"><span class="text-blue-600 font-bold mr-2">3.</span><span>Generating safe, individualized wellness recommendations that integrate both evidence-based modern health and classical Ayurvedic principles.</span></li>\n  <li class="flex items-start"><span class="text-blue-600 font-bold mr-2">4.</span><span>Ensuring trust, explainability, and validation so users feel confident in the insights.</span></li>\n</ul>\n',
      },
      {
        type: "heading",
        content:
          '<h2 class="mt-10 text-2xl font-bold text-gray-900">Solution Architecture & Workflow</h2>',
      },
      {
        type: "list",
        content:
          '\n<ul class="mt-6 space-y-3 text-lg">\n  <li><strong>Video Capture & Preprocessing:</strong> users record a 30-second selfie video; frames are aligned, stabilized, and preprocessed to isolate pulsatile signal.</li>\n  <li><strong>Signal Extraction:</strong> apply algorithms (e.g. photoplethysmography, bandpass filtering, motion compensation) to extract time-series pulse waveform features.</li>\n  <li><strong>Feature Modeling & Mapping:</strong> compute derived features (heart rate variability, waveform amplitude, harmonics) and feed into a model that maps to Ayurvedic descriptors (dosha indicators, wellness index).</li>\n  <li><strong>Recommendation Engine:</strong> rules + ML-based system that suggests yoga/pranayama routines, dietary adjustments, herbal remedies, and curated home remedies tailored to the user\'s imbalance profile and goals.</li>\n  <li><strong>User Feedback & Learning Loop:</strong> continuous monitoring of user responses, trend tracking over time, and model retraining to refine personalization.</li>\n</ul>\n',
      },
      {
        type: "heading",
        content:
          '<h2 class="mt-10 text-2xl font-bold text-gray-900">Benefits & Impact</h2>',
      },
      {
        type: "list",
        content:
          '\n<ul class="mt-6 space-y-3 text-lg">\n  <li><strong>Scalable, non-invasive diagnostics:</strong> any smartphone user can access Ayurvedic pulse assessment without requiring specialized hardware.</li>\n  <li><strong>Personalization at scale:</strong> Curated wellness plans tailored to individual body types, goals, and fluctuations over time.</li>\n  <li><strong>Engagement & retention:</strong> users receive actionable, contextual recommendations (yoga, diet, herbs), driving stickiness.</li>\n  <li><strong>Wellness democratization:</strong> bridging access for people who cannot easily consult Ayurvedic practitioners but want deeper health introspection.</li>\n  <li><strong>Trust & transparency:</strong> by blending interpretable Ayurvedic logic with data-driven validation and explaining suggestions to users, trust is enhanced.</li>\n</ul>\n',
      },
    ],
  },
  {
    id: 2,
    category: ["FinTech", "Lending", "Financial Inclusion"],
    title:
      "Expanding financial access through digital-first diversified lending",
    slug: "digital-financial-inclusion-iifl",
    excerpt:
      "IIFL Finance has built one of India’s largest diversified loan portfolios, blending technology, branch presence, and core values (Fairness, Integrity, Transparency) to serve retail and corporate clients across 500+ cities.",
    image: "/assets/HomePage/IIFL.png",
    author: "IIFL Finance",
    date: "October 3, 2025",
    points: [
      "₹78,341 Cr Assets under Management (as on March 31, 2025)",
      "2600+ branches across 500+ cities in India",
      "38,689 employees driving financial inclusion",
      "Rated AA/Stable by CRISIL",
    ],
    solutions:
      "By combining proprietary digital platforms with a nationwide physical network, IIFL delivers affordable home loans, MSME loans, microfinance, gold loans, and wealth solutions to millions of customers—while ensuring fairness, integrity, and transparency.",
    content: [
      {
        type: "heading",
        content:
          '<h3 class="text-xl font-normal font-style: italic leading-relaxed">"Enabling financial access for every segment"</h3>',
      },
      {
        type: "dropcap",
        content:
          '\n<p class="mt-8 text-lg leading-relaxed">\nSince 1995, IIFL has been one of India’s leading financial services providers, trusted by retail customers, MSMEs, and corporates. With subsidiaries like <strong>IIFL Home Finance</strong>, <strong>IIFL Samasta Finance</strong>, and <strong>IIFL Fintech</strong>, the group caters to the entire spectrum of financial needs—from affordable housing and microfinance for women entrepreneurs, to capital market finance and wealth management for large investors.</p>\n',
      },
      {
        type: "heading",
        content:
          '<h2 class="mt-10 text-2xl font-bold text-gray-900">Challenges & Objectives</h2>',
      },
      {
        type: "list",
        content:
          '\n<ul class="mt-6 space-y-3 text-lg">\n  <li><span class="text-blue-600 font-bold mr-2">1.</span> Bridging financial gaps for underserved populations like women, rural communities, and small entrepreneurs.</li>\n  <li><span class="text-blue-600 font-bold mr-2">2.</span> Ensuring trust and compliance while scaling across 500+ cities with diverse regulatory and socio-economic contexts.</li>\n  <li><span class="text-blue-600 font-bold mr-2">3.</span> Managing a ₹78,341 Cr AUM with strong governance, risk management, and transparency.</li>\n  <li><span class="text-blue-600 font-bold mr-2">4.</span> Leveraging proprietary technology to deliver faster, more inclusive, and digital-first lending experiences.</li>\n</ul>\n',
      },
      {
        type: "heading",
        content:
          '<h2 class="mt-10 text-2xl font-bold text-gray-900">Solution Approach</h2>',
      },
      {
        type: "list",
        content:
          '\n<ul class="mt-6 space-y-3 text-lg">\n  <li><strong>Diversified Lending Portfolio:</strong> Affordable housing loans, MSME financing, microfinance for women, gold loans, and capital market finance to serve every segment of society.</li>\n  <li><strong>Technology DNA:</strong> Proprietary digital platforms and IIFL Fintech’s innovations streamline onboarding, credit scoring, and digital sales for MSMEs.</li>\n  <li><strong>Branch + Digital Hybrid Model:</strong> 2600+ physical branches supported by digital channels ensure reach in rural and urban India alike.</li>\n  <li><strong>Strong Governance & FIT Values:</strong> Every business decision guided by Fairness, Integrity, and Transparency, ensuring long-term trust with stakeholders.</li>\n  <li><strong>Resilient Balance Sheet:</strong> AA/Stable credit rating and proven governance structure vindicated during crises.</li>\n</ul>\n',
      },
      {
        type: "heading",
        content:
          '<h2 class="mt-10 text-2xl font-bold text-gray-900">Benefits & Impact</h2>',
      },
      {
        type: "list",
        content:
          '\n<ul class="mt-6 space-y-3 text-lg">\n  <li><strong>Financial Inclusion at Scale:</strong> Empowering millions of Indians with access to affordable loans and credit facilities, especially first-time borrowers.</li>\n  <li><strong>Women Empowerment:</strong> Through IIFL Samasta Finance, microfinance services uplift women entrepreneurs via joint liability groups.</li>\n  <li><strong>Affordable Housing Growth:</strong> IIFL Home Finance provides small-ticket, affordable loans supporting India’s housing-for-all mission.</li>\n  <li><strong>SME Growth Catalyst:</strong> MSME and secured loans fuel the backbone of India’s economy—small and medium businesses.</li>\n  <li><strong>Trust & Reputation:</strong> Consistently awarded for governance, transparency, and innovation, IIFL is regarded as one of the most respected financial institutions in India.</li>\n</ul>\n',
      },
    ],
  },
  {
    id: 3,
    category: ["FoodTech", "QSR / F&B", "Franchise & Digital"],
    title:
      "Omni-channel expansion for Cheesiano Pizza via digital ordering, franchising & brand extensions",
    slug: "cheesiano-qsr-expansion",
    excerpt:
      "Cheesiano Pizza is expanding from Pune & Hyderabad to become a leading regional QSR brand, combining technology, franchise growth, and menu innovation (pizza, burgers, subs) to scale.",
    image: "/assets/HomePage/Pizza.png",
    author: "Cheesiano Leadership",
    date: "October 3, 2025",
    points: [
      "42,000+ orders in a quarter via Cheesiano Pizza alone",
      "Launched burger brand 'Burgerino' and sub brand 'Saucy Subs'",
      "Franchise expansion in Bangalore, Mumbai & Western India underway",
      "Repeat order rate ~35% across brands",
      "Achieved INR 1 Crore monthly gross sales",
    ],
    solutions:
      "Cheesiano built a digital ordering app, integrated with third-party platforms, and added verticals (burgers, subs). Via franchising and operations systems, they scaled their stores and brand presence while maintaining product & service consistency.",
    content: [
      {
        type: "heading",
        content:
          "<h3 class='text-xl font-normal leading-relaxed'>From local pizza joint to multi-brand QSR group</h3>",
      },
      {
        type: "paragraph",
        content:
          "<p class='mt-4 text-lg leading-relaxed'>Cheesiano Pizza, started in Pune, has built a reputation for fresh, Indian-twist pizzas served via dine-in, delivery, and takeaway. Over time, they recognized the opportunity to expand both <strong>horizontally</strong> (burgers, subs) and <strong>geographically</strong> (new cities) using a tech + franchise playbook.</p>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Challenges & Objectives</h2>",
      },
      {
        type: "list",
        content:
          "<ul class='mt-6 space-y-3 text-lg'><li>Scalable order & operations system to manage high volume across multiple outlets.</li><li>Maintaining consistency in food quality, delivery time, and brand experience across varied locations.</li><li>Expanding product portfolio (pizza → burgers → subs) without diluting core brand identity.</li><li>Franchise partner onboarding, training, and supply chain management.</li><li>Driving customer loyalty and repeat orders in a competitive QSR environment.</li></ul>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Solution Architecture & Workflow</h2>",
      },
      {
        type: "paragraph",
        content:
          "<p class='mt-4 text-lg leading-relaxed'>Cheesiano runs a native ordering app (iOS & Android) and integrates with aggregators like Swiggy and Zomato for wider reach. They manage a central supply chain, franchise onboarding, and kitchen training systems to ensure consistency. New brand launches (<strong>Burgerino</strong> and <strong>Saucy Subs</strong>) further diversify their offerings. A strong marketing and loyalty program drives repeat orders (~35%).</p>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Benefits & Impact</h2>",
      },
      {
        type: "list",
        content:
          "<ul class='mt-6 space-y-3 text-lg'><li><strong>Scalable growth:</strong> From a city-level pizza brand to a multi-city, multi-brand QSR chain.</li><li><strong>Revenue milestone:</strong> Crossed INR 1 Crore monthly gross sales.</li><li><strong>Customer loyalty:</strong> 35% repeat order rate indicates strong brand connection.</li><li><strong>Operational efficiency:</strong> Standardized processes, central supply chain, and tech-driven ordering reduce inefficiencies.</li><li><strong>Market capture:</strong> Burgers and subs allow entry into new meal occasions beyond pizza.</li></ul>",
      },
    ],
  },
  {
    id: 4,
    category: ["Home Decor", "E-commerce", "D2C"],
    title:
      "Scaling Swaas: Premium Home Textiles via Digital Commerce & Omni-channel Reach",
    slug: "swaas-d2c-home-textiles",
    excerpt:
      "Swaas is an Indian D2C brand delivering premium bedsheets, quilts, pillows, and home accessories online, combining quality, design, and fast pan-India delivery.",
    image: "/assets/HomePage/SWAAS.png",
    author: "Swaas Leadership",
    date: "October 3, 2025",
    points: [
      "100% cotton, linen, bamboo, and organic bedsheets and quilts",
      "Pan-India delivery with fast shipping",
      "D2C model reducing intermediaries and improving margins",
      "Focus on premium quality, design aesthetics, and comfort",
      "Wide product range: bedsheets, quilts, pillow covers, towels, table & kitchen linen",
    ],
    solutions:
      "Swaas leveraged its online platform and digital marketing to reach a wide customer base across India. By maintaining strict quality control, diverse product lines, and fast delivery, the brand ensures customer satisfaction and repeat purchases. Their product innovation and seasonal collections help retain engagement and expand reach.",
    content: [
      {
        type: "heading",
        content:
          "<h3 class='text-xl font-normal leading-relaxed'>From boutique bedding to nationwide D2C brand</h3>",
      },
      {
        type: "paragraph",
        content:
          "<p class='mt-4 text-lg leading-relaxed'>Swaas started with premium, 100% cotton bedsheets and quilts, focusing on comfort and aesthetics. Recognizing the opportunity in direct-to-consumer online sales, Swaas expanded into a wide variety of home textiles, offering bedsheets, pillow covers, quilts, towels, and kitchen linen, catering to modern Indian households seeking quality and convenience.</p>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Challenges & Objectives</h2>",
      },
      {
        type: "list",
        content:
          "<ul class='mt-6 space-y-3 text-lg'><li>Building a scalable e-commerce platform to handle high-volume orders across India.</li><li>Maintaining consistent premium quality across diverse product lines.</li><li>Delivering fast and reliable pan-India shipping.</li><li>Keeping product catalog fresh and engaging with seasonal collections.</li><li>Driving brand awareness and repeat purchases in a competitive home decor market.</li></ul>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Solution Architecture & Workflow</h2>",
      },
      {
        type: "paragraph",
        content:
          "<p class='mt-4 text-lg leading-relaxed'>Swaas runs a fully digital D2C platform with seamless product catalog, inventory management, and checkout process. Integration with logistics partners ensures timely pan-India delivery. Product innovation, seasonal campaigns, and targeted digital marketing help acquire and retain customers. Quality checks at each production and fulfillment stage maintain the premium brand promise.</p>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Benefits & Impact</h2>",
      },
      {
        type: "list",
        content:
          "<ul class='mt-6 space-y-3 text-lg'><li><strong>National reach:</strong> Successfully serving customers across India with D2C model.</li><li><strong>Premium brand perception:</strong> Maintains high quality and design aesthetics across all products.</li><li><strong>Customer loyalty:</strong> Repeat purchases driven by comfort, design, and consistent delivery.</li><li><strong>Operational efficiency:</strong> Streamlined e-commerce, inventory, and logistics processes.</li><li><strong>Product diversification:</strong> Expanded into multiple home textile categories beyond bedsheets and quilts.</li></ul>",
      },
    ],
  },
  {
    id: 5,
    category: ["Travel & Tourism", "Tour Operator", "D2C Travel"],
    title:
      "Abeonaz: Curating affordable premium travel experiences across India & beyond",
    slug: "abeonaz-premium-budget-travel",
    excerpt:
      "Abeonaz is a travel agency and tour operator based in Navi Mumbai, specializing in budget-friendly premium packages covering domestic and international destinations, group tours, honeymoons, and corporate travel.",
    image: "/assets/HomePage/ABEONAZ.png",
    author: "Abeonaz Team",
    date: "October 3, 2025",
    points: [
      "Founded in 2019, headquartered in Navi Mumbai",
      "Tagline: “Suffer Nahi, Safar Karo”",
      "Offers Group, Honeymoon, Weekend Getaway & Speciality Tour Packages",
      "Served 300+ clients across India, Maldives, Sri Lanka, Bhutan",
      "Focus on affordable premium experiences with customized itineraries",
    ],
    solutions:
      "Abeonaz delivers curated travel packages by combining in-house itinerary design, partner networks across destinations, and digital booking platforms. Their focus is on making premium travel accessible at budgeted costs while maintaining service quality and customization.",
    content: [
      {
        type: "heading",
        content:
          "<h3 class='text-xl font-normal leading-relaxed'>Bridging aspirational travel & affordability</h3>",
      },
      {
        type: "paragraph",
        content:
          "<p class='mt-4 text-lg leading-relaxed'>Abeonaz was founded in 2019 in Navi Mumbai to democratize travel. Believing that everyone deserves memorable experiences, they curate premium yet affordable packages—ranging from domestic weekend getaways to international tours. Their motto “Suffer Nahi, Safar Karo” reflects their promise to minimize hassles and maximize joy.</p>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Challenges & Objectives</h2>",
      },
      {
        type: "list",
        content:
          "<ul class='mt-6 space-y-3 text-lg'><li>Balancing premium service with cost-efficiency to appeal to budget-conscious travelers.</li><li>Designing customizable itineraries while maintaining operational efficiency across destinations.</li><li>Building trust and visibility in a competitive travel marketplace.</li><li>Maintaining service quality across local partners (guides, hotels, transfers) in different geographies.</li><li>Growing client base and expanding into newer destinations beyond India.</li></ul>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Solution Architecture & Workflow</h2>",
      },
      {
        type: "paragraph",
        content:
          "<p class='mt-4 text-lg leading-relaxed'>Abeonaz manages a digital front for clients to browse packages, submit queries, and book. Behind the scenes, their operations team collaborates with destination partners (hotels, transport, guides) to build itineraries and negotiate deals. They maintain oversight on partner quality, customer support, and post-trip feedback to ensure consistency and improve experiences.</p>",
      },
      {
        type: "heading",
        content:
          "<h2 class='mt-10 text-2xl font-bold text-gray-900'>Benefits & Impact</h2>",
      },
      {
        type: "list",
        content:
          "<ul class='mt-6 space-y-3 text-lg'><li><strong>Accessible premium experiences:</strong> Travelers get curated luxury at reasonable costs.</li><li><strong>Market reach:</strong> Successfully served clients across India and neighboring countries such as Maldives, Sri Lanka, and Bhutan.</li><li><strong>Brand philosophy:</strong> “Suffer Nahi, Safar Karo” emphasizes ease, trust, and a hassle-free journey.</li><li><strong>Flexibility & customization:</strong> Wide range of package options including group tours, honeymoons, weekend getaways, and corporate travel.</li><li><strong>Growing clientele:</strong> More than 300 satisfied clients since inception, with strong word-of-mouth referrals.</li></ul>",
      },
    ],
  },
];
