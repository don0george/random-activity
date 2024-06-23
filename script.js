document.getElementById("activityButton").addEventListener("click", getActivity);

async function getActivity() {
    try {
        const response = await fetch("https://bored-api.appbrewery.com/random");
        if (!response.ok) {
            throw new error("Network response was not ok");
        }
        const data = await response.json();
        displayActivity(data);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

function displayActivity(activity) {
    const activityContainer = document.getElementById("activityContainer");
    activityContainer.innerHTML = `
    <p>Activity: ${activity.activity}</p>
    <p>Type: ${activity.type}</p>
    <p>Participants: ${activity.participants}</p>
    <p>Price: ${activity.price}</p>
    <p>Accessibility: ${activity.accessibility}</p>
    <p><a href="${activity.link}" target="_blank">More Info</a></p>
`;
}
