!function(){"use strict";function t(){d.classList.toggle("hide-overflow"),document.querySelector(".screen-cover")?d.removeChild(a):(a.setAttribute("class","screen-cover"),a.style.animation="fadeIn 0.30s",d.appendChild(a))}function e(t){r.setAttribute("class","lightbox-btn lightbox-btn-close"),s.innerHTML=t+r.outerHTML,s.setAttribute("class","lightbox-item-wrapper"),u.innerHTML=s.outerHTML,u.classList.add("lightbox-container"),d.appendChild(u)}function n(t){s.style.animation="none";var n,o,i,r=document.querySelector(".current-lightbox-item");"next"===t?n=r.parentElement.nextElementSibling:"previous"===t&&(n=r.parentElement.previousElementSibling),null!==n&&null!==(i=n.querySelector(".lightbox-gallery"))&&(o=document.getElementById(i.getAttribute("data-content")).innerHTML,e(c.outerHTML+o+l.outerHTML),r.classList.remove("current-lightbox-item"),i.classList.add("current-lightbox-item"))}function o(){a.style.animation="fadeOut 0.30s",document.querySelector(".lightbox-item-wrapper").style.animation="deleteBox 0.30s, fadeOut 0.30s",setTimeout(function(){t(),d.removeChild(u),u.setAttribute("class","");var e=document.querySelector(".current-lightbox-item");null!==e&&(e.focus(),e.classList.remove("current-lightbox-item"))},200)}var i=document.querySelectorAll(".lightbox"),r=document.createElement("button"),l=document.createElement("button"),c=document.createElement("button"),u=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),d=document.body;Array.prototype.forEach.call(i,function(n){n.addEventListener("click",function(o){this.blur(),t(),o.preventDefault(),this.classList.add("current-lightbox-item"),s.style.animation="createBox 0.30s, fadeIn 0.30s";var i=n.getAttribute("data-content"),r=document.getElementById(i).innerHTML;n.classList.contains("lightbox-gallery")&&(u.classList.add("lightbox-gallery"),l.setAttribute("class","lightbox-btn lightbox-btn-next"),c.setAttribute("class","lightbox-btn lightbox-btn-prev"),r+=c.outerHTML+l.outerHTML),e(r)})}),document.addEventListener("click",function(t){if(document.querySelector(".lightbox-container")){var e=t.target;e===u||e===a||e===document.querySelector(".lightbox-btn-close")?o():e===document.querySelector(".lightbox-btn-next")?n("next"):e===document.querySelector(".lightbox-btn-prev")&&n("previous")}}),document.addEventListener("keyup",function(t){if(document.querySelector(".lightbox-container")){var e=t.keyCode;27===e&&o(),u.classList.contains("lightbox-gallery")&&(39===e?n("next"):37===e&&n("previous"))}})}();