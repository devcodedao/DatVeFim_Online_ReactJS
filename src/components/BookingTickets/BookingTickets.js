import React, { Component } from "react";

export class BookingTickets extends Component {
  render() {
    return (
      <div>
        <h3>Chọn Vé</h3>
        <table className="table text-right tbl-ticket">
          <thead>
            <tr>
              <th className="w-25">Loại Vé</th>
              <th className="w-25">Số Lượng</th>
              <th className="w-25">Giá (VND)</th>
              <th className="w-25">Tổng (VND)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-25">2D</td>
              <td className="w-25">
                <i className="fa fa-minus" />
                <input type="text" value="2" className="w-25 text-right ml-1 mr-1" disabled/>
                <i className="fa fa-plus" />
              </td>
              <td className="w-25">70.000</td>
              <td className="w-25">140.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookingTickets;
