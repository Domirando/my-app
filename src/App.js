import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  Sticky,
} from "react-scroll-motion";
import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Reflection from "./Reflection";


function App() {
  return (
    <Fragment>
      <ScrollContainer>
        <Header />
        <About />
        <Reflection />


        <ScrollPage page={3}>
          <div className="flex justify-center items-center h-full">
            <span className="text-3xl flex flex-col gap-3">
              <Animator animation={MoveIn(-1000, 0)}>You can find all my mini projects on my <a href='https://github.com/Domirando' className='underline text-white bg-black p-0.5'> GitHub</a> profile</Animator>
              <Animator animation={MoveIn(1000, 0)}>
               You can read more about me in my <a href='https://www.linkedin.com/in/maftuna-vohidjonovna/' className='underline text-white bg-black p-0.5'>Linkedin</a> <a href='https://t.me/domirandos' className='underline text-white bg-black p-0.5'>Telegram</a> profiles
              </Animator>
              <Animator animation={MoveIn(-1000, 0)}><i>And don't forget checking out my little <a href='https://domirandos-blog.vercel.app/' className='underline text-white bg-black p-0.5'> Personal Blog</a> <a href='https://medium.com/@Domirando' className='underline text-white bg-black p-0.5'> Medium</a> :)</i></Animator>
            </span>
          </div>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span className="text-3xl"  >Contact with me via:</span>
            <br />
              <span className='text-xl w-7/12 flex justify-between mt-1'>
               <a href='mailto:maisiedev@gmail.com' className='underline text-white bg-black p-0.5'>Gmail</a>
               <a href='https://www.linkedin.com/in/maftuna-vohidjonovna/' className='underline text-white bg-black p-0.5'>Linkedin</a>
              </span>
          </Animator>
        </ScrollPage>
        <footer className={"flex justify-center p-4 bg-gray-50"}>&copy; Domirando 2021-2025</footer>
      </ScrollContainer>
    </Fragment>
  );
}

export default App;
