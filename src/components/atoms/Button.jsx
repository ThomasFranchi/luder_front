import "./style/atomsStyle.css"

export default function Button({children, subClassName, onClick }) {
    return (
        <button className={subClassName} onClick={onClick} >{children}</button>
    )
}