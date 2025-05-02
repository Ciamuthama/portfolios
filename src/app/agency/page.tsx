import { NextPage } from 'next'
import Agency from '../../../components/agency/index'

import NavPresonal from '../NavPresonal'



const Page: NextPage = ({}) => {
  return <div className='bg-[#004030] h-full'>
    <Agency/>
    <NavPresonal/>
  </div>
}

export default Page