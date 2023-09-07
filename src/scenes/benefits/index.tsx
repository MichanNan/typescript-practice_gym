import HText from "@/shared/HText";
import Benefit from "./Benefit";
import { SelectedPage,BenefitType } from "@/shared/types"

import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid';

import { motion } from 'framer-motion'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from "@/shared/actionButton";

const benefits:Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
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
const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren:0.2}
    }
}

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
              <motion.div
                  className="md:my-5 md:w-3/5"
                  initial="hidden"
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible:{opacity:1,x:0}
                  }}
              >
                  <HText>MORE THAN JUST GYM</HText>
                  <p className="my-5 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Debitis saepe nisi tempora consectetur,
                      laboriosam quaerat ab consequuntur tenetur doloremque
                      aspernatur amet, iusto, illum tempore! Nam officia maiores
                      dolorum cum illum!
                  </p>
              </motion.div>

              {/* benefits */}
              <motion.div
                  className="md:flex items-center justify-between gap-8 mt-5"
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  variants = {container}
              >
                  {benefits.map((benefit: BenefitType) =>
                      <Benefit
                          key={benefit.title}
                          icon={benefit.icon}
                          title={benefit.title}
                          description={benefit.description}
                          setSelectedPage = {setSelectedPage}
                      />)
                  }
              </motion.div>

              {/* graphic and descrition */}
              <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                  {/*graphic */}
                  <img
                      src={BenefitsPageGraphic}
                      alt="benefits-page-graphic"
                      className="mx-auto"
                  />
                  {/* description */}
                  <div>
                      {/* title */}
                      <motion.div
                          className="relative"
                          initial="hidden"
                          whileInView='visible'
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5 }}
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible:{opacity:1,x:0}
                        }}
                      >
                          <div className="before:absolute before:-top-20 before:-left-20 before:-[1] before:content-abstractwaves">
                              <div>
                                  <HText>
                                      Millions of Happt Members Getting {''}
                                      <span className="text-primary-500">Fit</span>
                                  </HText>
                              </div>
                          </div>
                        </motion.div>
                      {/* description */}
                      <motion.div
                      initial="hidden"
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{delay:0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{opacity:1,x:0}
                    }}
                      >
                          <p className="my-5">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil saepe placeat beatae rerum qui. In labore accusantium nemo veniam ipsa excepturi officia tempore ad nisi! Vel tenetur dolorem maxime!
                          </p>
                          <p className="my-5">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nihil saepe placeat beatae rerum qui. In labore accusantium nemo veniam ipsa excepturi officia tempore ad nisi! Vel tenetur dolorem maxime!
                          </p>
                      </motion.div>

                      {/*  button */}
                      <div className="relative mt-16">
                          <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                              <ActionButton setSelectedPage={setSelectedPage}>
                                  Join Now
                              </ActionButton>
                          </div>
                      </div>
                  </div>
              </div>
        </motion.div> 
    </section>
  )
}

export default Benefits