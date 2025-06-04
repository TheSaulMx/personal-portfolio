export default function SectionContainer({ children, ...props }) {
  return (
    <section
      className="section px-4 pt-35 scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-2xl"
      {...props}
    >
      {children}
    </section>
  );
}
