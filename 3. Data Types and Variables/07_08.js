function requiredReading(bookPage, readHour, dayRead) {
    let totalTime = bookPage/readHour;
    let totalDays = totalTime/dayRead;
    console.log(`${totalDays}`);
}
requiredReading(212,20,2)