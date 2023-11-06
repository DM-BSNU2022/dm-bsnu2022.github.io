window.addEventListener('load', (event) => {
    let url = window.location.href;
    const urlParts = url.split('/');
    let domain = urlParts.slice(0, -1).join('/'); // slice except last and join
    let certificateId = url.split('=')[1]  
    const certificates = {
        '5': 'certificates/participants/5_Євсюков-«Design and Modelling BSNU 2022».jpg',
        '10': 'certificates/participants/10_Адамчук-«Design and Modelling BSNU 2022».jpg',
        '15': 'certificates/participants/15_Борецький-«Design and Modelling BSNU 2022».jpg',
        '20': 'certificates/participants/20_Горішна-«Design and Modelling BSNU 2022».jpg',
        '25': 'certificates/participants/25_Даниленко-«Design and Modelling BSNU 2022».jpg',
        '30': 'certificates/participants/30_Жуковський-«Design and Modelling BSNU 2022».jpg',
        '35': 'certificates/participants/35_Коверзнєв-«Design and Modelling BSNU 2022».jpg',
        '40': 'certificates/participants/40_Корнюков-«Design and Modelling BSNU 2022».jpg',
        '45': 'certificates/participants/45_Кравченко-«Design and Modelling BSNU 2022»..jpg',
        '50': 'certificates/participants/50_Левченко-«Design and Modelling BSNU 2022».jpg',
        '55': 'certificates/participants/55_Пивоваров-«Design and Modelling BSNU 2022».jpg',
        '60': 'certificates/participants/60_Тищенко-«Design and Modelling BSNU 2022».jpg',
        '65': 'certificates/participants/65_Чорний-«Design and Modelling BSNU 2022».jpg',
        '70': 'certificates/participants/70_Чубик-«Design and Modelling BSNU 2022».jpg',
        '75': 'certificates/participants/75_Шпилюк-«Design and Modelling BSNU 2022».jpg',
        '8010': 'certificates/8010_Журі-Давиденко-«Design and Modelling BSNU 2022».jpg',
        '8015': 'certificates/8015_Журі-Костін-«Design and Modelling BSNU 2022».jpg',
        '8020': 'certificates/8020_Журі-Медвінський-«Design and Modelling BSNU 2022».jpg',
        '8025': 'certificates/8025_Журі-Обухова-«Design and Modelling BSNU 2022».jpg',
        '8030': 'certificates/8030_Журі-Петросян-«Design and Modelling BSNU 2022».jpg',
        '8035': 'certificates/8035_Журі-Попель-«Design and Modelling BSNU 2022».jpg',
        '8040': 'certificates/8040_Журі-Романків-«Design and Modelling BSNU 2022».jpg',
        '8045': 'certificates/8045_Журі-Сімакова-«Design and Modelling BSNU 2022».jpg',
        '8050': 'certificates/8050_Журі-Салтан-«Design and Modelling BSNU 2022».jpg',
        '8055': 'certificates/8055_Журі-Салтовський-«Design and Modelling BSNU 2022».jpg',
        '8060': 'certificates/8060_Журі-Сахневич-«Design and Modelling BSNU 2022».jpg',
        '8065': 'certificates/8065_Журі-Собко-«Design and Modelling BSNU 2022».jpg',
        '8070': 'certificates/8070_Орг-Бурлаченко-«Design and Modelling BSNU 2022».jpg',
        '8075': 'certificates/8075_Орг-Данилова-«Design and Modelling BSNU 2022».jpg',
        '8080': 'certificates/8080_Орг-Журавська-«Design and Modelling BSNU 2022»_Page1.jpg',
        '8085': 'certificates/8085_Орг-Сіденко-«Design and Modelling BSNU 2022».jpg',
        '8090': 'certificates/8090_Орг-Фрич-«Design and Modelling BSNU 2022».jpg',
        '0001': 'certificates/2023/Design and Modelling BSNU 2023-1.jpg',
        '0002': 'certificates/2023/Design and Modelling BSNU 2023-2.jpg',
        '0003': 'certificates/2023/Design and Modelling BSNU 2023-3.jpg',
        '0004': 'certificates/2023/Design and Modelling BSNU 2023-4.jpg',
        '0005': 'certificates/2023/Design and Modelling BSNU 2023-5.jpg',
        '0006': 'certificates/2023/Design and Modelling BSNU 2023-6.jpg',
        '0007': 'certificates/2023/Design and Modelling BSNU 2023-7.jpg',
        '0008': 'certificates/2023/Design and Modelling BSNU 2023-8.jpg',
        '0009': 'certificates/2023/Design and Modelling BSNU 2023-9.jpg',
        '0010': 'certificates/2023/Design and Modelling BSNU 2023-10.jpg',
        '0011': 'certificates/2023/Design and Modelling BSNU 2023-11.jpg',
        '0012': 'certificates/2023/Design and Modelling BSNU 2023-12.jpg',
        '0013': 'certificates/2023/Design and Modelling BSNU 2023-13.jpg',
        '0014': 'certificates/2023/Design and Modelling BSNU 2023-14.jpg',
        '0015': 'certificates/2023/Design and Modelling BSNU 2023-15.jpg',
        '0016': 'certificates/2023/Design and Modelling BSNU 2023-16.jpg',
        '0017': 'certificates/2023/Design and Modelling BSNU 2023-17.jpg',
        '0018': 'certificates/2023/Design and Modelling BSNU 2023-18.jpg',
        '0019': 'certificates/2023/Design and Modelling BSNU 2023-19.jpg',
        '0020': 'certificates/2023/Design and Modelling BSNU 2023-20.jpg',
        '0021': 'certificates/2023/Design and Modelling BSNU 2023-21.jpg',
        '0022': 'certificates/2023/Design and Modelling BSNU 2023-22.jpg',
        '0023': 'certificates/2023/Design and Modelling BSNU 2023-23.jpg',
        '0024': 'certificates/2023/Design and Modelling BSNU 2023-24.jpg',
        '0025': 'certificates/2023/Design and Modelling BSNU 2023-25.jpg',
        '0026': 'certificates/2023/Design and Modelling BSNU 2023-26.jpg',
        '0027': 'certificates/2023/Design and Modelling BSNU 2023-27.jpg',
        '0028': 'certificates/2023/Design and Modelling BSNU 2023-28.jpg',
        '0029': 'certificates/2023/Design and Modelling BSNU 2023-29.jpg',
        '0030': 'certificates/2023/Design and Modelling BSNU 2023-30.jpg',
        '0031': 'certificates/2023/Design and Modelling BSNU 2023-31.jpg',
        '0032': 'certificates/2023/Design and Modelling BSNU 2023-32.jpg',
        '0033': 'certificates/2023/Design and Modelling BSNU 2023-33.jpg',
        '0034': 'certificates/2023/Design and Modelling BSNU 2023-34.jpg',


    }
    
    if (Number.isInteger(+certificateId)) {
      window.location.href = `${domain}/${certificates[certificateId]}`;
    }
    
  
  });