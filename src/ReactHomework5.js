import React, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";

// useEffect
function UseEffectHook() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log("UseEffect mounted");
  }, []);

  useEffect(() => {
    console.log("UseEffect updated");
  }, [value]);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <div>
      <h4>React Homework 5</h4>
      <button className="HooksBtn" onClick={handleClick}>
        Activate UseEffect
      </button>
      {value && <p>UseEffect activated</p>}
    </div>
  );
}
export default UseEffectHook;

//useLayoutEffect
const UseLayoutEffectHook = () => {
  const [activated, setAcivated] = useState(false);

  useLayoutEffect(() => {
    if (activated) {
      const p = document.createElement("p");
      p.textContent = "useLayoutEffect activated";
      document.getElementById("LayoutDiv").appendChild(p);
    }
  }, [activated]);

  const handleLayoutClick = () => {
    setAcivated(true);
  };
  return (
    <div id="LayoutDiv">
      <button className="HooksBtn" onClick={handleLayoutClick}>
        UseLayoutEffect
      </button>
    </div>
  );
};

export { UseLayoutEffectHook };

//useState
const UseStateHook = () => {
  const [name, setName] = useState("");
  const names = ["Olga", "Ivan", "Julia", "Alex", "Anna"];

  const handleNameClick = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };
  return (
    <div>
      <button className="HooksBtn" onClick={handleNameClick}>
        UseState get name
      </button>
      {name && <p>Hello {name}</p>}
    </div>
  );
};

export { UseStateHook };

//useReducer

const UseReducerHook = () => {
  const initialState = {
    name: "",
    secondName: "",
    birthYear: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "secondName":
        return { ...state, secondName: action.payload };
      case "birthYear":
        return { ...state, birthYear: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedValues, setSubmittedValues] = useState({});

  const handleInputChange = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  const handleReducerClick = (type) => {
    setSubmittedValues({ ...submittedValues, [type]: state[type] });
  };

  return (
    <>
      <div className="ReducerHook">
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        <button className="HooksBtn" onClick={() => handleReducerClick("name")}>
          Show Name
        </button>
        <input
          type="text"
          placeholder="Second Name"
          value={state.secondName}
          onChange={(e) => handleInputChange(e, "secondName")}
        />
        <button
          className="HooksBtn"
          onClick={() => handleReducerClick("secondName")}
        >
          Show Second Name
        </button>
        <input
          type="text"
          placeholder="Year of Birth"
          value={state.birthYear}
          onChange={(e) => handleInputChange(e, "birthYear")}
        />
        <button
          className="HooksBtn"
          onClick={() => handleReducerClick("birthYear")}
        >
          Show Year of Birth
        </button>
      </div>
      <div>
        <p>Name: {submittedValues.name}</p>
        <p>Second Name: {submittedValues.secondName}</p>
        <p>Year of Birth: {submittedValues.birthYear}</p>
      </div>
    </>
  );
};

export { UseReducerHook };

//useRef
function UseRefHook() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleBlur = () => {
    inputRef.current.blur();
  };
  return (
    <div className="ReducerHook">
      <input ref={inputRef} placeholder="Focus me" />
      <button className="RefBtn" onClick={handleFocus}>
        Focus
      </button>
      <button className="RefBtn" onClick={handleBlur}>
        Blur
      </button>
    </div>
  );
}

export { UseRefHook };
