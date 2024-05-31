// Function to get visitor's IP address using a third-party service
async function getIpAddress() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
}

// Function to log visit details to your logging service
async function logVisit() {
    const ip = await getIpAddress();
    const timestamp = new Date().toISOString();
    const pageUrl = window.location.href;  // Get the current page URL

    // Replace this URL with your logging service endpoint
    const loggingEndpoint = 'http://34.16.203.115:5000/log'; // Adjust the URL if running on a different server

    // Data to be sent to the logging service
    const logData = {
        ip: ip,
        timestamp: timestamp,
        pageUrl: pageUrl
    };

    // Send the log data to the logging service
    await fetch(loggingEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logData)
    });
}

// Call the logVisit function when the page loads
window.onload = logVisit;
