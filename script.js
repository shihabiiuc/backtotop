const gototop = document.getElementById("gotop");

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  const threshold = window.innerHeight * 0.3;

  if (scroll > threshold) {
    gototop.classList.add("active");
  } else {
    gototop.classList.remove("active");
  }
};
window.addEventListener("scroll", onScroll);

gototop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
