import { getDay } from "./dateFormat";


var base = 0;
var result = 0;


// Obtenemos los días por venir, es decir los 3 siguientes días
function repeat3and5(day_calendar, rep) { // recibe la fecha y la cantidad a repetir, límite.

    var inc1 = 1;

    var days_stored = [day_calendar];

    for (let i = 0; i <= rep; i++) {

        if (days_stored[i] >= 31) {
            days_stored.push(inc1);
            inc1 += 1;
        } else {
            days_stored.push(days_stored[i] + 1);
        }
    }

    // console.log(days_stored);

    return days_stored;

}


export const calculatePrice = (useDatePickerValue, useRentBy, setPriceTotalRent, data = JSON.parse(localStorage.getItem('data_bike_storage'))) => {

    // console.log(data);
    var day_rent = getDay(useDatePickerValue);

    // console.log(day_rent);

    var data_storage = {};

    switch (data?.bike_type) {

        case "Electric bike":
            // result = useRentBy * 10;
            base = day_rent <= 14 ? 10 : 12;
            result = useRentBy * base;
            break;

        case "Regular bike":
            //  console.log(day_rent);

            var day_repeat = repeat3and5(day_rent, 1);
            // console.log(repeat3(day_rent));

            // // Recorremos x3 ya que lo que importa es el calendario la data...
            for (let i = 0; i <= (day_repeat.length - 1); i++) {
                // console.log("10 or 12 USD"); //  console.log(day_repeat[i]);

                base = day_rent <= 14 ? 10 : 12;
                //result = base;

            }


            // console.log(useRentBy <= day_repeat.length);console.log(result);

            // <= 3
            if (useRentBy <= day_repeat.length) {
                result = base;

            } else {
                result = (useRentBy * base) - (base * 2); // 1 = 12, 2=24, 3= 36
            }

            // console.log(result);


            break;

        case "Old bike":
            // console.log(day_rent);


            var day_repeat = repeat3and5(day_rent, 3);

            // console.log(day_repeat);

            // // Recorremos x3 ya que lo que importa es el calendario la data...
            for (let i = 0; i <= (day_repeat.length - 1); i++) {
                // console.log("10 or 12 USD"); 
                // console.log(day_repeat[i]);

                base = day_rent <= 14 ? 10 : 12;
                result = base;
            }

            // console.log(useRentBy <= day_repeat.length);

            // <= 5
            if (useRentBy <= day_repeat.length) {
                result = base;

            } else {
                result = (useRentBy * base) - (base * 4); // 1 = 12, 2=24, 3= 36

            }

            // console.log(result);

            break;
    }


    data_storage.id = data?.id;
    data_storage.bike_type = data?.bike_type;
    data_storage.name_bike = data?.name_bike;
    data_storage.price_total = result;
    data_storage.rentBy = useRentBy;

    // console.log(data_storage);

    setPriceTotalRent(result);

    localStorage.setItem('data_bike_storage', JSON.stringify(data_storage));

}