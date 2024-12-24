
const comment = document.getElementById("comment");
const post = document.getElementById("post");
const results = document.getElementById("results");
const error = document.getElementById("error");

function postComment () {
    if (comment.ariaValueMax.trim() !==  "") {
        console.log("d")

    }else{
        error.innerHTML = '<i class="bi bi-exclamation-circle"></i> Please enter your comment!'
    }
}