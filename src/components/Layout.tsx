import Header from "./ui/Header";

interface Props {
  pageTitle: string;
  children: JSX.Element;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div className="overflow-y-auto">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
