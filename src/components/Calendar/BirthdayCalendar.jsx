import React, { useEffect, useState } from 'react';
import { format, startOfMonth, endOfMonth, addDays, isSameDay, getDay } from 'date-fns';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/BirthdayCalendar.module.css';  // Add your custom styles here

const BirthdayCalendar = () => {
    const [birthdays, setBirthdays] = useState([
        { name: 'Juan Pérez', age: 30, date: '2025-01-05' },
        { name: 'María López', age: 25, date: '2025-01-15' },
        { name: 'Carlos García', age: 28, date: '2025-01-20' },
        { name: 'Ana Torres', age: 22, date: '2025-01-30' }
    ]);

    const today = new Date();
    const monthStart = startOfMonth(today);
    const monthEnd = endOfMonth(today);
    const daysInMonth = [];
    let currentDay = monthStart;

    // Generate all days in the current month
    while (currentDay <= monthEnd) {
        daysInMonth.push(currentDay);
        currentDay = addDays(currentDay, 1);
    }

    return (
        <section className="wpo-calendar-section section-padding">
            <div className="container">
                <h2 className="text-center">Cumpleaños del Mes</h2>
                <div className="calendar-container">
                    <div className="calendar-header">
                        <h3>{format(today, 'MMMM yyyy')}</h3>
                    </div>
                    <div className="calendar-grid">
                        {daysInMonth.map((day, index) => {
                            const dayBirthdays = birthdays.filter(birthday => isSameDay(new Date(birthday.date), day));

                            return (
                                <div key={index} className={`calendar-day ${getDay(day) === 0 ? 'sunday' : ''}`}>
                                    <span className="calendar-date">{format(day, 'd')}</span>
                                    {dayBirthdays.length > 0 && (
                                        <div className="birthday-list">
                                            {dayBirthdays.map((birthday, idx) => (
                                                <div key={idx} className="birthday-item">
                                                    <span>{birthday.name} ({birthday.age} años)</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BirthdayCalendar;
