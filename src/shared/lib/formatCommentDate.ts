export default function formatCommentDate(date: Date): string{
    const formatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short' });
    const time = `${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`;
    const dmy = formatter.format(date);

    return `${dmy} в ${time}`
}