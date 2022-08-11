
// this function convert color string into HSL color
export const stringToHslColor = (text = '', s = 50, l = 80) => {
    const str = text.replace(' ', '');
    let hash = 0;
    for (let i = 0; i < str.length; i++) {

        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash) % 360;
    return `hsl(${h}, ${s}%, ${l}%)`;
};