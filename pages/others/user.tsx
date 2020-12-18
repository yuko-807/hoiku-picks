import { Layout } from '../../components/layout';
import { Main } from '../../components/userMainContent/main'
import { Service } from '../../components/userServiceContent/service'

export default function User():JSX.Element{
  return(
    <>
      <Layout/>
      <Main/>
      <Service/>
    </>
  );
};