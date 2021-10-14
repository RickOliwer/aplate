const Menu = ({menu}) => {
    return ( 
        <div className="text-center">
            <h2 className="py-6 text-xl">{menu.fields.day}</h2>
            <p>{menu.fields.first_dish}</p>
            <p>{menu.fields.second_dish}</p>
        </div>
    );
}
 
export default Menu;