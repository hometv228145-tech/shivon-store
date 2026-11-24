/**
 * Shivon Krishi Store - Central Data Storage & State Engine
 * Manages persistent storage in LocalStorage with fallback defaults.
 * Supports Bilingual Language (Hindi & English), Real-time Sync & Multi-vendor data.
 */

const StoreStorage = {
  KEYS: {
    PRODUCTS: "shivon_products_v5", // Bumped to v5 for 100% verified local product assets
    CART: "shivon_cart_v1",
    WISHLIST: "shivon_wishlist_v1",
    ORDERS: "shivon_orders_v1",
    SELLERS: "shivon_sellers_v1",
    SETTINGS: "shivon_settings_v1",
    USER: "shivon_user_v1",
    THEME: "shivon_theme_v1",
    LANG: "shivon_lang_v1"
  },

  defaultSettings: {
    storeName_hi: "शिवोन कृषि स्टोर",
    storeName_en: "Shivon Krishi Store",
    tagline_hi: "भारत का विश्वसनीय जैविक एवं कृषि ऑनलाइन स्टोर",
    tagline_en: "India's Trusted Organic & Agriculture Online Store",
    whatsappNumber: "919876543210",
    supportEmail: "support@shivonkrishi.com",
    upiId: "shivonkrishi@upi",
    codEnabled: true,
    freeShippingThreshold: 999,
    surfaceShippingBaseRate: 70,
    expressShippingBaseRate: 110,
    sellerCommissionPct: 5,
    gstNumber: "पैन आधारित (GST आवेदन प्रक्रियाधीन)"
  },

  init() {
    // Sync products if version changed or empty
    if (!localStorage.getItem(this.KEYS.PRODUCTS)) {
      if (typeof INITIAL_PRODUCTS !== "undefined") {
        localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
      }
    }
    if (!localStorage.getItem(this.KEYS.SETTINGS)) {
      localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(this.defaultSettings));
    }
    if (!localStorage.getItem(this.KEYS.LANG)) {
      localStorage.setItem(this.KEYS.LANG, "hi"); // Default to Hindi
    }
    if (!localStorage.getItem(this.KEYS.ORDERS)) {
      const demoOrders = [
        {
          orderId: "SKO-89241",
          date: new Date(Date.now() - 3600000 * 24).toISOString(),
          customer: {
            name: "राजेश कुमार सिंह",
            phone: "9876543210",
            address: "ग्राम: रामपुर, पोस्ट: कल्याणपुर, जिला: वाराणसी",
            state: "उत्तर प्रदेश",
            pincode: "221002"
          },
          items: [
            {
              id: "SK-FERT-001",
              name: "100% शुद्ध केंचुआ खाद (Pure Organic Vermicompost)",
              variant: "5 Kg Bag",
              price: 199,
              quantity: 2,
              image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200&auto=format&fit=crop&q=80"
            },
            {
              id: "SK-BAMB-001",
              name: "भीमा बांस टिशू कल्चर पौधा (Bhima Bamboo)",
              variant: "1 Healthy Live TC Sapling",
              price: 149,
              quantity: 2,
              image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200&auto=format&fit=crop&q=80"
            }
          ],
          totalAmount: 696,
          paymentMethod: "COD (Cash on Delivery)",
          paymentStatus: "Pending COD Collection",
          shippingMethod: "Shiprocket Express Care",
          trackingNumber: "SR-EXP-9823101",
          orderStatus: "Shipped"
        }
      ];
      localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(demoOrders));
    }
    if (!localStorage.getItem(this.KEYS.SELLERS)) {
      const demoSellers = [
        {
          sellerId: "SEL-101",
          shopName: "किसान कल्याण जैविक खाद केंद्र",
          ownerName: "रामभरोसे मौर्या",
          phone: "9839012345",
          email: "kisan.kalyan@gmail.com",
          state: "मध्य प्रदेश",
          city: "इंदौर",
          pincode: "452001",
          productsOffered: "देसी केंचुआ खाद, वर्मीवाश, नीम खाद",
          bankAccount: "SBI A/C: 30981234567",
          status: "Approved",
          appliedDate: new Date(Date.now() - 3600000 * 72).toISOString(),
          totalSales: 24500,
          commissionEarned: 1225
        },
        {
          sellerId: "SEL-102",
          shopName: "हरित क्रांति बांस व नर्सरी फार्म",
          ownerName: "सत्यम पटेल",
          phone: "9712033445",
          email: "harit.bamboo@gmail.com",
          state: "गुजरात",
          city: "आनंद",
          pincode: "388001",
          productsOffered: "भीमा बांस, गोल्डन बांस, ग्राफ्टेड अमरूद व नींबू पौधे",
          bankAccount: "HDFC A/C: 5010098231",
          status: "Approved",
          appliedDate: new Date(Date.now() - 3600000 * 12).toISOString(),
          totalSales: 18000,
          commissionEarned: 900
        }
      ];
      localStorage.setItem(this.KEYS.SELLERS, JSON.stringify(demoSellers));
    }
  },

  // Language Management (Hindi / English)
  getLanguage() {
    return localStorage.getItem(this.KEYS.LANG) || "hi";
  },

  setLanguage(lang) {
    localStorage.setItem(this.KEYS.LANG, lang);
    window.dispatchEvent(new CustomEvent("shivon_lang_changed", { detail: lang }));
  },

  // Products
  getProducts() {
    this.init();
    try {
      let list = JSON.parse(localStorage.getItem(this.KEYS.PRODUCTS)) || INITIAL_PRODUCTS;
      if (Array.isArray(list)) {
        list = list.map(item => {
          if (!item.image || item.image.includes("unsplash.com") || item.image.includes("photo-1615485290382")) {
            const master = (typeof INITIAL_PRODUCTS !== "undefined") ? INITIAL_PRODUCTS.find(p => p.id === item.id) : null;
            if (master && master.image) {
              item.image = master.image;
            }
          }
          return item;
        });
      }
      return list;
    } catch (e) {
      return INITIAL_PRODUCTS || [];
    }
  },

  saveProducts(products) {
    localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent("shivon_products_changed", { detail: products }));
  },

  getProductById(id) {
    const list = this.getProducts();
    return list.find(p => p.id === id);
  },

  // Cart
  getCart() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.CART)) || [];
    } catch (e) {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(this.KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("shivon_cart_changed", { detail: cart }));
  },

  addToCart(product, variantId, qty = 1) {
    const cart = this.getCart();
    const lang = this.getLanguage();
    const variant = product.variants.find(v => v.id === variantId) || product.variants[0];
    const existingIndex = cart.findIndex(item => item.productId === product.id && item.variantId === variant.id);

    const productName = getField(product, "name", lang);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        productId: product.id,
        variantId: variant.id,
        name: productName,
        name_hi: product.name_hi,
        name_en: product.name_en,
        variantLabel: variant.label,
        weight: variant.weight,
        price: variant.price,
        mrp: variant.mrp,
        image: product.image,
        isLivePlant: product.isLivePlant,
        shippingType: product.shippingType,
        quantity: qty
      });
    }
    this.saveCart(cart);
  },

  updateCartQty(productId, variantId, newQty) {
    let cart = this.getCart();
    if (newQty <= 0) {
      cart = cart.filter(item => !(item.productId === productId && item.variantId === variantId));
    } else {
      const item = cart.find(item => item.productId === productId && item.variantId === variantId);
      if (item) item.quantity = newQty;
    }
    this.saveCart(cart);
  },

  clearCart() {
    this.saveCart([]);
  },

  // Wishlist
  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.WISHLIST)) || [];
    } catch (e) {
      return [];
    }
  },

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent("shivon_wishlist_changed", { detail: wishlist }));
    return wishlist.includes(productId);
  },

  isWishlisted(productId) {
    return this.getWishlist().includes(productId);
  },

  // Orders
  getOrders() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.ORDERS)) || [];
    } catch (e) {
      return [];
    }
  },

  saveOrder(order) {
    const orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent("shivon_orders_changed", { detail: orders }));
    return order;
  },

  updateOrderStatus(orderId, newStatus) {
    const orders = this.getOrders();
    const order = orders.find(o => o.orderId === orderId);
    if (order) {
      order.orderStatus = newStatus;
      localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
      window.dispatchEvent(new CustomEvent("shivon_orders_changed", { detail: orders }));
      return true;
    }
    return false;
  },

  // Sellers
  getSellers() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.SELLERS)) || [];
    } catch (e) {
      return [];
    }
  },

  addSellerApplication(sellerData) {
    const sellers = this.getSellers();
    const newSeller = {
      sellerId: "SEL-" + Math.floor(100 + Math.random() * 900),
      appliedDate: new Date().toISOString(),
      status: "Pending",
      totalSales: 0,
      commissionEarned: 0,
      ...sellerData
    };
    sellers.unshift(newSeller);
    localStorage.setItem(this.KEYS.SELLERS, JSON.stringify(sellers));
    window.dispatchEvent(new CustomEvent("shivon_sellers_changed", { detail: sellers }));
    return newSeller;
  },

  updateSellerStatus(sellerId, newStatus) {
    const sellers = this.getSellers();
    const seller = sellers.find(s => s.sellerId === sellerId);
    if (seller) {
      seller.status = newStatus;
      localStorage.setItem(this.KEYS.SELLERS, JSON.stringify(sellers));
      window.dispatchEvent(new CustomEvent("shivon_sellers_changed", { detail: sellers }));
      return true;
    }
    return false;
  },

  // Settings
  getSettings() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.SETTINGS)) || this.defaultSettings;
    } catch (e) {
      return this.defaultSettings;
    }
  },

  saveSettings(newSettings) {
    const settings = { ...this.getSettings(), ...newSettings };
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent("shivon_settings_changed", { detail: settings }));
  },

  // Theme
  getTheme() {
    return localStorage.getItem(this.KEYS.THEME) || "light";
  },

  setTheme(theme) {
    localStorage.setItem(this.KEYS.THEME, theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.dispatchEvent(new CustomEvent("shivon_theme_changed", { detail: theme }));
  }
};

StoreStorage.init();

if (typeof window !== "undefined") {
  window.StoreStorage = StoreStorage;
}
