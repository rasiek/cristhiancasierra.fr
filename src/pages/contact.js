import * as React from 'react'
import Layout from "../components/layout"

const Contact = () => {
    return (
        <Layout pageTitle="Contact">
            <form>
                <label htmlFor="name">
                    Name:{" "}
                    <input type="text" name="name" id="name"></input>
                </label>

            </form>
        </Layout>
    )
}

export default Contact