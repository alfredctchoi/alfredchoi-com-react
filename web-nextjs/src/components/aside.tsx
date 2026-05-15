interface AsideProps {
  title: string;
  children: React.ReactNode;
}

export default function Aside({ title, children }: AsideProps) {
  return (
    <aside className="relative border border-black rounded-[5px] mb-8 py-4 px-4">
      <h3 className="absolute -top-[18px] bg-white px-2.5 inline-block">
        {title}
      </h3>
      {children}
    </aside>
  );
}
