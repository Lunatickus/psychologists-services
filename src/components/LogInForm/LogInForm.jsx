import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { ReactComponent as Eye } from "../../icons/eye.svg";
import { ReactComponent as EyeOff } from "../../icons/eye-off.svg";
import { FormStyled, TextStyled, TitleStyled } from "./LogInForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email. For example user@gmail.com")
    .required(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required(),
});

export const LogInForm = ({ closeModal }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    closeModal();
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <TitleStyled>Log In</TitleStyled>
      <TextStyled>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </TextStyled>
      <FormStyled onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="form-input-wrapper">
          <label className="form-label">
            <input
              type="email"
              name="email"
              className="form-input"
              style={
                formik.touched.email &&
                formik.errors.email && { borderColor: "#EF5050" }
              }
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="register-form-input-error">{formik.errors.email}</p>
            )}
          </label>

          <label className="form-label">
            <input
              type={isPasswordShown ? "text" : "password"}
              name="password"
              className="form-input form-input-password"
              style={
                formik.touched.password &&
                formik.errors.password && { borderColor: "#EF5050" }
              }
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="register-form-input-error">
                {formik.errors.password}
              </p>
            )}
            <button
              type="button"
              className="password-show-button"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <Eye /> : <EyeOff />}
            </button>
          </label>
        </div>

        <button type="submit" className="form-submit">
          Log In
        </button>
      </FormStyled>
    </>
  );
};
