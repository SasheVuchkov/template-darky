import {LinkEntity} from '../../lib/types';
import NavLink from './NavLink';

export type Props = {
    className?: string,
    links: LinkEntity[]
}

export default function Navbar({className, links}: Props) {
    return(
        <ul className={className}>
            {links.map(link => <li key={link.href} className={link.className ?? ''}>
                <NavLink link={link} />
            </li>)}
        </ul>
    );
}