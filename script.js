document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('userList');
    const userModal = document.getElementById('userModal');
    const userInfo = document.getElementById('userInfo');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Fetch user data from API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                li.setAttribute('data-id', user.id);
                userList.appendChild(li);

                li.addEventListener('click', () => {
                    showUserDetails(user);
                });
            });
        })
        .catch(error => console.error('Error fetching user data:', error));

    function showUserDetails(user) {
        userInfo.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;
        userModal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        userModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == userModal) {
            userModal.style.display = 'none';
        }
    });
});