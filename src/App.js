import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { Fragment } from "react";
import Header from "./Header";
import About from "./About";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
  return (
    <Fragment>
      <ScrollContainer>
        <Header />
        <About />
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <a href='https://www.linkedin.com/feed/update/urn:li:ugcPost:6883413112834330624?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3AugcPost%3A6883413112834330624%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29'>I am an organizer of <span className='underline text-white bg-black p-1'> Winter Web Hackathon!</span></a>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <div className="flex justify-center items-center h-full">
            <span className="text-3xl">
              <Animator animation={MoveIn(-1000, 0)}>You can find all my pet projects on my <a href='https://github.com/Domirando' className='underline text-white bg-black p-0.5'> GitHub</a> profile</Animator>
              <Animator animation={MoveIn(1000, 0)}>
                You can read more about me in my <a href='https://www.linkedin.com/in/maftuna-vohidjonovna/' className='underline text-white bg-black p-0.5'>Linkedin</a> profile
              </Animator>
              {/*<Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>*/}
              {/*<Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>*/}
            </span>
          </div>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span className="text-3xl">Contact with me via:</span>
            <br />
              <span className='text-xl w-7/12 flex justify-between'>
               <a href='https://t.me/domirandos' className='underline text-white bg-black p-0.5'>Telegram</a>
               <a href='https://t.me/domirandos' className='underline text-white bg-black p-0.5'>Linkedin</a>
              </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Fragment>
  );
}

export default App;
