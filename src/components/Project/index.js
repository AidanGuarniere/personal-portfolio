import './Project.css'
function Project({ currentCategory }) {
  return (
    <section>
      {currentCategory.type === "full-stack" ? (
        <>
        <h3>FULLSTACK</h3>
          <div className="container">
            <div className="grid-container">
              <a
                className="grid-item item-1 full-1"
                href="https://github.com/AidanGuarniere/pizza-hunt"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-2 full-2"
                href="https://github.com/AidanGuarniere/budget-tracker"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-3 full-3"
                href="https://github.com/AidanGuarniere/note-taker"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-4 full-4"
                href="https://github.com/AidanGuarniere/Portfolio-Generator"
                alt = "example project"
              ></a>
              <a className="grid-item item-5 full-5"></a>
            </div>
          </div>
        </>
      ) : currentCategory.type === "back-end" ? (
        <>
        <h3>BACK END</h3>
          <div className="container">
            <div className="grid-container">
              <a
                className="grid-item item-1 back-1"
                href="https://github.com/AidanGuarniere/Mongo-Media"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-2 back-2"
                href="https://github.com/AidanGuarniere/fantastic-umbrella"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-3 back-3"
                href="https://github.com/AidanGuarniere/jest-another-RPG/tree/develop"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-4 back-4"
                href="https://github.com/AidanGuarniere/Portfolio-Generator"
                alt = "example project"
              ></a>
              <a className="grid-item item-5 back-5"></a>
            </div>
          </div>
        </>
      ) : currentCategory.type === "front-end" ? (
        <>
        <h3>FRONT END</h3>
          <div className="container">
            <div className="grid-container">
              <a
                className="grid-item item-1 front-1"
                href="https://aidanguarniere.github.io/covid-19-tracker/"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-2  front-2"
                href="https://aidanguarniere.github.io/random-password-generator/"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-3 front-3"
                href="https://github.com/AidanGuarniere/code-quiz"
                alt = "example project"
              ></a>
              <a
                className="grid-item item-4 front-4"
                href="https://github.com/AidanGuarniere/Portfolio-Generator"
                alt = "example project"
              ></a>
              <a className="grid-item item-5 front-5"></a>
            </div>
          </div>
        </>
      ) : (
        <>
        <h3>GISTS</h3>
          <div className="container">
            <div className="grid-container">
              <a
                className="grid-item item-1 gist-1"
                href="https://aidanguarniere.github.io/covid-19-tracker/"
                alt = "example project"
              ></a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Project;
