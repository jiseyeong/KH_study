import style from './MyNavi.module.css';



function navi() {
    return(
        <div>
            <ul className={style.ul}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default navi;