import Layout from "../../components/Layout";
import mainBackground from "../../images/dude2.jpg";
import aboutPicture from "../../images/laura.jpg";
import dude from "../../images/dude.jpg";
import sand from "../../images/sand.jpg";
import sand2 from "../../images/sand2.jpg";
import lau from "../../images/laura.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [selectedId, setSelectedId] = useState<Number | null>(null);

  interface ModalIF {
    image: string;
    id: number;
  }
  const [modalImage, setModalImage] = useState<Array<ModalIF>>([]);

  const images = [
    { image: dude, id: 1 },
    { image: sand, id: 2 },
    { image: sand2, id: 3 },
    { image: lau, id: 4 },
  ];

  useEffect(() => {
    images.filter(
      (el) =>
        el.id === selectedId &&
        setModalImage((modalImage) => [...modalImage, el])
    );
  }, [selectedId]);

  console.log(modalImage);

  const clearModalImage = () => {
    setModalImage([]);
    setSelectedId(null);
  };

  return (
    <Layout pageTitle="Bang Studios - Tattoo Art">
      <div className="max-w-[1400px] m-auto">
        {/* Main section */}
        <main className="relative w-full">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="absolute text-white font-semibold text-[10vw] p-5 top-16 left-10"
          >
            Your tattoo, our passion to make it real.
          </motion.h2>
          <img
            src={mainBackground}
            alt="main section background"
            className="object-cover"
          ></img>
          <div className="absolute bottom-0 w-full h-[15rem] bg-gradient-to-t from-black"></div>
        </main>

        {/* About section */}
        <div className="flex w-full md:w-9/12 m-auto">
          <section className="flex my-12">
            <article className="flex flex-col mx-10">
              <h3 className="font-bold text-[3rem]">About me</h3>
              <hr className="border-black" />
              <p className="font-medium pt-5 text-lg">
                My name is Laura Castellanos. I am a professional tattoo artist
                with more than 2 years of experience. I started this project
                with my sights set on making my art endure in those memories,
                wishes, dreams and most valuable moments tattooed on the skin of
                my clients.
              </p>
            </article>
            <motion.img
              initial={{ x: 200 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              src={aboutPicture}
              alt="profile image"
              className="w-4/12 rounded-md shadow-[50px_30px_20px_-15px_#ffee004b] object-contain"
            />
          </section>
        </div>

        {/* Gallery art section  */}
        <div className="w-full bg-black py-5 overflow-y-hidden">
          <div className="flex w-9/12 m-auto">
            <div className="text-white">
              <div>
                <h3 className="font-bold text-[3rem]">Gallery Art</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  viewport={{ once: true }}
                  className="mt-6 grid grid-cols-4 gap-5"
                >
                  {images.map((image) => (
                    <div key={image.id}>
                      <motion.div
                        layoutId={`${image.id}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        onClick={() => setSelectedId(image.id)}
                        className="h-full"
                      >
                        <img
                          src={image.image}
                          alt="dude"
                          className="h-full rounded-md cursor-pointer object-cover"
                        />
                      </motion.div>

                      <AnimatePresence>
                        {selectedId &&
                          modalImage.map((el) => (
                            <div key={image.id}>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: 0.4,
                                }}
                                exit={{ opacity: 0 }}
                                className="fixed w-full h-full top-0 left-0 bg-black z-20"
                              ></motion.div>
                              <div
                                className="fixed top-0 left-0 flex w-full h-full justify-center items-center z-40"
                                onClick={() => clearModalImage()}
                              >
                                <motion.img
                                  layoutId={`${selectedId}`}
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                  }}
                                  exit={{ opacity: 0 }}
                                  src={el.image}
                                  alt="gallery photo"
                                  className="max-h-[40rem] max-w-[40rem] rounded-md object-cover"
                                />
                              </div>
                            </div>
                          ))}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div></div>
      </div>
    </Layout>
  );
};

export default Index;
