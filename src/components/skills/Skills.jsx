import React from 'react'
import SkillsCard from './SkillsCard'
import Title from '../layouts/Title'
import html from '../../assets/photos/html.png'
import css from '../../assets/photos/css.png'
import javascript from '../../assets/photos/javascript.png'
import react from '../../assets/photos/react.png'
import tailwind from '../../assets/photos/tailwind.png'
import typescript from '../../assets/photos/typescript.svg'
import scss from '../../assets/photos/sass.svg'
import redux from '../../assets/photos/redux.svg'
import git from '../../assets/photos/git.svg'
import dart from '../../assets/photos/Dart.svg'
import firebase from '../../assets/photos/Firebase.svg'
import mongodb from '../../assets/photos/MongoDB.svg'
import php from '../../assets/photos/PHP.svg'
import postgresql from '../../assets/photos/PostgresSQL.svg'
import python from '../../assets/photos/Python.svg'
import tailwindcss from '../../assets/photos/Tailwind CSS.svg'
import webflow from '../../assets/photos/Webflow.svg'
import blockchain from '../../assets/photos/ethereum-eth-logo.png'

function Skills() {
  return (
    <section
      id='skills'
      className='w-full py-10 border-b-[1px] border-b-black'>
      <div className="flex justify-center items-center text-center">
        <Title
          des={
            <span>
              My <span className='text-designColor'>Technical</span> Skills
            </span>}
        />
      </div>
      <div className='w-[90%] m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-14'>
        <SkillsCard
          name={'HTML'}
          src={html}
        />
        <SkillsCard
          name={'CSS'}
          src={css}
        />
        <SkillsCard
          name={'JAVASCRIPT'}
          src={javascript}
        />
        <SkillsCard
          name={'REACT'}
          src={react}
        />
        <SkillsCard
          name={'TAILWIND'}
          src={tailwind}
        />
        <SkillsCard
          name={'TYPESCRIPT'}
          src={typescript}
        />
        <SkillsCard
          name={'SCSS'}
          src={scss}
        />
        <SkillsCard
          name={'REDUX'}
          src={redux}
        />
        <SkillsCard
          name={'GIT'}
          src={git}
        />
        <SkillsCard
          name={'DART'}
          src={dart}
        />
        <SkillsCard
          name={'FIREBASE'}
          src={firebase}
        />
        <SkillsCard
          name={'MONGODB'}
          src={mongodb}
        />
        <SkillsCard
          name={'PHP'}
          src={php}
        />
        <SkillsCard
          name={'POSTGRE SQL'}
          src={postgresql}
        />
        <SkillsCard
          name={'PYTHON'}
          src={python}
        />
        <SkillsCard
          name={'TAILWIND CSS'}
          src={tailwindcss}
        />
        <SkillsCard
          name={'WEB FLOW'}
          src={webflow}
        />
        <SkillsCard
          name={'BLOCKCHAIN'}
          src={blockchain}
        />
      </div>
    </section>
  )
}

export default Skills;