import React, {Component} from 'react';
import "../assets/style/css/register.css"
import logo  from "../assets/style/img/login_logo.4a43235.png";
import qq from "../assets/style/img/qq.png";
import weibo from "../assets/style/img/weibo.f5b598c.png";
export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="register">
                    <div className="register_title">

                    </div>
                    <div className="register_code">
                        <img src={logo} alt=""/>
                            <div className="code_input">
                                <div className="code">
                                    <span>+86</span>
                                    <input className="phone" type="text" placeholder="请输入手机号"/>
                                </div>
                                <div className="code">
                                    <input className="vcn_code" type="text" placeholder="请输入验证码"/>
                                </div>
                                <p>未注册的手机号将自动创建会员账号</p>
                            </div>
                            <div className="btn_code">
                                <button className="getCode">获取短信验证码</button>
                            </div>
                            <div className="register_link">
                                <a href=";">邮箱注册</a>
                                <a href=";">密码登录</a>
                            </div>
                    </div>
                    <div className="register_foot">
                        <div className="else">其他登陆方式</div>
                        <div className="register_list">
                            <img src={qq} alt=""/>
                            <img src={weibo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}