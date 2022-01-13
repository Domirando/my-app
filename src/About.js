import {Animator, batch, FadeIn, ScrollPage, StickyIn, ZoomIn} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
export default function About () {
    return (
        <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
                <p className="text-center text-2xl">
                    <pre>Currently I am a student of Mukhammad al-Khawrezmi IT School.</pre><pre>Teacher for web development enthusiasts!</pre> <pre> Front-End Developer in GD Team!</pre>
                </p>
            </Animator>
        </ScrollPage>
    )
}