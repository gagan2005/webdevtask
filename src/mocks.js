import {gql} from '@apollo/client';

const submitquery = gql`
mutation sendMutation(
    $message: String!
    $email: String!
  ){
    sendMessage( email :$email , message :$message){
        email
    }
}`;
const mocks = [
  {
    request: {
      query: submitquery,
      variables: {
       email : "",
       message : " ",
      },
    },
    result: {
      data: {
        email:""
      },
    },
  },
];

export {mocks , submitquery}