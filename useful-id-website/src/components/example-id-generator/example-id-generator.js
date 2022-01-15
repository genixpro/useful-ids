import './example-id-generator.css';
import React from "react";

class ExampleIDGenerator extends React.Component {
    state = {
        enableCacheBuster: true,
        enableTypeName: true,
        examples: [],
    }

    timePerLetter = 150;

    constructor(props) {
        super(props);

        this.timer = null;
    }

    componentDidMount() {
        this.generateAllFreshExamples();

        this.currentExampleReplacementIndex = 0;
        this.setupExampleRefreshTimer();
    }

    componentWillUnmount() {
        this.clearExampleRefreshTimer();
    }

    setupExampleRefreshTimer() {
        this.clearExampleRefreshTimer();

        const example = this.generateExample();

        const interval = example.length * this.timePerLetter + 1500;

        this.timer = setInterval(() => {
                this.replaceOneExampleWithFresh();
            }, interval);
    }

    clearExampleRefreshTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = null;
    }


    generateRandomString(length) {
        const letters = "abcdefghijklmnopqrstuvwxyz"

        let str = "";
        for (let x = 0; x < length; x += 1) {
            const randomNumber = Math.floor((Math.random() * 100000)) % letters.length;
            str += letters[randomNumber];
        }
        return str;
    }


    generateRandomTypeName() {
        const types = [
            'user',
            'artcl',
            'cmnt',
            'entry',
            'token',
            'paym',
            'invc',
        ]

        const randomNumber = Math.floor((Math.random() * 100000)) % types.length;
        return types[randomNumber];
    }

    generateExample() {
        let id = "-";

        if (this.state.enableCacheBuster) {
            id += this.generateRandomString(4) + "-" + this.generateRandomString(4) + "-";
        }

        if (this.state.enableTypeName) {
            id += this.generateRandomTypeName(4) + "-";
        }

        return id.substr(1, id.length - 2);
    }

    generateAllFreshExamples() {
        const examples = [
            this.generateExample(),
            this.generateExample(),
            this.generateExample(),
            this.generateExample(),
        ]

        this.setState({examples});
    }

    replaceOneExampleWithFresh() {
        const examples = Array.from(this.state.examples);

        examples[this.currentExampleReplacementIndex] = this.generateExample();

        this.setState({examples});

        this.currentExampleReplacementIndex += 1;
        if (this.currentExampleReplacementIndex >= examples.length) {
            this.currentExampleReplacementIndex = 0;
        }
    }

    togglePropertyField(field) {
        this.setState({[field]: !this.state[field]}, () => this.setupExampleRefreshTimer());
    }


    render() {
        return (
            <div className="example-id-generator-wrapper">
                <section className="example-id-generator">
                    <div className="examples-area">
                        <h2>Examples</h2>

                        {
                            this.state.examples.map((example) =>
                            {
                                return <div className={"single-example"} key={example}>
                                    {
                                        Array.from(example).map((letter, letterIndex) => {
                                            return <span className={"single-example-letter"} key={letterIndex} style={{animationDelay: `${letterIndex*this.timePerLetter}ms`}}>{letter}</span>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                    <div className="properties-area">
                        <h2>Properties of the ID</h2>

                        <div>
                            <input
                                type={"checkbox"}
                                checked={this.state.enableCacheBuster}
                                onChange={(evt) => this.togglePropertyField("enableCacheBuster")}
                            />
                            <span>Cache Buster</span>
                        </div>

                        <div>
                            <input
                                type={"checkbox"}
                                checked={this.state.enableTypeName}
                                onChange={(evt) => this.togglePropertyField("enableTypeName")}
                            />
                            <span>Type Name</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ExampleIDGenerator;
