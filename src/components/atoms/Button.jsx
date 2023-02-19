import "./style/atomsStyle.css"

export default function Button({children, subClassName, }) {
    return (
        <button className={subClassName} >{children}</button>
    )
}