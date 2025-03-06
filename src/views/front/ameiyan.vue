<!-- 阿美妍 -->

<template>
    <div class="home">
        <h1>阿美妍</h1>
        <el-button plain @click="dialogTableVisible = true">
          Open a Table nested Dialog
        </el-button>
      
        <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
          <el-table :data="gridData">
            <el-table-column property="date" label="Date" width="150" />
            <el-table-column property="name" label="Name" width="200" />
            <el-table-column property="address" label="Address" />
          </el-table>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            dialogTableVisible: false,
            gridData: [
                {
                date: '2016-05-02',
                name: 'John Smith',
                address: 'No.1518, Jinshajiang Road, Putuo District',
                },
                {
                date: '2016-05-04',
                name: 'John Smith',
                address: 'No.1518, Jinshajiang Road, Putuo District',
                },
                {
                date: '2016-05-01',
                name: 'John Smith',
                address: 'No.1518, Jinshajiang Road, Putuo District',
                },
                {
                date: '2016-05-03',
                name: 'John Smith',
                address: 'No.1518, Jinshajiang Road, Putuo District',
                },
            ]
            };
        }
    };
</script>

<style>
    .home {
        width: 100%;
        height: 800px;
    }
</style>