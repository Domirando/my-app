import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";
function Header() {
  return (
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <h1 className="text-center text-3xl font-bold">
          Hello world from Enthusiast Front-End Developer{" "}
          <span className="underline px-1 bg-black text-white">Domirando!</span>
        </h1>
      </Animator>
    </ScrollPage>
  );
}

export default Header;
