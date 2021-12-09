const size = {
    desktop: `1280px`,
    desktop_m: `1279px`,
    tablet: `690px`,
    tablet_m: `689px`,
    mobile: `340px`,
}

const deviceMedia = {
    desktop: `only screen and  (min-width: ${size.desktop})`,
    tablet: `only screen and  (min-width: ${size.tablet}) and (max-width:${size.desktop_m})`,
    mobile: `only screen and  (min-width: ${size.mobile}) and (max-width:${size.tablet_m})`,
}

export {
    deviceMedia,
    size
};