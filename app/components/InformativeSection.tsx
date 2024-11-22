import { ActionButtons } from "./AgencyOverView";
import { MainLayout, SecondaryLayout } from "./controlled/Layouts";

const InformativeSection: React.FC = () => {
  return (
    <div className="py-5 flex flex-wrap gap-x-2 lg:ml-80">
      <MainLayout
        title="Geek and Heat"
        subtitle="Work Hard, Play Hard is Hubfolio’s philosophy"
        style={{
          backgroundImage:
            "url(https://uithemez.com/i/hubfolio_HTML/creative_agency/assets/imgs/about/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        positionClasses="absolute bottom-0 left-0 w-full h-screen bg-cover bg-center overflow-hidden z-0"
      >
        <p className="text-white text-2xl">
          25+ <br /> multidisciplinary designers <br />
          and managers
        </p>
      </MainLayout>

      <div className="flex flex-col gap-y-2 mx-3 lg:mx-0 lg:mt-0 mt-2 lg:w-[31%]">
        <SecondaryLayout description="Based in Boston, MA. We're an agency focused on crafting experience design & development digital products.">
          <ActionButtons />
        </SecondaryLayout>
        <div className="flex flex-col lg:flex-row rounded-xl lg:h-[40%] h-[300px] shadow-lg bg-customRed px-3 py-2">
          hahahah
        </div>
      </div>
    </div>
  );
};
export default InformativeSection;
