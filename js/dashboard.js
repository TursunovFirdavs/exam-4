
const currentPage = new URLSearchParams(location.search).get("page");
console.log(currentPage);
const $mainContents = document.querySelectorAll("main > div");
const $sidebarMenuItemLinks = document.querySelectorAll(".post-pages a");
console.log($mainContents);
const userId = JSON.parse(atob(localStorage.getItem("user-token").split(".")[1])).id
console.log(userId);


$sidebarMenuItemLinks.forEach((sidebarLink) => {
    if (sidebarLink.href.includes(currentPage)) {
      sidebarLink.setAttribute("aria-current", "page");
    }
  });

$mainContents.forEach(content => {
    if (content.dataset.contentName.includes(currentPage)) {
        content.style.display = "block"
      }
})





// const swiperWrapper = document.querySelector(".dashboard-swiper-wrapper")
// const regestirLinks = document.querySelector(".regestir-wrapper")
// const dashboardLink = document.querySelector(".dashboard-link")

// axios.get('http://localhost:3000/api/posts')
// .then(res => render(res))

// function render(addToSwiper) {
//     console.log(addToSwiper);
//   const fragment = document.createDocumentFragment();
//   addToSwiper.data.data.slice(0, 6).forEach(element => {
//     // console.log(element);
//     const slideWrapperDiv = document.createElement("div")
//     slideWrapperDiv.className = "swiper-slide"
//     slideWrapperDiv.innerHTML = `
//     <a class="slide-img" href="${location.origin + `/pages/single.html?dataID=${element._id}`}">
//       <img src="${element.image}" alt="">
//     </a>
//     <div class="swiper-info">
//         <h3>${element.title.split("").length > 15 ? element.title.slice(0, 15) + "..." : element.title}</h3>
//         <p>${element.description.split("").length > 70 ? element.description.slice(0, 70) + "..." : element.description}</p>
//         <div class="btn-wrapper">
//             <button id="edit">Edit</button>
//             <button id="delete">Delete</button>
//         </div>
//     </div>
//     `
//     fragment.appendChild(slideWrapperDiv)
//   });
//   swiperWrapper.appendChild(fragment)
// }

// const deletebtn  = document.querySelector("#delete")
// const deletePostWrapper = document.querySelector(".delete-post-wrapper")
// const deletePost = document.querySelector(".delete-post")
// const deletingBtn = document.querySelector("#deletingBtn")
// const close  =document.querySelector(".fa-regular")

// deletebtn.addEventListener("click", () => {
//     deletePost.classList.add("delete-post-active")
//     deletePostWrapper.classList.add("delete-post-wrapper-active")
// })

const signOut = document.querySelector("#sign-out")
const deleteAccWrapper = document.querySelector(".delete-acc-wrapper")
const deleteAcc = document.querySelector(".delete-acc")
const signOutBtn = document.querySelector("#sign-out-btn")
const closeBtn  =document.querySelector(".fa-regular")

signOut.addEventListener("click", () => {
    console.log("salom");
    deleteAcc.classList.add("delete-acc-active")
    deleteAccWrapper.classList.add("delete-acc-wrapper-active")
})

signOutBtn.addEventListener("click", () => {
    localStorage.clear()
})

closeBtn.addEventListener("click", () => {
    deleteAcc.classList.remove("delete-acc-active")
    deleteAccWrapper.classList.remove("delete-acc-wrapper-active")
})