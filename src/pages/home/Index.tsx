import Layout from "../../components/Layout";
import mainBackground from "../../images/dude2.jpg";
import aboutPicture from "../../images/laura.jpg";
import dude from "../../images/dude.jpg";
import sand from "../../images/sand.jpg";
import sand2 from "../../images/sand2.jpg";
import lau from "../../images/laura.jpg";

const Index = () => {
  return (
    <Layout pageTitle="Bang Studios - Tattoo Art">
      <div className="max-w-[1400px] m-auto">
        {/* Main section */}
        <main className="relative w-full">
          <h2 className="absolute z-10 text-white font-semibold text-[10vw] p-5 top-16 left-10">
            Your tattoo, our passion to make it real.
          </h2>
          <img
            src={mainBackground}
            alt="main section background"
            className="object-cover"
          ></img>
          <div className="absolute bottom-0 w-full h-[15rem] bg-gradient-to-t from-black"></div>
        </main>

        {/* About section */}
        <div className="flex w-9/12 m-auto">
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
            <img
              src={aboutPicture}
              alt="profile image"
              className="w-4/12 object-contain"
            />
          </section>
        </div>

        {/* Gallery art section  */}
        <div className="w-full bg-black py-5">
          <div className="flex w-9/12 m-auto">
            <div className="text-white">
              <div>
                <h3 className="font-bold text-[3rem]">Gallery Art</h3>
                <div className="mt-6 grid grid-cols-4 gap-8">
                  <img
                    src={dude}
                    alt="dude"
                    className="h-full object-cover hover:scale-110 transition ease-in duration-100"
                  />
                  <img
                    src={sand}
                    alt="dude"
                    className="h-full object-cover hover:scale-110 transition ease-in duration-100"
                  />
                  <img
                    src={sand2}
                    alt="dude"
                    className="h-full object-cover hover:scale-110 transition ease-in duration-100"
                  />
                  <img
                    src={lau}
                    alt="dude"
                    className="h-full object-cover hover:scale-110 transition ease-in duration-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
