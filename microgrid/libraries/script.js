function addWord() {
    // Local variables as required
    let input = document.getElementById('wordInput');
    let display = document.getElementById('sentenceDisplay');
    let prompt = document.getElementById('promptText');
    let word = input.value.trim();

    // Validation: No spaces, not empty
    if (word === "" || word.indexOf(" ") !== -1) {
        // Proceed as normal (do nothing to the sentence)
        input.value = "";
        input.focus();
        return;
    }

    // Update the sentence
    if (display.innerHTML === "") {
        display.innerHTML = word;
        // Update label after first word
        prompt.innerHTML = "Next word for your sentence:";
    } else {
        display.innerHTML += " " + word;
    }

    // Clear and focus (Requirement: cursor positioned in text box after click)
    input.value = "";
    input.focus();
}

function startOver() {
    document.getElementById('sentenceDisplay').innerHTML = "";
    document.getElementById('promptText').innerHTML = "Starting word for your sentence:";
    document.getElementById('wordInput').value = "";
    document.getElementById('wordInput').focus();
}
