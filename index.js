/** Get Akan Name */

function getAkanName(e) {
    e.preventDefault();

    //Get Date of Birth Value from Form
    let dateOfBirth = document.querySelector('.date').value;
    //Create a date object from the value
    let dateObj = new Date(dateOfBirth);
    //Return Day of the Week from the date object - Returns integers 0-6 with 0 being Sunday
    let dayOfWeek = dateObj.getDay();

    //Get User Gender
    let gender = document.querySelector('.gender').value;

    let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    

}

