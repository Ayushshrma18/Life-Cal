function calculateLife() {
    var birthdateInput = document.getElementById('birthdate');
    var resultContainer = document.getElementById('result');
    var ageOutput = document.getElementById('age');
    var daysOutput = document.getElementById('days');
    var minutesOutput = document.getElementById('minutes');
    var secondsOutput = document.getElementById('seconds');

    var birthdate = new Date(birthdateInput.value);
    var currentDate = new Date();

    var timeDifference = currentDate - birthdate;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var minutes = Math.floor(timeDifference / (1000 * 60));
    var seconds = Math.floor(timeDifference / 1000);

    var age = calculateAge(birthdate, currentDate);

    ageOutput.textContent = age;
    daysOutput.textContent = days;
    minutesOutput.textContent = minutes;
    secondsOutput.textContent = seconds;

    resultContainer.style.display = 'block';
}

function calculateAge(birthdate, currentDate) {
    var age = currentDate.getFullYear() - birthdate.getFullYear();
    var birthMonth = birthdate.getMonth();
    var currentMonth = currentDate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}
