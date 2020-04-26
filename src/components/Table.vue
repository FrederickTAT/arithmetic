<template>
    <el-container>
        <el-header style="height: 30px">
            <el-row type="flex" justify="center">
                <el-pagination
                        background
                        layout="prev,pager,next"
                        :page-size="settings.page"
                        :total="settings.total"
                        :current-page.sync="currentPage"
                        @current-change="setShowItems"
                        style="padding-top: 0"
                ></el-pagination>
            </el-row>
        </el-header>
        <el-main style="padding-top: 0">
            <el-row type="flex" justify="center">
                <div class="table">
                    <el-table :data="showItems" height="420" style="width: 100%;font-size: 24px">
                        <el-table-column label="题号" prop="id" width="100">
                        </el-table-column>
                        <el-table-column min-width="200" label="题目" prop="quiz">
                        </el-table-column>
                        <el-table-column width="150">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.input" @blur="handleBlur"></el-input>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Table",
        props:['settings'],
        data(){
            return{
                items:[],
                showItems:[],
                currentPage:1,
                ans:[],

            }
        },
        mounted(){
            this.setItems()
        },
        methods:{
            setItems(){
                this.items = this.generate(this.settings)
                this.showItems = this.items.slice((this.currentPage-1) * this.settings.page,this.currentPage * this.settings.page)
            },
            setShowItems(){
                this.showItems = this.items.slice((this.currentPage-1) * this.settings.page,this.currentPage * this.settings.page)
            },

            handleBlur(){
                var count = 0
                for(let item of this.items){
                    if(item.input!=undefined && item.input!=''){
                        count ++
                    }
                }
                this.$emit('setpercent',count)
            },
            judge(){
                var results = {
                    right:{
                        label:'正确',
                        items:[],
                    },
                    wrong:{
                        label:'错误',
                        items: [],
                    },
                    left:{
                        label:'空题',
                        items: [],
                    },

                }
                for(let item of this.items){
                    let ans = item.ans
                    let input = item.input
                    if(input == undefined || input == ''){
                        results.left.items.push(item)
                    }else{
                        if(ans == input){
                            results.right.items.push(item)
                        }else{
                            item['input'] = input
                            results.wrong.items.push(item)
                        }
                    }
                }
                return results
            },

            foursign() {//确定每个操作数的数量
                let all = this.settings.prob.plus + this.settings.prob.minus + this.settings.prob.times + this.settings.prob.divide
                let minusrate = this.settings.prob.plus / all
                let timesrate = this.settings.prob.minus / all + minusrate
                let dividerate = this.settings.prob.times / all + timesrate
                let plusNum = Math.round(this.settings.prob.plus / all * this.settings.total)
                let minusNum = Math.round(this.settings.prob.minus / all * this.settings.total)
                let timesNum = Math.round(this.settings.prob.times / all * this.settings.total)
                let divideNum = Math.round(this.settings.prob.divide / all * this.settings.total)
                if ((plusNum + minusNum + timesNum + divideNum) < this.settings.total) {//四舍五入之后可能导致总数少一,就随便找一个符号加一下
                    if (plusNum != 0) { plusNum++ }
                    else {
                        if (minusNum != 0) { minusNum++ }
                        else {
                            if (timesNum != 0) { timesNum++ }
                            else { divideNum++ }
                        }
                    }
                }
                let sign = { minusrate: minusrate, timesrate: timesrate, dividerate: dividerate, plusNum: plusNum, minusNum: minusNum, timesNum: timesNum, divideNum: divideNum }
                if (this.settings.prob.plus ==0&& this.settings.prob.minus ==0&& this.settings.prob.times ==0&& this.settings.prob.divide == 0) {
                    sign = { minusrate: 0.25, timesrate: 0.5, dividerate: 0.75, plusNum: this.settings.total / 4, minusNum: this.settings.total / 4, timesNum: this.settings.total / 4, divideNum: this.settings.total / 4 }
                }
                return sign
            },
            isprime(a){
                if (a == 4) { return true }
                for (let i = 2; i < Math.ceil(a / 2); i++) {
                    if (Math.floor(a / i) == a / i) {
                        return false
                    }
                }
                return true
            },
            findfactor(a) {
                if (a == 4) { return 2 }
                let factor = []
                for (let i = 2; i < Math.ceil(a / 2); i++) {
                    if (Math.floor(a / i) == a / i) {
                        factor.push(i)
                    }
                }
                return factor[Math.floor(Math.random() * (factor.length))]
            },
            exchange(item) {//打乱顺序
                let items = []
                for (let i = 0; i < (item.length); i++) {
                    let ran = Math.floor(Math.random() * (item.length))
                    let rep
                    rep = item[i]
                    item[i] = item[ran]
                    item[ran] = rep
                }
                for (let i = 0; i < this.settings.total; i++) {
                    let obj = { id: i + 1, quiz: item[i].quiz, ans: item[i].ans }
                    items.push(obj)
                }
                return items
            },
            createsentence(choice) {
                let one
                let two
                let symbol
                let ans
                switch (choice) {
                    case 0://加法
                        ans = Math.ceil(Math.random() * 98) + 2
                        one = Math.ceil(Math.random() * (ans - 2))//随机生成一个比a小的数
                        two = ans - one
                        symbol = "+"
                        break
                    case 1://减法
                        ans = Math.ceil(Math.random() * 98) + 1
                        one = Math.ceil(Math.random() * (100 - ans)) + ans //随机生成 比a大的数
                        two = one - ans
                        symbol = "-"
                        break
                    case 2://乘法
                        do {
                            ans = Math.ceil(Math.random() * 97) + 3
                        } while (this.isprime(ans))
                        one = this.findfactor(ans)               //选择a的一个因子
                        two = ans / one
                        symbol = "×"
                        break
                    case 3://除法
                        ans = Math.ceil(Math.random() * 50)
                        two = Math.ceil(Math.random() * Math.floor(100 / ans - 1)) + 1//随机成除数
                        one = two * ans
                        symbol = "÷"
                        break
                }
                return [one, symbol, two, ans]  //返回一个算式的三个部分 操作数 操作符 操作数
            },
            limitedsentence(ans, choice) {
                let one
                let two
                let symbol
                switch (choice) {
                    case 0://加法
                        one = Math.ceil(Math.random() * (ans - 2))//随机生成一个比a小的数
                        two = ans - one
                        symbol = "+"
                        break
                    case 1://减法
                        one = Math.ceil(Math.random() * (100 - ans)) + ans //随机生成 比a大的数
                        two = one - ans
                        symbol = "-"
                        break
                    case 2://乘法
                        one = this.findfactor(ans)               //选择a的一个因子
                        two = ans / one
                        symbol = "×"
                        break
                    case 3://除法
                        two = Math.ceil(Math.random() * Math.floor(100 / ans - 1)) + 1//随机成除数
                        one = two * ans
                        symbol = "÷"
                        break
                }
                return [one, symbol, two]  //返回一个算式的三个部分 操作数 操作符 操作数
            },
            makechoice() {
                let ran = Math.random()
                let rate = this.foursign()
                if (ran < rate.minusrate) { return 0 }
                if (ran >= rate.minusrate && ran < rate.timesrate) { return 1 }
                if (ran >= rate.timesrate && ran < rate.dividerate) { return 2 }
                if (ran >= rate.dividerate) { return 3 }
            },
            limitedmakechoice(ans) {
                let choice = -1
                while ((choice == 0 && ans == 1) || (choice == 1 && ans == 100) || (choice == 2 && this.isprime(ans)) || (choice == 3 && ans > 50) || choice == -1) {
                    choice = this.makechoice()
                }
                return choice
            },
            operatorone() {      //一个操作数的函数
                let all = this.foursign()
                let item = []
                let obj
                let sentence
                for (let i = 0; i < all.plusNum; i++) {
                    sentence = this.createsentence(0)
                    obj = { quiz: sentence[0] + sentence[1] + sentence[2], ans: sentence[3] }
                    item.push(obj)
                }
                for (let i = 0; i < all.minusNum; i++) {
                    sentence = this.createsentence(1)
                    obj = { quiz: sentence[0] + sentence[1] + sentence[2], ans: sentence[3] }
                    item.push(obj)
                }
                for (let i = 0; i < all.timesNum; i++) {
                    sentence = this.createsentence(2)
                    obj = { quiz: sentence[0] + sentence[1] + sentence[2], ans: sentence[3] }
                    item.push(obj)
                }
                for (let i = 0; i < all.divideNum; i++) {
                    sentence = this.createsentence(3)
                    obj = { quiz: sentence[0] + sentence[1] + sentence[2], ans: sentence[3] }
                    item.push(obj)
                }
                return this.exchange(item)
            },
            nobracket() {
                let obj
                let items = []
                let s1 = [",", "0", "0", "0"]
                let s2 = ["0", "0", ","]
                let choice1
                let choice2
                for (let i = 0; i < this.settings.total; i++) {
                    choice1 = this.makechoice()
                    choice2 = this.makechoice()
                    if ((choice1 == 0 && choice2 == 2) || (choice1 == 2 && choice2 == 0)) {
                        do { s1 = this.createsentence(0) } while (this.isprime(s1[0]))
                        s2 = this.limitedsentence(s1[0], 2)
                    }
                    if ((choice1 == 0 && choice2 == 3) || (choice1 == 3 && choice2 == 0)) {
                        do { s1 = this.createsentence(0) } while (s1[0] > 50)
                        s2 = this.limitedsentence(s1[0], 3)
                    }
                    if ((choice1 == 1 && choice2 == 2) || (choice1 == 2 && choice2 == 1)) {
                        do { s1 = this.createsentence(1) } while (this.isprime(s1[0]))
                        s2 = this.limitedsentence(s1[0], 2)
                    }
                    if ((choice1 == 1 && choice2 == 3) || (choice1 == 3 && choice2 == 1)) {
                        do { s1 = this.createsentence(1) } while (s1[0] > 50)
                        s2 = this.limitedsentence(s1[0], 3)
                    }
                    if (choice1 == 0 && choice2 == 0) {
                        do { s1 = this.createsentence(0) } while (s1[0] == 1)
                        s2 = this.limitedsentence(s1[0], 0)
                    }
                    if ((choice1 == 0 && choice2 == 1) || (choice1 == 1 && choice1 == 0)) {
                        do { s1 = this.createsentence(1) } while (s1[0] == 1)
                        s2 = this.limitedsentence(s1[0], 0)
                    }
                    if (choice1 == 1 && choice2 == 1) {
                        do { s1 = this.createsentence(1) } while (s1[0] == 100)
                        s2 = this.limitedsentence(s1[0], 1)
                    }
                    if (choice1 == 2 && choice2 == 2) {
                        do { s1 = this.createsentence(2) } while (this.isprime(s1[0]))
                        s2 = this.limitedsentence(s1[0], 2)
                    }
                    if ((choice1 == 2 && choice2 == 3) || (choice1 == 3 && choice2 == 2)) {
                        do { s1 = this.createsentence(3) } while (this.isprime(s1[0]))
                        s2 = this.limitedsentence(s1[0], 2)
                    }
                    if (choice1 == 3 && choice2 == 3) {
                        do { s1 = this.createsentence(3) } while (s1[0] > 50)
                        s2 = this.limitedsentence(s1[0], 3)
                    }
                    obj = { id: i + 1, quiz: s2[0] + s2[1] + s2[2] + s1[1] + s1[2], ans: s1[3] }
                    items.push(obj)
                }
                return this.exchange(items)

            },
            hasbracket() {
                let obj
                let items
                for (let i = 0; i < this.settings.total; i++) {
                    let sentence = this.createsentence(this.makechoice())//还是随机生成结果，第一个算式
                    let p = Math.floor(Math.random() * 2)
                    if (p == 0) {
                        let sentence2 = this.limitedsentence(sentence[0], this.limitedmakechoice(sentence[0]))
                        obj = { id: i + 1, quiz: "(" + sentence2[0] + sentence2[1] + sentence2[2] + ")" + sentence[1] + sentence[2], ans: sentence[3] }    //在赋值句里加上括号
                    }
                    if (p == 1) {
                        let sentence2 = this.limitedsentence(sentence[2], this.limitedmakechoice(sentence[2]))
                        obj = { id: i + 1, quiz: sentence[0] + sentence[1] + "(" + sentence2[0] + sentence2[1] + sentence2[2] + ")", ans: sentence[3] }
                    }
                    items.push(obj)
                }
                return items

            },
            generate(settings) {
                this.settings = settings
                if (settings.operator == 1) {
                    return this.operatorone()
                }
                if (settings.operator == 2) {
                    if (!this.bracket) {
                        return this.nobracket()
                    }
                    if (this.bracket) {
                        return this.hasbracket()
                    }
                }

            }


        }
    }
</script>

<style>
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #DCDFE6;
      border-radius: 3px;
    }
</style>