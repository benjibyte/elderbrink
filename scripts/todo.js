function saveToFile() {
    // Grab the text from the input field
    const inputText = document.getElementById('input-box').value;
    
    // Use the Blob API to create a new text file.
    const blob = new Blob([inputText], { type: 'text/plain' });
    
    // Create the file in the local url browser base.
    const url = URL.createObjectURL(blob)

    // Create ellement that displays the text
    const todoTask =  document.createElement('a');
    
    // Attach the 'A' element to the blob we created and download the text.
    todoTask.href = url;
    //todoTask.download = 'tasks.txt';
    todoTask.innerHTML = inputText;
    // Attach what was typed into the actual docuement, 
    // (give feedback to the user tellign them that it was used)
    
    //Grab the container div
    document.querySelector('#task-list').appendChild(todoTask);
}