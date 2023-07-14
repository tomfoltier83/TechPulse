const txtAnim = document.querySelector('.service');
new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.pauseFor(300)
.typeString('Créer un site web <span style="color:#32AEFF">à partir de zéro</span>.')
.pauseFor(2500)
.deleteChars(36)
.typeString('Modifier un site web <span style="color:#32AEFF">déjà existant</span>.')
.pauseFor(2500)
.deleteChars(36)
.typeString('Ajouter un <span style="color:#32AEFF">élément</span>, une <span style="color:#32AEFF">animation</span>, un <span style="color:#32AEFF">effet</span> à votre site web.')
.pauseFor(4000)
.deleteChars(69)
.start(); 


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}