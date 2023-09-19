import Layout from '../components/PageConstructor/Layout'
import {
  MainHeader
} from '../components/PageConstructor/Header/Header/HeaderTemplates'
import MainContent from '../components/PageContent/Main'

const Main = () => {
  return (
    <Layout headerTemplate={MainHeader}>
      <MainContent />
    </Layout>
  )
}

export default Main