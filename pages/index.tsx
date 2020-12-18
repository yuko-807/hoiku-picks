import { Layout } from '../components/layout';
import Main from '../components/mainContent/main'
import Task from '../components/taskContent/task'
import Point from '../components/pointContent/point'
import How from '../components/howToContent/how'
import Fee from '../components/feeContent/fee'
import Job from '../components/jobContent/job'

export default function Home(): JSX.Element {
  return (
    <>
      <Layout/>
      <Main/>
      <Task/>
      <Point/>
      <How/>
      <Fee/>
      <Job/>
    </>
  );
}
