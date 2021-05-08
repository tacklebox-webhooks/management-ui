export const formatDateTime = (timestamp, dateOnly = false) => {
  const date = new Date(timestamp);
  if (dateOnly) {
    return date.toLocaleString("default", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } else {
    return date.toLocaleString("default", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
      hour12: false,
    });
  }
};
