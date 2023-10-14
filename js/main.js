var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

const swiperWrapper = document.querySelector(".swiper-wrapper")
const regestirLinks = document.querySelector(".regestir-wrapper")
const dashboardLink = document.querySelector(".dashboard-link")

axios.get('http://localhost:3000/api/posts')
.then(res => render(res))

function render(addToSwiper) {
  const fragment = document.createDocumentFragment();
  addToSwiper.data.data.forEach(element => {
    // console.log(element);
    const slideWrapperDiv = document.createElement("div")
    slideWrapperDiv.className = "swiper-slide"
    slideWrapperDiv.innerHTML = `
    <a class="slide-img" href="${location.origin + `/pages/single.html?dataID=${element._id}`}">
      <img src="${element.image}" alt="">
    </a>
    <div class="swiper-info">
        <h3>${element.title.split("").length > 15 ? element.title.slice(0, 15) + "..." : element.title}</h3>
        <p>${element.description.split("").length > 70 ? element.description.slice(0, 70) + "..." : element.description}</p>
        <div class="swiper-author-wrapper">
            <img src="./photo/Ellipse.svg" alt="">
            <div class="swiper-author-name">
                <p>Ibrokhim Jalalov</p>
                <strong>Author</strong>
            </div>
        </div>
    </div>
    `
    fragment.appendChild(slideWrapperDiv)
  });
  swiperWrapper.appendChild(fragment)
}

if(typeof(localStorage.getItem("user-token"))  =='string'){
    regestirLinks.style.display = "none"
    dashboardLink.style.display = "block"
}
else {
  regestirLinks.style.display = "block"
  dashboardLink.style.display = "none"
}

console.log(typeof(localStorage.getItem("user")));
console.log(typeof(localStorage.getItem("user-token")));