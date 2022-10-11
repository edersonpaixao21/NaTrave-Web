import { ReactComponent as backImg } from '../../assets/icones/back.svg'
import { ReactComponent as arrowLeft } from '../../assets/icones/arrow-left.svg'
import { ReactComponent as arrowRight } from '../../assets/icones/arrow-right.svg'
import { ReactComponent as profile } from '../../assets/icones/profile.svg'


const icons = {
    backImg,
    arrowLeft,
    arrowRight,
    profile
}

export function Icon({ name, ...props }) {
    const Element = icons[name]
    return <Element {...props} />
}