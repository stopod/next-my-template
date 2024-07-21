type FooterProps = {
  name: string;
  className?: string;
};

const Footer = (props: FooterProps) => {
  return (
    <footer
      className={`${props.className} py-2 px-4 border-t flex justify-center items-center bg-white`}
    >
      <small>{props.name}</small>
    </footer>
  );
};

export default Footer;
