!function(){var n=document.getElementById("search-form"),e=document.querySelector(".gallery");n.addEventListener("submit",(function(n){n.preventDefault(),(a=n.currentTarget.elements.searchQuery.value.trim(),s=new URLSearchParams({key:"35530318-c832a4dcd48fc070f5c50cd79",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:"1"}),fetch("".concat("https://pixabay.com/api/","?").concat(s)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){var a,s=n.hits;e.insertAdjacentHTML("beforeend",(a=s,a.map((function(n){var e=n.webformatURL,a=(n.largeImageURL,n.tags,n.likes),s=n.comments,t=n.downloads,c=n.views;return'<div class="photo-card">\n      \n        <img src="'.concat(e,'" alt="tags" loading="lazy" class="image"/>\n     \n      <div class="info">\n        <p class="info-item">\n          <b>Likes: <br /><span class="info-numbers">').concat(a,'</span></b>\n        </p>\n        <p class="info-item">\n          <b>Views: <br /><span class="info-numbers">').concat(c,'</span></b>\n        </p>\n        <p class="info-item">\n          <b>Comments: <br /><span class="info-numbers">').concat(s,'</span></b>\n        </p>\n        <p class="info-item">\n          <b>Downloads: <br /><span class="info-numbers">').concat(t,"</span></b>\n        </p>\n      </div>\n    </div>\n  ")}))).join(""))})).catch((function(n){return console.log(n)}));var a,s}))}();
//# sourceMappingURL=index.02317fa8.js.map
