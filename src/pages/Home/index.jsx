import DefaultLayout from '../../components/DefaultLayout';
import { ServerTable } from '../../components/ServerTable';
import { ResourcesSummary } from '../../components/ResourcesSummary';

function Home() {
  return (
    <DefaultLayout>
      <ResourcesSummary />
      <ServerTable />
    </DefaultLayout>
  );
}

export default Home;