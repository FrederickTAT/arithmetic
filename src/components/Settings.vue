<template>
    <el-container style="font-size: 22px">
        <el-row type="flex" justify="center">
            <el-col :span="10">运算符数量</el-col>
            <el-col :span="10">
            <el-input-number v-model="opNum" :min="1" :max="2"></el-input-number>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px" type="flex" justify="center">
            <el-col :span="10">括号</el-col>
            <el-col :span="10">
                <el-radio-group v-model="hasBracket">
                    <el-radio-button label="有"></el-radio-button>
                    <el-radio-button label="无"></el-radio-button>
                </el-radio-group>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px" type="flex" justify="center">
            <el-col :span="10">题目数量</el-col>
            <el-col :span="10">
                <el-input-number v-model="quizNum" :min="1"></el-input-number>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px" type="flex" justify="center">
            <el-col :span="10">每页题数</el-col>
            <el-col :span="10">
                <el-input-number v-model="pageNum" :min="5"></el-input-number>
            </el-col>
        </el-row>
        <el-row v-for="(op,key) in opsProb" :key="key" style="margin-top: 20px" type="flex" justify="center">
            <el-col :span="10">{{op.label+'比例'}}</el-col>
            <el-col :span="10">
                <el-slider v-model="op.prob" :step="25"></el-slider>
            </el-col>
        </el-row>
        <el-footer></el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Settings",
        data(){
            return{
                opNum:1,
                quizNum:50,
                pageNum:5,
                hasBracket:'无',
                opsProb:{
                    plus:{label:'加号',prob:0},
                    minus:{label:'减号',prob:0},
                    times:{label:'乘号',prob:0},
                    divide:{label:'除号',prob:0},
                }
            }
        },
        methods:{
            warpSettings(){
                return {
                    operator:this.opNum, // 操作符数量
                    total:this.quizNum, // 总题目数
                    page:this.pageNum, // 每页题目数
                    bracket:this.hasBracket=='有'?true:false, // 是否有括号
                    prob:{
                        // 每个符号出现的比例，不是概率
                        plus:this.opsProb.plus.prob,
                        minus:this.opsProb.minus.prob,
                        times:this.opsProb.times.prob,
                        divide:this.opsProb.divide.prob
                    }

                }
            },
            randomSettings(){
                console.log('random')
                this.opNum = Math.random()<=0.5?1:2
                this.quizNum = Math.ceil(Math.random() * 90 + 10)
                this.hasBracket = Math.random()<=0.5?'有':'无'
                for(let p in this.opsProb){
                    this.opsProb[p].prob = this.getProb()
                }
            },
            getProb(){
                let prob = Math.random()
                if(prob <= 0.2){
                    prob = 0
                }else if(prob <= 0.4){
                    prob = 25
                }else if(prob <=0.6){
                    prob = 50
                }else if(prob <=0.8){
                    prob = 75
                }else if(prob <=1){
                    prob = 100
                }
                return prob
            }
        }
    }
</script>

<style scoped>
</style>