import { NextPage } from 'next'
import Agency from '../../../components/agency/index'
import NavAgency from '../NavAgency'



const Page: NextPage = ({}) => {
  return <div className='bg-[#004030]' id='/agency'>
    <Agency/>
    <NavAgency/>
  </div>
}

export default Page