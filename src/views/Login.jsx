import React from "react";
import  "../assets/style/css/login.css"
import logo  from "../assets/style/img/login_logo.4a43235.png";
import qq from "../assets/style/img/qq.png";
import weibo from "../assets/style/img/weibo.f5b598c.png";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
              <div>
                  <div className="login">
                      <div className="login_title">
                          <i className="i">

                          </i>
                      </div>
                      <div className="pwd">
                          <img src={logo} alt=""/>
                              <div className="pwd_input">
                                  <div className="account">
                                      <input type="text" placeholder="请输入手机号邮箱"/>
                                  </div>
                                  <div className="account">
                                      <input type="text" placeholder="请输入密码"/>
                                  </div>
                              </div>
                              <div className="btn_login">
                                  <button className="login_btn">登录</button>
                              </div>
                              <div className="login_link">
<<<<<<< HEAD
                                  <a href=";">忘记密码</a>
                                  <a href=";">验证码登录/注册</a>
=======
                                  <a href="#">忘记密码</a>
                                  <a href="#">验证码登录/注册</a>
>>>>>>> 2fee519b85cda61d5cd57e9088364e3e901942f6
                              </div>
                      </div>
                      <div className="login_foot">
                          <div className="else">其他登陆方式</div>
                          <div className="foot_list">
                              <img src={qq} alt=""/>
                              <img src={weibo} alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
        )
    }
}