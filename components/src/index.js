import React from 'react'
import ReactDom from 'react-dom'
import CommentDetail from "./components/CommentDetails";
import Faker from "faker";
import ApprovalCard from "./components/ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail author="Wim" date="Today at 3:00 AM" image={Faker.image.avatar()} comment="Nice!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Hein" date="Yesterday" image={Faker.image.avatar()} comment="Well done!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jan" date="Today" image={Faker.image.avatar()} comment="You did it!"/>
            </ApprovalCard>

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>


        </div>

    );
};

ReactDom.render(<App/>, document.querySelector('#root'));
