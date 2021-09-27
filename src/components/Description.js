import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import * as React from 'react'
import Badge from './Badge'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Wrapper } from './Description.style';



const Description = () =>

    <Wrapper>
        <h1>Je suis<br />Cristhian Casierra</h1>
        <p>Passionné par la technologie, ma curiosité me pousse à toujours vouloir comprendre le fonctionnement des choses.
        Cette passion m’a amené à me former sur le développement de produits mais aussi sur le développement informatique
        afin de comprendre les mystères qui se cachent derrière les objets technologiques, leurs composants,
        les langages de programmation, les algorithmes, les circuits et les processus de fabrication</p>

        <div className="badges-container">
            <Badge
                icon={<AirplanemodeActiveIcon />}
                qty="10"
                description="Pays visités">

            </Badge>

            <Badge
                icon={<EmojiObjectsIcon />}
                qty="+10"
                description="Logiciels et langages gerés" />

            <Badge
                icon={<ChatBubbleOutlineIcon />}
                qty="3"
                description="Langues parlées" />
        </div>
    </Wrapper>

export default Description