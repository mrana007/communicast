/* eslint-disable react/no-unescaped-entities */
import { Form, Formik } from "formik";
import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Register = () => {
  const userInfo = {
    first_name: "",
    sure_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };

  const [user, setUser] = useState(userInfo);
  const {
    first_name,
    sure_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;

  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  console.log(user);

  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  return (
    <>
      <div className="blur-sm">
        <h1>This is register</h1>
      </div>

      <div className="register">
        <div className="register_header">
          <i className="text-2xl">
            <RxCross2 />
          </i>
          <span>Sign Up</span>
          <span>It's Quick and easy</span>
        </div>
        <Formik>
         
            <Form className="register_form">
              <div className="regi_line">
                <input
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <input
                  type="text"
                  placeholder="Sure Name"
                  name="sure_name"
                  onChange={handleRegisterChange}
                />
                <input
                  type="text"
                  placeholder="Mobile Number or Email address"
                  name="email"
                  onChange={handleRegisterChange}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>

              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i>?</i>
                </div>
                <div className="reg_grid">
                  <select name="bDay" onChange={handleRegisterChange}>
                    {days.map((day, i) => (
                      <option value={day} key={i}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((month, i) => (
                      <option value={month} key={i}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bYear"
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year, i) => (
                      <option value={year} key={i}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i>?</i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="female">
                    FeMale
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="custom">
                    Custom
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
              </div>
              <div className="register_btn_wrapper sign_up effect">
                <button type="submit">Sign Up</button>
              </div>
            </Form>
        </Formik>
      </div>
    </>
  );
};

export default Register;
