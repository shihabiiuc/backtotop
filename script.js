const backtotoplink = document.getElementById("gotop");
const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  const threshold = window.innerHeight * 0.3;
  if (scroll > threshold) {
    backtotoplink.classList.add("active");
  } else {
    backtotoplink.classList.remove("active");
  }
};
window.addEventListener("scroll", onScroll);

backtotoplink.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
