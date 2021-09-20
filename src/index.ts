/** @format */

export default class Date2Cron {
  constructor(private date: Date) {}

  convert(): string {
    const minute = this.date.getMinutes();
    const hour = this.date.getHours();
    const dayOfMonth = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const dayOfWeek = this.date.getDay();

    return `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
  }
}
