import { JSX } from "react";

declare module "react-speech-to-text" {

	export interface Props {
    languageCode: string;
  }
    
  export default function SpeechToText(props: Props): JSX.Element;

}
