window.addEventListener('load', (event) => {
    let url = window.location.href;
    const urlParts = url.split('/');
    let domain = urlParts.slice(0, -1).join('/'); // slice except last and join
    let certificateId = url.split('=')[1]  
    const certificates = {
        '5' : 'certificates/participants/5_Євсюков-«Design and Modelling BSNU 2022».jpg',
        '10' : 'certificates/participants/10_Адамчук-«Design and Modelling BSNU 2022».jpg',
        '15' : 'certificates/participants/15_Борецький-«Design and Modelling BSNU 2022».jpg',
        '20' : 'certificates/participants/20_Горішна-«Design and Modelling BSNU 2022».jpg',
        '25' : 'certificates/participants/25_Даниленко-«Design and Modelling BSNU 2022».jpg',
        '30' : 'certificates/participants/30_Жуковський-«Design and Modelling BSNU 2022».jpg',
        '35' : 'certificates/participants/35_Коверзнєв-«Design and Modelling BSNU 2022».jpg',
        '40' : 'certificates/participants/40_Корнюков-«Design and Modelling BSNU 2022».jpg',
        '45' : 'certificates/participants/45_Кравченко-«Design and Modelling BSNU 2022»..jpg',
        '50' : 'certificates/participants/50_Левченко-«Design and Modelling BSNU 2022».jpg',
        '55' : 'certificates/participants/55_Пивоваров-«Design and Modelling BSNU 2022».jpg',
        '60' : 'certificates/participants/60_Тищенко-«Design and Modelling BSNU 2022».jpg',
        '65' : 'certificates/participants/65_Чорний-«Design and Modelling BSNU 2022».jpg',
        '70' : 'certificates/participants/70_Чубик-«Design and Modelling BSNU 2022».jpg',
        '75' : 'certificates/participants/75_Шпилюк-«Design and Modelling BSNU 2022».jpg',
        //juri+org
        '8010' : 'certificates/8010_Журі-Давиденко-«Design and Modelling BSNU 2022».jpg',
        '8015' : 'certificates/8015_Журі-Костін-«Design and Modelling BSNU 2022».jpg',
        '8020' : 'certificates/8020_Журі-Медвінський-«Design and Modelling BSNU 2022».jpg',
        '8025' : 'certificates/8025_Журі-Обухова-«Design and Modelling BSNU 2022».jpg',
        '8030' : 'certificates/8030_Журі-Петросян-«Design and Modelling BSNU 2022».jpg',
        '8035' : 'certificates/8035_Журі-Попель-«Design and Modelling BSNU 2022».jpg',
        '8040' : 'certificates/8040_Журі-Романків-«Design and Modelling BSNU 2022».jpg',
        '8045' : 'certificates/8045_Журі-Сімакова-«Design and Modelling BSNU 2022».jpg',
        '8050' : 'certificates/8050_Журі-Салтан-«Design and Modelling BSNU 2022».jpg',
        '8055' : 'certificates/8055_Журі-Салтовський-«Design and Modelling BSNU 2022».jpg',
        '8060' : 'certificates/8060_Журі-Сахневич-«Design and Modelling BSNU 2022».jpg',
        '8065' : 'certificates/8065_Журі-Собко-«Design and Modelling BSNU 2022».jpg',
        '8070' : 'certificates/8070_Орг-Бурлаченко-«Design and Modelling BSNU 2022».jpg',
        '8075' : 'certificates/8075_Орг-Данилова-«Design and Modelling BSNU 2022».jpg',
        '8080' : 'certificates/8080_Орг-Журавська-«Design and Modelling BSNU 2022»_Page1.jpg',
        '8085' : 'certificates/8085_Орг-Сіденко-«Design and Modelling BSNU 2022».jpg',
        '8090' : 'certificates/8090_Орг-Фрич-«Design and Modelling BSNU 2022».jpg',


    }
    
    if (Number.isInteger(+certificateId)) {
      window.location.href = `${domain}/${certificates[certificateId]}`;
    }
    
  
  });