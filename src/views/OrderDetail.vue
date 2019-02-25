<template>
  <div>
    <el-table ref="multipleTable"
              :data="tableData3"
              tooltip-effect="dark"
              stripe="true"
              style="width: 100%"
              @selection-change="handleSelectionChange">
      <el-table-column label="我的订单"
                       width="300"
                       align="center">
        <el-table-column type="selection"
                         width="75">
        </el-table-column>
        <el-table-column label="订单编号"
                         width="120">
          <template slot-scope="scope">{{ scope.row.orderId }}</template>
        </el-table-column>
        <el-table-column label="订单时间"
                         width="120">
          <template slot-scope="scope">{{ scope.row.dateTime }}</template>
        </el-table-column>
        <el-table-column label="名称"
                         width="320">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="price"
                         label="总价格"
                         width="120">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="People"
                         label="送餐员"
                         show-overflow-tooltip>
        </el-table-column>

        <el-table-column prop="phoneNumber"
                         label="送餐员电话"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="120">
          <template slot-scope="scope">
            <!-- 删除该行 -->
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData3)"
                       type="text"
                       size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px ; float:right ">

      <el-button type="primary"
                 size="medium"
                 @click="handleSelectionChange()">立即下单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData3: [{
        price: '15',
        name: '盖浇饭',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        price: '15',
        name: '盖浇饭',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        price: '15',
        name: '盖浇饭',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        price: '15',
        name: '盖浇饭',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        price: '15',
        name: '盖浇饭',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        price: '15',
        name: '盖浇饭',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      ],
      multipleSelection: []
    }
  },

  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style>
</style>
