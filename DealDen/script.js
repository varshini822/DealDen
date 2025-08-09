const deals = [
  {
    name: "Wireless Earbuds",
    price: 49,
    img: "https://via.placeholder.com/240x180?text=Earbuds",
    duration: 3600
  },
  {
    name: "Smartwatch",
    price: 89,
    img: "https://via.placeholder.com/240x180?text=Smartwatch",
    duration: 5400
  },
  {
    name: "Coffee Maker",
    price: 69,
    img: "https://via.placeholder.com/240x180?text=Coffee+Maker",
    duration: 2700
  },
];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function renderDeals() {
  const grid = document.getElementById("dealGrid");
  grid.innerHTML = "";
  deals.forEach((deal, i) => {
    const card = document.createElement("div");
    card.className = "deal-card";
    card.innerHTML = `
      <img src="${deal.img}" alt="${deal.name}">
      <h3>${deal.name}</h3>
      <p>$${deal.price.toFixed(2)}</p>
      <div class="countdown" id="timer-${i}">Loading...</div>
      <button onclick="alert('Purchased: ${deal.name}')">Buy Now</button>
    `;
    grid.appendChild(card);

    // Countdown
    let remaining = deal.duration;
    const timer = setInterval(() => {
      if (remaining > 0) {
        document.getElementById(`timer-${i}`).innerText = `Ends in: ${formatTime(remaining--)}`;
      } else {
        document.getElementById(`timer-${i}`).innerText = "Deal expired";
        clearInterval(timer);
      }
    }, 1000);
  });
}

function subscribe() {
  const email = document.getElementById("emailInput").value;
  const msg = document.getElementById("subMsg");
  if (email.includes("@")) {
    msg.innerText = "Subscribed successfully!";
    msg.style.color = "green";
  } else {
    msg.innerText = "Please enter a valid email.";
    msg.style.color = "red";
  }
}

window.onload = renderDeals;
