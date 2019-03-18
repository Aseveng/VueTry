<template>
  <el-table :data="tableData"
            border
            style="width: 100%">
    <el-table-column label="菜品信息管理"
                     align="center">
      <el-table-column fixed
                       prop="No"
                       label="排名"
                       width="150">
      </el-table-column>
      <el-table-column prop="mealName"
                       label="名称"
                       width="150">
      </el-table-column>
      <el-table-column prop="score"
                       label="评分"
                       width="60">
      </el-table-column>
      <el-table-column prop="price"
                       label="价格"
                       width="180">
      </el-table-column>
      <el-table-column prop="canteen"
                       label="所属食堂"
                       width="180">
      </el-table-column>

      <el-table-column fixed="right"
                       label="图片修改"
                       width="150">
        <template slot-scope="scope">

          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :file-list="fileList2"
                     list-type="picture">
            <el-button size="medium"
                       type="primary">修改图片</el-button>
            <!-- <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>

        </template>
      </el-table-column>
      <el-table-column prop="canteen"
                       label="修改信息"
                       width="180">
        <template slot-scope="scope">

          <el-button type="primary"
                     size="medium"
                     @click="dialogFormVisible = true">修改信息</el-button>
          <el-dialog title="信息编辑"
                     :visible.sync="dialogFormVisible"
                     :modal-append-to-body='false'>
            <el-form :model="form">

              <el-form-item label="名称"
                            :label-width="formLabelWidth">
                <el-input v-model="form.name"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="价格"
                            :label-width="formLabelWidth">
                <el-input v-model="form.province"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属食堂"
                            :label-width="formLabelWidth">
                <el-input v-model="form.map"
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
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  methods: {
    getData () {
      this.$router.push({ path: '/registe' })
    },
    uploadImg () {
    },
    handleSelectionChange () {
      return { dialogFormVisible: 'true' }
    }
  },
  data () {
    return {
      tableData: [{
        No: '1',
        mealName: '盖浇饭1',
        price: '15元',
        canteen: '第一食堂',
        score: '4.5',
        zip: 200333
      }, {
        No: '2',
        mealName: '盖浇饭2',
        price: '15元',
        canteen: '第二食堂',
        score: '3.5',
        zip: 200333
      }],
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
