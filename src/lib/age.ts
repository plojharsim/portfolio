const BIRTH_DATE = { year: 2010, month: 9, day: 16 };

export const getAge = (now: Date = new Date()): number => {
  const hadBirthday =
    now.getMonth() + 1 > BIRTH_DATE.month ||
    (now.getMonth() + 1 === BIRTH_DATE.month && now.getDate() >= BIRTH_DATE.day);
  return now.getFullYear() - BIRTH_DATE.year - (hadBirthday ? 0 : 1);
};
