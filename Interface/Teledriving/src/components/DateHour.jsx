import React from 'react';

const DateHour = () => {
  const currentDate = new Date();
  console.log(currentDate)
  // Obtener la hora
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
 
  const time = `${hours}:${minutes}`;

  // Obtener la fecha
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Los meses en JavaScript comienzan en 0
  const day = currentDate.getDate();
  const date = `${day}/${month}/${year}`;

  return (
    <>
      <span>{time}</span>
      <br></br>
      <span>{date}</span>
    </>
  );
};

export default DateHour;
