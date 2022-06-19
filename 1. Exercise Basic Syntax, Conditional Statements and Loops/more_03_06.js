function nextDay(year, month, day) {
    month -= 1;
    let today = new Date(year, month, day);
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(tomorrow);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(tomorrow);
    let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(tomorrow);
    console.log(`${ye}-${mo}-${da}`);
}