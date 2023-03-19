// get the current tab's URL and title
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var url = tabs[0].url;
  var title = tabs[0].title;

  // create the link data to be submitted to linksaw.com
  var linkData = {
    url: url,
    title: title
  };

  // send HTTP POST request to linksaw.com API
  fetch('https://linksaw.com/api/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(linkData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Link added to linksaw.com');
  })
  .catch(error => {
    console.error('Error adding link to linksaw.com:', error);
  });
});
