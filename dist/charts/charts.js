const dark_orange = "hsl(10, 67%, 41%)";
const orange = "hsl(10, 67%, 61%)";
const dark_blue = "hsl(187, 33%, 40%)";
const blue = "hsl(187, 33%, 60%)";
const bar_chart_ctx = document.getElementById("spending-chart").getContext("2d");
const pie_chart_ctx = document.getElementById("pie-chart").getContext("2d");
const bar_chart_data = {
    type: "bar",
    data: {
        labels:["mon", "tue", "wed", "thr", "fri", "sat", "sun"],
        datasets: [{
            label: "Spending - Last 7 days",
            data: [50, 100, 140, 90, 70, 125, 80],
            backgroundColor: [orange, orange, blue, orange, orange, orange, orange],
            borderColor: [dark_orange, dark_orange, dark_blue, dark_orange, dark_orange, dark_orange, dark_orange],
            borderWidth: 3,
            borderRadius: 10
        }]
    },
    options: {
        scales: {
            y: {
                beginsAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            x : {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};
const pie_chart_data = {
    type: "pie",
    data: {
        labels: ["Turkey", "Mashed Potatoes", "Sweet Rolls", "Stuffing", "Pumpkin Pie"],
        datasets: [{
            label: "Thanksgiving Day Calories",
            data: [400, 320, 200, 150, 600],
            backgroundColor: ["#e37a30", "#9fa840", "#efb140", "#745d20", "#ffc830"],
            hoverOffset: 4
        }]
    }
};
const spending_chart = new Chart(bar_chart_ctx, bar_chart_data);
const pie_chart = new Chart(pie_chart_ctx, pie_chart_data);
