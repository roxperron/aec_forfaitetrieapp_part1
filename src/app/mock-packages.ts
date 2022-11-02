import { Package } from './package'



export const PACKAGES: Package[] = [
    {
        code: "FORHOTN001",
        name: "Forfait Couette et café",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, une nuitée en chambre régulières, un petit-déjeuner, un cadeau régional, l' accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "Jeudi",
        enddate:"Lundi",
        price: 260,
        categories: ["Hébergements" , "Restauration"]
    },

    {
        code: "FORHOTN002",
        name: "Forfait Nuitées Double",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, un souper table d'hôte cinq services, deux nuitées en chambre régulières, deux petits-déjeuners, un cadeau régional et l'accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "Vendredi",
        enddate:"Dimanche",
        price: 460,
        categories: ["Hébergements" , "Restauration"]
    },

    {
        code: "FORHOTDET",
        name: "Forfait Détente",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, un souper table d'hôte cinq services, une nuitée en chambre supérieure, un petit-déjeuner, deux massages de 60 minutes (par personne), un cadeau régional et l'accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "Jeudi",
        enddate:"Dimanche",
        price: 660,
        categories: ["Hébergements" , "Restauration" , "Massotérapie"]
    },

  
]