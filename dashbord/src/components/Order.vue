<template>
  <div>
    <div class="select d-flex jcsb">
      <div class="sL d-flex ">
        <span>
          <i class="el-icon-circle-check"></i>
          <i class="el-icon-caret-bottom"></i>
        </span>
      </div>
      <div class="sR">
        <div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              EDIT SECTION
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="px-10">
              <div>
                <el-checkbox v-model="checked.orderID">orderID</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Customer">Customer</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.ProductList">Product List</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Total">Total</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.AddtoCart">Add to Cart</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Checkout">Checkout</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Address">Address</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Phone">Phone</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Email">Email</el-checkbox>
              </div>
              <div>
                <el-checkbox v-model="checked.Status">Status</el-checkbox>
              </div>

            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
    </div>
    <el-table ref="multipleTable" class="table" :data="tableData "
     tooltip-effect="dark" style="width: 100%;background:#F2F2F2 !important;" >
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column v-if="checked.orderID" label="OrderId" width="90" prop="orderID">

      </el-table-column>
      <el-table-column v-if="checked.Customer" prop="name" label="Customer" width="200">
      </el-table-column>
      <el-table-column v-if="checked.ProductList" label="ProductList" width="120">
        <template slot-scope="scope">
          <div class="buttomLine" v-for="(data,index) in scope.row.productList" :key="index">
            <div>{{ data.productName }}</div>
            <div class="d-flex">
              <div>{{ data.productMoney }} </div>
              <div style="flex:1"></div>
              <div>1</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column v-if="checked.Total" prop="total" label="Total" width="120">
      </el-table-column>
      <el-table-column v-if="checked.AddtoCart" prop="addToCart" label="Add to Cart" width="120">
      </el-table-column>
      <el-table-column v-if="checked.Checkout" prop="checkOut" label="Check-out" width="120">
      </el-table-column>
      <el-table-column v-if="checked.Address" prop="address" label="Address" width="120">
      </el-table-column>
      <el-table-column v-if="checked.Phone" prop="phone" label="Phone" width="120">
      </el-table-column>
      <el-table-column v-if="checked.Email" prop="email" label="Email" width="120">
      </el-table-column>
      <el-table-column v-if="checked.Status" label="Status"  width="120">
        <template slot-scope="scope"><el-button > {{scope.row.status}}</el-button></template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: {
        orderID: false,
        Customer: true,
        ProductList: true,
        Total: true,
        AddtoCart: false,
        Checkout: false,
        Address: true,
        Email: true,
        Phone: false,
        Status: true,
      },
      tableData: [
        {
          orderID: 0,
          productList: [{
            productName: 'Richmond',
            productMoney: '$1,391.06',
          }],
          total: '$4,441.58',
          name: 'Sullivan Whitehead',
          addToCart: 'Wednesday, January 13, 2016 9:02 PM',
          checkOut: 'Thursday, May 28, 2015 2:29 PM',
          email: '<TypeError: this.email is not a function>',
          phone: '+1 (850) 488-2930',
          address: '926 Bedford Place, Cutter, Delaware, 421',
          status: 'UNPAID',
        },
        {
          orderID: 1,
          productList: [{
            productName: 'Marks',
            productMoney: '$3,353.85',
          }],
          total: '$4,861.65',
          name: 'Dorthy Williams',
          addToCart: 'Tuesday, April 3, 2018 12:21 AM',
          checkOut: 'Thursday, April 27, 2017 7:22 PM',
          email: '<TypeError: this.email is not a function>',
          phone: '+1 (976) 478-3605',
          address: '843 Village Court, Walton, Vermont, 6346',
          status: 'SHIPPING',
        },
        {
          orderID: 2,
          productList: [{
            productName: 'Strickland',
            productMoney: '$2,737.34',
          }],
          total: '$3,528.02',
          name: 'Lizzie Barker',
          addToCart: 'Saturday, October 24, 2015 5:19 PM',
          checkOut: 'Wednesday, March 5, 2014 2:28 PM',
          email: '<TypeError: this.email is not a function>',
          phone: '+1 (956) 572-3764',
          address: '529 Middleton Street, Kennedyville, Palau, 4184',
          status: 'PAID',
        },
        {
          orderID: 3,
          productList: [{
            productName: 'May',
            productMoney: '$2,126.20',
          },
          {
            productName: 'Crane',
            productMoney: '$3,951.25',
          },
          ],
          total: '$4,738.66',
          name: 'Keith Serrano',
          addToCart: 'Saturday, April 30, 2016 10:01 PM',
          checkOut: 'Friday, February 27, 2015 6:03 AM',
          email: '<TypeError: this.email is not a function>',
          phone: '+1 (833) 584-2915',
          address: '243 Rost Place, Brady, Virginia, 5611',
          status: 'DONE',
        },
      ],

    };
  },
  computed: {},
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.el-table th, .el-table tr{
   background: transparent !important;
}
  .el-table th,.cell {
  background-color: transparent !important;
}
  .buttomLine {
    border-bottom: 1px solid #757575;
  }

  .d-flex {
    display: flex;
  }

  .d-column {
    flex-direction: column;
  }

  .jcc {
    justify-content: center;
  }

  .px-10 {
    padding: 0 10px 0 10px;
  }

  .jcsb {
    justify-content: space-between;
  }

  .select {
    padding: 20px 0 0 30px;
  }

  div {
    font-family: 'Microsoft JhengHei';
  }

  .tableTitle {
    font-weight: bold;
  }

</style>
