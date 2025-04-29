
document.addEventListener('DOMContentLoaded', () => {
  // --- Variables ---
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownTrigger = document.getElementById('dropdownTrigger');
  const backButton = document.getElementById('backButton');
  const searchTrigger = document.getElementById('searchTrigger');
  const searchPopup = document.getElementById('searchPopup');
  const closePopup = document.getElementById('closePopup');
  const recentList = document.getElementById('recentList');

  let recentItems = [];

  // --- Dropdown Toggle ---
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', () => {
      dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  }

  // --- Back Button (Go Home) ---
  if (backButton) {
    backButton.addEventListener('click', () => {
      pages.forEach(page => page.classList.remove('active'));
      const homePage = document.getElementById('inboxPage');
      if (homePage) {
        homePage.classList.add('active');
      }
      if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  // --- Search Popup Toggle ---
  if (searchTrigger && searchPopup && closePopup) {
    searchTrigger.addEventListener('click', () => {
      searchPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
      searchPopup.style.display = 'none';
    });
  }

  // --- Page Switching + Update Recents ---
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.page;
      const textElement = item.querySelector('.label');
      const label = textElement ? textElement.textContent.trim() : '';

      // Page switching
      pages.forEach(page => page.classList.remove('active'));
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.classList.add('active');
      }
      if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
      }

      // Update Recents
      if (label && targetId) {
        recentItems = recentItems.filter(obj => obj.label !== label);
        recentItems.unshift({ label, pageId: targetId });
        if (recentItems.length > 5) {
          recentItems.pop();
        }
        updateRecentList();
      }
    });
  });

  // --- Update the Recent List Dynamically ---
  function updateRecentList() {
    recentList.innerHTML = '';
    
    recentItems.forEach(({ label, pageId }) => {
      const div = document.createElement('div');
      div.className = 'recent-item';
      div.dataset.page = pageId;

      const formattedLabel = label.toLowerCase().replace(/\s+/g, '-');
      const iconClass = `recent-${formattedLabel}-icon`;

      const iconPaths = {
        inbox: "M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z",
        today: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
        upcoming: "M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
        anytime: "M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z",
        someday: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z",
        logbook: "M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
      };

      const path = iconPaths[formattedLabel] || '';

      div.innerHTML = `
        <div class="${iconClass}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="${path}" fill="currentColor" />
          </svg>
        </div>
        <div class="recent-label">${label}</div>
      `;

      div.addEventListener('click', () => {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
          targetPage.classList.add('active');
        }
        searchPopup.style.display = 'none';
      });

      recentList.appendChild(div);
    });
  }
});
