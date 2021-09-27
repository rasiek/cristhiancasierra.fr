import * as React from 'react'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import CreateIcon from '@material-ui/icons/Create';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';


export const compData = [
    {
        icon: <ThreeDRotationIcon />,
        title: "Modélisation 3D",
        description: "Représentation graphique des objets a l'aide des logiciels paramétriques",
        keywords: ["Solidworks", "Rhino", "Blender"]
    },
    {
        icon: <CreateIcon />,
        title: "Design de Produit",
        description: "Processus méthodologique de création de produit, dès la conception jusqu’à l'achèvement d'un objet final, tenant en compte tous les contraints techniques, mécaniques et d'usage.",
        keywords: ["Sketching", "Design Thinking"]
    },
    {
        icon: <ComputerIcon />,
        title: "Création Multimédia",
        description: "Utilisation des nouveaux techniques multimédias pour la représentation des idées et la création de contenu.",
        keywords: ["Suite Adobe", "Unity", "Réalité Augmentée"]
    },
    {
        icon: <CodeIcon />,
        title: "Codage",
        description: "Utilisation des langages de programmation pour la réalisation des projets qui mélangent hardware et software.",
        keywords: ["Python", "Arduino", "Javascript", "C#", "Java"]
    }
]