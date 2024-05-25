function getDOB() {
    
    let dobInput = document.getElementById("inputDob").value;
    let currentDateInput = document.getElementById("cdate").value;

    
    let currentDate = currentDateInput ? new Date(currentDateInput) : new Date();
    
    let dob = new Date(dobInput);

    
    let age = currentDate.getFullYear() - dob.getFullYear();
    let monthDiff = currentDate.getMonth() - dob.getMonth();
    let dayDiff = currentDate.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("currentAge").innerText = `Your age is ${age} years.`;
}
