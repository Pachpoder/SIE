import simg from '../images/service/card-mision.jpeg'
import simg2 from '../images/service/card-vision.png'
import simg3 from '../images/service/card-valores.png'
import simg4 from '../images/service/card-politicas.jpeg'

import sImgS1 from '../images/service-single/primera-mision.jpg'
import sImgS2 from '../images/service-single/img-2.jpg'
import sImgS3 from '../images/service-single/img-3.jpg'
import sImgS4 from '../images/service-single/cuarta-politica.jpg'

import sSingleimg1 from '../images/service-single/2.jpg'
import sSingleimg2 from '../images/service-single/3.jpg'

import frutoarea from '../images/service/fruto/fruto-area-educacion-vida.webp';
import frutocomunicacon from '../images/service/fruto/fruto-medios-comunicacion.webp';

const Services = [
    {
        Id: '1',
        sImg: simg,
        sImgS: sImgS1,
        sTitle: 'Cápsula 5',
        description: 'DANDO FRUTO EN LOS MEDIOS DE COMUNICACIÓN',
        videoUrl: 'https://drive.google.com/file/d/1KOA_wzkZE9sjwdc498gNTe2lYTukj735/view?usp=sharing', 
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret.',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        image: frutocomunicacon,  // Aquí puedes agregar otra imagen si es necesario.
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '2',
        sImg: simg,
        sImgS: sImgS1,
        sTitle: 'Cápsula 1',
        description: 'CÓMO DAR FRUTO EN EL ÁREA DE EDUCACIÓN EN MI VIDA',
        videoUrl: 'https://drive.google.com/file/d/1RyvfLBq0b8UH24VWG9igaqPRF9hUynf3/view?usp=sharing',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret.',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        image: frutoarea,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '3',
        sImg: simg2,
        sImgS: sImgS2,
        sTitle: 'Cápsula 2',
        description: 'CÓMO DAR FRUTO EN EL ÁREA DE EDUCACIÓN EN MI VIDA',
        videoUrl: 'https://drive.google.com/file/d/1vZL8hKy8hk7lwc2jRVqQa4ar6gGqD_fU/view?usp=sharing',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret.',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        image: frutoarea,  // Otra imagen opcional
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
    {
        Id: '4',
        sImg: simg2,
        sImgS: sImgS2,
        sTitle: 'Cápsula 3',
        description: 'CÓMO DAR FRUTO EN EL ÁREA DE EDUCACIÓN EN MI VIDA',
        videoUrl: 'https://drive.google.com/file/d/1AHFT59mdSMUsDT_cwEm25a-ra_RvySUX/view?usp=sharing',
        des2: 'Lacus, etiam sed est eu tempus need Temer diam congue laoret.',
        des3: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        image: frutoarea,  // Otra imagen opcional
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
    },
];

export default Services;
