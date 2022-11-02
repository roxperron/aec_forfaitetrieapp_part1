import { Package } from './package'



export const PACKAGES: Package[] = [
    {
        code: "WILSPA001",
        name: "Forfait Couette et café",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, une nuitée en chambre régulières, un petit-déjeuner, un cadeau régional, l' accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "Jeudi",
        enddate:"Lundi",
        price: 260,
        lodging:{name: "Manoir du Lac William", description:"Hôtel & Spa", address:"3180 rue Principale", city:"Saint-Ferdinand", phonenumber:"1 800-428-9188", email:"info@manoirdulac.com", website:"https://www.manoirdulac.com/"},
        categories: ["Hébergements" , "Restauration"]
    },

    {
        code: "WILSPA002",
        name: "Forfait Nuitées Double",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, un souper table d'hôte cinq services, deux nuitées en chambre régulières, deux petits-déjeuners, un cadeau régional et l'accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "Vendredi",
        enddate:"Dimanche",
        price: 460,
        lodging:{name: "Manoir du Lac William", description:"Hôtel & Spa", address:"3180 rue Principale", city:"Saint-Ferdinand", phonenumber:"1 800-428-9188", email:"info@manoirdulac.com", website:"https://www.manoirdulac.com/"},
        categories: ["Hébergements" , "Restauration"]
    },

    {
        code: "WILSPA03",
        name: "Forfait Détente",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, un souper table d'hôte cinq services, une nuitée en chambre supérieure, un petit-déjeuner, deux massages de 60 minutes (par personne), un cadeau régional et l'accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "Jeudi",
        enddate:"Dimanche",
        price: 660,
        lodging:{name: "Manoir du Lac William", description:"Hôtel & Spa", address:"3180 rue Principale", city:"Saint-Ferdinand", phonenumber:"1 800-428-9188", email:"info@manoirdulac.com", website:"https://www.manoirdulac.com/"},
        categories: ["Hébergements" , "Restauration" , "Massothérapie"]
    },

  
]