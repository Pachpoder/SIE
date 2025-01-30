// images
import blogImg1 from "../images/blog/Mision.png";
import blogImg2 from "../images/blog/Vision.png";
import blogImg3 from "../images/blog/Valores.png";

import blogSingleImg1 from "../images/blog/blog-single/img-1.jpg";
import blogSingleImg2 from "../images/blog/blog-single/img-2.jpg";
import blogSingleImg3 from "../images/blog/blog-single/img-3.jpg";



const blogs = [
    {
        id: '1',
        title: 'Misión',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Esto son los valores de una empresa ',
        authorTitle:'Sineor Consultant',
        // create_at: '25 Dec, 2020',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Visión',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        // author: 'Konal Biry',
        authorTitle:'Creative Director',
        // create_at: '13 Dec,2022',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Valores',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        // author: 'Aliza Anny',
        authorTitle:'Art Director',
        // create_at: '22 Dec,2022',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;