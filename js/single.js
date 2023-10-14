const dataId = new URLSearchParams(window.location.search).get("dataID");
console.log(dataId);

const singleElementWrapper = document.querySelector(".single-element-wrapper")

axios.get('http://localhost:3000/api/posts')
.then(res => render(res))

function render(addToSwiper) {
  const fragment = document.createDocumentFragment();
  addToSwiper.data.data.forEach(element => {
    // console.log(element);
    if(element._id === dataId) {
        const singleEl = document.createElement("div")
        singleEl.className = "single-element"
        singleEl.innerHTML = `
        <div class="single-title">
                <h2>${element.title}</h2>
                <strong>#${element.category}</strong>
            </div>
            <img src="${element.image}" alt="">
            <p>${element.description}</p>
        `
        fragment.appendChild(singleEl)
        }
    });
  singleElementWrapper.appendChild(fragment)
}

const regestirLinks = document.querySelector(".regestir-wrapper")
const dashboardLink = document.querySelector(".dashboard-link")

if(typeof(localStorage.getItem("user-token"))  =='string'){
  regestirLinks.style.display = "none"
  dashboardLink.style.display = "block"
}
else {
regestirLinks.style.display = "block"
dashboardLink.style.display = "none"
}