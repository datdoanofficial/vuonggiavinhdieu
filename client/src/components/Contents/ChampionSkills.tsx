import React from "react";
import "./ChampionSkills.scss";

import vidFrame from "../../assets/images/icons/frame.png";
import skillsFrame from "../../assets/images/champions/skills/skills-thumb/phi.webp";

import passive from "../../assets/images/champions/skills/phi-skills.webp";
import skills1 from "../../assets/images/champions/skills/phi-skills-01.webp";
import skills2 from "../../assets/images/champions/skills/phi-skills-02.webp";
import skills3 from "../../assets/images/champions/skills/phi-skills-03.webp";

type Props = {};

const ChampionSkills = (props: Props) => {
  return (
    <div className="all-skills">
      <div className="skills-title">Kỹ năng</div>
      <div className="skills-content">
        {/* skills item */}
        <div className="skills-item">
          {/* line skills */}
          <div className="line-skills">
            <div className="passive skills">
              <img src={passive} alt="" />
              <div className="circle">
                <div className="line"></div>
              </div>
            </div>
            <div className="skills-01 skills">
              <img src={skills1} alt="" />
              <div className="circle">
                <div className="line"></div>
              </div>
            </div>
            <div className="skills-02 skills active">
              <img src={skills2} alt="" />
              <div className="circle">
                <div className="line"></div>
              </div>
            </div>
            <div className="skills-03 skills">
              <img src={skills3} alt="" />
              <div className="circle">
                <div className="line"></div>
              </div>
            </div>
            {/* <div className="skills-04 skills">
              <img src={skills3} alt="" />
              <div className="circle">
                <div className="line"></div>
              </div>
            </div> */}
            <div className="line"></div>
          </div>
          {/* skills item */}
          <div className="skills-item-content">
            <div className="featured-skills content-passive">
              <div className="heading">
                <div className="skills-name">
                  Nội tại: <span>Ngọc Tức · Tinh Mâu</span>
                </div>
                <div className="countdown-and-mana">
                  <div className="countdown">
                    <span>Hồi chiêu: </span>0
                  </div>
                  <div className="mana">
                    <span>Năng lượng: </span>0
                  </div>
                </div>
              </div>
              <div className="skills-item-content-text">
                Phi ở trên tường có tầm nhìn rộng hơn và có thể di chuyển tự do,
                các đòn đánh thường chuyển thành tấn công tầm xa (cũng có thể
                tung ra khi đang nhảy), trên tường nhận thêm 70~140 tốc độ di
                chuyển (tăng theo cấp độ anh hùng).
              </div>
            </div>
            <div className="featured-skills content-skills-01">
              <div className="heading">
                <div className="skills-name">
                  <span>Trục Ngọc · Phong Hồi</span>
                </div>
                <div className="countdown-and-mana">
                  <div className="countdown">
                    <span>Hồi chiêu: </span>7.5/7.2/6.9/6.6/6.3/6
                  </div>
                  <div className="mana">
                    <span>Năng lượng: </span>55
                  </div>
                </div>
              </div>
              <div className="skills-item-content-text">
                Phi đạp ngọc xuyên qua, gây 300/360/420/480/540/600 (+100% công
                vật lý cộng thêm) sát thương vật lý lên kẻ địch trên đường đi,
                đồng thời hất tung chúng lên 0.75 giây, gây thêm 50% sát thương
                lên quái rừng. Đồng thời, Phi tăng 50/60/70/80/90/100% tốc độ
                đánh và cường hóa hai đòn đánh thường tiếp theo, mỗi đòn đánh
                thường cường hóa gây 80/96/112/128/144/160 (+100% công vật lý)
                sát thương vật lý và hồi 110/132/154/176/198/220 (+2% máu cộng
                thêm) máu.
              </div>
            </div>
            <div className="featured-skills content-skills-02 active">
              <div className="heading">
                <div className="skills-name">
                  <span>Đạp ngọc phi diêm</span>
                </div>
                <div className="countdown-and-mana">
                  <div className="countdown">
                    <span>Hồi chiêu: </span>7/6.7/6.4/6.1/5.8/5.5
                  </div>
                  <div className="mana">
                    <span>Năng lượng: </span>50
                  </div>
                </div>
              </div>
              <div className="skills-item-content-text">
                Phi ngưng tụ thành ngọc, tung người "đạp ngọc" nhảy về phía bức
                tường được chỉ định. Khi ở trên tường có thể sử dụng nhiều lần{" "}
                <span>đạp ngọc phi diêm</span> để di chuyển đến các bức tường
                liền kề khác. Cứ sau 8/7.7/7.4/7.1/6.8/6.5 giây có thể dự trữ
                một lần <span>đạp ngọc phi diêm</span>, tối đa dự trữ bốn lần.
              </div>
            </div>
            <div className="featured-skills content-skills-03">
              <div className="heading">
                <div className="skills-name">
                  <span>Ngưng Ngọc Chi Ấn</span>
                </div>
                <div className="countdown-and-mana">
                  <div className="countdown">
                    <span>Hồi chiêu: </span>25/22.5/20
                  </div>
                  <div className="mana">
                    <span>Năng lượng: </span>100
                  </div>
                </div>
              </div>
              <div className="skills-item-content-text">
                Phi vung ngọc nhận quét ngang, gây 270/405/540 (+65% công vật lý
                cộng thêm) sát thương vật lý, đồng thời đánh dấu tất cả mục tiêu
                bằng linh ngọc. Sau khi sử dụng, kích hoạt{" "}
                <span>ngưng ngọc chi kích</span>, Phi thu đao vào vỏ, đồng thời
                đánh dấu vỡ vụn, chém mỗi mục tiêu bốn lần, và nhận được tầm
                nhìn của mục tiêu. Ba đoạn đầu mỗi đoạn gây 140/210/280 (+35%
                công vật lý cộng thêm) sát thương vật lý và hồi 60/90/120 (+1%
                máu cộng thêm) máu, đoạn thứ tư gây gấp đôi sát thương và hồi
                máu. Máu của Phi càng thấp, hồi máu càng cao, tối đa gấp 2 lần
                giá trị cơ bản. Khi máu của mục tiêu giảm xuống còn 14%, đòn
                chém cuối cùng chắc chắn sẽ hạ gục mục tiêu. Sử dụng{" "}
                <span>ngưng ngọc chi ấn</span> trên tường có thể xuống tường.
              </div>
            </div>
            {/* <div className="featured-skills content-skills-04">
              <div className="heading">
                <div className="skills-name">
                  <span>Ngưng Ngọc Chi Ấn</span>
                </div>
                <div className="countdown-and-mana">
                  <div className="countdown">
                    <span>Hồi chiêu: </span>25/22.5/20
                  </div>
                  <div className="mana">
                    <span>Năng lượng: </span>100
                  </div>
                </div>
              </div>
              <div className="skills-item-content-text">
                Phi vung ngọc nhận quét ngang, gây 270/405/540 (+65% công vật lý
                cộng thêm) sát thương vật lý, đồng thời đánh dấu tất cả mục tiêu
                bằng linh ngọc. Sau khi sử dụng, kích hoạt{" "}
                <span>ngưng ngọc chi kích</span>, Phi thu đao vào vỏ, đồng thời
                đánh dấu vỡ vụn, chém mỗi mục tiêu bốn lần, và nhận được tầm
                nhìn của mục tiêu. Ba đoạn đầu mỗi đoạn gây 140/210/280 (+35%
                công vật lý cộng thêm) sát thương vật lý và hồi 60/90/120 (+1%
                máu cộng thêm) máu, đoạn thứ tư gây gấp đôi sát thương và hồi
                máu. Máu của Phi càng thấp, hồi máu càng cao, tối đa gấp 2 lần
                giá trị cơ bản. Khi máu của mục tiêu giảm xuống còn 14%, đòn
                chém cuối cùng chắc chắn sẽ hạ gục mục tiêu. Sử dụng{" "}
                <span>ngưng ngọc chi ấn</span> trên tường có thể xuống tường.
              </div>
            </div> */}
          </div>
        </div>
        {/* skills video */}
        <div className="skills-introduction">
          <div className="frame">
            <img src={vidFrame} alt="" />
          </div>
          <div className="skills-video">
            <img src={skillsFrame} alt="" />
            <button className="play-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionSkills;
