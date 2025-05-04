import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.loader}>
      <ClipLoader color="#36d7b7" />
    </div>
  );
}
export default Loader;
