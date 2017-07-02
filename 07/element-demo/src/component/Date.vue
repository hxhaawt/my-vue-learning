<template>
    <div id="date">
        <el-date-picker
          v-model="value"
          type="date"
          placeholder="选择日期"
          :picker-options="ranger">
        </el-date-picker>
    </div>
</template>
<script type="text/javascript">
    export default{
        name:'date',
        data(){
            return {
                value: '',
                ranger: {
                    disabledDate(time) {
                       return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            };
        }
    }
</script>


