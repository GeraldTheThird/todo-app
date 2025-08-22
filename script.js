document.addEventListener('DOMContentLoaded', () => {
  console.log('[DEBUG] DOM loaded');
  console.log('[DEBUG] Menu Items:', document.querySelectorAll('.menu-item-row'));
  const iconSvgs = {
    inbox: `
    <path
      fill-rule="evenodd"
      d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
      clip-rule="evenodd"
      fill="currentColor"
    />
  `,

    today: `
    <path
      fill-rule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clip-rule="evenodd"
      fill="currentColor"
    />
  `,

    upcoming: `
    <path
      d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
      fill="currentColor"
    />
  `,

    anytime: `
        <path
          d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"
          fill="currentColor"
        />
        <path
          d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"
          fill="currentColor"
        />
        <path
          d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z"
          fill="currentColor"
        />
      `,

    someday: `
    <path
      d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
      fill="currentColor"
    />
  `,

    logbook: `
    <path
      fill-rule="evenodd"
      d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
      clip-rule="evenodd"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
      clip-rule="evenodd"
      fill="currentColor"
    />
  `,
  };

  const menuItems = document.querySelectorAll('.menu-item-row');
  const pages = document.querySelectorAll('.page');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const backButton = document.getElementById('backButton');
  const searchTrigger = document.getElementById('searchTrigger');
  const searchPopup = document.getElementById('searchPopup');
  const closePopup = document.getElementById('closePopup');
  const recentList = document.getElementById('recentList');
  const settingsButton = document.getElementById('settingsButton');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettings = document.getElementById('closeSettings');
  const thingsCloudPage = document.getElementById('things-cloud-page');
  const backToSettings = document.getElementById('backToSettings');
  const cloudToggle = document.getElementById('cloudToggle');
  const toggleLabel = document.querySelector('.toggle-label');

  let recentItems = [];

  function sanitizeLabel(label) {
    return label.toLowerCase().trim().replace(/\s+/g, '-');
  }

  document.querySelectorAll('.arrow-button').forEach(button => {
    button.addEventListener('click', () => {
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById('menu-page').classList.add('active');
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.style.display = 'none');
    });
  });

  // === Drop-down show/toggle ===

// selector covers either spelling
const DROPDOWN_SELECTOR = '.dropdown-menu';

// Click anywhere
document.addEventListener('click', (e) => {
  const circleBtn = e.target.closest('.circle-button');

  if (circleBtn) {
    // Close all menus first
    document.querySelectorAll(DROPDOWN_SELECTOR).forEach(m => m.style.display = 'none');

    // Find the menu inside or next to the button
    let menu =
      circleBtn.querySelector(DROPDOWN_SELECTOR) ||
      (circleBtn.nextElementSibling && circleBtn.nextElementSibling.matches(DROPDOWN_SELECTOR)
        ? circleBtn.nextElementSibling
        : null);

    if (menu) {
      // Toggle: show if hidden, hide if visible
      const isHidden = getComputedStyle(menu).display === 'none';
      menu.style.display = isHidden ? 'block' : 'none';
    }

    // Don't let this click fall through to the "outside click" closer
    e.stopPropagation();
    return;
  }

  // Clicked outside any dropdown → close all
  if (!e.target.closest(DROPDOWN_SELECTOR)) {
    document.querySelectorAll(DROPDOWN_SELECTOR).forEach(m => m.style.display = 'none');
  }
});


  if (searchTrigger && searchPopup && closePopup) {
    searchTrigger.addEventListener('click', () => {
      searchPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
      searchPopup.style.display = 'none';
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("Populating upcoming page")
      const targetPageId = item.getAttribute("data-page");
      const targetPage = document.getElementById(targetPageId);
      pages.forEach((p) => p.classList.remove("active"));
      if (targetPage) {
        targetPage.classList.add("active");
      }

      if (dropdownMenu) dropdownMenu.style.display = 'none';

      const labelText = item.textContent.trim();
      if (labelText && targetPage) {
        recentItems = recentItems.filter(obj => obj.label !== labelText);
        recentItems.unshift({ label: labelText, pageId: targetPageId });
        if (recentItems.length > 5) recentItems.pop();
        updateRecentList();
      }
    });
  });

  function updateRecentList() {
    recentList.innerHTML = '';
    recentItems.forEach(({ label, pageId }) => {
      const div = document.createElement('div');
      div.className = 'recent-item';
      div.dataset.page = pageId;

      const formattedLabel = sanitizeLabel(label);
      const svgContent = iconSvgs[formattedLabel] || '';

      div.innerHTML = `
        <div class="recent-button recent-${formattedLabel}-button">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g>${svgContent}</g>
          </svg>
        </div>
        <div class="recent-label">${label}</div>
      `;

      div.addEventListener('click', () => {

        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(pageId);
        console.log('[Recent Click] Target Element →', targetPage);

        if (targetPage) {
          targetPage.classList.add('active');
          console.log('[Recent Click] Activated:', targetPage.id);
        } else {
          console.warn('[Recent Click] No page found for ID:', pageId);
        }
        searchPopup.style.display = 'none';
      });

      recentList.appendChild(div);

    });
  }
});