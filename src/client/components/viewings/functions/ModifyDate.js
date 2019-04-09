export function modifyDate(item){
    const date = item.date.split('T')[0].replace(/-/g,'/');
    const time = item.date.split('T')[1].slice(0,5);
    
    return {date: date, time: time}
}