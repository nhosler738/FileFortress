function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const fileName = file.name;


    // if user doesn't input a file type, display error message
    if (!file) {
        document.getElementById("statusMessage").innerHTML = "Upload failed";
        return;
    }

    const formData = new FormData();
    formData.append(file.name, file);

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);


    xhr.onload = function () {
        if(xhr.status === 200) {
            document.getElementById('statusMessage').innerHTML = file.name + ' uploaded successfully';
        } else {
            document.getElementById('statusMessage').innerHTML = xhr.statusText;
        }
    };

    xhr.send(formData);


}

