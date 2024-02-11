import { Link } from "react-router-dom";


const Menu = () => {
    const links = ['', 'contact','about'];
    const menuNames = ['Home', 'Contact','About'];
    return (
        <div className=" flex flex-col lg:flex-row lg:gap-4">
            {
                links.map((link, index) =>
                    <ol key={link}>
                        <li >
                            <Link className="text-white border px-2" to={`/${link}`}>{menuNames[index]}</Link>
                        </li>
                    </ol>)
            }
        </div>
    )
}

export default Menu;