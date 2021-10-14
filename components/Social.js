import { getIconComponentByName } from "./utils/icons-map";

const Social = ({social}) => {
    return ( 
        <div className="flex md:justify-end md:absolute md:bottom-0 md:right-0 md:mb-14 md:mr-8">
            <ul className="flex md:flex-col justify-around m-auto">
                { social.map( link => (
                    <li key={link.id} className="py-5 md:mx-0 mx-10">
                        <a href={link.fields.url}>
                            { getIconComponentByName( link.fields.Name ) }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default Social;