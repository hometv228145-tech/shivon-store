/**
 * Shivon Krishi Store - Cart, Checkout & Logistics Engine
 * Powered by Shiprocket surface & express delivery logic
 */

const CartManager = {
  activeCoupon: null,
  validCoupons: {
    "KISAAN10": { type: "percent", value: 10, label: "किसान स्पेशल (10% छूट)" },
    "SHIVON50": { type: "flat", value: 50, label: "वेलकम डिस्काउंट (₹50 छूट)" },
    "ORGANIC20": { type: "percent", value: 20, label: "ऑर्गेनिक महाबचत (20% छूट)" }
  },

  init() {
    this.renderCartUI();
    this.bindEvents();
    window.addEventListener("shivon_cart_changed", () => {
      this.renderCartUI();
    });
  },

  bindEvents() {
    // Drawer open/close buttons
    const cartToggleBtns = document.querySelectorAll("[data-cart-toggle]");
    cartToggleBtns.forEach(btn => {
      btn.addEventListener("click", () => this.toggleDrawer());
    });

    const backdrop = document.getElementById("cart-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", () => this.closeDrawer());
    }

    const closeBtn = document.getElementById("cart-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeDrawer());
    }
  },

  toggleDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      drawer.classList.toggle("active");
      backdrop.classList.toggle("active");
    }
  },

  openDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      drawer.classList.add("active");
      backdrop.classList.add("active");
    }
  },

  closeDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    if (drawer && backdrop) {
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
    }
  },

  calculateTotals() {
    const cart = StoreStorage.getCart();
    const settings = StoreStorage.getSettings();

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const mrpTotal = cart.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
    const totalSavings = mrpTotal - subtotal;

    // Check shipping requirements
    const hasLivePlant = cart.some(item => item.isLivePlant);
    const hasHeavyCargo = cart.some(item => item.shippingType === "surface");

    let shippingFee = 0;
    let shippingMethod = "मानक डिलीवरी (Standard Pan-India)";

    if (cart.length > 0) {
      if (subtotal >= settings.freeShippingThreshold && !hasLivePlant) {
        shippingFee = 0;
        shippingMethod = "मुफ्त शिपिंग (Free Pan-India Delivery)";
      } else if (hasLivePlant) {
        // Live plants require Express Transit with ventilation & hydration care
        shippingFee = settings.expressShippingBaseRate;
        shippingMethod = "Shiprocket Express Plant Care (सुरक्षित लाइव पार्सल)";
      } else if (hasHeavyCargo) {
        shippingFee = settings.surfaceShippingBaseRate;
        shippingMethod = "Shiprocket Surface Cargo (भारी बोरी सुरक्षित डिलीवरी)";
      } else {
        shippingFee = 50;
      }
    }

    // Coupon discount
    let couponDiscount = 0;
    if (this.activeCoupon && cart.length > 0) {
      const coupon = this.validCoupons[this.activeCoupon];
      if (coupon.type === "percent") {
        couponDiscount = Math.round((subtotal * coupon.value) / 100);
      } else {
        couponDiscount = Math.min(coupon.value, subtotal);
      }
    }

    const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee);

    return {
      subtotal,
      mrpTotal,
      totalSavings,
      shippingFee,
      shippingMethod,
      couponDiscount,
      finalTotal,
      itemsCount: cart.reduce((sum, item) => sum + item.quantity, 0),
      hasLivePlant,
      freeShippingProgress: Math.min(100, Math.round((subtotal / settings.freeShippingThreshold) * 100)),
      amountNeededForFreeShipping: Math.max(0, settings.freeShippingThreshold - subtotal)
    };
  },

  renderCartUI() {
    const cart = StoreStorage.getCart();
    const totals = this.calculateTotals();

    // Update header badges
    const badgeElements = document.querySelectorAll(".cart-count-badge");
    badgeElements.forEach(badge => {
      badge.textContent = totals.itemsCount;
      badge.style.display = totals.itemsCount > 0 ? "inline-flex" : "none";
    });

    const container = document.getElementById("cart-items-container");
    const emptyState = document.getElementById("cart-empty-state");
    const footer = document.getElementById("cart-footer");

    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      if (footer) footer.classList.add("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");
    if (footer) footer.classList.remove("hidden");

    // Free shipping banner
    const progressFill = document.getElementById("free-shipping-progress");
    const progressText = document.getElementById("free-shipping-text");
    if (progressFill && progressText) {
      progressFill.style.width = `${totals.freeShippingProgress}%`;
      if (totals.hasLivePlant) {
        progressText.innerHTML = `<span class="text-blue-600 dark:text-blue-400 font-semibold">🌱 लाइव पौधे:</span> सुरक्षित एयर-एक्सप्रेस पैकेजिंग अनिवार्य है।`;
      } else if (totals.amountNeededForFreeShipping === 0) {
        progressText.innerHTML = `<span class="text-green-600 dark:text-green-400 font-bold">🎉 बधाई हो!</span> आपको इस ऑर्डर पर <b>मुफ्त डिलीवरी</b> मिल रही है।`;
      } else {
        progressText.innerHTML = `मुफ्त डिलीवरी के लिए <b>₹${totals.amountNeededForFreeShipping}</b> की और खरीदारी करें!`;
      }
    }

    // Render items
    container.innerHTML = cart.map(item => `
      <div class="flex gap-3 py-3 border-b border-gray-200 dark:border-gray-800">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg border border-gray-200 dark:border-gray-700 shrink-0" onerror="this.onerror=null; this.src='assets/products/mango.jpg';">
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white truncate">${item.name}</h4>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded font-medium">${item.variantLabel}</span>
            ${item.isLivePlant ? `<span class="text-xs text-blue-600 dark:text-blue-400 font-semibold">🌱 लाइव प्लांट</span>` : ''}
          </div>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-bold text-gray-900 dark:text-white">₹${item.price}</span>
              <span class="text-xs text-gray-400 line-through">₹${item.mrp}</span>
            </div>
            <div class="flex items-center border border-gray-300 dark:border-gray-700 rounded-md">
              <button onclick="CartManager.changeQty('${item.productId}', '${item.variantId}', ${item.quantity - 1})" class="px-2 py-0.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold">-</button>
              <span class="px-2 text-xs font-bold text-gray-900 dark:text-white">${item.quantity}</span>
              <button onclick="CartManager.changeQty('${item.productId}', '${item.variantId}', ${item.quantity + 1})" class="px-2 py-0.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold">+</button>
            </div>
          </div>
        </div>
        <button onclick="CartManager.removeItem('${item.productId}', '${item.variantId}')" class="text-gray-400 hover:text-red-500 self-start p-1" title="हटाएं">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    `).join("");

    // Update Totals display
    const subtotalEl = document.getElementById("cart-subtotal");
    const shippingEl = document.getElementById("cart-shipping");
    const discountEl = document.getElementById("cart-discount");
    const discountRow = document.getElementById("cart-discount-row");
    const totalEl = document.getElementById("cart-final-total");
    const savingsEl = document.getElementById("cart-total-savings");

    if (subtotalEl) subtotalEl.textContent = `₹${totals.subtotal}`;
    if (shippingEl) {
      shippingEl.innerHTML = totals.shippingFee === 0 
        ? `<span class="text-emerald-600 dark:text-emerald-400 font-bold">FREE</span>`
        : `₹${totals.shippingFee}`;
    }
    if (discountEl && discountRow) {
      if (totals.couponDiscount > 0) {
        discountRow.classList.remove("hidden");
        discountEl.textContent = `-₹${totals.couponDiscount}`;
      } else {
        discountRow.classList.add("hidden");
      }
    }
    if (totalEl) totalEl.textContent = `₹${totals.finalTotal}`;
    if (savingsEl) savingsEl.textContent = `₹${totals.totalSavings + totals.couponDiscount}`;
  },

  changeQty(productId, variantId, newQty) {
    StoreStorage.updateCartQty(productId, variantId, newQty);
  },

  removeItem(productId, variantId) {
    StoreStorage.updateCartQty(productId, variantId, 0);
  },

  applyCoupon() {
    const input = document.getElementById("coupon-code-input");
    const msgEl = document.getElementById("coupon-message");
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    if (this.validCoupons[code]) {
      this.activeCoupon = code;
      if (msgEl) {
        msgEl.className = "text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-semibold";
        msgEl.textContent = `✓ कूपन लागू: ${this.validCoupons[code].label}`;
      }
      this.renderCartUI();
    } else {
      if (msgEl) {
        msgEl.className = "text-xs text-red-500 mt-1 font-medium";
        msgEl.textContent = "अमान्य कूपन कोड। कृपया 'KISAAN10' या 'SHIVON50' आज़माएं।";
      }
    }
  },

  // Checkout Modal
  openCheckout() {
    const cart = StoreStorage.getCart();
    if (cart.length === 0) {
      alert("आपकी कार्ट खाली है! कृपया पहले प्रोडक्ट जोड़ें।");
      return;
    }
    this.closeDrawer();
    const modal = document.getElementById("checkout-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      this.renderCheckoutSummary();
    }
  },

  closeCheckout() {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  },

  renderCheckoutSummary() {
    const totals = this.calculateTotals();
    const summaryContainer = document.getElementById("checkout-order-summary");
    if (summaryContainer) {
      summaryContainer.innerHTML = `
        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <div class="flex justify-between">
            <span>सामान की कुल कीमत (${totals.itemsCount} आइटम्स):</span>
            <span class="font-semibold">₹${totals.subtotal}</span>
          </div>
          <div class="flex justify-between">
            <span>शिपिंग (${totals.shippingMethod}):</span>
            <span class="font-semibold">${totals.shippingFee === 0 ? '<span class="text-emerald-600 font-bold">मुफ्त</span>' : '₹' + totals.shippingFee}</span>
          </div>
          ${totals.couponDiscount > 0 ? `
            <div class="flex justify-between text-emerald-600 font-semibold">
              <span>कूपन छूट (${CartManager.activeCoupon}):</span>
              <span>-₹${totals.couponDiscount}</span>
            </div>
          ` : ''}
          <div class="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between text-base font-bold text-gray-900 dark:text-white">
            <span>कुल देय राशि (Final Amount):</span>
            <span class="text-emerald-600 dark:text-emerald-400">₹${totals.finalTotal}</span>
          </div>
        </div>
      `;
    }
  },

  // Place Order Simulation
  handleOrderSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("customer_name");
    const phone = formData.get("customer_phone");
    const address = formData.get("customer_address");
    const city = formData.get("customer_city");
    const state = formData.get("customer_state");
    const pincode = formData.get("customer_pincode");
    const paymentMethod = formData.get("payment_method");

    if (!name || !phone || !address || !pincode) {
      alert("कृपया नाम, मोबाइल नंबर, पूरा पता और पिनकोड भरें!");
      return;
    }

    const cart = StoreStorage.getCart();
    const totals = this.calculateTotals();
    const settings = StoreStorage.getSettings();

    const orderId = "SKO-" + Math.floor(10000 + Math.random() * 90000);
    const orderDate = new Date().toISOString();

    const newOrder = {
      orderId,
      date: orderDate,
      customer: {
        name,
        phone,
        address: `${address}, ${city}`,
        state,
        pincode
      },
      items: [...cart],
      totalAmount: totals.finalTotal,
      subtotal: totals.subtotal,
      shippingFee: totals.shippingFee,
      shippingMethod: totals.shippingMethod,
      trackingNumber: "SR-" + Math.floor(1000000 + Math.random() * 9000000),
      paymentMethod: paymentMethod === "cod" ? "Cash on Delivery (COD)" : "Online UPI (GPay/PhonePe)",
      paymentStatus: paymentMethod === "cod" ? "Pending (Cash on Delivery)" : "Paid via UPI",
      orderStatus: "Confirmed"
    };

    StoreStorage.saveOrder(newOrder);
    StoreStorage.clearCart();
    this.activeCoupon = null;

    this.closeCheckout();
    this.showOrderConfirmation(newOrder);
  },

  showOrderConfirmation(order) {
    const modal = document.getElementById("order-success-modal");
    if (!modal) return;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    const detailsEl = document.getElementById("order-success-details");
    const settings = StoreStorage.getSettings();

    // Create WhatsApp notification message url
    const itemsListText = order.items.map(i => `• ${i.name} (${i.variantLabel}) x ${i.quantity} = ₹${i.price * i.quantity}`).join("%0A");
    const whatsappMsg = `*नया ऑर्डर - Shivon Krishi Store*%0A%0A*ऑर्डर आईडी:* ${order.orderId}%0A*ग्राहक:* ${order.customer.name}%0A*मोबाइल:* ${order.customer.phone}%0A*पता:* ${order.customer.address}, ${order.customer.state} - ${order.customer.pincode}%0A%0A*आइटम्स:*%0A${itemsListText}%0A%0A*कुल राशि:* ₹${order.totalAmount}%0A*पेमेंट:* ${order.paymentMethod}%0A*लॉजिस्टिक्स:* ${order.shippingMethod}%0A%0Aकृपया ऑर्डर पैक कर शिप करें!`;
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=${whatsappMsg}`;

    if (detailsEl) {
      detailsEl.innerHTML = `
        <div class="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 text-left">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs uppercase font-bold text-emerald-800 dark:text-emerald-300">ऑर्डर कन्फर्म हो गया</span>
            <span class="text-sm font-extrabold text-gray-900 dark:text-white">${order.orderId}</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300">धन्यवाद <b>${order.customer.name} जी</b>! आपका ऑर्डर सफलतापूर्वक दर्ज कर लिया गया है।</p>
          <div class="mt-3 text-xs space-y-1 text-gray-600 dark:text-gray-400">
            <p>🚚 <b>लॉजिस्टिक्स:</b> ${order.shippingMethod}</p>
            <p>📦 <b>Shiprocket ट्रैकिंग नंबर:</b> ${order.trackingNumber}</p>
            <p>💳 <b>पेमेंट मोड:</b> ${order.paymentMethod}</p>
          </div>
        </div>

        <div class="mt-4 flex flex-col sm:flex-row gap-3">
          <a href="${whatsappUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg shadow text-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.35.49 1.199.534 1.286.044.087.073.189.015.305-.058.115-.088.188-.174.289-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.449.741.964 1.2 1.05.935 1.58.98 1.8.877.22-.102.348-.448.492-.65.144-.203.289-.174.492-.102.203.072 1.285.607 1.507.722.222.115.37.174.425.275.055.102.055.59-.089.995z"/></svg>
            WhatsApp पर स्लिप भेजें
          </a>
          <button onclick="CartManager.printInvoice('${order.orderId}')" class="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2.5 px-4 rounded-lg text-sm border border-gray-300 dark:border-gray-600">
            🖨️ इनवॉइस प्रिंट करें
          </button>
        </div>
      `;
    }
  },

  printInvoice(orderId) {
    const orders = StoreStorage.getOrders();
    const order = orders.find(o => o.orderId === orderId);
    const settings = StoreStorage.getSettings();
    if (!order) return;

    const printableEl = document.getElementById("printable-invoice");
    if (!printableEl) return;

    printableEl.innerHTML = `
      <div style="font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 24px; border: 1px solid #ccc;">
        <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #15803d; padding-bottom: 16px;">
          <div>
            <h1 style="color: #15803d; font-size: 26px; margin: 0;">${settings.storeName}</h1>
            <p style="color: #666; font-size: 13px; margin: 4px 0;">${settings.tagline}</p>
            <p style="font-size: 12px; margin: 2px 0;">GST / टैक्स स्टेटस: ${settings.gstNumber}</p>
            <p style="font-size: 12px; margin: 2px 0;">हेल्पलाइन: +${settings.whatsappNumber} | ${settings.supportEmail}</p>
          </div>
          <div style="text-align: right;">
            <h3 style="margin: 0; color: #333;">टैक्स इनवॉइस / बिल</h3>
            <p style="font-size: 14px; font-weight: bold; margin: 4px 0;">ऑर्डर ID: ${order.orderId}</p>
            <p style="font-size: 12px; color: #666; margin: 2px 0;">तारीख: ${new Date(order.date).toLocaleDateString('hi-IN')}</p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; margin: 20px 0; font-size: 13px;">
          <div>
            <h4 style="margin: 0 0 6px 0; color: #15803d;">बिल किसके नाम (Customer Details):</h4>
            <p style="margin: 2px 0; font-weight: bold;">${order.customer.name}</p>
            <p style="margin: 2px 0;">${order.customer.address}</p>
            <p style="margin: 2px 0;">राज्य: ${order.customer.state} - ${order.customer.pincode}</p>
            <p style="margin: 2px 0;">मोबाइल: ${order.customer.phone}</p>
          </div>
          <div style="text-align: right;">
            <h4 style="margin: 0 0 6px 0; color: #15803d;">शिपिंग विवरण (Logistics):</h4>
            <p style="margin: 2px 0;">कूरियर पार्टनर: ${order.shippingMethod}</p>
            <p style="margin: 2px 0; font-weight: bold;">Shiprocket AWB: ${order.trackingNumber}</p>
            <p style="margin: 2px 0;">भुगतान विधि: ${order.paymentMethod}</p>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
          <thead>
            <tr style="background-color: #f1f8f4; border-bottom: 2px solid #15803d; text-align: left;">
              <th style="padding: 8px; border: 1px solid #ddd;">क्र.</th>
              <th style="padding: 8px; border: 1px solid #ddd;">आइटम विवरण</th>
              <th style="padding: 8px; border: 1px solid #ddd;">पैक/वैरिएंट</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">मात्रा</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">दर (₹)</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">कुल (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${order.items.map((item, idx) => `
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${idx + 1}</td>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: 600;">${item.name}</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${item.variantLabel}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${item.price}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: right; font-weight: bold;">₹${item.price * item.quantity}</td>
              </tr>
            `).join("")}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" style="padding: 8px; text-align: right; font-weight: bold; border: 1px solid #ddd;">उप-योग (Subtotal):</td>
              <td style="padding: 8px; text-align: right; font-weight: bold; border: 1px solid #ddd;">₹${order.subtotal || order.totalAmount}</td>
            </tr>
            <tr>
              <td colspan="5" style="padding: 8px; text-align: right; font-weight: bold; border: 1px solid #ddd;">शिपिंग व पैकेजिंग शुल्क:</td>
              <td style="padding: 8px; text-align: right; font-weight: bold; border: 1px solid #ddd;">${order.shippingFee === 0 ? 'मुफ्त (FREE)' : '₹' + order.shippingFee}</td>
            </tr>
            <tr style="background-color: #f1f8f4;">
              <td colspan="5" style="padding: 10px; text-align: right; font-weight: bold; font-size: 15px; border: 1px solid #ddd;">कुल देय राशि (Grand Total):</td>
              <td style="padding: 10px; text-align: right; font-weight: bold; font-size: 16px; color: #15803d; border: 1px solid #ddd;">₹${order.totalAmount}</td>
            </tr>
          </tfoot>
        </table>

        <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 12px; display: flex; justify-content: space-between; font-size: 11px; color: #777;">
          <div>
            <p>* यह कंप्यूटर जनरेटेड इनवॉइस है, हस्ताक्षर की आवश्यकता नहीं है।</p>
            <p>* जीवित पौधों की देखभाल: पार्सल खोलकर तुरंत 200ml पानी दें और 2 दिन छांव में रखें।</p>
          </div>
          <div style="text-align: right;">
            <p>अधिकृत हस्ताक्षरकर्ता (Authorized Signatory)</p>
            <p style="font-weight: bold; color: #15803d; margin-top: 18px;">Shivon Krishi Store</p>
          </div>
        </div>
      </div>
    `;

    window.print();
  }
};

if (typeof window !== "undefined") {
  window.CartManager = CartManager;
}
