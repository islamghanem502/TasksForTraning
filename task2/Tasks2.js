


async function printJsonFun() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.text();

        let posts = JSON.parse(data);

        let rus = '';

        const randomNumber = Math.floor(Math.random() * posts.length);
        rus = `ID: ${posts[randomNumber].id} <br><br>` + posts[randomNumber].title + '<br>' + posts[randomNumber].body;
        document.getElementById('description').innerHTML = rus;


    } 
    
    
    catch (error) {
        console.error('Error:', error);
    }
}


let seconds = 10000 / 1000; 

function countdown() {
    const timer = document.getElementById('timer');
    const photo = document.getElementById('photo');
    const inte = setInterval(() => {
        timer.style.color = 'red';
        photo.style.display = 'none';
        seconds--;
        
        timer.textContent = `Time left: ${seconds} seconds`;

        if (seconds <= 0) {
            
            clearInterval(inte);
           
            timer.textContent = 'Time is up!';
            timer.style.color = 'green';
            photo.style.display = 'block';
            printJsonFun();
            seconds = 10000 / 1000; 
            countdown(); 
        }
    }, 1000); 
}

printJsonFun();
countdown();
