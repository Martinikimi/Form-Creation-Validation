// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a list element
        const userList = document.createElement('ul');
        
        // Loop through each user and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Failed to load user data.';
        errorMessage.className = 'error';
        dataContainer.appendChild(errorMessage);
    }
}

// Invoke fetchUserData when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
