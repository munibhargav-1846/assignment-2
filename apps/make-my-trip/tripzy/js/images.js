/*
 * Each image is selected from the text/label in the empty block.
 * Example: HOME_GOA -> Goa photo, HOTEL_KERALA -> Kerala hotel,
 * INDIGO -> Indigo logo, "Breakfast Buffet" -> breakfast photo.
 */
const TRIP_IMAGES = {
  hero: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=88",
  goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=88",
  kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=88",
  manali: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=88",
  jaipur: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=88",
  kashmir: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=88",
  ooty: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=88",
  hyderabad: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=88",
  rishikesh: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=88",
  andaman: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=88",
  pondicherry: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=88",
  udaipur: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=88",
  munnar: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=88",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=88",

  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=88",
  hotelGoa: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=88",
  hotelKerala: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=88",
  hotelManali: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=88",
  hotelJaipur: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=88",
  hotelOoty: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=88",
  hotelHyderabad: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=88",
  hotelRishikesh: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=88",
  hotelKashmir: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=88",
  hotelAndaman: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=88",
  hotelPondicherry: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=88",
  hotelUdaipur: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88",
  hotelMunnar: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=88",
  hotelBali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=88",

  food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=88",
  foodGoa: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=88",
  foodKerala: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=88",
  foodManali: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=88",
  foodJaipur: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=88",
  foodOoty: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=88",
  foodHyderabad: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1000&q=88",
  foodRishikesh: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1000&q=88",
  foodKashmir: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=88",
  foodAndaman: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=1000&q=88",
  foodPondicherry: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=88",
  foodUdaipur: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=88",
  foodMunnar: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=88",
  foodBali: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=88",
  breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=88",
  beachDinner: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=88",
  tea: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=88",
  offer: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=88",
  profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=88",

  /* Airline blocks use real airline/brand marks rather than a random travel photo. */
  indigo: "https://www.google.com/s2/favicons?domain=goindigo.in&sz=128",
  airindia: "https://www.google.com/s2/favicons?domain=airindia.com&sz=128",
  akasa: "https://www.google.com/s2/favicons?domain=akasaair.com&sz=128",
  airindiaexpress: "https://www.google.com/s2/favicons?domain=airindiaexpress.com&sz=128"
};

const normalize = text => (text || "").toLowerCase().replace(/[^a-z0-9]+/g, " ");

function keyFromContext(el) {
  const markerMatch = (el.textContent.match(/\[(?:IMAGE_|PROFILE_)[^\]]+\]/i) || [])[0] || "";
  const marker = normalize(markerMatch);
  const context = normalize(el.parentElement ? el.parentElement.innerText : "");
  const allText = `${marker} ${context}`;

  if (allText.includes("home hero")) return "hero";
  if (allText.includes("special offer") || allText.includes("plan more save more") || allText.includes("exclusive demonstration deals")) return "offer";
  if (allText.includes("profile image") || el.classList.contains("ratio-avatar")) return "profile";

  if (allText.includes("airline indigo") || allText.includes("indigo")) return "indigo";
  if (allText.includes("airindiaexpress") || allText.includes("air india express")) return "airindiaexpress";
  if (allText.includes("airindia") || allText.includes("air india")) return "airindia";
  if (allText.includes("akasa")) return "akasa";

  const places = ["goa","kerala","manali","jaipur","kashmir","ooty","hyderabad","rishikesh","andaman","pondicherry","udaipur","munnar","bali"];
  const place = places.find(p => allText.includes(p));

  if (allText.includes("trip detail hero")) return place || "goa";
  if (marker.includes("hotel") && place) return `hotel${place.charAt(0).toUpperCase()}${place.slice(1)}`;
  if (marker.includes("trip ") && place) return place;

  /* Food cards are chosen from the visible heading under the image. */
  if (allText.includes("breakfast buffet")) return "breakfast";
  if (allText.includes("private beachside dinner") || allText.includes("seafood") || allText.includes("special dinner")) return "beachDinner";
  if (allText.includes("sunset tea") || allText.includes("tea savories")) return "tea";
  if (marker.includes("food")) return place ? `food${place.charAt(0).toUpperCase()}${place.slice(1)}` : "food";

  if (marker.includes("home goa")) return "goa";
  if (marker.includes("home kerala")) return "kerala";
  if (marker.includes("home manali")) return "manali";
  if (marker.includes("home jaipur")) return "jaipur";
  if (marker.includes("home kashmir")) return "kashmir";

  return place || (el.closest("#view-home") ? "hero" : "goa");
}

function hydrateRealisticImages() {
  document.querySelectorAll(".img-placeholder").forEach(el => {
    const key = keyFromContext(el);
    const url = TRIP_IMAGES[key] || TRIP_IMAGES.hero;
    el.style.backgroundImage = `url("${url}")`;
    el.classList.add("realistic-image");

    el.querySelectorAll("span").forEach(span => {
      if (/\[(?:IMAGE_|PROFILE_)[^\]]+\]/i.test(span.textContent)) {
        span.classList.add("placeholder-label");
      }
    });

    const icon = el.querySelector("i[data-lucide]");
    if (icon) icon.style.display = "none";
  });
}

let hydrateTimer;
const imageObserver = new MutationObserver(() => {
  clearTimeout(hydrateTimer);
  hydrateTimer = setTimeout(hydrateRealisticImages, 100);
});
imageObserver.observe(document.body, { childList: true, subtree: true });
window.addEventListener("load", hydrateRealisticImages);
document.addEventListener("DOMContentLoaded", hydrateRealisticImages);
