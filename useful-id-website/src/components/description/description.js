import './description.css';
import React from "react";

class Description extends React.Component {
    render() {
        return (
            <div>
                <section className="description-section">
                    <div className="description-text-area">
                        <h2>Background</h2>
                        <p>Currently, the most commonly used IDs in software take the one of the following forms:</p>
                        <ul>
                            <li><span className="description-id-example">3215</span> - An integer incremented for each
                                object
                            </li>
                            <li><span className="description-id-example">7c58bc53-4d6e-4635-8d1e-0ea8a759d045</span> - A
                                big ass hexidecimal string with no meaning
                            </li>
                            <li><span className="description-id-example">tCtwTa083BSL81onKsr</span> - Some string of
                                random letters and numbers with no meaning
                            </li>
                            <li><span className="description-id-example">61e30d0485bed185713a9511</span> - A
                                decomposable hexidecimal string often formed from a timestamp, hostname and some other
                                bits of data
                            </li>
                        </ul>
                        <p>None of these formulations of IDs are particularly useful.
                            Sure, they all fulfill the property that they can uniquely identify
                            objects within an information system. But only the last one gives you any
                            additional information, and even that is of limited practical use.</p>
                        <p>In modern information systems, IDs are used literally everywhere. They are often
                            stored as just strings kept within slices of data, with little additional
                            context. The only thing they can do is enable software to find the data they are
                            supposed to be referencing. If that data is not found or is hard to find,
                            the ID provides nothing more of use.</p>
                        <p>This manifesto proposes a new way of doing IDs. This new way is to construct
                            IDs that have additional properties useful to the engineers, data scientists,
                            and end users that use the system.</p>
                        <p>This manifesto does not provide an exact standard. There is no defined specification
                            of the "useful-id". Instead it provides guidance, with a set of choices, on how
                            to do IDs better.</p>
                        <p>Additionally, this manifesto is not meant to be used in situations where cryptographic
                            or security oriented properties are required. These ideas are not meant to be
                            used for generating keys, secrets, authentication tokens, passwords, pre-authenticated
                            URLs, salts for hashes or any similar string. However, it may very well be used for
                            generating identifiers that reference each of these things, such as key ids or usernames.
                        </p>
                    </div>
                </section>
                <section className="description-section">
                    <div className="description-text-area">
                        <h2>Manifesto</h2>
                        <p>IDs in software systems have only one mandatory property: that the uniquely identify
                            an object, idea, or datum, within the context that the ID is used. So long as you
                            meet that property, how you implement the ID is entirely up to you. We can do better
                            then using random strings of characters and numbers.
                        </p>

                        <p>There are a number of properties that would be useful to have in an ID, while
                            not being mandatory:</p>
                        <ol>
                            <li>Alphanumeric - Uses only vanilla latin characters, with minimal or no use of symbols
                            </li>
                            <li>Typed - informs you of what type of information is being referenced</li>
                            <li>Timestamped - lets you know when the information being referenced was created</li>
                            <li>Provenanced - helps you identify from where the information being referenced originates
                                from
                            </li>
                            <li>Owned - helps you identify who owns or created the information in question</li>
                            <li>Verbalizable - easy to say the ID verbally</li>
                            <li>Sequencable - allows you to order the information being referenced relative to other
                                related information
                            </li>
                            <li>Dense - maximizes the entropy for the size of the ID and storage space it consumes</li>
                            <li>Short - should not be unnecessarily long. It should provide no more entropy then
                                is needed
                            </li>
                            <li>Shardable - should go into binary trees and hash tables in a
                                balanced manner, without concentrating objects in just one part of
                                the data structure
                            </li>
                            <li>Globally unique - the string should be completely unique among all information systems,
                                not just the table, database, or organization it originates in
                            </li>
                            <li>Independently - should be able to be created completely independently,
                                without considering what other similar IDs are also being created at the same time
                            </li>
                            <li>Prefixed with a letter - some systems don't like IDs that start with numbers (e.g.
                                Kubernetes), so the first letter should be purely alphabetical
                            </li>
                            <li>Dereferencable - Provides a built-in way of fetching the information being referenced
                            </li>
                            <li>Copy and pastable - Its easy to select, copy, and paste the ID within the semantics of
                                common browsers, text editors, and other tools
                            </li>
                        </ol>

                        <p>The astute reader may notice that it is difficult, if not impossible, to meet
                            all these criteria simultaneously. Several of the criteria are in direct
                            tension with one another. For example, making an ID that is Dense may involve
                            using both lower and uppercase characters. But that makes it significantly
                            harder to verbalize the ID out loud. Making an ID that is short is directly
                            competitive with making an ID that is globally unique.
                        </p>
                        <p>This, we leave it up to the individual engineer to decide how to balance and
                            prioritize the different properties they want their IDs to have. This manifesto
                            merely provides a framework for thinking about IDs. We'd like to point out that the
                            commonly used formulations of IDs meet very few of these criteria - even the ones
                            that are not in tension with each other. Thus, we can do much better then the
                            commonly used GUIDs, without sacrificing anything at all.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Description;
