const Menu = ({menu}) => {
    return ( 
        <div className="text-center py-3">
            <h2 className="py-1 text-2xl">{menu.fields.day}</h2>
            <p className="pb-4 text-sm">{menu.fields.first_dish}</p>
            <p className="text-sm">{menu.fields.second_dish}</p>
        </div>
    );
}
 
export default Menu;