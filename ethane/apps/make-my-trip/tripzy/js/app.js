// -------------------------------------------------------------------------
// 1. DATA INVENTORY: 13 TRIPS, 11 FLIGHTS, 13 HOTELS
// -------------------------------------------------------------------------
const TRIPS_DATA = [
  {
    id: 1,
    name: "Goa Beach Escape",
    destination: "Goa",
    duration: "4 Days / 3 Nights",
    price: 12999,
    rating: 4.7,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_GOA]",
    description: "Relax on beautiful beaches, explore local attractions and enjoy Goa's coastal culture.",
    food: "Breakfast included, Local Goan food experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_GOA]"
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    destination: "Kerala",
    duration: "5 Days / 4 Nights",
    price: 16999,
    rating: 4.8,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_KERALA]",
    description: "Experience Kerala's backwaters, lush landscapes and traditional culture.",
    food: "Breakfast included, Kerala Sadya experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_KERALA]"
  },
  {
    id: 3,
    name: "Manali Adventure",
    destination: "Manali",
    duration: "5 Days / 4 Nights",
    price: 14999,
    rating: 4.7,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_MANALI]",
    description: "Explore Himalayan landscapes, adventure activities and mountain villages.",
    food: "Breakfast included, Local Himalayan cuisine",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_MANALI]"
  },
  {
    id: 4,
    name: "Jaipur Heritage",
    destination: "Jaipur",
    duration: "3 Days / 2 Nights",
    price: 9999,
    rating: 4.6,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_JAIPUR]",
    description: "Discover royal palaces, forts and the rich heritage of Rajasthan.",
    food: "Breakfast included, Rajasthani thali experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_JAIPUR]"
  },
  {
    id: 5,
    name: "Ooty Nature Escape",
    destination: "Ooty",
    duration: "3 Days / 2 Nights",
    price: 8999,
    rating: 4.5,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_OOTY]",
    description: "Relax among tea gardens, hills and beautiful Nilgiri landscapes.",
    food: "Breakfast included, South Indian breakfast experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_OOTY]"
  },
  {
    id: 6,
    name: "Hyderabad Heritage",
    destination: "Hyderabad",
    duration: "3 Days / 2 Nights",
    price: 7999,
    rating: 4.6,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_HYDERABAD]",
    description: "Explore Hyderabad's historic landmarks, culture and cuisine.",
    food: "Breakfast included, Hyderabadi Biryani experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_HYDERABAD]"
  },
  {
    id: 7,
    name: "Rishikesh Adventure",
    destination: "Rishikesh",
    duration: "4 Days / 3 Nights",
    price: 11999,
    rating: 4.7,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_RISHIKESH]",
    description: "Experience river rafting, mountains and adventure activities.",
    food: "Breakfast included, Local North Indian cuisine",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_RISHIKESH]"
  },
  {
    id: 8,
    name: "Kashmir Paradise",
    destination: "Kashmir",
    duration: "6 Days / 5 Nights",
    price: 24999,
    rating: 4.9,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_KASHMIR]",
    description: "Explore Srinagar, Gulmarg, Pahalgam and the Himalayan landscape.",
    food: "Breakfast included, Kashmiri Wazwan experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_KASHMIR]"
  },
  {
    id: 9,
    name: "Andaman Escape",
    destination: "Andaman",
    duration: "5 Days / 4 Nights",
    price: 28999,
    rating: 4.8,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_ANDAMAN]",
    description: "Enjoy crystal-clear water, beaches and island adventures.",
    food: "Breakfast included, Seafood experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_ANDAMAN]"
  },
  {
    id: 10,
    name: "Pondicherry Weekend",
    destination: "Pondicherry",
    duration: "3 Days / 2 Nights",
    price: 8499,
    rating: 4.5,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_PONDICHERRY]",
    description: "Experience beaches, French architecture, cafés and coastal culture.",
    food: "Breakfast included, French and South Indian food experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_PONDICHERRY]"
  },
  {
    id: 11,
    name: "Udaipur Royal Escape",
    destination: "Udaipur",
    duration: "3 Days / 2 Nights",
    price: 11999,
    rating: 4.7,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_UDAIPUR]",
    description: "Explore lakes, palaces and the royal heritage of Udaipur.",
    food: "Breakfast included, Rajasthani cuisine",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_UDAIPUR]"
  },
  {
    id: 12,
    name: "Munnar Hills",
    destination: "Munnar",
    duration: "4 Days / 3 Nights",
    price: 12499,
    rating: 4.8,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_MUNNAR]",
    description: "Explore tea plantations, waterfalls and peaceful mountain landscapes.",
    food: "Breakfast included, Kerala cuisine experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_MUNNAR]"
  },
  {
    id: 13,
    name: "Bali Explorer",
    destination: "Bali",
    duration: "6 Days / 5 Nights",
    price: 39999,
    rating: 4.8,
    imagePlaceholder: "[IMAGE_PLACEHOLDER_TRIP_BALI]",
    description: "Discover Bali's beaches, temples, culture and tropical landscapes.",
    food: "Breakfast included, Balinese food experience",
    foodPlaceholder: "[IMAGE_PLACEHOLDER_FOOD_BALI]"
  }
];

const FLIGHTS_DATA = [
  { id: 1, route: "Delhi → Goa", airline: "IndiGo", dep: "06:15 DEL", arr: "09:00 GOI", duration: "2h 45m", price: 5499, logo: "[IMAGE_PLACEHOLDER_AIRLINE_INDIGO]" },
  { id: 2, route: "Mumbai → Goa", airline: "Air India", dep: "08:30 BOM", arr: "09:50 GOI", duration: "1h 20m", price: 4999, logo: "[IMAGE_PLACEHOLDER_AIRLINE_AIRINDIA]" },
  { id: 3, route: "Bengaluru → Delhi", airline: "IndiGo", dep: "07:00 BLR", arr: "09:45 DEL", duration: "2h 45m", price: 6499, logo: "[IMAGE_PLACEHOLDER_AIRLINE_INDIGO]" },
  { id: 4, route: "Chennai → Delhi", airline: "Air India", dep: "06:40 MAA", arr: "09:30 DEL", duration: "2h 50m", price: 6999, logo: "[IMAGE_PLACEHOLDER_AIRLINE_AIRINDIA]" },
  { id: 5, route: "Hyderabad → Goa", airline: "IndiGo", dep: "10:15 HYD", arr: "11:35 GOI", duration: "1h 20m", price: 4299, logo: "[IMAGE_PLACEHOLDER_AIRLINE_INDIGO]" },
  { id: 6, route: "Mumbai → Delhi", airline: "Akasa Air", dep: "11:20 BOM", arr: "13:30 DEL", duration: "2h 10m", price: 5199, logo: "[IMAGE_PLACEHOLDER_AIRLINE_AKASA]" },
  { id: 7, route: "Chennai → Kochi", airline: "IndiGo", dep: "14:10 MAA", arr: "15:25 COK", duration: "1h 15m", price: 3999, logo: "[IMAGE_PLACEHOLDER_AIRLINE_INDIGO]" },
  { id: 8, route: "Delhi → Jaipur", airline: "Air India Express", dep: "16:00 DEL", arr: "17:05 JAI", duration: "1h 05m", price: 3499, logo: "[IMAGE_PLACEHOLDER_AIRLINE_AIRINDIAEXPRESS]" },
  { id: 9, route: "Bengaluru → Kochi", airline: "IndiGo", dep: "09:15 BLR", arr: "10:25 COK", duration: "1h 10m", price: 3799, logo: "[IMAGE_PLACEHOLDER_AIRLINE_INDIGO]" },
  { id: 10, route: "Hyderabad → Mumbai", airline: "Air India", dep: "17:30 HYD", arr: "19:00 BOM", duration: "1h 30m", price: 4599, logo: "[IMAGE_PLACEHOLDER_AIRLINE_AIRINDIA]" },
  { id: 11, route: "Delhi → Srinagar", airline: "IndiGo", dep: "08:10 DEL", arr: "09:45 SXR", duration: "1h 35m", price: 5999, logo: "[IMAGE_PLACEHOLDER_AIRLINE_INDIGO]" }
];

const HOTELS_DATA = [
  { id: 1, name: "Ocean Pearl Resort", location: "Goa", rating: 4.6, type: "Beach Resort", price: 4999, image: "[IMAGE_PLACEHOLDER_HOTEL_GOA]", amenities: ["Wi-Fi", "Pool", "Breakfast", "Beach Access"], food: "Breakfast included" },
  { id: 2, name: "Backwater Haven Resort", location: "Kerala", rating: 4.7, type: "Backwater Resort", price: 5499, image: "[IMAGE_PLACEHOLDER_HOTEL_KERALA]", amenities: ["Wi-Fi", "Pool", "Restaurant", "Backwater View"], food: "Kerala breakfast available" },
  { id: 3, name: "Mountain Vista Stay", location: "Manali", rating: 4.5, type: "Mountain Resort", price: 3999, image: "[IMAGE_PLACEHOLDER_HOTEL_MANALI]", amenities: ["Wi-Fi", "Mountain View", "Restaurant", "Parking"], food: "Breakfast included" },
  { id: 4, name: "Royal Jaipur Palace", location: "Jaipur", rating: 4.6, type: "Heritage Hotel", price: 4299, image: "[IMAGE_PLACEHOLDER_HOTEL_JAIPUR]", amenities: ["Wi-Fi", "Restaurant", "Pool", "Heritage Experience"], food: "Rajasthani cuisine available" },
  { id: 5, name: "Nilgiri Retreat", location: "Ooty", rating: 4.5, type: "Hill Resort", price: 3499, image: "[IMAGE_PLACEHOLDER_HOTEL_OOTY]", amenities: ["Wi-Fi", "Garden", "Restaurant", "Mountain View"], food: "South Indian breakfast" },
  { id: 6, name: "Charminar Grand Hotel", location: "Hyderabad", rating: 4.4, type: "City Hotel", price: 3299, image: "[IMAGE_PLACEHOLDER_HOTEL_HYDERABAD]", amenities: ["Wi-Fi", "Restaurant", "Parking", "Room Service"], food: "Hyderabadi cuisine available" },
  { id: 7, name: "Ganga Riverside Resort", location: "Rishikesh", rating: 4.6, type: "Riverside Resort", price: 3899, image: "[IMAGE_PLACEHOLDER_HOTEL_RISHIKESH]", amenities: ["Wi-Fi", "River View", "Restaurant", "Adventure Desk"], food: "Breakfast included" },
  { id: 8, name: "Kashmir Valley Retreat", location: "Kashmir", rating: 4.8, type: "Mountain Hotel", price: 5999, image: "[IMAGE_PLACEHOLDER_HOTEL_KASHMIR]", amenities: ["Mountain View", "Restaurant", "Heating", "Room Service"], food: "Kashmiri cuisine available" },
  { id: 9, name: "Island Blue Resort", location: "Andaman", rating: 4.8, type: "Beach Resort", price: 6999, image: "[IMAGE_PLACEHOLDER_HOTEL_ANDAMAN]", amenities: ["Beach Access", "Pool", "Wi-Fi", "Restaurant"], food: "Seafood and breakfast available" },
  { id: 10, name: "French Quarter Stay", location: "Pondicherry", rating: 4.5, type: "Boutique Hotel", price: 3799, image: "[IMAGE_PLACEHOLDER_HOTEL_PONDICHERRY]", amenities: ["Wi-Fi", "Café", "Garden", "Bicycle"], food: "French and South Indian food" },
  { id: 11, name: "Lake Palace Retreat", location: "Udaipur", rating: 4.8, type: "Heritage Hotel", price: 5999, image: "[IMAGE_PLACEHOLDER_HOTEL_UDAIPUR]", amenities: ["Lake View", "Restaurant", "Pool", "Spa"], food: "Rajasthani cuisine" },
  { id: 12, name: "Tea Garden Resort", location: "Munnar", rating: 4.7, type: "Tea Estate Resort", price: 4499, image: "[IMAGE_PLACEHOLDER_HOTEL_MUNNAR]", amenities: ["Tea Garden", "Restaurant", "Wi-Fi", "Mountain View"], food: "Kerala cuisine" },
  { id: 13, name: "Bali Tropical Resort", location: "Bali", rating: 4.8, type: "Luxury Resort", price: 8999, image: "[IMAGE_PLACEHOLDER_HOTEL_BALI]", amenities: ["Pool", "Spa", "Beach Access", "Restaurant"], food: "Balinese and international cuisine" }
];

// Global selected trip state
let currentSelectedTrip = TRIPS_DATA[0];
let selectedFlightPrice = 5499;
let selectedHotelPrice = 4999;

// -------------------------------------------------------------------------
// 2. VIEW CONTROLLER (SPA TAB NAVIGATION)
// -------------------------------------------------------------------------
function switchView(viewName) {
  document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
  const activeEl = document.getElementById(`view-${viewName}`);
  if (activeEl) {
    activeEl.classList.remove('hidden');
  }

  // Update Desktop Nav Styling
  const tabs = ['home', 'explore', 'booking', 'profile'];
  tabs.forEach(t => {
    const btn = document.getElementById(`nav-btn-${t}`);
    if (btn) {
      if (t === viewName) {
        btn.className = "nav-tab px-4 py-2 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 transition-all bg-brand-primary text-white shadow-sm";
      } else {
        btn.className = "nav-tab px-4 py-2 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 text-brand-neutral hover:text-brand-primary transition-all";
      }
    }

    // Update Mobile Nav
    const mobBtn = document.getElementById(`mob-nav-${t}`);
    if (mobBtn) {
      if (t === viewName) {
        mobBtn.className = "flex flex-col items-center gap-0.5 text-brand-primary font-bold";
      } else {
        mobBtn.className = "flex flex-col items-center gap-0.5 text-brand-neutral hover:text-brand-primary";
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function switchExploreSubtab(sub) {
  ['trips', 'flights', 'hotels'].forEach(s => {
    const content = document.getElementById(`subtab-content-${s}`);
    const btn = document.getElementById(`exp-subtab-${s}`);
    if (content && btn) {
      if (s === sub) {
        content.classList.remove('hidden');
        btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition bg-brand-primary text-white";
      } else {
        content.classList.add('hidden');
        btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold text-brand-neutral hover:text-brand-primary transition";
      }
    }
  });
  lucide.createIcons();
}

function filterExploreTab(target) {
  switchView('explore');
  if (target === 'flights') {
    switchExploreSubtab('flights');
  } else if (target === 'hotels') {
    switchExploreSubtab('hotels');
  } else {
    switchExploreSubtab('trips');
  }
}

function focusSearchPanel() {
  const panel = document.getElementById('search-panel');
  if (panel) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('search-dest-input').focus();
  }
}

function executeHomeSearch() {
  const val = document.getElementById('search-dest-input').value.trim();
  switchView('explore');
  if (val) {
    const destSelect = document.getElementById('filter-dest');
    for (let i = 0; i < destSelect.options.length; i++) {
      if (destSelect.options[i].text.toLowerCase().includes(val.toLowerCase())) {
        destSelect.selectedIndex = i;
        break;
      }
    }
    applyTripFilters();
  }
}

// -------------------------------------------------------------------------
// 3. RENDER ALL 13 TRIPS IN EXPLORE
// -------------------------------------------------------------------------
function renderTrips(trips) {
  const container = document.getElementById('trips-grid');
  const badge = document.getElementById('trip-count-badge');
  if (badge) badge.innerText = `${trips.length} Packages`;

  if (!trips.length) {
    container.innerHTML = `<div class="col-span-3 text-center py-12 text-sm text-brand-neutral">No trip packages match your current filter settings. Try resetting destination or budget.</div>`;
    return;
  }

  container.innerHTML = trips.map(t => `
    <div class="bg-white border border-brand-border rounded-custom p-4 shadow-soft hover:shadow-floating transition-all flex flex-col justify-between group">
      <div>
        <!-- Trip Image Placeholder -->
        <div class="img-placeholder ratio-card mb-3.5 relative group-hover:border-brand-primary transition">
          <i data-lucide="map-pin" class="w-7 h-7 text-brand-primary/60 mb-1"></i>
          <span class="text-[10px] font-mono font-bold text-slate-700">${t.imagePlaceholder}</span>
          <span class="text-[9px] text-brand-neutral">${t.destination} • Scenic Package</span>
          <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-extrabold text-amber-700 flex items-center gap-1 shadow-sm">
            <i data-lucide="star" class="w-3 h-3 fill-amber-500 text-amber-500"></i> ${t.rating}
          </div>
        </div>

        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-neutral">${t.duration}</span>
            <span class="text-xs font-bold text-brand-primary">${t.destination}</span>
          </div>
          <h3 class="font-extrabold text-base text-brand-dark group-hover:text-brand-primary transition">${t.name}</h3>
          <p class="text-xs text-brand-neutral line-clamp-2 leading-relaxed">${t.description}</p>
        </div>

        <!-- Food Info Box -->
        <div class="mt-3 bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <i data-lucide="utensils" class="w-4 h-4"></i>
          </div>
          <div class="text-[10px]">
            <span class="font-bold text-slate-700 block">Food Experience</span>
            <span class="text-brand-neutral truncate block">${t.food}</span>
          </div>
        </div>
      </div>

      <!-- Bottom Price & CTA -->
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span class="text-[10px] text-brand-neutral font-semibold uppercase block">Package Price</span>
          <span class="text-base font-extrabold text-brand-dark">₹${t.price.toLocaleString()}</span>
        </div>
        <button onclick="selectTripQuick(${t.id})" class="px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5">
          <span>View Trip</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// -------------------------------------------------------------------------
// 4. RENDER ALL 11 FLIGHTS
// -------------------------------------------------------------------------
function renderFlights() {
  const container = document.getElementById('flights-container');
  container.innerHTML = FLIGHTS_DATA.map(f => `
    <div class="bg-white border border-brand-border rounded-2xl p-4 shadow-soft hover:shadow-floating transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <!-- Airline Logo Placeholder -->
        <div class="w-16 h-12 rounded-xl img-placeholder p-1 shrink-0 text-center flex flex-col justify-center">
          <i data-lucide="plane" class="w-4 h-4 text-brand-primary"></i>
          <span class="text-[7px] font-mono leading-tight">${f.logo}</span>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h4 class="font-bold text-sm text-brand-dark">${f.airline}</h4>
            <span class="text-[10px] text-brand-neutral bg-slate-100 px-2 py-0.5 rounded font-mono">Flight #${f.id}0${f.id}</span>
          </div>
          <span class="text-xs font-semibold text-brand-primary">${f.route}</span>
          <div class="text-[11px] text-brand-neutral flex items-center gap-2 mt-0.5">
            <span>${f.dep}</span>
            <i data-lucide="arrow-right" class="w-3 h-3 text-slate-400"></i>
            <span>${f.arr}</span>
            <span>• ${f.duration} (Non-stop)</span>
            <span>• Baggage 15kg</span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between w-full md:w-auto gap-4 border-t md:border-t-0 pt-2 md:pt-0 border-slate-100">
        <div class="text-left md:text-right">
          <span class="text-[10px] text-brand-neutral uppercase block font-semibold">Demo Price</span>
          <span class="text-base font-extrabold text-brand-dark">₹${f.price.toLocaleString()}</span>
        </div>
        <button onclick="selectFlightAndGoBooking(${f.price}, '${f.airline}', '${f.route}')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-brand-primary hover:text-white text-brand-dark font-bold text-xs transition">
          Select Flight
        </button>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// -------------------------------------------------------------------------
// 5. RENDER ALL 13 HOTELS
// -------------------------------------------------------------------------
function renderHotels() {
  const container = document.getElementById('hotels-grid');
  container.innerHTML = HOTELS_DATA.map(h => `
    <div class="bg-white border border-brand-border rounded-custom p-4 shadow-soft hover:shadow-floating transition flex flex-col justify-between group">
      <div>
        <!-- Hotel Image Placeholder -->
        <div class="img-placeholder ratio-card mb-3.5 relative">
          <i data-lucide="hotel" class="w-7 h-7 text-brand-secondary/60 mb-1"></i>
          <span class="text-[9px] font-mono font-bold text-slate-700">${h.image}</span>
          <span class="text-[8px] text-brand-neutral">${h.location} • ${h.type}</span>
          <div class="absolute top-2 right-2 bg-white/95 px-2 py-0.5 rounded-full text-[10px] font-extrabold text-amber-700 flex items-center gap-1 shadow-sm">
            <i data-lucide="star" class="w-3 h-3 fill-amber-500 text-amber-500"></i> ${h.rating}
          </div>
        </div>

        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold text-brand-secondary uppercase">${h.type}</span>
            <span class="text-xs text-brand-neutral font-medium">${h.location}</span>
          </div>
          <h3 class="font-extrabold text-sm text-brand-dark">${h.name}</h3>

          <!-- Amenities Badges -->
          <div class="flex flex-wrap gap-1 pt-1.5">
            ${h.amenities.map(a => `<span class="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">${a}</span>`).join('')}
          </div>

          <p class="text-[11px] text-emerald-700 font-semibold pt-1 flex items-center gap-1">
            <i data-lucide="check" class="w-3 h-3"></i> ${h.food}
          </p>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span class="text-[10px] text-brand-neutral uppercase block font-semibold">Nightly Rate</span>
          <span class="text-sm font-extrabold text-brand-dark">₹${h.price.toLocaleString()} <span class="text-[10px] font-normal text-slate-500">/ night</span></span>
        </div>
        <div class="flex gap-1.5">
          <button onclick="selectHotelAndGoBooking(${h.price}, '${h.name}')" class="px-3 py-1.5 rounded-lg bg-brand-primary text-white hover:bg-brand-primaryHover text-xs font-bold transition">
            Book Hotel
          </button>
        </div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// -------------------------------------------------------------------------
// 6. FILTER LOGIC FOR TRIPS
// -------------------------------------------------------------------------
function applyTripFilters() {
  const dest = document.getElementById('filter-dest').value;
  const budget = document.getElementById('filter-budget').value;
  const duration = document.getElementById('filter-duration').value;

  let filtered = TRIPS_DATA.filter(t => {
    if (dest !== 'all' && t.destination !== dest) return false;
    if (budget === 'under10k' && t.price >= 10000) return false;
    if (budget === '10k20k' && (t.price < 10000 || t.price > 20000)) return false;
    if (budget === 'above20k' && t.price <= 20000) return false;
    if (duration === '3days' && !t.duration.includes('3 Days')) return false;
    if (duration === '4days' && !t.duration.includes('4 Days')) return false;
    if (duration === '5days' && !t.duration.includes('5 Days')) return false;
    if (duration === '6days' && !t.duration.includes('6 Days')) return false;
    return true;
  });

  renderTrips(filtered);
}

// -------------------------------------------------------------------------
// 7. SELECTION & TRIP DETAILS BINDING
// -------------------------------------------------------------------------
function selectTripQuick(tripId) {
  const found = TRIPS_DATA.find(t => t.id === tripId);
  if (found) {
    currentSelectedTrip = found;
    updateTripDetailView(found);
    switchView('booking');
  }
}

function selectFlightAndGoBooking(price, airline, route) {
  selectedFlightPrice = price;
  document.getElementById('sum-flight-price').innerText = `₹${price.toLocaleString()}`;
  recalculateBookingTotal();
  switchView('booking');
}

function selectHotelAndGoBooking(price, name) {
  selectedHotelPrice = price;
  document.getElementById('sum-hotel-price').innerText = `₹${price.toLocaleString()}`;
  recalculateBookingTotal();
  switchView('booking');
}

function updateTripDetailView(trip) {
  document.getElementById('detail-breadcrumb').innerText = trip.name;
  document.getElementById('detail-badge-dest').innerText = `${trip.destination}, India`;
  document.getElementById('detail-badge-rating').innerHTML = `<i data-lucide="star" class="w-3 h-3 fill-amber-500 text-amber-500"></i> ${trip.rating} (128 Reviews)`;
  document.getElementById('detail-badge-duration').innerText = trip.duration;
  document.getElementById('detail-title').innerText = trip.name;
  document.getElementById('detail-description').innerText = trip.description;
  document.getElementById('detail-quick-price').innerText = `₹${trip.price.toLocaleString()} / person`;

  document.getElementById('detail-food-name').innerText = `${trip.destination} Culinary Tradition`;
  document.getElementById('detail-food-desc').innerText = trip.food;

  document.getElementById('sum-trip-price').innerText = `₹${trip.price.toLocaleString()}`;
  recalculateBookingTotal();
  lucide.createIcons();
}

function recalculateBookingTotal() {
  const tripP = currentSelectedTrip ? currentSelectedTrip.price : 16999;
  const flightP = selectedFlightPrice || 5499;
  const hotelP = selectedHotelPrice || 4999;
  const foodP = 1999;
  const taxP = 1000;

  const total = tripP + flightP + hotelP + foodP + taxP;
  document.getElementById('sum-total-price').innerText = `₹${total.toLocaleString()}`;
  return total;
}

// -------------------------------------------------------------------------
// 8. BOOKING CONFIRMATION MODAL & ACTIONS
// -------------------------------------------------------------------------
function confirmBooking() {
  const total = recalculateBookingTotal();
  document.getElementById('modal-booking-id').innerText = `HC-2026-${Math.floor(100 + Math.random() * 900)}`;
  document.getElementById('modal-dest').innerText = currentSelectedTrip.name;
  document.getElementById('modal-amount').innerText = `₹${total.toLocaleString()}`;

  document.getElementById('booking-modal').classList.remove('hidden');
  lucide.createIcons();
}

function closeConfirmationModal() {
  document.getElementById('booking-modal').classList.add('hidden');
  switchView('home');
}

function closeConfirmationAndGoProfile() {
  document.getElementById('booking-modal').classList.add('hidden');
  switchView('profile');
}

function showConfirmationModal(id) {
  document.getElementById('modal-booking-id').innerText = id || 'HC-2026-001';
  document.getElementById('booking-modal').classList.remove('hidden');
  lucide.createIcons();
}

function downloadConfirmationStub() {
  alert("Demonstration Ticket Downloaded: TRIPZY Verified Travel Voucher #TZ-2026.");
}

// -------------------------------------------------------------------------
// 9. INITIALIZATION
// -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  renderTrips(TRIPS_DATA);
  renderFlights();
  renderHotels();
  updateTripDetailView(currentSelectedTrip);
  lucide.createIcons();
});
