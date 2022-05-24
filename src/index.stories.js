import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import VariousApp from "./hello";


// A textarea field can hold an unlimited number of characters or a maximum number of character specified by the max-length attribute. If disabled, the field is grayed out and you can't interact with it. A required textarea field displays an error if you don't enter any input after first interaction.
export const Various = () => VariousApp;
Various.storyName = "Textarea";
