function getTimeOfDay(): string {
  const currentHour = new Date().getHours();
  let timeOfDay;

  switch (true) {
    case currentHour >= 6 && currentHour < 12:
      timeOfDay = "Morning";
      break;
    case currentHour >= 12 && currentHour < 18:
      timeOfDay = "Afternoon";
      break;
    case currentHour >= 18 && currentHour < 24:
      timeOfDay = "Evening";
      break;
    default:
      timeOfDay = "Night";
  }

  return timeOfDay;
}

export const timeOfDay = getTimeOfDay();
