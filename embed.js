const iframe = document.getElementById('oathSoccer');
const queryString = window.location.search; 
// console.log('Im the parent, im loading my scripts')

// Create a listener handler for the child iframe
// when the child is ready to receive messages, 
// parent will send data to child
const handleMessage = (event) => {
  if (event.source === iframe.contentWindow) {
    if (event.data === 'imListening') {
      // console.log('I am the parent and child is ready to receive messages. I will send a message to child now!')
      // console.log(queryString);
      const dataToSend = {
        message: queryString,
        someValue: 42
      };
      iframe.contentWindow.postMessage(dataToSend, '*');
    }
  }
};

// Add event listener for the message event
window.addEventListener('message', handleMessage);