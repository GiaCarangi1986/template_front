import Layout from "../components/PageConstructor/Layout"
import {
  MainHeader
} from '../components/PageConstructor/Header/HeaderTemplates'

const Main = () => {
    return (
        <Layout headerTemplate={MainHeader}>
            <div>Main</div>
        </Layout>
    )
}

export default Main