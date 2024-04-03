// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like-glyph");
likes.forEach((like) => {
  like.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (like.textContent === EMPTY_HEART) {
          like.textContent = FULL_HEART;
          like.classList.add("activated-heart");
        } else {
          like.textContent = EMPTY_HEART;
          like.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        const hidden = document.getElementById("modal");
        const message = document.getElementById("modal-message");
        hidden.classList.remove("hidden");
        message.textContent = error;
        setTimeout(() => {
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
