const GITHUB = "https://github.com";
const PULL = "pull";
const MESSAGE = "2... 3... ש-גר!";

function shager() {
  if (window.location.origin !== GITHUB) return;
  if (window.location.pathname.split("/").at(-2) !== PULL) return;

  let c = 0;
  const t = setInterval(() => {
    if (write() || c++ > 50) clearInterval(t);
  }, 100);
}

function write() {
  const firstBtn = document.querySelector(
    'button[data-details-container=".js-merge-pr"]:not(:disabled)'
  );

  if (!firstBtn) return;

  firstBtn.addEventListener("click", () => {
    const confirmBtn = document.querySelector(
      "button[type='submit'].js-merge-commit-button"
    );

    confirmBtn.innerHTML = MESSAGE;
    confirmBtn.style.direction = "rtl";

    const audio = new Audio(chrome.runtime.getURL("/audio.mp3"));
    confirmBtn.addEventListener("click", () => audio.play());
  });

  return true;
}

function singleSSO() {
  if (window.location.origin !== GITHUB) return;

  const isSsoPage = document.querySelector("h1.sso-title");

  if (!isSsoPage) return;

  document.querySelector("button[type='submit']")?.click();
}

window.addEventListener("load", () => {
  shager();
  singleSSO();
});
