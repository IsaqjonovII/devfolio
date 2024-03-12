import { useState } from "react";
import emailjs from "@emailjs/browser";
import c from "./style.module.css";

const Contact = () => {
  const [msgForm, setMsgForm] = useState({ name: "", email: "", msg: "" });
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  function onInputChange(e) {
    const { name, value } = e.target;

    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = "This field is required";
    } else if (
      name === "email" &&
      !value.includes("@") &&
      !value.includes(".")
    ) {
      errorMessage = "Please enter a valid email address";
    }

    setMsgForm({ ...msgForm, [name]: value });
    setErrorState({ ...errorState, [name]: errorMessage });
    setIsFormValid(chechFormIsValid());
  }

  function chechFormIsValid() {
    const values = Object.values(msgForm);
    const errors = Object.values(errorState);

    return values.every((val) => val.trim()) && errors.every((err) => !err);
  }

  function handleSendMessage(e) {
    e.preventDefault();
    if (isFormValid) {
      emailjs
        .send(
          "service_9fzgkgy",
          "template_6m2wrzg",
          {
            from_name: msgForm.name,
            from_email: msgForm.email,
            message: msgForm.msg,
          },
          { publicKey: "hqnLJlihPDh1u5mHF" }
        )
        .then((res) => res.status === 200 && setIsMsgSent(true))
        .catch((err) => console.log(err));
    } else {
      console.log("Form is not valid");
    }
  }

  if (isMsgSent)
    return (
      <div className="container" id="contact">
        <h1 className={c.page__title}>
          Message sent. I&prime;ll reply to you soon😊
        </h1>
      </div>
    );
  return (
    <section className={c.contact} id="contact">
      <div className="container">
        <h1 className={c.page__title}>Ready to chat? Send a message!</h1>
        <div className="contact__form">
          <form autoComplete="off" onSubmit={handleSendMessage} method="POST">
            <div className={c.form__row}>
              <div className={c.form__inputGroup}>
                <label htmlFor="nameInput">Your name:</label>
                <input
                  className={c.form__inp}
                  type="text"
                  name="name"
                  id="nameInput"
                  required
                  value={msgForm.name}
                  onChange={onInputChange}
                  aria-required="true"
                  aria-invalid={errorState.name ? "true" : "false"}
                  aria-describedby={errorState.name ? "nameError" : null}
                />
                {errorState.name && (
                  <p className={c.form__error} id="nameError">
                    {errorState.name}
                  </p>
                )}
              </div>

              <div className={c.form__inputGroup}>
                <label htmlFor="emailInput">Your email:</label>
                <input
                  className={c.form__inp}
                  type="email"
                  name="email"
                  id="emailInput"
                  required
                  value={msgForm.email}
                  onChange={onInputChange}
                  aria-required="true"
                  aria-invalid={errorState.email ? "true" : "false"}
                  aria-describedby={errorState.email ? "emailError" : null}
                />
                {errorState.email && (
                  <p className={c.form__error} id="emailError">
                    {errorState.email}
                  </p>
                )}
              </div>
            </div>
            <div className={c.form__inputGroup}>
              <label htmlFor="message">Say anything you wanna say to me:</label>
              <textarea
                className={c.form__textarea}
                name="msg"
                id="message"
                rows="5"
                required
                value={msgForm.msg}
                onChange={onInputChange}
                aria-required="true"
                aria-invalid={errorState.msg ? "true" : "false"}
                aria-describedby={errorState.msg ? "messageError" : null}
              ></textarea>
              {errorState.msg && (
                <p className={c.form__error} id="messageError">
                  {errorState.msg}
                </p>
              )}
            </div>
            <button
              className={c.form__btn}
              type="submit"
              disabled={!isFormValid}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
