import './example-id-generator.css';
import React from "react";

class ExampleIDGenerator extends React.Component {
    state = {
        enableCacheBuster: true,
        examples: [],
    }

    constructor(props) {
        super(props);

        this.timer = null;
    }

    componentDidMount() {
        this.generateAllFreshExamples();

        this.currentExampleReplacementIndex = 0;
        setTimeout(() => {
            this.timer = setInterval(() => {
                this.replaceOneExampleWithFresh();
            }, 2000);
        }, 3000)
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
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

    generateExample() {
        let id = "";

        if (this.state.enableCacheBuster) {
            id += this.generateRandomString(4) + "-" + this.generateRandomString(4);
        }

        return id;
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



    render() {
        return (
            <div className="example-id-generator-wrapper">
                <section className="example-id-generator">
                    <div className="examples-area">
                        {
                            this.state.examples.map((example) =>
                            {
                                return <div className={"single-example"} key={example}>
                                    {
                                        Array.from(example).map((letter, letterIndex) => {
                                            return <span className={"single-example-letter"} key={letterIndex} style={{animationDelay: `${letterIndex*150}ms`}}>{letter}</span>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                    <div className="properties-area">
                        <div>
                            <input
                                type={"checkbox"}
                                checked={this.state.enableCacheBuster}
                                onChange={(evt) => this.setState({enableCacheBuster: !this.state.enableCacheBuster})}
                            />
                            <span>Cache Buster</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ExampleIDGenerator;
