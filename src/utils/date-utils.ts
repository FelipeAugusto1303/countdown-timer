import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export function calcTimeRemaining(futureDate: string): any {
  // Data atual
  const now = new Date();

  // Converter a data futura
  const dataFuturaDate = new Date(futureDate);

  // Calcular diferença em dias, horas e minutos
  const days = differenceInDays(dataFuturaDate, now);
  const hours = differenceInHours(dataFuturaDate, now) % 24;
  const minutes = differenceInMinutes(dataFuturaDate, now) % 60;
  const seconds = differenceInSeconds(dataFuturaDate, now) % 60;

  if(now > dataFuturaDate) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      done: true,
    }
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    done: false,
  }
}