// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like-glyph"); //store the hearts class 

/*Adds event listeners to every heart/like and calls the server*/
likes.forEach((like) => {
  like.addEventListener("click", () => {
    mimicServerCall()
      .then(() => { //runs if the server returns positive response

        //changes contents and class of heart depending on whether it was full or empty
        if (like.textContent === EMPTY_HEART) { 
          like.textContent = FULL_HEART;
          like.classList.add("activated-heart");
        } else { 
          like.textContent = EMPTY_HEART;
          like.classList.remove("activated-heart");
        }
      })
      .catch((error) => { //runs if there is a server error
        const hidden = document.getElementById("modal");
        const message = document.getElementById("modal-message");
        message.textContent = error; //adds the specific server error to me message content
        hidden.classList.remove("hidden"); //removes hidden class hence displaying error message
        setTimeout(() => { //displays the error message for only 3 seconds then hides it again
          hidden.classList.add("hidden");
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
