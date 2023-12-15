import { useState } from "react";

import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton => "Components" | "JSX" | "Props" | "State"
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  //using if statement to render content
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
          label="Components"
        />
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
          label="JSX"
        />
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
          label="Props"
        />
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
          label="State"
        />
      </menu>
      {/* using if statement with clean code */}
      {tabContent}
      {/* using operator && */}
      {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
      {/* using if ternary */}
      {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
    </section>
  );
}
