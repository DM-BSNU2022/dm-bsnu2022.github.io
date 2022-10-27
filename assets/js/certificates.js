window.addEventListener('load', (event) => {
    let url = window.location.href;
    const urlParts = url.split('/');
    let domain = urlParts.slice(0, -1).join('/'); // slice except last and join
    let certificateId = url.split('=')[1]  
    const certificates = {
      '5': "certificates/Орг-Фрич-«Design and Modelling BSNU 2022».jpg",
      '10': "photo1666753128.jpeg",
      '15': "certificates/1.jpeg"
    }
    
    if (Number.isInteger(+certificateId)) {
      window.location.href = `${domain}/${certificates[certificateId]}`;
    }
  
  });