export default function initialClockDisplay(timeZone) {
    const date = new Date();
    const deg = 6;
    const ss = date.getSeconds();
    const mm = date.getMinutes();
    const hh = date.getUTCHours() + Number.parseInt(timeZone / 60);

    const hands = {
        hours: hh * 30 + mm / 2,
        minutes: mm * deg,
        seconds: ss * deg,
      };
    
    return hands;
}