<template id="app">
    <div id="box">
        {{ msg }}
        <el-button type='success'>按钮success</el-button>

        <el-radio class="radio" v-model="radio" label="1">备选项1</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项2</el-radio>
        <br>
        <!-- rate -->
        <el-rate v-model="val"></el-rate>
        <br>
        <!-- 分页 -->
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>



    </div>
</template>

<script type="text/javascript">


    export default {
        name: 'app',
        data(){
            return {
                msg: 'welcome element-ui',
                radio: '1',
                val: 3
            };
        }

    }

</script>

<style scoped>


</style>










