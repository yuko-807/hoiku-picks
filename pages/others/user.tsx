import { Layout } from '../../components/layout';
import { Main } from '../../components/userMainContent/main'
import { Service } from '../../components/userServiceContent/service'
import { Point } from '../../components/userPointContent/point'
import { Work } from '../../components/userWorkContent/work'
import { How } from '../../components/userHowContent/how'
import { Banner } from '../../components/userBannerContent/banner'

export default function User():JSX.Element{
  return(
    <>
      <Layout/>
      <Main/>
      <Service/>
      <Point/>
      <Work/>
      <How/>
      <Banner/>
    </>
  );
};