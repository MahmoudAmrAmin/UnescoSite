function showContent(tab) {

    const title = document.getElementById('content-title');
    const description = document.getElementById('content-description');

    const tabs = document.querySelectorAll('.tab');
    

    tabs.forEach(tab => tab.classList.remove('active'));
    

    document.querySelector(`button[onclick="showContent('${tab}')"]`).classList.add('active');
    

    if (tab === 'vision') {
        title.textContent = 'Vision';
        description.textContent = 'To achieve leadership in the field of ICT by building a skilled and innovative workforce that leads the process of full digital transformation locally and regionally.';
    } else if (tab === 'message') {
        title.textContent = 'Message';
        description.innerHTML = 'Achieving leadership in the field of communications and information technology by building a skilled and innovative workforce that leads the comprehensive digital transformation locally and regionally.';
    } 
    else if (tab === 'objectives') 
    {
        title.textContent = 'Objectives';
        description.innerHTML = 
        <ol>
            <li>Instilling the concept of sustainable development and applying it to achieve positive practices and preserve the environment.</li>
            <li>Investing in youth and promoting gender equality to support sustainable development and peace.</li>
            <li>Focusing on human rights, solving social problems, and promoting volunteerism.</li>
            <li>Emphasizing culture, science, and technology by organizing seminars, exhibitions, and cultural activities.</li>
        </ol>
    }
    else if( tab == 'features')
    {
        title.textContent = 'features';
        description.innerHTML =
        <p>These companies carry out many activities, including holding practical workshops in various technological fields and contributing to enriching the educational process and providing training courses to develop students' skills.</p>;


    }
    else 
    {

    }
}
