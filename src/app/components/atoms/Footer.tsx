type FooterProps = {
  name: string;
};

const Footer = (props: FooterProps) => {
  return (
    <footer className="py-2 px-4 border-t flex justify-center items-center">
      <small>{props.name}</small>
    </footer>
  );
};

export default Footer;
