<template id="app">
    <div id="box">
        {{ msg }}
        <br>
        <el-button type='primary'>主要按钮</el-button>
        <el-button type='info'>主要按钮</el-button>
        <el-button type='danger' icon='close'>主要按钮</el-button>
        <el-button type='success' icon='edit'>主要按钮</el-button>
        <el-button type='warning' icon='search'>主要按钮</el-button>
        <br>
        <span class="el-icon-delete"></span>
        <span class="el-icon-loading"></span>
        <br>
        <el-row>
            <el-col span='12'>
                <div class="my-grid">
                    <Date></Date>
                </div>
            </el-col>
            <el-col span='12'>
                <div class="my-grid"></div>
            </el-col>
        </el-row>        
        <el-row>
            <el-col span='8'>
                <div class="my-grid"></div>
            </el-col>
            <el-col span='12'>
                <div class="my-grid"></div>
            </el-col>            
            <el-col span='4'>
                <div class="my-grid"></div>
            </el-col>
        </el-row>

    </div>
</template>

<script type="text/javascript">

    import Date from './component/Date.vue'

    export default {
        name: 'app',
        data(){
            return {
                msg: 'welcome element-ui'
            };
        },
        components: {
            Date
        }
    }

</script>

<style scoped lang="less">
@color: blue;
.height(@value:50px){
    height: @value;
}
#box{
    width: 600px;

    margin: 10px auto;
}   
.my-grid{
    .height();
    border: 1px solid @color;
} 

</style>










