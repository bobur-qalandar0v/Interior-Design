import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import EmbedMap from "../Dashboard/EmbedMap";
import InputTel from "./InputTel";

function Contact() {
  const [value, setValue] = useState("");

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, "");

    if (numbers === "") return "";

    // Agar 88 bilan boshlansa -> 99888
    if (numbers.startsWith("88")) {
      numbers = "998" + numbers;
    } else if (!numbers.startsWith("998")) {
      numbers = "998" + numbers;
    }

    if (numbers.length > 12) {
      numbers = numbers.slice(0, 12);
    }

    let formatted = `+${numbers.slice(0, 3)}`;
    if (numbers.length > 3) formatted += `(${numbers.slice(3, 5)}`;
    if (numbers.length > 5) formatted += `)${numbers.slice(5, 8)}`;
    if (numbers.length > 8) formatted += `-${numbers.slice(8, 10)}`;
    if (numbers.length > 10) formatted += `-${numbers.slice(10, 12)}`;

    return formatted;
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;

    // Raqamni formatlab state-ga o'rnatamiz
    const formatted = formatPhoneNumber(rawValue);
    setValue(formatted);
  };

  return (
    <div className="contact">
      <div className="contact__top"></div>
      <div className="container">
        <div className="contact__border">
          <div className="border-title">Contact</div>

          <div className="main-wrap">
            <div className="visit-showroom">
              <p className="visit-showroom__title">
                Visit our Showroom Storefront:
              </p>
              <p className="content1">400 E. Palmetto Park Rd.</p>
              <p className="content2">Boca Raton, FL 33432</p>
            </div>
            <div className="showroom-hours">
              <p className="showroom-hours__title">Showroom Hours:</p>
              <p className="work-time">Monday - Friday 10:00 - 5:00</p>
            </div>
            <div className="got-question">
              <p className="got-question__text">Got a question?</p>
              <a href="tel:+998883056454" className="got-question__title">
                Call us (561) 750-1554
              </a>
              <a
                href="mailto:qalandarovbobur274@gmail.com"
                className="got-question__title"
              >
                Or email info@theartisticelements.com
              </a>
            </div>
          </div>

          <Form className="form" autoComplete="off" layout="vertical">
            <div className="inputs-wrap">
              <div className="left-inputs">
                <Form.Item
                  className="first-name__wrap"
                  label="First Name"
                  name="first-name"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos maydonni to'ldiring!",
                    },
                  ]}
                >
                  <Input className="first-name__input" />
                </Form.Item>
                <Form.Item
                  className="e-mail__wrap"
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos maydonni to'ldiring!",
                    },
                  ]}
                >
                  <Input type="email" className="e-mail__input" />
                </Form.Item>
              </div>
              <div className="right-inputs">
                <Form.Item className="last-name__wrap" label="Last Name">
                  <Input className="last-name__input" />
                </Form.Item>
                <Form.Item className="phone-number__wrap" label="Phone number">
                  <Input
                    className="phone-number__input"
                    placeholder="+998(__)___-__-__"
                    onChange={handleChange}
                    value={value}
                  />
                  {/* <InputTel /> */}
                </Form.Item>
              </div>
            </div>

            <div className="checkbox-wrap">
              <Form.Item
                name="checkbox-group"
                label="Checkbox"
                rules={[{ required: true, message: "Iltimos tanlang!" }]}
              >
                <Checkbox.Group>
                  <Row className="row-wrap">
                    <Checkbox
                      value="Interior Design Services"
                      className="checkbox-text"
                    >
                      Interior Design Services
                    </Checkbox>
                    <Checkbox
                      value="Furnishings & Home Decor"
                      className="checkbox-text"
                    >
                      Furnishings & Home Decor
                    </Checkbox>
                    <Checkbox value="Consultation" className="checkbox-text">
                      Consultation
                    </Checkbox>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </div>

            <div className="message-wrap">
              <Form.Item
                name="message"
                label="Your message"
                rules={[
                  { required: true, message: "Iltimos maydonni to'ldiring!" },
                ]}
              >
                <Input.TextArea className="message-input" />
              </Form.Item>
            </div>

            <div className="button-wrap">
              <Form.Item className="submit-btn__wrap">
                <Button className="submit__btn" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
          <div className="map-container">
            <EmbedMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
