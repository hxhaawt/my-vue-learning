<template id="app">
    <div id="box">
        <mt-header fixed title='固定在顶部'></mt-header>
        <div class="my-btn">
            <mt-button type="default">default</mt-button>
            <mt-button type="primary">primary</mt-button>
            <mt-button type="danger">danger</mt-button>
            <br>
            <mt-button size="small" type='default'>small</mt-button>
            <mt-button size="large" type="primary">large</mt-button>
            <mt-button size="normal" type="danger">normal</mt-button>
            <br>
            <mt-button plain type="primary">plain</mt-button>
            <mt-button plain type="default">plain</mt-button>
            <mt-button plain type="danger">plain</mt-button>
        </div>

        <mt-radio
          title="单选框列表"
          v-model="value"
          :options="['选项A', '选项B', '选项C']">
        </mt-radio>
        <div class="list-selet">
            <span>选中项</span>
            <div style="float:right">
                {{ value }}
            </div>
        </div>
        <div>
            <mt-switch v-model="offOn1">
                {{offOn1}}
            </mt-switch>
            <mt-switch v-model="offOn2">开关</mt-switch>
        </div>
    </div>
</template>

<script type="text/javascript">


    export default {
        name: 'app',
        data(){
            return {
                msg: 'welcome mint-ui',
                list:[11, 22, 33, 44, 55],
                value:'选项A',
                offOn1:false,
                offOn2:false
            };
        },
        components: {
            
        }
    }

</script>

<style scoped >
.my-btn{
    margin: 50px auto;
}
.list-selet{
    margin: 10px auto;
    height: 40px;
    line-height: 40px;

    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
}
</style>










