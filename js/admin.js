/**
 * Shivon Krishi Store - Master Admin & Operations Management
 * Controls Orders, Product Inventory, Seller Approvals & Store Settings
 */

const AdminApp = {
  currentTab: "orders",

  init() {
    this.initTheme();
    this.renderStats();
    this.renderOrders();
    this.renderProducts();
    this.renderSellers();
    this.loadSettings();
    this.bindEvents();

    window.addEventListener("shivon_orders_changed", () => {
      this.renderStats();
      this.renderOrders();
    });
    window.addEventListener("shivon_products_changed", () => {
      this.renderStats();
      this.renderProducts();
    });
    window.addEventListener("shivon_sellers_changed", () => {
      this.renderStats();
      this.renderSellers();
    });
  },

  initTheme() {
    const savedTheme = StoreStorage.getTheme();
    StoreStorage.setTheme(savedTheme);
  },

  bindEvents() {
    // Navigation Tabs
    document.querySelectorAll("[data-admin-tab]").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const target = e.currentTarget.getAttribute("data-admin-tab");
        this.switchTab(target);
      });
    });

    // Theme toggle
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const next = StoreStorage.getTheme() === "dark" ? "light" : "dark";
        StoreStorage.setTheme(next);
      });
    });
  },

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll("[data-admin-tab]").forEach(tab => {
      if (tab.getAttribute("data-admin-tab") === tabId) {
        tab.className = "px-4 py-2 text-sm font-bold border-b-2 border-emerald-600 text-emerald-600 dark:text-emerald-400";
      } else {
        tab.className = "px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300";
      }
    });

    document.querySelectorAll(".admin-section-view").forEach(sec => sec.classList.add("hidden"));
    const activeSec = document.getElementById(`section-${tabId}`);
    if (activeSec) activeSec.classList.remove("hidden");
  },

  renderStats() {
    const orders = StoreStorage.getOrders();
    const products = StoreStorage.getProducts();
    const sellers = StoreStorage.getSellers();

    const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    const approvedSellers = sellers.filter(s => s.status === "Approved");
    const totalCommission = sellers.reduce((sum, s) => sum + (s.commissionEarned || 0), 0);

    const revEl = document.getElementById("stat-total-revenue");
    const ordersEl = document.getElementById("stat-total-orders");
    const prodEl = document.getElementById("stat-total-products");
    const sellersEl = document.getElementById("stat-total-sellers");
    const commEl = document.getElementById("stat-total-commission");

    if (revEl) revEl.textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
    if (ordersEl) ordersEl.textContent = orders.length;
    if (prodEl) prodEl.textContent = products.length;
    if (sellersEl) sellersEl.textContent = `${approvedSellers.length} / ${sellers.length}`;
    if (commEl) commEl.textContent = `₹${totalCommission.toLocaleString('en-IN')}`;
  },

  renderOrders() {
    const orders = StoreStorage.getOrders();
    const container = document.getElementById("admin-orders-table-body");
    if (!container) return;

    if (orders.length === 0) {
      container.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-gray-400">कोई ऑर्डर नहीं मिला।</td></tr>`;
      return;
    }

    container.innerHTML = orders.map(order => {
      const statusColors = {
        "Confirmed": "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200",
        "Packed": "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200",
        "Shipped": "bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200",
        "Delivered": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200",
        "Cancelled": "bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200"
      };

      const itemsSummary = order.items.map(i => `${i.name} (${i.variantLabel || ''}) x${i.quantity}`).join(", ");
      const customerMsg = `नमस्ते ${order.customer.name} जी, आपके Shivon Krishi Store ऑर्डर (${order.orderId}) की ट्रैकिंग अपडेट: आपका पार्सल ${order.shippingMethod} द्वारा भेजा जा रहा है। Shiprocket ट्रैकिंग AWB: ${order.trackingNumber}`;
      const whatsappLink = `https://wa.me/91${order.customer.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(customerMsg)}`;

      return `
        <tr class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40 text-xs">
          <td class="py-3 px-3 font-bold text-gray-900 dark:text-white">
            ${order.orderId}
            <div class="text-[10px] text-gray-400 font-normal">${new Date(order.date).toLocaleDateString('hi-IN')}</div>
          </td>
          <td class="py-3 px-3">
            <div class="font-bold text-gray-800 dark:text-gray-200">${order.customer.name}</div>
            <div class="text-[11px] text-gray-500">${order.customer.phone}</div>
            <div class="text-[10px] text-gray-400 truncate max-w-[180px]" title="${order.customer.address}">${order.customer.address}, ${order.customer.state}</div>
          </td>
          <td class="py-3 px-3">
            <div class="max-w-[200px] truncate font-medium text-gray-700 dark:text-gray-300" title="${itemsSummary}">${itemsSummary}</div>
            <div class="text-[10px] text-emerald-600 font-bold">${order.items.length} आइटम्स</div>
          </td>
          <td class="py-3 px-3 font-bold text-gray-900 dark:text-white">
            ₹${order.totalAmount}
            <div class="text-[10px] text-gray-400 font-normal">${order.paymentMethod}</div>
          </td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full font-bold text-[10px] ${statusColors[order.orderStatus] || 'bg-gray-100'}">
              ${order.orderStatus}
            </span>
            <div class="text-[10px] text-gray-400 mt-1 font-mono">${order.trackingNumber}</div>
          </td>
          <td class="py-3 px-3">
            <select onchange="AdminApp.changeOrderStatus('${order.orderId}', this.value)" class="text-xs bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-1 text-gray-700 dark:text-gray-300">
              <option value="Confirmed" ${order.orderStatus === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
              <option value="Packed" ${order.orderStatus === 'Packed' ? 'selected' : ''}>Packed</option>
              <option value="Shipped" ${order.orderStatus === 'Shipped' ? 'selected' : ''}>Shipped (Shiprocket)</option>
              <option value="Delivered" ${order.orderStatus === 'Delivered' ? 'selected' : ''}>Delivered</option>
              <option value="Cancelled" ${order.orderStatus === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
            </select>
          </td>
          <td class="py-3 px-3 space-x-1 whitespace-nowrap">
            <a href="${whatsappLink}" target="_blank" class="inline-block p-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded" title="कस्टमर को WhatsApp भेजें">
              💬
            </a>
            <button onclick="CartManager.printInvoice('${order.orderId}')" class="p-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded" title="इनवॉइस प्रिंट">
              🖨️
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  changeOrderStatus(orderId, newStatus) {
    StoreStorage.updateOrderStatus(orderId, newStatus);
    alert(`ऑर्डर ${orderId} का स्टेटस बदलकर '${newStatus}' कर दिया गया!`);
  },

  renderProducts() {
    const products = StoreStorage.getProducts();
    const container = document.getElementById("admin-products-table-body");
    if (!container) return;

    container.innerHTML = products.map(product => {
      const defaultVariant = product.variants[0];
      return `
        <tr class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40 text-xs">
          <td class="py-2.5 px-3">
            <img src="${product.image}" class="w-10 h-10 object-cover rounded-lg border border-gray-200 dark:border-gray-700" onerror="this.onerror=null; this.src='assets/products/mango.jpg';">
          </td>
          <td class="py-2.5 px-3">
            <div class="font-bold text-gray-900 dark:text-white">${product.name}</div>
            <div class="text-[10px] text-gray-400">ID: ${product.id} | ${product.categoryLabel}</div>
          </td>
          <td class="py-2.5 px-3">
            <div class="flex flex-wrap gap-1">
              ${product.variants.map(v => `<span class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-[10px]">${v.label}: ₹${v.price}</span>`).join("")}
            </div>
          </td>
          <td class="py-2.5 px-3 font-bold text-emerald-600">
            ₹${defaultVariant.price}
            <span class="text-[10px] text-gray-400 font-normal line-through">₹${defaultVariant.mrp}</span>
          </td>
          <td class="py-2.5 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${product.isLivePlant ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}">
              ${product.isLivePlant ? 'लाइव प्लांट' : 'सामान्य/खाद'}
            </span>
          </td>
          <td class="py-2.5 px-3 text-right">
            <button onclick="AdminApp.deleteProduct('${product.id}')" class="text-red-500 hover:text-red-700 font-bold p-1" title="प्रोडक्ट हटाएं">
              हटाएं
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  deleteProduct(productId) {
    if (confirm("क्या आप वाकई इस उत्पाद को स्टोर से हटाना चाहते हैं?")) {
      let products = StoreStorage.getProducts();
      products = products.filter(p => p.id !== productId);
      StoreStorage.saveProducts(products);
    }
  },

  openAddProductModal() {
    const modal = document.getElementById("add-product-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  },

  closeAddProductModal() {
    const modal = document.getElementById("add-product-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  },

  selectedImageBase64: "",

  handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const nameLabel = document.getElementById("prod-file-name");
    if (nameLabel) nameLabel.textContent = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageBase64 = e.target.result;
      this.showImagePreview(this.selectedImageBase64);
      // Clear URL input if file is chosen
      const urlInput = document.getElementById("prod-image-url");
      if (urlInput) urlInput.value = "";
    };
    reader.readAsDataURL(file);
  },

  handleUrlInput(url) {
    if (url && url.startsWith("http")) {
      this.selectedImageBase64 = url;
      this.showImagePreview(url);
    }
  },

  showImagePreview(src) {
    const container = document.getElementById("prod-preview-container");
    const img = document.getElementById("prod-preview-img");
    if (container && img) {
      img.src = src;
      container.classList.remove("hidden");
      container.classList.add("flex");
    }
  },

  clearImagePreview() {
    this.selectedImageBase64 = "";
    const container = document.getElementById("prod-preview-container");
    const nameLabel = document.getElementById("prod-file-name");
    const urlInput = document.getElementById("prod-image-url");
    const filePicker = document.getElementById("prod-file-picker");

    if (container) {
      container.classList.add("hidden");
      container.classList.remove("flex");
    }
    if (nameLabel) nameLabel.textContent = "कोई फाइल नहीं चुनी गई";
    if (urlInput) urlInput.value = "";
    if (filePicker) filePicker.value = "";
  },

  handleAddProductSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);

    const name = fd.get("prod_name");
    const category = fd.get("prod_category");
    const categoryLabels = {
      bamboo: "बांस के पौधे (Bamboo)",
      fertilizers: "जैविक खाद एवं पोषण",
      neem: "नीम एवं जैविक कीटनाशक",
      plants: "लाइव नर्सरी पौधे",
      mulching: "मल्चिंग शीट व फार्म एसेंशियल्स",
      seeds: "उन्नत बीज एवं किट",
      tools: "कृषि उपकरण व सिंचाई"
    };

    // Use uploaded base64 file or URL, or default placeholder
    const image = this.selectedImageBase64 || fd.get("prod_image") || "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80";
    const shortDesc = fd.get("prod_short_desc");
    const price = Number(fd.get("prod_price"));
    const mrp = Number(fd.get("prod_mrp")) || Math.round(price * 1.4);
    const weight = fd.get("prod_weight") || "1 Pack";
    const isLivePlant = fd.get("prod_is_live_plant") === "on";

    const newProd = {
      id: "SK-CUSTOM-" + Math.floor(1000 + Math.random() * 9000),
      name_hi: name,
      name_en: name,
      category,
      categoryLabel_hi: categoryLabels[category] || "कृषि उत्पाद",
      categoryLabel_en: categoryLabels[category] || "Agri Product",
      badge_hi: "न्यू अराइवल",
      badge_en: "New Arrival",
      rating: 5.0,
      reviewCount: 1,
      shortDesc_hi: shortDesc,
      shortDesc_en: shortDesc,
      description_hi: shortDesc,
      description_en: shortDesc,
      specs_hi: {
        "श्रेणी": categoryLabels[category],
        "वजन/मात्रा": weight,
        "सर्टिफिकेशन": "Shivon Krishi Quality Assured"
      },
      isLivePlant,
      shippingType: isLivePlant ? "express" : "surface",
      image,
      variants: [
        { id: "v1", label: weight, weight, price, mrp, inStock: true }
      ],
      seller: { id: "s-shivon", name: "Shivon Krishi Store (Official)", verified: true }
    };

    const products = StoreStorage.getProducts();
    products.unshift(newProd);
    StoreStorage.saveProducts(products);

    form.reset();
    this.clearImagePreview();
    this.closeAddProductModal();
    alert("नया प्रोडक्ट सफलतापूर्वक स्टोर में जोड़ दिया गया!");
  },

  renderSellers() {
    const sellers = StoreStorage.getSellers();
    const container = document.getElementById("admin-sellers-table-body");
    if (!container) return;

    if (sellers.length === 0) {
      container.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-gray-400">कोई सेलर आवेदन नहीं है।</td></tr>`;
      return;
    }

    container.innerHTML = sellers.map(seller => {
      const isApproved = seller.status === "Approved";
      return `
        <tr class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40 text-xs">
          <td class="py-3 px-3">
            <div class="font-bold text-gray-900 dark:text-white">${seller.shopName}</div>
            <div class="text-[10px] text-gray-400">ID: ${seller.sellerId}</div>
          </td>
          <td class="py-3 px-3">
            <div class="font-medium">${seller.ownerName}</div>
            <div class="text-[11px] text-gray-500">${seller.phone}</div>
          </td>
          <td class="py-3 px-3 text-gray-600 dark:text-gray-300">
            ${seller.city}, ${seller.state} (${seller.pincode})
          </td>
          <td class="py-3 px-3">
            <div class="max-w-[200px] truncate text-gray-700 dark:text-gray-300" title="${seller.productsOffered}">
              ${seller.productsOffered}
            </div>
          </td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isApproved ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}">
              ${seller.status}
            </span>
          </td>
          <td class="py-3 px-3 font-mono font-bold text-emerald-600">
            ₹${seller.commissionEarned || 0} (5%)
          </td>
          <td class="py-3 px-3">
            ${isApproved ? `
              <button onclick="AdminApp.toggleSellerStatus('${seller.sellerId}', 'Suspended')" class="text-amber-600 hover:underline font-semibold">निलंबित करें</button>
            ` : `
              <button onclick="AdminApp.toggleSellerStatus('${seller.sellerId}', 'Approved')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-xs">अनुमोदित करें (Approve)</button>
            `}
          </td>
        </tr>
      `;
    }).join("");
  },

  toggleSellerStatus(sellerId, newStatus) {
    StoreStorage.updateSellerStatus(sellerId, newStatus);
    alert(`सेलर ${sellerId} को '${newStatus}' कर दिया गया!`);
  },

  loadSettings() {
    const s = StoreStorage.getSettings();
    const upiInput = document.getElementById("setting-upi-id");
    const waInput = document.getElementById("setting-whatsapp-num");
    const emailInput = document.getElementById("setting-email");
    const codToggle = document.getElementById("setting-cod-toggle");
    const freeShipInput = document.getElementById("setting-free-ship-val");
    const gstInput = document.getElementById("setting-gst-val");

    if (upiInput) upiInput.value = s.upiId;
    if (waInput) waInput.value = s.whatsappNumber;
    if (emailInput) emailInput.value = s.supportEmail;
    if (codToggle) codToggle.checked = s.codEnabled;
    if (freeShipInput) freeShipInput.value = s.freeShippingThreshold;
    if (gstInput) gstInput.value = s.gstNumber;
  },

  handleSettingsSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const updated = {
      upiId: fd.get("upi_id"),
      whatsappNumber: fd.get("whatsapp_number"),
      supportEmail: fd.get("support_email"),
      codEnabled: fd.get("cod_enabled") === "on",
      freeShippingThreshold: Number(fd.get("free_shipping_threshold")),
      gstNumber: fd.get("gst_number")
    };
    StoreStorage.saveSettings(updated);
    alert("स्टोर सेटिंग्स सफलतापूर्वक अपडेट हो गईं!");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  AdminApp.init();
});

if (typeof window !== "undefined") {
  window.AdminApp = AdminApp;
}
