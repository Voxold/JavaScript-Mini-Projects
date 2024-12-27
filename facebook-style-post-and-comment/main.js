const commentNum = document.getElementById("commentNum");

let counter = 0;

function postComment() {
    const commentInput = document.getElementById("comment");
    const commentText = commentInput.value.trim();
    const resultsContainer = document.getElementById("results");
    const errorElement = document.getElementById("error");

    errorElement.textContent = "";

    if (commentText !== "") {

    const newComment = document.createElement("p");
    newComment.className = "p-2 m-2 border rounded";
    newComment.innerHTML = `
                            <div class="comment-text mb-2 bg-light p-2 rounded">${commentText}</div>
                            <div class="w-50 d-flex justify-content-start align-items-center gap-2">
                                <i class="bi bi-hand-thumbs-up-fill text-primary" style="font-size: 1.2rem; margin-right:.5rem"></i>
                                <i class="bi bi-chat-fill text-secondary" style="font-size: 1.2rem;"></i>
                            </div>`;

    commentInput.value = "";
    
    counter += 1;
    commentNum.textContent = counter;
    return resultsContainer.appendChild(newComment);
    
    }else{
        errorElement.innerHTML = "<i class='bi bi-exclamation-circle-fill'></i> Please enter a comment before posting.";
        return;
    }
}