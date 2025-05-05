import { ClipLoader } from "react-spinners";
import { FC } from "react";
import s from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <ClipLoader color="#36d7b7" />
    </div>
  );
};
export default Loader;
