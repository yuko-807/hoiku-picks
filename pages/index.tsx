import { Layout } from '../components/layout';
import Main from '../components/mainContent/main'
import Task from '../components/taskContent/task'
import Point from '../components/pointContent/point'


export default function Home(): JSX.Element {
  return (
    <>
      <Layout/>
      <Main/>
      <Task/>
      <Point/>
    </>
  );
}
