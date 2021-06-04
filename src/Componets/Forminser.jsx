import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

function Forminser() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name);
  });

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            Name
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="trasitioneng">Transition(eng)</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="trasition"
          aria-label="trasition"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="trasitionmal">Transition(mal)</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="trasition(mal)"
          aria-label="trasitionmal"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="category">Category</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="category(eng)"
          aria-label="categoryeng"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="categorymal">Category</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="category(mal)"
          aria-label="categorymal"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="createdby">Createdby</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="createdby"
          aria-label="createdby"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      {/* <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="parent">Parent</InputGroup.Text>
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <InputGroup.Radio aria-label="Radio button for following text input" /> 
        </InputGroup.Prepend>
      </InputGroup> */}
    </div>
  );
}

export default Forminser;
