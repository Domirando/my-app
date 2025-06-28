import {Animator, batch, FadeIn, ScrollPage, StickyIn, ZoomIn} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
export default function About () {
    return (
        <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
                <p className="text-center text-2xl">
                    <p>Currently I am an open-source developer and a student majoring Chemical and Materials Engineering.</p>
                </p>
            </Animator>
        </ScrollPage>
    )
}