<template>
  <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  mounted() {
    // 컴포넌트가 생성되고 마운트된 이후에 DOM에 접근해야해서 mounted() hook function 이용
    // const ctx = document.getElementById("lineChart").getContext("2d");
    const ctx = this.$refs.lineChart.getContext("2d");
    const lineChart = new this.$_Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
        },
      },
    });
  },
};
</script>

<style></style>
