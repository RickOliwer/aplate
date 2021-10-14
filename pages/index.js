import Head from 'next/head'
import Menu from '../components/Menu';
import Date from '../components/Date';
import { minifyRecords, table } from './api/utils/Airtable'
import { dateTable } from './api/utils/DateAirtable'
import { socialLinks } from './api/utils/SocialAirtable';
import Social from '../components/Social';
import Image from 'next/image'
import logo from '../components/images/logo/logo.png'

export default function Home({ initialMenu, initialDate, initialSocial }) {
  console.log(initialSocial);
  const sort = (a, b) => {
    const aInt = parseInt(a.fields.sort_id);
    const bInt = parseInt(b.fields.sort_id);
    
    if(aInt > bInt){
      return 1
    } else if(bInt > aInt){
      return -1
    }
  }
  const sortedinitialMenu = initialMenu.sort(sort);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>APLATE nordic</title>
        <link rel="icon" href={logo} />
      </Head>
      <main className="md:grid md:grid-cols-9 p-10">
        <div className=" md:col-span-2">
          <div className="relative w-44 h-40 m-auto">
            <Image  layout="responsive" objectFit="cover" src={logo} priority/>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="text-center text-brand-dark m-2">
            <p className="text-sm">Sidan är under uppbyggnad</p>
            <p className="text-2xl">Vi har även catering!</p>
            <h3 className="text-base">För mer information och bokning, vänligen kontakta oss.</h3>
          </div>
          <div className="bg-brand-dark text-brand-light p-7">
            <h1 className="text-center text-3xl">Veckans lunchmeny</h1>
            <Date date={initialDate} />
            {sortedinitialMenu.map((menu) => (
              <Menu key={menu.id} menu={menu} />
            ))}
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-14 py-8">
            <p className="md:text-left text-center text-lg">0763 - 22 72 88</p>
            <p className="text-center text-lg">Per Albin Hanssons Väg 41, 205 12 Malmö</p>
            <p className="md:text-right text-center text-lg">info@aplate.se</p>

          </div>
        </div>
        <div className="md:col-span-2 md:relative">
          <Social social={initialSocial} />
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  try{

    const menu = await table.select({}).firstPage();
    const date = await dateTable.select({}).firstPage();
    const social = await socialLinks.select({ view: "Grid view", }).firstPage();
    
    return {
      props: {
        initialMenu: minifyRecords(menu),
        initialDate: minifyRecords(date),
        initialSocial: minifyRecords(social),
      }
    }
  }catch(err){
    console.error(err);
    return {
      props: {
        err: "Something went wrong"
      }
    }
  }
}