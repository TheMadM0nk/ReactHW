import './src/style.css';
import img from './src/photo.jpg';

export const ProfilePage = () => {

    return (

        <div className="content">
            <div className='container'>
                < div className="center">
                    <img src={img} alt='img' className='userImg' />
                    <div className="box_text">
                        <p>
                            <i>
                                <b >"Данный сайт является лишь демонстрацией домашнего задания, автор отказывается выкладывать информацию о себе!"</b>
                            </i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                Copyright &copy; <i>"Мяурис"</i>
            </div>
        </div>
    )
}