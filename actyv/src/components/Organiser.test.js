import { internal_resolveProps } from '@mui/utils';
import { render, screen, waitFor } from '@testing-library/react';
import Organiser from './Organiser';

jest.mock('axios')

const fakeOrganisers = [
   { avatar: {title: 'Lao', description: '', file: {}},
description: "TRALALAst avec joie que je partage cette culture qui me fait vibrer chaec plus de trente ans d'expériences dans le domaine socio-culturel.\n\n__Activités déjà réalisées avec Tralala ASBL__\n\nAtelier de percussion africaine\nAtelier d’éveil musical et corporel\nCours de danse, workshops et musique d’Afrique de l’Ouest (GC Ten Noey, C-Ramic, Ulb, De Markten, Cardijnschool, hôtel de ville de Saint Gilles, hôtel de ville de 1000 Bruxelles).\nAnimations musicale (fanfare) dans les brocantes de quartier.\nConcerts et jam session (Kumba, Platform 241, Toukoul, Centre Communautaire Maritime, Maison des Cultures de Molenbeek, VK, Café Flow, De Central, Place de la Liberté , Théâtre National , Bonnefoi , Matongué en Couleurs , Horloge du Sud , Tour et Taxis ,  Square des Libérateurs, de Bruxelles et d’Ailleurs , Azeb Café , Sazz n Jazz ,  Fête de la Lumière à Saint Josse , festival Anti Tapas, Bonfire Inna de Yard…)\nOrganisation de la tournée rencontre des fanfakids en Afrique de l’Ouest.\n",
email: "lao@lao.com",
name: " Kossigan Batoma",
photoDeProfil: '',
fields: {title: 'Lao', description: '', file: {}},
metadata: {tags: Array(0)},
sys: {space: {}, id: 'NkwnQtcMsHeyWIn1oPXkH', type: 'Asset', createdAt: '2022-03-10T10:58:04.715Z', updatedAt: '2022-03-10T10:58:04.715Z'},

prnom: "Lao"
}
]

describe('<Organiser/> component', () =>{

    describe('<Organiser/> as a whole', ()=>{
        it("renders component in the DOM", () =>{
            render(<Organiser/>);
            const nodeElement =  screen.getByTestId(/organiser/i);
            expect(nodeElement).toBeInTheDocument();
        })
    })

    describe('<Organiser/> component state', ()=>{
        it("show a list of organisers card", async () =>{
       axios.get.mockResolvedValue({data: fakeOrganisers});

            render(<Organiser/>);
            //const nodeElement = screen.getByTestId(/organiser/i);

            const userList = await waitFor(() => screen.getByTestId('orgniser-card'))
            //expect(nodeElement.organisers).toBe([])
            expect(organiserList).toHaveLength(1);
        })
    })

})

