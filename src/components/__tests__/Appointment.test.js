import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render, cleanup } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Appointment from "components/Appointment";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";

/*
  A test that renders a React Component
*/

afterEach(cleanup);

const interviewers = [
    { id: 1, name: "Polina Pozdnyakova", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Polina Burneiko", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Alexander Kovalyev", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Sarah Menary", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Andrei Romanov", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const interviewer = {
    id: 1,
    name: "Polina Pozdnyakova",
    avatar: "https://i.imgur.com/LpaY82x.png"
};

describe("Appointment", () => {
    it("renders without crashing", () => {
        render(<Appointment />);
    });
});