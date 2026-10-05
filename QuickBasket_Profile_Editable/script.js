const products=[{"id": 1, "name": "Durian", "category": "Fruits", "image": "assets/products/fruits_01.jpg", "price": 149, "old": 179, "unit": "4 pcs", "icon": "apple"}, {"id": 2, "name": "Alphonso Mango", "category": "Fruits", "image": "assets/products/fruits_02.jpg", "price": 49, "old": 59, "unit": "6 pcs", "icon": "banana"}, {"id": 3, "name": "Rambutan", "category": "Fruits", "image": "assets/products/fruits_03.jpg", "price": 89, "old": 109, "unit": "1 kg", "icon": "orange"}, {"id": 4, "name": "Longan", "category": "Fruits", "image": "assets/products/fruits_04.jpg", "price": 119, "old": 145, "unit": "500 g", "icon": "grapes"}, {"id": 5, "name": "Jackfruit", "category": "Fruits", "image": "assets/products/fruits_05.jpg", "price": 199, "old": 239, "unit": "2 pcs", "icon": "mango"}, {"id": 6, "name": "Banana", "category": "Fruits", "image": "assets/products/fruits_06.jpg", "price": 139, "old": 165, "unit": "2 pcs", "icon": "pomegranate"}, {"id": 7, "name": "Papaya", "category": "Fruits", "image": "assets/products/fruits_07.jpg", "price": 79, "old": 95, "unit": "1 kg", "icon": "lime"}, {"id": 8, "name": "Pineapple", "category": "Fruits", "image": "assets/products/fruits_08.jpg", "price": 69, "old": 85, "unit": "1 kg", "icon": "papaya"}, {"id": 9, "name": "Watermelon", "category": "Fruits", "image": "assets/products/fruits_09.jpg", "price": 59, "old": 75, "unit": "1 pc", "icon": "watermelon"}, {"id": 10, "name": "Muskmelon", "category": "Fruits", "image": "assets/products/fruits_10.jpg", "price": 129, "old": 155, "unit": "3 pcs", "icon": "kiwi"}, {"id": 11, "name": "Red Apple", "category": "Fruits", "image": "assets/products/fruits_11.jpg", "price": 109, "old": 129, "unit": "500 g", "icon": "pear"}, {"id": 12, "name": "Strawberry", "category": "Fruits", "image": "assets/products/fruits_12.jpg", "price": 179, "old": 210, "unit": "200 g", "icon": "strawberry"}, {"id": 13, "name": "Tomato", "category": "Vegetables", "image": "assets/products/vegetables_01.jpg", "price": 59, "old": 72, "unit": "1 pc", "icon": "broccoli"}, {"id": 14, "name": "Red Onion", "category": "Vegetables", "image": "assets/products/vegetables_02.jpg", "price": 45, "old": 55, "unit": "500 g", "icon": "carrot"}, {"id": 15, "name": "Potato", "category": "Vegetables", "image": "assets/products/vegetables_03.jpg", "price": 42, "old": 50, "unit": "1 kg", "icon": "tomato"}, {"id": 16, "name": "Green Cabbage", "category": "Vegetables", "image": "assets/products/vegetables_04.jpg", "price": 55, "old": 65, "unit": "500 g", "icon": "potato"}, {"id": 17, "name": "Cauliflower", "category": "Vegetables", "image": "assets/products/vegetables_05.jpg", "price": 69, "old": 82, "unit": "500 g", "icon": "capsicum"}, {"id": 18, "name": "Broccoli", "category": "Vegetables", "image": "assets/products/vegetables_06.jpg", "price": 35, "old": 45, "unit": "250 g", "icon": "spinach"}, {"id": 19, "name": "Carrot", "category": "Vegetables", "image": "assets/products/vegetables_07.jpg", "price": 49, "old": 60, "unit": "1 pc", "icon": "cauliflower"}, {"id": 20, "name": "Green Capsicum", "category": "Vegetables", "image": "assets/products/vegetables_08.jpg", "price": 89, "old": 105, "unit": "500 g", "icon": "peas"}, {"id": 21, "name": "Brinjal", "category": "Vegetables", "image": "assets/products/vegetables_09.jpg", "price": 39, "old": 48, "unit": "500 g", "icon": "cucumber"}, {"id": 22, "name": "Okra", "category": "Vegetables", "image": "assets/products/vegetables_10.jpg", "price": 48, "old": 58, "unit": "1 kg", "icon": "onion"}, {"id": 23, "name": "Cucumber", "category": "Vegetables", "image": "assets/products/vegetables_11.jpg", "price": 55, "old": 68, "unit": "500 g", "icon": "okra"}, {"id": 24, "name": "Bottle Gourd", "category": "Vegetables", "image": "assets/products/vegetables_12.jpg", "price": 59, "old": 72, "unit": "2 pcs", "icon": "corn"}, {"id": 25, "name": "Cheddar Cheese", "category": "Dairy", "image": "assets/products/dairy_01.jpg", "price": 32, "old": 35, "unit": "500 ml", "icon": "milk"}, {"id": 26, "name": "Strawberry Yogurt", "category": "Dairy", "image": "assets/products/dairy_02.jpg", "price": 35, "old": 39, "unit": "500 ml", "icon": "milk"}, {"id": 27, "name": "Fresh Milk", "category": "Dairy", "image": "assets/products/dairy_03.jpg", "price": 145, "old": 160, "unit": "200 g", "icon": "cheese"}, {"id": 28, "name": "Vanilla Ice Cream", "category": "Dairy", "image": "assets/products/dairy_04.jpg", "price": 45, "old": 52, "unit": "400 g", "icon": "curd"}, {"id": 29, "name": "Salted Butter", "category": "Dairy", "image": "assets/products/dairy_05.jpg", "price": 119, "old": 135, "unit": "200 g", "icon": "paneer"}, {"id": 30, "name": "Cottage Cheese", "category": "Dairy", "image": "assets/products/dairy_06.jpg", "price": 58, "old": 68, "unit": "100 g", "icon": "butter"}, {"id": 31, "name": "Sour Cream", "category": "Dairy", "image": "assets/products/dairy_07.jpg", "price": 95, "old": 110, "unit": "400 g", "icon": "yogurt"}, {"id": 32, "name": "Whipped Cream", "category": "Dairy", "image": "assets/products/dairy_08.jpg", "price": 68, "old": 78, "unit": "200 ml", "icon": "cream"}, {"id": 33, "name": "Kefir", "category": "Dairy", "image": "assets/products/dairy_09.jpg", "price": 35, "old": 42, "unit": "500 ml", "icon": "buttermilk"}, {"id": 34, "name": "Cheese Wedges", "category": "Dairy", "image": "assets/products/dairy_10.jpg", "price": 175, "old": 199, "unit": "200 g", "icon": "cheddar"}, {"id": 35, "name": "Creamy Yogurt", "category": "Dairy", "image": "assets/products/dairy_11.jpg", "price": 45, "old": 52, "unit": "250 ml", "icon": "lassi"}, {"id": 36, "name": "Full Cream Milk", "category": "Dairy", "image": "assets/products/dairy_12.jpg", "price": 189, "old": 220, "unit": "200 g", "icon": "mozzarella"}, {"id": 37, "name": "Lay's Cream & Onion", "category": "Snacks", "image": "assets/products/snacks_01.jpg", "price": 40, "old": 50, "unit": "100 g", "icon": "chips"}, {"id": 38, "name": "Bingo Tedhe Medhe", "category": "Snacks", "image": "assets/products/snacks_02.jpg", "price": 65, "old": 80, "unit": "200 g", "icon": "cookies"}, {"id": 39, "name": "Kurkure Masala Munch", "category": "Snacks", "image": "assets/products/snacks_03.jpg", "price": 55, "old": 65, "unit": "90 g", "icon": "popcorn"}, {"id": 40, "name": "Chupa Chups Candy", "category": "Snacks", "image": "assets/products/snacks_04.jpg", "price": 75, "old": 90, "unit": "200 g", "icon": "peanuts"}, {"id": 41, "name": "Kurkure Yummy Cheese", "category": "Snacks", "image": "assets/products/snacks_05.jpg", "price": 89, "old": 105, "unit": "150 g", "icon": "nachos"}, {"id": 42, "name": "Balaji Punjabi Tadka", "category": "Snacks", "image": "assets/products/snacks_06.jpg", "price": 179, "old": 210, "unit": "100 g", "icon": "cashews"}, {"id": 43, "name": "Oreo Chocolate Sandwich", "category": "Snacks", "image": "assets/products/snacks_07.jpg", "price": 55, "old": 65, "unit": "80 g", "icon": "puffs"}, {"id": 44, "name": "Haldiram Aloo Bhujia", "category": "Snacks", "image": "assets/products/snacks_08.jpg", "price": 79, "old": 95, "unit": "150 g", "icon": "crackers"}, {"id": 45, "name": "Lay's Sizzlin' Hot", "category": "Snacks", "image": "assets/products/snacks_09.jpg", "price": 159, "old": 185, "unit": "200 g", "icon": "trailmix"}, {"id": 46, "name": "Balaji Flamin' Hot Nachos", "category": "Snacks", "image": "assets/products/snacks_10.jpg", "price": 45, "old": 55, "unit": "50 g", "icon": "chocolate"}, {"id": 47, "name": "KitKat Milk Chocolate", "category": "Snacks", "image": "assets/products/snacks_11.jpg", "price": 129, "old": 150, "unit": "180 g", "icon": "granola"}, {"id": 48, "name": "Bounty Coconut Bar", "category": "Snacks", "image": "assets/products/snacks_12.jpg", "price": 85, "old": 99, "unit": "200 g", "icon": "mixture"}, {"id": 49, "name": "Coca-Cola Classic", "category": "Beverages", "image": "assets/products/beverages_01.jpg", "price": 45, "old": 50, "unit": "750 ml", "icon": "cola"}, {"id": 50, "name": "Pepsi Cola", "category": "Beverages", "image": "assets/products/beverages_02.jpg", "price": 110, "old": 130, "unit": "1 L", "icon": "juice"}, {"id": 51, "name": "Sprite Lemon-Lime", "category": "Beverages", "image": "assets/products/beverages_03.jpg", "price": 20, "old": 25, "unit": "1 L", "icon": "water"}, {"id": 52, "name": "Monster Energy", "category": "Beverages", "image": "assets/products/beverages_04.jpg", "price": 55, "old": 65, "unit": "500 ml", "icon": "icedtea"}, {"id": 53, "name": "7UP Lemon-Lime", "category": "Beverages", "image": "assets/products/beverages_05.jpg", "price": 45, "old": 55, "unit": "600 ml", "icon": "mangojuice"}, {"id": 54, "name": "Fanta Orange", "category": "Beverages", "image": "assets/products/beverages_06.jpg", "price": 89, "old": 105, "unit": "300 ml", "icon": "coffee"}, {"id": 55, "name": "Coca-Cola Zero Sugar", "category": "Beverages", "image": "assets/products/beverages_07.jpg", "price": 110, "old": 130, "unit": "250 ml", "icon": "energy"}, {"id": 56, "name": "Coca-Cola Classic Can", "category": "Beverages", "image": "assets/products/beverages_08.jpg", "price": 99, "old": 119, "unit": "20 bags", "icon": "tea"}, {"id": 57, "name": "Pepsi Can", "category": "Beverages", "image": "assets/products/beverages_09.jpg", "price": 65, "old": 75, "unit": "300 ml", "icon": "coconut"}, {"id": 58, "name": "Sprite Can", "category": "Beverages", "image": "assets/products/beverages_10.jpg", "price": 55, "old": 65, "unit": "750 ml", "icon": "sparkling"}, {"id": 59, "name": "Fanta Orange Can", "category": "Beverages", "image": "assets/products/beverages_11.jpg", "price": 115, "old": 135, "unit": "1 L", "icon": "applejuice"}, {"id": 60, "name": "7UP Can", "category": "Beverages", "image": "assets/products/beverages_12.jpg", "price": 75, "old": 90, "unit": "750 ml", "icon": "ginger"}, {"id": 61, "name": "Sourdough Loaf", "category": "Bakery", "image": "assets/products/bakery_01.jpg", "price": 45, "old": 50, "unit": "400 g", "icon": "bread"}, {"id": 62, "name": "Milk Bread", "category": "Bakery", "image": "assets/products/bakery_02.jpg", "price": 55, "old": 65, "unit": "400 g", "icon": "wheatbread"}, {"id": 63, "name": "Challah Bread", "category": "Bakery", "image": "assets/products/bakery_03.jpg", "price": 75, "old": 90, "unit": "2 pcs", "icon": "muffin"}, {"id": 64, "name": "Garlic Naan", "category": "Bakery", "image": "assets/products/bakery_04.jpg", "price": 99, "old": 115, "unit": "2 pcs", "icon": "croissant"}, {"id": 65, "name": "French Baguette", "category": "Bakery", "image": "assets/products/bakery_05.jpg", "price": 69, "old": 80, "unit": "2 pcs", "icon": "donut"}, {"id": 66, "name": "Whole Wheat Bread", "category": "Bakery", "image": "assets/products/bakery_06.jpg", "price": 85, "old": 99, "unit": "2 pcs", "icon": "cupcake"}, {"id": 67, "name": "Ciabatta", "category": "Bakery", "image": "assets/products/bakery_07.jpg", "price": 89, "old": 105, "unit": "200 g", "icon": "garlicbread"}, {"id": 68, "name": "Rye Bread", "category": "Bakery", "image": "assets/products/bakery_08.jpg", "price": 39, "old": 48, "unit": "6 pcs", "icon": "pav"}, {"id": 69, "name": "Sesame Bagel", "category": "Bakery", "image": "assets/products/bakery_09.jpg", "price": 129, "old": 149, "unit": "250 g", "icon": "cake"}, {"id": 70, "name": "Butter Croissant", "category": "Bakery", "image": "assets/products/bakery_10.jpg", "price": 95, "old": 110, "unit": "2 pcs", "icon": "cinnamon"}, {"id": 71, "name": "Brioche Loaf", "category": "Bakery", "image": "assets/products/bakery_11.jpg", "price": 49, "old": 59, "unit": "4 pcs", "icon": "bun"}, {"id": 72, "name": "Pita Bread", "category": "Bakery", "image": "assets/products/bakery_12.jpg", "price": 69, "old": 80, "unit": "400 g", "icon": "multigrain"}];
let cart=[],selectedCategory="All";
const categoryImages={Fruits:"assets/categories/fruits.jpg",Vegetables:"assets/categories/vegetables.jpg",Dairy:"assets/categories/dairy.jpg",Snacks:"assets/categories/snacks.jpg",Beverages:"assets/categories/beverages.jpg",Bakery:"assets/categories/bakery.jpg"};

const tabs=document.querySelectorAll(".bottom-nav button");
tabs.forEach(t=>t.addEventListener("click",()=>switchTab(t.dataset.tab)));

function switchTab(id){
 tabs.forEach(t=>t.classList.toggle("active",t.dataset.tab===id));
 document.querySelectorAll(".tab-page").forEach(p=>p.classList.toggle("active",p.id===id));
 if(id==="activity")renderCart();
 window.scrollTo({top:0,behavior:"smooth"});
}
function setCategory(cat,btn){
 selectedCategory=cat;
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active"); renderProducts();
}
function filterProducts(cat){
 selectedCategory=cat; switchTab("explore");
 document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.textContent===cat));
 renderProducts();
}
const colors={apple:"#e84b3c",banana:"#f4c542",orange:"#f28c28",grapes:"#7547a8",mango:"#f3a522",pomegranate:"#b52c3d",lime:"#79b83c",papaya:"#ef8a30",watermelon:"#4c9d4a",kiwi:"#8da65a",pear:"#9bb84c",strawberry:"#e84a52",broccoli:"#4c9b48",carrot:"#ed7a2d",tomato:"#df453c",potato:"#b9895b",capsicum:"#55a84d",spinach:"#3d9848",cauliflower:"#d9d7ca",peas:"#58a947",cucumber:"#62a54e",onion:"#b58d9c",okra:"#4d9c49",corn:"#f2c844",milk:"#8fc6e6",cheese:"#f4c44d",curd:"#f2eee2",paneer:"#f7f0d8",butter:"#f3c74e",yogurt:"#d9edf2",cream:"#fff4df",buttermilk:"#d8eef0",cheddar:"#eaa53c",lassi:"#f0c0c5",mozzarella:"#f7f2dc",chips:"#df8d30",cookies:"#b87b4d",popcorn:"#f4d55c",peanuts:"#b98242",nachos:"#e9ad35",cashews:"#d9b078",puffs:"#e8b34c",crackers:"#d8a66d",trailmix:"#8f6646",chocolate:"#6c402e",granola:"#c08b4d",mixture:"#d68937",cola:"#3d3d3d",juice:"#f39a31",water:"#8bc9ea",icedtea:"#b77949",mangojuice:"#f2a62e",coffee:"#765039",energy:"#e2bd31",tea:"#6b8b52",coconut:"#e8f2e4",sparkling:"#a9d7eb",applejuice:"#dc6541",ginger:"#c58a4e",bread:"#d5a264",wheatbread:"#b98a52",muffin:"#8b573c",croissant:"#e2aa55",donut:"#d986a0",cupcake:"#f0b3ba",garlicbread:"#d7a267",pav:"#d2a46d",cake:"#8d5b46",cinnamon:"#b56e43",bun:"#d5a76e",multigrain:"#a98156"};

function productSVG(icon){
 const c=colors[icon]||"#aaa";
 const shapes={
 apple:`<circle cx="42" cy="47" r="25" fill="${c}"/><path d="M43 22c4-11 13-13 19-10-1 8-8 12-19 10Z" fill="#4c9b47"/>`,
 banana:`<path d="M18 55c25 14 47 1 48-28" fill="none" stroke="${c}" stroke-width="15" stroke-linecap="round"/><path d="M63 27l5-6" stroke="#7b5b38" stroke-width="5" stroke-linecap="round"/>`,
 orange:`<circle cx="42" cy="43" r="27" fill="${c}"/><circle cx="34" cy="35" r="3" fill="#fff5"/>`,
 grapes:`<g fill="${c}"><circle cx="31" cy="31" r="10"/><circle cx="47" cy="31" r="10"/><circle cx="23" cy="46" r="10"/><circle cx="39" cy="46" r="10"/><circle cx="55" cy="46" r="10"/><circle cx="31" cy="61" r="10"/><circle cx="47" cy="61" r="10"/></g><path d="M42 22c4-10 11-13 18-10" stroke="#4c9b47" stroke-width="5" fill="none"/>`,
 mango:`<ellipse cx="43" cy="45" rx="25" ry="31" fill="${c}" transform="rotate(-18 43 45)"/><path d="M42 17c7-8 13-8 19-5" stroke="#4c9b47" stroke-width="5" fill="none"/>`,
 pomegranate:`<path d="M22 29h40v30a20 20 0 0 1-40 0Z" fill="${c}"/><path d="M29 28c5-10 21-10 26 0" fill="none" stroke="#9b2737" stroke-width="6"/>`,
 lime:`<circle cx="42" cy="45" r="27" fill="${c}"/><circle cx="33" cy="36" r="4" fill="#fff4"/>`,
 papaya:`<ellipse cx="43" cy="45" rx="18" ry="31" fill="${c}" transform="rotate(35 43 45)"/>`,
 watermelon:`<path d="M15 47a28 28 0 0 0 56 0Z" fill="${c}"/><path d="M15 47a28 28 0 0 0 56 0" fill="none" stroke="#e64b45" stroke-width="13"/><path d="M15 47a28 28 0 0 0 56 0" fill="none" stroke="#f4d8a5" stroke-width="3"/>`,
 kiwi:`<circle cx="42" cy="45" r="27" fill="#6b8d45"/><circle cx="42" cy="45" r="17" fill="#d9d56b"/><circle cx="42" cy="45" r="5" fill="#f5efe1"/>`,
 pear:`<path d="M43 18c-9 0-8 13-13 19-9 11-6 32 13 32s22-21 13-32c-5-6-4-19-13-19Z" fill="${c}"/>`,
 strawberry:`<path d="M18 31c2-17 48-17 50 0 1 18-24 35-25 35S17 49 18 31Z" fill="${c}"/><path d="M28 20l14 8 14-8" stroke="#4c9b47" stroke-width="6" fill="none"/>`,
 broccoli:`<g fill="${c}"><circle cx="27" cy="37" r="15"/><circle cx="44" cy="30" r="17"/><circle cx="59" cy="39" r="14"/></g><path d="M37 44v23h13V44" fill="#6b9b48"/>`,
 carrot:`<path d="M42 24l18 41-18 8-18-8Z" fill="${c}"/><path d="M42 25c-8-9-15-7-19-2M42 25c8-9 15-7 19-2" stroke="#4c9b47" stroke-width="5" fill="none"/>`,
 tomato:`<circle cx="42" cy="46" r="27" fill="${c}"/><path d="M42 21l7 10 12-2" stroke="#4c9b47" stroke-width="6" fill="none"/>`,
 potato:`<ellipse cx="42" cy="45" rx="29" ry="22" fill="${c}" transform="rotate(-12 42 45)"/><circle cx="29" cy="40" r="2" fill="#8c633f"/>`,
 capsicum:`<path d="M21 29c0-12 42-12 42 0v27c0 13-42 13-42 0Z" fill="${c}"/><path d="M42 20V11" stroke="#4c9b47" stroke-width="6"/>`,
 spinach:`<path d="M42 70C10 58 17 20 43 20c27 0 32 38-1 50Z" fill="${c}"/><path d="M42 22v45M42 45L26 33M42 53l17-15" stroke="#b9e0a7" stroke-width="2"/>`,
 cauliflower:`<g fill="${c}"><circle cx="27" cy="39" r="13"/><circle cx="43" cy="31" r="15"/><circle cx="58" cy="40" r="13"/></g><path d="M34 43h18v25H34Z" fill="#6f9e48"/>`,
 peas:`<path d="M18 48c12-25 36-25 48 0-12 20-36 20-48 0Z" fill="#75ad4c"/><circle cx="30" cy="48" r="6" fill="#d7edaa"/><circle cx="44" cy="44" r="6" fill="#d7edaa"/><circle cx="55" cy="50" r="6" fill="#d7edaa"/>`,
 cucumber:`<rect x="20" y="28" width="45" height="31" rx="15" fill="${c}" transform="rotate(-18 42 44)"/><path d="M27 34l30 19M25 45l28 14" stroke="#d7efb5" stroke-width="3"/>`,
 onion:`<path d="M42 18c-17 8-24 22-19 39 5 18 33 18 38 0 5-17-2-31-19-39Z" fill="${c}"/><path d="M42 18v-7" stroke="#5d934d" stroke-width="5"/>`,
 okra:`<path d="M24 59c-9-19 2-37 18-37 16 0 25 18 16 37Z" fill="${c}" transform="rotate(-25 42 42)"/>`,
 corn:`<path d="M28 22c-10 18-7 42 14 48 21-6 24-30 14-48Z" fill="${c}"/><path d="M29 28c-14-6-17 3-17 13 5-1 10-4 14-9M55 28c14-6 17 3 17 13-5-1-10-4-14-9" fill="#4c9b47"/>`,
 milk:`<path d="M28 21h28v44H28Z" fill="#fff" stroke="#7db8db" stroke-width="3"/><path d="M28 29h28" stroke="#7db8db" stroke-width="6"/><path d="M35 15h14v8H35Z" fill="#7db8db"/>`,
 cheese:`<path d="M20 58l42-27v34H20Z" fill="${c}"/><circle cx="43" cy="51" r="4" fill="#fff6"/><circle cx="54" cy="57" r="3" fill="#fff6"/>`,
 curd:`<path d="M24 28h36l-4 37H28Z" fill="${c}"/><path d="M24 28c6-7 30-7 36 0" fill="#fff" stroke="#d5d0c4" stroke-width="3"/>`,
 paneer:`<rect x="21" y="26" width="43" height="39" rx="5" fill="${c}"/><path d="M28 34h29M28 44h29M28 54h29" stroke="#d9cda7" stroke-width="3"/>`,
 butter:`<rect x="18" y="30" width="48" height="28" rx="5" fill="${c}"/><path d="M23 36h38v16H23Z" fill="#ffe58b"/>`,
 yogurt:`<path d="M24 27h36v37H24Z" fill="${c}"/><path d="M21 27h42" stroke="#6da9c0" stroke-width="5"/>`,
 cream:`<path d="M27 24h30v41H27Z" fill="${c}"/><path d="M27 30h30" stroke="#e7b86c" stroke-width="5"/>`,
 buttermilk:`<path d="M29 23h26v43H29Z" fill="${c}"/><path d="M29 31h26" stroke="#80c5c9" stroke-width="5"/>`,
 cheddar:`<path d="M20 58l44-26v34H20Z" fill="${c}"/><circle cx="42" cy="52" r="4" fill="#fff6"/>`,
 lassi:`<path d="M28 23h28l-4 43H32Z" fill="${c}"/><path d="M29 31h26" stroke="#d56f82" stroke-width="5"/>`,
 mozzarella:`<rect x="22" y="28" width="40" height="35" rx="6" fill="${c}"/><circle cx="34" cy="43" r="5" fill="#fff"/><circle cx="50" cy="52" r="4" fill="#fff"/>`,
 chips:`<path d="M25 20h34l-3 47H28Z" fill="${c}"/><path d="M31 31h22M31 40h22" stroke="#fff8" stroke-width="3"/>`,
 cookies:`<circle cx="42" cy="45" r="28" fill="${c}"/><circle cx="30" cy="37" r="4" fill="#6d442c"/><circle cx="50" cy="35" r="4" fill="#6d442c"/><circle cx="44" cy="54" r="4" fill="#6d442c"/>`,
 popcorn:`<path d="M26 36h33l-4 30H30Z" fill="#e65d52"/><g fill="#f5d05b"><circle cx="29" cy="32" r="10"/><circle cx="43" cy="28" r="11"/><circle cx="56" cy="33" r="10"/></g>`,
 peanuts:`<path d="M31 25c-12 4-11 17 0 20-11 3-12 17 0 20 9 2 15-6 11-15 4-9-2-27-11-25Z" fill="${c}"/>`,
 nachos:`<path d="M20 28l44 0-22 38Z" fill="${c}"/><circle cx="35" cy="39" r="2" fill="#fff"/><circle cx="48" cy="47" r="2" fill="#fff"/>`,
 cashews:`<path d="M58 30c-25-12-37 16-22 31 10 10 26 0 19-10-6-8-16-5-17-12-1-7 11-6 20-2Z" fill="${c}"/>`,
 puffs:`<path d="M23 35c7-17 25-18 36-5 10 12-1 32-17 32-17 0-27-13-19-27Z" fill="${c}"/>`,
 crackers:`<circle cx="42" cy="45" r="28" fill="${c}"/><path d="M29 45h26M42 32v26" stroke="#fff8" stroke-width="3"/>`,
 trailmix:`<circle cx="42" cy="45" r="28" fill="${c}"/><circle cx="30" cy="37" r="5" fill="#e5bb76"/><circle cx="48" cy="34" r="5" fill="#6c422f"/><circle cx="50" cy="53" r="5" fill="#d5a85f"/>`,
 chocolate:`<rect x="18" y="25" width="48" height="42" rx="5" fill="${c}"/><path d="M34 25v42M50 25v42M18 39h48M18 53h48" stroke="#fff2" stroke-width="2"/>`,
 granola:`<rect x="20" y="25" width="44" height="42" rx="6" fill="${c}"/><path d="M28 37h28M28 47h20" stroke="#fff7" stroke-width="3"/>`,
 mixture:`<path d="M22 29h40v37H22Z" fill="${c}"/><circle cx="33" cy="42" r="4" fill="#f6c76b"/><circle cx="49" cy="51" r="4" fill="#e9b28a"/>`,
 cola:`<path d="M28 22h28v45H28Z" fill="${c}"/><path d="M28 34h28v13H28Z" fill="#fff"/>`,
 juice:`<path d="M25 23h34v44H25Z" fill="${c}"/><path d="M25 34h34" stroke="#fff8" stroke-width="5"/>`,
 water:`<path d="M30 22h24v45H30Z" fill="${c}"/><path d="M30 31h24" stroke="#fff" stroke-width="4"/>`,
 icedtea:`<path d="M29 24h26v43H29Z" fill="${c}"/><path d="M29 34h26" stroke="#fff8" stroke-width="4"/>`,
 mangojuice:`<path d="M25 23h34v44H25Z" fill="${c}"/><circle cx="42" cy="47" r="9" fill="#fff6"/>`,
 coffee:`<path d="M24 34h36v25H24Z" fill="${c}"/><path d="M60 39c14-2 14 15 0 14" fill="none" stroke="#765039" stroke-width="5"/><path d="M31 28h20" stroke="#765039" stroke-width="4"/>`,
 energy:`<path d="M28 20h28l-4 47H32Z" fill="${c}"/><path d="M44 28l-7 17h8l-5 14 13-20h-8Z" fill="#fff"/>`,
 tea:`<path d="M23 35h36v25H23Z" fill="${c}"/><path d="M59 40c14-3 14 14 0 13" fill="none" stroke="#6b8b52" stroke-width="5"/>`,
 coconut:`<ellipse cx="42" cy="45" rx="27" ry="30" fill="${c}"/><path d="M27 24c10-8 25-8 31 0" stroke="#8e9e76" stroke-width="5" fill="none"/>`,
 sparkling:`<path d="M28 22h28v45H28Z" fill="${c}"/><path d="M34 34l4-7M45 35l4-8M39 48l4-8" stroke="#fff" stroke-width="3"/>`,
 applejuice:`<path d="M25 23h34v44H25Z" fill="${c}"/><path d="M25 34h34" stroke="#fff8" stroke-width="5"/>`,
 ginger:`<path d="M25 23h34v44H25Z" fill="${c}"/><path d="M25 34h34" stroke="#fff8" stroke-width="5"/>`,
 bread:`<path d="M20 45c0-17 44-17 44 0v21H20Z" fill="${c}"/><path d="M27 43h30" stroke="#f0c080" stroke-width="3"/>`,
 wheatbread:`<path d="M20 45c0-17 44-17 44 0v21H20Z" fill="${c}"/><path d="M28 48h28M30 55h22" stroke="#e6c58e" stroke-width="3"/>`,
 muffin:`<path d="M23 36h38l-5 30H28Z" fill="${c}"/><circle cx="32" cy="30" r="11" fill="#a96c4b"/><circle cx="50" cy="30" r="11" fill="#a96c4b"/>`,
 croissant:`<path d="M17 49c4-28 47-31 51-4-13 18-39 18-51 4Z" fill="${c}"/><path d="M29 34c-3 10 1 17 8 21M43 31c-2 10 2 18 8 21" stroke="#f2d08e" stroke-width="4"/>`,
 donut:`<circle cx="42" cy="45" r="26" fill="${c}"/><circle cx="42" cy="45" r="9" fill="#f8f6f2"/><path d="M27 34l7 4M48 31l5 5M52 52l5 3" stroke="#fff" stroke-width="3"/>`,
 cupcake:`<path d="M23 38h38l-5 29H28Z" fill="#d68a96"/><path d="M25 38c0-22 34-22 36 0Z" fill="${c}"/><circle cx="42" cy="26" r="4" fill="#fff"/>`,
 garlicbread:`<path d="M18 51c10-28 38-31 50-7-10 17-35 22-50 7Z" fill="${c}"/><path d="M28 44l28 5M26 52l25 5" stroke="#f1d49e" stroke-width="4"/>`,
 pav:`<circle cx="30" cy="44" r="16" fill="${c}"/><circle cx="54" cy="44" r="16" fill="${c}"/><path d="M25 37h34" stroke="#f1c88c" stroke-width="3"/>`,
 cake:`<path d="M20 36h44v31H20Z" fill="${c}"/><path d="M20 36c8-12 36-12 44 0" fill="#d88b6e"/><path d="M27 49h30" stroke="#f3c5a8" stroke-width="4"/>`,
 cinnamon:`<circle cx="42" cy="46" r="25" fill="${c}"/><path d="M30 47c12-17 24 9 27-7" fill="none" stroke="#efc38b" stroke-width="5"/>`,
 bun:`<circle cx="42" cy="45" r="26" fill="${c}"/><path d="M26 43h32" stroke="#efc68c" stroke-width="3"/>`,
 multigrain:`<path d="M20 45c0-17 44-17 44 0v21H20Z" fill="${c}"/><circle cx="32" cy="48" r="3" fill="#e7c793"/><circle cx="45" cy="54" r="3" fill="#e7c793"/><circle cx="54" cy="45" r="3" fill="#e7c793"/>`
 };
 return `<svg class="product-icon" viewBox="0 0 84 84" aria-hidden="true">${shapes[icon]||`<circle cx="42" cy="42" r="26" fill="${c}"/>`}</svg>`;
}
function card(p){
 return `<article class="product"><div class="product-image"><img class="real-product-image" src="${p.image}" alt="${p.name}"><span class="discount">${Math.round((1-p.price/p.old)*100)}% OFF</span></div>
 <div class="product-info"><h3>${p.name}</h3><small>${p.unit} • ${p.category}</small>
 <div class="price-row"><div><b>₹${p.price}</b><span class="old">₹${p.old}</span></div><button class="add" onclick="addToCart(${p.id})">ADD</button></div></div></article>`;
}
function renderCategoryShowcase(){
 const box=document.getElementById("categoryShowcase");
 if(!box)return;
 if(selectedCategory==="All"){box.innerHTML="";box.classList.remove("visible");return;}
 const image=categoryImages[selectedCategory];
 box.innerHTML=`<div class="showcase-image"><img src="${image}" alt="${selectedCategory} products"></div><div class="showcase-copy"><span class="eyebrow">QUICKBASKET CATEGORY</span><h2>${selectedCategory}</h2><p>Browse all 12 ${selectedCategory.toLowerCase()} products with prices and quick add-to-basket controls.</p></div>`;
 box.classList.add("visible");
}
function renderProducts(){
 renderCategoryShowcase();
 const q=document.getElementById("searchInput").value.toLowerCase();
 const list=products.filter(p=>(selectedCategory==="All"||p.category===selectedCategory)&&p.name.toLowerCase().includes(q));
 document.getElementById("productGrid").innerHTML=list.map(card).join("")||"<div class='empty'>No products found.</div>";
}
function renderHome(){document.getElementById("homeProducts").innerHTML=products.slice(0,4).map(card).join("")}
function addToCart(id){
 const p=products.find(x=>x.id===id),item=cart.find(x=>x.id===id);
 item?item.qty++:cart.push({...p,qty:1});
 updateCount();
 renderCart();
 showCartToast(p);
}

function showCartToast(p){
 let toast=document.getElementById("cartToast");
 if(!toast){
   toast=document.createElement("div");
   toast.id="cartToast";
   toast.className="cart-toast";
   document.body.appendChild(toast);
 }
 toast.innerHTML=`<div class="toast-product"><img src="${p.image}" alt="${p.name}"><div><b>${p.name}</b><small>Added to your basket</small></div></div><button onclick="switchTab('activity');hideCartToast()">View Cart</button>`;
 toast.classList.add("show");
 clearTimeout(window.cartToastTimer);
 window.cartToastTimer=setTimeout(hideCartToast,5000);
}
function hideCartToast(){
 const toast=document.getElementById("cartToast");
 if(toast)toast.classList.remove("show");
}

function updateCount(){document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0)}
function changeQty(id,d){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=d;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);updateCount();renderCart()}
function renderCart(){
 const box=document.getElementById("cartBox");
 if(!cart.length){box.innerHTML="<div class='cart-box empty'><div style='font-size:42px'>🛒</div><h2>Your basket is empty</h2><p>Add fresh products from Explore.</p><button class='orange-btn' onclick=\"switchTab('explore')\">Start shopping</button></div>";return}
 const subtotal=cart.reduce((a,x)=>a+x.price*x.qty,0),delivery=subtotal>=499?0:25,total=subtotal+delivery;
 box.innerHTML=`<div class="cart-box"><h2>Basket <small style="color:#999;font-size:12px">(${cart.reduce((a,x)=>a+x.qty,0)} items)</small></h2>
 ${cart.map(x=>`<div class="cart-item"><span class="cart-thumb"><img src="${x.image}" alt="${x.name}"></span><div class="cart-item-main"><b>${x.name}</b><small>${x.unit}</small></div><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button><b>${x.qty}</b><button onclick="changeQty(${x.id},1)">+</button></div><b>₹${x.price*x.qty}</b></div>`).join("")}
 <div class="bill"><div><span>Subtotal</span><b>₹${subtotal}</b></div><div><span>Delivery fee</span><b>${delivery?"₹"+delivery:"FREE"}</b></div><div><span>Discount</span><b style="color:#399334">− ₹0</b></div><div class="total"><span>Total</span><b>₹${total}</b></div></div>
 <button class="checkout" onclick="checkout()">Proceed to checkout • ₹${total}</button></div>`;
}
function checkout(){alert("Order placed successfully! 🎉\nYour QuickBasket delivery will arrive in 10–20 minutes.");cart=[];updateCount();renderCart()}

let addresses = [
  {id:1,label:"Home",place:"Chengalpattu",line:"12, GST Road, Chengalpattu, Tamil Nadu"},
  {id:2,label:"Work",place:"Tambaram",line:"45, GST Road, Tambaram, Chennai, Tamil Nadu"}
];
let selectedAddressId = 1;

function openAddressModal(){
  const modal=document.getElementById("addressModal");
  if(!modal)return;
  renderAddresses();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}
function closeAddressModal(){
  const modal=document.getElementById("addressModal");
  if(!modal)return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  hideAddressForm();
}
function renderAddresses(){
  const box=document.getElementById("addressList");
  if(!box)return;
  box.innerHTML=addresses.map(a=>`<div class="address-card ${a.id===selectedAddressId?'selected':''}">
    <button class="address-select" onclick="selectAddress(${a.id})">
      <span class="address-radio">${a.id===selectedAddressId?'✓':''}</span>
      <span class="address-card-icon ${a.label.toLowerCase()}-icon">${a.label==='Home'?'⌂':a.label==='Work'?'▣':'⌖'}</span>
      <span class="address-card-text"><b>${a.label}</b><strong>${a.place}</strong><small>${a.line}</small></span>
    </button>
    <button class="address-edit" onclick="editAddress(${a.id})" aria-label="Edit ${a.label}">Edit</button>
    <button class="address-delete" onclick="deleteAddress(${a.id})" aria-label="Delete ${a.label}">×</button>
  </div>`).join("");
}
function selectAddress(id){
  const a=addresses.find(x=>x.id===id); if(!a)return;
  selectedAddressId=id;
  document.getElementById("topAddress").textContent=`${a.label} • ${a.place}`;
  document.getElementById("savedAddressSummary").textContent=`${a.label} • ${a.place}`;
  renderAddresses();
}
function showAddressForm(){
  const f=document.getElementById("addressForm"); f.hidden=false;
  document.getElementById("addressLabel").value="Home";
  document.getElementById("addressPlace").value="";
  document.getElementById("addressLine").value="";
  setTimeout(()=>document.getElementById("addressPlace").focus(),50);
}
function hideAddressForm(){document.getElementById("addressForm").hidden=true}
function editAddress(id){
  const a=addresses.find(x=>x.id===id); if(!a)return;
  showAddressForm();
  document.getElementById("addressLabel").value=a.label;
  document.getElementById("addressPlace").value=a.place;
  document.getElementById("addressLine").value=a.line;
  document.getElementById("addressForm").dataset.editId=id;
}
function saveAddress(e){
  e.preventDefault();
  const form=document.getElementById("addressForm");
  const data={label:document.getElementById("addressLabel").value,place:document.getElementById("addressPlace").value.trim(),line:document.getElementById("addressLine").value.trim()};
  const editId=Number(form.dataset.editId||0);
  if(editId){ const a=addresses.find(x=>x.id===editId); Object.assign(a,data); selectedAddressId=editId; delete form.dataset.editId; }
  else { const id=Date.now(); addresses.push({id,...data}); selectedAddressId=id; }
  selectAddress(selectedAddressId); hideAddressForm(); renderAddresses();
}
function deleteAddress(id){
  if(addresses.length===1){alert("Keep at least one saved address.");return;}
  addresses=addresses.filter(a=>a.id!==id);
  if(selectedAddressId===id) selectedAddressId=addresses[0].id;
  selectAddress(selectedAddressId);
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAddressModal()});
document.addEventListener("DOMContentLoaded",()=>{selectAddress(selectedAddressId)});

renderHome();renderProducts();updateCount();

/* Editable Profile */
let profileData=JSON.parse(localStorage.getItem("qbProfileData")||'{"name":"Syam Sundhar Jakki","email":"syamsundhar@gmail.com","phone":"+91 98765 43210"}');
let paymentMethods=JSON.parse(localStorage.getItem("qbPayments")||'[{"id":1,"type":"UPI","name":"Google Pay"},{"id":2,"type":"Card","name":"HDFC Visa •••• 2481"}]');
let notificationPrefs=JSON.parse(localStorage.getItem("qbNotifications")||'{"orders":true,"offers":true,"delivery":true}');
let appSettings=JSON.parse(localStorage.getItem("qbSettings")||'{"language":"English","theme":"Light","delivery":"Fastest available"}');
let editingPaymentId=null;
function openProfileModal(id){const m=document.getElementById(id);if(m){m.classList.add("open");m.setAttribute("aria-hidden","false")}}
function closeProfileModal(id){const m=document.getElementById(id);if(m){m.classList.remove("open");m.setAttribute("aria-hidden","true")}}
function updateProfileHeader(){const n=document.querySelector(".profile-name"),em=document.querySelector(".profile-email"),av=document.getElementById("profileAvatar");if(n)n.textContent=profileData.name;if(em)em.textContent=profileData.email;if(av)av.textContent=profileData.name.split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase()}
function openAccountModal(){accountName.value=profileData.name;accountEmail.value=profileData.email;accountPhone.value=profileData.phone;openProfileModal("accountModal")}
function saveAccount(e){e.preventDefault();profileData={name:accountName.value.trim(),email:accountEmail.value.trim(),phone:accountPhone.value.trim()};localStorage.setItem("qbProfileData",JSON.stringify(profileData));updateProfileHeader();accountSummary.textContent=profileData.phone;closeProfileModal("accountModal")}
function openPaymentModal(){cancelPaymentEdit();renderPayments();openProfileModal("paymentModal")}
function renderPayments(){paymentList.innerHTML=paymentMethods.map(p=>`<div class="payment-row"><span class="payment-type">${p.type}</span><div><b>${p.name}</b><small>${p.type==="Card"?"Secure card payment":p.type==="UPI"?"Instant UPI payment":"Wallet payment"}</small></div><button class="small-action" onclick="editPayment(${p.id})">Edit</button><button class="small-action danger" onclick="deletePayment(${p.id})">Remove</button></div>`).join("");paymentSummary.textContent=paymentMethods.length+" saved method"+(paymentMethods.length===1?"":"s")}
function savePayment(e){e.preventDefault();const type=paymentType.value,name=paymentName.value.trim();if(!name)return;if(editingPaymentId!==null){const item=paymentMethods.find(p=>p.id===editingPaymentId);if(item){item.type=type;item.name=name}}else{paymentMethods.push({id:Date.now(),type,name})}localStorage.setItem("qbPayments",JSON.stringify(paymentMethods));cancelPaymentEdit();renderPayments()}
function editPayment(id){const p=paymentMethods.find(x=>x.id===id);if(!p)return;editingPaymentId=id;paymentType.value=p.type;paymentName.value=p.name;paymentFormTitle.textContent="Edit payment method";paymentSubmit.textContent="Save payment";paymentCancel.hidden=false;paymentName.focus()}
function cancelPaymentEdit(){editingPaymentId=null;if(typeof paymentType!=="undefined")paymentType.value="UPI";if(typeof paymentName!=="undefined")paymentName.value="";if(typeof paymentFormTitle!=="undefined")paymentFormTitle.textContent="Add payment method";if(typeof paymentSubmit!=="undefined")paymentSubmit.textContent="+ Add method";if(typeof paymentCancel!=="undefined")paymentCancel.hidden=true}
function deletePayment(id){paymentMethods=paymentMethods.filter(p=>p.id!==id);localStorage.setItem("qbPayments",JSON.stringify(paymentMethods));if(editingPaymentId===id)cancelPaymentEdit();renderPayments()}
function openNotificationModal(){notifyOrders.checked=notificationPrefs.orders;notifyOffers.checked=notificationPrefs.offers;notifyDelivery.checked=notificationPrefs.delivery;openProfileModal("notificationModal")}
function saveNotifications(){notificationPrefs={orders:notifyOrders.checked,offers:notifyOffers.checked,delivery:notifyDelivery.checked};localStorage.setItem("qbNotifications",JSON.stringify(notificationPrefs));const n=Object.values(notificationPrefs).filter(Boolean).length;notificationSummary.textContent=n+" notification"+(n===1?"":"s")+" enabled"}
function openSettingsModal(){settingLanguage.value=appSettings.language;settingTheme.value=appSettings.theme;settingDelivery.value=appSettings.delivery;openProfileModal("settingsModal")}
function saveSettings(){appSettings={language:settingLanguage.value,theme:settingTheme.value,delivery:settingDelivery.value};localStorage.setItem("qbSettings",JSON.stringify(appSettings));settingsSummary.textContent=appSettings.language+" • "+appSettings.theme;document.body.classList.toggle("dark-mode",appSettings.theme==="Dark")}
function loadProfileData(){updateProfileHeader();accountSummary.textContent=profileData.phone;renderPayments();saveNotifications();settingsSummary.textContent=appSettings.language+" • "+appSettings.theme;document.body.classList.toggle("dark-mode",appSettings.theme==="Dark")}
document.addEventListener("DOMContentLoaded",loadProfileData);
