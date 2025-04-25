import React from 'react'
import PersonalQuote from '../components/PersonalQuote'
import Question from '../components/Question'
import HowItWork from '../components/HowItWork'
import DevisHeader from '../components/DevisHeader'

const Devis = () => {
  return (
	<main className="pt-20">
    <DevisHeader />
    <HowItWork />
    <PersonalQuote />
    <Question />
  </main>
  )
}

export default Devis