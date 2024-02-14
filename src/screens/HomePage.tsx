import React, { FC } from "react"
import logo from '../logo.svg';

interface Props {
}
const HomePage: FC<Props> = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                    return <p key={item}>{item}</p>

                })
                }

            </header>
        </div>
    )
}
export default HomePage;