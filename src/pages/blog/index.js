import * as React from 'react'
import Layout from "../../components/layout"

const Blog = () => {
    return (
        <Layout pageTitle="Blog">
            <div style={{
                background: "repeating-linear-gradient( -55deg, #393e46 , #393e46  20px, #ffff9a  20px, #ffff9a  40px)",
                width: "80vw",
                height: "30vh",
                margin: "20vh auto",
                borderRadius: 5,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1 style={{
                    background: "#393e46",
                    color: "#eee",
                    border: "solid 10px #393e46",
                    borderRadius: "10px",

                }}>Page en construction</h1>
            </div>
        </Layout>
    )
}

export default Blog