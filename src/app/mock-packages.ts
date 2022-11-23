import { Package } from './package'



export const PACKAGES: Package[] = [
    {
        code: "WILLIAM001",
        name: "Forfait Couette et café",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, une nuitée en chambre régulières, un petit-déjeuner, un cadeau régional, l' accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "01/10/2022",
        enddate:"30/04/2022",
        price: 260,
        lodging:{name: "Manoir du Lac William", description:"Hôtel & Spa", address:"3180 rue Principale", city:"Saint-Ferdinand", postalcode:"G0N 1N0", phonenumber:"1 800-428-9188", email:"info@manoirdulac.com", website:"https://www.manoirdulac.com/"},
        categories: ["Hébergement" , "Restauration"],
        rank: "Basique",
        reviews: []
    },

    {
        code: "WILLIAM002",
        name: "Forfait Nuitées Double",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, un souper table d'hôte cinq services, deux nuitées en chambre régulières, deux petits-déjeuners, un cadeau régional et l'accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "01/10/2022",
        enddate:"30/04/2022",
        price: 460,
        lodging:{name: "Manoir du Lac William", description:"Hôtel & Spa", address:"3180 rue Principale", city:"Saint-Ferdinand", postalcode:"G0N 1N0", phonenumber:"1 800-428-9188", email:"info@manoirdulac.com", website:"https://www.manoirdulac.com/"},
        categories: ["Hébergement" , "Restauration"],
        rank:"Standard",
        reviews: [
            {
                rating: 6,
                comments:"lorem impsum",
            },
            {
                rating: 6,
                comments:"lorem impsum",
            }
        ]
    },

    {
        code: "WILLIAMA03",
        name: "Forfait Détente",
        description: "Ce forfait pour deux personnes inclut: le cocktail de bienvenue, un souper table d'hôte cinq services, une nuitée en chambre supérieure, un petit-déjeuner, deux massages de 60 minutes (par personne), un cadeau régional et l'accès aux activités selon la saison incluant les bains nordiques, le jacuzzi, le sauna, la piscine intérieure, le kayak, le pédalo, les raquettes à neige, le ski de fond, la patinoire, le ponton, etc.",
        startdate: "01/10/2022",
        enddate:"30/04/2023",
        price: 660,
        newprice: 500,
        lodging:{name: "Manoir du Lac William", description:"Hôtel & Spa", address:"3180 rue Principale", city:"Saint-Ferdinand", postalcode:"G0N 1N0", phonenumber:"1 800-428-9188", email:"info@manoirdulac.com", website:"https://www.manoirdulac.com/"},
        categories: ["Hébergement" , "Restauration" , "Massothérapie"],
        rank:"Prenium",
        prenium: true,
        reviews: [
            {
                rating: 8,
                comments:"lorem impsum",
            }
        ]
    },

    {
        code: "LOGES001",
        name: "Forfait Nature et Spa",
        description: "Offrez-vous un ressourcement thermal dans l’intimité d’un chalet privé tout équipé de deux nuitées. Faites la location d’une loge de style scandinave située dans un décor de forêt boréale. Vous aurez alors accès à toutes les stations thermales suivantes : sur la terrasse de la Loge; un sauna sec, un spa ainsi qu’une chute d’eau froide et à l’intérieur, un sauna vapeur à l’eucalyptus de style hammam. Ce chalet est doté d’un foyer au bois prêt à être utilisé. L’endroit est fenêtré du plancher au plafond pour vous permettre de profiter de la nature à chaque seconde de votre séjour.",
        startdate: "01/11/2022",
        enddate:"31/03/2023",
        price: 750,
        lodging:{name: "Les Loges", description:"Chalet", address:"181, chemin Tomifobia", city:"Canton de Stanstead", postalcode:"J0B 1C0", phonenumber:"450-888-2533", email:"info@leslogeschalets.com", website:"https://leslogeschalets.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Prenium",
        prenium: true,
        reviews: [
            {
                rating: 9.5,
                comments:"lorem impsum",
            }
        ]
    },

    {
        code: "REPBOR001",
        name: "Forfait Maikan",
        description: "Véritable nid douillet en nature, ce prêt-à-camper d’inspiration scandinave vous fera vivre une expérience unique en son genre de trois nuits. Vous y retrouverez une vitre panoramique pour l’observation des étoiles, un espace pour cuisiner incluant tous les articles de cuisine, un réchaud vitro-céramique 2 ronds et un réfrigérateur, une table pour 3 personnes et un lit de qualité supérieure, pour un repos assuré. De plus, un accès gratuit à nos bains chauds et sauna pour un moment de détente unique en nature.",
        startdate: "01/12/2022",
        enddate:"31/03/2023",
        price:450,
        newprice: 300,
        lodging:{name: "Repère Boréal", description:"Chalet", address:"3141, route du Fleuve, Les Éboulements", city:"Québec", postalcode:"G0A 2M0", phonenumber:"418-635-1153", email:"info@repereboreal.com", website:"https://www.repereboreal.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Basique",
        reviews: []
    },

    {
        code: "REPBOR002",
        name: "Forfait Shiship",
        description: "Voici le prêt-à-camper 2.0 pour 3 nuitées! Ce refuge fabriqué à partir d’un conteneur maritime recyclé contient tout le nécessaire pour vous exiler dans le confort. Il comprend un espace pour cuisiner incluant tous les articles de cuisine, un réchaud vitro-céramique 2 ronds et un réfrigérateur, le chauffage électrique, une salle de bain, une table pour 4 personnes et un lit confortable digne des grands hôtels. Vous pourrez admirer notre boisé enchanteur à même votre lit grâce à la grande fenêtre du Shiship, au coeur de la forêt boréale.",
        startdate: "01/12/2022",
        enddate:"31/03/2023",
        price:570,
        newprice: 380,
        lodging:{name: "Repère Boréal", description:"Chalet", address:"3141, route du Fleuve, Les Éboulements", city:"Québec", postalcode:"G0A 2M0", phonenumber:"418-635-1153", email:"info@repereboreal.com", website:"https://www.repereboreal.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Standard",
        reviews: [
            {
                rating: 8,
                comments:"lorem impsum",
            }
        ]
    },

    {
        code: "REPBOR003",
        name: "Forfait Mashk",
        description: "Ce micro chalet contemporain situé dans un boisé enchanteur a tout pour vous séduire pour une durée de 3 nuitées! Façade de 15’ fenestrée, mezzanine, terrasse sur le toit, plancher chauffant de type radiant, cuisine et salle de bain. À l’extérieur, un espace feu intime vous invite à la détente.",
        startdate: "01/12/2022",
        enddate:"31/03/2023",
        price:690,
        newprice: 460,
        lodging:{name: "Repère Boréal", description:"Chalet", address:"3141, route du Fleuve, Les Éboulements", city:"Québec", postalcode:"G0A 2M0", phonenumber:"418-635-1153", email:"info@repereboreal.com", website:"https://www.repereboreal.com/"},
        categories: ["Hébergement" , "Nature" , "Spa"],
        rank:"Prenium",
        prenium: true,
        reviews: [
            {
                rating: 5,
                comments:"lorem impsum",
            }
        ]
    },
    
    {
        code: "KINIPI001",
        name: "Forfait Détente",
        description: "Le KiNipi vous offre un confort sans égal dans des suites somptueuses et raffinées à 10 minutes du centre-ville de Trois-Rivières pour une nuitée en chambre régulière avec l'accès aux bains et un massage de 30 minutes par personne. Chacune de nos suites est entièrement équipée pour que vous vous sentiez comme à la maison ! Découvrez tous nos services sur place en vous rendant au spa et bains nordiques et en dégustant un délicieux repas au KiNipi à la bouche, dans le confort de votre peignoir.",
        startdate: "01/09/2022",
        enddate:"30/06/2022",
        price: 500,
        lodging:{name: "KiNipi spa nordique & hébergement", description:"Hôtel & Spa", address:"8210, boulevard des Forges,", city:"Trois-Rivières", postalcode:"G8Y 4W2", phonenumber:"819-693-9999", email:"commentaires@kinipi.ca", website:"https://www.kinipi.ca/"},
        categories: ["Hébergement" , "Spa", "Massotérapie"],
        rank: "Basique",
        reviews: [
            {
                rating: 9,
                comments:"lorem impsum",
            }
        ]
    },

    {
        code: "KINIPI002",
        name: "Forfait Détente Plus",
        description: "Le KiNipi vous offre un confort sans égal dans des suites somptueuses et raffinées à 10 minutes du centre-ville de Trois-Rivières pour deux nuitée en chambre régulière avec l'accès aux bains et un massage de 60 minutes par personne et un crédit de 75$ à notre restaurant. Chacune de nos suites est entièrement équipée pour que vous vous sentiez comme à la maison ! Découvrez tous nos services sur place en vous rendant au spa et bains nordiques et en dégustant un délicieux repas au KiNipi à la bouche, dans le confort de votre peignoir.",
        startdate: "01/09/2022",
        enddate:"30/06/2022",
        price: 950,
        newprice: 750,
        lodging:{name: "KiNipi spa nordique & hébergement", description:"Hôtel & Spa", address:"8210, boulevard des Forges,", city:"Trois-Rivières", postalcode:"G8Y 4W2", phonenumber:"819-693-9999", email:"commentaires@kinipi.ca", website:"https://www.kinipi.ca/"},
        categories: ["Hébergement" , "Spa", "Massotérapie", "Restauration"],
        rank: "Standard",
        reviews: [
            {
                rating: 7,
                comments:"lorem impsum",
            }
        ]
    },

    {
        code: "KINIPI003",
        name: "Forfait Détente Super",
        description: "Le KiNipi vous offre un confort sans égal dans des suites somptueuses et raffinées à 10 minutes du centre-ville de Trois-Rivières pour deux nuitée en suite avec l'accès aux bains et un massage de 90 minutes par personne et un souper table d'hôtes 5 services. Chacune de nos suites est entièrement équipée pour que vous vous sentiez comme à la maison ! Découvrez tous nos services sur place en vous rendant au spa et bains nordiques et en dégustant un délicieux repas au KiNipi à la bouche, dans le confort de votre peignoir.",
        startdate: "01/09/2022",
        enddate:"30/06/2022",
        price: 1200,
        newprice: 925,
        lodging:{name: "KiNipi spa nordique & hébergement", description:"Hôtel & Spa", address:"8210, boulevard des Forges,", city:"Trois-Rivières", postalcode:"G8Y 4W2", phonenumber:"819-693-9999", email:"commentaires@kinipi.ca", website:"https://www.kinipi.ca/"},
        categories: ["Hébergement" , "Spa", "Massotérapie", "Restauration"],
        rank: "Prenium",
        prenium: true,
        reviews: [
            {
                rating: 10,
                comments:"lorem impsum",
            }
        ]
    },
]