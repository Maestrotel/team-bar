!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequiree306;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiree306=n);var i,c=n("bpxeT"),l=n("2TvXO"),o=n("52cT6"),d=n("DIZKv"),s=n("f3eg1"),u=n("fSyzt"),f=n("dZ50N"),g=n("gp0NK"),v=new(0,s.default),p=new(0,o.default),h=new(0,g.default);function L(e){return w.apply(this,arguments)}function w(){return(w=e(c)(e(l).mark((function t(a){var r,n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),f.default.plagination.classList.add("visually-hidden"),v.currentPage=1,f.default.burger.classList.add("visually-hidden"),f.default.mainCocktailsList.innerHTML="","UL"!=a.currentTarget.nodeName&&"DIV"!=a.currentTarget.nodeName){e.next=14;break}return r=a.target.textContent,e.next=11,p.byLetter(r);case 11:n=e.sent,e.next=18;break;case 14:return r=a.currentTarget.elements.searchInput.value,e.next=17,p.byName(r);case 17:n=e.sent;case 18:i=n,null!=n&&n.length>9&&(P(n.length),f.default.plagination.classList.remove("visually-hidden")),null==n?(f.default.cocktailsSection.classList.add("visually-hidden"),f.default.error.classList.remove("visually-hidden"),f.default.plagination.classList.add("visually-hidden")):(f.default.error.classList.add("visually-hidden"),f.default.cocktailsSection.classList.remove("visually-hidden"),m(n));case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e){var t=v.itemsPerPage();function a(e){!function(e){"Add to"===e.currentTarget.children[0].textContent?e.currentTarget.children[0].textContent="Remove":e.currentTarget.children[0].textContent="Add to";e.currentTarget.children[1].classList.toggle("icon-heart-not-active")}(e),h.toggleDrink(e.currentTarget.id)}e.map((function(e,r){if(r>=(v.currentPage-1)*t&&r<v.currentPage*t){f.default.mainCocktailsList.insertAdjacentHTML("beforeend",(0,d.default)(e));var n=f.default.iconHeart.innerHTML,i=document.querySelector('[id="'.concat(e.idDrink,'"]'));i.addEventListener("click",a),(0,u.listenLearnMoreBtns)(e),i.children[1].innerHTML=n}}))}function P(e){for(var t=[],a=v.itemsPerPage(),r=Math.ceil(e/a),n=1;n<r+1;n++){var i=void 0;n==v.currentPage&&(i="pagination__active"),t.push('<li><button type="button" class="pagination__numb pagination__item '.concat(i,'" id="').concat(n,'" data-page>').concat(n,"</button></li>"))}f.default.pages.innerHTML=t.join(""),document.querySelectorAll("[data-page]").forEach((function(e){e.addEventListener("click",y)}))}function y(e){return T.apply(this,arguments)}function T(){return(T=e(c)(e(l).mark((function t(a){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelectorAll("[data-page]").forEach((function(e){return e.classList.remove("pagination__active")})),a.target.classList.add("pagination__active"),v.currentPage=+a.currentTarget.id,f.default.mainCocktailsList.innerHTML="",r=f.default.pages.children.length,1!=v.currentPage&&f.default.arrowPrev.children[0].classList.remove("arrow-no-active"),1==v.currentPage&&f.default.arrowPrev.children[0].classList.add("arrow-no-active"),v.currentPage==r&&f.default.arrowNext.children[0].classList.add("arrow-no-active"),v.currentPage!=r&&f.default.arrowNext.children[0].classList.remove("arrow-no-active"),m(i);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}f.default.searchByAbcBtnsMobile.addEventListener("click",(function(e){e.target!=e.currentTarget&&"BUTTON"!=e.target.nodeName&&L(e)})),f.default.searchByAbcBtns.addEventListener("click",(function(e){e.target!=e.currentTarget&&L(e)})),f.default.form.forEach((function(e){return e.addEventListener("submit",L)})),f.default.arrowNext.addEventListener("click",(function(){var e=f.default.pages.children.length;if(v.currentPage<e){v.nextPage(),f.default.mainCocktailsList.innerHTML="",document.querySelectorAll("[data-page]").forEach((function(e){e.classList.remove("pagination__active"),e.textContent==v.currentPage&&e.classList.add("pagination__active")})),1!=v.currentPage&&f.default.arrowPrev.children[0].classList.remove("arrow-no-active"),1==v.currentPage&&f.default.arrowPrev.children[0].classList.add("arrow-no-active"),v.currentPage==e&&f.default.arrowNext.children[0].classList.add("arrow-no-active"),v.currentPage!=e&&f.default.arrowNext.children[0].classList.remove("arrow-no-active"),m(i)}})),f.default.arrowPrev.addEventListener("click",(function(){var e=f.default.pages.children.length;if(v.currentPage>1){v.prevPage(),f.default.mainCocktailsList.innerHTML="",document.querySelectorAll("[data-page]").forEach((function(e){e.classList.remove("pagination__active"),e.textContent==v.currentPage&&e.classList.add("pagination__active")})),1!=v.currentPage&&f.default.arrowPrev.children[0].classList.remove("arrow-no-active"),1==v.currentPage&&f.default.arrowPrev.children[0].classList.add("arrow-no-active"),v.currentPage==e&&f.default.arrowNext.children[0].classList.add("arrow-no-active"),v.currentPage!=e&&f.default.arrowNext.children[0].classList.remove("arrow-no-active"),m(i)}}))}();
//# sourceMappingURL=index.2a0d1042.js.map
