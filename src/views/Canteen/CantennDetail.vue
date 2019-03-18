<template>
  <el-table :data="tableData"
            border
            style="width: 100%">
    <el-table-column fixed
                     prop="No"
                     label="排名"
                     width="150">
    </el-table-column>
    <el-table-column prop="mealName"
                     label="名称"
                     width="120">
    </el-table-column>
    <el-table-column prop="score"
                     label="评分"
                     width="120">
    </el-table-column>
    <el-table-column prop="price"
                     label="价格"
                     width="120">
    </el-table-column>
    <el-table-column prop="address"
                     label="所属食堂"
                     width="300">
    </el-table-column>
    <el-table-column prop="zip"
                     label="邮编"
                     width="120">
    </el-table-column>
    <el-table-column fixed="right"
                     label="操作"
                     width="100">
      <template slot-scope="scope">
        <el-button type="text"
                   size="small"
                   @click="getData">查看</el-button>
        <el-button type="text"
                   size="small"
                   @click="dialogFormVisible = true">编辑</el-button>
        <el-dialog title="信息编辑"
                   :visible.sync="dialogFormVisible"
                   :modal-append-to-body='false'>
          <el-form :model="form">
            <el-form-item label="日期"
                          :label-width="formLabelWidth">
              <el-date-picker v-model="form.date"
                              type="date"
                              placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="名称"
                          :label-width="formLabelWidth">
              <el-input v-model="form.name"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="省份"
                          :label-width="formLabelWidth">
              <el-input v-model="form.province"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地区"
                          :label-width="formLabelWidth">
              <el-input v-model="form.map"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址"
                          :label-width="formLabelWidth">
              <el-input v-model="form.address"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮编"
                          :label-width="formLabelWidth">
              <el-input v-model="form.youbian"
                        autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer"
               class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    getData () {
      this.$http({
        url: this.$http.commonUrl('vueuser'),
        method: 'post',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      }).then(({ data }) => {
        if (data !== 0) {
          this.$message({
            message: data,
            duration: 1000,
            type: 'success'
          })
          //   this.$router.push({ path: '/login' })
        }
      })
    }
  },
  data () {
    return {
      // tableData: [{
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        date: '',
        name: '',
        province: '',
        map: '',
        address: '',
        youbian: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
