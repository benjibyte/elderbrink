function saveToFile() {
    // Grab the text from the input field
    const inputText = document.getElementById('input-box').value;
    
    // Use the Blob API to create a new text file.
    const blob = new Blob([inputText], { type: 'text/plain;charset=utf-8' });
    
    // Create the file in the local url browser base.
    const url = URL.createObjectURL(blob)

    // Create ellement that displays the text
    const todoTask =  document.createElement('a');
    

    //add a class so that we can easily accses the inner text when we want to save it.

    todoTask.classList.add('textToDownload');
    // Attach the 'A' element to the blob we created and download the text.
    todoTask.href = url;
    //todoTask.download = 'tasks.txt';
    todoTask.innerHTML = inputText;
    // Attach what was typed into the actual document, 
    // (give feedback to the user tellign them that it was used)
    
    //Grab the container div
    

    todoTask.addEventListener('click', function(event) {
        event.preventDefault();
        todoTask.remove();
        URL.revokeObjectURL(url);
    });

    document.querySelector('#task-list').appendChild(todoTask);
}

function downloadTaskList() {

    const articlesCreatedByUser = document.querySelectorAll('.textToDownload');
    let textContent = '';
    articlesCreatedByUser.forEach(article => {
        textContent += article.innerText + '|||';
    })
    const element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textContent));
    element.setAttribute('download', 'example.txt')
    element.style.display = 'none';

    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element);

    // const listContainer = document.getElementById('task-list');
    // // make sure that the list containter actually exxists
    // if (!listContainer) {
    //     console.error('Task list container not found');
    //     return;
    // }

    // const taskElements = listContainer.children;

    // const taskArray = Array.from(taskElements);

    
    // // run a block of code per task article element.
    // // grab all the text content from the article tags and save them all to a text file.
    
    // // Preparing the text
    // const tasksText = taskArray.join('|||');
    // const exportBlob = new Blob([tasksText], { type: 'text/plain;charset=utf-8' });
    // const url = URL.createObjectURL(exportBlob);
    // const downloadLink = document.createElement('a');

    // //downloading the text
    // downloadLink.href = URL.createObjectURL(exportBlob);
    // downloadLink.download = 'tasks.txt';
    // downloadLink.textContent = 'Download Task List';
    // downloadLink.click();

    // URL.revokeObjectURL(url);
}