let header = document.querySelector("header");
let listA = document.querySelectorAll("header ul li a");

const handleScroll = () => {
  if (document.documentElement.scrollTop > 200) {
    header.style.backgroundColor = "white";
    listA.forEach((a) => {
      a.style.color = "black";
    });
  } else {
    header.style.backgroundColor = "transparent";
    listA.forEach((a) => {
      a.style.color = "white";
    });
  }
};

window.onscroll = handleScroll;