import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className={s.message}>{message}</p>;
}

export default ErrorMessage;
