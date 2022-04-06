module.exports = function (){
    let time = new Date();
    let day = ("0" + time.getDate()).slice(-2);
    let month = time.getMonth()+1;
    let year = time.getFullYear();
    let date = `${year}-${month}-${day}`;
    return date;
}