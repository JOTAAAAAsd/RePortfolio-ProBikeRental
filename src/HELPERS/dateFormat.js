
var date = new Date;

// Solo es el valor inicial para consentir al date-picker, si no me dice que no es un formato válido
export const dateFormatInit = () => {

    // 2022-08-11
    var format_date = (date.getFullYear()).toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString();

    // console.log(format_date);

    return format_date;

}

// Un día menos, solución con replace: replace(/-/g, '\/');
export const getDay = (date1 = "") => {


    var obj_date1 = new Date(date1.replace(/-/g, '\/'));

    // console.log(obj_date1.getDate());

    return obj_date1.getDate();
}


