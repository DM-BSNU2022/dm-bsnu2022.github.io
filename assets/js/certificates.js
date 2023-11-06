window.addEventListener('load', (event) => {
    let url = window.location.href;
    const urlParts = url.split('/');
    let domain = urlParts.slice(0, -1).join('/'); // slice except last and join
    let certificateId = url.split('=')[1]  
    const certificates = {
        '1': 'certificates/2023/Design and Modelling BSNU 2023-1.jpg',
        '2': 'certificates/2023/Design and Modelling BSNU 2023-2.jpg',
        '3': 'certificates/2023/Design and Modelling BSNU 2023-3.jpg',
        '4': 'certificates/2023/Design and Modelling BSNU 2023-4.jpg',
        '5': 'certificates/2023/Design and Modelling BSNU 2023-5.jpg',
        '6': 'certificates/2023/Design and Modelling BSNU 2023-6.jpg',
        '7': 'certificates/2023/Design and Modelling BSNU 2023-7.jpg',
        '8': 'certificates/2023/Design and Modelling BSNU 2023-8.jpg',
        '9': 'certificates/2023/Design and Modelling BSNU 2023-9.jpg',
        '10': 'certificates/2023/Design and Modelling BSNU 2023-10.jpg',
        '11': 'certificates/2023/Design and Modelling BSNU 2023-11.jpg',
        '12': 'certificates/2023/Design and Modelling BSNU 2023-12.jpg',
        '13': 'certificates/2023/Design and Modelling BSNU 2023-13.jpg',
        '14': 'certificates/2023/Design and Modelling BSNU 2023-14.jpg',
        '15': 'certificates/2023/Design and Modelling BSNU 2023-15.jpg',
        '16': 'certificates/2023/Design and Modelling BSNU 2023-16.jpg',
        '17': 'certificates/2023/Design and Modelling BSNU 2023-17.jpg',
        '18': 'certificates/2023/Design and Modelling BSNU 2023-18.jpg',
        '19': 'certificates/2023/Design and Modelling BSNU 2023-19.jpg',
        '20': 'certificates/2023/Design and Modelling BSNU 2023-20.jpg',
        '21': 'certificates/2023/Design and Modelling BSNU 2023-21.jpg',
        '22': 'certificates/2023/Design and Modelling BSNU 2023-22.jpg',
        '23': 'certificates/2023/Design and Modelling BSNU 2023-23.jpg',
        '24': 'certificates/2023/Design and Modelling BSNU 2023-24.jpg',
        '25': 'certificates/2023/Design and Modelling BSNU 2023-25.jpg',
        '26': 'certificates/2023/Design and Modelling BSNU 2023-26.jpg',
        '27': 'certificates/2023/Design and Modelling BSNU 2023-27.jpg',
        '28': 'certificates/2023/Design and Modelling BSNU 2023-28.jpg',
        '29': 'certificates/2023/Design and Modelling BSNU 2023-29.jpg',
        '30': 'certificates/2023/Design and Modelling BSNU 2023-30.jpg',
        '31': 'certificates/2023/Design and Modelling BSNU 2023-31.jpg',
        '32': 'certificates/2023/Design and Modelling BSNU 2023-32.jpg',
        '33': 'certificates/2023/Design and Modelling BSNU 2023-33.jpg',
        '34': 'certificates/2023/Design and Modelling BSNU 2023-34.jpg',


    }
    
    if (Number.isInteger(+certificateId)) {
      window.location.href = `${domain}/${certificates[certificateId]}`;
    }
    
  
  });