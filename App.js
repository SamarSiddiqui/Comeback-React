/**
 * parentDiv
 * childDiv1
 * childDiv2
 * H1tag
 * childDiv2
 * childDiv1
 * parentDiv
 * 
 */






let parent = React.createElement("div",{id:"parent"},

    [React.createElement("div",{id:"childOne"},[React.createElement("h1",
        {id:"ChildOneHeading"}, "Hello I am H1child Tag."),React.createElement("h1",
            {id:"ChildOneHeading"}, "Hello I am H1child Tag.")]),
            React.createElement("div",{id:"childTwo"},[React.createElement("h1",
                {id:"ChildTwoHeading"}, "Hello I am H2child Tag."),React.createElement("h1",
                    {id:"ChildTwoHeading"}, "Hello I am H2child Tag.")])
        ]
)
let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)