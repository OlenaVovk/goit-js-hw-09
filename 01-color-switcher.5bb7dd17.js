!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),n=null;function r(t,e,o){t.hasAttribute(e)?t.removeAttribute(e):t.setAttribute(e,o)}r(e,"disabled",""),t.addEventListener("click",(function(){console.log("start"),r(e,"disabled",""),r(t,"disabled",""),n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){r(t,"disabled",""),r(e,"disabled",""),clearInterval(n),console.log("stop"),o.style.backgroundColor="#fff"}))}();
//# sourceMappingURL=01-color-switcher.5bb7dd17.js.map
