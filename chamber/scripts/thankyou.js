const params = new URLSearchParams(window.location.search);

const output = `
<p><strong>Name:</strong> ${params.get("fname")} ${params.get("lname")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Phone:</strong> ${params.get("phone")}</p>
<p><strong>Business:</strong> ${params.get("business")}</p>
<p><strong>Submitted:</strong> ${params.get("timestamp")}</p>
`;

document.getElementById("results").innerHTML = output;
