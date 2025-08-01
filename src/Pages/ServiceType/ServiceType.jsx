import { Button, Checkbox, Form, Input, Row, Select } from "antd";
import React from "react";
import InputTel from "./InputTel";

const { Option } = Select;

function ServiceType() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <section className="service-type">
      <div className="service-type__top"></div>
      <div className="container">
        <div className="service-type__border">
          <div className="border-title">Contact us</div>
          <div className="main-wrap">
            <Form
              onFinish={onFinish}
              layout="vertical"
              className="form"
              initialValues={{
                "select-value": "instagram",
              }}
            >
              <Form.Item
                label="Full Name"
                className="fullname-formitem"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Iltimos maydonni to'ldiring",
                  },
                ]}
              >
                <Input className="fullname-input" />
              </Form.Item>
              <Form.Item
                label="E-mail"
                className="email-formitem"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Iltimos maydonni to'ldiring",
                  },
                ]}
              >
                <Input className="email-input" type="email" />
              </Form.Item>
              <Form.Item
                label="Phone"
                className="phone-formitem"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Iltimos maydonni to'ldiring",
                  },
                ]}
              >
                <InputTel />
              </Form.Item>
              <Form.Item
                label="Project Address"
                className="project-adress-formitem"
                name="project-address"
                rules={[
                  {
                    required: true,
                    message: "Iltimos maydonni to'ldiring",
                  },
                ]}
              >
                <Input
                  className="project-address-input"
                  placeholder="Viloyat, Tuman, Mahalla, Ko'cha, Uy raqami"
                />
              </Form.Item>
              <div className="checkbox-wrap">
                <Form.Item
                  label="Project Type"
                  className="checkbox-top"
                  name="project-type"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos tanlang",
                    },
                  ]}
                >
                  <Checkbox.Group>
                    <Row className="row-wrap">
                      <Checkbox
                        className="checkbox-text"
                        value="Full Service Planning and Design"
                      >
                        Full Service Planning and Design
                      </Checkbox>
                      <Checkbox
                        className="checkbox-text"
                        value="Furnishings, Finishes and Styling"
                      >
                        Furnishings, Finishes and Styling
                      </Checkbox>
                      <Checkbox className="checkbox-text" value="Consultation">
                        Consultation
                      </Checkbox>
                      <Checkbox
                        className="checkbox-text"
                        value="Help With My New Build"
                      >
                        Help With My New Build
                      </Checkbox>
                      <Checkbox
                        className="checkbox-text"
                        value="Help With My Remodel"
                      >
                        Help With My Remodel
                      </Checkbox>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
                <Form.Item
                  label="Project Size"
                  className="checkbox-bottom"
                  name="project-size"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos tanlang",
                    },
                  ]}
                >
                  <Checkbox.Group>
                    <Row className="row-wrap">
                      <Checkbox className="checkbox-text" value="1-2 rooms">
                        1-2 rooms
                      </Checkbox>
                      <Checkbox className="checkbox-text" value="3-5 rooms">
                        3-5 rooms
                      </Checkbox>
                      <Checkbox
                        className="checkbox-text"
                        value="Entire Residence"
                      >
                        Entire Residence
                      </Checkbox>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              </div>
              <Form.Item
                label="Do you already have a budget in mind?"
                name="budget"
                rules={[
                  {
                    required: true,
                    message: "Iltimos maydonni to'ldiring",
                  },
                ]}
              >
                <Input className="budget-input" />
              </Form.Item>
              <Form.Item
                label="Your Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Iltimos maydonni to'ldiring",
                  },
                ]}
              >
                <Input.TextArea className="message-input" />
              </Form.Item>
              <Form.Item label="How did you her about it?" name="select-value">
                <Select
                  className="select"
                  // defaultValue="instagram"
                  options={[
                    { value: "instagram", label: "Instagram" },
                    { value: "friends", label: "Friends" },
                    { value: "web", label: "Web" },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item className="btn-formitem">
                <Button className="submit-btn" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceType;
