async function getTrackingInfo() {
  const trackingNumbers = document.getElementById('trackingNumbers').value.split(',');
  const trackingResultsDiv = document.getElementById('trackingResults');
  trackingResultsDiv.innerHTML = '';

  for (const trackingNumber of trackingNumbers) {
    const result = await fetchFedExData(trackingNumber);
    displayTrackingInfo(trackingResultsDiv, result);
  }
}

async function fetchFedExData(trackingNumber) {
  // Use FedEx API to get tracking information. Replace the following line with actual API call.
  // const response = await fetch(`https://api.example.com/fedex?trackingNumber=${trackingNumber}`);
  // const data = await response.json();
  // return data;

  // For demonstration purposes, a mock response is used.
  return { trackingNumber, eta: '2024-01-10', status: 'In transit' };
}

function displayTrackingInfo(parentDiv, result) {
  const trackingInfoDiv = document.createElement('div');
  trackingInfoDiv.innerHTML = `<strong>Tracking Number:</strong> ${result.trackingNumber}<br>
                               <strong>ETA:</strong> ${result.eta}<br>
                               <strong>Status:</strong> ${result.status}<br><br>`;
  parentDiv.appendChild(trackingInfoDiv);
}

// Display tracking information on page load (latest status).
document.addEventListener('DOMContentLoaded', getTrackingInfo);
