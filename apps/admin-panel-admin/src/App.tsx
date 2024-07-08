import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PhotoList } from "./photo/PhotoList";
import { PhotoCreate } from "./photo/PhotoCreate";
import { PhotoEdit } from "./photo/PhotoEdit";
import { PhotoShow } from "./photo/PhotoShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { AudioList } from "./audio/AudioList";
import { AudioCreate } from "./audio/AudioCreate";
import { AudioEdit } from "./audio/AudioEdit";
import { AudioShow } from "./audio/AudioShow";
import { FaqList } from "./faq/FaqList";
import { FaqCreate } from "./faq/FaqCreate";
import { FaqEdit } from "./faq/FaqEdit";
import { FaqShow } from "./faq/FaqShow";
import { HelpList } from "./help/HelpList";
import { HelpCreate } from "./help/HelpCreate";
import { HelpEdit } from "./help/HelpEdit";
import { HelpShow } from "./help/HelpShow";
import { StatisticsList } from "./statistics/StatisticsList";
import { StatisticsCreate } from "./statistics/StatisticsCreate";
import { StatisticsEdit } from "./statistics/StatisticsEdit";
import { StatisticsShow } from "./statistics/StatisticsShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { PdfList } from "./pdf/PdfList";
import { PdfCreate } from "./pdf/PdfCreate";
import { PdfEdit } from "./pdf/PdfEdit";
import { PdfShow } from "./pdf/PdfShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AdminPanel"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Photo"
          list={PhotoList}
          edit={PhotoEdit}
          create={PhotoCreate}
          show={PhotoShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="Audio"
          list={AudioList}
          edit={AudioEdit}
          create={AudioCreate}
          show={AudioShow}
        />
        <Resource
          name="Faq"
          list={FaqList}
          edit={FaqEdit}
          create={FaqCreate}
          show={FaqShow}
        />
        <Resource
          name="Help"
          list={HelpList}
          edit={HelpEdit}
          create={HelpCreate}
          show={HelpShow}
        />
        <Resource
          name="Statistics"
          list={StatisticsList}
          edit={StatisticsEdit}
          create={StatisticsCreate}
          show={StatisticsShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
        <Resource
          name="Pdf"
          list={PdfList}
          edit={PdfEdit}
          create={PdfCreate}
          show={PdfShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
