import Header from "@/components/base-components-font-net/base-header";
import {Container} from "@nextui-org/react";
import EnterContent from "@/components/base-components-font-net/base-enter-content";
import FontImagesConent from "@/components/base-components-font-net/font-images-content";
import QuestionBlock from "@/components/base-components-font-net/base-questions";
import BigSocial from "@/components/base-components-font-net/base-big-social";
export default function Main() {

    return (
        <>
            <Header></Header>
            <Container md>
               <EnterContent/>
               <FontImagesConent/>
               <BigSocial/>
               <QuestionBlock/>
            </Container>
        </>
    )
}