<template>
  <div>
    <div class="header">
      <span class="TitleText">
        <strong>OVERVIEW</strong>
      </span>
      <div class="time">
        <span>{{startDate}}
          <i class="el-icon-caret-right"></i> {{endDate}} </span>
      </div>
    </div>
    <div class="card">
      <div class="box">
        <span>TOTAL REVENUE</span>
        <div class="m-10">
          <span class="cardGreed">{{total_revenue}}</span>
        </div>
      </div>
      <div class="box">
        <span>TOTAL COST</span>
        <div class="m-10">
          <span class="cardRed">{{total_cost}}</span>
        </div>
      </div>
      <div class="box">
        <span>NEW INCOME</span>
        <div class="m-10">
          <span class="cardBlue">{{new_income}}</span>
        </div>
      </div>
    </div>
    <div class="chart box">
      <div class="TitleText">
        <strong>Activity</strong>
      </div>
      <vue-chart type="line" :data="chartData" :options="option"></vue-chart>
    </div>
    <div class="flex-justify-cneter">
      <div class="bottom-card box ">
        <div class="ml-50 d-flex-column w-100   ">
          <h3 class="TitleText1">Transaction Website</h3>
          <div class="infoo" v-for="(data,index) in leftInfoData" :key="index">
            <div class="infoo ">
            <img :src=data.img alt="" width="80px" height="80px">
            <div style="flex-grow:">
              <span class="ml-20">{{data.url}}</span>
            </div>
            </div>
            <div class="d-flex mr-10" >
              <div class="spannum m-10">{{data.num}}</div>
              <i  :style="{color:data.color}" :class="data.icon" class="m-10"></i>
              <span :style="{color:data.color}"  class="m-10">{{data.persent}}</span>
            </div>

          </div>
        </div>
      </div>
      <div class="bottom-card box">
        <div class="ml-50 w-100">
          <div class="TitleText1">
            <H3>Latest Orders</H3>
          </div>
          <div class="rightInfo" v-for="(data,index) in rightInfoData" :key="index">
            <img :src="data.img" alt="" width="80px" height="80px">
            <div class="ml-20">
              <h3>{{data.itemName}}</h3>
              <div><i class="el-icon-date"></i>{{data.date}}</div>
              <span><i class="el-icon-service"></i>{{data.orderName}}</span>
            </div>
            <div class="noUse"></div>
            <div class="mr-10">
              <div style="color:#757575">Total</div>
              <span> <strong>{{data.money}}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '2018/6/6',
      endDate: '2018/6/12',
      option: {
        elements: {
          line: {
            tension: 0, // disables bezier curves
            fill: false,
          },
        },
      },
      chartData: {
        labels: ['JUN 6', 'JUN 7', 'JUN 8', 'JUN 9', 'JUN 10', 'JUN 11', 'JUN 12'],
        datasets: [{
          label: 'TOTAL REVENUE',
          data: [2700, 7500, 4500, 9000, 4000, 5000, 6000],
          borderColor: '#7ED321',
          pointBackgroundColor: '#7ED321',
        },
        {
          label: 'TOTAL COST',
          data: [6800, 7333, 5000, 4687, 6543, 8800, 3000],
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
        },
        {
          label: 'NET INCOME  ',
          data: [1234, 2345, 3456, 4567, 8888, 5555, 6666],
          borderColor: '#4A90E2',
          pointBackgroundColor: '#4A90E2',
        },
        ],
      },
      leftInfoData: [
        {
          img: 'https://www.modian.com.tw/images/fbicon.png',
          url: 'Facebook.com',
          num: '45836',
          color: '#7ED321',
          icon: 'el-icon-caret-top',
          persent: '20%',
        },
        {
          img: 'data:image/png;base64,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',
          url: 'google.com',
          num: '23582',
          color: '#7ED321',
          icon: 'el-icon-caret-top',
          persent: '12%',
        }, {
          img: 'http://cdn.onlinewebfonts.com/svg/img_437070.png',
          url: 'Shopify.com',
          num: '2489',
          color: '#D0021B',
          icon: 'el-icon-caret-bottom',
          persent: '15%',
        }, {
          img: 'https://png.icons8.com/metro/1600/wordpress.png',
          url: 'Wordpress.com',
          num: '1057',
          color: '#D0021B',
          icon: 'el-icon-caret-bottom',
          persent: '30%',
        },
      ],
      rightInfoData: [
        { img: 'http://via.placeholder.com/80x80', itemName: 'Helvetica Neue', date: '2018/06/08', orderName: '朝報人', money: '1800' },
        { img: 'http://via.placeholder.com/80x80', itemName: 'Helvetica Marval', date: '2018/06/09', orderName: '不朝人', money: '3200' },
        { img: 'http://via.placeholder.com/80x80', itemName: 'AllBlack Neue', date: '2018/06/08', orderName: '嘿嘿人', money: '5400' },
        { img: 'http://via.placeholder.com/80x80', itemName: 'Titan Jacket', date: '2018/06/09', orderName: '西西人', money: '6800' }],
    };
  },
  computed: {
    total_revenue() {
      const data = this.chartData.datasets[0].data;
      const res = data.reduce((a, b) => a + b, 0);
      return res;
    },
    total_cost() {
      const data = this.chartData.datasets[1].data;
      const res = data.reduce((a, b) => a + b, 0);
      return res;
    },
    new_income() {
      const data = this.chartData.datasets[2].data;
      const res = data.reduce((a, b) => a + b, 0);
      return res;
    },

  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noUse{
  flex-grow: 1;
}
.rightInfo{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  align-items: center
}
.mr-10{
  margin-right: 10px;
}
  .w-100 {
    width: 100%;
  }

  .spannum {
    font-size: 16pt;
    text-align: right;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .infoo {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
  }


  .text-gray {
    color: #E2E2E2;
  }

  .flex-justify-cneter {
    display: flex;
    justify-content: center;
    margin: 0 50px 0 50px;
  }

  .ml-50 {
    margin-left: 50px;
  }
.d-flex{
  display: flex;
}
  .d-flex-column {
    display: flex;
    flex-direction: column;
  }

  .bottom-card {
    display: flex;
    background: #fff;
    flex: 1;
    /* justify-content: space-between; */
    margin: 10px;
    /* padding: 60px; */
  }

  .m-10 {
    margin: 10px;
  }

  .box {
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
    'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }

  .cardGreed {
    color: #7ED321;
    font-size: 25pt;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .cardRed {
    color: #D0021B;
    font-size: 25pt;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .cardBlue {
    color: #4A90E2;
    font-size: 25pt;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .card {
    display: flex;
    justify-content: center;
    margin: 0 60px 0 60px;
  }

  .chart {
    margin: 0 60px 0 60px;
    background: #fff;
  }

  .card>:nth-child(even) {
    margin: 10px 40px 10px 40px;
    width: 30%;
    padding: 30px;
    background: #fff;
    text-align: center;

  }

  .card>:nth-child(odd) {
    margin: 10px 0px 10px 0px;
    width: 30%;
    padding: 30px;
    background: #fff;
    text-align: center;
  }

  .TitleText {
    font-size: 18pt;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 0 0 40px;
  }

  .TitleText1 {
    font-size: 18pt;
    margin-bottom: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
  }

  .header {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
  }

</style>
