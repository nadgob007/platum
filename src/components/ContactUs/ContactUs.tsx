import React, { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";

export const ContactUs = () => {
  const YOUR_SERVICE_ID = "service_x8p2x44";
  const YOUR_TEMPLATE_ID = "template_2nzaief";
  const YOUR_PUBLIC_KEY = "sF6YTu8P7lusLCwvB";

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    user_company: "",
    message: "",
  });
  const [send, setSend] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, values, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setSend("success");
          setValues({
            user_name: "",
            user_email: "",
            user_number: "",
            user_company: "",
            message: "",
          });
        },
        (error: any) => {
          setSend("failed");
        }
      );
  };

  return (
    <div className="contactUs">
      <h2 className="title">Связаться с нами</h2>
      <form className="contactUs-form" onSubmit={sendEmail}>
        <div className="inputs">
          <input
            type="text"
            name="user_name"
            placeholder="Имя"
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_email"
            placeholder="Эл.почта"
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_company"
            placeholder="Компания"
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_number"
            placeholder="Телефон"
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Добавьте сообщение..."
          onChange={handleChange}
        />
        <button type="submit">Отправить</button>
        {send && (
          <div
            className="notification"
            style={{ color: send === "success" ? "green" : "red" }}
          >
            {send === "success"
              ? "Сообщение успешно отправлено!"
              : "Произошла ошибка"}
          </div>
        )}
      </form>
    </div>
  );
};
