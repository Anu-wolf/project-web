let bookings = [];

// Show the appropriate booking form
function showForm(serviceType) {
    hideForm(); // Hide any open form

    if (serviceType === 'haircut') {
        document.getElementById('haircutForm').style.display = 'block';
    } else if (serviceType === 'plumber') {
        document.getElementById('plumberForm').style.display = 'block';
    }

    document.getElementById('menu').style.display = 'none';
}

// Hide all forms
function hideForm() {
    document.getElementById('haircutForm').style.display = 'none';
    document.getElementById('plumberForm').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

// Add a new booking
function addBooking(serviceType) {
    let customerName = '', appointmentTime = '', serviceDetail = '';

    if (serviceType === 'Haircut') {
        customerName = document.getElementById('haircutCustomer').value;
        appointmentTime = document.getElementById('haircutTime').value;
        serviceDetail = document.getElementById('haircutType').value;
    } else if (serviceType === 'Plumber') {
        customerName = document.getElementById('plumberCustomer').value;
        appointmentTime = document.getElementById('plumberTime').value;
        serviceDetail = document.getElementById('plumberIssue').value;
    }

    // Validate form data
    if (!customerName || !appointmentTime || !serviceDetail) {
        alert('Please fill in all fields');
        return;
    }

    // Add booking to the array
    bookings.push({
        customerName,
        serviceType,
        appointmentTime,
        serviceDetail
    });

    alert(Booking for ${serviceType} added successfully!);
    hideForm();
}

// Show the list of bookings
function viewBookings() {
    let bookingList = document.getElementById('bookings');
    bookingList.innerHTML = ''; // Clear previous bookings

    if (bookings.length === 0) {
        bookingList.innerHTML = '<li>No bookings available.</li>';
    } else {
        bookings.forEach((booking, index) => {
            let li = document.createElement('li');
            li.innerHTML = `
                <strong>${index + 1}. Customer:</strong> ${booking.customerName}<br>
                <strong>Service:</strong> ${booking.serviceType}<br>
                <strong>Time:</strong> ${booking.appointmentTime}<br>
                <strong>Details:</strong> ${booking.serviceDetail}
            `;
            bookingList.appendChild(li);
        });
    }

    document.getElementById('menu').style.display = 'none';
    document.getElementById('bookingList').style.display = 'block';
}

// Hide booking list
function hideList() {
    document.getElementById('bookingList').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}