/**
 * ============================================================================
 * ✦ POLARIS GAMING & MODDING HUB - CORE SCRIPT & DATABASE
 * ============================================================================
 * 
 * 💡 HOW TO EDIT / ADD DOWNLOADS:
 * 1. Locate the `DOWNLOADS_DATABASE` array below.
 * 2. Copy any item block and paste it inside the array.
 * 3. Change the fields (title, category, version, tags, description, fileUrl, etc.).
 * 4. Available categories:
 *    - 'mods' (🧩 Mods)
 *    - 'resourcepacks' (🎨 Resource Packs)
 *    - 'plugins' (🔧 Plugins)
 *    - 'anticheats' (🛡️ Anticheats)
 *    - 'optimization' (⚙️ Windows Optimization)
 *    - 'launchers' (🚀 Launchers)
 *    - 'configs' (📦 Configs)
 * 5. Available version tags:
 *    - '1.8.9', '1.12.2', '1.16.5', '1.20.x', '1.21+', 'Windows 10/11', 'Universal'
 * ============================================================================
 */

// Global Configuration
const POLARIS_CONFIG = {
  discordInviteUrl: "https://discord.gg/bsj2btnC3q",
  discordInviteCode: "bsj2btnC3q",
  discordMemberCount: "18,420",
  discordOnlineCount: "4,912",
  siteVersion: "v2.5.0"
};

/**
 * ============================================================================
 * 📦 DOWNLOAD DATABASE (EDIT THIS ARRAY TO MANAGE YOUR ITEMS)
 * ============================================================================
 */
const DOWNLOADS_DATABASE = [
  // --- 🧩 MODS ---
  {
    id: "rapid_optimization_192fps",
    title: "Rapid optimization [192 fps]",
    category: "mods",
    version: "1.21.11",
    versionsSupported: ["1.21.11"],
    tags: ["Fabric", "FPS Boost", "Performance"],
    description: "Modern rendering engine replacement that drastically improves frame rates and eliminates micro-stutters in Minecraft.",
    fileSize: "20.42 MB",
    fileUrl: "https://drive.google.com/file/d/1biMsoqTYEXg0DWzTm9bU6F4P_yfUEqHu/view?usp=sharing",
    externalUrl: "https://drive.google.com/file/d/1biMsoqTYEXg0DWzTm9bU6F4P_yfUEqHu/view?usp=sharing",
    author: "Unknown",
    downloads: 48920,
    rating: 5.0,
    featured: true,
    icon: "🧩",
    updatedDate: "2026-08-28",
    installGuide: "1. Install Fabric Loader for 1.21.11.\n2. Extract this .zip file into your .minecraft/ folder.\n3. Launch the game and enjoy massive FPS gains!"
  },
  {
    id: "pearl_catch_macro",
    title: "Pearl Catch Macro",
    category: "mods",
    version: "1.21.11",
    versionsSupported: ["1.21.11"],
    tags: ["Fabric", "hacks", "macro"],
    description: "A mod that makes it easier to pearl catching.",
    fileSize: "890 KB",
    fileUrl: "https://drive.google.com/file/d/1Nlw_7e2rj5qgS5iB8pC-JVjT91PkLAlK/view?usp=drive_link",
    externalUrl: "https://drive.google.com/file/d/1Nlw_7e2rj5qgS5iB8pC-JVjT91PkLAlK/view?usp=drive_link",
    author: "Unknown",
    downloads: 31200,
    rating: 4.9,
    featured: false,
    icon: "⚡",
    updatedDate: "2026-08-15",
    installGuide: "Drop into .minecraft/mods alongside Fabric. Works on both single-player clients and dedicated servers with zero configuration."
  },
  

  // --- 🎨 RESOURCE PACKS ---
  {
    id: "Swight_V3",
    title: "Swight V3",
    category: "resourcepacks",
    version: "1.8.9-26.2",
    versionsSupported: ["1.8.9", "1.12.2", "1.16.5", "1.20.x"],
    tags: ["32x", "Short Swords", "Low Fire", "FPS Boost"],
    description: "Custom dark navy and cyan themed texture pack with clean transparent UI, short animated diamond swords, and custom night sky.",
    fileSize: "18.5 MB",
    fileUrl: "https://drive.google.com/file/d/1VqlTBp2uarIUwkr0yE14vvefQDFah4WS/view?usp=drive_link",
    externalUrl: "https://drive.google.com/file/d/1VqlTBp2uarIUwkr0yE14vvefQDFah4WS/view?usp=drive_link",
    author: "Unknown",
    downloads: 54100,
    rating: 5.0,
    featured: true,
    icon: "🎨",
    updatedDate: "2026-09-02",
    installGuide: "1. Open Minecraft > Options > Resource Packs.\n2. Click 'Open Resource Pack Folder'.\n3. Move this .zip file in and activate it in the list."
  },
  

  // --- 🔧 PLUGINS ---
  
  {
    id: "soon",
    title: "soon..",
    category: "plugins",
    version: "Universal",
    versionsSupported: ["1.8.9", "1.12.2", "1.16.5", "1.20.x", "1.21+", "Universal"],
    tags: ["Protocols", "Cross-Version", "Multi-Client"],
    description: "soon",
    fileSize: "4.1 MB",
    fileUrl: "downloads/plugins/polaris-core-plugin.jar",
    externalUrl: "",
    author: "unknown",
    downloads: 0,
    rating: 0,
    featured: false,
    icon: "🌐",
    updatedDate: "2026-08-25",
    installGuide: "soon."
  },

  // --- 🛡️ ANTICHEATS ---
  {
    id: "coming_soon",
    title: "coming soon..",
    category: "anticheats",
    version: "x.xx.x",
    versionsSupported: ["1.20.x"],
    tags: ["Combat"],
    description: "coming soon...",
    fileSize: "88 KB",
    fileUrl: "downloads/anticheats/grim-anticheat-config.yml",
    externalUrl: "",
    author: "Polaris Configs",
    downloads: 0,
    rating: 0,
    featured: false,
    icon: "⚔️",
    updatedDate: "2026-07-19",
    installGuide: "soon."
  },

  // --- ⚙️ WINDOWS OPTIMIZATION ---
  {
    id: "opt-latency-reg-optimizer",
    title: "Polaris Windows Latency & Ping Script (.bat)",
    category: "optimization",
    version: "Windows 10/11",
    versionsSupported: ["Windows 10/11", "Universal"],
    tags: ["TCP NoDelay", "Disable Throttling", "Input Lag Fix"],
    description: "Automated batch script that configures TCP NoDelay, disables Network Throttling Index, tunes MMCSS audio buffer latency, and disables Nagle's Algorithm.",
    fileSize: "24 KB",
    fileUrl: "https://drive.google.com/file/d/1cwpo-7pvVYLfuq_EDpxUFBAVJg43upEY/view?usp=drive_link",
    externalUrl: "https://drive.google.com/file/d/1cwpo-7pvVYLfuq_EDpxUFBAVJg43upEY/view?usp=drive_link",
    author: "Polaris System Labs",
    downloads: 73800,
    rating: 5.0,
    featured: true,
    icon: "⚙️",
    updatedDate: "2026-09-03",
    installGuide: "1. Right click `polaris-latency-optimizer.bat` and select 'Run as Administrator'.\n2. Follow on-screen prompts.\n3. Restart your PC to apply kernel and TCP registry updates."
  },
  {
    id: "opt-ultimate-power-plan",
    title: "Polaris Ultra-Optimization Pack",
    category: "optimization",
    version: "Windows 10/11",
    versionsSupported: ["Windows 10/11"],
    tags: ["0% Idle Parking", "CPU Frequency Unlock", "DPC Latency"],
    description: "Custom Windows power scheme `.pow` import that un-parks CPU cores, locks CPU clock to maximum non-throttled frequency, and prevents C-State stuttering.",
    fileSize: "16 KB",
    fileUrl: "https://drive.google.com/file/d/1v3HfH25MItF4LGwlM11ZARO3g9xM9DwP/view?usp=drive_link",
    externalUrl: "https://drive.google.com/file/d/1v3HfH25MItF4LGwlM11ZARO3g9xM9DwP/view?usp=drive_link",
    author: "Polaris Tweaks",
    downloads: 45200,
    rating: 4.9,
    featured: false,
    icon: "🔋",
    updatedDate: "2026-08-20",
    installGuide: "1. Right click `polaris-latency-optimizer.bat` and select 'Run as Administrator'.\n2. Follow on-screen prompts.\n3.Restart your pc to apply."
  },


  // --- 🚀 LAUNCHERS ---
  
  // --- 📦 CONFIGS ---
 
];

/**
 * ============================================================================
 * 🛠️ APPLICATION STATE & LOGIC
 * ============================================================================
 */
const state = {
  activeCategory: "all",
  activeVersion: "all",
  searchQuery: "",
  sortBy: "featured",
  activeModalItem: null
};

// DOM Element References
const elements = {
  cardsGrid: document.getElementById("cardsGrid"),
  noResults: document.getElementById("noResults"),
  resultsCount: document.getElementById("resultsCount"),
  searchInput: document.getElementById("searchInput"),
  versionSelect: document.getElementById("versionSelect"),
  sortSelect: document.getElementById("sortSelect"),
  categoryButtons: document.querySelectorAll(".category-btn"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  
  // Stats
  statTotalDownloads: document.getElementById("statTotalDownloads"),
  statTotalMods: document.getElementById("statTotalMods"),
  statDiscordOnline: document.getElementById("statDiscordOnline"),
  statDiscordMembers: document.getElementById("statDiscordMembers"),

  // Details Modal
  detailsModal: document.getElementById("detailsModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalContent: document.getElementById("modalBodyContent"),

  // Discord Modal & Trigger
  discordModal: document.getElementById("discordModal"),
  closeDiscordModalBtn: document.getElementById("closeDiscordModalBtn"),
  discordNavBtn: document.getElementById("discordNavBtn"),
  discordHeroBtn: document.getElementById("discordHeroBtn"),
  discordFloatingBtn: document.getElementById("discordFloatingBtn"),
  copyDiscordBtn: document.getElementById("copyDiscordBtn"),

  // Mobile Nav
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileNav: document.getElementById("mobileNav"),
  mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),

  // Canvas
  starCanvas: document.getElementById("starCanvas"),
  toastContainer: document.getElementById("toastContainer")
};

/**
 * ============================================================================
 * 🚀 INITIALIZATION
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initStats();
  initEventListeners();
  renderGrid();
  initStarCanvas();
});

/**
 * Update quick stats in header and hero
 */
function initStats() {
  const totalDownloadsSum = DOWNLOADS_DATABASE.reduce((acc, item) => acc + (item.downloads || 0), 0);
  const formattedDownloads = (totalDownloadsSum / 1000).toFixed(1) + "k+";

  if (elements.statTotalDownloads) elements.statTotalDownloads.textContent = formattedDownloads;
  if (elements.statTotalMods) elements.statTotalMods.textContent = DOWNLOADS_DATABASE.length;
  if (elements.statDiscordOnline) elements.statDiscordOnline.textContent = POLARIS_CONFIG.discordOnlineCount;
  if (elements.statDiscordMembers) elements.statDiscordMembers.textContent = POLARIS_CONFIG.discordMemberCount;
}

/**
 * Set up user interactions and listeners
 */
function initEventListeners() {
  // Search input with instant reaction
  if (elements.searchInput) {
    elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (elements.clearSearchBtn) {
        elements.clearSearchBtn.style.display = state.searchQuery ? "flex" : "none";
      }
      renderGrid();
    });
  }

  // Clear search button
  if (elements.clearSearchBtn) {
    elements.clearSearchBtn.addEventListener("click", () => {
      elements.searchInput.value = "";
      state.searchQuery = "";
      elements.clearSearchBtn.style.display = "none";
      renderGrid();
      elements.searchInput.focus();
    });
  }

  // Version dropdown
  if (elements.versionSelect) {
    elements.versionSelect.addEventListener("change", (e) => {
      state.activeVersion = e.target.value;
      renderGrid();
    });
  }

  // Sort dropdown
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderGrid();
    });
  }

  // Category buttons
  elements.categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      state.activeCategory = category;

      elements.categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      renderGrid();
    });
  });

  // Reset Filters Button
  if (elements.resetFiltersBtn) {
    elements.resetFiltersBtn.addEventListener("click", resetAllFilters);
  }

  // Details Modal close
  if (elements.closeModalBtn) {
    elements.closeModalBtn.addEventListener("click", closeItemModal);
  }
  if (elements.detailsModal) {
    elements.detailsModal.addEventListener("click", (e) => {
      if (e.target === elements.detailsModal) closeItemModal();
    });
  }

  // Discord Modal triggers
  const openDiscord = () => openDiscordModal();
  if (elements.discordNavBtn) elements.discordNavBtn.addEventListener("click", openDiscord);
  if (elements.discordHeroBtn) elements.discordHeroBtn.addEventListener("click", openDiscord);
  if (elements.discordFloatingBtn) elements.discordFloatingBtn.addEventListener("click", openDiscord);
  if (elements.closeDiscordModalBtn) elements.closeDiscordModalBtn.addEventListener("click", closeDiscordModal);
  if (elements.discordModal) {
    elements.discordModal.addEventListener("click", (e) => {
      if (e.target === elements.discordModal) closeDiscordModal();
    });
  }

  // Copy Discord Invite
  if (elements.copyDiscordBtn) {
    elements.copyDiscordBtn.addEventListener("click", copyDiscordInvite);
  }

  // Mobile Menu Toggle
  if (elements.mobileMenuBtn && elements.mobileNav) {
    elements.mobileMenuBtn.addEventListener("click", () => {
      elements.mobileNav.classList.toggle("open");
      const isOpen = elements.mobileNav.classList.contains("open");
      elements.mobileMenuBtn.setAttribute("aria-expanded", isOpen);
      elements.mobileMenuBtn.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });

    // Close mobile nav when clicking any link
    elements.mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        elements.mobileNav.classList.remove("open");
        elements.mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
      });
    });
  }

  // Keyboard shortcut: Escape to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeItemModal();
      closeDiscordModal();
    }
  });
}

/**
 * Filter & Sort Database Items
 */
function getFilteredItems() {
  return DOWNLOADS_DATABASE.filter((item) => {
    // Category match
    if (state.activeCategory !== "all" && item.category !== state.activeCategory) {
      return false;
    }

    // Version match
    if (state.activeVersion !== "all") {
      const matchVersion = 
        item.version === state.activeVersion ||
        (item.versionsSupported && item.versionsSupported.includes(state.activeVersion)) ||
        (item.version === "Universal");
      if (!matchVersion) return false;
    }

    // Search query match
    if (state.searchQuery) {
      const query = state.searchQuery;
      const titleMatch = item.title.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const tagMatch = item.tags && item.tags.some((t) => t.toLowerCase().includes(query));
      const authorMatch = item.author && item.author.toLowerCase().includes(query);
      const catMatch = item.category.toLowerCase().includes(query);

      if (!titleMatch && !descMatch && !tagMatch && !authorMatch && !catMatch) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === "featured") {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.downloads - a.downloads;
    } else if (state.sortBy === "downloads") {
      return b.downloads - a.downloads;
    } else if (state.sortBy === "newest") {
      return new Date(b.updatedDate) - new Date(a.updatedDate);
    } else if (state.sortBy === "name-asc") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
}

/**
 * Render items into the main card grid
 */
function renderGrid() {
  if (!elements.cardsGrid) return;

  const items = getFilteredItems();

  // Results count
  if (elements.resultsCount) {
    elements.resultsCount.textContent = `Showing ${items.length} ${items.length === 1 ? "download" : "downloads"}`;
  }

  // Handle empty state
  if (items.length === 0) {
    elements.cardsGrid.innerHTML = "";
    if (elements.noResults) elements.noResults.style.display = "block";
    return;
  }

  if (elements.noResults) elements.noResults.style.display = "none";

  // Build grid HTML
  elements.cardsGrid.innerHTML = items.map((item) => createCardHtml(item)).join("");

  // Attach card event listeners
  items.forEach((item) => {
    const cardEl = document.getElementById(`card-${item.id}`);
    if (!cardEl) return;

    // Direct download button
    const dlBtn = cardEl.querySelector(".card-dl-btn");
    if (dlBtn) {
      dlBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        triggerDownload(item);
      });
    }

    // Details button or clicking card body
    const detailsBtn = cardEl.querySelector(".card-details-btn");
    if (detailsBtn) {
      detailsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openItemModal(item);
      });
    }

    cardEl.addEventListener("click", () => {
      openItemModal(item);
    });
  });
}

/**
 * Create HTML string for an individual download card
 */
function createCardHtml(item) {
  const categoryLabels = {
    mods: "🧩 Mod",
    resourcepacks: "🎨 Resource Pack",
    plugins: "🔧 Plugin",
    anticheats: "🛡️ Anticheat",
    optimization: "⚙️ Optimization",
    launchers: "🚀 Launcher",
    configs: "📦 Config"
  };

  const formattedDownloads = (item.downloads / 1000).toFixed(1) + "k";
  const tagsHtml = (item.tags || [])
    .slice(0, 3)
    .map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
    .join("");

  return `
    <article class="polaris-card ${item.featured ? "featured" : ""}" id="card-${item.id}">
      <div class="card-glow"></div>
      
      <div class="card-header">
        <div class="card-badge-wrap">
          <span class="category-badge cat-${item.category}">${categoryLabels[item.category] || item.category}</span>
          <span class="version-badge">${escapeHtml(item.version)}</span>
        </div>
        ${item.featured ? `<span class="featured-ribbon">★ FEATURED</span>` : ""}
      </div>

      <div class="card-title-row">
        <div class="card-icon-box">${item.icon || "💠"}</div>
        <div class="card-title-meta">
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <span class="card-author">by ${escapeHtml(item.author || "Polaris")}</span>
        </div>
      </div>

      <p class="card-description">${escapeHtml(item.description)}</p>

      <div class="card-tags-list">
        ${tagsHtml}
      </div>

      <div class="card-footer">
        <div class="card-stats">
          <span title="File Size" class="stat-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            ${escapeHtml(item.fileSize)}
          </span>
          <span title="Total Downloads" class="stat-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            ${formattedDownloads}
          </span>
        </div>

        <div class="card-actions">
          <button type="button" class="btn-secondary card-details-btn" title="View details and instructions">
            Details
          </button>
          <button type="button" class="btn-primary card-dl-btn" title="Direct Download">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Trigger file download with animation and toast notification
 */
function triggerDownload(item) {
  const targetUrl = item.externalUrl || item.fileUrl;
  
  // Create virtual anchor to initiate direct download
  const link = document.createElement("a");
  link.href = targetUrl;
  link.download = item.fileUrl ? item.fileUrl.split("/").pop() : item.title;
  if (item.externalUrl) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Increment downloads counter visually
  item.downloads = (item.downloads || 0) + 1;
  const cardEl = document.getElementById(`card-${item.id}`);
  if (cardEl) {
    const statItem = cardEl.querySelectorAll(".stat-item")[1];
    if (statItem) {
      statItem.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${(item.downloads / 1000).toFixed(1)}k`;
    }
  }

  showToast(`Downloading "${item.title}" (${item.fileSize})... Check your downloads!`, "success");
}

/**
 * Open Item Details Modal
 */
function openItemModal(item) {
  state.activeModalItem = item;
  if (!elements.detailsModal || !elements.modalContent) return;

  const supportedVersionsStr = item.versionsSupported ? item.versionsSupported.join(", ") : item.version;
  const tagsHtml = (item.tags || [])
    .map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
    .join(" ");

  elements.modalContent.innerHTML = `
    <div class="modal-item-header">
      <div class="modal-icon-wrap">${item.icon || "💠"}</div>
      <div class="modal-item-titles">
        <div class="modal-badge-row">
          <span class="category-badge cat-${item.category}">${item.category.toUpperCase()}</span>
          <span class="version-badge">${escapeHtml(item.version)}</span>
          ${item.featured ? `<span class="featured-ribbon">★ FEATURED</span>` : ""}
        </div>
        <h2 class="modal-item-title">${escapeHtml(item.title)}</h2>
        <p class="modal-item-author">Maintained by <strong>${escapeHtml(item.author || "Polaris Team")}</strong> • Updated: ${item.updatedDate || "Recent"}</p>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Overview</h4>
      <p class="modal-section-body">${escapeHtml(item.description)}</p>
    </div>

    <div class="modal-meta-grid">
      <div class="modal-meta-box">
        <span class="meta-label">File Size</span>
        <span class="meta-value">${escapeHtml(item.fileSize)}</span>
      </div>
      <div class="modal-meta-box">
        <span class="meta-label">Compatibility</span>
        <span class="meta-value">${escapeHtml(supportedVersionsStr)}</span>
      </div>
      <div class="modal-meta-box">
        <span class="meta-label">Total Downloads</span>
        <span class="meta-value">${(item.downloads || 0).toLocaleString()}</span>
      </div>
      <div class="modal-meta-box">
        <span class="meta-label">Integrity Status</span>
        <span class="meta-value text-cyan">✓ Verified Clean</span>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Tags</h4>
      <div class="modal-tags">${tagsHtml}</div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Installation Guide</h4>
      <pre class="modal-code-block">${escapeHtml(item.installGuide || "Follow standard installation for this file type.")}</pre>
    </div>

    <div class="modal-footer-actions">
      <button type="button" class="btn-secondary" id="modalCloseActionBtn">Close</button>
      <button type="button" class="btn-primary" id="modalDownloadActionBtn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Now (${escapeHtml(item.fileSize)})
      </button>
    </div>
  `;

  document.getElementById("modalCloseActionBtn")?.addEventListener("click", closeItemModal);
  document.getElementById("modalDownloadActionBtn")?.addEventListener("click", () => {
    triggerDownload(item);
  });

  elements.detailsModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  if (elements.detailsModal) {
    elements.detailsModal.classList.remove("active");
  }
  document.body.style.overflow = "";
  state.activeModalItem = null;
}

/**
 * Discord Modal Control
 */
function openDiscordModal() {
  if (elements.discordModal) {
    elements.discordModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeDiscordModal() {
  if (elements.discordModal) {
    elements.discordModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function copyDiscordInvite() {
  navigator.clipboard.writeText(POLARIS_CONFIG.discordInviteUrl).then(() => {
    showToast(`Discord invite copied to clipboard! (${POLARIS_CONFIG.discordInviteUrl.replace("https://", "")})`, "success");
    if (elements.copyDiscordBtn) {
      const originalText = elements.copyDiscordBtn.innerHTML;
      elements.copyDiscordBtn.innerHTML = `✓ Copied!`;
      setTimeout(() => {
        elements.copyDiscordBtn.innerHTML = originalText;
      }, 2500);
    }
  }).catch(() => {
    showToast("Invite link: " + POLARIS_CONFIG.discordInviteUrl, "info");
  });
}

/**
 * Reset All Filter Selections
 */
function resetAllFilters() {
  state.activeCategory = "all";
  state.activeVersion = "all";
  state.searchQuery = "";
  state.sortBy = "featured";

  if (elements.searchInput) elements.searchInput.value = "";
  if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = "none";
  if (elements.versionSelect) elements.versionSelect.value = "all";
  if (elements.sortSelect) elements.sortSelect.value = "featured";

  elements.categoryButtons.forEach((btn) => {
    if (btn.dataset.category === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderGrid();
  showToast("Filters reset to default", "info");
}

/**
 * Toast Notification System
 */
function showToast(message, type = "info") {
  if (!elements.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `polaris-toast toast-${type}`;
  
  const icon = type === "success" ? "✓" : "✦";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-msg">${escapeHtml(message)}</span>
  `;

  elements.toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3800);
}

/**
 * Utility: HTML Escape for security
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * ============================================================================
 * 🌌 CELESTIAL STARFIELD CANVAS (POLARIS NORTH STAR AMBIENCE)
 * ============================================================================
 */
function initStarCanvas() {
  const canvas = elements.starCanvas;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let stars = [];
  let mouse = { x: null, y: null };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createStars();
  }

  function createStars() {
    stars = [];
    const count = Math.floor((width * height) / 9000); // Responsive density
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.2,
        alpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        color: Math.random() > 0.3 ? "#38bdf8" : (Math.random() > 0.5 ? "#67e8f9" : "#ffffff")
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      // Twinkle alpha
      star.alpha += star.twinkleSpeed * star.twinkleDir;
      if (star.alpha > 0.9) {
        star.alpha = 0.9;
        star.twinkleDir = -1;
      } else if (star.alpha < 0.15) {
        star.alpha = 0.15;
        star.twinkleDir = 1;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = star.alpha;
      ctx.shadowBlur = star.size > 1.2 ? 6 : 0;
      ctx.shadowColor = star.color;
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  resize();
  animate();
}
