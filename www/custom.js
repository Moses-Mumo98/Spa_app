function calculateDistance(location1, location2) {
    // Haversine formula to calculate the distance between two points on the Earth
    var R = 6371; // Earth's radius in kilometers
    var dLat = toRad(location2.latitude - location1.latitude);
    var dLon = toRad(location2.longitude - location1.longitude);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(location1.latitude)) * Math.cos(toRad(location2.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c * 1000; // Convert to meters
    return distance;
}

function toRad(degrees) {
    return degrees * Math.PI / 180;
}

$(document).ready(function () {
    $('#login').on('click', function (e) {
        e.preventDefault(); // Prevent the default form submission

        console.log("login");
        var u_email = $('input[name ="u_email"]').val();
        var u_password = $('input[name ="u_password"]').val();

        if (u_email == "") {
            errorMessage = "Useremail is Required";
            document.getElementById("confrimed").innerText = errorMessage;
            document.getElementById('confrimed').style.display = 'block';
            document.getElementById("u_email").style.borderColor = "red";
            return;
        }

        if (u_password == "") {
            errorMessage = "Password is Required";
            document.getElementById("confrimed").innerText = errorMessage;
            document.getElementById('confrimed').style.display = 'block';
            document.getElementById("u_password").style.borderColor = "red";
            return false;
        }

        var dataString = {
            "u_email": u_email,
            "u_password": u_password,
        }

        console.log(dataString);

        // Get the current location using Cordova Geolocation plugin
        navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {
            // User's current location
            var userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            // Predefined location
            var predefinedLocation = {
                latitude: 	-1.3244,
                longitude: 36.86590309
            };

            // Compare the distance between the user's location and the predefined location
            var distance = calculateDistance(userLocation, predefinedLocation);

            // Allow login only if the user is within a certain distance (adjust threshold as needed)
            var allowedDistance = 100; // in meters
            if (distance <= allowedDistance) {
                // User is within the allowed area, proceed with the login
                console.log('Login successful!');
                window.location = "messages.html";
            } else {
                // User is outside the allowed area, show an error message
                alert('Login failed. You are not within the allowed area.');
            }
        }

        function error(error) {
            alert('Error getting location: ' + error.message); // Display an alert with the error message
        }

        return false;
    });
});


$('#logout').on('click', function(e) {
    sessionStorage.setItem("loggedin", "");
    window.location = "index.html";
    sessionStorage.clear();
    localStorage.clear();
    return false;

});