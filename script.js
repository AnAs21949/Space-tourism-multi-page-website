// export {};
var oBtn = document.querySelector(".open");
var cBtn = document.querySelector(".close");
var links = document.querySelector(".links");
oBtn === null || oBtn === void 0 ? void 0 : oBtn.addEventListener("click", function () {
    links === null || links === void 0 ? void 0 : links.classList.add("show-links");
    oBtn === null || oBtn === void 0 ? void 0 : oBtn.classList.add("hide");
    cBtn === null || cBtn === void 0 ? void 0 : cBtn.classList.add("show");
});
cBtn === null || cBtn === void 0 ? void 0 : cBtn.addEventListener("click", function () {
    links === null || links === void 0 ? void 0 : links.classList.remove("show-links");
    oBtn === null || oBtn === void 0 ? void 0 : oBtn.classList.remove("hide");
    cBtn === null || cBtn === void 0 ? void 0 : cBtn.classList.remove("show");
});
var planetBtn = document.querySelectorAll(".p-Btn");
var heroContainer = document.querySelector(".hero");
var crewBtns = document.querySelectorAll(".c-btn");
var role = document.querySelector(".role");
var memberName = document.querySelector(".member-name");
var planetName = document.querySelector(".planet-name");
var memberBio = document.querySelector(".motivation");
var memberImg = document.querySelector(".member-img");
var numberBtn = document.querySelectorAll(".n-btn");
var travelNumber = document.querySelector(".travel-number");
var distanceNumber = document.querySelector(".distance-number");


fetch("/assets/data.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var crew = data.crew;
    console.log(crew);
    var tech = data.technology;
    console.log(tech);
    var dest = data.destinations;
    planetBtn.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var id = e.currentTarget.dataset.id;
            console.log(id);
            for (var i = 0; i < dest.length; i++) {
                if (dest[i].name === id) {
                    distanceNumber === null || distanceNumber === void 0 ? void 0 : distanceNumber.textContent = dest[i].distance;
                    travelNumber === null || travelNumber === void 0 ? void 0 : travelNumber.textContent = dest[i].travel;
                    planetName.textContent = dest[i].name;
                    memberBio.textContent = dest[i].description;
                    memberImg.src = dest[i].images.webp;
                    memberImg.src = dest[i].images.webp;
                }
            }
        });
    });
    numberBtn.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            console.log("salam");
            var id = e.currentTarget.dataset.id;
            console.log(id);
            var img = document.querySelector(".img2");
            memberName.textContent = tech[id - 1].name;
            memberBio.textContent = tech[id - 1].description;
            memberImg.src = tech[id - 1].images.landscape;
            img.src = tech[id - 1].images.portrait;
        });
    });
    crewBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            console.log("salam");
            var id = e.currentTarget.dataset.id;
            console.log(id);
            for (var i = 0; i < crew.length; i++) {
                if (crew[i].name === id) {
                    role.textContent = crew[i].role;
                    memberName.textContent = crew[i].name;
                    memberBio.textContent = crew[i].bio;
                    memberImg.src = crew[i].images.webp;
                }
            }
        });
    });
});
