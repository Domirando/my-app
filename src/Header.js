import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";
import myImage from './my_image.jpg'
function Header() {
  return (
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <div>
          <img className='rounded-full w-1/4 ' src={myImage} alt='oops, unsupported image'/>
          <h1 className="text-center text-3xl font-bold">
            Hello!, from Enthusiast Front-End Developer
            <span className="ml-3 underline px-1 bg-black text-white">Domirando!</span>
          </h1>
        </div>
      </Animator>
    </ScrollPage>
  );
}

export default Header;
