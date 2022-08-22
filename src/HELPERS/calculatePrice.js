

export const calculatePrice = (useRentBy, setPriceTotalRent, data = JSON.parse(localStorage.getItem('data_bike_storage'))) => {


    // console.log(data);

    var operation = 0;

    var data_storage = {};

    switch (data.bike_type) {

        case "Electric bike":
            operation = useRentBy * 10;
            data_storage.id = data.id;
            data_storage.bike_type = data.bike_type;
            data_storage.name_bike = data.name_bike;
            data_storage.price_total = operation;
            data_storage.rentBy = useRentBy;

            break;

        case "Regular bike":

            if (useRentBy > 3) {
                operation = useRentBy * 10;
            } else {
                operation = 10;
            }

            data_storage.id = data.id;
            data_storage.bike_type = data.bike_type;
            data_storage.name_bike = data.name_bike;
            data_storage.price_total = operation;
            data_storage.rentBy = useRentBy;

            break;

        case "Old bike":

            if (useRentBy > 5) {
                operation = useRentBy * 10;
            } else {
                operation = 10;
            }

            data_storage.id = data.id;
            data_storage.bike_type = data.bike_type;
            data_storage.name_bike = data.name_bike;
            data_storage.price_total = operation;
            data_storage.rentBy = useRentBy;

            break;

    }



    // console.log(data_storage);


    setPriceTotalRent(operation);


    localStorage.setItem('data_bike_storage', JSON.stringify(data_storage));



}