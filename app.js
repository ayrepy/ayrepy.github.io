// Function to handle chat input
document.getElementById('sendBtn').addEventListener('click', async () => {
    const input = document.getElementById('chatInput').value;
    if (!input) {
        alert("Please enter a question!");
        return;
    }

    document.getElementById('chatOutput').innerHTML = "Loading...";
    
    // Example of sending a request (replace this with your backend URL later)
    const response = await fetch("https://your-backend-url/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    document.getElementById('chatOutput').innerHTML = data.choices ? data.choices[0].text : "Error fetching response.";
});

// Function to handle file upload
async function uploadFile() {
    const file = document.getElementById('fileUpload').files[0];
    if (!file) {
        alert("Please upload a file!");
        return;
    }

    document.getElementById('fileOutput').innerHTML = "Processing file...";
    
    // Replace with OCR or backend file handling logic
    setTimeout(() => {
        document.getElementById('fileOutput').innerHTML = "File uploaded successfully!";
    }, 2000);
}
