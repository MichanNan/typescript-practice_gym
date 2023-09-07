import HText from "@/shared/HText";
import Benefit from "./Benefit";
import { SelectedPage,BenefitType } from "@/shared/types"

import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid';

import { motion } from 'framer-motion'

const benefits:Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State od the Art Facilities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicingelit",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Divers Classes ",
        description:"Lorem ipsum dolor sit amet consectetur adipisicingelit",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:"Lorem ipsum dolor sit amet consectetur adipisicingelit",
    }
]
type Props = {
    setSelectedPage :(value: SelectedPage)=>void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
      <section id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
      >
          {/* header */}
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
              <div className="md:my-5 md:w-3/5">
                  <HText>MORE THAN JUST GYM</HText>
                  <p className="my-5 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Debitis saepe nisi tempora consectetur,
                      laboriosam quaerat ab consequuntur tenetur doloremque
                      aspernatur amet, iusto, illum tempore! Nam officia maiores
                      dolorum cum illum!
                  </p>
              </div>

              {/* benefits */}
              <div className="md:flex items-center justify-between gap-8 mt-5">
                  {benefits.map((benefit: BenefitType) =>
                      <Benefit
                          key={benefit.title}
                          icon={benefit.icon}
                          title={benefit.title}
                          description={benefit.description}
                          setSelectedPage = {setSelectedPage}
                      />)
                  }
              </div>
        </motion.div> 
    </section>
  )
}

export default Benefits