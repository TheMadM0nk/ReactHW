import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getGists } from "../store/gists";
import classNames from 'classnames';
import style from '../styles.module.css'


const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export function GistsPage() {
  const dispatch = useDispatch();
  const { gists, pending, error } = useSelector((state) => state.gists);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (pending) {
    return <h1>pending....</h1>;
  }

  if (error) {
    return <h1>error....</h1>;
  }

  return (
    <div className={classNames(style.main_center, style.container)}>
      <h1 className={style.gists_titel}>GistsPage</h1>

      {gists.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      <div className={style.btn_box}>
        {buttons.map((button) => (
          <button onClick={() => dispatch(getGists(button))} key={button}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
