import { Animator, batch, Fade, Move, ScrollPage, Sticky } from "react-scroll-motion";

export default function Reflection () {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollPage page={2}>
      <Animator animation={FadeUp}>
        <p><i>In 2021 I would say:</i> Currently I am a student of Mukhammad al-Khawrezmi IT School and Teacher for web development enthusiasts!</p> <pre>Front-End Developer in GD Team!</pre>
        <a href='https://www.linkedin.com/feed/update/urn:li:ugcPost:6883413112834330624?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3AugcPost%3A6883413112834330624%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29'>As well as, an organizer of <span className='underline text-white bg-black p-1'> Winter Web Hackathon!</span></a>
      </Animator>
    </ScrollPage>
  )
}