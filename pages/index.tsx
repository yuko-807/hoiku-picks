import { Layout } from '../components/layout';
import { Main } from '../components/userMainContent/main'
import { Service } from '../components/userServiceContent/service'
import { Point } from '../components/userPointContent/point'
import { Work } from '../components/userWorkContent/work'
import { How } from '../components/userHowContent/how'
import { Banner } from '../components/userBannerContent/banner'
import Footer from '../components/footerContent/footer'
import {Faq} from '../components/faqContent/faq'
import react, {FC,useState} from 'react'
import data from '../components/faqContent/data'
import styled from 'styled-components'

const User: FC = () =>{
  const [faqs,setFaqs]=useState(data)
  return(
<>
      <Layout/>
      <Main/>
      <Service/>
      <Point/>
      <Work/>
      <How/>
      <Banner/>
      <Wrapper>
        <Title>
          よくある質問
        </Title>
      </Wrapper>
      {faqs.map((faq)=>{
        return <Faq key={faq.id} {...faq} />
      })}
      <Footer/>
    </>
  )
}
export default User;

const Title = styled.h1`
  font-size: 32px;
  
  text-align: center;
  color:white;
`;
const Wrapper = styled.section`
text-align:center;
  padding: 2.5em;
  margin:15px 0 100px 0;
  background: #F2A93B;
`;
