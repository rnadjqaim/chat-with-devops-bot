function askMonthlyCost() {
    fetch('/api/aws-cost').then(response => response.json()).then(data => {
        document.getElementById('chat-messages').innerHTML += `<div>${data.message}</div>`;
    });
}

function listS3Buckets() {
    fetch('/api/list-s3').then(response => response.json()).then(data => {
        document.getElementById('chat-messages').innerHTML += `<div>${data.buckets}</div>`;
    });
}

function getAccessKeys() {
    fetch('/api/iam-keys').then(response => response.json()).then(data => {
        document.getElementById('chat-messages').innerHTML += `<div>Access Key: ${data.access_key}, Secret: ${data.secret_key}</div>`;
    });
}

function analyzeAWS() {
    fetch('/api/analyze-aws').then(response => response.json()).then(data => {
        document.getElementById('chat-messages').innerHTML += `<div><a href="${data.diagram_link}">AWS Diagram</a></div>`;
    });
}
