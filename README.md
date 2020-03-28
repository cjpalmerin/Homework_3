For this homework assignment I started with pseudocoding.

PSEUDOCODE:
1. create click event listener to button.
2. prompt user how many characters they want.
3. confirm user if they want lowercase letters.
3. confirm user if they want uppercase letters.
4. confirm user if they want numbers.
5. confirm user if they want special characters.
6. create arrays for lowercase letters, uppercase letters, numbers, and special characters.
7. use math.floor to pick a random number at the same amount of times as the amount of characters chosen by user.
8. loop previous step the same amount of times as the amount of characters chosen by user.

The first thing I did was link new JavaScript variables to the IDs found in the index.html file. From there I added a .addEventListener(); method to the generate password button to begin the prompt and confirms that would take user inputs. These inputs were stored into variables that would then be used later for the if/else statements that would dictate the code for when the password would be generated.

After creating arrays for all of the different characters that the user could choose from I created if/else statements for every single possible combination of character types the user could choose. From there, with help from TA Paul, we created a password bank that would pass into a math.random function to generate a random number that would be assigned to the i of the function. 

After setting the new password variable to the math.random functions, I changed the arrays that would be present in the block code for all of the different scenarios. After that I used the .textContent method to change the message in the text area to display the new password.