import { getIconComponentByName } from "./utils/icons-map";

const Social = ({social}) => {
    return ( 
        <div className="flex justify-end absolute bottom-0 right-0 mb-14 mr-8">
            <ul>
                { social.map( link => (
                    <li key={link.id} className="py-5">
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