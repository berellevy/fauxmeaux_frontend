const MINUTE = 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  YEAR = DAY * 365;

function getTimeAgo(date) {
  const secondsAgo = Math.round((+new Date() - date) / 1000);

  if (secondsAgo < MINUTE) {
    return secondsAgo + "s";
  } else if (secondsAgo < HOUR) {
    return Math.floor(secondsAgo / MINUTE) + "m";
  } else if (secondsAgo < DAY) {
    return Math.floor(secondsAgo / HOUR) + "h";
  } else if (secondsAgo < YEAR) {
    return date.toLocaleString("default", { day: "numeric", month: "short" });
  } else {
    return date.toLocaleString("default", { year: "numeric", month: "short" });
  }
}

export default getTimeAgo