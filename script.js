async function getTotal() {
  const response = await fetch(
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=brz&filters=%7B%22shnat_yitzur%22%3A%222023%22%7D"
  );
  const data = await response.json();
  const total = data.result.total;
  const chartData = {
    labels: ["Total"],
    datasets: [
      {
        label: "Total Field",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [total],
      },
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        min: 0,
        max: 150,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: chartOptions,
  });
}

getTotal();
