/**
 * Shivon Krishi Store - Core UI & Application Controller
 * Handles Bilingual Translation (Hindi & English), Live Search,
 * Deep Filters, Variant Selection, Thematic Dark/Light Mode & Modals
 */

const App = {
  currentLang: "hi",
  activeCategory: "all",
  searchQuery: "",
  maxPrice: 5000,
  minRating: 0,
  selectedWeightFilter: "all",
  sortBy: "popular",

  // Complete Bilingual UI Dictionary
  i18n: {
    hi: {
      tagline: "भारत का विश्वसनीय जैविक एवं कृषि ऑनलाइन स्टोर",
      offerBanner: "कूपन कोड <b>KISAAN10</b> इस्तेमाल करें और पाएं 10% की अतिरिक्त छूट!",
      helpline: "📞 किसान हेल्पलाइन:",
      becomeSeller: "🏪 सेलर बनें (Sell on Shivon)",
      trackOrder: "ऑर्डर ट्रैक करें",
      adminPortal: "⚙️ एडमिन पोर्टल",
      deliveryTo: "डिलीवरी पता",
      panIndia: "ऑल इंडिया (Pan-India)",
      searchPlaceholder: "केंचुआ खाद, भीमा बांस, नीम ऑइल, आम का पौधा, मल्चिंग शीट खोजें...",
      allCategories: "सभी उत्पाद",
      fertilizers: "केंचुआ खाद व पोषण",
      neem: "नीम तेल व कीटनाशक",
      bamboo: "🎋 बांस के पौधे (Bamboo)",
      plants: "🌱 लाइव पौधे (Safe Transit)",
      mulching: "मल्चिंग शीट व नेट",
      seeds: "उन्नत बीज",
      tools: "स्प्रेयर व टूल्स",
      login: "लॉगिन",
      cart: "कार्ट",
      quickView: "त्वरित विवरण (Quick View)",
      addToCart: "कार्ट में डालें",
      buyNow: "अभी खरीदें",
      selectVariant: "वैरिएंट / साइज़ चुनें:",
      savePct: "छूट",
      filterTitle: "फ़िल्टर (Deep Filters)",
      filterCategories: "श्रेणियां",
      maxPriceLabel: "अधिकतम कीमत",
      weightLabel: "वज़न / पैक साइज़",
      farmerHelpTitle: "🌱 विशेष सहायता चाहिए?",
      farmerHelpDesc: "फसल रोग या सही खाद चुनने के लिए हमारे विशेषज्ञ से संपर्क करें।",
      farmerHelpBtn: "WhatsApp पर बात करें →",
      sortLabel: "क्रमबद्ध करें (Sort):",
      sortPopular: "सर्वाधिक लोकप्रिय (Popularity)",
      sortPriceLow: "कीमत: कम से ज्यादा (Price: Low to High)",
      sortPriceHigh: "कीमत: ज्यादा से कम (Price: High to Low)",
      sortRating: "ग्राहक रेटिंग (Customer Rating)",
      noProductsTitle: "कोई उत्पाद नहीं मिला",
      noProductsDesc: "कृपया फ़िल्टर रीसेट करें या कोई अन्य नाम खोजें।",
      showAllBtn: "सभी उत्पाद दिखाएं",
      livePlantSafeBadge: "🌱 ऑल-इंडिया सेफ शिप",
      bambooSafeBadge: "🎋 बांस नर्सरी सुरक्षित",
      checkPincode: "अपने इलाके का पिनकोड जांचें (Delivery Check):",
      checkBtn: "जांचें",
      specsTitle: "उत्पाद विवरण व उपयोग (Specifications):",
      sellerLabel: "विक्रेता:"
    },
    en: {
      tagline: "India's Trusted Organic & Agriculture Online Store",
      offerBanner: "Use coupon code <b>KISAAN10</b> to get extra 10% OFF!",
      helpline: "📞 Farmer Helpline:",
      becomeSeller: "🏪 Become a Seller",
      trackOrder: "Track Order",
      adminPortal: "⚙️ Admin Portal",
      deliveryTo: "Deliver To",
      panIndia: "All India (Pan-India)",
      searchPlaceholder: "Search Vermicompost, Bhima Bamboo, Neem Oil, Mango plant, Mulch film...",
      allCategories: "All Products",
      fertilizers: "Organic Fertilizers",
      neem: "Neem & Bio-Pesticides",
      bamboo: "🎋 Bamboo Plants & Clones",
      plants: "🌱 Live Nursery Plants",
      mulching: "Mulching Sheets & Nets",
      seeds: "Hybrid & Desi Seeds",
      tools: "Agri Sprayers & Tools",
      login: "Login",
      cart: "Cart",
      quickView: "Quick View",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      selectVariant: "Select Variant / Size:",
      savePct: "OFF",
      filterTitle: "Filters (Deep Filters)",
      filterCategories: "Categories",
      maxPriceLabel: "Max Price",
      weightLabel: "Weight / Pack Size",
      farmerHelpTitle: "🌱 Need Expert Advice?",
      farmerHelpDesc: "Connect directly with our agri-specialist for soil health & plant guidance.",
      farmerHelpBtn: "Chat on WhatsApp →",
      sortLabel: "Sort By:",
      sortPopular: "Most Popular",
      sortPriceLow: "Price: Low to High",
      sortPriceHigh: "Price: High to Low",
      sortRating: "Customer Rating",
      noProductsTitle: "No Products Found",
      noProductsDesc: "Please reset your filters or search with another keyword.",
      showAllBtn: "Show All Products",
      livePlantSafeBadge: "🌱 Safe Pan-India Transit",
      bambooSafeBadge: "🎋 Certified Bamboo Sapling",
      checkPincode: "Check Pincode Serviceability:",
      checkBtn: "Check",
      specsTitle: "Product Specifications & Usage:",
      sellerLabel: "Seller:"
    }
  },

  init() {
    this.currentLang = StoreStorage.getLanguage();
    this.initTheme();
    this.applyLanguage(this.currentLang);
    this.renderProducts();
    this.bindEvents();
    this.updateWishlistCount();

    window.addEventListener("shivon_products_changed", () => this.renderProducts());
    window.addEventListener("shivon_lang_changed", (e) => {
      this.currentLang = e.detail;
      this.applyLanguage(this.currentLang);
      this.renderProducts();
    });
    window.addEventListener("shivon_wishlist_changed", () => {
      this.updateWishlistCount();
      this.renderProducts();
    });
  },

  // Language Switcher Function
  setLanguage(lang) {
    StoreStorage.setLanguage(lang);
  },

  applyLanguage(lang) {
    const t = this.i18n[lang] || this.i18n.hi;

    // Update Language Pill indicator
    const langLabels = document.querySelectorAll(".current-lang-text");
    langLabels.forEach(el => {
      el.textContent = lang === "hi" ? "हिंदी (HI)" : "English (EN)";
    });

    // Update Elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    // Update Search Placeholder
    document.querySelectorAll(".main-search-input").forEach(input => {
      input.placeholder = t.searchPlaceholder;
    });

    // Update Price Display
    const priceDisplay = document.getElementById("price-slider-val");
    if (priceDisplay) priceDisplay.textContent = `₹${this.maxPrice}`;
  },

  // Dark / Light Theme
  initTheme() {
    const savedTheme = StoreStorage.getTheme();
    StoreStorage.setTheme(savedTheme);
    this.updateThemeButtonIcon(savedTheme);
  },

  toggleTheme() {
    const current = StoreStorage.getTheme();
    const next = current === "dark" ? "light" : "dark";
    StoreStorage.setTheme(next);
    this.updateThemeButtonIcon(next);
  },

  updateThemeButtonIcon(theme) {
    const btnIcons = document.querySelectorAll(".theme-toggle-icon");
    btnIcons.forEach(icon => {
      if (theme === "dark") {
        icon.innerHTML = `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
      } else {
        icon.innerHTML = `<svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
      }
    });
  },

  bindEvents() {
    // Theme toggle button
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.addEventListener("click", () => this.toggleTheme());
    });

    // Language toggle buttons
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const lang = e.currentTarget.getAttribute("data-lang-btn");
        this.setLanguage(lang);
      });
    });

    // Search Input with Debounce
    const searchInputs = document.querySelectorAll(".main-search-input");
    searchInputs.forEach(input => {
      input.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProducts();
      });
    });

    // Category Tabs
    document.querySelectorAll("[data-category-tab]").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const cat = e.currentTarget.getAttribute("data-category-tab");
        this.setCategory(cat);
      });
    });

    // Price Slider
    const priceSlider = document.getElementById("price-slider");
    const priceDisplay = document.getElementById("price-slider-val");
    if (priceSlider) {
      priceSlider.addEventListener("input", (e) => {
        this.maxPrice = Number(e.target.value);
        if (priceDisplay) priceDisplay.textContent = `₹${this.maxPrice}`;
        this.renderProducts();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.renderProducts();
      });
    }

    // Weight/Pack Filter Buttons
    document.querySelectorAll("[data-weight-filter]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll("[data-weight-filter]").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.selectedWeightFilter = e.currentTarget.getAttribute("data-weight-filter");
        this.renderProducts();
      });
    });

    // Mobile Filters Toggle
    const mobileFilterBtn = document.getElementById("mobile-filter-btn");
    const filterSidebar = document.getElementById("filter-sidebar");
    const closeFilterBtn = document.getElementById("close-filter-btn");
    if (mobileFilterBtn && filterSidebar) {
      mobileFilterBtn.addEventListener("click", () => {
        filterSidebar.classList.remove("hidden");
        filterSidebar.classList.add("fixed", "inset-0", "z-50", "bg-white", "dark:bg-gray-900", "p-6", "overflow-y-auto");
      });
    }
    if (closeFilterBtn && filterSidebar) {
      closeFilterBtn.addEventListener("click", () => {
        filterSidebar.classList.add("hidden");
        filterSidebar.classList.remove("fixed", "inset-0", "z-50", "bg-white", "dark:bg-gray-900", "p-6", "overflow-y-auto");
      });
    }
  },

  setCategory(category) {
    this.activeCategory = category;
    document.querySelectorAll("[data-category-tab]").forEach(tab => {
      if (tab.getAttribute("data-category-tab") === category) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    // Sync radio in filter sidebar
    const radio = document.querySelector(`input[name="category_filter"][value="${category}"]`);
    if (radio) radio.checked = true;

    this.renderProducts();

    const productsSec = document.getElementById("products-catalog-section");
    if (productsSec && window.innerWidth < 768) {
      productsSec.scrollIntoView({ behavior: "smooth" });
    }
  },

  getFilteredProducts() {
    let list = StoreStorage.getProducts();

    // Category filter
    if (this.activeCategory !== "all") {
      list = list.filter(p => p.category === this.activeCategory);
    }

    // Search query
    if (this.searchQuery) {
      const q = this.searchQuery;
      list = list.filter(p => {
        const nameHi = (p.name_hi || "").toLowerCase();
        const nameEn = (p.name_en || "").toLowerCase();
        const descHi = (p.shortDesc_hi || "").toLowerCase();
        const descEn = (p.shortDesc_en || "").toLowerCase();
        const catHi = (p.categoryLabel_hi || "").toLowerCase();
        const catEn = (p.categoryLabel_en || "").toLowerCase();
        return nameHi.includes(q) || nameEn.includes(q) || descHi.includes(q) || descEn.includes(q) || catHi.includes(q) || catEn.includes(q);
      });
    }

    // Price filter
    list = list.filter(p => {
      const minVariantPrice = Math.min(...p.variants.map(v => v.price));
      return minVariantPrice <= this.maxPrice;
    });

    // Weight/Pack filter
    if (this.selectedWeightFilter !== "all") {
      list = list.filter(p => {
        return p.variants.some(v => v.label.toLowerCase().includes(this.selectedWeightFilter.toLowerCase()) || v.weight.toLowerCase().includes(this.selectedWeightFilter.toLowerCase()));
      });
    }

    // Sorting
    if (this.sortBy === "price-low") {
      list.sort((a, b) => a.variants[0].price - b.variants[0].price);
    } else if (this.sortBy === "price-high") {
      list.sort((a, b) => b.variants[0].price - a.variants[0].price);
    } else if (this.sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      list.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return list;
  },

  renderProducts() {
    const container = document.getElementById("products-grid");
    const countDisplay = document.getElementById("products-count-badge");
    const noResults = document.getElementById("no-products-found");

    if (!container) return;

    const lang = this.currentLang;
    const t = this.i18n[lang] || this.i18n.hi;
    const products = this.getFilteredProducts();

    if (countDisplay) {
      countDisplay.textContent = lang === "hi" 
        ? `${products.length} उत्पाद उपलब्ध` 
        : `${products.length} Products Available`;
    }

    if (products.length === 0) {
      container.innerHTML = "";
      if (noResults) noResults.classList.remove("hidden");
      return;
    }

    if (noResults) noResults.classList.add("hidden");

    container.innerHTML = products.map(product => {
      const defaultVariant = product.variants[0];
      const isWish = StoreStorage.isWishlisted(product.id);
      const discountPct = Math.round(((defaultVariant.mrp - defaultVariant.price) / defaultVariant.mrp) * 100);
      
      const productName = getField(product, "name", lang);
      const categoryLabel = getField(product, "categoryLabel", lang);
      const badge = getField(product, "badge", lang);

      return `
        <div class="product-card group" id="card-${product.id}">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${productName}" loading="lazy" onerror="this.onerror=null; this.src='assets/products/mango.jpg';">
            
            <!-- Badges -->
            <div class="absolute top-2 left-2 flex flex-col gap-1 items-start z-10">
              ${badge ? `<span class="badge-bestseller shadow-sm">${badge}</span>` : ''}
              ${product.category === 'bamboo' 
                ? `<span class="badge-organic shadow-sm">${t.bambooSafeBadge}</span>`
                : product.isLivePlant 
                ? `<span class="badge-plant-safe shadow-sm">${t.livePlantSafeBadge}</span>` 
                : ''}
            </div>

            <!-- Wishlist Heart Button -->
            <button onclick="App.toggleWishlist('${product.id}')" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 shadow flex items-center justify-center text-gray-500 hover:text-red-500 transition z-10" title="Wishlist">
              <svg class="w-4 h-4 ${isWish ? 'fill-red-500 text-red-500' : 'fill-none stroke-current'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </button>

            <!-- Quick View Button -->
            <button onclick="App.openProductModal('${product.id}')" class="absolute bottom-2 left-2 right-2 py-1.5 bg-emerald-800/90 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow opacity-0 group-hover:opacity-100 transition duration-200 backdrop-blur-sm">
              ${t.quickView}
            </button>
          </div>

          <div class="p-3.5 flex flex-col flex-1 justify-between">
            <div>
              <span class="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">${categoryLabel}</span>
              <h3 onclick="App.openProductModal('${product.id}')" class="text-sm font-bold text-gray-900 dark:text-white mt-1 line-clamp-2 hover:text-emerald-600 cursor-pointer" title="${productName}">${productName}</h3>
              
              <!-- Star Rating -->
              <div class="flex items-center gap-1.5 mt-1.5">
                <span class="rating-pill">
                  ${product.rating} ★
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400">(${product.reviewCount.toLocaleString('en-IN')})</span>
              </div>

              <!-- Variant Selector Pills -->
              <div class="mt-2.5">
                <div class="text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1">${t.selectVariant}</div>
                <div class="flex flex-wrap gap-1.5" id="variants-${product.id}">
                  ${product.variants.map((v, idx) => `
                    <button type="button" onclick="App.selectCardVariant('${product.id}', '${v.id}')" class="variant-pill ${idx === 0 ? 'active' : ''}" data-card-variant="${v.id}">
                      ${v.weight || v.label}
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>

            <!-- Price & Buy Buttons -->
            <div class="mt-3.5 pt-2.5 border-t border-gray-100 dark:border-gray-800">
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-black text-gray-900 dark:text-white" id="price-${product.id}">₹${defaultVariant.price}</span>
                <span class="text-xs text-gray-400 line-through" id="mrp-${product.id}">₹${defaultVariant.mrp}</span>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400" id="discount-${product.id}">${discountPct}% ${t.savePct}</span>
              </div>

              <div class="grid grid-cols-2 gap-1.5 mt-2.5">
                <button type="button" onclick="App.addCurrentCardToCart('${product.id}')" class="w-full py-2 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  ${t.addToCart}
                </button>
                <button type="button" onclick="App.buyNow('${product.id}')" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-sm">
                  ${t.buyNow}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  selectCardVariant(productId, variantId) {
    const product = StoreStorage.getProductById(productId);
    if (!product) return;
    const variant = product.variants.find(v => v.id === variantId);
    if (!variant) return;

    const container = document.getElementById(`variants-${productId}`);
    if (container) {
      container.querySelectorAll(".variant-pill").forEach(pill => {
        if (pill.getAttribute("data-card-variant") === variantId) {
          pill.classList.add("active");
        } else {
          pill.classList.remove("active");
        }
      });
    }

    const priceEl = document.getElementById(`price-${productId}`);
    const mrpEl = document.getElementById(`mrp-${productId}`);
    const discountEl = document.getElementById(`discount-${productId}`);
    if (priceEl) priceEl.textContent = `₹${variant.price}`;
    if (mrpEl) mrpEl.textContent = `₹${variant.mrp}`;
    if (discountEl) {
      const discountPct = Math.round(((variant.mrp - variant.price) / variant.mrp) * 100);
      const t = this.i18n[this.currentLang] || this.i18n.hi;
      discountEl.textContent = `${discountPct}% ${t.savePct}`;
    }
  },

  getSelectedVariantId(productId) {
    const container = document.getElementById(`variants-${productId}`);
    if (container) {
      const activePill = container.querySelector(".variant-pill.active");
      if (activePill) return activePill.getAttribute("data-card-variant");
    }
    const product = StoreStorage.getProductById(productId);
    return product ? product.variants[0].id : null;
  },

  addCurrentCardToCart(productId) {
    const product = StoreStorage.getProductById(productId);
    if (!product) return;
    const variantId = this.getSelectedVariantId(productId);
    StoreStorage.addToCart(product, variantId, 1);
    CartManager.openDrawer();
  },

  buyNow(productId) {
    const product = StoreStorage.getProductById(productId);
    if (!product) return;
    const variantId = this.getSelectedVariantId(productId);
    StoreStorage.addToCart(product, variantId, 1);
    CartManager.openCheckout();
  },

  toggleWishlist(productId) {
    StoreStorage.toggleWishlist(productId);
  },

  updateWishlistCount() {
    const count = StoreStorage.getWishlist().length;
    document.querySelectorAll(".wishlist-count-badge").forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-flex" : "none";
    });
  },

  // Modal Details
  activeModalProduct: null,
  activeModalVariantId: null,

  openProductModal(productId) {
    const product = StoreStorage.getProductById(productId);
    if (!product) return;

    this.activeModalProduct = product;
    this.activeModalVariantId = product.variants[0].id;

    const modal = document.getElementById("product-detail-modal");
    const content = document.getElementById("product-modal-content");
    if (!modal || !content) return;

    const lang = this.currentLang;
    const t = this.i18n[lang] || this.i18n.hi;
    const defaultVariant = product.variants[0];
    const discountPct = Math.round(((defaultVariant.mrp - defaultVariant.price) / defaultVariant.mrp) * 100);

    const productName = getField(product, "name", lang);
    const categoryLabel = getField(product, "categoryLabel", lang);
    const description = getField(product, "description", lang);
    const badge = getField(product, "badge", lang);
    const specs = product[`specs_${lang}`] || product.specs_hi || product.specs || {};

    content.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <div class="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative aspect-square">
            <img id="modal-main-img" src="${product.image}" alt="${productName}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='assets/products/mango.jpg';">
            ${badge ? `<span class="absolute top-3 left-3 badge-bestseller">${badge}</span>` : ''}
          </div>

          <!-- Safe Transit Guarantee Callout -->
          ${(product.isLivePlant || product.category === 'bamboo') ? `
            <div class="mt-4 p-3.5 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-xl flex gap-3 items-start">
              <span class="text-2xl">🌱</span>
              <div class="text-xs text-blue-900 dark:text-blue-200">
                <p class="font-bold">${lang === 'hi' ? 'ऑल इंडिया लाइव प्लांट सुरक्षा गारंटी' : 'Pan-India Live Plant Safety Guarantee'}</p>
                <p class="mt-1">${product.safeTransitNote || (lang === 'hi' ? 'यह पौधा नम कोकोपीट और एयर-वेंटिलेटेड बॉक्स में पैक होकर आता है जिससे 7-10 दिनों की यात्रा में भी यह पूर्णतः सुरक्षित व जीवित रहता है।' : 'Packed in moisture-retaining cocopeat and ventilated crate for 7-10 days safe transit across India.')}</p>
              </div>
            </div>
          ` : `
            <div class="mt-4 p-3.5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-xl flex gap-3 items-start">
              <span class="text-2xl">🚚</span>
              <div class="text-xs text-emerald-900 dark:text-emerald-200">
                <p class="font-bold">Shiprocket Pan-India Logistics</p>
                <p class="mt-1">${lang === 'hi' ? 'भारी बोरियों (5kg, 25kg) के लिए सस्ता व सुरक्षित सरफेस कार्गो और तेज़ ट्रैकिंग उपलब्ध है।' : 'Economical Surface Cargo for heavy fertilizer bags with live tracking.'}</p>
              </div>
            </div>
          `}
        </div>

        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">${categoryLabel}</span>
              <span class="text-xs text-gray-500">${t.sellerLabel} <b>${product.seller ? product.seller.name : 'Shivon Krishi Store'}</b> ✓</span>
            </div>

            <h2 class="text-xl font-bold text-gray-900 dark:text-white mt-1">${productName}</h2>
            
            <div class="flex items-center gap-2 mt-2">
              <span class="rating-pill">${product.rating} ★</span>
              <span class="text-xs text-gray-500">(${product.reviewCount.toLocaleString('en-IN')} ${lang === 'hi' ? 'रेटिंग्स' : 'Ratings'})</span>
            </div>

            <div class="flex items-baseline gap-3 mt-3 pb-3 border-b border-gray-200 dark:border-gray-800">
              <span class="text-2xl font-black text-gray-900 dark:text-white" id="modal-price">₹${defaultVariant.price}</span>
              <span class="text-sm text-gray-400 line-through" id="modal-mrp">₹${defaultVariant.mrp}</span>
              <span class="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded" id="modal-discount">${discountPct}% ${t.savePct}</span>
            </div>

            <p class="text-xs text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">${description}</p>

            <div class="mt-4">
              <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">${t.selectVariant}</label>
              <div class="flex flex-wrap gap-2" id="modal-variants-list">
                ${product.variants.map((v, i) => `
                  <button type="button" onclick="App.selectModalVariant('${v.id}')" class="variant-pill ${i === 0 ? 'active' : ''}" data-modal-variant="${v.id}">
                    ${v.label} (₹${v.price})
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Pincode Check -->
            <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">${t.checkPincode}</label>
              <div class="flex gap-2">
                <input type="text" id="modal-pincode-input" placeholder="e.g. 221002" maxlength="6" class="px-3 py-1.5 text-xs bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 text-gray-900 dark:text-white">
                <button type="button" onclick="App.checkPincodeDelivery()" class="px-3 py-1.5 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-xs font-semibold hover:bg-gray-900">${t.checkBtn}</button>
              </div>
              <div id="pincode-result" class="text-xs mt-1.5 hidden font-medium"></div>
            </div>

            <!-- Specs Table -->
            <div class="mt-4">
              <h4 class="text-xs font-bold text-gray-800 dark:text-gray-200 mb-2">${t.specsTitle}</h4>
              <div class="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden text-xs">
                ${Object.entries(specs).map(([key, val], idx) => `
                  <div class="flex ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/40' : 'bg-white dark:bg-gray-900'} p-2 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                    <span class="w-1/3 font-semibold text-gray-500 dark:text-gray-400">${key}:</span>
                    <span class="w-2/3 text-gray-800 dark:text-gray-200 font-medium">${val}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button type="button" onclick="App.addModalToCart()" class="py-2.5 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              ${t.addToCart}
            </button>
            <button type="button" onclick="App.buyNowModal()" class="py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition shadow-md">
              ${t.buyNow}
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  },

  closeProductModal() {
    const modal = document.getElementById("product-detail-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  },

  selectModalVariant(variantId) {
    if (!this.activeModalProduct) return;
    const variant = this.activeModalProduct.variants.find(v => v.id === variantId);
    if (!variant) return;

    this.activeModalVariantId = variantId;

    document.querySelectorAll("#modal-variants-list .variant-pill").forEach(pill => {
      if (pill.getAttribute("data-modal-variant") === variantId) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });

    const priceEl = document.getElementById("modal-price");
    const mrpEl = document.getElementById("modal-mrp");
    const discountEl = document.getElementById("modal-discount");
    if (priceEl) priceEl.textContent = `₹${variant.price}`;
    if (mrpEl) mrpEl.textContent = `₹${variant.mrp}`;
    if (discountEl) {
      const discountPct = Math.round(((variant.mrp - variant.price) / variant.mrp) * 100);
      const t = this.i18n[this.currentLang] || this.i18n.hi;
      discountEl.textContent = `${discountPct}% ${t.savePct}`;
    }
  },

  addModalToCart() {
    if (!this.activeModalProduct || !this.activeModalVariantId) return;
    StoreStorage.addToCart(this.activeModalProduct, this.activeModalVariantId, 1);
    this.closeProductModal();
    CartManager.openDrawer();
  },

  buyNowModal() {
    if (!this.activeModalProduct || !this.activeModalVariantId) return;
    StoreStorage.addToCart(this.activeModalProduct, this.activeModalVariantId, 1);
    this.closeProductModal();
    CartManager.openCheckout();
  },

  checkPincodeDelivery() {
    const input = document.getElementById("modal-pincode-input");
    const res = document.getElementById("pincode-result");
    if (!input || !res) return;

    const lang = this.currentLang;
    const pin = input.value.trim();
    if (pin.length !== 6 || isNaN(pin)) {
      res.className = "text-xs mt-1.5 text-red-500 font-semibold";
      res.textContent = lang === 'hi' 
        ? "कृपया 6 अंकों का सही भारतीय पिनकोड दर्ज करें!" 
        : "Please enter a valid 6-digit Indian pincode!";
      res.classList.remove("hidden");
      return;
    }

    res.className = "text-xs mt-1.5 text-emerald-600 dark:text-emerald-400 font-semibold";
    res.innerHTML = lang === 'hi'
      ? `✓ पिनकोड ${pin} पर डिलीवरी उपलब्ध है। <b>Shiprocket</b> द्वारा 3-5 कार्यदिवसों में पहुंचेगा। COD उपलब्ध है।`
      : `✓ Delivery available at ${pin}. Dispatched via <b>Shiprocket</b> (3-5 business days). COD Available.`;
    res.classList.remove("hidden");
  },

  // ================= ORDER TRACKING =================
  openTrackOrderModal() {
    const modal = document.getElementById("track-order-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      const res = document.getElementById("track-order-result");
      if (res) res.classList.add("hidden");
    }
  },

  closeTrackOrderModal() {
    const modal = document.getElementById("track-order-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  },

  searchOrderTracking() {
    const input = document.getElementById("track-order-input");
    const res = document.getElementById("track-order-result");
    if (!input || !res) return;

    const query = input.value.trim().toUpperCase();
    if (!query) {
      alert("कृपया ऑर्डर ID या मोबाइल नंबर दर्ज करें!");
      return;
    }

    const orders = StoreStorage.getOrders();
    const order = orders.find(o => 
      o.orderId.toUpperCase() === query || 
      (o.customer && o.customer.phone && o.customer.phone.includes(query))
    );

    res.classList.remove("hidden");

    if (!order) {
      res.innerHTML = `
        <div class="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl text-center">
          <p class="text-xs font-bold text-red-600 dark:text-red-400">कोई ऑर्डर नहीं मिला!</p>
          <p class="text-[11px] text-gray-500 mt-0.5">कृपया सही ऑर्डर ID (उदा. SKO-89241) जांचें या हमारे हेल्पलाइन नंबर पर संपर्क करें।</p>
        </div>
      `;
      return;
    }

    const statuses = ["Confirmed", "Packed", "Shipped", "Delivered"];
    const currentIdx = Math.max(0, statuses.indexOf(order.orderStatus));

    res.innerHTML = `
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-3">
        <div class="flex justify-between items-center border-b border-emerald-200 dark:border-emerald-800 pb-2">
          <div>
            <span class="text-xs font-bold text-gray-900 dark:text-white">${order.orderId}</span>
            <span class="text-[10px] text-gray-500 block">${new Date(order.date).toLocaleDateString('hi-IN')}</span>
          </div>
          <span class="px-2.5 py-1 bg-emerald-600 text-white rounded-full text-[10px] font-bold">${order.orderStatus}</span>
        </div>

        <div class="text-xs space-y-1 text-gray-700 dark:text-gray-300">
          <p>👤 <b>ग्राहक:</b> ${order.customer.name} (${order.customer.phone})</p>
          <p>🚚 <b>लॉजिस्टिक्स:</b> ${order.shippingMethod}</p>
          <p>📦 <b>Shiprocket AWB:</b> <span class="font-mono font-bold">${order.trackingNumber}</span></p>
          <p>💰 <b>कुल राशि:</b> ₹${order.totalAmount} (${order.paymentMethod})</p>
        </div>

        <!-- Visual Step Tracker -->
        <div class="pt-3 border-t border-emerald-200 dark:border-emerald-800">
          <div class="grid grid-cols-4 text-center text-[10px] font-bold">
            <div class="${currentIdx >= 0 ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full ${currentIdx >= 0 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center mx-auto mb-1">✓</div>
              ऑर्डर दर्ज
            </div>
            <div class="${currentIdx >= 1 ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full ${currentIdx >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center mx-auto mb-1">${currentIdx >= 1 ? '✓' : '2'}</div>
              पैकिंग
            </div>
            <div class="${currentIdx >= 2 ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full ${currentIdx >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center mx-auto mb-1">${currentIdx >= 2 ? '✓' : '3'}</div>
              डिस्पैच
            </div>
            <div class="${currentIdx >= 3 ? 'text-emerald-700 dark:text-emerald-300' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full ${currentIdx >= 3 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center mx-auto mb-1">${currentIdx >= 3 ? '✓' : '4'}</div>
              डिलीवरी
            </div>
          </div>
        </div>

        <div class="pt-2 flex gap-2">
          <button onclick="CartManager.printInvoice('${order.orderId}')" class="flex-1 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded text-xs">
            🖨️ इनवॉइस प्रिंट करें
          </button>
        </div>
      </div>
    `;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  CartManager.init();
});

if (typeof window !== "undefined") {
  window.App = App;
}
