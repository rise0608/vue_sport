<template>
    <div class="login_container">
        <!-- 登录块 -->
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt/>
            </div>
            <!-- 表单区域 -->
            <el-form ref="loginFormRef" :rules="loginRules" :model="loginForm" class="login_form" label-width="0">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icondenglu"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont iconmima" type="password"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    // 数据
    data() {
        return{
            // 表单数据对象
            loginForm:{
                username:"admin",
                password:"123456"
            },
            // 验证对象
            loginRules: {
                // 校验用户名
                username: [
                    { required: true, message: "用户名为必填项", trigger: "blur" }, // 必填验证
                    { min: 5, max: 12, message: "长度在 5 到 12 个字符", trigger: "blur" }, // 长度验证
                ],
                // 校验密码
                password: [
                    { required: true, message: "用户密码为必填项", trigger: "blur" }, // 必填验证
                    { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }, // 长度验证
                ],
            },
        }
    },
    // 方法
    methods: {
        // 重置表单内容
        resetLoginForm(){
            this.$refs.loginFormRef.resetFields();
        },
        // 登录 
        login(){
            // 1. 验证校验规则
            this.$refs.loginFormRef.validate(async valid =>{
                if(!valid) return; // 验证失败
                // 访问后台
                const {data:res} = await this.$http.post("test");
                if(res == "OK") {
                    this.$message.success("操作成功！");// 信息提示
                    // this.$router.push({path:"/home"});// 页面路由跳转
                }else {
                    this.$message.error("操作失败！");// 错误提示
                }
            });
        }
    }
}
</script>
<style lang= "less" scoped>
// 添加全局样式
.login_container{
    background-color: rgb(57, 182, 182);
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 6px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    .avatar_box{
        width:130px;
        height:130px;
        border:1px solid #eee;
        border-radius: 50%;
        padding:5px;
        box-shadow: 0 0 2px #ddd;
        position:absolute;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            width:100%;
            height:100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.btns{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    position:absolute;
    bottom:0%;
    width:100%;
    padding:0 10px;
    box-sizing: border-box;
}
</style>