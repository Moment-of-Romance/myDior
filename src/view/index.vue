<style lang="less">
@import '../style/common.css';
.layout{
    width: 100%;
    height: 100%;
    //头部
    .mui-off-canvas-wrap .mui-bar {
        background-color: #000000;
        height: 65px;
        .mui-icon{
            width: 65px;
            height: 65px;
            color:#ffffff;
            padding-top: 18px;
        }
        .mui-title{
            line-height:65px;
            color: #ffffff;
            left: 65px;
            text-align: left;
            font-size: 20px;
        }
        
    }
    // 左侧菜单 首页
    .mui-off-canvas-left{
        background-color: #ffffff;
        .main-nav{
            background-color: #000000;
            padding: 0 20px;
            color:#ffffff;
            font-size: 14px;
            .title{
                padding: 20px 0;
                text-align: left;
            }
        }
    }
    //左侧菜单 
    .mui-off-canvas-left .mui-scroll .ivu-collapse-header{
        background-color: #000000;
        color: #ffffff;
        height: 65px;
        line-height: 65px;
        font-size: 14px;
        text-align: left;
    }
    .ivu-collapse-content{
        padding:0;
        .ivu-collapse-content-box{
            padding:0;
            li{
                padding:15px;
                text-align: left;
                border-bottom: 1px solid #ccc;
                font-size: 14px;
            }
        }
    }
}
#app .mui-bar-nav~.mui-content{
    padding-top: 65px;
}



</style>
<template>
    <div class="layout">
        <!-- 侧滑导航根容器 -->
        <div class="mui-off-canvas-wrap">
            <!-- 菜单容器 -->
            <aside class="mui-off-canvas-left" style="background-color:#000000;">
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                       <!-- 菜单具体展示内容 -->
                        <div class="nav-home main-nav">
                            <div class="title" @click="changeRouter(home)">
                                <i class="mui-icon mui-icon-home"></i>
                                首页
                            </div>
                        </div>
                        <Collapse accordion>
                            <Panel  hide-arrow v-for="item in navList" :key="item.id" :name="item.id">
                                {{item.title}}
                                <ul slot="content">
                                    <li v-for="child in item.children" :key="child.id" @click="changeRouter(child.path)">{{child.title}}</li>                                  
                                </ul>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </aside>
            <!-- 主页面容器 -->
            <div class="mui-inner-wrap">
                <!-- 主页面标题 -->
                <header class="mui-bar mui-bar-nav">
                    <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" @click="toggleSlieder"></a>
                    <h1 class="mui-title mui-pull-left">myDior</h1>
                </header>
                <div class="mui-content mui-scroll-wrapper mydior-content">
                    <div class="mui-scroll">
                        <router-view style="height:100%"></router-view>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
    import mui from '../lib/mui/js/mui.min.js'
    import navCofig from './config.js'
    export default {
        props:{

        },
        data(){
            return {
                home:'/home',
                navList:navCofig
            }
        },
        mounted(){

        },
        methods:{
            //使用toggle方法时 slider  必须把拖拽类名去掉
            toggleSlieder:function(){
                mui('.mui-off-canvas-wrap').offCanvas("toggle");
            },
            doChange:function(item){
                this.$router.push()
            },
            changeRouter:function(panel){
                this.$router.push(panel);
                mui('.mui-off-canvas-wrap').offCanvas("close");
            }
        },
        components:{

        }
    }
</script>

