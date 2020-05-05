<<<<<<< HEAD
import React from "react";
import HomeHeader from "../../components/Home/HomeHeader";
import HomeBanner from "../../components/Home/HomeBanner";
import HomeLabel from "../../components/Home/HomeLabel";
import LabelBanner from "../../components/Home/LabelBanner";
import HomeWaterfall from "../../components/Home/HomeWaterfall";
import Image from '../../assets/img/5.png'
import Image1 from '../../assets/img/7.png'
import '../../assets/Home/home.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
=======
import React from "react";
import HomeHeader from "../../components/Home/HomeHeader";
import HomeBanner from "../../components/Home/HomeBanner";
import HomeLabel from "../../components/Home/HomeLabel";
import LabelBanner from "../../components/Home/LabelBanner";
import HomeWaterfall from "../../components/Home/HomeWaterfall";
import Image from '../../assets/img/5.png'
import Image1 from '../../assets/img/7.png'
import '../../assets/Home/home.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
        }
    }
    render() {
        return (
            <div>
                <HomeHeader></HomeHeader>
                <HomeBanner></HomeBanner>
                <HomeLabel></HomeLabel>
                <LabelBanner></LabelBanner>
                <div className={"content-img"}>
                    <img src={Image} alt=""/>
                </div>
                <HomeWaterfall></HomeWaterfall>
                <div className={"home-flexd"}>
                    <img src={Image1} alt=""/>
                </div>
            </div>
        )
    }
}