!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequiree306;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiree306=o);var i=o("bpxeT"),a=o("2TvXO"),d=o("52cT6"),c=o("DIZKv"),l=o("fSyzt"),u=o("f3eg1"),f=o("dZ50N"),s=o("gp0NK"),g=new(0,d.default),v=new(0,u.default),x=new(0,s.default);function p(){return(p=e(i)(e(a).mark((function t(){var n,r,o,i,d;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=v.itemsPerPage(),r=0;case 2:if(!(r<n)){e.next=16;break}return e.next=5,g.random();case 5:o=e.sent,f.default.mainCocktailsList.insertAdjacentHTML("beforeend",(0,c.default)(o)),i=f.default.iconHeart.innerHTML,(d=document.querySelector('[id="'.concat(o.idDrink,'"]'))).addEventListener("click",h),(0,l.listenLearnMoreBtns)(o),d.children[1].innerHTML=i;case 13:r++,e.next=2;break;case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(e){!function(e){"Add to"===e.currentTarget.children[0].textContent?e.currentTarget.children[0].textContent="Remove":e.currentTarget.children[0].textContent="Add to";e.currentTarget.children[1].classList.toggle("icon-heart-not-active")}(e),x.toggleDrink(e.currentTarget.id)}function m(e){"Add to favorite"===e.target.textContent?e.target.textContent="Remove from favorite":e.target.textContent="Add to favorite",x.toggleDrink(l.currentModalID);var t=document.querySelector('[id="'.concat(l.currentModalID,'"]'));x.isInStorage(l.currentModalID)?(t.children[0].textContent="Add to",t.children[1].classList.toggle("icon-heart-not-active")):(t.children[0].textContent="Remove",t.children[1].classList.toggle("icon-heart-not-active"))}f.default.modalAddDrink.addEventListener("click",m),f.default.modalAddIngredient.addEventListener("click",(function(e){"Add to favorite"===e.target.textContent?e.target.textContent="Remove from favorite":e.target.textContent="Add to favorite";x.toggleIngredient(l.currentIngredientModal)})),function(){p.apply(this,arguments)}()}();
//# sourceMappingURL=index.94abdf60.js.map
