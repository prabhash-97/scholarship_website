import React, { Component } from "react";
import Slider from "react-slick";

import author1 from "../../../assets/img/team/p.PNG";
import author2 from "../../../assets/img/team/s.jpg";
import author3 from "../../../assets/img/team/t.jpg";

const testimonialslide = [
  {
    img: author1,
    name: "Yamuna Balasooriya",
    post: "President of Society",
    comment:
      " අධ්‍යාපනය,දැනුම,අවබෝධය හා බුද්ධිමත් බව පුද්ගලයකුට මෙලොව වශයෙන් ලැබිය හැකි උසස්තම දායාදයකි. එය  පුද්ගලයෙකුට අභිමානයක්, ආඩම්බරයක් මෙන් ම ගෞරවයක් ද වෙයි. මෙය සියලු දෙනාටම ලබාගත හැකි සෑම දෙනාට ම පොදු වූ උරුමයක් නොව, සැබෑ අධිෂ්ඨානයකින් දැඩි වීර්යයකින් සහ කැපවීමකින් යුතුව ලබාගත යුතු භාග්‍යවන්ත වූ දෙයකි. සියල්ලන්ටම මේ තත්ත්වය ළඟා කරගත හැකි නොවුණත්,ඒ සඳහා මංපෙත් හෙළි කරදීම, වීර්යවන්තයීන්ට අත්වැලක් සැපයීම, ධෛර්යවන්තයා ශක්තිමත් කිරීම, සැබෑ යුතුකම් හා වගකීම් දන්නා අයගේ උතුම් ගුණාංගයකි. ඒ උත්තරීතර ගුණාංගය වචනයේ පරිසමාප්තාර්ථයෙන්ම ක්‍රියාවට නැංවීමට ගොඩනැගූ,අධිෂ්ඨානශීලී ආයතනයකි, සීමාසහිත ලංකා ශිෂ්‍යාධාර සමිතිය මේ වනවිට සීමාසහිත ලංකා ශිෂ්‍යාධාර සමිතිය වසර සියයක් සම්පූර්ණ කර ඇත. එය අපට මහා ශක්තියකි. ඒ ශක්තිය තුළින් මේ ව්‍යාපාරය තවදුරටත් ඉදිරියට ගෙන යෑම අපගේ ඒකායන පරමාර්ථයයි. ගතවූ මෙම සියක් වසරක් තුළ අධ්‍යාපනයෙන්,දැනුමෙන්,බුද්ධියෙන් පිරිපුන් අපේම දරු පරපුරක් රටට ජාතියට දායාද කරවීමට හැකි වීම ඔබ අප සියලු දෙනා ලැබූ ජයග්‍රහණයකි,භාග්‍යයකි, වාසනාවකි. මෙම වැඩපිළිවෙළ සාර්ථකව ඉදිරියට කරගෙන යෑම සඳහා ඔබ සියලු දෙනාගේම ශක්තිය ධෛර්යය ගෞරවයෙන් යුතුව අපේක්ෂා කරමි.",
  },
  {
    img: author2,
    name: "Mahendra Harischandra",
    post: "Secretary",
    comment:
    "ස්වෙච්ඡා පදනමින් එකතු වූ පිරිසක් කිසිදු ලාභාපේක්ෂාවකින් තොරව අපිරිමිත දයාවෙන් යුක්තව පිහිටුවාගත් සමිතියක්,අඛණ්ඩව වසර සියයක් ඉක්මවා පවත්වාගෙන යෑම ඓතිහාසික සිදුවීමකි. එම ඒකරාශී වීම තම ඥාතිවර දරුවන්ගේ නැණස පෑදීමට සඳහා ශක්තියක්,ආධාරයක් වීම අරමුණු කර ගැනීම එයටත් වඩා භාග්‍යයකි. සීමාසහිත ලංකා ශිෂ්‍යාධාර සමිතිය ආරම්භ වූයේ මෙම පරමාර්ථයන් මුල්කර ගනිමිනි. එම වැඩපිළිවෙළ මේ වන විට වසර සීයක් පුරා අඛණ්ඩව පවත්වාගෙන ගොස් ඇත. එය අපට ආඩම්බරයකි,ධෛර්යකි, ශක්තියකි. ඒ සඳහා ශක්තියක් වූයේ නොමසුරුව ආධාර කළේ මෙම කාලය පුරාවට අපගේ සාමාජිකත්වය හෙබවූ අපේම ආදරණීය යන්න ඔවුන් සියලු දෙනාටම පින් පෙත් අනුමෝදන් කරමි. අපගේ ශිෂ්‍යාධාර ලැබුවත් අද දේශීය හා විදේශීය ව උසස් වෘත්තීන්හි නිරත වෙමින්, තමන් ලැබූ අධ්‍යාපනයේ නිසි ඵල නෙළා ගනිමින් සිටි.එසේම විවිධ ක්ෂේත්‍රයන්හි ඉහළ වෘත්තිමය නිපුණතා එළිදක්වා ඇත. එය අපට ඉමහත් සතුටකි. මේ දරුවන් උදෙසා ශිෂ්‍යාධාර පිරිනැමීමට ආධාර, උපකාර කළ හැම දෙනාටම අස්වැසිල්ලකි. මෙම කාලය පුරාවටම මෙම ශිෂ්‍යාධාර  සමිතිය මෙහෙයවූ නියමුවන්ට මහා කුසලයකි,ආශිර්වාදයකි. මෙම උදාරතර වැඩපිළිවෙළ ඉදිරියටත්, තවත් දශක ගණනාවක් අඛණ්ඩව පවත්වාගෙන යෑමට ඔබගේ සහයෝගය, ශක්තිය, ආශිර්වාදය අපට විශේෂයෙන් අත්‍යාවශ්‍යය. එසේ හෙයින් මෙතෙක් සාමාජිකත්වය නොලැබූ අපේ ඥාතීන්ට ගෞරවයෙන් යුතුව ආරාධනා කරන්නේ අපත් සමග එකතු වන්න ටයි. අපි එකතු වෙමු ජයග්‍රාහී ගමනක් යමු. අපේ දරුවන්ගේ හෙට දවස ශක්තිමත් කරමු."
  },
  {
    img: author3,
    name: "Dayananda Weerasinghe",
    post: "Treasurer",
    comment:
    "Message",
  },
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-arrow next-arrow" onClick={onClick}>
      <i className="fal fa-long-arrow-right" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-arrow prev-arrow" onClick={onClick}>
      <i className="fal fa-long-arrow-left" />
    </button>
  );
}
class Testimonials extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      arrows: true,
      fade: false,
      dots: false,
      swipe: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <section className="testimonial-section-three no-bg">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-10">
              <Slider
                className="testimonial-items"
                id="testimonialSliderThree"
                {...settings}
              >
                {testimonialslide.map((item, i) => (
                  <div key={i} className="testimonial-item text-center">
                    <div className="author-thumb">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <p>
                        <span className="quote-top">
                          <i className="fal fa-quote-left" />
                        </span>
                        {item.comment}
                        <span className="quote-bottom">
                          <i className="fal fa-quote-right" />
                        </span>
                      </p>
                    </div>
                    <div className="author">
                      <h4>{item.name}</h4>
                      <span>{item.post}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
