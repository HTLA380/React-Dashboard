export const formatDate = (date: Date) => {
  const dateObject = new Date(date);
  const month = dateObject.toLocaleString("default", {
    month: "short",
  });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
};

export const formatNumber = (number: number) => {
  return (number / 1000).toFixed(2);
};
