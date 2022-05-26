import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import "./Style/Mixin.scss";
import "./Style/Vars.scss";
import "./Style/App.scss";
import "./Style/Texts.scss";
import "./Style/Layout.scss";

import { Description } from "./sections/Description";
import { EmbedModel } from "./sections/EmbedModel";
import { Hero } from "./sections/Hero/Hero";
import { Steps } from "./sections/Steps";
import { Join } from "./sections/Join";
import { Footer } from "./sections/Footer";
import { addData } from "./redux/actions";
import { Questions } from "./sections/Questions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Hero />
      <Description />
      <EmbedModel />
      <Steps />
      <Questions />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
