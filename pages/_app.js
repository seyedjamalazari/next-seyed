import { Layout } from "antd";
import "antd/dist/antd.css";
import { Content, Footer, Header } from "antd/lib/layout/layout";
// import CardValue from "../components/CardValue";
// import FooterIcons from "../components/FooterIcons";
import SideMenu from "../components/SideMenu";
import Navigation from "../components/Navigation";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header>
        <Navigation />
        {/* <SideMenu /> */}
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>{/* <FooterIcons /> */}</Footer>
    </Layout>
  );
}

export default MyApp;
