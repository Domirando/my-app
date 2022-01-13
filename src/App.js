import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import {Fragment} from "react";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
  return (
      <Fragment>
          <ScrollContainer>
              <ScrollPage page={0}>
                  <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                      <h1 className="bg-black text-white p-2 text-3xl font-bold underline">Hello world!</h1>
                  </Animator>
              </ScrollPage>
              <ScrollPage page={1}>
                  <Animator animation={ZoomInScrollOut}>
                      <p className='text-2xl'>I'm FadeUpScrollOut ✨ made by <span className='bg-black text-white p-2 underline font-bold'>Domirando</span></p>
                  </Animator>
              </ScrollPage>
              <ScrollPage page={2}>
                  <Animator animation={FadeUp}>
                      <span className='text-3xl'>I'm FadeUp ⛅️</span>
                  </Animator>
              </ScrollPage>
              <ScrollPage page={3}>
                  <div className='flex justify-center items-center h-full' >
      <span className='text-3xl'>
        <Animator animation={MoveIn(-1000, 0)}>Hi there 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to see you 🙋🏻‍♀️</Animator>- I'm Domirando -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
                  </div>
              </ScrollPage>
              <ScrollPage page={4}>
                  <Animator animation={batch(Fade(), Sticky())}>
                      <span className='text-3xl'>Done</span>
                      <br/>
                      <span className='text-3xl'>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
                  </Animator>
              </ScrollPage>
          </ScrollContainer>
      </Fragment>
    );
}

export default App;
