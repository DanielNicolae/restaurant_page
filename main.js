(()=>{"use strict";function e(){const e=document.getElementsByClassName("home")[0],t=document.getElementsByClassName("menu")[0];e.style.display="none",t.style.display="block"}function t(){const e=document.getElementsByClassName("home")[0],t=document.getElementsByClassName("menu")[0];e.style.display="block",t.style.display="none"}((n,d)=>{const c=document.getElementById("content"),a=document.createElement("nav");c.appendChild(a);const o=document.createElement("h1");o.classList.add("title"),a.appendChild(o),o.innerHTML="Restauranty";const l=document.createElement("h2");l.classList.add("motto"),a.appendChild(l),l.innerHTML="Gluttony for the win!!!";const m=document.createElement("ul");a.appendChild(m),m.classList.add("mainMenu");const s=document.createElement("li"),i=document.createElement("button");i.innerHTML="Home",i.classList.add("homePageButton"),s.appendChild(i);const u=document.createElement("li"),p=document.createElement("button");p.classList.add("menuPageButton"),p.innerHTML="Menu",u.appendChild(p),m.appendChild(s),m.appendChild(u),i.addEventListener("click",t),p.addEventListener("click",e)})(),function(){const e=document.getElementById("content"),t=document.createElement("main");e.appendChild(t);const n=document.createElement("div");n.classList.add("home"),t.appendChild(n);const d=document.createElement("h2");d.innerHTML="Welcome to the epic fest!!!";const c=document.createElement("p");c.innerHTML="Are you ready for a feast that you are going to remember for the rest of your life?!!",n.appendChild(d),n.appendChild(c)}(),function(){const e=document.getElementById("content"),t=document.createElement("main");e.appendChild(t);const n=document.createElement("div");n.classList.add("menu"),t.appendChild(n);const d=document.createElement("div");d.classList.add("menuTitle"),n.appendChild(d),d.innerHTML="Menu";const c=document.createElement("div");c.classList.add("menuContent"),n.appendChild(c);const a=document.createElement("p");a.innerHTML="Super big fat stake";const o=document.createElement("p");o.innerHTML="More meat!!!";const l=document.createElement("p");l.innerHTML="Even more meat!!!",c.appendChild(a),c.appendChild(o),c.appendChild(l)}()})();