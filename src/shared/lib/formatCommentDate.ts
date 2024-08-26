export default function formatCommentDate(date: Date){
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`
}