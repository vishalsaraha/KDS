document.querySelector('#product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image').files[0];
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);
  
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product uploaded successfully: ', data);
    })
    .catch(error => {
      console.error('Error uploading product: ', error);
    });
  });



  