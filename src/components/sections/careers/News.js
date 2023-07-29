import React, { Component } from "react";
import { Link } from "react-router-dom";

import line1 from "../../../assets/img/lines/11.png";
import line2 from "../../../assets/img/lines/12.png";

import icon1 from "../../../assets/img/icons/0844b5ef-0774-45e8-9e02-03c2d4e143e9.JPG";
import icon2 from "../../../assets/img/icons/a3b54a7d-00e5-4f6a-8e5d-e03e8d8e3c1b.JPG";
import icon3 from "../../../assets/img/icons/deda6175-7c87-4365-8128-ab530ff15944.JPG";
import icon4 from "../../../assets/img/icons/04.png";
import { map } from "jquery";
/*
const serviceblock = [
  {
    icon: icon2,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon4,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon1,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
  },
  {
    icon: icon3,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon2,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon1,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
];*/

const serviceMain = [
  {
    icon: icon3,
    title: "සීමාසහිත ලංකා ශිෂ්‍යාධාරය සමිතිය සාමාජිකයින්ගේ ආරාධනාවෙන් ගමින් ගමට",
    text: "සීමාසහිත ලංකා ශිෂ්‍යාධාර සමිතියේ ජාතික සංවිධායක සේනක සරච්චන්ද්‍ර මහතාට ලැබුණු ආරාධනාවකට අනුව ගාල්ල දිස්ත්‍රික්කයේ පිටිගල ගම්මානයේ අපේම ඥාතීන්ගේ එකමුතුවක් පසුගිය ජුනි 29 වනදා පෙරවරුවේ පිටිගල සුන්දර  ගම්මානයේ පිහිටි  ආචාරිනී  වජිරා රන්මලී මහත්මියගේ නිවසේ දී ඉතාමත් සාර්ථකව පැවැතුණි. අප සමිතියේ ගරු සභාපතිතුමිය ගරු ලේකම්තුමා ගරු භාණ්ඩාගාරික තුමා ගරු භාරකාර මණ්ඩල ප්‍රධානී මහාචාර්යතුමන් ගරු උප භාණ්ඩාගාරික තුමන් සහ ජාතික සංවිධායක තුමන් මේ අවස්ථාවට ශිෂ්‍යාධාර සමිතියෙ මූලස්ථානය වෙනුවෙන් සහභාගි වීය. සියයකට අධික ඥාති පිරිසක් එකතු වී සිටි මෙම එකමුතුව ඉතාමත් සාර්ථක සුහදශීලී හමුවූවක් ව්ය. නලින් හේවගේ හිටපු මන්ත්‍රී තුමන් ඇතුළු සම්භාවනීයයන් රැසක්ද මෙම අවස්ථාවට එකතු වී සිටි අතර ශිෂ්‍යාධාර  සමිතියේ නව සාමාජිකත්වය ලබා ගැනීමට සහ ශිෂ්‍යාධාර ඉල්ලුම් කිරීමට බොහෝ පිරිසක් උනන්දුවීම මෙදින වැඩ සටහනේ විශේෂත්වයක් විය. ඉහළම ආගන්තුක සත්කාරයන් ගෙන් සපිරුණු මේ ඥාති එකමුතුව අපගේ ශිෂ්‍යාධාර ඉතිහාසයේ කොළඹින් බැහැරව වැඩිම පිරිසක් එකතු වූ හොඳම රැස්වීම වූ බවට වාර්තා ගත වීම සතුටින් සටහන් කරනු කැමැත්තෙමි. මෙම සුහද හමුව සංවිධානය කිරීම සදහා ඇප කැප වුණු සියලු දෙනාටම සමිතියේ ගරු සභාපතිනි නීතිඥ යමුනා බාලසූරිය මහත්මිය ගේ විශේෂ ස්තූතිය පිරිනැමුණි.",
    route: "/Secretarial",
  },
  {
    icon: icon1,
    title: "සීමාසහිත ලංකා ශිෂ්‍යාධාරය සමිතිය සාමාජිකයින්ගේ ආරාධනාවෙන් ගමින් ගමට",
    text: "2023/07/17 දින ගිරිවුල්ලේ පරන ගම වසන්ත මහතාගේ නිවසේ පැවැති දැනුවත් කිරීමේ වැඩසටහ.",
    route: "/Tax",
  },

  {
    icon: icon2,
    title: "සියක් වර්ෂ පූර්ණ සංවත්සර මහෝත්සවය 1920 -2020",
    text: "2023/04/29 - කොළඹ නව නගර ශාලාවෙ පැවැත්වුණි.",
    route: "/Outsourcing",
  },
];

class News extends Component {
  render() {
    return (
      <section className="service-section grey-bg service-line-shape section-gap">
        <div className="container">
                        <div className="section-title left-border mb-40">
                        <span className="title-tag">Past Events</span>
                        <h2 className="title">What we done ...</h2>
                        </div>
          {/* Services Boxes */}
          <div className="row service-boxes justify-content-center">
            {serviceMain.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-sm-6 col-10 wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="700ms"
              >
                <div className="service-box-three border-0">
                    <img src={item.icon} alt="" />
                  <h3>
                    <Link style={{ cursor: "default" }}>{item.title}</Link>
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="line-one">
          <img src={line2} alt="line-shape" />
        </div>
        <div className="line-two">
          <img src={line1} alt="line-shape" />
        </div>
      </section>
    );
  }
}

export default News;
