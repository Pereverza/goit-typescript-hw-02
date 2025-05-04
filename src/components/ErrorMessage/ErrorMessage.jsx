import s from "./ErrorMessage.module.css";
function ErrorMessage({ message }) {
  return <p className={s.message}>{message}</p>;
}

export default ErrorMessage;
