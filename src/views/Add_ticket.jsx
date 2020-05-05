import React from "react";
import '../assets/style/css/font_1499266_s13zw29z4c.css';
import '../assets/style/css/addnameticket.css';
export default class AddNameTick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className='addnameticket'>
            <header>
                <i className='iconfont ju-icon-arrow'></i>
                <span>添加投票人</span>
                <i className='iconfont ju-icon-ellipsis'></i>
            </header>
            <section>
                <div className='real-content'>
                    <div className='real-content_name'>
                        <label className='real.content_name_tip'>姓名</label>
                        <input type='text' placeholder='请填写购票人姓名' maxLength='7' class='real.content_name_tip_input' />
                    </div>
                    <div className='real-line'></div>
                    <div className='real-content_id'>
                        <label className='real.content_id_tip'>身份证号</label>
                        <input type='text' placeholder='请填写购票人身份证号' class='real.content_id_tip_input' />
                    </div>
                    <div className='real-line'></div>

                </div>
            </section>
            

                
            </div>
        )
    }
}
