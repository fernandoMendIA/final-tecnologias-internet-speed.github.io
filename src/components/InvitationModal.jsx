import { motion, AnimatePresence } from "framer-motion";

import { CloseIcon } from "../assets/icons/CloseIcon";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <img src="/objectdetection.gif" width="85%"alt="Deteccion de objetos con AI" srcset="" />
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
