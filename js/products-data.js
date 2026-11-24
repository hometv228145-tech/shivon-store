/**
 * Shivon Krishi Store - Master Catalog Data (Bilingual: Hindi & English)
 * Includes:
 * 1. 50+ Distinct Fruit Nursery Plants (फलदार कलमी पौधे) with nursery sizes & fruiting ages
 * 2. Bamboo Varieties (भीमा, गोल्डन, बुद्धा बेली, बालकुआ बांस)
 * 3. Organic Fertilizers (केंचुआ खाद, वर्मीवाश, सरसों खली, ह्यूमिक एसिड)
 * 4. Neem & Bio-Pesticides (कोल्ड प्रेस्ड नीम ऑइल, नीम खली, स्टिकी ट्रैप)
 * 5. Mulching & Farm Protection (25 माइक्रोन मल्चिंग फिल्म, शेड नेट, ग्रो बैग्स)
 * 6. Agri Tools & Sprayers (16L बैटरी स्प्रेयर, ड्रिप किट, कोकोपीट)
 */

const FRUIT_PLANTS_CATALOG = [
  // --- MANGO VARIETIES (आम की कलमी किस्में) ---
  {
    id: "SK-PLANT-M01",
    name_hi: "कलमी आम्रपाली आम का पौधा (Grafted Amrapali Mango)",
    name_en: "Grafted Amrapali Mango Live Dwarf Plant",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "बेस्ट सेलर",
    badge_en: "Best Seller",
    rating: 4.9,
    reviewCount: 1840,
    shortDesc_hi: "बौनी किस्म का भरपूर मीठा आम। 1-2 साल में गमले या जमीन में भारी गुच्छों में फल देता है।",
    shortDesc_en: "Prolific dwarf grafted mango variety. Perfect for terrace pots and home orchards, bearing rich orange-red sweet fruit.",
    description_hi: "आम्रपाली आम दशहरी और नीलम के संकरण से तैयार भारत की सबसे लोकप्रिय बौनी किस्म है। पौधे की ऊंचाई सीमित रहती है जिससे इसे बड़े गमलों या छत पर भी आसानी से उगाया जा सकता है।",
    description_en: "Authentic certified grafted Amrapali mango sapling. Highly disease-resistant, regular bearer, with fiberless sweet aromatic pulp.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2.5 फीट स्वस्थ ग्राफ्टेड पौधा", "फलने का समय": "रोपाई के 1 से 2 वर्ष बाद", "गमले के लिए": "100% उपयुक्त (18-24 इंच गमला)", "पैकेजिंग": "नम कोकोपीट रूट-बॉल + ब्रीथेबल बॉक्स" },
    specs_en: { "Nursery Size": "1.5 to 2.5 ft healthy grafted plant", "Fruiting Time": "1 to 2 years after planting", "Container Friendly": "Ideal for 18-24 inch pots", "Packaging": "Moist cocopeat root-ball in ventilated crate" },
    isLivePlant: true,
    safeTransitNote: "7 दिन की सुरक्षित ट्रांजिट गारंटी। पौधे के साथ फ्री जैविक खाद व प्लांटिंग गाइड भेजी जाती है।",
    shippingType: "express",
    image: "assets/products/mango.jpg",
    variants: [
      { id: "v1", label: "1 Grafted Plant (1.5-2 ft)", weight: "1 Plant", price: 299, mrp: 499, inStock: true },
      { id: "v2", label: "2 Plant Combo Offer", weight: "2 Plants", price: 549, mrp: 999, inStock: true },
      { id: "v3", label: "Big Plant with Nursery Pot (2.5+ ft)", weight: "1 Big Plant", price: 499, mrp: 799, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M02",
    name_hi: "मलिहाबादी दशहरी आम पौधा (Malihabadi Dasheri Mango Grafted)",
    name_en: "Grafted Malihabadi Dasheri Mango Plant",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "शाही स्वाद",
    badge_en: "Royal Taste",
    rating: 4.8,
    reviewCount: 920,
    shortDesc_hi: "लखनऊ मलिहाबाद का प्रसिद्ध रसीला और अत्यधिक सुगंधित दशहरी आम।",
    shortDesc_en: "World-famous GI-tagged Dasheri mango from Malihabad. Renowned for rich aroma and sweet melting pulp.",
    description_hi: "दशहरी आम उत्तर भारत का राजा माना जाता है। इसका गूदा बहुत मुलायम और रेशारहित होता है। 2 वर्ष में फल देना शुरू करता है।",
    description_en: "Authentic grafted Dasheri mango from Malihabad belt. High yielding tree with exceptional commercial and table value.",
    specs_hi: { "नर्सरी साइज": "2 से 3 फीट परिपक्व पौधा", "फलने का समय": "2 वर्ष में फल", "धूप": "पूर्ण सूर्य (6+ घंटे)" },
    specs_en: { "Nursery Size": "2 to 3 ft mature sapling", "Fruiting": "Bears in 2 years", "Sunlight": "Full sun" },
    isLivePlant: true,
    safeTransitNote: "सुरक्षित पार्सल: सपोर्टिव स्टिक और रूट-बॉल मॉइस्चर सील के साथ।",
    shippingType: "express",
    image: "assets/products/dasheri_mango.jpg",
    variants: [
      { id: "v1", label: "1 Healthy Live Plant", weight: "1 Plant", price: 289, mrp: 450, inStock: true },
      { id: "v2", label: "2 Plant Set", weight: "2 Plants", price: 529, mrp: 900, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M03",
    name_hi: "चौसा मीठा आम पौधा (Sweet Chausa Mango Grafted Plant)",
    name_en: "Grafted Chausa Mango Live Plant (Honey Sweet)",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "शहद जैसा मीठा",
    badge_en: "Honey Sweet",
    rating: 4.9,
    reviewCount: 740,
    shortDesc_hi: "सीजन के अंत में पकने वाला सबसे रसीला और शहद जैसा मीठा चौसा आम।",
    shortDesc_en: "Late-season mango champion known for golden skin and intensely sweet honey-like nectar.",
    description_hi: "चौसा आम अपनी मिठास के लिए प्रसिद्ध है। रस चूसने और शेक बनाने के लिए सबसे उत्तम किस्म।",
    description_en: "Late ripening mango with golden yellow color. High sugar brix and irresistible flavor.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "2 से 3 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted sapling", "Fruiting": "2 to 3 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/mango.jpg",
    variants: [
      { id: "v1", label: "1 Healthy Plant", weight: "1 Plant", price: 299, mrp: 480, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M04",
    name_hi: "लंगड़ा बनारसी आम पौधा (Banarasi Langra Mango Grafted)",
    name_en: "Grafted Banarasi Langra Mango Plant",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "सुगंधित व तीखा-मीठा",
    badge_en: "Exotic Aroma",
    rating: 4.8,
    reviewCount: 610,
    shortDesc_hi: "बनारस का विश्वप्रसिद्ध लंगड़ा आम। पकने पर भी हरा रहने वाला और अनूठे स्वाद से भरपूर।",
    shortDesc_en: "Traditional Banarasi Langra mango. Stays greenish even when fully ripe with exceptional tangy sweetness.",
    description_hi: "लंगड़ा आम अपनी विशिष्ट खुशबू और स्वाद के लिए दुनिया भर में जाना जाता है। व्यावसायिक बागवानी के लिए बहुत टिकाऊ किस्म।",
    description_en: "Highly aromatic, juicy, and rich in vitamin C. Ideal for commercial orchards and backyard gardens.",
    specs_hi: { "नर्सरी साइज": "2 से 2.5 फीट पौधा", "फलने का समय": "2 वर्ष बाद" },
    specs_en: { "Nursery Size": "2 to 2.5 ft sapling", "Fruiting": "After 2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/dasheri_mango.jpg",
    variants: [
      { id: "v1", label: "1 Grafted Plant", weight: "1 Plant", price: 289, mrp: 450, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M05",
    name_hi: "रत्नागिरी अल्फोंसो (हापुस) आम पौधा (Alphonso Hapus Mango Grafted)",
    name_en: "Original Ratnagiri Alphonso Hapus Mango Plant",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "फलों का राजा",
    badge_en: "King of Fruits",
    rating: 4.9,
    reviewCount: 1120,
    shortDesc_hi: "निर्यात गुणवत्ता का ओरिजिनल हापुस आम। केसरिया रंग, मखमली गूदा और बेजोड़ खुशबू।",
    shortDesc_en: "Premium export quality Alphonso mango. Deep golden pulp, velvety smooth texture, and heavenly aroma.",
    description_hi: "रत्नागिरी का प्रसिद्ध हापुस आम अब आपके घर के बगीचे में। इसकी ग्राफ्टेड शाखाएं कम उम्र में फलने लगती हैं।",
    description_en: "Authentic Ratnagiri clone Alphonso mango sapling. Highest international market value among Indian mangoes.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट", "फलने का समय": "2 से 3 वर्ष" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruiting": "2 to 3 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/alphonso_mango.jpg",
    variants: [
      { id: "v1", label: "1 Original Hapus Sapling", weight: "1 Plant", price: 349, mrp: 599, inStock: true },
      { id: "v2", label: "Pack of 2 Plants", weight: "2 Plants", price: 649, mrp: 1200, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M06",
    name_hi: "केसर आम पौधा - सौराष्ट्र गोल्ड (Kesar Mango Grafted Plant)",
    name_en: "Gir Kesar Mango Live Grafted Plant",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "केसरिया मिठास",
    badge_en: "Queen of Mangoes",
    rating: 4.8,
    reviewCount: 580,
    shortDesc_hi: "गुजरात के गिर का प्रसिद्ध केसर आम। चमकीला नारंगी गूदा और शेक व आमरस के लिए नंबर 1।",
    shortDesc_en: "Queen of Mangoes from Gir, Gujarat. Saffron colored sweet pulp, ideal for aamras and fresh desserts.",
    description_hi: "केसर आम की मिठास और खुशबू अद्वितीय है। यह सूखा और गर्मी दोनों सहन करने में सक्षम है।",
    description_en: "Gir Kesar grafted mango. Very hardy, thrives in hot conditions, and produces heavy yields.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "2 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/alphonso_mango.jpg",
    variants: [
      { id: "v1", label: "1 Plant", weight: "1 Plant", price: 299, mrp: 480, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M07",
    name_hi: "जापानी मियाज़ाकी लाल आम पौधा (Japanese Miyazaki Red Mango Live Plant)",
    name_en: "Rare Japanese Miyazaki Egg of the Sun Mango Plant",
    category: "plants",
    subCategory: "mango",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "दुनिया का सबसे कीमती आम",
    badge_en: "World's Most Expensive",
    rating: 4.9,
    reviewCount: 880,
    shortDesc_hi: "लाखों रुपये किलो बिकने वाला दुर्लभ रूबी लाल मियाज़ाकी आम (Egg of Sun)। 15% अधिक सुक्रोज मिठास।",
    shortDesc_en: "World famous Japanese Miyazaki red mango. Brilliant purple-red skin when ripe with 15% higher brix sweetness.",
    description_hi: "मियाज़ाकी आम जापानी हाइब्रिड किस्म है जो पकने पर गहरे रूबी लाल रंग की हो जाती है। अब प्रमाणित भारतीय रूटस्टॉक पर ग्राफ्टेड होकर उपलब्ध है।",
    description_en: "Authentic grafted Miyazaki mango sapling. Highly decorative red fruit with antioxidant-rich sweet flesh.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट ग्राफ्टेड पौधा", "फल का रंग": "गहरा रूबी लाल", "फलने का समय": "2 से 3 वर्ष" },
    specs_en: { "Nursery Size": "1.5 to 2 ft grafted", "Skin Color": "Deep ruby red", "Fruiting": "2 to 3 years" },
    isLivePlant: true,
    safeTransitNote: "प्रीमियम प्रोटेक्टिव पैकेजिंग: रेयर प्लांट स्पेशल वुडन सपोर्ट क्रेट के साथ भेजा जाता है।",
    shippingType: "express",
    image: "assets/products/mango.jpg",
    variants: [
      { id: "v1", label: "1 Original Miyazaki Sapling", weight: "1 Plant", price: 699, mrp: 1200, inStock: true },
      { id: "v2", label: "2 Plant Farm Pack", weight: "2 Plants", price: 1299, mrp: 2400, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // --- GUAVA VARIETIES (अमरूद की प्रमुख किस्में) ---
  {
    id: "SK-PLANT-G01",
    name_hi: "ताइवान पिंक अमरूद पौधा (Taiwan Pink Guava Live Grafted Plant)",
    name_en: "Taiwan Pink Hybrid Grafted Guava Live Plant",
    category: "plants",
    subCategory: "guava",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "अंदर से गुलाबी",
    badge_en: "Pink Flesh",
    rating: 4.8,
    reviewCount: 960,
    shortDesc_hi: "अंदर से आकर्षक गुलाबी और क्रंची स्वाद वाला ताइवान अमरूद। 8-10 महीने में फल देना शुरू करता है।",
    shortDesc_en: "Stunning crisp pink interior, few seeds, and high sweetness. Bears fruit within 8-10 months.",
    description_hi: "आज भारत में सबसे ज्यादा बिकने वाली अमरूद किस्म। इसका वजन 300-500 ग्राम तक होता है। गमले में भी भरपूर फलता है।",
    description_en: "Top commercial guava variety in India. Thick crunchy pink flesh, prolonged shelf life, and early bearing habit.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट", "फलने का समय": "8 से 10 महीने", "वजन": "300-500 ग्राम प्रति फल" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruiting Time": "8 to 10 months", "Fruit Weight": "300-500g each" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/pink_guava.jpg", // Pink guava cut open
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 249, mrp: 420, inStock: true },
      { id: "v2", label: "2 Plant Set", weight: "2 Plants", price: 449, mrp: 800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-G02",
    name_hi: "इलाहाबादी सफेदा अमरूद पौधा (Allahabad Safeda Original Guava)",
    name_en: "Original Allahabad Safeda Live Guava Plant",
    category: "plants",
    subCategory: "guava",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "देशी स्वादिष्ट",
    badge_en: "Classic White",
    rating: 4.9,
    reviewCount: 810,
    shortDesc_hi: "प्रयागराज का पारंपरिक सफेदा अमरूद। सफेद मक्खन जैसा गूदा और भीनी-भीनी लाजवाब खुशबू।",
    shortDesc_en: "World-renowned Allahabad Safeda guava. Snow-white sweet buttery pulp with fine seeds.",
    description_hi: "इलाहाबादी सफेदा अमरूद की मिठास और खुशबू बेजोड़ है। विटामिन सी का प्रचुर भंडार।",
    description_en: "Classic North Indian guava with smooth yellow skin and soft sweet white interior.",
    specs_hi: { "नर्सरी साइज": "2 फीट परिपक्व ग्राफ्टेड", "फलने का समय": "1 वर्ष में शुरुआत" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "Starts within 1 year" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/guava.jpg",
    variants: [
      { id: "v1", label: "1 Healthy Plant", weight: "1 Plant", price: 229, mrp: 380, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-G03",
    name_hi: "थाई 7 सुपर जंबो अमरूद (Thai 7 Jumbo Guava 1 Kg Fruit)",
    name_en: "Thai 7 Super Jumbo Guava Plant (1 Kg Huge Fruit)",
    category: "plants",
    subCategory: "guava",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "1 किलो का अमरूद",
    badge_en: "1 Kg Huge Fruit",
    rating: 4.8,
    reviewCount: 520,
    shortDesc_hi: "एक-एक फल 800 ग्राम से 1 किलो तक का। सेब जैसा कुरकुरा, बीज बहुत कम और बंपर पैदावार।",
    shortDesc_en: "Produces gigantic guavas weighing 800g to 1 kg each. Extremely crisp texture with minimal soft seeds.",
    description_hi: "थाईलैंड की यह आधुनिक हाइब्रिड किस्म भारत में किसानों की सबसे पसंदीदा वैरायटी बन चुकी है। बाजार में सबसे ऊंची कीमत मिलती है।",
    description_en: "High density plantation friendly Thai 7 guava. Huge fruit size with heavy fruit-bearing capacity.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट पौधा", "फल का आकार": "800g - 1200g प्रति अमरूद" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruit Size": "800g - 1200g each" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/guava.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 279, mrp: 450, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // --- CITRUS & LEMONS (नींबू व संतरा वर्ग) ---
  {
    id: "SK-PLANT-L01",
    name_hi: "कागज़ी बारहमासी नींबू पौधा (Kagzi Lemon Seedless Grafted Plant)",
    name_en: "All-Season Kagzi Lemon Live Grafted Plant",
    category: "plants",
    subCategory: "citrus",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "12 महीने फल",
    badge_en: "Year-Round",
    rating: 4.9,
    reviewCount: 1420,
    shortDesc_hi: "साल के 12 महीने पतले छिलके वाले रसदार नींबू देने वाला सदाबहार ग्राफ्टेड पौधा।",
    shortDesc_en: "Prolific evergreen grafted lemon tree. Bears thin-skinned aromatic juicy lemons year-round.",
    description_hi: "घर के गमले या बगीचे के लिए सबसे उत्तम नींबू का पौधा। इसमें पूरे साल फूल और फल आते रहते हैं।",
    description_en: "Grafted Kagzi lemon thrives in containers, terraces, or garden soil with continuous harvest.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट", "फलने का समय": "3-6 महीने में फूल आना शुरू" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruiting": "Flowers within 3-6 months" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/lemon.jpg", // Juicy lemons
    variants: [
      { id: "v1", label: "1 Grafted Plant", weight: "1 Plant", price: 249, mrp: 420, inStock: true },
      { id: "v2", label: "Pack of 2 Plants", weight: "2 Plants", price: 449, mrp: 800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-L02",
    name_hi: "नागपुरी संतरा कलमी पौधा (Nagpur Orange Santra Grafted Live Plant)",
    name_en: "Nagpur Sweet Mandarin Orange Live Plant",
    category: "plants",
    subCategory: "citrus",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "रसीला संतरा",
    badge_en: "Nagpur Special",
    rating: 4.8,
    reviewCount: 680,
    shortDesc_hi: "नागपुर का प्रसिद्ध मीठा संतरा। आसानी से छिलने वाला, रसीला और विटामिन सी से भरपूर।",
    shortDesc_en: "Authentic Nagpur Mandarin orange. Loose jacket skin, easily peelable with sweet refreshing citrus juice.",
    description_hi: "सर्दियों में पूरे पेड़ पर नारंगी रंग के संतरे लद जाते हैं। 18 इंच के बड़े गमले में भी आसानी से फलता है।",
    description_en: "Famous sweet orange variety of Maharashtra. Thrives in garden soil and terrace containers.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "1 से 2 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "1 to 2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/orange.jpg", // Fresh oranges
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 279, mrp: 450, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-L03",
    name_hi: "मीठी मौसंबी ग्राफ्टेड पौधा (Sweet Mosambi Sweet Lime Plant)",
    name_en: "Sweet Mosambi (Citrus Limetta) Live Grafted Plant",
    category: "plants",
    subCategory: "citrus",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "मीठा जूस",
    badge_en: "Sweet Juice",
    rating: 4.8,
    reviewCount: 540,
    shortDesc_hi: "ताज़े जूस के लिए सर्वोत्तम मीठी मौसंबी का पौधा। पेट और पाचन के लिए अत्यंत गुणकारी।",
    shortDesc_en: "Prolific sweet lime tree producing mild, low-acid, highly refreshing sweet juice.",
    description_hi: "मौसंबी का पौधा बहुत तेजी से बढ़ता है और भारी संख्या में फल देता है। घर पर 100% केमिकल-फ्री जूस निकालें।",
    description_en: "Sweet lime sapling adapted for domestic gardens. High juice yield with minimal bitterness.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड", "फलने का समय": "1.5 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "1.5 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/lemon.jpg",
    variants: [
      { id: "v1", label: "1 Plant", weight: "1 Plant", price: 269, mrp: 440, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // --- POMEGRANATES & EXOTIC FRUITS (अनार, ड्रैगन फ्रूट, अंजीर आदि) ---
  {
    id: "SK-PLANT-P01",
    name_hi: "भगवा सिंदूरी अनार पौधा (Bhagwa Sindoori Red Pomegranate)",
    name_en: "Bhagwa Sinduri Red Pomegranate Live Grafted Plant",
    category: "plants",
    subCategory: "pomegranate",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "लाल दानेदार",
    badge_en: "Ruby Arils",
    rating: 4.9,
    reviewCount: 1150,
    shortDesc_hi: "मोटा गहरा लाल अनार, बहुत मुलायम बीज और अत्यधिक मीठा रस। खून की कमी दूर करने वाला सर्वोत्तम फल।",
    shortDesc_en: "Premier Bhagwa pomegranate from Maharashtra. Glossy deep red skin with soft sweet ruby red arils.",
    description_hi: "भगवा अनार भारत की सर्वश्रेष्ठ व्यावसायिक अनार किस्म है। रोग प्रतिरोधी और गमले में भी 20-30 फल प्रति वर्ष देती है।",
    description_en: "Certified air-layered Bhagwa pomegranate. Early bearing habit, drought-tolerant, and high iron content.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट", "फलने का समय": "1 वर्ष में शुरुआत", "दाने": "गहरे लाल व मुलायम बीज" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruiting": "Starts in 1 year", "Arils": "Deep ruby red with soft seeds" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/pomegranate.jpg", // Real ruby pomegranate
    variants: [
      { id: "v1", label: "1 Healthy Live Plant", weight: "1 Plant", price: 249, mrp: 420, inStock: true },
      { id: "v2", label: "2 Plant Set", weight: "2 Plants", price: 449, mrp: 800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-DF01",
    name_hi: "रेड ड्रैगन फ्रूट कटिंग/पौधा (Red Flesh Dragon Fruit Live Plant)",
    name_en: "Red Flesh Dragon Fruit (Hylocereus Polyrhizus) Live Rooted Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "सुपरफूड",
    badge_en: "Superfood",
    rating: 4.9,
    reviewCount: 980,
    shortDesc_hi: "अंदर से गहरा मैजेंटा लाल ड्रैगन फ्रूट। कम पानी में छत पर या खेत में लाखों की कमाई देने वाला पौधा।",
    shortDesc_en: "Deep magenta-red flesh dragon fruit. High antioxidant superfood requiring minimal water and yielding for 20+ years.",
    description_hi: "ड्रैगन फ्रूट कैक्टस कुल का पौधा है, इसलिए इसे बहुत कम पानी चाहिए। सीमेंट के पोल या छत के ड्रम में 1 साल में फल देने लगता है।",
    description_en: "Rooted mature cutting of red flesh dragon fruit. Extremely hardy, drought resistant, and high commercial value.",
    specs_hi: { "नर्सरी साइज": "1 से 1.5 फीट रूटेड कटिंग", "फलने का समय": "10 से 12 महीने", "पानी की आवश्यकता": "बहुत कम (हफ्ते में 1 बार)" },
    specs_en: { "Nursery Size": "1 to 1.5 ft rooted cutting", "Fruiting": "10 to 12 months", "Water Need": "Very low" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/dragon_fruit.jpg", // Dragon fruit
    variants: [
      { id: "v1", label: "1 Rooted Live Plant", weight: "1 Plant", price: 179, mrp: 299, inStock: true },
      { id: "v2", label: "Pack of 4 Plants (1 Pole Set)", weight: "4 Plants", price: 599, mrp: 1100, inStock: true },
      { id: "v3", label: "Pack of 12 Farm Bundle", weight: "12 Plants", price: 1599, mrp: 3000, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-F01",
    name_hi: "पुणे दिनकर अंजीर पौधा (Poona Fig Anjeer Live Plant)",
    name_en: "Sweet Poona Fig (Anjeer) Live Fruit Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "स्वास्थ्यवर्धक",
    badge_en: "Healthy Fig",
    rating: 4.8,
    reviewCount: 610,
    shortDesc_hi: "शहद जैसा मीठा और रसीला ताज़ा अंजीर। पेट की सभी बीमारियों और हीमोग्लोबिन के लिए रामबाण।",
    shortDesc_en: "Sweet Poona Brown Turkey fig tree. Produces tender honey-sweet fresh figs rich in dietary fiber and calcium.",
    description_hi: "अंजीर गमले में सबसे तेजी से फलने वाला पौधा है। 6 माह के अंदर ही इसकी शाखाओं में अंजीर लगने शुरू हो जाते हैं।",
    description_en: "Grafted Fig (Anjeer) plant. Very easy to maintain, self-pollinating, and thrives in Indian warm climates.",
    specs_hi: { "नर्सरी साइज": "1.5 फीट पौधा", "फलने का समय": "6 से 8 महीने में" },
    specs_en: { "Nursery Size": "1.5 ft plant", "Fruiting": "6 to 8 months" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/fig.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 239, mrp: 399, inStock: true },
      { id: "v2", label: "2 Plant Set", weight: "2 Plants", price: 429, mrp: 750, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-J01",
    name_hi: "थाई सीडलेस बड़ा जामुन पौधा (Thai Seedless Big Jamun Live Plant)",
    name_en: "Grafted Thai Seedless Sweet Jamun Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "शुगर कंट्रोल",
    badge_en: "Diabetic Friendly",
    rating: 4.9,
    reviewCount: 890,
    shortDesc_hi: "बड़ा, मोटा और अत्यंत मीठा जामुन। डायबिटीज के मरीजों के लिए अमृत समान फल।",
    shortDesc_en: "Jumbo black sweet jamun (Black Plum) with tiny or no seeds. Renowned for regulating blood sugar levels.",
    description_hi: "कलमी जामुन का पौधा पारंपरिक पेड़ों की तरह 10 साल का इंतजार नहीं कराता, बल्कि 2 वर्ष में ही बंपर फल देने लगता है।",
    description_en: "Early bearing grafted Black Plum (Jamun). High in anthocyanins, iron, and potassium.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "2 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/dragon_fruit.jpg",
    variants: [
      { id: "v1", label: "1 Grafted Plant", weight: "1 Plant", price: 299, mrp: 499, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-B01",
    name_hi: "कश्मीरी रेड एप्पल बेर पौधा (Kashmiri Red Apple Ber Live Plant)",
    name_en: "Kashmiri Red Apple Ber Live Grafted Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "सेब जैसा कुरकुरा",
    badge_en: "Apple Ber",
    rating: 4.9,
    reviewCount: 790,
    shortDesc_hi: "सेब जैसा लाल और कुरकुरा बेर। 6 माह में फलने वाला और कम पानी में बंपर पैदावार देने वाला पौधा।",
    shortDesc_en: "Crisp apple-like red jujube (Ber). Extremely heavy bearer that starts fruiting within 6-8 months.",
    description_hi: "यह पौधा किसी भी तरह की पथरीली या बंजर जमीन पर उग जाता है। पहले ही साल एक पौधे से 15-20 किलो फल मिलते हैं।",
    description_en: "Grafted Kashmiri Apple Ber. Very low maintenance and highly resilient against drought and extreme heat.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट", "फलने का समय": "6 से 8 महीने" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruiting": "6 to 8 months" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/apple.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 269, mrp: 450, inStock: true },
      { id: "v2", label: "2 Plant Combo", weight: "2 Plants", price: 499, mrp: 900, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-CH01",
    name_hi: "काली पत्ती चीकू पौधा (Kalipatti Sapota Chikoo Grafted Plant)",
    name_en: "Kalipatti Sweet Chikoo (Sapota) Live Grafted Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "गुड़ जैसी मिठास",
    badge_en: "Brown Sugar Sweet",
    rating: 4.8,
    reviewCount: 470,
    shortDesc_hi: "गुड़ जैसी तीव्र मिठास वाला काली पत्ती चीकू। साल में दो बार भारी पैदावार देता है।",
    shortDesc_en: "Top commercial Sapota variety with brown sugar sweetness, melt-in-mouth texture, and high yields.",
    description_hi: "चीकू का पौधा बहुत टिकाऊ होता है और कीटों का प्रकोप न के बराबर होता है। घर के गमलों और बगीचों दोनों के लिए बेहतरीन।",
    description_en: "Grafted Kalipatti Chikoo tree. Broad glossy leaves and abundant clusters of round sweet sapotas.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "1.5 से 2 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "1.5 to 2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/coconut.jpg",
    variants: [
      { id: "v1", label: "1 Plant", weight: "1 Plant", price: 259, mrp: 420, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-A01",
    name_hi: "बनारसी बड़ा आंवला पौधा (Banarasi Chakaiya Amla Grafted Plant)",
    name_en: "Banarasi Large Amla (Indian Gooseberry) Live Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "अमृत फल",
    badge_en: "Vitamin C Powerhouse",
    rating: 4.9,
    reviewCount: 710,
    shortDesc_hi: "विटामिन सी का सबसे बड़ा स्रोत। बड़े आकार का रसीला आंवला, मुरब्बा व च्यवनप्राश बनाने हेतु उत्तम।",
    shortDesc_en: "Grafted giant Indian gooseberry (Amla). Richest natural source of Vitamin C and longevity booster.",
    description_hi: "बनारसी आंवला कम रेशे और बड़े गूदे के लिए प्रसिद्ध है। ग्राफ्टेड होने के कारण 2 वर्ष में फल देना शुरू करता है।",
    description_en: "Certified grafted Amla sapling. Extremely hardy and thrives in poor alkaline soils.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड", "फलने का समय": "2 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/lemon.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 229, mrp: 380, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-C01",
    name_hi: "गंगाबोंडम बौना मीठा नारियल पौधा (Gangabondam Dwarf Coconut Live Plant)",
    name_en: "Gangabondam Dwarf Green Tender Coconut Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "हाथ से तोड़ें नारियल",
    badge_en: "Dwarf Coconut",
    rating: 4.9,
    reviewCount: 840,
    shortDesc_hi: "बौनी किस्म का नारियल, 3-4 साल में जमीन से ही हाथ बढ़ाकर नारियल तोड़ें। भरपूर मीठा नारियल पानी।",
    shortDesc_en: "Famous dwarf coconut variety from Andhra Pradesh. Bears heavy bunches of sweet tender water within 3-4 years at low height.",
    description_hi: "इसकी ऊंचाई 10-12 फीट ही रहती है। एक पेड़ सालाना 200 से अधिक नारियल देता है। फार्म और बगीचों की शोभा बढ़ाने वाला पौधा।",
    description_en: "Early flowering dwarf green coconut palm. High yield of tender coconut water rich in electrolytes.",
    specs_hi: { "नर्सरी साइज": "2 से 3 फीट स्वस्थ सैंपलिंग", "फलने का समय": "3 से 4 वर्ष", "पेड़ की ऊंचाई": "बौना (हाथ की पहुंच में)" },
    specs_en: { "Nursery Size": "2 to 3 ft seedling", "Fruiting": "3 to 4 years", "Height": "Dwarf compact palm" },
    isLivePlant: true,
    safeTransitNote: "नारियल की मजबूत जड़ें विशेष मॉइस्चर पैकिंग के साथ 10 दिन तक सुरक्षित रहती हैं।",
    shippingType: "express",
    image: "assets/products/coconut.jpg",
    variants: [
      { id: "v1", label: "1 Dwarf Coconut Sapling", weight: "1 Plant", price: 399, mrp: 699, inStock: true },
      { id: "v2", label: "Pack of 2 Coconut Palms", weight: "2 Plants", price: 749, mrp: 1350, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-J02",
    name_hi: "थाई गोल्डन बारहमासी कटहल (Thai Golden All-Season Jackfruit Plant)",
    name_en: "Thai Golden Dwarf All-Season Jackfruit Live Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "बारहमासी कटहल",
    badge_en: "All-Season Jackfruit",
    rating: 4.8,
    reviewCount: 560,
    shortDesc_hi: "साल के 12 महीने सब्जी और पके फल देने वाला बौना कटहल। तने से लेकर शाखाओं तक फल भर जाते हैं।",
    shortDesc_en: "Dwarf jackfruit bearing year-round. Delicious crisp golden flakes when ripe, and tender green fruit for cooking.",
    description_hi: "यह कटहल पौधा 2-3 वर्ष में ही फलने लगता है। इसके फल 5 से 8 किलो के स्वादिष्ट और शहद जैसे मीठे होते हैं।",
    description_en: "Grafted dwarf jackfruit tree adapted for small gardens. Continuous fruiting with minimum gum/latex.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "2 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "2 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/coconut.jpg",
    variants: [
      { id: "v1", label: "1 Grafted Plant", weight: "1 Plant", price: 349, mrp: 550, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-P02",
    name_hi: "रेड लेडी 786 पपीता पौधा (Taiwan Red Lady 786 Papaya Live Plant)",
    name_en: "Taiwan Red Lady 786 Live Papaya Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "6 महीने में फल",
    badge_en: "Super Fast Yield",
    rating: 4.9,
    reviewCount: 1380,
    shortDesc_hi: "भारत की नंबर 1 पपीता किस्म। रोपाई के 6 माह बाद 50-80 किलो तक गहरे लाल और मीठे फल।",
    shortDesc_en: "India's highest selling hybrid papaya. Self-fruiting hermaphrodite plant bearing 50-80kg fruit within 6 months.",
    description_hi: "उभयलिंगी (Hermaphrodite) पौधा होने के कारण हर पौधे पर फल आते हैं। लाल गाढ़ा गूदा और वायरस प्रतिरोधी।",
    description_en: "Certified Red Lady 786 seedling in polybag. Thick sweet red flesh with high market demand.",
    specs_hi: { "नर्सरी साइज": "1 फीट स्वस्थ पौधा", "फलने का समय": "6 से 8 महीने" },
    specs_en: { "Nursery Size": "1 ft seedling", "Fruiting": "6 to 8 months" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/papaya.jpg", // Papaya
    variants: [
      { id: "v1", label: "Pack of 2 Plants", weight: "2 Plants", price: 199, mrp: 350, inStock: true },
      { id: "v2", label: "Pack of 5 Plants (Kitchen Garden)", weight: "5 Plants", price: 449, mrp: 800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-CH02",
    name_hi: "बारबाडोस चेरी पौधा (Barbados Acerola Cherry Live Fruit Plant)",
    name_en: "Barbados Acerola Cherry Live Plant (Bonsai Container)",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "विटामिन सी किंग",
    badge_en: "Acerola Cherry",
    rating: 4.8,
    reviewCount: 420,
    shortDesc_hi: "संतरे से 30 गुना ज्यादा विटामिन सी वाली चमकदार लाल चेरी। गमले में शानदार बोनसाई पौधा।",
    shortDesc_en: "Nutrient dense Acerola cherry containing 30x more Vitamin C than oranges. Beautiful container shrub with bright red berries.",
    description_hi: "यह पौधा छोटे से गमले में भी गुलाबी फूलों और लाल चेरी से लद जाता है। बच्चों और स्वास्थ्य के लिए अत्यंत लाभकारी।",
    description_en: "Prolific dwarf cherry plant. Bears clusters of bright red tart-sweet cherries multiple times a year.",
    specs_hi: { "नर्सरी साइज": "1.5 फीट पौधा", "फलने का समय": "4 से 6 महीने में" },
    specs_en: { "Nursery Size": "1.5 ft", "Fruiting": "4 to 6 months" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/pomegranate.jpg", // Red cherries
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 299, mrp: 499, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-AP01",
    name_hi: "HRMN-99 गर्म इलाके का सेब पौधा (HRMN-99 Low Chill Apple Live Plant)",
    name_en: "HRMN-99 All-India Low Chill Apple Live Grafted Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "मैदानी इलाकों का सेब",
    badge_en: "Plains Apple",
    rating: 4.9,
    reviewCount: 910,
    shortDesc_hi: "45 डिग्री तापमान में भी यूपी, बिहार, राजस्थान, एमपी में भरपूर सेब देने वाली क्रांतिकारी किस्म।",
    shortDesc_en: "Revolutionary low-chill apple variety invented by Hariman Sharma. Prolifically bears crisp red apples in plains at 45°C.",
    description_hi: "अब सेब उगाने के लिए कश्मीर जाने की जरूरत नहीं। HRMN-99 सेब भारत के किसी भी राज्य में जमीन या बड़े गमले में 2 साल में फल देता है।",
    description_en: "Certified HRMN-99 grafted apple plant. Requires no snowfall or severe chill hours. Sweet crisp red fruit.",
    specs_hi: { "नर्सरी साइज": "2 से 2.5 फीट ग्राफ्टेड पौधा", "तापमान सहनशीलता": "45°C तक", "फलने का समय": "रोपाई के 2 वर्ष बाद" },
    specs_en: { "Nursery Size": "2 to 2.5 ft grafted", "Heat Tolerance": "Up to 45°C", "Fruiting": "2 years after planting" },
    isLivePlant: true,
    safeTransitNote: "स्पेशल पैकेजिंग: तने को मजबूत बांस के सहारे और नम रूट-बॉल के साथ भेजा जाता है।",
    shippingType: "express",
    image: "assets/products/apple.jpg", // Red apples on branch
    variants: [
      { id: "v1", label: "1 Original HRMN-99 Plant", weight: "1 Plant", price: 389, mrp: 650, inStock: true },
      { id: "v2", label: "Pair (2 Apple Plants)", weight: "2 Plants", price: 699, mrp: 1250, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-M08",
    name_hi: "ऑस्ट्रेलियाई लंबा लाल शहतूत (Australian Long Mulberry Live Plant)",
    name_en: "Australian Long Red Sweet Mulberry Live Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "4 इंच लंबा शहतूत",
    badge_en: "Long Mulberry",
    rating: 4.8,
    reviewCount: 530,
    shortDesc_hi: "उंगली जितना लंबा और अत्यधिक मीठा रसीला शहतूत। साल में 3 बार भरपूर फलने वाला पौधा।",
    shortDesc_en: "Produces gigantic 3-4 inch long sweet mulberries. Heavy producer bearing multiple times every year.",
    description_hi: "यह किस्म बिना किसी कांटे के और बहुत कम देखभाल में तेजी से बढ़ती है। बच्चों का सबसे पसंदीदा फल।",
    description_en: "Grafted Australian Long Mulberry. Exceptionally sweet berries without acidity.",
    specs_hi: { "नर्सरी साइज": "1.5 से 2 फीट", "फलने का समय": "4 से 6 महीने में" },
    specs_en: { "Nursery Size": "1.5 to 2 ft", "Fruiting": "4 to 6 months" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/dragon_fruit.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 249, mrp: 399, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-ST01",
    name_hi: "थाई मीठी इमली ग्राफ्टेड पौधा (Thai Sweet Tamarind Live Plant)",
    name_en: "Thai Sweet Tamarind (Meethi Imli) Live Grafted Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "खजूर जैसी मीठी",
    badge_en: "Sweet Tamarind",
    rating: 4.8,
    reviewCount: 390,
    shortDesc_hi: "खजूर की तरह मीठी और गूदेदार थाईलैंड की इमली। बिना खटास के सीधे फल की तरह खाई जाने वाली।",
    shortDesc_en: "Grafted sweet tamarind from Thailand. Dense sugary brown pulp with zero sourness, eaten fresh like dates.",
    description_hi: "थाई मीठी इमली का पौधा ग्राफ्टेड होने के कारण 2-3 वर्ष में ही फलियों से लद जाता है। बाजार में ₹300-₹400 किलो बिकती है।",
    description_en: "Early fruiting sweet tamarind tree. Thrives in dry and semi-arid conditions.",
    specs_hi: { "नर्सरी साइज": "2 फीट ग्राफ्टेड पौधा", "फलने का समय": "2 से 3 वर्ष" },
    specs_en: { "Nursery Size": "2 ft grafted", "Fruiting": "2 to 3 years" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/coconut.jpg",
    variants: [
      { id: "v1", label: "1 Grafted Plant", weight: "1 Plant", price: 329, mrp: 550, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-PLANT-SF01",
    name_hi: "कमरख / स्टार फ्रूट पौधा (Sweet Starfruit Live Grafted Plant)",
    name_en: "Sweet Carambola (Star Fruit) Live Grafted Plant",
    category: "plants",
    subCategory: "exotic",
    categoryLabel_hi: "लाइव फलदार पौधे",
    categoryLabel_en: "Live Fruit Plants",
    badge_hi: "तारे जैसा फल",
    badge_en: "Star Fruit",
    rating: 4.7,
    reviewCount: 440,
    shortDesc_hi: "काटने पर तारे (Star) के आकार में दिखने वाला रसीला फल। गमले में सुंदर पीले-हरे फलों का गुच्छा।",
    shortDesc_en: "Sweet Carambola tree yielding beautiful star-shaped juicy fruit. High Vitamin C and ornamental garden value.",
    description_hi: "स्टार फ्रूट देखने में अत्यंत सुंदर और खाने में चटपटा-मीठा होता है। सलाद और सजावट के लिए नंबर एक।",
    description_en: "Compact dwarf starfruit tree ideal for containers and courtyards.",
    specs_hi: { "नर्सरी साइज": "1.5 फीट ग्राफ्टेड", "फलने का समय": "1 वर्ष" },
    specs_en: { "Nursery Size": "1.5 ft", "Fruiting": "1 year" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/orange.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant", weight: "1 Plant", price: 279, mrp: 450, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  }
];

// Combine all product groups into INITIAL_PRODUCTS
const INITIAL_PRODUCTS = [
  ...FRUIT_PLANTS_CATALOG,
  
  // =========================================================================
  // BAMBOO VARIETIES (बांस के पौधे)
  // =========================================================================
  {
    id: "SK-BAMB-001",
    name_hi: "भीमा बांस टिशू कल्चर पौधा (Bhima Bamboo Tissue Culture Live Plant)",
    name_en: "Bhima Bamboo Tissue Culture Plant (Fastest Growing Commercial)",
    category: "bamboo",
    categoryLabel_hi: "बांस के पौधे (Bamboo Varieties)",
    categoryLabel_en: "Bamboo Plants",
    badge_hi: "सुपर फास्ट ग्रोथ",
    badge_en: "Fast Growth",
    rating: 4.9,
    reviewCount: 890,
    shortDesc_hi: "दुनिया का सबसे तेज़ बढ़ने वाला बांस। 3 साल में 40-50 फीट ऊंचा होता है और लकड़ी, बायोमास व ऑक्सीजन फैक्ट्री है।",
    shortDesc_en: "World's fastest growing bamboo clone (Bambusa balcooa hybrid). Reaches 45+ feet in 3 years for high commercial biomass.",
    description_hi: "भीमा बांस (Bhima Bamboo) व्यावसायिक बांस की खेती करने वाले किसानों के लिए सबसे बड़ा वरदान है। यह बिना कांटों वाला, ठोस तने वाला और अत्यधिक लकड़ी पैदा करने वाला टिशू कल्चर सर्टिफाइड पौधा है।",
    description_en: "Bhima Bamboo is a superior tissue-cultured clone. Thornless, thick-walled, and pest-free. Ideal for commercial timber, bio-coal, and heavy carbon sequestration.",
    specs_hi: { "प्रजाति": "भीमा बांस (Bambusa Balcooa Clone TC)", "वृद्धि दर": "प्रतिदिन 1.5 से 3 फीट तक बढ़वार", "पौधे का प्रकार": "प्रमाणित टिशू कल्चर लाइव प्लांट" },
    specs_en: { "Species": "Bhima Bamboo TC Clone", "Growth Rate": "Up to 1.5 - 3 ft/day", "Type": "Hardened Tissue Culture Sapling" },
    isLivePlant: true,
    safeTransitNote: "विशेष बांस पैकेजिंग: रूट-बॉल कोकोपीट में सील कर एयर-वेंटिलेटेड बॉक्स में भेजा जाता है। 10 दिन तक सेफ।",
    shippingType: "express",
    image: "assets/products/bamboo.jpg",
    variants: [
      { id: "v1", label: "1 Healthy Live TC Sapling (1.5 ft)", weight: "1 Plant", price: 149, mrp: 250, inStock: true },
      { id: "v2", label: "Pack of 5 Bamboo Saplings", weight: "5 Plants", price: 599, mrp: 1100, inStock: true },
      { id: "v3", label: "Pack of 20 Commercial Bundle", weight: "20 Plants", price: 1999, mrp: 3800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-BAMB-002",
    name_hi: "गोल्डन बांस - सजावटी व बाउंड्री (Golden Bamboo Live Plant)",
    name_en: "Golden Bamboo Live Ornamental Plant (Phyllostachys Aurea)",
    category: "bamboo",
    categoryLabel_hi: "बांस के पौधे (Bamboo Varieties)",
    categoryLabel_en: "Bamboo Plants",
    badge_hi: "सजावटी व फेंसिंग",
    badge_en: "Ornamental",
    rating: 4.8,
    reviewCount: 620,
    shortDesc_hi: "चमकदार सुनहरे पीले तनों वाला मनमोहक बांस। फार्महाउस, बाउंड्री फेंसिंग और लैंडस्केपिंग के लिए सर्वश्रेष्ठ।",
    shortDesc_en: "Lush golden yellow canes with dense green foliage. Ideal for farm privacy screens, boundaries, and garden landscape.",
    description_hi: "गोल्डन बांस धूप में सुनहरा पीला रंग ग्रहण कर लेता है। यह घना बढ़ता है जिससे खेत या बाउंड्री पर हरी-भरी सुरक्षा दीवार बन जाती है।",
    description_en: "Stunning yellow canes with emerald green leaves. Perfect for windbreaks and architectural gardening.",
    specs_hi: { "प्रजाति": "Phyllostachys Aurea (गोल्डन बांस)", "ऊंचाई": "15 से 25 फीट परिपक्व" },
    specs_en: { "Species": "Phyllostachys Aurea", "Height": "15 to 25 ft" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/golden_bamboo.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant in Pot (2 ft)", weight: "1 Plant", price: 299, mrp: 499, inStock: true },
      { id: "v2", label: "Pack of 3 Hedge Pack", weight: "3 Plants", price: 749, mrp: 1350, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-BAMB-003",
    name_hi: "बुद्धा बेली बांस पौधा (Buddha Belly Bamboo Bonsai Plant)",
    name_en: "Buddha Belly Bamboo Plant (Bambusa Ventricosa Bonsai)",
    category: "bamboo",
    categoryLabel_hi: "बांस के पौधे (Bamboo Varieties)",
    categoryLabel_en: "Bamboo Plants",
    badge_hi: "रेयर बोनसाई",
    badge_en: "Rare Bonsai",
    rating: 4.9,
    reviewCount: 410,
    shortDesc_hi: "पेट की तरह उभरी हुई सुंदर गांठों वाला दुर्लभ बांस। घर, लॉन और बोनसाई गमलों के लिए अत्यंत शुभ।",
    shortDesc_en: "Rare architectural bamboo with unique swollen belly-like internodes. Highly prized for bonsai displays.",
    description_hi: "बुद्धा बेली बांस अपनी उभरी हुई गांठों के लिए प्रसिद्ध है। यह घर के आंगन या बगीचे में सकारात्मक ऊर्जा का प्रतीक माना जाता है।",
    description_en: "Celebrated for distinct bulging internodes resembling the Laughing Buddha. Highly adaptable to decorative pots.",
    specs_hi: { "वैज्ञानिक नाम": "Bambusa Ventricosa", "विशेषता": "उभरी हुई पेट जैसी गांठें" },
    specs_en: { "Botanical Name": "Bambusa Ventricosa", "Feature": "Bulbous internodes" },
    isLivePlant: true,
    shippingType: "express",
    image: "assets/products/bamboo.jpg",
    variants: [
      { id: "v1", label: "1 Live Plant (1.5 ft)", weight: "1 Plant", price: 349, mrp: 599, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // =========================================================================
  // ORGANIC FERTILIZERS (केंचुआ खाद एवं पोषण)
  // =========================================================================
  {
    id: "SK-FERT-001",
    name_hi: "100% शुद्ध केंचुआ खाद (Pure Organic Vermicompost)",
    name_en: "100% Pure Organic Vermicompost Fertilizer",
    category: "fertilizers",
    categoryLabel_hi: "जैविक खाद एवं पोषण",
    categoryLabel_en: "Organic Fertilizers",
    badge_hi: "बेस्ट सेलर",
    badge_en: "Best Seller",
    rating: 4.9,
    reviewCount: 1420,
    shortDesc_hi: "गोबर और बायोमास से तैयार प्रीमियम गुणवत्ता युक्त केंचुआ खाद। मिट्टी की उर्वरा शक्ति को 10 गुना बढ़ाता है।",
    shortDesc_en: "Premium organic vermicompost enriched with beneficial microbes for lush green plant growth and enriched soil.",
    description_hi: "नाइट्रोजन, फास्फोरस, पोटाश और सूक्ष्म पोषक तत्वों से भरपूर। पूरी तरह से गंधहीन और खरपतवार मुक्त।",
    description_en: "Rich in NPK, micronutrients, and microbial life. Odorless, weed-free, and ideal for organic farming.",
    specs_hi: { "उत्पाद प्रकार": "100% जैविक केंचुआ खाद", "प्रयोग": "गमलों में 100-200g प्रति माह" },
    specs_en: { "Product Type": "100% Organic Vermicompost", "Dosage": "100-200g per pot monthly" },
    isLivePlant: false,
    shippingType: "surface",
    image: "assets/products/vermicompost.jpg",
    variants: [
      { id: "v1", label: "1 Kg Pack", weight: "1 kg", price: 49, mrp: 80, inStock: true },
      { id: "v2", label: "5 Kg Bag", weight: "5 kg", price: 199, mrp: 350, inStock: true },
      { id: "v3", label: "25 Kg Farm Bag", weight: "25 kg", price: 799, mrp: 1200, inStock: true },
      { id: "v4", label: "50 Kg Bulk Bag", weight: "50 kg", price: 1450, mrp: 2200, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-FERT-002",
    name_hi: "कंसंट्रेटेड वर्मीवाश टॉनिक (Pure Vermiwash Liquid)",
    name_en: "Concentrated Vermiwash Liquid Plant Tonic",
    category: "fertilizers",
    categoryLabel_hi: "जैविक खाद एवं पोषण",
    categoryLabel_en: "Organic Fertilizers",
    badge_hi: "जैविक टॉनिक",
    badge_en: "Bio Tonic",
    rating: 4.8,
    reviewCount: 680,
    shortDesc_hi: "केंचुए के शरीर से निकला पोषक रस। पत्तियों पर स्प्रे करने से फूलों और फलों की संख्या दोगुनी होती है।",
    shortDesc_en: "Natural growth promoter extracted from earthworms. Promotes heavy flowering and fruiting.",
    description_hi: "प्राकृतिक लिक्विड ग्रोथ प्रमोटर। इसमें एंजाइम्स, विटामिन्स और प्लांट हॉर्मोन्स होते हैं।",
    description_en: "Nutrient-rich organic foliar spray containing natural auxins, cytokinins, and vitamins.",
    specs_hi: { "डोज़": "1 लीटर वर्मीवाश को 10 लीटर पानी में मिलाकर स्प्रे करें" },
    specs_en: { "Dosage": "Dilute 100ml in 1 Liter water" },
    isLivePlant: false,
    shippingType: "standard",
    image: "assets/products/vermicompost.jpg",
    variants: [
      { id: "v1", label: "500 ml Bottle", weight: "500 ml", price: 149, mrp: 250, inStock: true },
      { id: "v2", label: "1 Litre Bottle", weight: "1 Litre", price: 269, mrp: 450, inStock: true },
      { id: "v3", label: "5 Litre Can", weight: "5 Litre", price: 999, mrp: 1800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // =========================================================================
  // NEEM & BIO-PESTICIDES (नीम उत्पाद)
  // =========================================================================
  {
    id: "SK-NEEM-001",
    name_hi: "शुद्ध कोल्ड प्रेस्ड नीम ऑइल 10000 PPM (Cold Pressed Neem Oil)",
    name_en: "Pure Cold Pressed Neem Oil 10000 PPM (Bio-Insecticide)",
    category: "neem",
    categoryLabel_hi: "नीम एवं जैविक कीटनाशक",
    categoryLabel_en: "Neem & Bio-Pesticides",
    badge_hi: "100% शुद्ध",
    badge_en: "100% Pure",
    rating: 4.9,
    reviewCount: 2150,
    shortDesc_hi: "उच्च एज़ाडिरैच्टिन युक्त प्राकृतिक नीम तेल। माहू, चेपा, सफेद मक्खी और कैटरपिलर का काल।",
    shortDesc_en: "High-azadirachtin organic cold-pressed neem oil. Controls 200+ garden and agricultural pests naturally.",
    description_hi: "प्रमाणित नीम की निंबोलियों से कोल्ड-प्रेस विधि द्वारा निकाला गया। वाटर सॉल्युबल फॉर्मूले में तैयार।",
    description_en: "Extracted from premium neem kernels. Natural insect repellent and anti-fungal spray.",
    specs_hi: { "डोज़": "3-5 ml प्रति लीटर पानी" },
    specs_en: { "Dosage": "3 to 5 ml per liter of water" },
    isLivePlant: false,
    shippingType: "standard",
    image: "assets/products/neem_oil.jpg",
    variants: [
      { id: "v1", label: "250 ml Bottle", weight: "250 ml", price: 199, mrp: 350, inStock: true },
      { id: "v2", label: "500 ml Bottle", weight: "500 ml", price: 349, mrp: 590, inStock: true },
      { id: "v3", label: "1 Litre Bottle", weight: "1 Litre", price: 629, mrp: 990, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },
  {
    id: "SK-NEEM-002",
    name_hi: "जैविक नीम खली पाउडर (Organic Neem Cake Powder)",
    name_en: "Organic Neem Cake Powder (Soil Pest Controller)",
    category: "neem",
    categoryLabel_hi: "नीम एवं जैविक कीटनाशक",
    categoryLabel_en: "Neem & Bio-Pesticides",
    badge_hi: "दीमक नाशक",
    badge_en: "Termite Defense",
    rating: 4.8,
    reviewCount: 940,
    shortDesc_hi: "खाद भी और कीटनाशक भी। मिट्टी में लगने वाले दीमक और निमाटोड को जड़ से समाप्त करता है।",
    shortDesc_en: "Dual benefit: organic root nutrition plus termite & nematode control in root soil.",
    description_hi: "मिट्टी में नाइट्रोजन के ह्रास को रोकती है और सल्फर व पोटाश प्रदान करती है।",
    description_en: "Natural neem seed meal residue. Acts as a natural nitrification inhibitor.",
    specs_hi: { "उपयोग": "बुवाई के समय मिट्टी में मिलाएं" },
    specs_en: { "Usage": "Mix in pot soil or beds" },
    isLivePlant: false,
    shippingType: "surface",
    image: "assets/products/neem_cake.jpg",
    variants: [
      { id: "v1", label: "1 Kg Pack", weight: "1 kg", price: 69, mrp: 110, inStock: true },
      { id: "v2", label: "5 Kg Bag", weight: "5 kg", price: 299, mrp: 490, inStock: true },
      { id: "v3", label: "25 Kg Farm Bag", weight: "25 kg", price: 1199, mrp: 1800, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // =========================================================================
  // MULCHING & FARM ESSENTIALS (मल्चिंग शीट)
  // =========================================================================
  {
    id: "SK-MULCH-001",
    name_hi: "सिल्वर ब्लैक एग्रीकल्चरल मल्चिंग फिल्म 25 माइक्रोन (Mulching Film 25 Micron)",
    name_en: "Silver Black Agricultural Mulching Film 25 Micron (1.2m x 400m)",
    category: "mulching",
    categoryLabel_hi: "मल्चिंग शीट व फार्म एसेंशियल्स",
    categoryLabel_en: "Mulching & Farm Protection",
    badge_hi: "100% वर्जिन प्लास्टिक",
    badge_en: "Virgin Polymer",
    rating: 4.8,
    reviewCount: 910,
    shortDesc_hi: "खरपतवार पूरी तरह रोके, 50% पानी की बचत करे और पैदावार में 40% की वृद्धि करे। 400 मीटर का रोल।",
    shortDesc_en: "UV-stabilized silver-black mulch sheet. Completely suppresses weeds and cuts water loss by 50%.",
    description_hi: "100% वर्जिन पॉलीमर से निर्मित। सिल्वर ऊपरी सतह कीट भगाती है, काली निचली सतह खरपतवार रोकती है।",
    description_en: "Engineered 25-micron silver-black mulching film. Suppresses weed growth and maintains soil warmth.",
    specs_hi: { "मोटाई": "25 माइक्रोन", "चौड़ाई": "1.2 मीटर (4 फीट)", "लंबाई": "400 मीटर" },
    specs_en: { "Thickness": "25 Micron", "Width": "1.2m (4ft)", "Length": "400m" },
    isLivePlant: false,
    shippingType: "surface",
    image: "assets/products/mulch.jpg",
    variants: [
      { id: "v1", label: "1.2m x 400m Roll (25 Micron)", weight: "Approx 10 kg", price: 1899, mrp: 2600, inStock: true },
      { id: "v2", label: "1.2m x 800m Roll (25 Micron)", weight: "Approx 20 kg", price: 3649, mrp: 5000, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  },

  // =========================================================================
  // AGRI TOOLS & SPRAYERS (कृषि उपकरण व स्प्रेयर)
  // =========================================================================
  {
    id: "SK-TOOL-001",
    name_hi: "16 लीटर 2-इन-1 बैटरी व हैंड स्प्रेयर पंप (16L Battery Knapsack Sprayer)",
    name_en: "16L Battery Operated 2-in-1 Knapsack Sprayer with Dual Motor",
    category: "tools",
    categoryLabel_hi: "कृषि उपकरण व सिंचाई",
    categoryLabel_en: "Agri Tools & Sprayers",
    badge_hi: "डबल मोटर पॉवर",
    badge_en: "Dual Motor",
    rating: 4.8,
    reviewCount: 1680,
    shortDesc_hi: "12V 12AH हेवी बैटरी युक्त कृषि स्प्रेयर। एक चार्ज में 25-30 टंकी स्प्रे करने में सक्षम।",
    shortDesc_en: "High-pressure 12V 12Ah battery sprayer. Discharges 25-30 tanks on a single charge.",
    description_hi: "नीम तेल व जैविक कीटनाशक छिड़काव के लिए श्रेष्ठ स्प्रेयर। रेगुलेटर और 4 ब्रास नोजल शामिल।",
    description_en: "Heavy-duty 16L knapsack sprayer with regulator, lance, and nozzles.",
    specs_hi: { "क्षमता": "16 लीटर", "बैटरी": "12V 12Ah", "वारंटी": "6 माह" },
    specs_en: { "Capacity": "16 Liters", "Battery": "12V 12Ah", "Warranty": "6 Months" },
    isLivePlant: false,
    shippingType: "surface",
    image: "assets/products/mulch.jpg",
    variants: [
      { id: "v1", label: "Double Motor (12V 12Ah)", weight: "Approx 6.5 kg", price: 2999, mrp: 4500, inStock: true }
    ],
    seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
  }
];

function getField(obj, fieldName, lang = "hi") {
  if (!obj) return "";
  const localized = obj[`${fieldName}_${lang}`];
  if (localized) return localized;
  return obj[fieldName] || obj[`${fieldName}_hi`] || obj[`${fieldName}_en`] || "";
}

if (typeof window !== "undefined") {
  window.INITIAL_PRODUCTS = INITIAL_PRODUCTS;
  window.getField = getField;
}
