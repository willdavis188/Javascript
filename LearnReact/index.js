function MainContent(){
    return(
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)

// Recreate ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))) in vanilla JavaScript:
    // const h1 = document.createElement("h1")
    // h1.textContent = "Hello, React!"
    // h1.className = "header"
    // document.getElementById("root").append(h1)
// This can also be done by just adding the text to the div section in index.html

const element = <h1 className="header">This is JSX</h1>
ReactDOM.render(element, document.getElementById("root"))
