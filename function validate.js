function validate()
{
   let firstName = document.getElementById("firstName").value;

    let lastName = document.getElementById("lastName").value;
    // Combine first name and last name
   let  fullname = firstName + "" + lastName;
   // check if the combined name has more than 20 characters
 if (fullname.length > 20) {
    document.getElementById("result").innerText = "warning: full name should be 20 characters or less.";

    document.getElementById("result").style.color = "blue";
                   return;
} 
   // Get the user's zip code
   let zipcode = document.getElementById("zipCode").value;
    // Check if  the zip code contains exactly 5 digits
        if (!/^\d{5}$/.test(zipcode))  {
        document.getElementById("result").innerText ="warning: zip code must be extactly 5 digits.";
        document.getElementById("result").style.color = "blue";
          return;
    }  

        // Get the string input for palindrome check
    let inputString = document.getElementById("inputString").value;
    // remove spaces and convert to lowercase
      let processedString = inputString.replace(/\s+/g,'').toLowercase();
      // Reverse the processed string
    let reversedString = processedString.split('').reverse().join('');
    // Check if the processed string is a palindrome
     if (processedString === reversedString)
     {
        document.getElementById("result").innerText = "it's a palindrome!";
        document.getElementById("reult").style.color = "green";
          // Reveal the secret message if all inputs are valid

        document.getElementById("secretMessage").style.display = "block";
     }
      else
      {
        document.getElementById("result").innerText ="Not a palindrome!";

        document.getElementById("reult").style.color = "blue";
         // Hide the secret message if the palindrome check fails
         
        document.getElementById("secretMessage").style.display = "none";
        
      }
}
