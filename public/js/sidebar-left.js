/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

import { createIcons, icons } from "/assets/vendor/lucide/lucide.js";
import { sidebarNavigationData } from "./navigation-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const sidebarDesktop = document.getElementById("sidebar-left-desktop");
  const desktopSidebarToggleBtn = document.getElementById(
    "desktop-sidebar-toggle-btn"
  );
  const desktopSidebarNav = document.getElementById("desktop-sidebar-nav");

  const mobileFabMenu = document.getElementById("mobile-fab-menu");
  const mobileFabToggleBtn = document.getElementById("mobile-fab-toggle-btn");
  const mobileFabAvatarFixed = document.getElementById("mobile-avatar-fixed");
  const mobileMenuItemsContainer = document.getElementById(
    "mobile-menu-items-container"
  );
  const mobileFabOverlay = document.getElementById("mobile-fab-overlay");

  const isDesktop = () => window.innerWidth >= 768;
  let isSidebarExpanded = isDesktop()
    ? localStorage.getItem("sidebarExpanded") === "true"
    : false;

  const applySidebarState = () => {
    if (sidebarDesktop) {
      if (isSidebarExpanded) {
        sidebarDesktop.classList.remove("sidebar-collapsed");
        sidebarDesktop.classList.add("expanded");
      } else {
        sidebarDesktop.classList.add("sidebar-collapsed");
        sidebarDesktop.classList.remove("expanded");
      }
    }
  };

  if (isDesktop()) {
    applySidebarState();
  } else {
    if (sidebarDesktop) {
      sidebarDesktop.classList.add("hidden");
    }
  }

  if (desktopSidebarToggleBtn) {
    desktopSidebarToggleBtn.addEventListener("click", () => {
      isSidebarExpanded = !isSidebarExpanded;
      localStorage.setItem("sidebarExpanded", isSidebarExpanded);
      applySidebarState();
    });
  }

  let hoverTimeout;
  if (sidebarDesktop && isDesktop()) {
    sidebarDesktop.addEventListener("mouseenter", () => {
      if (!isSidebarExpanded) {
        clearTimeout(hoverTimeout);
        sidebarDesktop.classList.remove("sidebar-collapsed");
        sidebarDesktop.classList.add("expanded");
        createIcons({ icons });
      }
    });

    sidebarDesktop.addEventListener("mouseleave", () => {
      if (!isSidebarExpanded) {
        hoverTimeout = setTimeout(() => {
          sidebarDesktop.classList.remove("expanded");
          sidebarDesktop.classList.add("sidebar-collapsed");
          createIcons({ icons });
        }, 300);
      }
    });
  }

  const createSidebarLink = (item, level = 0) => {
    const link = document.createElement("a");
    let href = "";

    if (item.page === "home") {
      href = "/";
    } else if (item.page) {
      if (item.layout) {
        href = `/${item.page}/${item.layout}`;
      } else {
        href = `/${item.page}`;
      }
    } else {
      href = "#";
    }

    if (item.hash) {
      href += item.hash;
    }

    link.href = item.disabled ? "#" : href;

    let textSizeClass = "";
    let textColorClass = "";
    let iconSizeClass = "";

    if (level === 0) {
      textSizeClass = "text-lg";
      textColorClass = "text-gray-700";
      iconSizeClass = "w-5 h-5";
    } else if (level === 1) {
      textSizeClass = "text-md";
      textColorClass = "text-gray-600";
      iconSizeClass = "w-4 h-4";
    } else {
      textSizeClass = "text-sm";
      textColorClass = "text-gray-500";
      iconSizeClass = "w-4 h-4";
    }

    link.className = `flex items-center p-3 rounded-lg ${textColorClass} hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group ${
      item.disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${textSizeClass}`;

    if (level > 0) {
      link.classList.remove("p-3");
      link.classList.add("p-2");
    }

    link.innerHTML = `<i data-lucide="${item.icon}" class="${iconSizeClass} mr-3 shrink-0"></i><span class="sidebar-text whitespace-nowrap">${item.label}</span>`;

    if (item.disabled) {
      link.addEventListener("click", (e) => e.preventDefault());
    }
    return link;
  };

  const renderDesktopSidebarNav = (menuItems, parentElement, level = 0) => {
    if (!parentElement) return;

    parentElement.innerHTML = "";

    const groupedItems = {};
    menuItems.forEach((item) => {
      const groupName = item.group || "Tanpa Grup";
      if (!groupedItems[groupName]) {
        groupedItems[groupName] = [];
      }
      groupedItems[groupName].push(item);
    });

    for (const groupName in groupedItems) {
      const itemsInGroup = groupedItems[groupName];

      if (Object.keys(groupedItems).length > 1 || groupName !== "Tanpa Grup") {
        const groupTitle = document.createElement("h4");
        groupTitle.className = `text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4 mb-2 ${
          level === 0 ? "pl-3" : "pl-0"
        }`;
        groupTitle.textContent = groupName;
        parentElement.appendChild(groupTitle);
      }

      itemsInGroup.forEach((item) => {
        if (item.children) {
          const wrapperDiv = document.createElement("div");
          wrapperDiv.className = "w-full";

          const button = document.createElement("button");
          button.id = `sidebar-${item.id}-trigger`;

          let buttonTextSizeClass = "";
          let buttonTextColorClass = "";
          let buttonIconSizeClass = "";

          if (level === 0) {
            buttonTextSizeClass = "text-lg";
            buttonTextColorClass = "text-gray-700";
            buttonIconSizeClass = "w-5 h-5";
          } else if (level === 1) {
            buttonTextSizeClass = "text-md";
            buttonTextColorClass = "text-gray-600";
            buttonIconSizeClass = "w-4 h-4";
          } else {
            buttonTextSizeClass = "text-sm";
            buttonTextColorClass = "text-gray-500";
            buttonIconSizeClass = "w-4 h-4";
          }

          button.className = `flex justify-between items-center w-full p-3 rounded-lg ${buttonTextColorClass} hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group ${buttonTextSizeClass}`;

          if (level > 0) {
            button.classList.remove("p-3");
            button.classList.add("p-2");
          }

          button.innerHTML = `
                        <span class="flex items-center overflow-hidden">
                            <i data-lucide="${item.icon}" class="${buttonIconSizeClass} mr-3 shrink-0"></i>
                            <span class="sidebar-text whitespace-nowrap">${item.label}</span>
                        </span>
                        <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300 shrink-0"></i>
                    `;

          const panelDiv = document.createElement("div");
          panelDiv.id = `sidebar-${item.id}-panel`;
          panelDiv.className = `hidden mt-1 space-y-1 pl-4 border-l-2 border-gray-200`;

          wrapperDiv.appendChild(button);
          wrapperDiv.appendChild(panelDiv);
          parentElement.appendChild(wrapperDiv);

          renderDesktopSidebarNav(item.children, panelDiv, level + 1);

          button.addEventListener("click", (e) => {
            e.preventDefault();
            panelDiv.classList.toggle("hidden");
            const actualChevron = button.querySelector(
              'svg[data-lucide="chevron-down"]'
            );
            if (actualChevron) {
              actualChevron.classList.toggle("rotate-180");
            }
          });
        } else {
          const link = createSidebarLink(item, level);
          parentElement.appendChild(link);
        }
      });
    }
    createIcons({ icons });
  };

  let currentMobileMenuLevel = sidebarNavigationData;
  let mobileMenuHistory = [];

  const calculateCirclePositions = (numItems, radius) => {
    const positions = [];
    const angleStep = Math.PI / (numItems + 1);

    for (let i = 0; i < numItems; i++) {
      const angle = Math.PI - (i + 1) * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      positions.push({ x: x, y: y });
    }
    return positions;
  };

  const renderMobileFabMenuItems = (menuItems) => {
    if (!mobileMenuItemsContainer) return;

    Array.from(mobileMenuItemsContainer.children).forEach((child) => {
      child.style.opacity = "0";
      const currentTransform = child.style.transform
        .replace(/scale\((.*?)\)/, "")
        .trim();
      child.style.transform = `${currentTransform} scale(0.5)`;
      child.style.transition = "all 0.2s ease-out";
      child.style.pointerEvents = "none";
    });

    setTimeout(() => {
      mobileMenuItemsContainer.innerHTML = "";

      const isThirdLevel = mobileMenuHistory.length === 2;
      const radius = isThirdLevel ? 140 : 140;

      const numItems = menuItems.length;
      const hasBackButton = mobileMenuHistory.length > 0;

      const positions = calculateCirclePositions(
        numItems + (hasBackButton ? 1 : 0),
        radius
      );

      let currentItemIndex = 0;

      if (hasBackButton) {
        const backButton = document.createElement("button");
        const backButtonSizeClass =
          mobileMenuHistory.length === 1 ? "level-2-item" : "level-3-item";
        backButton.className = `mobile-fab-item mobile-fab-back-btn bg-gray-500 text-white rounded-full shadow-md flex items-center justify-center ${backButtonSizeClass}`;
        backButton.innerHTML = `<i data-lucide="arrow-left"></i>`;

        const pos = positions[currentItemIndex++];
        backButton.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% - ${pos.y}px))`;
        backButton.style.opacity = "1";
        backButton.style.transition = `all 0.3s ease-out`;
        backButton.style.pointerEvents = "auto";

        mobileMenuItemsContainer.appendChild(backButton);

        backButton.addEventListener("click", (e) => {
          e.stopPropagation();
          const previousMenuLevel = mobileMenuHistory.pop();
          currentMobileMenuLevel = previousMenuLevel || sidebarNavigationData;
          renderMobileFabMenuItems(currentMobileMenuLevel);
          toggleFabMenu(true);
        });
      }

      menuItems.forEach((item, i) => {
        const fabItem = document.createElement(item.page ? "a" : "button");
        fabItem.id = `fab-item-${item.id}`;

        let sizeClass = "";
        if (mobileMenuHistory.length === 0) {
          sizeClass = "level-1-item";
        } else if (mobileMenuHistory.length === 1) {
          sizeClass = "level-2-item";
        } else if (mobileMenuHistory.length === 2) {
          sizeClass = "level-3-item";
        }

        fabItem.className = `mobile-fab-item bg-blue-600 text-white rounded-full shadow-md flex items-center justify-center ${sizeClass} ${
          item.disabled ? "opacity-50 cursor-not-allowed" : ""
        }`;
        fabItem.innerHTML = `<i data-lucide="${item.icon}"></i>`;

        const pos = positions[currentItemIndex++];
        fabItem.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% - ${pos.y}px))`;
        fabItem.style.opacity = "1";
        fabItem.style.transition = `all 0.3s ease-out ${i * 0.05}s`;
        fabItem.style.pointerEvents = "auto";

        mobileMenuItemsContainer.appendChild(fabItem);

        if (item.page) {
          let fabHref = "";
          if (item.page === "home") {
            fabHref = "/";
          } else if (item.page) {
            if (item.layout) {
              fabHref = `/${item.page}/${item.layout}`;
            } else {
              fabHref = `/${item.page}`;
            }
          } else {
            fabHref = "#";
          }
          if (item.hash) {
            fabHref += item.hash;
          }
          fabItem.href = item.disabled ? "#" : fabHref;

          if (item.disabled) {
            fabItem.addEventListener("click", (e) => e.preventDefault());
          } else {
            fabItem.addEventListener("click", () => {
              toggleFabMenu(false);
            });
          }
        } else if (item.children) {
          fabItem.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenuHistory.push(currentMobileMenuLevel);
            currentMobileMenuLevel = item.children;
            renderMobileFabMenuItems(currentMobileMenuLevel);
            toggleFabMenu(true);
          });
        }
      });
      createIcons({ icons });
      markActiveLink();
    }, 200);
  };

  let isFabMenuExpanded = false;

  const toggleFabMenu = (expand) => {
    isFabMenuExpanded =
      typeof expand === "boolean" ? expand : !isFabMenuExpanded;

    if (mobileFabMenu) {
      if (isFabMenuExpanded) {
        mobileFabMenu.classList.add("expanded");
        if (mobileFabOverlay) mobileFabOverlay.classList.remove("hidden");
        if (mobileFabAvatarFixed) {
          mobileFabAvatarFixed.classList.add("opacity-0", "scale-0");
          mobileFabAvatarFixed.classList.remove("opacity-100", "scale-100");
        }
        renderMobileFabMenuItems(currentMobileMenuLevel);
      } else {
        mobileFabMenu.classList.remove("expanded");
        if (mobileFabOverlay) mobileFabOverlay.classList.add("hidden");
        if (mobileFabAvatarFixed) {
          mobileFabAvatarFixed.classList.remove("opacity-0", "scale-0");
          mobileFabAvatarFixed.classList.add("opacity-100", "scale-100");
        }
        mobileMenuItemsContainer.innerHTML = "";
        mobileMenuHistory = [];
        currentMobileMenuLevel = sidebarNavigationData;
      }
    }
    createIcons({ icons });
  };

  if (mobileFabToggleBtn) {
    mobileFabToggleBtn.addEventListener("click", () => toggleFabMenu());
  }

  if (mobileFabOverlay) {
    mobileFabOverlay.addEventListener("click", () => toggleFabMenu(false));
  }

  const markActiveLink = () => {
    const currentPath = window.location.pathname;
    const allLinks = document.querySelectorAll(
      "#desktop-sidebar-nav a, .mobile-fab-item[href]"
    );

    allLinks.forEach((link) => {
      link.classList.remove("active-link");
      const linkHref = link.getAttribute("href");
      if (linkHref) {
        const normalizedLinkHref = linkHref.startsWith("/")
          ? linkHref
          : "/" + linkHref;
        if (normalizedLinkHref === currentPath) {
          link.classList.add("active-link");
        } else if (currentPath === "/" && normalizedLinkHref === "/home") {
          link.classList.add("active-link");
        } else if (
          currentPath.startsWith(normalizedLinkHref) &&
          normalizedLinkHref !== "/"
        ) {
          link.classList.add("active-link");
        }
      }
    });
  };

  renderDesktopSidebarNav(sidebarNavigationData, desktopSidebarNav);
  markActiveLink();

  window.addEventListener("resize", () => {
    if (isDesktop()) {
      if (mobileFabMenu) mobileFabMenu.classList.add("hidden");
      if (mobileFabOverlay) mobileFabOverlay.classList.add("hidden");
      if (mobileFabAvatarFixed) mobileFabAvatarFixed.classList.add("hidden");
      if (sidebarDesktop) sidebarDesktop.classList.remove("hidden");
      applySidebarState();
      renderDesktopSidebarNav(sidebarNavigationData, desktopSidebarNav);
      setTimeout(() => {
        markActiveLink();
      }, 100);
    } else {
      if (sidebarDesktop) sidebarDesktop.classList.add("hidden");
      if (mobileFabMenu) mobileFabMenu.classList.remove("hidden");
      if (mobileFabAvatarFixed) mobileFabAvatarFixed.classList.remove("hidden");
      toggleFabMenu(false);
      markActiveLink();
    }
  });
  window.dispatchEvent(new Event("resize"));
});