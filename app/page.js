'use client';

import { useState } from "react";
import SlideContainer from "./_components/(main)/SlideContainer";
import PageLink from "./_components/(main)/PageLink";

export default function Home() {
  let [linkNum, setLinkNum] = useState([1,2,3]);

  return (
    <div>
      <SlideContainer></SlideContainer>

      <div>
        Scroll Down!
        아래방향화살표
      </div>
      
      <div>

      </div>

      <div>
        {
          linkNum.map((a,i) => <PageLink num={a} key={i} />)
        }
      </div>
    </div>
  );
}
