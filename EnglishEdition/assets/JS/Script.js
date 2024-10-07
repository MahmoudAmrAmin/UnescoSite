function showContent(tab) {

    const title = document.getElementById('content-title');
    const description = document.getElementById('content-description');
    const image = document.getElementById('content-image');

    // Remove 'active' class from all tabs
   
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));

    // Add 'active' class to the clicked tab
    document.querySelector(`button[onclick="showContent('${tab}')"]`).classList.add('active');
    // Update content and image based on the tab clicked
    if (tab === 'vision') {
        title.textContent = 'Vision';
        description.textContent = 'To achieve leadership in the field of ICT by building a skilled and innovative workforce that leads the process of full digital transformation locally and regionally.';
        image.src = 'assets/Images/digital-increasing-bar-graph-with-businessman-hand-overlay.jpg'; // Correct image path
        image.alt = 'Vision Image';
    } else if (tab === 'message') {
        title.textContent = 'Message';
        description.textContent = 'Building and qualifying Egyptian youth to increase their ability to compete globally through an integrated self-employment qualification programme and the acquisition of the required digital skills in the contemporary labour market.';
        image.src = 'assets/Images/benfitspng.png'; // Correct image path
        image.alt = 'Message Image';
    } else if (tab === 'goals') {
        title.textContent = 'Goals';
        description.innerHTML = `
            <ol>
                <li>Instilling the concept of sustainable development and applying it to achieve positive practices and preserve the environment.</li>
                <li>Investing in youth and promoting gender equality to support sustainable development and peace.</li>
                <li>Focusing on human rights, solving social problems, and promoting volunteerism.</li>
                <li>Emphasizing culture, science, and technology by organizing seminars, exhibitions, and cultural activities.</li>
            </ol>
        `;
        image.src ='assets/Images/goals.jpg'; // Correct image path
        image.alt = 'Goals Image';
    } else if (tab === 'features') {
        title.textContent = 'Features';
        description.innerHTML = `
            <p>These companies carry out many activities, including holding practical workshops in various technological fields and contributing to enriching the educational process and providing training courses to develop students' skills.</p>
        `;
        image.src = 'assets/Images/message.png'; // Correct image path
        image.alt = 'Features Image';
    }
}