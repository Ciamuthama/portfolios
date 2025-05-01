import { NextPage } from 'next'
import Personal from '../../../components/personal'
import NavPresonal from '../NavPresonal'


const Page: NextPage = ({}) => {
  return <div className='bg-[#dfe8ea] h-full'>
    <Personal/>
    <NavPresonal/>
  </div>
}

export default Page