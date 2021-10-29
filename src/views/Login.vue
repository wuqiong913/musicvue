<template>
<div class="login-bg">
   <div class="login-contain">
        <div class="login-header">
            <p>欢迎登录</p>
        </div>
        <div class="form-group">
            <div class="form-item">
                <label for="username">
                    <img src="@/assets/images/user.png">
                </label>
                <input v-model="phone" id="username" type="text" placeholder="请输入手机号" autocomplete="new-password">
            </div>
            <div class="form-item">
                <label for="password">
                    <img src="@/assets/images/password.png" alt="">
                </label>
                <input v-model="password" id="password" type="password" placeholder="请输入密码" autocomplete="new-password">
            </div>
        </div>
        <div class="button-group">
            <button class="login-btn" id="doLogin" @click="loginEvent">登录</button>
        </div>

        <div class="order-login">
            <p class="order-login-line">其他登录方式</p>
            <div class="order-login-box">
                <div>
                    <a href="#">
                        <img src="@/assets/images/wechat-login.png" alt="" style="width: 45px;height: 45px;">
                        <p>微信登录</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        async loginEvent(){
            let res = await this.$store.dispatch('login', {phone:this.phone, password:this.password})
            if(res.data.code == 200){
                this.$router.push('/me')
            }
        }
    }
}

</script>

<style lang="less" scoped>

.login-bg {
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color:tomato;
    color: #ffffff;
    .login-contain {
        width:85%;
        margin:0 auto;
        .login-header {
            padding: 5%;
            p {
                font-size: 32px;
                color: #ffffff;
                font-weight: bold;
                text-align: center;
                letter-spacing: 2px;
                text-shadow: 0.1em 0.15em 0.1em #e02424
            }
        }
        .form-group {
            padding: 5%;
            .form-item {
                margin-top: 5%;
                padding:0 10px;
                border-radius: 20px;
                background-color: rgba(0,0,0,0.1);
                input {
                    outline: none;
                    border: 0;
                    background-color: transparent!important;;
                    color: #ffffff;
                    height: 40px;
                    font-size: 18px;
                    width: 55%;
                    margin-left: 12%;
                }
                input::-webkit-input-placeholder {
                    /* WebKit browsers */
                    color: #ffffff;
                    font-size: 16px;
                }
                input:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    color: #ffffff;
                    font-size: 16px;

                }
                input:-ms-input-placeholder {
                    /* Internet Explorer 10+ */
                    color: #ffffff;
                    font-size: 16px;
                }
                label img {
                    width: 25px;
                    position: absolute;
                    margin-top: 5px;
                }
                button {
                    outline: none;
                    background: transparent;
                    border: 1px tomato dashed;
                    color: #ffffff;
                    height: 30px;
                    border-radius: 5px;
                    float: right;
                    padding: 1%;
                }
        }
    } 
    .button-group{
        button {
            outline: none;
            border: 0;
            width: 90%;
            height: 35px;
            margin-top: 4%;
            border-radius: 20px;
            margin-left: 4%;
            color: #ffffff;
            font-size: 18px;
        }
        .login-btn {
            background-color: #ffffff;
            color: tomato;
        }
    } 
    .order-login {
        padding: 5%;
        .order-login-line {
            display: block;
            position: relative;
            text-align: center;
            font-size: 14px;
            color: #ffffff;
        }
        .order-login-line:before,
        .order-login-line:after {
            content: '';
            position: absolute;
            top: 50%;
            background: #ffffff;
            width: 20%;
            height: 1px;
        }
        .order-login-line:before {
            left: 10%;
        }
        .order-login-line:after {
            right: 10%;
        }
        .order-login-box {
            display: flex;
            width: 100%;
            justify-content:center;
            margin-top: 20px;
            div{
                flex: 1;
                text-align: center;
                p{
                    text-align: center;
                    font-size: 14px;
                    color: #ffffff;
                }
            }
        }
     }
    }
}   
</style>