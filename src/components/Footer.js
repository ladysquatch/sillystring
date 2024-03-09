import "./footer.scss";

export function Footer() {
  const date = new Date().getFullYear()
  return (
    <>
      <footer>
        <a className="contact" href="mailto:nightskyacres@gmail.com">&copy; {date} Night Sky Acres Consulting</a>
        
      </footer>
    </>
  );
}
