// import { useState } from "react";

import Content from "./assets/components/Content";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Header title="OSTAD MODULE 6 ASSIGNMENT" />
            <Content />
            <Footer name="Zawad Zamil" age="26" address="Nikunja 2, Khilkhet, Dhaka"
                occupation="Jr Software Engineer @ZAAG SYS LTD"
                quote="'Rise, fall down, rise again. What doesn't kill you make you more strong.'" />
        </>
    );
}

export default App;
