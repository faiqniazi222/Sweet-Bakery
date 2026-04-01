//    1. QUANTITY CONTROL (Plus/Minus)

function changeQty(id, delta) {
    const inputField = document.getElementById(id);
    if (inputField) {
        let currentVal = parseInt(inputField.value) || 1;
        let newVal = currentVal + delta;

        // Quantity 1 se kam nahi honi chahiye
        if (newVal >= 1) {
            inputField.value = newVal;
        }
    }
}


//    2. SEARCH FUNCTIONALITY

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form input');
    const productCards = document.querySelectorAll('.product-card');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const searchTerm = searchInput.value.toLowerCase().trim();

            productCards.forEach(card => {
                const title = card.querySelector('.card-title').innerText.toLowerCase();
                
                // Agar search term title mein hai, to dikhao, warna chupa do
                if (title.includes(searchTerm)) {
                    card.parentElement.style.display = "block";
                } else {
                    card.parentElement.style.display = "none";
                }
            });
        });
    }

    
    //    3. ORDER BUTTON ACTION
       
    const orderButtons = document.querySelectorAll('.btn-maroon, .order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === "#") {
                e.preventDefault();
                
                // Card se product ka naam uthana
                const card = this.closest('.card') || this.closest('.product-page-wrapper');
                const productName = card.querySelector('.card-title, .product-title').innerText;
                
                alert(`Shukriya! Aapka "${productName}" ka order process ho raha hai.`);
            }
        });
    });
});



// CONTACK INFO


// Function to open the Contact Modal
function openContactBox() {
    const modal = document.getElementById("contactModal");
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close the Contact Modal
function closeContactBox() {
    const modal = document.getElementById("contactModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Function to send message to WhatsApp
function sendToWhatsApp() {
    const messageInput = document.getElementById("userMessage");
    const message = messageInput.value.trim();
    const phoneNumber = "923297225744"; 

    if (message === "") {
        alert("Please enter a message before sending.");
        return;
    }

    // Creating WhatsApp API link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");

    messageInput.value = "";
    closeContactBox();
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// FOAM


// 1. Ye check karne ke liye ke file link hai ya nahi
console.log("Bakery JS Loaded!"); 

// 2. Modal open karne ka function
function openOrderModal(productName) {
    console.log("Opening modal for: " + productName);
    
    var modal = document.getElementById("orderModal");
    var inputName = document.getElementById("modalProductName");
    var inputQty = document.getElementById("modalQuantity");

    if(modal && inputName) {
        inputName.value = productName; // Product ka naam set karein
        inputQty.value = "1";          // Quantity 1 karein
        modal.style.display = "block"; // Modal dikhayein
    } else {
        console.error("Modal ya Input ID nahi mili!");
    }
}

// 3. Modal close karne ka function
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

// 4. Quantity change karne ka function
function changeModalQty(val) {
    var qtyInput = document.getElementById("modalQuantity");
    var current = parseInt(qtyInput.value);
    if (current + val >= 1) {
        qtyInput.value = current + val;
    }
}

// 5. WhatsApp bhejna
function sendOrderToWhatsApp() {
    var item = document.getElementById("modalProductName").value;
    var qty = document.getElementById("modalQuantity").value;
    var name = document.getElementById("userName").value;
    var address = document.getElementById("userAddress").value;

    if (name == "" || address == "") {
        alert("Please enter Name and Address");
        return;
    }

    var msg = "*NEW ORDER*%0A*Item:* " + item + "%0A*Qty:* " + qty + "%0A*Name:* " + name + "%0A*Address:* " + address;
    window.open("https://wa.me/923297225744?text=" + msg, "_blank");
}

