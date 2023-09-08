import style from './MyContents.module.css';





function contents() {
    return(
        <div className={style.div}> 
            <div>Contents</div>
            <div>Aside</div>
        </div>
    )
}

export default contents;