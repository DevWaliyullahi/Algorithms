// Implement a function that classifies a temperatur as "Freezing (below 0)", "Cold (between 0 and 10)", "Mild (between 10 and 20)", "Warm (between 20 and 30)", or "Hot (above 30)" based on a given temperature value.

function classifyTemp(temp) {
    if (temp < 0) {
        return "Freezing";
    } else if (temp >= 0 && temp < 10) {
        return "Cold";
    } else if (temp >= 10 && temp < 20) {
        return "Mild";
    } else if (temp >= 20 && temp < 30) {
        return "Warm";
    } else if (temp >= 30) {
        return "Hot";
    }
}