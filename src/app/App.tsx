import { FunctionComponent } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import { AUTH_TYPE, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import appSyncConfig from '../aws-exports';
import Card from '../features/Card';
import CardList from '../features/CardList';
import CreateCard from '../features/CreateCard';

Amplify.configure(appSyncConfig);

const url = appSyncConfig.aws_appsync_graphqlEndpoint;
const region = appSyncConfig.aws_appsync_region;
const auth = {
  type: appSyncConfig.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
};

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

async function signOut() {
  await Auth.signOut();
  window.location.reload();
}

const App: FunctionComponent = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className=" gap-4 p-4 items-center  border-b-2 border-gray-800 flex justify-between mb-8">
        <div className="col-start-1 col-end-3 text-4xl font-semibold text-gray-800">
          <Link to="/">BLOK</Link>
        </div>
        <div className="col-start-12 col-end-13 text-2xl font-light text-gray-800 cursor-pointer text-right">
          <Link className="mr-8" to="/newcard">
            New
          </Link>
          <span onClick={signOut}>Signout</span>
        </div>
      </div>
      <Switch>
        <Route path="/card/:id" component={Card} />
        <Route path="/newcard" component={CreateCard} />
        <Route path="/" component={CardList} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default withAuthenticator(App);
