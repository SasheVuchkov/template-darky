import feather from 'feather-icons';
import {CSSProperties, FunctionComponent} from 'react';


export const IconWrapper = ({svg, className, style}: {svg: string, className?: string, style?: CSSProperties}) =>
    <div className={className} style={style} dangerouslySetInnerHTML={{__html: svg}} />

export const Home: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.home.toSvg()} className={`icon icon-home ${className ?? ''}`} />;
export const Code: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.code.toSvg()} className={`icon icon-code ${className ?? ''}`} />;
export const Hash: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.hash.toSvg()} className={`icon icon-hash ${className ?? ''}`} />;
export const Coffee: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.coffee.toSvg()} className={`icon icon-coffee ${className ?? ''}`} />;
export const Send: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.send.toSvg()} className={`icon icon-send ${className ?? ''}`} />;
export const AtSign: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons['at-sign'].toSvg()} className={`icon icon-at-sign ${className ?? ''}`} />;
export const User: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.user.toSvg()} className={`icon icon-user ${className ?? ''}`} />;
export const Mail: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.mail.toSvg()} className={`icon icon-mail ${className ?? ''}`} />;
export const Menu: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.menu.toSvg()} className={`icon icon-menu ${className ?? ''}`} />;



export const Star: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.star.toSvg()} className={`icon icon-star ${className ?? ''}`} />;

export const Check: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.check.toSvg()} className={`icon icon-check ${className ?? ''}`} />;
export const X: FunctionComponent<{className?: string}> = ({className}) => <IconWrapper svg={feather.icons.x.toSvg()} className={`icon icon-x ${className ?? ''}`} />;
