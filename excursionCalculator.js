function excursionCalculator(input) {
    let touristNum = Number(input[0]);
    let season = input[1];
    let price = 0;
    if (touristNum > 0 && touristNum <= 5) {
        if (season === "spring") {
            price = touristNum * 50
        } else if (season === "summer") {
            price = touristNum * 48.50
        } else if (season === "autumn") {
            price = touristNum * 60
        } else if (season === "winter") {
            price = touristNum * 86
        }
    } else {
        if (season === "spring") {
            price = touristNum * 48;
        } else if (season === "summer") {
            price = touristNum * 45;
        } else if (season === "autumn") {
            price = touristNum * 49.5;
        } else if (season === "winter") {
            price = touristNum * 85;
        }
    }
    if (season === "summer") {
        price = price * 0.85;
    } else if (season === "winter") {
        price = price * 1.08;
    } else {
        price = price;
    }

    console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator(["5",
    "spring"])
