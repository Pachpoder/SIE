// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from 'axios';
// import { useState, useEffect } from 'react';



// const BirthdayCalendar = () => {

//     const [birthdays, setbirthdays] = useState([])

//     useEffect(() => {
//       const fetchBirthdays = async () => { 
//         try {
//             const response = await axios.get('http://localhost:3001/birthdays')
//             setbirthdays(response.data);
//         } catch (error) {
//             console.error('Error fetching birthdays', error);
//       }
//     };

//     fetchBirthdays();
//     }, []);
    
    
//   return (
//     <section className='wpo-calendar-section section-padding'>
//         <div className='container'>
//             <h2 className='text-center'>Cumplea;ero del Mes</h2>
//             <div className='calendar-grid'>
//                 {birthdays.leght > 0 ? (
//                     birthdays.map((birthday, index) => (
//                         <div className="calendar-item" key={index}>
//                         <h3 className="calendar-name">{birthday.name}</h3>
//                         <p className="calendar-age">Cumple {birthday.age} años</p>
//                         <p className="calendar-date">Fecha: {new Date(birthday.date).toLocaleDateString()}</p>
//                     </div>
//                     ))
//                 ) : (
//                     <p className='text-center'>No hay cumpleaños registrados para este mes.</p>
//                 )}
//             </div>
//         </div>    
//     </section>
//   );
// };

// export default BirthdayCalendar;