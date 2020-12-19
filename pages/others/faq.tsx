import { Layout } from '../../components/layout';
import { Faq } from '../../components/faqContent/faq'
import React, { useState } from "react";
import data from '../../components/faqContent/data'

export default function User():JSX.Element{
  const [questions, setQuestions] = useState(data);
  return(
    <>
      <Layout/>
      {questions.map((question)=>{
        return <Faq key={question.id} {...question}/>
      })}
    </>
  );
};