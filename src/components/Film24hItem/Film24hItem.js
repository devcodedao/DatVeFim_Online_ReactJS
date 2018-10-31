import React, { Component, Fragment } from "react";
import "./Film24hItem.css";

class Film24hItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-6">
          <div className="card card-news text-left border-0">
            <img
              className="card-img-top"
              src={require("../../images/film24hItem.jpg")}
              alt="film24hItem"
            />
            <div className="card-body pl-1">
              <h5 className="card-title">
                Ngoại truyện Fast & Furious vừa khởi quay, hậu trường đã kiện
                cáo lùm xùm
              </h5>
              <p className="card-text">
                Vụ kiện này có làm gián đoạn quá trình sản xuất của Hobbs &
                Shaw?
              </p>
            </div>
          </div>
        </div>
        {/* end 1 col-6 */}
        <div className="col-md-6">
          <div className="card card-news text-left border-0">
            <img
              className="card-img-top"
              src={require("../../images/film24hItem1.jpg")}
              alt="film24hItem"
            />
            <div className="card-body pl-1">
              <h5 className="card-title">
                Chào đón thám tử Sherlock phiên bản lầy không nhặt nổi mồm
              </h5>
              <p className="card-text">
                Bộ phim trinh thám hài hước Holmes & Watson sẽ ra mắt khán giả
                dịp Giáng sinh năm nay.
              </p>
            </div>
          </div>
        </div>
        {/* end 1 col-6 */}
      </Fragment>
    );
  }
}

export default Film24hItem;
