function showContent(section) {
    const contents = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.tabs-section button');
    
    contents.forEach(content => {
        content.style.display = 'none';
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    document.getElementById(section).style.display = 'block';
    document.querySelector(`button[onclick="showContent('${section}')"]`).classList.add('active');
}

// Show the vision section by default
document.getElementById('vision').style.display = 'block';
document.querySelector(`button[onclick="showContent('vision')"]`).classList.add('active');
