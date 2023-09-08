import image from '../../../assets/image.png';
import style from './ImageBox.module.css';


//이렇게도 가능함 
const ImageBox = () => {
    return (
    <div className="imageBox">
    <img src={image} className={`${style.image}`} alt=''></img>
    </div>
    );
}

export default ImageBox;