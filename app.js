function joined() {
    console.log("Clicked")
    // With getelementbyID we have got the things that needs to be manipulated
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining👌';
    console.log(title);
}