import * as React from 'react'
import Competences from '../components/Competences'
import Description from '../components/Description'
import Layout from "../components/layout"
import Timeline from '../components/Timeline'
import { experiences, formation } from '../data/data'

const APropos = () => {
    return (
        <Layout pageTitle="À propos">
            <Description />
            <Competences />
            <Timeline
                title="Expériences"
                data={experiences} />
            <Timeline
                title="Formations"
                data={formation} />

        </Layout>
    )
}

export default APropos