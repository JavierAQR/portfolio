import ShinyText from "./TextAnimations/ShinyText/ShinyText";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div data-aos="fade-down">
      <ShinyText text={title} disabled={false} speed={3} className="w-full" />
    </div>
  );
};

export default SectionTitle;
