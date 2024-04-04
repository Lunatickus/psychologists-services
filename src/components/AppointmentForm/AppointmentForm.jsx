import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { appointmentTime } from "../../services/appointmentTime";
import {
  AvatarWrapperStyled,
  FormStyled,
  TextStyled,
  TitleStyled,
} from "./AppointmentForm.styled";
import { toastSuccess } from "../../services/toastNotifications";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  email: yup
    .string()
    .email("Enter valid email. For example user@gmail.com")
    .required(),
  phone: yup
    .string()
    .matches(
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    )
    .required(),
  time: yup.string().matches("[0-2][0-9]:[0-5][0-9]", "Enter valid time").required(),
  comment: yup.string(),
});

export const AppointmentForm = ({ name, avatar, closeModal }) => {
  const [time, setTime] = useState("00:00");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    closeModal();
    toastSuccess(`Your appointment at ${values.time}`)
    console.log(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      time: "",
      phone: "",
      comment: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const handleChangeTime = (e) => {
    setIsSelectOpen(false);
    setTime(e.target.value);
    formik.values.time = e.target.value;
  };

  return (
    <>
      <TitleStyled>Make an appointment with a psychologists</TitleStyled>
      <TextStyled>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </TextStyled>
      <AvatarWrapperStyled>
        <img
          src={avatar}
          alt="photo"
          width="44"
          height="44"
          className="avatar"
        />
        <div>
          <p className="psychologist-text">Your psychologists</p>
          <p className="psychologist-name">{name}</p>
        </div>
      </AvatarWrapperStyled>
      <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="form-content-wrapper">
          <label className="form-label">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-input"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="input-error">{formik.errors.name}</p>
            )}
          </label>
          <div className="time-tel-wrapper">
            <label className="form-label">
              <input
                type="tel"
                name="phone"
                placeholder="+380"
                className="form-input form-input-tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="input-error">{formik.errors.phone}</p>
              )}
            </label>

            <label className="form-label">
              <input
                type="time"
                value={time}
                name="time"
                className="form-input form-input-time"
                onClick={() => setIsSelectOpen(true)}
                onChange={formik.handleChange}
                // value={formik.values.time}
                onBlur={formik.handleBlur}
              />
              {formik.touched.time && formik.errors.time && (
                <p className="input-error">{formik.errors.time}</p>
              )}
              {isSelectOpen && (
                <select
                  className="time-list"
                  onChange={handleChangeTime}
                  size="5"
                >
                  <optgroup className="time-list-label" label="Meeting time">
                    {appointmentTime.map((item) => (
                      <option
                        value={item}
                        key={item}
                        className="time-list-option"
                      >
                        {item}
                      </option>
                    ))}
                  </optgroup>
                </select>
              )}
            </label>
          </div>
          <label className="form-label">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-input"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="input-error">{formik.errors.email}</p>
            )}
          </label>
          <textarea
            type="text"
            name="comment"
            placeholder="Comment"
            className="form-input form-input-comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit" className="submit-styled">
          Send
        </button>
      </FormStyled>
    </>
  );
};
