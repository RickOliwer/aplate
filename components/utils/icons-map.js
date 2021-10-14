import * as SvgIconsComonent from '../icons'

export const getIconComponentByName = (name) => {

    const ComponentsMap = {
        Facebook: SvgIconsComonent.Facebook,
        Instagram: SvgIconsComonent.Instagram,
        Linkedin: SvgIconsComonent.Linkedin,
    }

    if ( name in ComponentsMap ) {
        const IconComponent = ComponentsMap[name];
        return <IconComponent/>
    } else {
        return null
    }
}