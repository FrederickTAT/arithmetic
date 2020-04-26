<template >
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="16" style="max-width: 700px">
      <el-container  id="app" style="min-width: 620px;background: white;border: 1px solid #EBEEF5;box-shadow:0 0 5px 3px #EBEEF5">
          <el-header>
            <el-steps :active="activeStep" simple>
              <el-step title="设置" icon="el-icon-setting"></el-step>
              <el-step title="答题" icon="el-icon-edit"></el-step>
              <el-step title="结果" icon="el-icon-tickets"></el-step>
            </el-steps>
          </el-header>
          <el-main >
            <el-container>
              <el-header style="font-size: 35px">
                <SettingsHeader
                        v-if="activeStep==0"
                        @set-rules="setRule"
                        @random="randomSettings"
                ></SettingsHeader>
                <table-header
                        v-if="activeStep==1"
                        :percentage="percentage"
                        :count="count"
                        :settings="settings"
                        @back="handleBack"
                        @submit="handleSubmit"
                ></table-header>
                <ResultsHeader v-if="activeStep==2" @again="handleAgain"></ResultsHeader>
              </el-header>
              <el-divider></el-divider>
              <el-main>
                <Settings v-if="activeStep==0" ref="setting"></Settings>
                <Table v-if="activeStep==1" ref="quizTable" @setpercent="setPercent"  :settings="settings"></Table>
                <Results v-if="activeStep==2" :results="results"></Results>
              </el-main>

              <SubmitDialog
                      :percentage="percentage"
                      :visible="dialogs.submit.visible"
                      @invisible="dialogs.submit.visible = false"
                      @confirm="handleSubmitConfirm"
              ></SubmitDialog>
              <BackDialog
                      :visible="dialogs.back.visible"
                      @invisible="dialogs.back.visible = false"
                      @confirm = "init"
              ></BackDialog>
              <AgainDialog
                      :visible="dialogs.again.visible"
                      @invisible="dialogs.again.visible = false"
                      @confirm = "init"
              ></AgainDialog>
            </el-container>

          </el-main>
      </el-container>
    </el-col>

  </el-row>
</template>

<script>

import Settings from "@/components/Settings";
import Table from "@/components/Table";
import Results from "@/components/Results";
import SubmitDialog from "@/components/SubmitDialog";
import BackDialog from "@/components/BackDialog";
import SettingsHeader from "@/components/SettingsHeader";
import TableHeader from "@/components/TableHeader";
import ResultsHeader from "@/components/ResultsHeader";
import AgainDialog from "@/components/AgainDialog";


export default {
  name: 'app',
  components: {Settings,Table,Results,SubmitDialog,BackDialog,SettingsHeader,TableHeader,ResultsHeader,AgainDialog},
  data(){
    return{
      activeStep:0,
      settings:{},
      results:{},
      percentage: 0,
      count:0,
      dialogs:{
        submit:{visible:false},
        back:{visible:false},
        again:{visible:false}
      }
    }
  },
  methods:{
    init(){
      this.activeStep = 0
      this.settings = {}
      this.results={}
      this.percentage=0
      this.count = 0
    },
    randomSettings(){
      this.$refs.setting.randomSettings()
    },
    setRule(){
      this.settings = this.$refs.setting.warpSettings()
      this.activeStep = 1
    },
    handleSubmit(){
      this.dialogs.submit.visible = true
    },
    setPercent(count){
      let total = this.settings.total
      this.count = count
      this.percentage=Math.floor(100*count/total)
    },
    handleBack(){
      this.dialogs.back.visible = true
    },
    handleAgain(){
      this.dialogs.again.visible = true
    },
    handleSubmitConfirm(){
      this.results = this.$refs.quizTable.judge()
      this.activeStep = 2
    }
  },
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.header{
  height: 80px;
}
</style>
