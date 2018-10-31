import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import Booking from "./containers/Booking/Booking";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Information from "./containers/UserInfomation/UserInformation";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ match }) => <HomePage match={match} />
  },
  {
    path: "/MovieDetails/MaPhim=:MaPhim",
    exact: false,
    main: ({ match }) => <MovieDetails match={match} />
  },
  {
    path: "/booking-ticket/MaPhim=:MaPhim/MaLichChieu=:MaLichChieu",
    exact: false,
    main: ({ match, history }) => <Booking match={match} histoty={history} />
  },
  {
    path: "/movie-detail",
    exact: false,
    main: () => <MovieDetailsPage />
  },
  {
    path: "/information/TaiKhoan=:TaiKhoan",
    exact: false,
    main: ({ match }) => <Information match={match} />
  }
];

export default routes;
