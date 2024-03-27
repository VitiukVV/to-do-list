export const convertSecondsToHoursAndMinutes = (seconds: number): string => {
  const date = new Date(seconds * 1000);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};
