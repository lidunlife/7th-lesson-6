document.addEventListener('DOMContentLoaded', function () {
    let fetchButton = document.getElementById('fetchButton');
    let userInfo = document.getElementById('userInfo');

    fetchButton.addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                let randomIndex = Math.floor(Math.random() * data.length);
                let user = data[randomIndex];
                displayUserInfo(user);
            })
            .catch(error => console.error('Ошибка:', error));
    });

    function displayUserInfo(user) {
        userInfo.innerHTML = ''
        let name = document.createElement('p')
        let email  = document.createElement('p')
        let location = document.createElement('p')
        let number = document.createElement('p')
        
        
        
        let  nameElement = document.createElement('p');
      nameElement.innerHTML = `<span class="info-label">Имя:</span> <span class="info-data">${user.name}</span>`;
      userInfo.appendChild(nameElement);
      

        let  usernameElement = document.createElement('p');
        usernameElement.innerHTML = `<span class="info-label">Пользователь:</span> <span class="info-data">${user.username}</span>`;
        userInfo.appendChild(usernameElement);

        let  emailElement = document.createElement('p');
        emailElement.innerHTML = `<span class="info-label">Email:</span> <span class="info-data">${user.email}</span>`;
        userInfo.appendChild(emailElement);

        let  addressElement = document.createElement('p');
        addressElement.innerHTML = `<span class="info-label">Адрес:</span> <span class="info-data">${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</span>`;
        userInfo.appendChild(addressElement);

        let  phoneElement = document.createElement('p');
        phoneElement.innerHTML = `<span class="info-label">Телефон:</span> <span class="info-data">${user.phone}</span>`;
        userInfo.appendChild(phoneElement)
        
        
        
        
        
    }
});

