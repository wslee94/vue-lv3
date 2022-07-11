<template>
  <div>
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    barChartData: {
      type: Array,
    },
  },
  mounted() {
    // 컴포넌트가 생성되고 마운트된 이후에 DOM에 접근해야해서 mounted() hook function 이용
    // const ctx = document.getElementById("barChart").getContext("2d");
    const ctx = this.$refs.barChart.getContext("2d");
    const barChart = new this.$_Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: this.barChartData,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style></style>
