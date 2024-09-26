import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiStar, FiClock, FiHeadphones, FiTag, FiUsers } from 'react-icons/fi';

const Featured = () => {
  const companies = [
    {
      id: 1,
      name: "Balenciaga",
      img: "/Brands/Balenciaga.png",
      nameImg: "/appName.svg",
    },
    {
      id: 2,
      name: "Versace",
      img: "/Brands/Versace.png",
      nameImg: "/cloudName.svg",
    },
    {
      id: 3,
      name: "NIKE",
      img: "/Brands/Nike.png",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "Armani.",
      img: "/Brands/Armani.png",
      nameImg: "/dockerName.svg",
    },
    {
      id: 5,
      name: "Dior",
      img: "/Brands/Dior.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 6,
      name: "Rolex",
      img: "/Brands/Rolex.png",
      nameImg: "/dockerName.svg",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex justify-center w-full pb-8 bg-white md:py-8">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company, index) => (
          <React.Fragment key={company.id}>
            <motion.div
              className="flex gap-2 md:max-w-60 max-w-14"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{
                duration: 1,
                delay: index * 0.2, // Stagger the animation for each company
              }}
            >
              <img
                src={company.img}
                alt={company.name}
                className="w-12 md:w-28"
              />
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Featured;
