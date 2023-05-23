document.getElementById('check-button').addEventListener('click', function() {
  var inputText = document.getElementById('text-input').value;

  // Perform plagiarism check logic here
  // You can use API calls or implement your own plagiarism detection algorithm

  // Mock response for demonstration
  var isPlagiarized = Math.random() >= 0.5;

  var resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'block';

  if (isPlagiarized) {
    resultContainer.innerHTML = '<p class="plagiarized">This text is plagiarized!</p>';
  } else {
    resultContainer.innerHTML = '<p class="original">This text is original!</p>';
  }
});
