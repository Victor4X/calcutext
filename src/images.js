export default null;

const getStroke = (color) => color.replace('#', '%23') || 'currentColor';

// prettier-ignore
export const iconAdd = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus-circle'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='16'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='16' y2='12'%3E%3C/line%3E%3C/svg%3E`;

// prettier-ignore
export const iconClose = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E`;

// prettier-ignore
export const iconGitHub = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-github'%3E%3Cpath d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'%3E%3C/path%3E%3C/svg%3E`;

// prettier-ignore
export const iconMenu = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E`;

// prettier-ignore
export const iconRefresh = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-refresh-cw'%3E%3Cpolyline points='23 4 23 10 17 10'%3E%3C/polyline%3E%3Cpolyline points='1 20 1 14 7 14'%3E%3C/polyline%3E%3Cpath d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'%3E%3C/path%3E%3C/svg%3E`;

// prettier-ignore
export const iconSettings = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-settings'%3E%3Ccircle cx='12' cy='12' r='3'%3E%3C/circle%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'%3E%3C/path%3E%3C/svg%3E`;

// prettier-ignore
export const iconTrash = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${getStroke(color)}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'%3E%3C/polyline%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'%3E%3C/path%3E%3Cline x1='10' y1='11' x2='10' y2='17'%3E%3C/line%3E%3Cline x1='14' y1='11' x2='14' y2='17'%3E%3C/line%3E%3C/svg%3E`;

export const logo = `data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='468px' height='70px' viewBox='0 0 468 70' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Calcutext' fill='%23000000' fill-rule='nonzero'%3E%3Cpath d='M18,70 C12.2,70 7.75,68.5833333 4.65,65.75 C1.55,62.9166667 -5.32907052e-15,58.6666667 -5.32907052e-15,53 L-5.32907052e-15,17 C-5.32907052e-15,11.3333333 1.55,7.08333333 4.65,4.25 C7.75,1.41666667 12.2,0 18,0 L32.2,0 L32.2,7.6 L17,7.6 C14.5333333,7.6 12.5333333,8.33333333 11,9.8 C9.46666667,11.2666667 8.7,13.0333333 8.7,15.1 L8.7,54.9 C8.7,56.9666667 9.46666667,58.7333333 11,60.2 C12.5333333,61.6666667 14.5333333,62.4 17,62.4 L32.2,62.4 L32.2,70 L18,70 Z' id='Path'%3E%3C/path%3E%3Cpath d='M85.3,70 C84.4333333,70 83.4833333,69.7333333 82.45,69.2 C81.4166667,68.6666667 80.5333333,67.9333333 79.8,67 C78.2666667,69 76.2333333,70 73.7,70 L64.8,70 C59.7333333,70 56.05,68.9833333 53.75,66.95 C51.45,64.9166667 50.3,61.4333333 50.3,56.5 L50.3,54.5 C50.3,44.1666667 55.1666667,39 64.9,39 L77.3,39 L77.3,34 C77.3,31.9333333 76.6666667,30.3333333 75.4,29.2 C74.1333333,28.0666667 72.2666667,27.5 69.8,27.5 L54.3,27.5 L54.3,20 L68.8,20 C74.6,20 78.8833333,21.2666667 81.65,23.8 C84.4166667,26.3333333 85.8,30.4 85.8,36 L85.8,60 C85.8,61 86.1833333,61.75 86.95,62.25 C87.7166667,62.75 89,63 90.8,63 L90.8,70 L85.3,70 Z M72.7,62.5 C74.7,62.5 75.9666667,62.0333333 76.5,61.1 C77.0333333,60.1666667 77.3,58.9666667 77.3,57.5 L77.3,46.5 L64.8,46.5 C63.0666667,46.5 61.6333333,47.0666667 60.5,48.2 C59.3666667,49.3333333 58.8,50.7666667 58.8,52.5 L58.8,57.5 C58.8,59.2333333 59.2,60.5 60,61.3 C60.8,62.1 62.0666667,62.5 63.8,62.5 L72.7,62.5 Z' id='Shape'%3E%3C/path%3E%3Cpath d='M128.3,70 C126.033333,70 124.05,69.2 122.35,67.6 C120.65,66 119.8,63.4666667 119.8,60 L119.8,7.5 L105.1,7.5 L105.1,0 L128.3,0 L128.3,59.5 C128.3,60.5666667 128.566667,61.3333333 129.1,61.8 C129.633333,62.2666667 130.533333,62.5 131.8,62.5 L145.1,62.5 L145.1,70 L128.3,70 Z' id='Path'%3E%3C/path%3E%3Cpath d='M181.6,70 C175.733333,70 171.433333,68.75 168.7,66.25 C165.966667,63.75 164.6,59.6666667 164.6,54 L164.6,36 C164.6,30.4 165.983333,26.3333333 168.75,23.8 C171.516667,21.2666667 175.8,20 181.6,20 L194.5,20 L194.5,27.5 L180.6,27.5 C178.133333,27.5 176.266667,28.0666667 175,29.2 C173.733333,30.3333333 173.1,31.9333333 173.1,34 L173.1,56 C173.1,58.0666667 173.733333,59.6666667 175,60.8 C176.266667,61.9333333 178.133333,62.5 180.6,62.5 L194.5,62.5 L194.5,70 L181.6,70 Z' id='Path'%3E%3C/path%3E%3Cpath d='M243.8,67.7 C241.6,69.2333333 238.933333,70 235.8,70 L232.4,70 C227,70 222.983333,68.7333333 220.35,66.2 C217.716667,63.6666667 216.4,59.6 216.4,54 L216.4,20 L224.9,20 L224.9,56 C224.9,58 225.483333,59.5833333 226.65,60.75 C227.816667,61.9166667 229.4,62.5 231.4,62.5 L236.8,62.5 C238.933333,62.5 240.516667,61.9666667 241.55,60.9 C242.583333,59.8333333 243.166667,58.6333333 243.3,57.3 L243.3,20 L251.8,20 L251.8,70 L243.8,70 L243.8,67.7 Z' id='Path'%3E%3C/path%3E%3Cpath d='M292.3,70 C288.9,70 286.3,68.9 284.5,66.7 C282.7,64.5 281.8,61.6 281.8,58 L281.8,27.5 L272.3,27.5 L272.3,20 L281.8,20 L281.8,8 L290.3,8 L290.3,20 L304.9,20 L304.9,27.5 L290.3,27.5 L290.3,58.5 C290.3,59.9666667 290.666667,61 291.4,61.6 C292.133333,62.2 293.266667,62.5 294.8,62.5 L304.9,62.5 L304.9,70 L292.3,70 Z' id='Path'%3E%3C/path%3E%3Cpath d='M342.5,70 C336.633333,70 332.333333,68.75 329.6,66.25 C326.866667,63.75 325.5,59.6666667 325.5,54 L325.5,36 C325.5,30.2666667 326.733333,26.1666667 329.2,23.7 C331.666667,21.2333333 335.766667,20 341.5,20 L346.2,20 C350.933333,20 354.516667,21.3166667 356.95,23.95 C359.383333,26.5833333 360.6,30.4333333 360.6,35.5 L360.6,48.5 L334,48.5 L334,56 C334,58.0666667 334.633333,59.6666667 335.9,60.8 C337.166667,61.9333333 339.033333,62.5 341.5,62.5 L357.4,62.5 L357.4,70 L342.5,70 Z M352.3,33.5 C352.3,31.7666667 351.733333,30.3333333 350.6,29.2 C349.466667,28.0666667 348.033333,27.5 346.3,27.5 L340.5,27.5 C338.1,27.5 336.416667,28.05 335.45,29.15 C334.483333,30.25 334,31.8666667 334,34 L334,41 L352.3,41 L352.3,33.5 Z' id='Shape'%3E%3C/path%3E%3Cpolygon id='Path' points='386.5 70 377.1 70 392.7 44.2 378.3 20 388.2 20 397.7 36.8 407.4 20 416.7 20 402.1 43.8 418 70 408 70 397.5 51.1'%3E%3C/polygon%3E%3Cpath d='M455.8,70 C452.4,70 449.8,68.9 448,66.7 C446.2,64.5 445.3,61.6 445.3,58 L445.3,27.5 L435.8,27.5 L435.8,20 L445.3,20 L445.3,8 L453.8,8 L453.8,20 L468.4,20 L468.4,27.5 L453.8,27.5 L453.8,58.5 C453.8,59.9666667 454.166667,61 454.9,61.6 C455.633333,62.2 456.766667,62.5 458.3,62.5 L468.4,62.5 L468.4,70 L455.8,70 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
