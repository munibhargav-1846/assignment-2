/* =====================================================
   BOOKMYSHOW STYLE APP
   ===================================================== */


/* ================= MOVIE DATA ================= */

const movies = [
    {
        id: 1,
        title: "Leo",
        language: "Tamil",
        genre: "Action, Thriller",
        duration: "2h 44m",
        rating: "8.2",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900",
        description:
            "A peaceful life is disturbed when a mysterious past comes back to haunt a man."
    },

    {
        id: 2,
        title: "Retro",
        language: "Tamil",
        genre: "Action, Drama",
        duration: "2h 35m",
        rating: "8.0",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900",
        description:
            "A stylish action drama filled with family, love, revenge and unexpected twists."
    },

    {
        id: 3,
        title: "Avengers: Endgame",
        language: "English",
        genre: "Action, Adventure",
        duration: "3h 02m",
        rating: "8.9",
        poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=900",
        description:
            "The Avengers unite for one final battle to restore what was lost."
    },

    {
        id: 4,
        title: "Pushpa",
        language: "Telugu",
        genre: "Action, Drama",
        duration: "2h 59m",
        rating: "8.1",
        poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=900",
        description:
            "An ambitious man rises through the world of red sandalwood smuggling."
    },

    {
        id: 5,
        title: "Interstellar",
        language: "English",
        genre: "Sci-Fi, Adventure",
        duration: "2h 49m",
        rating: "8.7",
        poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900",
        description:
            "Explorers travel through space searching for a new home for humanity."
    },

    {
        id: 6,
        title: "Kantara",
        language: "Kannada",
        genre: "Action, Drama",
        duration: "2h 28m",
        rating: "8.5",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900",
        description:
            "A village faces a powerful conflict involving tradition, land and destiny."
    },

    {
        id: 7,
        title: "Jawan",
        language: "Hindi",
        genre: "Action, Thriller",
        duration: "2h 49m",
        rating: "8.0",
        poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=900",
        description:
            "A man sets out on a mission to correct social injustice."
    },

    {
        id: 8,
        title: "KGF",
        language: "Kannada",
        genre: "Action",
        duration: "2h 36m",
        rating: "8.4",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900",
        description:
            "A powerful man rises from poverty to become a legendary figure."
    }
];


/* ================= EVENT DATA ================= */

const events = [
    {
        id: 101,
        title: "Comedy Night",
        type: "Comedy",
        location: "Chennai",
        price: 499,
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=900"
    },

    {
        id: 102,
        title: "Music Festival",
        type: "Music",
        location: "Bengaluru",
        price: 799,
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900"
    },

    {
        id: 103,
        title: "Stand Up Show",
        type: "Comedy",
        location: "Hyderabad",
        price: 399,
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=900"
    },

    {
        id: 104,
        title: "Live Concert",
        type: "Music",
        location: "Mumbai",
        price: 999,
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900"
    }
];


/* ================= SPORTS DATA ================= */

const sports = [
    {
        title: "Cricket",
        description: "Live cricket matches",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900"
    },

    {
        title: "Football",
        description: "Football matches",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=900"
    },

    {
        title: "Badminton",
        description: "Badminton events",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900"
    },

    {
        title: "Running",
        description: "Marathons & runs",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900"
    }
];


/* ================= VARIABLES ================= */

let selectedMovie = null;
let selectedSeats = [];
let selectedTime = "";
let selectedDate = "Today";
let selectedPayment = "";

const ticketPrice = 220;


/* ================= PAGE LOAD ================= */

document.addEventListener("DOMContentLoaded", function () {

    renderMovies(movies);
    renderEvents();
    renderSports();
    createSeats();
    setDates();
    loadCity();

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", searchContent);
    }

});


/* ================= MOVIES ================= */

function renderMovies(list) {

    const grid = document.getElementById("movieGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-results">
                <h3>No movies found</h3>
                <p>Try searching for another movie.</p>
            </div>
        `;

        return;
    }

    list.forEach(function (movie) {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `
            <img
                src="${movie.poster}"
                alt="${movie.title}"
                onerror="this.src='https://via.placeholder.com/400x550?text=Movie'"
            >

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>
                    ${movie.language} • ${movie.genre}
                </p>

                <p>
                    ${movie.duration}
                </p>

                <span class="rating">
                    ⭐ ${movie.rating}
                </span>

                <button
                    class="book-btn"
                    onclick="openMovieDetails(${movie.id})"
                >
                    View Details
                </button>

            </div>
        `;

        grid.appendChild(card);

    });
}


/* ================= EVENTS ================= */

function renderEvents() {

    const grid = document.getElementById("eventGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    events.forEach(function (event) {

        const card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML = `
            <img
                src="${event.image}"
                alt="${event.title}"
                onerror="this.src='https://via.placeholder.com/500x300?text=Event'"
            >

            <div class="event-info">

                <h3>${event.title}</h3>

                <p>🎭 ${event.type}</p>

                <p>📍 ${event.location}</p>

                <p>Starting ₹${event.price}</p>

                <button
                    class="book-btn"
                    onclick="bookEvent(${event.id})"
                >
                    Book Now
                </button>

            </div>
        `;

        grid.appendChild(card);

    });
}


/* ================= SPORTS ================= */

function renderSports() {

    const grid = document.getElementById("sportsGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    sports.forEach(function (sport) {

        const card = document.createElement("div");

        card.className = "sport-card";

        card.style.backgroundImage =
            "linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.75)), url('" +
            sport.image +
            "')";

        card.innerHTML = `
            <h3>${sport.title}</h3>
            <p>${sport.description}</p>
        `;

        grid.appendChild(card);

    });
}


/* ================= MOVIE DETAILS ================= */

function openMovieDetails(movieId) {

    const movie = movies.find(function (item) {
        return item.id === movieId;
    });

    if (!movie) {
        return;
    }

    selectedMovie = movie;

    hideAllPages();

    const detailsPage = document.getElementById("detailsPage");

    if (!detailsPage) {
        return;
    }

    detailsPage.classList.remove("hidden");

    const content = document.getElementById("detailsContent");

    if (!content) {
        return;
    }

    content.innerHTML = `
        <div class="details-hero">

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                onerror="this.src='https://via.placeholder.com/500x700?text=Movie'"
            >

            <div class="details-text">

                <h1>${movie.title}</h1>

                <div class="detail-rating">
                    ⭐ ${movie.rating}/10
                </div>

                <p>
                    <strong>Language:</strong>
                    ${movie.language}
                </p>

                <p>
                    <strong>Genre:</strong>
                    ${movie.genre}
                </p>

                <p>
                    <strong>Duration:</strong>
                    ${movie.duration}
                </p>

                <p>
                    ${movie.description}
                </p>

                <button
                    class="detail-book"
                    onclick="openBooking(${movie.id})"
                >
                    Book Tickets
                </button>

                <button
                    class="back-btn"
                    onclick="goHome()"
                >
                    ← Back
                </button>

            </div>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= BOOKING ================= */

function openBooking(movieId) {

    const movie = movies.find(function (item) {
        return item.id === movieId;
    });

    if (!movie) {
        return;
    }

    selectedMovie = movie;
    selectedSeats = [];
    selectedTime = "";
    selectedDate = "Today";

    hideAllPages();

    const bookingPage = document.getElementById("bookingPage");

    if (!bookingPage) {
        return;
    }

    bookingPage.classList.remove("hidden");

    const bookingMovieInfo =
        document.getElementById("bookingMovieInfo");

    if (bookingMovieInfo) {

        bookingMovieInfo.innerHTML = `
            <div class="booking-info">

                <h2>${movie.title}</h2>

                <p>
                    ${movie.language} • ${movie.genre}
                </p>

                <p>
                    Ticket Price: ₹${ticketPrice}
                </p>

            </div>
        `;

    }

    document.querySelectorAll(".date")
        .forEach(function (button, index) {

            button.classList.toggle(
                "active",
                index === 0
            );

        });

    document.querySelectorAll(".showtimes button")
        .forEach(function (button) {

            button.classList.remove("selected");

        });

    createSeats();

    updateBookingSummary();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= SEATS ================= */

function createSeats() {

    const layout = document.getElementById("seatLayout");

    if (!layout) {
        return;
    }

    layout.innerHTML = "";

    const rows = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ];

    rows.forEach(function (row, rowIndex) {

        const rowDiv = document.createElement("div");

        rowDiv.className = "seat-row";

        for (let number = 1; number <= 10; number++) {

            const seatName = row + number;

            const seat = document.createElement("button");

            seat.className = "seat";

            seat.textContent = number;

            seat.dataset.seat = seatName;

            if (
                (rowIndex === 1 && number === 3) ||
                (rowIndex === 2 && number === 7) ||
                (rowIndex === 4 && number === 5) ||
                (rowIndex === 5 && number === 2)
            ) {

                seat.classList.add("occupied");

                seat.disabled = true;

            }

            seat.addEventListener(
                "click",
                function () {

                    toggleSeat(
                        seatName,
                        seat
                    );

                }
            );

            rowDiv.appendChild(seat);

        }

        layout.appendChild(rowDiv);

    });
}


/* ================= SELECT SEAT ================= */

function toggleSeat(seatName, seat) {

    if (seat.classList.contains("occupied")) {
        return;
    }

    const index =
        selectedSeats.indexOf(seatName);

    if (index !== -1) {

        selectedSeats.splice(
            index,
            1
        );

        seat.classList.remove("selected");

    }

    else {

        if (selectedSeats.length >= 8) {

            alert(
                "Maximum 8 seats can be selected."
            );

            return;
        }

        selectedSeats.push(seatName);

        seat.classList.add("selected");

    }

    updateBookingSummary();
}


/* ================= SUMMARY ================= */

function updateBookingSummary() {

    const seats =
        document.getElementById(
            "selectedSeatsText"
        );

    const count =
        document.getElementById(
            "ticketCount"
        );

    const total =
        document.getElementById(
            "totalPrice"
        );

    if (!seats || !count || !total) {
        return;
    }

    seats.textContent =
        selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None";

    count.textContent =
        selectedSeats.length;

    total.textContent =
        "₹" +
        (
            selectedSeats.length *
            ticketPrice
        );
}


/* ================= DATE ================= */

function setDates() {

    const date1 =
        document.getElementById("date1");

    const date2 =
        document.getElementById("date2");

    const date3 =
        document.getElementById("date3");

    if (!date1 || !date2 || !date3) {
        return;
    }

    const today = new Date();

    const tomorrow =
        new Date(today);

    tomorrow.setDate(
        today.getDate() + 1
    );

    const dayThree =
        new Date(today);

    dayThree.setDate(
        today.getDate() + 2
    );

    date1.textContent =
        formatDate(today);

    date2.textContent =
        formatDate(tomorrow);

    date3.textContent =
        formatDate(dayThree);
}


function formatDate(date) {

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short"
        }
    );
}


function selectDate(button) {

    document.querySelectorAll(".date")
        .forEach(function (item) {

            item.classList.remove("active");

        });

    button.classList.add("active");

    const dateText =
        button.querySelector("b");

    if (dateText) {

        selectedDate =
            dateText.textContent;

    }

}


/* ================= SHOWTIME ================= */

function selectTime(button) {

    document.querySelectorAll(".showtimes button")
        .forEach(function (item) {

            item.classList.remove("selected");

        });

    button.classList.add("selected");

    selectedTime =
        button.textContent.trim();
}


/* ================= PAYMENT ================= */

function proceedToPayment() {

    if (!selectedMovie) {

        alert(
            "Please select a movie."
        );

        return;
    }

    if (selectedSeats.length === 0) {

        alert(
            "Please select at least one seat."
        );

        return;
    }

    if (!selectedTime) {

        alert(
            "Please select a showtime."
        );

        return;
    }

    selectedPayment = "";

    document.querySelectorAll(
        ".payment-methods button"
    )
        .forEach(function (button) {

            button.classList.remove(
                "selected"
            );

        });

    const paymentModal =
        document.getElementById(
            "paymentModal"
        );

    if (paymentModal) {

        paymentModal.classList.add(
            "show"
        );

    }
}


function closePayment() {

    const modal =
        document.getElementById(
            "paymentModal"
        );

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }
}


function selectPayment(button) {

    document.querySelectorAll(
        ".payment-methods button"
    )
        .forEach(function (item) {

            item.classList.remove(
                "selected"
            );

        });

    button.classList.add("selected");

    selectedPayment =
        button.textContent.trim();
}


/* ================= COMPLETE BOOKING ================= */

function completeBooking() {

    const nameElement =
        document.getElementById(
            "paymentName"
        );

    const emailElement =
        document.getElementById(
            "paymentEmail"
        );

    if (!nameElement || !emailElement) {
        return;
    }

    const name =
        nameElement.value.trim();

    const email =
        emailElement.value.trim();

    if (!name) {

        alert(
            "Please enter your name."
        );

        return;
    }

    if (
        !email ||
        !email.includes("@")
    ) {

        alert(
            "Please enter a valid email."
        );

        return;
    }

    if (!selectedPayment) {

        alert(
            "Please select a payment method."
        );

        return;
    }

    const cityElement =
        document.getElementById(
            "selectedCity"
        );

    const city =
        cityElement
            ? cityElement.textContent
            : "Chennai";

    const booking = {

        id:
            "BMS" +
            Math.floor(
                100000 +
                Math.random() * 900000
            ),

        movie:
            selectedMovie.title,

        city:
            city,

        date:
            selectedDate,

        time:
            selectedTime,

        seats:
            selectedSeats.slice(),

        tickets:
            selectedSeats.length,

        total:
            selectedSeats.length *
            ticketPrice,

        payment:
            selectedPayment,

        name:
            name,

        email:
            email,

        createdAt:
            new Date().toLocaleString(
                "en-IN"
            )

    };

    let bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];

    bookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    closePayment();

    alert(
        "Booking confirmed successfully!\n\n" +
        "Booking ID: " +
        booking.id
    );

    nameElement.value = "";
    emailElement.value = "";

    showBookings();
}


/* ================= BOOKINGS ================= */

function showBookings() {

    hideAllPages();

    const bookingsPage =
        document.getElementById(
            "bookingsPage"
        );

    if (!bookingsPage) {
        return;
    }

    bookingsPage.classList.remove(
        "hidden"
    );

    closeMenu();

    const list =
        document.getElementById(
            "bookingsList"
        );

    if (!list) {
        return;
    }

    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];

    if (bookings.length === 0) {

        list.innerHTML = `
            <div class="booking-card">

                <h3>No bookings yet</h3>

                <p>
                    Your confirmed tickets
                    will appear here.
                </p>

            </div>
        `;

        return;
    }

    list.innerHTML = "";

    bookings
        .slice()
        .reverse()
        .forEach(function (booking) {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "booking-card";

            card.innerHTML = `

                <h3>
                    🎬 ${booking.movie}
                </h3>

                <p class="booking-id">
                    Booking ID:
                    ${booking.id}
                </p>

                <p>
                    📍 ${booking.city}
                </p>

                <p>
                    📅 ${booking.date}
                </p>

                <p>
                    🕐 ${booking.time}
                </p>

                <p>
                    💺 Seats:
                    ${booking.seats.join(", ")}
                </p>

                <p>
                    🎟 Tickets:
                    ${booking.tickets}
                </p>

                <p>
                    💰 Total:
                    ₹${booking.total}
                </p>

                <p>
                    💳 Payment:
                    ${booking.payment}
                </p>

                <p>
                    👤 ${booking.name}
                </p>

                <p>
                    📧 ${booking.email}
                </p>

                <p>
                    ${booking.createdAt}
                </p>

            `;

            list.appendChild(card);

        });
}


/* ================= EVENT BOOKING ================= */

function bookEvent(eventId) {

    const event =
        events.find(function (item) {

            return item.id === eventId;

        });

    if (!event) {
        return;
    }

    const name =
        prompt("Enter your name:");

    if (!name) {
        return;
    }

    const email =
        prompt("Enter your email:");

    if (!email) {
        return;
    }

    if (!email.includes("@")) {

        alert(
            "Please enter a valid email."
        );

        return;
    }

    const booking = {

        id:
            "EVT" +
            Math.floor(
                100000 +
                Math.random() * 900000
            ),

        movie:
            event.title,

        city:
            event.location,

        date:
            "Event Day",

        time:
            "07:00 PM",

        seats:
            ["General"],

        tickets:
            1,

        total:
            event.price,

        payment:
            "Demo Payment",

        name:
            name,

        email:
            email,

        createdAt:
            new Date().toLocaleString(
                "en-IN"
            )

    };

    let bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];

    bookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    alert(
        "Event booking confirmed!\n\n" +
        "Booking ID: " +
        booking.id
    );
}


/* ================= SEARCH ================= */

function searchContent() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) {
        return;
    }

    const query =
        input.value
            .toLowerCase()
            .trim();

    if (query === "") {

        renderMovies(movies);

        return;
    }

    const filtered =
        movies.filter(function (movie) {

            return (

                movie.title
                    .toLowerCase()
                    .includes(query)

                ||

                movie.language
                    .toLowerCase()
                    .includes(query)

                ||

                movie.genre
                    .toLowerCase()
                    .includes(query)

            );

        });

    renderMovies(filtered);

    const movieSection =
        document.getElementById(
            "movieSection"
        );

    if (movieSection) {

        movieSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ================= CATEGORY ================= */

function showCategory(category, button) {

    hideAllPages();

    const homePage =
        document.getElementById(
            "homePage"
        );

    if (homePage) {

        homePage.classList.remove(
            "hidden"
        );

    }

    document.querySelectorAll(
        ".category"
    )
        .forEach(function (item) {

            item.classList.remove(
                "active"
            );

        });

    if (button) {

        button.classList.add(
            "active"
        );

    }

    const movieSection =
        document.getElementById(
            "movieSection"
        );

    const eventSection =
        document.getElementById(
            "eventSection"
        );

    const sportsSection =
        document.getElementById(
            "sportsSection"
        );

    if (category === "Movies") {

        if (movieSection)
            movieSection.classList.remove(
                "hidden"
            );

        if (eventSection)
            eventSection.classList.remove(
                "hidden"
            );

        if (sportsSection)
            sportsSection.classList.remove(
                "hidden"
            );

        renderMovies(movies);

        const heading =
            document.getElementById(
                "movieHeading"
            );

        if (heading) {

            heading.textContent =
                "Recommended Movies";

        }

    }

    else if (category === "Events") {

        if (movieSection)
            movieSection.classList.add(
                "hidden"
            );

        if (eventSection)
            eventSection.classList.remove(
                "hidden"
            );

        if (sportsSection)
            sportsSection.classList.add(
                "hidden"
            );

        if (eventSection) {

            eventSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

    else if (category === "Sports") {

        if (movieSection)
            movieSection.classList.add(
                "hidden"
            );

        if (eventSection)
            eventSection.classList.add(
                "hidden"
            );

        if (sportsSection)
            sportsSection.classList.remove(
                "hidden"
            );

        if (sportsSection) {

            sportsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

    else if (category === "Plays") {

        if (movieSection)
            movieSection.classList.add(
                "hidden"
            );

        if (eventSection)
            eventSection.classList.add(
                "hidden"
            );

        if (sportsSection)
            sportsSection.classList.add(
                "hidden"
            );

        alert(
            "Popular Plays\n\n" +
            "• Theatre Shows\n" +
            "• Drama\n" +
            "• Musical Plays\n" +
            "• Family Shows"
        );

    }

    else if (category === "Activities") {

        if (movieSection)
            movieSection.classList.add(
                "hidden"
            );

        if (eventSection)
            eventSection.classList.add(
                "hidden"
            );

        if (sportsSection)
            sportsSection.classList.remove(
                "hidden"
            );

        if (sportsSection) {

            sportsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }
}


/* ================= ALL MOVIES ================= */

function showAllMovies() {

    hideAllPages();

    const homePage =
        document.getElementById(
            "homePage"
        );

    if (homePage) {

        homePage.classList.remove(
            "hidden"
        );

    }

    const movieSection =
        document.getElementById(
            "movieSection"
        );

    const eventSection =
        document.getElementById(
            "eventSection"
        );

    const sportsSection =
        document.getElementById(
            "sportsSection"
        );

    if (movieSection)
        movieSection.classList.remove(
            "hidden"
        );

    if (eventSection)
        eventSection.classList.add(
            "hidden"
        );

    if (sportsSection)
        sportsSection.classList.add(
            "hidden"
        );

    renderMovies(movies);

    const heading =
        document.getElementById(
            "movieHeading"
        );

    if (heading) {

        heading.textContent =
            "All Movies";

    }

    if (movieSection) {

        movieSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ================= HOME ================= */

function goHome() {

    hideAllPages();

    const homePage =
        document.getElementById(
            "homePage"
        );

    if (homePage) {

        homePage.classList.remove(
            "hidden"
        );

    }

    const movieSection =
        document.getElementById(
            "movieSection"
        );

    const eventSection =
        document.getElementById(
            "eventSection"
        );

    const sportsSection =
        document.getElementById(
            "sportsSection"
        );

    if (movieSection)
        movieSection.classList.remove(
            "hidden"
        );

    if (eventSection)
        eventSection.classList.remove(
            "hidden"
        );

    if (sportsSection)
        sportsSection.classList.remove(
            "hidden"
        );

    renderMovies(movies);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= SCROLL ================= */

function scrollToMovies() {

    const movieSection =
        document.getElementById(
            "movieSection"
        );

    if (movieSection) {

        movieSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ================= HIDE PAGES ================= */

function hideAllPages() {

    const pages = [
        "homePage",
        "detailsPage",
        "bookingPage",
        "bookingsPage",
        "offersPage"
    ];

    pages.forEach(function (id) {

        const element =
            document.getElementById(id);

        if (element) {

            element.classList.add(
                "hidden"
            );

        }

    });
}


/* ================= CITY ================= */

function openCityModal() {

    const modal =
        document.getElementById(
            "cityModal"
        );

    if (modal) {

        modal.classList.add(
            "show"
        );

    }
}


function closeCityModal() {

    const modal =
        document.getElementById(
            "cityModal"
        );

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }
}


function selectCity(city) {

    const selectedCity =
        document.getElementById(
            "selectedCity"
        );

    if (selectedCity) {

        selectedCity.textContent =
            city;

    }

    localStorage.setItem(
        "city",
        city
    );

    closeCityModal();
}


/* ================= LOAD CITY ================= */

function loadCity() {

    const city =
        localStorage.getItem(
            "city"
        );

    const selectedCity =
        document.getElementById(
            "selectedCity"
        );

    if (
        city &&
        selectedCity
    ) {

        selectedCity.textContent =
            city;

    }
}


/* ================= LOGIN ================= */

function openLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );

    if (modal) {

        modal.classList.add(
            "show"
        );

    }
}


function closeLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }
}


function loginUser() {

    const nameElement =
        document.getElementById(
            "loginName"
        );

    const emailElement =
        document.getElementById(
            "loginEmail"
        );

    if (!nameElement || !emailElement) {
        return;
    }

    const name =
        nameElement.value.trim();

    const email =
        emailElement.value.trim();

    if (!name) {

        alert(
            "Please enter your name."
        );

        return;
    }

    if (
        !email ||
        !email.includes("@")
    ) {

        alert(
            "Please enter a valid email."
        );

        return;
    }

    localStorage.setItem(
        "userName",
        name
    );

    localStorage.setItem(
        "userEmail",
        email
    );

    closeLogin();

    alert(
        "Welcome, " + name + "!"
    );

    nameElement.value = "";
    emailElement.value = "";
}


/* ================= OFFERS ================= */

function showOffers() {

    hideAllPages();

    const offersPage =
        document.getElementById(
            "offersPage"
        );

    if (offersPage) {

        offersPage.classList.remove(
            "hidden"
        );

    }

    closeMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= SIDE MENU ================= */

function toggleMenu() {

    const sideMenu =
        document.getElementById(
            "sideMenu"
        );

    const overlay =
        document.getElementById(
            "menuOverlay"
        );

    if (sideMenu) {

        sideMenu.classList.toggle(
            "show"
        );

    }

    if (overlay) {

        overlay.classList.toggle(
            "show"
        );

    }
}


function closeMenu() {

    const sideMenu =
        document.getElementById(
            "sideMenu"
        );

    const overlay =
        document.getElementById(
            "menuOverlay"
        );

    if (sideMenu) {

        sideMenu.classList.remove(
            "show"
        );

    }

    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }
}


/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMenu();
            closePayment();
            closeCityModal();
            closeLogin();

        }

    }
);