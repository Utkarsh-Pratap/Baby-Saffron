
import leftImg from "@/assets/images/usage-benefits/usage-leftbg.png";
import rightImg from "@/assets/images/usage-benefits/usage-rightbg.png";
import centerImg from '@/assets/images/usage-benefits/flower.png';
import imgHeading from "@/assets/images/usage-benefits/usage-gene.svg"
import mainImg from "@/assets/images/usage-benefits/main-saffron.png"
import mainLine from "@/assets/images/usage-benefits/main-line.png"
import digestive from "@/assets/images/usage-benefits/digestive-system.svg"
import arthritis from "@/assets/images/usage-benefits/arthritis.svg"
import vision from "@/assets/images/usage-benefits/vision.svg"
import menstruation from "@/assets/images/usage-benefits/mensturation.svg"
import cancer from "@/assets/images/usage-benefits/cancer.svg"
import sleep from "@/assets/images/usage-benefits/sleep.svg"
import Image from 'next/image';
import Extracts from "../Extracts";
import Community from "../Community";
import Exclusives from "../Exclusives";

const Usage = () => {

  const imgarr = [leftImg, centerImg, rightImg]

  const benefits = [
    {
      img: digestive,
      heading: "Aids Your Digestive System",
      para: "Saffron is said to relieve gastric and acidity issues thereby improving your digestive health."
    },
    {
      img: arthritis,
      heading: "Relief From Arthritis Pain",
      para: "Studies suggest that saffron acts as an anti-inflammatory agent and helps relieve joint pain."
    },
    {
      img: vision,
      heading: "Improves Vision",
      para: "Many researchers say that saffron helps regulate the key vision cells and further protects them from damage."
    }]

    const benefits2 =[{
      img: sleep,
      heading: "A Goodnight's Sleep",
      para: "Saffron intake has been found to improve sleep cycles according to scientists."
    },
    {
      img: cancer,
      heading: "Increased Recovery Speed In Some Cancer Cases",
      para: "Saffron contains crocin and crocetin. Crocin is said to have cancer-fighting properties while Crocetin may inhibit the growth of cancer cells."
    },
    {
      img: menstruation,
      heading: "Regulates Menstruation",
      para: "According to health experts, saffron helps regulate normal flow of periods and is also said to relieve menstrual pain."
    }
    
  ]

  return (
    <>


    <div className="flex justify-center flex-col items-center mb-5">
     <div className='flex justify-between w-full'>
       
              <div className="flex justify-between items-center w-full">
                <Image className="w-24 h-24 flex md:w-auto md:h-auto" src={leftImg} alt='Flowere-Image'/>
                <Image className="w-auto md:w-auto" src={centerImg} alt='Flowere-Image'/>
                <Image className="w-24 h-24 flex md:w-auto md:h-auto" src={rightImg} alt='Flowere-Image'/>
              </div>
            
      </div>

        <div className='flex justify-center  w-96 items-center  -mt-24'>
          <Image className=" w-56" src={imgHeading} alt='Image-Heading'/>
        </div>

        


      <div className='flex justify-center text-center items-center text-base my-10'><p>A promise of good health straight out<br />
        of the richness of Ayurveda!</p>
      </div>

      <div className='flex justify-center items-center my-5 '>
        <Image className=" w-80 object-contain" src={mainImg} alt='main-image'/>
      </div>

      <div className='flex justify-center items-center text-2xl text-center font-medium font-serif w-72'>
        <h1>Holding The Goodness Of Ancient Science</h1>
      </div>

      <div className='flex justify-center items-center my-5'>
      <Image className="w-80" src={mainLine} alt='main-Line'  />
      </div>

      <div className='flex items-center justify-center  my-5'>
        <p className="w-60 text-center font-normal text-sm">Listen to your body closely and help it transform into
          a healthy balance with Baby Brand Saffron.</p>
      </div>

      <div className='flex justiy-center flex-col m-16 gap-8'>

      <div className='flex items-center justify-center flex-col md:flex md:justify-center md:flex-row'>
        {
          benefits.map((item,index) =>{
            return(
              <div className='flex items-center flex-col w-80 h-72 m-2 ' key={index}>
                <div className='benifit-img'>
                <Image className="w-32 my-4 " src={item.img} alt='main-image'/>
                </div>
                <h1 className="flex items-center text-xl font-serif font-medium text-yellow-700 w-40 mb-8 leading-tight text-center ">{item.heading}</h1>
                <p className="flex items-center text-center w-60 text-sm">{item.para}</p>
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-center items-center flex-col md:flex md:justify-center md:flex-row'>
        {
          benefits2.map((item,index) =>{
            return(
              <div className="flex items-center flex-col w-80 h-72 m-2" key={index}>
                <div className='benifit-img'>
                <Image className="w-32 my-4" src={item.img} alt='main-image'/>
                </div>
                <h1 className="flex items-center text-xl font-serif font-medium text-yellow-700 w-40 mb-8 leading-tight text-center">{item.heading}</h1>
                <p className="flex items-center text-center w-60 text-sm">{item.para}</p>
              </div>
            )
          })
        }
      </div>
      </div>

      </div>
      <Extracts/>
      <Community/>
      <Exclusives/>

    </>
  )
}

export default Usage;