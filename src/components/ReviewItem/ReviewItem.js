import React, { Component,Fragment } from "react";
import './ReviewItem.css';

class ReviewItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-6">
          <div className="card card-reviews text-left border-0">
            <img
              className="card-img-top"
              src={require("../../images/Review1.jpg")}
              alt="Reviews"
            />
            <div className="card-body pl-1">
              <h5 className="card-title">
                [Review] Đại Chiến Thành Ansi – Khúc ca bi tráng về cuộc chiến
                giữ nước của người Hàn
              </h5>
              <p className="card-text">
                Với kinh phí lên tới 21 triệu USD, “The Great Battle” chính là
                một trong những bom tấn sử thi hoành tráng bậc nhất xứ Hàn.
              </p>
            </div>
          </div>
        </div>
        {/* end 1 col-6 */}
        <div className="col-md-6">
          <div className="card card-reviews text-left border-0">
            <img
              className="card-img-top"
              src={require("../../images/Review2.jpg")}
              alt="Reviews"
            />
            <div className="card-body pl-1">
              <h5 className="card-title">
                [Review] A Star Is Born: Có một vì sao mang tên Lady Gaga vừa
                vụt sáng trên màn bạc
              </h5>
              <p className="card-text">
                A Star Is Born kể về một câu chuyện tình không bao giờ cũ và sẽ
                lấy đi của bạn rất nhiều nước mắt.
              </p>
            </div>
          </div>
        </div>
        {/* end 1 col-6 */}
      </Fragment>
    
    );
  }
}

export default ReviewItem;
