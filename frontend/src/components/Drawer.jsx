import { useSelector, useDispatch } from "react-redux";
import {
  changeFont,
  increaseFontSize,
  decreaseFontSize,
} from "../Features/Font/fontSlice";

function Drawer() {
  const fonts = useSelector((state) => state.font.fonts);
  const fontFamily = useSelector((state) => state.font.fontFamily);
  const fontSize = useSelector((state) => state.font.fontSize);
  const dispatch = useDispatch();

  const handleChangeFontFamily = (e) => {
    dispatch(changeFont(e.target.value));
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="drawer-font-setting"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-side">
        <label
          htmlFor="drawer-font-setting"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div>
            <p className="font-bold text-lg mb-2">Choose Font</p>
            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue={fontFamily}
              onChange={handleChangeFontFamily}
            >
              {fonts.map((item, index) => (
                <option key={index} value={item.family}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="font-bold text-lg">Font Size</p>
            <div className="join">
              <button
                className="join-item btn"
                onClick={() => dispatch(decreaseFontSize())}
              >
                «
              </button>
              <p className="join-item btn">{fontSize}px</p>

              <button
                className="join-item btn"
                onClick={() => dispatch(increaseFontSize())}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
