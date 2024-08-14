
type Newspaper = { id: string; label: string; link: string; imagePath: string; }



export const politics: Newspaper[] = [
    { id: 'MILANOFINANZA', label: 'Milano Finanza', link: 'milanofinanza.it', imagePath: 'MilanoFinanza.png' },
    { id: 'SOLE', label: 'Il Sole - 24 ore', link: 'ilsole24ore.com', imagePath: 'ilsole24ore.png' },
    { id: 'FINANZAONLINE', label: 'Finanza Online', link: 'finanzaonline.it', imagePath: 'finanzaonline.jpg' },
    { id: 'WALLSTREETITALIA', label: 'Wall Street Italia', link: 'wallstreetitalia.com', imagePath: 'wallstreetItalia.jpg' }]


export const general: Newspaper[] = [
    { id: 'LAREPUBBLICA', label: 'La Repubblica', link: 'repubblica.it', imagePath: 'La_Repubblica.png' },
    { id: 'CORRIEREDELLASERA', label: 'Corriere della sera', link: 'corriere.it', imagePath: 'Corriere-della-Sera.svg' },
    { id: 'FATTOQUOTIDIANO', label: 'Il Fatto Quotidiano', link: 'ilfattoquotidiano.it', imagePath: 'ilfattoquotidiano.png' },
    { id: 'ILTIRRENO', label: 'Il Tirreno', link: 'iltirreno.it', imagePath: 'iltirreno.png' }]



export const sport: Newspaper[] = [
    { id: 'GAZZETTADELLOSPORT', label: 'La Gazzetta dello Sport', link: 'gazzetta.it', imagePath: 'La_Gazzetta_dello_Sport.svg' },
    { id: 'SKYSPORT', label: 'Sky Sport', link: 'sport.sky.it', imagePath: 'sky_sport.jpg' },
    { id: 'CORRIEREDELLOSPORT', label: 'Corriere dello Sport', link: 'corrieredellosport.it', imagePath: 'corriere-dello-sport.png' },
    { id: 'TUTTOSPORT', label: 'Tutto Sport', link: 'tuttosport.com', imagePath: 'Tuttosport.png' }]