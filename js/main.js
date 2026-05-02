(function () {
  var path = window.location.pathname;
  var links = document.querySelectorAll("nav a[data-nav]");
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.startsWith("http")) return;
    var normalized = path.replace(/\/index\.html$/, "/");
    if (href === "index.html" || href === "./index.html" || href === "/") {
      if (normalized.endsWith("/") && path.indexOf("case-studies") === -1) {
        link.setAttribute("aria-current", "page");
      }
    }
    if (path.indexOf("resume.html") !== -1 && href.indexOf("resume") !== -1) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
