
var result_1 = 0;
var result_2 = 0;
var sustract = 0;
var result = 0;

export const calculatePrice = (useRentBy, setPriceTotalRent, data = JSON.parse(localStorage.getItem('data_bike_storage'))) => {

    // console.log(data);

    var data_storage = {};

    switch (data.bike_type) {

        case "Electric bike":
            result = useRentBy * 10;
            break;

        case "Regular bike":

            for (let i = 1; i <= useRentBy; i++) {
                // console.log(i);

                if (i <= 14) {
                    // console.log("10 USD");
                    result_1 = i * 10;
                    result_2 = 0;

                } else {

                    sustract = i - 14;

                    if (i >= 15 && i <= 17) {

                        // console.log("12 USD");
                        result_2 = sustract * 12;

                    } else {
                        // console.log("10 USD");
                        result_2 = (sustract * 10) + 6;
                    }

                }
            }

            // console.log(result_1 + result_2);
            result = result_1 + result_2;

            // console.log(result);

            break;

        case "Old bike":

            for (let i = 1; i <= useRentBy; i++) {
                // console.log(i);
                if (i <= 14) {
                    // console.log("10 USD");
                    result_1 = i * 10;
                    result_2 = 0;

                } else {

                    sustract = i - 14;

                    if (i >= 15 && i <= 20) {

                        // console.log("12 USD");
                        result_2 = sustract * 12;

                    } else {
                        // console.log("10 USD");
                        result_2 = (sustract * 10) + 12;
                    }
                }
            }

            // console.log(result_1 + result_2);
            result = result_1 + result_2;

            // console.log(result);

            break;

        default:
            break;
    }

    data_storage.id = data.id;
    data_storage.bike_type = data.bike_type;
    data_storage.name_bike = data.name_bike;
    data_storage.price_total = result;
    data_storage.rentBy = useRentBy;

    // console.log(data_storage);

    // console.log(result);

    setPriceTotalRent(result);

    localStorage.setItem('data_bike_storage', JSON.stringify(data_storage));

}