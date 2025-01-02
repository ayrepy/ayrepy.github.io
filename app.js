document.getElementById('submitButton').addEventListener('click', async () => {
  const input = document.getElementById('userInput').value;

  const response = await fetch('https://your-backend-url.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: input }),
  });

  const data = await response.json();
  document.getElementById('response').innerText = data.response;
});
