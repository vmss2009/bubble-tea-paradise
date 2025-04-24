// Array of fun boba facts
const bobaFacts = [
    "The original bubble tea was made with cold green tea, honey, and tapioca pearls.",
    "Bubble tea is also known as 'boba tea' or 'pearl milk tea'.",
    "The most expensive bubble tea costs $8,888 and includes edible gold!",
    "Some boba shops offer over 100 different flavor combinations.",
    "The largest bubble tea was 1,500 liters, made in Germany in 2018.",
    "Boba pearls are made from cassava root, a plant native to South America.",
    "There's a boba tea emoji! It's 🧋"
];

// Array of special flavors
const specialFlavors = [
    { name: "Honeydew Milk Tea", desc: "Refreshing melon flavor with creamy milk", img: "https://example.com/honeydew.jpg" },
    { name: "Brown Sugar Boba Milk", desc: "Caramel-like sweetness with chewy pearls", img: "https://example.com/brown-sugar.jpg" },
    { name: "Mango Green Tea", desc: "Tropical mango with antioxidant-rich green tea", img: "https://example.com/mango.jpg" }
];

// DOM elements
const surpriseBtn = document.getElementById('surpriseBtn');
const funFact = document.getElementById('funFact');
const specialFlavor = document.getElementById('specialFlavor');

// Event listeners
if (surpriseBtn) {
    surpriseBtn.addEventListener('click', showSurprise);
}

// Rotate fun facts
if (funFact) {
    rotateFacts();
    setInterval(rotateFacts, 8000);
}

// Functions
function showSurprise() {
    alert("🎉 Surprise! You get 10% off your next boba order! Use code: BOBAFAN 🎉");
    surpriseBtn.textContent = "You got a boba coupon!";
    surpriseBtn.style.backgroundColor = "#4CAF50";
}

function rotateFacts() {
    const randomFact = bobaFacts[Math.floor(Math.random() * bobaFacts.length)];
    funFact.textContent = randomFact;
    
    // Add animation
    funFact.style.opacity = 0;
    setTimeout(() => {
        funFact.style.opacity = 1;
    }, 500);
}

// Change special flavor daily
if (specialFlavor) {
    const today = new Date().getDay();
    const flavor = specialFlavors[today % specialFlavors.length];
    
    specialFlavor.querySelector('h4').textContent = flavor.name;
    specialFlavor.querySelector('p').textContent = flavor.desc;
    // In a real site, you would update the image source too
}

// Audio control
const bubbleAudio = document.getElementById('bubbleAudio');
if (bubbleAudio) {
    // Set volume to 30% to not startle users
    bubbleAudio.volume = 0.3;
    
    // Try to play audio when user interacts with the page
    document.addEventListener('click', function() {
        bubbleAudio.play().catch(e => console.log("Audio play failed:", e));
    }, { once: true });
}

// Smooth scrolling for bookmarks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add bubble effect to click anywhere on page
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        const bubble = document.createElement('div');
        bubble.className = 'click-bubble';
        bubble.style.left = e.clientX + 'px';
        bubble.style.top = e.clientY + 'px';
        document.body.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 1000);
    }
});