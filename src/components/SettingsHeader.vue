<template>
    <el-row type="flex" justify="space-between">
        <el-col style="font-weight: bold">题目设置</el-col>
        <el-col :span="6">
            <el-button @click="randomSettings">随机</el-button>
        </el-col>
        <el-col :span="6">
            <el-button type="primary" @click="handleNext">下一步
                <i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "SettingsHeader",
        methods:{
            handleNext(){
                this.$emit('set-rules')
            },
            randomSettings(){
                this.$emit('random')
            }
        }
    }
</script>

<style scoped>

</style>