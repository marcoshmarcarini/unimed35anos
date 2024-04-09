import Diretoria from "@/components/Diretoria";
import Fundadores from "@/components/Fundadores";
import Manifesto from "@/components/Manifesto";
import Stickers from "@/components/Stickers";
import Timeline from "@/components/Timeline";
import Video from "@/components/Video";

export default function unimed() {

  return (
    <>
      <Video />
      <Timeline />
      <Fundadores />
      <Manifesto />
      <Stickers />
      <Diretoria />
    </>
  )
}