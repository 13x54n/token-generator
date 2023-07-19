import React from "react";
import Navbar from "./components/Navbar";
import {
  AccordionList,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@tremor/react";
import Markdown from './mocks/ERC20.md'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function App() {
  const [markdown, setMarkdown] = React.useState("");

  fetch(Markdown)
    .then((response) => response.text())
    .then((text) => setMarkdown(text));

  return (
    <div>
      <Navbar />
      <main className="flex items-start gap-6 p-3 px-5">
        <div className="w-64">
          <h1 className="mb-3">Token Types</h1>
          <AccordionList>
            <Accordion>
              <AccordionHeader>ERC20</AccordionHeader>
              <AccordionBody className="flex flex-col">
                <Button>Standard</Button>
                <Button>Pausable</Button>
                <Button>Burnable</Button>
                <Button>Mintable</Button>
                <Button>Ownable</Button>
              </AccordionBody>
            </Accordion>
            <Accordion>
              <AccordionHeader>ERC721</AccordionHeader>
              <AccordionBody className="flex flex-col">
                <Button>Simple</Button>
                <Button>Pausable</Button>
                <Button>Burnable</Button>
                <Button>Mintable</Button>
                <Button>Ownable</Button>
              </AccordionBody>
            </Accordion>
            <Accordion>
              <AccordionHeader>ERC777</AccordionHeader>
              <AccordionBody className="flex flex-col">
                <Button>Simple</Button>
                <Button>Pausable</Button>
                <Button>Burnable</Button>
                <Button>Mintable</Button>
                <Button>Ownable</Button>
              </AccordionBody>
            </Accordion>
            <Accordion>
              <AccordionHeader>ERC1155</AccordionHeader>
              <AccordionBody className="flex flex-col">
                <Button>Simple</Button>
                <Button>Pausable</Button>
                <Button>Burnable</Button>
                <Button>Mintable</Button>
                <Button>Ownable</Button>
              </AccordionBody>
            </Accordion>
            <Accordion>
              <AccordionHeader>ERC4626</AccordionHeader>
              <AccordionBody className="flex flex-col">
                <Button>Simple</Button>
                <Button>Pausable</Button>
                <Button>Burnable</Button>
                <Button>Mintable</Button>
                <Button>Ownable</Button>
              </AccordionBody>
            </Accordion>
          </AccordionList>
        </div>
        <div className="flex-1">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
        </div>
        <div className="w-64">sdvsdv</div>
      </main>
    </div>
  );
}
