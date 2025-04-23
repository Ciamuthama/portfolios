import { NextPage } from 'next'
import Personal from '../../../components/personal'
import NavPresonal from '../NavPresonal'


const Page: NextPage = ({}) => {
  return <div className='bg-[#e1c6b5] h-full'>
    <Personal/>
    <NavPresonal/>
  </div>
}

export default Page